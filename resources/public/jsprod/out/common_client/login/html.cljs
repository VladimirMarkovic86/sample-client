(ns common-client.login.html
  (:require [htmlcss-lib.core :refer [gen table tr td label
                                      input div a nav]]
            [js-lib.core :as md]
            [framework-lib.core :refer [popup-fn]]
            [common-client.user.controller :as uc]
            [common-client.language.controller :as lc]
            [common-client.role.controller :as rc]
            [language-lib.core :refer [get-label]]
            [common-client.allowed-actions.controller :refer [allowed-actions]]
            [common-middle.functionalities :as fns]))

(defn form
  "Generate table HTML element that contains login form"
  [login-evt
   sign-up-evt]
  (gen
    (table
      [(tr
         [(td
            (label
              (get-label 14)
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
              (get-label 15)
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
              (get-label 16)
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
               :value (get-label 17)}
              login-evt))]
        )
       (tr
         [(td)
          (td
            (a
              (get-label 18)
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
       #_(input
         ""
         {:type "button"
          :value "Test"}
         {:onclick {:evt-fn run-test}})
       (input
         ""
         {:type "button"
          :value "Popup"}
         {:onclick {:evt-fn popup-fn
                    :evt-p {:content "Try again later"
                            :heading "Information"}}
          })])
   ))

(defn nav-fn
  "Header navigation menu"
  [logout-fn
   username
   custom-menu]
  (let [final-menu [(div
                      username
                      {:class "dropDownMenu"})
                    (a
                      (get-label 3)
                      {:id "aHomeId"}
                      {:onclick {:evt-fn home-fn}})
                    (when (contains?
                            @allowed-actions
                            fns/user-read)
                      (a
                        (get-label 21)
                        {:id "aUserId"}
                        {:onclick {:evt-fn uc/nav-link}}))
                    (when (contains?
                            @allowed-actions
                            fns/role-read)
                      (a
                        (get-label 22)
                        {:id "aRoleId"}
                        {:onclick {:evt-fn rc/nav-link}}))
                    (when (contains?
                            @allowed-actions
                            fns/language-read)
                      (a
                        (get-label 23)
                        {:id "aLanguageId"}
                        {:onclick {:evt-fn lc/nav-link}}))]
        final-menu (if custom-menu
                     (apply
                       conj
                       final-menu
                       (custom-menu))
                     final-menu)
        final-menu (conj
                     final-menu
                     (a
                       (get-label 2)
                       {:id "aLogoutId"}
                       {:onclick {:evt-fn logout-fn}}))]
    (nav
      final-menu))
 )

(defn language-fn
  "Language select language"
  [change-language-fn
   language-name]
  (div
    [(div
       language-name
       {:class "languageDropDownMenu"})
     (a
       "English"
       {:id "aEnglishId"}
       {:onclick {:evt-fn change-language-fn
                  :evt-p {:language :english
                          :language-name "English"}}})
     (a
       "Srpski"
       {:id "aSerbianId"}
       {:onclick {:evt-fn change-language-fn
                  :evt-p {:language :serbian
                          :language-name "Srpski"}}
        })])
 )

(defn template
  "Template of main page"
  [logout-fn
   username
   change-language-fn
   language-name
   custom-menu]
  (gen
    [(div
       [(div
          (nav-fn
            logout-fn
            username
            custom-menu)
          {:class "dropDownMenuContainer"})
        (div
          (language-fn
            change-language-fn
            language-name)
          {:class "languageDropDownMenuContainer"})]
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

