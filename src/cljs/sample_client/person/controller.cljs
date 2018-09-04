(ns sample-client.person.controller
  (:require [js-lib.core :as md]
            [framework-lib.core :refer [gen-table]]
            [sample-client.person.entity :refer [table-conf-fn]]
            [sample-client.person.html :as ohtml]))

(defn nav-link
  "Process these functions after link is clicked in main menu"
  []
  (md/remove-element-content
    ".content")
  (md/append-element
    ".content"
    (gen-table
      (table-conf-fn)))
  (md/remove-element-content
    ".sidebar-menu")
  (md/append-element
    ".sidebar-menu"
    (ohtml/nav))
 )

