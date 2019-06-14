(ns sample-client.preferences.html
  (:require [htmlcss-lib.core :refer [div label]]
            [language-lib.core :refer [get-label]]
            [common-client.preferences.html :as ccph]
            [sample-middle.person.entity :as smpe]))

(defn build-specific-display-tab-content-fn
  "Builds specific display tab content"
  []
  [(div
     [(label
        (get-label
          1028))
      (div
        (ccph/generate-column-number-dropdown-options
          @smpe/card-columns-a))
      (div
        (ccph/generate-row-number-dropdown-options
          @smpe/table-rows-a))
      ]
     {:class "parameter"
      :parameter-name "person-entity"})])

