{application,emqx_backend_pgsql,
             [{description,"EMQ X PostgreSQL Backend"},
              {vsn,"4.3.0"},
              {modules,[emqx_backend_pgsql,emqx_backend_pgsql_app,
                        emqx_backend_pgsql_batcher,emqx_backend_pgsql_cli,
                        emqx_backend_pgsql_sup]},
              {registered,[emqx_backend_pgsql_sup]},
              {applications,[kernel,stdlib,epgsql,ecpool]},
              {mod,{emqx_backend_pgsql_app,[]}}]}.