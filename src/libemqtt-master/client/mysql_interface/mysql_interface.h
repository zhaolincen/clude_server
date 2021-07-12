#ifndef __MYSQL_INTERFACE_H__
#define __MYSQL_INTERFACE_H__
#include <stdio.h>
#include <mysql/mysql.h>


#define LOG_EN 0

typedef struct mysql_interface
{
    MYSQL *mysql;
    char  *host;
    char  *user;
    char  *pwd;
    char  *db_name;
    /* data */
}mysql_info_t;




#endif