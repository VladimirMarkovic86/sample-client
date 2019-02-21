(ns sample-client.test-bot
  (:require [js-lib.core :as md]
            [client-test-lib.core :as ctest
                                  :refer [click-elem
                                          close-window
                                          opener-console]]
            [utils-lib.core :as utils]
            [sample-middle.person.entity :as smpe]))

(def user-agent
     (let [user-agent (.-userAgent
                        js/navigator)
           chrome (.indexOf
                    user-agent
                    "Chrome")]
       (if (< -1
              chrome)
         "c"
         "m"))
 )

(defn fill-out-and-submit-form
  "Fills out person form and submits it
   and window-number is used as prefix for every text parameter"
  [window-number
   window-obj]
  (opener-console
    (str
      window-number
      " fill-out-and-submit-form"))
  (let [document (.-document
                   window-obj)
        first-name (md/query-selector-on-element
                     document
                     "#first-name")
        last-name (md/query-selector-on-element
                    document
                    "#last-name")
        email (md/query-selector-on-element
                document
                "#email")
        height (md/query-selector-on-element
                 document
                 "#height")
        weight (md/query-selector-on-element
                 document
                 "#weight")
        birthday (md/query-selector-on-element
                   document
                   "#birthday")
        activity-option (md/query-selector-on-element
                          document
                          "#activity option:nth-child(2)")]
    (md/set-value
      first-name
      (str
        window-number
        user-agent
        "firstNameTest"))
    (md/set-value
      last-name
      (str
        window-number
        "lastNameTest"))
    (md/set-value
      email
      (str
        window-number
        "email@Test"))
    (md/set-value
      height
      (str
        window-number
        "1"))
    (md/set-value
      weight
      (str
        window-number
        "1"))
    (md/set-value
      birthday
      "2018-07-02")
    (click-elem
      (str
        "#gender"
        smpe/gender-male)
      window-obj)
    (click-elem
      (str
        "#diet"
        smpe/diet-not-vegetarian)
      window-obj)
    (aset
      activity-option
      "selected"
      true)
    (click-elem
      "#btnInsert"
      window-obj))
 )

(defn search-for-entity
  "Enter value in search input field"
  [window-number
   window-obj]
  (let [search-field (md/query-selector-on-element
                       (.-document
                         window-obj)
                       "#txtSearch")
        search-value (str
                       window-number
                       user-agent
                       "firstNameTest")]
    (md/set-value
      search-field
      search-value)
    (md/dispatch-event
      "keyup"
      search-field
      window-obj))
 )

(defn edit-inserted-entity
  "Open edit form for particular entity"
  [window-number
   window-obj]
  (opener-console
    (str
      window-number
      " edit-inserted-entity"))
  (let [td (md/query-selector-on-element
             (.-document
               window-obj)
             (str
               "td[title='"
               window-number
               user-agent
               "firstNameTest']"))
        tr (.-parentElement
             td)
        edit-btn (md/query-selector-on-element
                   tr
                   "td[class*='edit']")]
    (click-elem
      edit-btn
      window-obj))
 )

(defn edit-and-submit-form
  "Edit entity data presented in form and submit form"
  [window-number
   window-obj]
  (opener-console
    (str
      window-number
      " edit-and-submit-form"))
  (let [document (.-document
                   window-obj)
        last-name (md/query-selector-on-element
                    document
                    "#last-name")
        email (md/query-selector-on-element
                document
                "#email")
        height (md/query-selector-on-element
                 document
                 "#height")
        weight (md/query-selector-on-element
                 document
                 "#weight")
        birthday (md/query-selector-on-element
                   document
                   "#birthday")
        activity-option (md/query-selector-on-element
                          document
                          "#activity option:nth-child(2)")]
    (md/set-value
      last-name
      (str
        window-number
        "lastNameTest1"))
    (md/set-value
      email
      (str
        window-number
        "email@Test1"))
    (md/set-value
      height
      (str
        window-number
        "2"))
    (md/set-value
      weight
      (str
        window-number
        "2"))
    (md/set-value
      birthday
      "2018-07-02")
    (click-elem
      (str
        "#gender"
        smpe/gender-female)
      window-obj)
    (click-elem
      (str
        "#diet"
        smpe/diet-vegetarian)
      window-obj)
    (aset
      activity-option
      "selected"
      true)
    (click-elem
      "#btnUpdate"
      window-obj))
 )

(defn details-inserted-entity
  "Open details of inserted entity for particular window"
  [window-number
   window-obj]
  (opener-console
    (str
      window-number
      " details-inserted-entity"))
  (let [td (md/query-selector-on-element
             (.-document
               window-obj)
             (str
               "td[title='"
               window-number
               user-agent
               "firstNameTest']"))
        tr (.-parentElement
             td)
        details-btn (md/query-selector-on-element
                      tr
                      "td[class*='details']")]
    (click-elem
      details-btn
      window-obj))
  )

(defn delete-inserted-entity
  "Delete inserted entity from particular window-obj"
  [window-number
   window-obj]
  (opener-console
    (str
      window-number
      " delete-inserted-entity"))
  (let [td (md/query-selector-on-element
             (.-document
               window-obj)
             (str
               "td[title='"
               window-number
               user-agent
               "firstNameTest']"))
        tr (.-parentElement
             td)
        delete-btn (md/query-selector-on-element
                     tr
                     "td[class*='delete']")]
    (click-elem
      delete-btn
      window-obj))
 )

(defn test-cases-fn
  "Main test function contains vector of sub-vectors that contain:
    first element: selector that will be waited for to be loaded
    second element: execute function that will be executed after selector is loaded
                      with two parameters: first one is third element of sub-vector
                                           second one is window-obj
    third element: is optional and its used as first execute function parameter"
  [window-obj]
  (let [window-number (.-name
                        window-obj)]
    (ctest/execute-vector-when-loaded
      window-obj
      [["#person-nav-id"
        click-elem
        "#person-nav-id"]
       ["#person-show-all-nav-id"
        click-elem
        "#person-show-all-nav-id"]
       ["#txtSearch"
        search-for-entity
        window-number]
       [".no-results"
        click-elem
        "#person-create-nav-id"]
       [".entity"
        fill-out-and-submit-form
        window-number]
       ["#txtSearch"
        search-for-entity
        window-number]
       [(str
          "td[title='"
          window-number
          user-agent
          "firstNameTest']")
        edit-inserted-entity
        window-number]
       [".entity"
        edit-and-submit-form
        window-number]
       ["#txtSearch"
        search-for-entity
        window-number]
       [(str
          "td[title='"
          window-number
          user-agent
          "firstNameTest']")
        details-inserted-entity
        window-number]
       [".entity"
        click-elem
        "#btnCancel"]
       ["#txtSearch"
        search-for-entity
        window-number]
       [(str
          "td[title='"
          window-number
          user-agent
          "firstNameTest']")
        details-inserted-entity
        window-number]
       [".entity"
        click-elem
        "#btnEdit"]
       ["#btnUpdate"
        edit-and-submit-form
        window-number]
       ["#txtSearch"
        search-for-entity
        window-number]
       [(str
          "td[title='"
          window-number
          user-agent
          "firstNameTest']")
        delete-inserted-entity
        window-number]
       ["div.after-delete"
        search-for-entity
        window-number]
       [".no-results"
        close-window
        window-number]]))
 )

(defn run-test
  "Runs tests from test-cases-fn function in particular window"
  []
  (ctest/run-tests
    test-cases-fn))

