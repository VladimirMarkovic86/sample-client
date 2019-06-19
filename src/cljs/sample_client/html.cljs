(ns sample-client.html
  (:require [htmlcss-lib.core :refer [h2 p div]]
            [sample-middle.functionalities :as smfns]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [sample-client.person.html :as ph]
            [sample-client.chart.html :as ch]
            [sample-client.test-bot :refer [run-test]]
            [language-lib.core :refer [get-label]]))

(defn home-page-content
  "Home page content"
  []
  [(div
     [(h2
        (get-label 62))
      (p
        (get-label 63))
      ]
     {:class "row-1-4"})
   (div
     [(div
        nil
        {:class "col-1-4"})
      (div
        nil
        {:class "col-2-4 logo-hi-res"})
      (div
        nil
        {:class "col-1-4"})
      ]
     {:class "row-2-4"})
   (div
     nil
     {:class "row-1-4"})
   ])

(defn custom-menu
  "Render menu items for user that have privilege for them"
  []
  [(ph/nav)
   (ch/nav)
   (when (contains?
           @allowed-actions
           smfns/test-person-entity)
     {:label (get-label 1010)
      :id "test-person-entity-nav-id"
      :evt-fn run-test})])

