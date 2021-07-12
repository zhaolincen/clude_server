SRC=src
INC=include
LIB=.
CLIENT=client

CC=gcc
CCFLAGS=-I$(INC) -Wall -O
LDFLAGS=-L$(LIB) -lemqtt -lmysqlclient
AR=ar



c: $(CLIENT)/my_pub $(CLIENT)/my_sub

$(CLIENT)/my_pub: libemqtt.a my_pub.o
	$(CC) my_pub.o -o $(CLIENT)/my_pub $(LDFLAGS)

my_pub.o: $(CLIENT)/my_pub.c $(INC)/libemqtt.h
	$(CC) $(CCFLAGS) -c $(CLIENT)/my_pub.c -o my_pub.o

$(CLIENT)/my_sub: libemqtt.a my_sub.o
	$(CC) my_sub.o -o $(CLIENT)/my_sub $(LDFLAGS)

my_sub.o: $(CLIENT)/my_sub.c $(INC)/libemqtt.h
	$(CC) $(CCFLAGS) -c $(CLIENT)/my_sub.c -o my_sub.o



libemqtt.a: libemqtt.o
	$(AR) rcs libemqtt.a libemqtt.o

libemqtt.o: $(SRC)/libemqtt.c $(INC)/libemqtt.h
	$(CC) $(CCFLAGS) -c $(SRC)/libemqtt.c -o libemqtt.o




clean:
	rm -f *.o libemqtt.a

dist-clean: clean
	rm -f $(CLIENT)/my_pub $(CLIENT)/my_sub $(CLIENT)/libemqtt.so
