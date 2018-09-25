(ns sample-client.html
  (:require [htmlcss-lib.core :refer [a]]
            [sample-middle.functionalities :as smfns]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [sample-client.person.controller :as pc]
            [language-lib.core :refer [get-label]]))

(defn custom-menu
  "Render menu items for user that have privilege for them"
  []
  [(when (contains?
           @allowed-actions
           smfns/person-read)
     (a
       (get-label 1001)
       {:id "aPersonId"}
       {:onclick {:evt-fn pc/nav-link}}))]
 )

