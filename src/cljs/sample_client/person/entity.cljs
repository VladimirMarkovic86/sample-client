(ns sample-client.person.entity
  (:require [framework-lib.core :refer [gen-table]]
            [language-lib.core :refer [get-label]]
            [common-client.allowed-actions.controller :refer [allowed-actions]]))

(def entity-type
     "person")

(def form-conf
     {:id :_id
      :type entity-type
      :entity-name (get-label 1001)
      :fields {:first-name {:label (get-label 1002)
                            :input-el "text"
                            :attrs {:required "required"}}
               :last-name {:label (get-label 1003)
                           :input-el "text"
                           :attrs {:required "required"}}
               :email {:label (get-label 14)
                       :input-el "email"
                       :attrs {:required "required"}}
               :height {:label (get-label 1004)
                        :input-el "number"
                        :attrs {:step "0.1"
                                :required "required"}}
               :weight {:label (get-label 1005)
                        :input-el "number"
                        :attrs {:step "0.1"
                                :required "required"}}
               :birthday {:label (get-label 1006)
                          :input-el "date"
                          :attrs {:required "required"}}
               :gender {:label (get-label 1007)
                        :input-el "radio"
                        :options ["Male" "Female"]
                        :attrs {:required "required"}}
               :diet {:label (get-label 1008)
                      :input-el "radio"
                      :options ["All" "Vegetarian"]
                      :attrs {:required "required"}}
               :activity {:label (get-label 1009)
                          :input-el "radio"
                          :options ["Mainly sitting"
                                    "Easy physical labor"
                                    "Medium physical labor"
                                    "Hard physical labor"
                                    "Very hard physical labor"]
                          :attrs {:required "required"}}
               }
      :fields-order [:first-name
                     :last-name
                     :email
                     :height
                     :weight
                     :birthday
                     :gender
                     :diet
                     :activity]})

(def columns
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
          :th {:style {:width "100px"}}
          :td {:style {:width "100px"
                       :text-align "left"}}
          }
        :last-name
         {:content (get-label 1003)
          :th {:style {:width "100px"}}
          :td {:style {:width "100px"
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
          :th {:style {:width "65px"}}
          :td {:style {:width "65px"}}
          }
        :weight
         {:content (get-label 1005)
          :th {:style {:width "65px"}}
          :td {:style {:width "65px"}}
          }
        :birthday
         {:content (get-label 1006)
          :th {:style {:width "100px"}}
          :td {:style {:width "100px"}}
          }
        :gender
         {:content (get-label 1007)
          :th {:style {:width "65px"}}
          :td {:style {:width "65px"}}
          }
        :diet
         {:content (get-label 1008)
          :th {:style {:width "40px"}}
          :td {:style {:width "40px"}}
          }
        :activity
         {:content (get-label 1009)
          :th {:style {:width "40px"}}
          :td {:style {:width "40px"}}
          }}
       })

(def query
     {:entity-type entity-type
      :entity-filter {}
      :projection (:projection columns)
      :projection-include true
      :qsort {:first-name 1}
      :pagination true
      :current-page 0
      :rows 25
      :collation {:locale "sr"}})

(defn table-conf-fn
  ""
  []
  {:query query
   :columns columns
   :form-conf form-conf
   :actions [:details :edit :delete]
   :allowed-actions @allowed-actions
   :search-on true
   :search-fields [:first-name :last-name :email]
   :render-in ".content"
   :table-class "entities"
   :table-fn gen-table})

