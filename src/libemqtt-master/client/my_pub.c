#include <libemqtt.h>

#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <linux/tcp.h>
#define CLIENT_ID "admin"
#define PWD       "admin"
#define RCVBUFSIZE 1024

int socket_id;
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
	int keepalive = 3; // Seconds

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

void push_data(mqtt_broker_handle_t *broker,int interval,int time)
{
    int i;
    char topic[128];
    char data[128];
    for(i=0;i<20;i++)
    {
        sprintf(topic,"/FEWsrEIAKKw/event/onoff/",i);
        sprintf(data,"%d",i);
        mqtt_publish(broker, topic,data, 0);
        usleep(interval);
    }

    sleep(time);
}

int main()
{

    //初始化mqtt数据结构提
    mqtt_init(&broker,CLIENT_ID);
    //填充mqtt认证内容
    mqtt_init_auth(&broker,CLIENT_ID,PWD);
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
        printf("connect is ok ...\n");
    }
  
    while(1){
    push_data(&broker,3000000,5);
	}
 

    return 0;
}