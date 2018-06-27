(ns sample-client.login.controller
 (:require [ajax-lib.core :refer [ajax get-response]]
           [js-lib.core :as md]
           [utils-lib.core :as utils]
           [sample-client.login.html :as lhtml]
           [sample-client.sign-up.controller :as suc]))

(def login-url "/clojure/login")

(defn remove-main
 "Remove main page from HTML document"
 []
 (md/remove-element-content
   ".body"))

(defn set-cookie
 "Set cookie in browser"
 [cookie-value]
 (aset
   js/document
   "cookie"
   cookie-value))

(defn destroy-session-cookie
 "Destroy session cookie"
 []
 (set-cookie
   (str "session=destroyed; "
        "expires=Thu, 01 Jan 1970 00:00:01 GMT; "))
 (set-cookie
   (str "long-session=destroyed; "
        "expires=Thu, 01 Jan 1970 00:00:01 GMT; "))
 )

(defn main-page
 "Open main page"
 [xhr
  {logout-fn :logout-fn}]
 (md/append-element
   ".body"
   (lhtml/template logout-fn))
 )

(defn login-success
 "Login success"
 [xhr
  ajax-params]
 (md/remove-element-content ".body")
 (main-page
   xhr
   ajax-params))

(defn login-error
 "Login error"
 [xhr]
 (let [response (get-response xhr)
       email (md/get-by-id "txtEmailId")
       password (md/get-by-id "pswLoginId")]
   (md/remove-class email "error")
   (md/remove-class password "error")
   (md/remove-class email "success")
   (md/remove-class password "success")
   (md/add-class email (:email response))
   (md/add-class password (:password response))
  ))

(defn read-login-form
 "Read data from login form"
 []
 (let [email (md/get-value "#txtEmailId")
       password (md/get-value "#pswLoginId")
       remember-me (md/get-checked "#chkRememberMeId")]
   {:email email
    :password (utils/encrypt-password
                password)
    :remember-me remember-me}))

(defn redirect-to-login
 "Redirect to login page"
 ([logout-fn]
   (let [cancel-fn (fn []
                     (remove-main)
                     (redirect-to-login logout-fn))]
     (md/append-element
       ".body"
       (lhtml/form
         {:onclick
           {:evt-fn ajax
            :evt-p {:url login-url
                    :success-fn login-success
                    :error-fn login-error
                    :entity read-login-form
                    :logout-fn logout-fn}}
          }
         {:onclick
            {:evt-fn suc/sign-up-evt-fn
             :evt-p
               {:cancel-fn cancel-fn
                :cancel-evt
                  {:onclick
                    {:evt-fn cancel-fn}}
                }}
          }))
    ))
 ([_ {logout-fn :logout-fn}]
   (let [cancel-fn (fn []
                     (remove-main)
                     (redirect-to-login logout-fn))]
     (md/append-element
       ".body"
       (lhtml/form
         {:onclick
           {:evt-fn ajax
            :evt-p {:url login-url
                    :success-fn login-success
                    :error-fn login-error
                    :entity read-login-form
                    :logout-fn logout-fn}}
          }
        {:onclick
           {:evt-fn suc/sign-up-evt-fn
            :evt-p
              {:cancel-fn cancel-fn
               :cancel-evt
                 {:onclick
                   {:evt-fn cancel-fn}}
               }}
         }))
    ))
 )

(defn logout
 "Logout"
 [& optional]
 (remove-main)
 (destroy-session-cookie)
 (redirect-to-login logout))

