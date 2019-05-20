(ns sample-client.chart.html
  (:require [language-lib.core :refer [get-label]]
            [sample-client.chart.controller :refer [display-charts]]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [sample-middle.functionalities :as smfns]))

(defn nav
  "Returns map of menu item and it's sub items"
  []
  (when (contains?
          @allowed-actions
          smfns/chart)
    {:label (get-label 1027)
     :id "chart-nav-id"
     :evt-fn display-charts}))

