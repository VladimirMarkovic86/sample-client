(ns sample-client.person.html
  (:require [htmlcss-lib.core :refer [gen div a]]
            [framework-lib.core :refer [create-entity gen-table]]
            [sample-client.person.entity :refer [table-conf-fn]]
            [language-lib.core :refer [get-label]]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [sample-middle.functionalities :as fns]))

(defn nav
  "Generate ul HTML element
   that represents navigation menu"
  []
  (gen
    [(when (contains?
             @allowed-actions
             fns/person-create)
       (div
         (a
           (get-label 4)
           {:id "aCreateId"}
           {:onclick {:evt-fn create-entity
                      :evt-p (table-conf-fn)}})
        ))
     (when (contains?
             @allowed-actions
             fns/person-read)
       (div
         (a
           (get-label 5)
           {:id "aShowAllId"}
           {:onclick {:evt-fn gen-table
                      :evt-p (table-conf-fn)}})
        ))]
   ))

