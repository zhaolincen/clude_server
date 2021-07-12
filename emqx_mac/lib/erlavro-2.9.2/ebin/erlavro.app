{application,erlavro,
             [{description,"Apache Avro support for Erlang/Elixir"},
              {vsn,"2.9.2"},
              {registered,[]},
              {applications,[kernel,stdlib,jsone]},
              {env,[]},
              {modules,[avro,avro_array,avro_binary_decoder,
                        avro_binary_encoder,avro_decoder_hooks,avro_enum,
                        avro_fingerprint,avro_fixed,avro_json_decoder,
                        avro_json_encoder,avro_map,avro_ocf,avro_primitive,
                        avro_record,avro_schema_store,avro_union,avro_util]},
              {licenses,["Apache License 2.0"]},
              {links,[{"Github","https://github.com/klarna/erlavro"}]},
              {build_tools,["make","rebar","rebar3"]},
              {files,["src","include","rebar.config","rebar.config.script",
                      "README.md","LICENSE","Makefile","elvis.config"]}]}.