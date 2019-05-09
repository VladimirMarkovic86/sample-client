(ns sample-client.chart.html
  (:require [language-lib.core :refer [get-label]]
            [sample-client.chart.controller :refer [display-charts]]))

(defn nav
  "Returns map of menu item and it's sub items"
  []
  {:label (get-label 76)
   :id "chart-nav-id"
   :evt-fn display-charts})

