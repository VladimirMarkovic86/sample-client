(ns sample-client.controller
  (:require [ajax-lib.core :refer [ajax base-url with-credentials]]
            [sample-client.html :as ht]
            [sample-middle.functionalities :as fns]
            [common-middle.request-urls :as rurls]
            [common-client.role.entity :as re]
            [common-client.login.controller :refer [redirect-to-login
                                                    main-page
                                                    logout
                                                    custom-menu
                                                    logout-fn
                                                    logout-success
                                                    logout-success-fn]]))

(defn am-i-logged-in
  "Check if session is active"
  []
  (let [base-uri (.-baseURI
                   js/document)
        base-uri (if (< -1
                        (.indexOf
                          base-uri
                          "herokuapp"))
                   "https://sample-server-clj.herokuapp.com"
                   "https://sample:1603")]
    (reset!
      base-url
      base-uri))
  (reset!
    with-credentials
    true)
  #_(reset!
    base-url
    "/clojure")
  (reset!
    custom-menu
    ht/custom-menu)
  (reset!
    logout-fn
    logout)
  (reset!
    logout-success-fn
    logout-success)
  (reset!
    re/functionalities
    fns/functionalities)
  (ajax
    {:url rurls/am-i-logged-in-url
     :success-fn main-page
     :error-fn redirect-to-login
     :entity {:user "it's me"}}))

(set! (.-onload js/window) am-i-logged-in)

