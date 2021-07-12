功能：
    集成python Django
    等待编辑...

2021.7.12更新
    更新ReadMe.md
    更改仓库为GitHub
    修改了libemqtt原始源码，去除了py文件，修改了Makefile
    添加了MAC版 emqtt服务端，进入该目录下执行./bin/emqx start 即可开启服务
    服务web管理地址：127.0.0.1:18083

使用说明：
    详细步骤文档链接：https://www.yuque.com/books/share/834a2620-fae7-4a77-8e84-c8a14af59f8e?# 《全栈物联网平台搭建》
    由于语雀客户端更新较慢，后期会更新到github

    1、创建python虚拟环境3.6 - 3.8之间，其他版本未测试
    2、Django 2.2版本
    3、确定已经安装mysql-server，且将root账号密码修改Django框架setting.py
    4、确定安装了mysql的py操作库
    5、mysql创建库my_server，或者修改setting.py库名
    5、进行数据迁移，python manage.py migrate
    6、测试运行。python manage.py runserver
