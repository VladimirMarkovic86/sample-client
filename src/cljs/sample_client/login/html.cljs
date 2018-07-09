(ns sample-client.login.html
  (:require [htmlcss-lib.core :refer [gen table tr td label
                                      input div a nav]]
            [ajax-lib.core :refer [ajax get-response]]
            [js-lib.core :as md]
            [sample-client.test-bot :refer [run-test]]
            [sample-client.person.controller :as pc]
            [sample-client.user.controller :as uc]))

(defn form
  "Generate table HTML element that contains login form"
  [login-evt
   sign-up-evt]
  (gen
    (table
      [(tr
         [(td
            (label
              "email"
              {:for "txtEmailId"}))
          (td
            (input
              ""
              {:id "txtEmailId"
               :name "txtEmailN"
               :type "text"
               :required "required"}))]
        )
       (tr
         [(td
            (label
              "password"
              {:for "pswLoginId"}))
          (td
            (input
              ""
              {:id "pswLoginId"
               :name "pswLoginN"
               :type "password"
               :required "required"}))]
        )
       (tr
         [(td
            (label
              "remember me"
              {:for "chkRememberMeId"}))
          (td
            (input
              ""
              {:id "chkRememberMeId"
               :type "checkbox"}))]
        )
       (tr
         [(td)
          (td
            (input
              ""
              {:id "btnLoginId"
               :name "btnLoginN"
               :type "button"
               :value "Login"}
              login-evt))]
        )
       (tr
         [(td)
          (td
            (a
              "Sign up"
              {:id "aSignUpId"
               :style
                 {:float "right"}}
              sign-up-evt))
          ])]
      {:class "login"}))
 )

(defn home-fn
  "Generate and render home page"
  []
  (md/remove-element-content
    ".content")
  (md/remove-element-content
    ".sidebar-menu")
  (md/append-element
    ".content"
    (gen
      [(div
         "Home")
       (input
         ""
         {:type "button"
          :value "Test"}
         {:onclick {:evt-fn run-test}})]
      ))
 )

(defn nav-fn
  "Header navigation menu"
  [logout-fn]
  (nav
    [(a
       "Home"
       {:id "aHomeId"}
       {:onclick {:evt-fn home-fn}})
     (a
       "User"
       {:id "aUserId"}
       {:onclick {:evt-fn uc/nav-link}})
     (a
       "Person"
       {:id "aPersonId"}
       {:onclick {:evt-fn pc/nav-link}})
     (a
       "Log out"
       {:id "aLogoutId"}
       {:onclick {:evt-fn logout-fn}})])
 )

(defn template
  "Template of main page"
  [logout-fn]
  (gen
    [(div
       (nav-fn
         logout-fn)
       {:class "header"})
     (div
       ""
       {:class "sidebar-menu"})
     (div
       ""
       {:class "content"})
     (div
       ""
       {:class "footer"})])
 )

