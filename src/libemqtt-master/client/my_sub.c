#include <libemqtt.h>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <netinet/tcp.h>
#include <signal.h>
#include <mysql/mysql.h>

#define CLIENT_ID "ubuntu-12345"
#define USER_NAME "ubuntu"
#define PWD       "admin"
#define RCVBUFSIZE 1024

int socket_id;
int keepalive = 60;
mqtt_broker_handle_t broker;
uint8_t packet_buffer[RCVBUFSIZE];

int read_packet(int timeout)
{
	if(timeout > 0)
	{
		fd_set readfds;
		struct timeval tmv;

		// Initialize the file descriptor set
		FD_ZERO (&readfds);
		FD_SET (socket_id, &readfds);

		// Initialize the timeout data structure
		tmv.tv_sec = timeout;
		tmv.tv_usec = 0;

		// select returns 0 if timeout, 1 if input available, -1 if error
		if(select(1, &readfds, NULL, NULL, &tmv))
			return -2;
	}

	int total_bytes = 0, bytes_rcvd, packet_length;
	memset(packet_buffer, 0, sizeof(packet_buffer));

	while(total_bytes < 2) // Reading fixed header
	{
		if((bytes_rcvd = recv(socket_id, (packet_buffer+total_bytes), RCVBUFSIZE, 0)) <= 0)
			return -1;
		total_bytes += bytes_rcvd; // Keep tally of total bytes
	}

	packet_length = packet_buffer[1] + 2; // Remaining length + fixed header length

	while(total_bytes < packet_length) // Reading the packet
	{
		if((bytes_rcvd = recv(socket_id, (packet_buffer+total_bytes), RCVBUFSIZE, 0)) <= 0)
			return -1;
		total_bytes += bytes_rcvd; // Keep tally of total bytes
	}

	return packet_length;
}

int send_packet(void* socket_info, const void* buf, unsigned int count)
{
	int fd = *((int*)socket_info);
	return send(fd, buf, count, 0);
}

int init_socket(mqtt_broker_handle_t* broker, const char* hostname, short port)
{
	int flag = 1;
	int keepalive = 60; // Seconds

	// 创建套件字
	if((socket_id = socket(PF_INET, SOCK_STREAM, 0)) < 0)
		return -1;

	// Disable Nagle Algorithm
	if (setsockopt(socket_id, IPPROTO_TCP, TCP_NODELAY, (char*)&flag, sizeof(flag)) < 0)
		return -2;

	struct sockaddr_in socket_address;
	// 赋值连接IP地址信息
	socket_address.sin_family = AF_INET;
	socket_address.sin_port = htons(port);
	socket_address.sin_addr.s_addr = inet_addr(hostname);

	// 连接
	if((connect(socket_id, (struct sockaddr*)&socket_address, sizeof(socket_address))) < 0)
		return -1;

	// MQTT stuffs
	mqtt_set_alive(broker, keepalive);
	broker->socket_info = (void*)&socket_id;
	broker->send = send_packet;

	return 0;
}

void sub_data(mqtt_broker_handle_t *broker,char *topic)
{
    int i;
    uint16_t msgid;
    for(i=0;i<10;i++)
    {
        mqtt_subscribe(broker, topic,&msgid);
    }

	mqtt_subscribe(broker, "/sys/topic",&msgid);
}

void alive(int sig)
{
	printf("Timeout! Sending ping...\n");
	mqtt_ping(&broker);

	alarm(keepalive);
}

void term(int sig)
{
	printf("Goodbye!\n");
	// >>>>> DISCONNECT
	mqtt_disconnect(&broker);
	close(socket_id);

	exit(0);
}


int main()
{
	MYSQL  mysql;
	char query[128];
	mysql_init(&mysql);
	if((&mysql) == NULL)
	{
		printf("Mysql is Null\n");
		return -1;
	}
	if(!(mysql_real_connect(&mysql,"127.0.0.1","root","zhaolc","my_server",0,NULL,0)))
	{
		printf("Failed to connrct to database: Error: %s\n",mysql_error(&mysql));
		return -1;
	}
	printf("mysql connect is ok \n");
	printf("++++++++++++++++++++++++++++++++++++++\n");
	printf("\n");
	printf("\n");
	printf("%s\n",mysql_get_client_info());
	printf("\n");
	printf("\n");
	printf("++++++++++++++++++++++++++++++++++++++\n");

    //初始化mqtt数据结构提
    mqtt_init(&broker,CLIENT_ID);
    //填充mqtt认证内容
    mqtt_init_auth(&broker,USER_NAME,PWD);
    //socket初始化，并赋值结构提sockid，相关函数等
    init_socket(&broker,"127.0.0.1",1883);
    //MQTT服务iqi连接
    if(mqtt_connect(&broker) == 1)
    {
        printf("mqtt send connect is ok ...\n");
    }
    if(read_packet(0) < 3)
    {
        printf("recv cmd is fail\n");
    }
    //20 02 00 00
    if (packet_buffer[3] == 0x00)
    {
        printf("connect is ok %#x  %#x %#x %#x ...\n",packet_buffer[0],packet_buffer[1],packet_buffer[2],packet_buffer[3]);
    }

	signal(SIGALRM, alive);
	alarm(keepalive);
	signal(SIGINT, term);

	sprintf(query,"SET CHARACTER SET utf8");
	if(mysql_real_query(&mysql,query,strlen(query)))
	{
		printf("utf8 is fail\n");
		mysql_close(&mysql);
		return -1;
	}
	printf("set utf8 is ok \n");
	sprintf(query,"SELECT * FROM topic_topic");
	if(mysql_real_query(&mysql,query,strlen(query)))
	{
		printf("mysql cmd is fail\n");
		mysql_close(&mysql);
		return -1;
	}
	printf("select from is ok \n");
	MYSQL_RES *res;
	MYSQL_FIELD *field;
	res = mysql_store_result(&mysql);
	unsigned int num_fields;
	num_fields = mysql_num_fields(res);

	field = mysql_fetch_field(res);
	for(int i=0;i<num_fields;i++)
	{
		printf("%s\t",field[i].name);
	}
	printf("\n");
	unsigned long long rows;
	rows = mysql_num_rows(res);
	//printf("rows = %lld \n",rows);
	MYSQL_ROW row;
	while((row = mysql_fetch_row(res)))
	{
		printf("%s \n",row[2]);
		if( !(strcmp(row[3],"发布"))){
			sub_data(&broker,row[2]);
		}
	}
   // 

    while(1)
    {   
        if(read_packet(0) > 0)
        {
            if(MQTTParseMessageType(packet_buffer) == MQTT_MSG_PUBLISH){
                uint8_t topic[128];
                uint8_t data[2048];
                int len;
                len = mqtt_parse_pub_topic(packet_buffer,topic);
                topic[len] = '\0';
                len = mqtt_parse_publish_msg(packet_buffer,data);
                data[len] =  '\0';
                printf("topic = %s\n    data = %s  \n",topic,data); 
				//sprintf(query,"UPDATE topic_topic SET T_Data='%s' WHERE T_Dir='%s';",data,topic);
				//if(mysql_real_query(&mysql,query,strlen(query)))
				//{
				//	printf("mysql query is fail :%s\n",mysql_error(&mysql));
				//}

            } 
        }

    }

    return 0;
}