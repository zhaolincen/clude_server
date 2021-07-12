{application,emqx_backend_mongo,
             [{description,"EMQ X MongoDB Backend"},
              {vsn,"4.3.0"},
              {modules,[emqx_backend_mongo,emqx_backend_mongo_app,
                        emqx_backend_mongo_cli,emqx_backend_mongo_sup]},
              {registered,[emqx_backend_mongo_sup]},
              {applications,[kernel,stdlib,mongodb,ecpool]},
              {mod,{emqx_backend_mongo_app,[]}}]}.
