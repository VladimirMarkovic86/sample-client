(ns sample-client.person.entity
 (:require [htmlcss-lib.core :refer [gen crt]]
           [js-lib.core :as md]
           [framework-lib.core :refer [gen-table]]
           [utils-lib.core :refer [round-decimals]]
           [cljs.reader :as reader]))

(def entity-type
     "person")

(def form-conf
     {:id :_id
      :type entity-type
      :fields {:first-name {:label "First name"
                            :field-type "input"
                            :data-type "text"}
               :last-name {:label "Last name"
                           :field-type "input"
                           :data-type "text"}
               :email {:label "Email"
                       :field-type "input"
                       :data-type "text"}
               :height {:label "Height"
                        :field-type "input"
                        :data-type "number"
                        :step "0.1"}
               :weight {:label "Weight"
                        :field-type "input"
                        :data-type "number"
                        :step "0.1"}
               :birthday {:label "Birthday"
                          :field-type "input"
                          :data-type "date"}
               :gender {:label "Gender"
                        :field-type "radio"
                        :data-type "text"
                        :options ["Male" "Female"]}
               :diet {:label "Diet"
                      :field-type "radio"
                      :data-type "text"
                      :options ["All" "Vegetarian"]}
               :activity {:label "Activity"
                          :field-type "radio"
                          :data-type "text"
                          :options ["Mainly sitting"
                                    "Easy physical labor"
                                    "Medium physical labor"
                                    "Hard physical labor"
                                    "Very hard physical labor"]}}
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
         {:content "First name"
          :th {:style {:width "100px"}}
          :td {:style {:width "100px"
                       :text-align "left"}}
          }
        :last-name
         {:content "Last name"
          :th {:style {:width "100px"}}
          :td {:style {:width "100px"
                       :text-align "left"}}
          }
        :email
         {:content "e-mail"
          :th {:style {:width "100px"}}
          :td {:style {:width "100px"
                       :text-align "left"}}
          }
        :height
         {:content "Height"
          :th {:style {:width "65px"}}
          :td {:style {:width "65px"}}
          }
        :weight
         {:content "Weight"
          :th {:style {:width "65px"}}
          :td {:style {:width "65px"}}
          }
        :birthday
         {:content "Birthday"
          :th {:style {:width "100px"}}
          :td {:style {:width "100px"}}
          }
        :gender
         {:content "Gender"
          :th {:style {:width "65px"}}
          :td {:style {:width "65px"}}
          }
        :diet
         {:content "Diet"
          :th {:style {:width "40px"}}
          :td {:style {:width "40px"}}
          }
        :activity
         {:content "Activity"
          :th {:style {:width "40px"}}
          :td {:style {:width "40px"}}
          }}
       })

(def query
     {:entity-type  entity-type
      :entity-filter  {}
      :projection  (:projection columns)
      :projection-include  true
      :qsort  {:first-name 1}
      :pagination  true
      :current-page  0
      :rows  25
      :collation {:locale "sr"}})

(def table-conf
     {:query query
      :columns columns
      :form-conf form-conf
      :actions #{:details :edit :delete}
      :render-in ".content"
      :table-class "entities"
      :table-fn gen-table})

