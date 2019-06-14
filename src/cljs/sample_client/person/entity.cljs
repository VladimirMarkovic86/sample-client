(ns sample-client.person.entity
  (:require [framework-lib.core :refer [gen-table]]
            [language-lib.core :refer [get-label]]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [sample-middle.collection-names :refer [person-cname]]
            [sample-middle.person.entity :as smpe]))

(def entity-type
     person-cname)

(defn gender-labels
  "Returns gender type property labels"
  []
  [[(get-label 1018)
    smpe/gender-male]
   [(get-label 1019)
    smpe/gender-female]])

(defn diet-labels
  "Returns diet type property labels"
  []
  [[(get-label 1016)
    smpe/diet-not-vegetarian]
   [(get-label 1017)
    smpe/diet-vegetarian]])

(defn activity-labels
  "Returns activity type property labels"
  []
  [[(get-label 1011)
    smpe/activity-mainly-sitting]
   [(get-label 1012)
    smpe/activity-easy-physical-labor]
   [(get-label 1013)
    smpe/activity-medium-physical-labor]
   [(get-label 1014)
    smpe/activity-hard-physical-labor]
   [(get-label 1015)
    smpe/activity-very-hard-physical-labor]])

(defn form-conf-fn
  "Form configuration for person entity"
  []
  {:id :_id
   :type entity-type
   :entity-name (get-label 1001)
   :fields {:first-name {:label (get-label 1002)
                         :input-el "text"
                         :attrs {:placeholder (get-label 1002)
                                 :required true}}
            :last-name {:label (get-label 1003)
                        :input-el "text"
                        :attrs {:placeholder (get-label 1003)
                                :required true}}
            :email {:label (get-label 14)
                    :input-el "email"
                    :attrs {:placeholder (get-label 14)
                            :required true}}
            :height {:label (get-label 1004)
                     :input-el "number"
                     :attrs {:placeholder (get-label 1004)
                             :step "0.1"
                             :required true}}
            :weight {:label (get-label 1005)
                     :input-el "number"
                     :attrs {:placeholder (get-label 1005)
                             :step "0.1"
                             :required true}}
            :birthday {:label (get-label 1006)
                       :input-el "date"
                       :attrs {:required true}}
            :gender {:label (get-label 1007)
                     :input-el "radio"
                     :options (gender-labels)
                     :attrs {:required true}}
            :diet {:label (get-label 1008)
                   :input-el "radio"
                   :options (diet-labels)
                   :attrs {:required true}}
            :activity {:label (get-label 1009)
                       :input-el "select"
                       :attrs {:required true}
                       :options (activity-labels)}}
   :fields-order [:first-name
                  :last-name
                  :email
                  :birthday
                  :height
                  :weight
                  :gender
                  :diet
                  :activity]})

(defn columns-fn
  "Table columns for person entity"
  []
  {:projection [:first-name
                :last-name
                ;:email
                :height
                :weight
                :birthday
                :gender
                ;:diet
                ;:activity
                ]
   :style
    {:first-name
      {:content (get-label 1002)
       :th {:style {:width "15%"}}
       :td {:style {:width "15%"
                    :text-align "left"}}
       }
     :last-name
      {:content (get-label 1003)
       :th {:style {:width "15%"}}
       :td {:style {:width "15%"
                    :text-align "left"}}
       }
     :email
      {:content (get-label 14)
       :th {:style {:width "100px"}}
       :td {:style {:width "100px"
                    :text-align "left"}}
       }
     :height
      {:content (get-label 1004)
       :th {:style {:width "5%"}}
       :td {:style {:width "5%"}}
       }
     :weight
      {:content (get-label 1005)
       :th {:style {:width "5%"}}
       :td {:style {:width "5%"}}
       }
     :birthday
      {:content (get-label 1006)
       :th {:style {:width "20%"}}
       :td {:style {:width "20%"}}
       }
     :gender
      {:content (get-label 1007)
       :th {:style {:width "10%"}}
       :td {:style {:width "10%"}}
       :labels (into
                 #{}
                 (gender-labels))
       }
     :diet
      {:content (get-label 1008)
       :th {:style {:width "40px"}}
       :td {:style {:width "40px"}}
       :labels (into
                 #{}
                 (diet-labels))
       }
     :activity
      {:content (get-label 1009)
       :th {:style {:width "40px"}}
       :td {:style {:width "40px"}}
       :labels (into
                 #{}
                 (activity-labels))
       }}
    })

(defn query-fn
  "Table query for person entity"
  []
  {:entity-type entity-type
   :entity-filter {}
   :projection (:projection (columns-fn))
   :projection-include true
   :qsort {:first-name 1}
   :pagination true
   :current-page 0
   :rows (smpe/calculate-rows)
   :collation {:locale "sr"}})

(defn table-conf-fn
  "Table configuration for person entity"
  []
  {:preferences smpe/preferences
   :query-fn query-fn
   :query (query-fn)
   :columns (columns-fn)
   :form-conf (form-conf-fn)
   :actions [:details :edit :delete]
   :allowed-actions @allowed-actions
   :reports-on true
   :search-on true
   :search-fields [:first-name :last-name :email]
   :render-in ".content"
   :table-class "entities"
   :table-fn gen-table})

