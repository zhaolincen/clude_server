{application,emqx_bridge_kafka,
             [{description,"EMQ X Bridge to Kafka"},
              {vsn,"4.3.0"},
              {modules,[emqx_bridge_kafka,emqx_bridge_kafka_app,
                        emqx_bridge_kafka_cli,emqx_bridge_kafka_sup]},
              {registered,[emqx_bridge_kafka_sup]},
              {applications,[kernel,stdlib,wolff,erlavro,jsx]},
              {mod,{emqx_bridge_kafka_app,[]}}]}.
