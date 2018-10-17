(ns sample-client.core
  (:gen-class)
  (:require [ajax-lib.http.status-code :as stc]
            [ajax-lib.http.mime-type :as mt]
            [ajax-lib.http.entity-header :as eh]
            [server-lib.core :as srvr]
            [environ.core :refer [env]]))

(defn routing-not-found
  "Default routing if file is not found"
  [& args]
  {:status (stc/not-found)
   :headers {(eh/content-type) (mt/text-plain)}
   :body (str {:status "success"})})

(defn start-server
  "Start server"
  []
  (try
    (srvr/start-server
      routing-not-found
      nil
      (or (env :port)
          1613)
      #_{:keystore-file-path
        "certificate/sample_client.jks"
       :keystore-password
        "ultras12"})
    (catch Exception e
      (println (.getMessage e))
     ))
 )

(defn stop-server
  "Stop server"
  []
  (try
    (srvr/stop-server)
    (catch Exception e
      (println (.getMessage e))
     ))
 )

(defn unset-restart-server
  "Stop server, unset server atom to nil
   reload project, start new server instance"
  []
  (stop-server)
  (use 'sample-client.core :reload)
  (start-server))

(defn -main [& args]
  (start-server))

