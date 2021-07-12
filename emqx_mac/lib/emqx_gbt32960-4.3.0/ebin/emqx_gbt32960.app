{application,emqx_gbt32960,
             [{description,"GBT-32960 Protocol gateway"},
              {vsn,"4.3.0"},
              {modules,[emqx_gbt32960,emqx_gbt32960_app,emqx_gbt32960_channel,
                        emqx_gbt32960_conn,emqx_gbt32960_frame,
                        emqx_gbt32960_sup]},
              {registered,[emqx_32960_sup]},
              {applications,[kernel,stdlib,esockd]},
              {mod,{emqx_gbt32960_app,[]}}]}.