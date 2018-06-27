(ns sample-client.sign-up.controller
  (:require [ajax-lib.core :refer [ajax get-response]]
            [utils-lib.core :as utils]
            [js-lib.core :as md]
            [sample-client.sign-up.html :as suh]))

(def sign-up-url "/clojure/sign-up")

(defn sign-up-evt
 ""
 [cancel-fn]
 {:onclick
   {:evt-fn
     (fn []
       (let [username (md/get-value "#txtUsernameId")
             v-username (md/is-valid? "#txtUsernameId")
             email (md/get-value "#txtEmailId")
             v-email (md/is-valid? "#txtEmailId")
             password (md/get-value "#pswSignUpId")
             v-password (md/is-valid? "#pswSignUpId")
             confirm-password (md/get-value "#pswConfirmSignUpId")
             v-confirm-password (md/is-valid? "#pswConfirmSignUpId")]
         (if (and v-username
                  v-email
                  v-password
                  v-confirm-password
                  (= password
                     confirm-password))
           (ajax
             {:url sign-up-url
              :success-fn cancel-fn
              :entity {:entity-type "user"
                       :entity {:username username
                                :password (utils/encrypt-password
                                            password)
                                :email email}
                       :_id ""}})
           (.log js/console "Validation failed"))
        ))
     }})

(defn sign-up-evt-fn
 ""
 [{cancel-fn :cancel-fn
   cancel-evt :cancel-evt}]
 (md/remove-element-content
   ".body")
 (md/append-element
   ".body"
   (suh/form
     (sign-up-evt
       cancel-fn)
     cancel-evt))
 )

