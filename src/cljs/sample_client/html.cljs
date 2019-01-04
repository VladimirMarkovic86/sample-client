(ns sample-client.html
  (:require [htmlcss-lib.core :refer [h2 p]]
            [sample-middle.functionalities :as smfns]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [sample-client.person.html :as ph]
            [sample-client.test-bot :refer [run-test]]
            [language-lib.core :refer [get-label]]))

(defn home-page-content
  "Home page content"
  []
  [(h2
     (get-label 62))
   (p
     (get-label 63))]
 )

(defn custom-menu
  "Render menu items for user that have privilege for them"
  []
  [(ph/nav)
   (when (contains?
           @allowed-actions
           smfns/test-person-entity)
     {:label (get-label 1010)
      :id "test-person-entity-nav-id"
      :evt-fn run-test})])

