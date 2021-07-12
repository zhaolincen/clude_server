SRC=src
INC=include
LIB=.
CLIENT=client

CC=gcc
CCFLAGS=-I$(INC) -Wall -O
LDFLAGS=-L$(LIB) -lemqtt -lmysqlclient
AR=ar

PYTHON_VER=2.7
PYTHON_SRC=src/python
PYTHON_CCFLAGS=-I$(INC) -I$(PYTHON_SRC) -I/usr/include/python$(PYTHON_VER) -Wall -O -fPIC
PYTHON_LDFLAGS=-shared



c: $(CLIENT)/my_pub $(CLIENT)/my_sub

$(CLIENT)/my_pub: libemqtt.a my_pub.o
	$(CC) my_pub.o -o $(CLIENT)/my_pub $(LDFLAGS)

my_pub.o: $(CLIENT)/my_pub.c $(INC)/libemqtt.h
	$(CC) $(CCFLAGS) -c $(CLIENT)/my_pub.c -o my_pub.o

$(CLIENT)/my_sub: libemqtt.a my_sub.o
	$(CC) my_sub.o -o $(CLIENT)/my_sub $(LDFLAGS)

my_sub.o: $(CLIENT)/my_sub.c $(INC)/libemqtt.h
	$(CC) $(CCFLAGS) -c $(CLIENT)/my_sub.c -o my_sub.o





python: python-libemqtt.o python-mqtt.o python-mqtt_packet.o libemqtt-python.o
	$(CC) $(PYTHON_LDFLAGS)  python-libemqtt.o python-mqtt.o python-mqtt_packet.o libemqtt-python.o -o $(CLIENT)/libemqtt.so

python-libemqtt.o: $(PYTHON_SRC)/python-libemqtt.c $(INC)/libemqtt.h $(PYTHON_SRC)/python-mqtt.h $(PYTHON_SRC)/python-mqtt_packet.h
	$(CC) $(PYTHON_CCFLAGS) -c $(PYTHON_SRC)/python-libemqtt.c -o python-libemqtt.o

python-mqtt.o: $(PYTHON_SRC)/python-mqtt.c $(INC)/libemqtt.h $(PYTHON_SRC)/python-mqtt.h
	$(CC) $(PYTHON_CCFLAGS) -c $(PYTHON_SRC)/python-mqtt.c -o python-mqtt.o

python-mqtt_packet.o: $(PYTHON_SRC)/python-mqtt_packet.c $(INC)/libemqtt.h $(PYTHON_SRC)/python-mqtt_packet.h
	$(CC) $(PYTHON_CCFLAGS) -c $(PYTHON_SRC)/python-mqtt_packet.c -o python-mqtt_packet.o

libemqtt-python.o: $(SRC)/libemqtt.c $(INC)/libemqtt.h
	$(CC) $(PYTHON_CCFLAGS) -c $(SRC)/libemqtt.c -o libemqtt-python.o


python3:
	@echo "Not yet available. Sorry!"





libemqtt.a: libemqtt.o
	$(AR) rcs libemqtt.a libemqtt.o

libemqtt.o: $(SRC)/libemqtt.c $(INC)/libemqtt.h
	$(CC) $(CCFLAGS) -c $(SRC)/libemqtt.c -o libemqtt.o





all: c python





clean:
	rm -f *.o libemqtt.a

dist-clean: clean
	rm -f $(CLIENT)/my_pub $(CLIENT)/my_sub $(CLIENT)/libemqtt.so
