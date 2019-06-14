(ns sample-client.person.html
  (:require [framework-lib.core :refer [create-entity gen-table]]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [language-lib.core :refer [get-label]]
            [sample-client.person.entity :refer [table-conf-fn]]
            [sample-middle.functionalities :as smfns]))

(defn nav
  "Returns map of menu item and it's sub items"
  []
  (when (or (contains?
              @allowed-actions
              smfns/person-create)
            (contains?
              @allowed-actions
              smfns/person-read))
    {:label (get-label 1001)
     :id "person-nav-id"
     :sub-menu [(when (contains?
                        @allowed-actions
                        smfns/person-create)
                  {:label (get-label 4)
                   :id "person-create-nav-id"
                   :evt-fn create-entity
                   :evt-p table-conf-fn})
                (when (contains?
                        @allowed-actions
                        smfns/person-read)
                  {:label (get-label 5)
                   :id "person-show-all-nav-id"
                   :evt-fn gen-table
                   :evt-p table-conf-fn})]})
 )

