{application,emqx_backend_redis,
             [{description,"EMQ X Redis Backend"},
              {vsn,"4.3.0"},
              {modules,[emqx_backend_redis,emqx_backend_redis_app,
                        emqx_backend_redis_cli,emqx_backend_redis_sub,
                        emqx_backend_redis_sup]},
              {registered,[emqx_backend_redis_sup]},
              {applications,[kernel,stdlib,eredis,eredis_cluster,ecpool]},
              {mod,{emqx_backend_redis_app,[]}}]}.