{application,emqx_backend_timescale,
             [{description,"EMQ X Timescale Backend"},
              {vsn,"4.3.0"},
              {modules,[emqx_backend_timescale,emqx_backend_timescale_app,
                        emqx_backend_timescale_cli,
                        emqx_backend_timescale_sup]},
              {registered,[emqx_backend_timescale_sup]},
              {applications,[kernel,stdlib,epgsql,ecpool]},
              {mod,{emqx_backend_timescale_app,[]}}]}.