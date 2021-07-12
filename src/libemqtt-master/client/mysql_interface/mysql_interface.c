#include "mysql_interface.h"


void mysql_connect_data(mysql_info_t *Mysql)
{
    if(!mysql_init(Mysql->mysql))
    {
        printf("mysql init if fail %s\n",mysql_error(Mysql->mysql));
        return;
    }
    if(!mysql_real_connect(Mysql->mysql,Mysql->host,Mysql->user,Mysql->pwd,Mysql->db_name,0,NULL,0))
    {
        printf("mysql init if fail %s\n",mysql_error(Mysql->mysql));
        return;
    }
    printf("Mysql connect is ok \n");
#if LOG_EN
    printf("\n");
    printf("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
    printf("\n");
    printf("\n");
    printf("Client Mysql Version = %s\n",mysql_get_client_info());
    printf("Server Mysql Version = %s\n",mysql_get_server_info(Mysql->mysql));
    printf("\n");
    printf("\n");
    printf("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
#endif
   
}

int check_user(mysql_info_t *Mysql,char *user , char *pwd)
{
    char SQL[128];
    mysql_connect_data(Mysql);
    sprintf(SQL,"SET CHARACTER SET utf8");
    if (mysql_query(Mysql->mysql,SQL))
    {
        printf("SQL is Fail %s \n",mysql_error(Mysql->mysql));
    }
    sprintf(SQL,"SELECT * FROM user WHERE user='%s' AND password='%s';",user,pwd);
    if (mysql_query(Mysql->mysql,SQL))
    {
        printf("SQL is Fail %s \n",mysql_error(Mysql->mysql));
    }
    MYSQL_RES *res;
    MYSQL_FIELD *field;
    MYSQL_ROW   *row_data;
    int NumFields;
    res = mysql_store_result(Mysql->mysql);
    NumFields = mysql_num_fields(res);
    field = mysql_fetch_field(res);
    int i;
    for(i=0;i<NumFields;i++)
    {
        printf("%s \t",field[i].name);
    }
    printf("\n");
    uint64_t res_num;
    res_num = mysql_num_rows(res);
    printf("row is %ld \n",res_num);
    while(row_data = mysql_fetch_row(res))
    {
        for(i=0;i<NumFields;i++)
        {
        printf("%s \t",row_data[i]);
        }
        printf("\n");
    }
    

    if(res_num)
    {
        return 1;
    }else{
        return 0;
    }
    mysql_close(Mysql->mysql);
}

int main()
{
    MYSQL mysql;
    mysql_info_t Mysql_data = {
        &mysql,
        "127.0.0.1",
        "root",
        "zhaolc",
        "my_server"
    };
   if(!check_user(&Mysql_data,"zhaolc","zhaolc"))
    {
        printf("用户名或密码错误\n");
    }else{
        printf("登录成功 \n");
    }


    return 0;
}