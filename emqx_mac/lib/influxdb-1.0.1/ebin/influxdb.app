{application,influxdb,
             [{description,"InfluxDB Client"},
              {vsn,"1.0.1"},
              {modules,[influxdb,influxdb_app,influxdb_http,influxdb_line,
                        influxdb_sup,influxdb_udp,influxdb_worker_udp]},
              {registered,[influxdb_sup]},
              {applications,[kernel,stdlib,ehttpc,ecpool]},
              {mod,{influxdb_app,[]}}]}.
