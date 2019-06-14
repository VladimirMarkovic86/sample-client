(ns sample-client.preferences.controller
  (:require [common-client.preferences.controller :as ccpc]
            [sample-middle.person.entity :as smpe]))

(defn set-specific-preferences-fn
  "Sets preferences specific for this project"
  [preferences]
  (let [specific-preferences (:specific preferences)
        {{{table-rows-p :table-rows
           card-columns-p :card-columns} :person-entity} :display} specific-preferences]
    (reset!
      smpe/table-rows-a
      (or table-rows-p
          10))
    (reset!
      smpe/card-columns-a
      (or card-columns-p
          0))
   ))

(defn gather-specific-preferences-fn
  "Gathers preferences from common project"
  []
  {:display {:person-entity {:table-rows @smpe/table-rows-a
                             :card-columns @smpe/card-columns-a}}
   })

(defn popup-specific-preferences-set-fn
  "Gathers specific preferences from popup and sets values in atoms"
  []
  (ccpc/generic-preferences-set
    "person-entity"
    smpe/card-columns-a
    smpe/table-rows-a))

