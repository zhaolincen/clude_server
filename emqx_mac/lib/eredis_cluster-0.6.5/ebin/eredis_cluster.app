{application,eredis_cluster,
             [{description,"Redis Cluster pool"},
              {vsn,"0.6.5"},
              {modules,[eredis_cluster,eredis_cluster_hash,
                        eredis_cluster_monitor,eredis_cluster_pool,
                        eredis_cluster_pool_worker,eredis_cluster_sup]},
              {registered,[]},
              {applications,[kernel,stdlib]},
              {mod,{eredis_cluster,[]}},
              {env,[]}]}.