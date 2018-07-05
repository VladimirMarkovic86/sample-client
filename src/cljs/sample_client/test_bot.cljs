(ns sample-client.test-bot
  (:require [js-lib.core :as md]
            [client-test-lib.core :as ctest
                                  :refer [click-elem
                                          close-window
                                          opener-console]]
            [utils-lib.core :as utils]))

(defn fill-out-and-submit-form
  "Fills out person form and submits it
   and window-number is used as prefix for every text parameter"
  [window-number
   window-obj]
  (opener-console
    window-obj
    "fill-out-and-submit-form")
  (let [document (aget window-obj "document")
        first-name (md/query-selector-on-element
                     document
                     "#txtFirstname")
        last-name (md/query-selector-on-element
                    document
                    "#txtLastname")
        email (md/query-selector-on-element
                document
                "#txtEmail")
        height (md/query-selector-on-element
                 document
                 "#txtHeight")
        weight (md/query-selector-on-element
                 document
                 "#txtWeight")
        birthday (md/query-selector-on-element
                   document
                   "#txtBirthday")]
    (md/set-value
      first-name
      (str
        window-number
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
        "emailTest"))
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
      "2018-07-02"))
  (click-elem
    "#rGenderMale"
    window-obj)
  (click-elem
    "#rDietAll"
    window-obj)
  (click-elem
    "#rActivityMainlysitting"
    window-obj)
  (click-elem
    "#btnInsert"
    window-obj))

(defn edit-inserted-entity
  "Open edit form for particular entity"
  [window-number
   window-obj]
  (opener-console
    window-obj
    "edit-inserted-entity")
  (let [td (md/query-selector-on-element
             (aget window-obj "document")
             (str
               "td[title='"
               window-number
               "firstNameTest']"))
        tr (aget td "parentNode")
        edit-btn (md/query-selector-on-element tr "input[value='edit']")]
    (click-elem
      edit-btn
      window-obj))
 )

(defn edit-and-submit-form
  "Edit entity data presented in form and submit form"
  [window-number
   window-obj]
  (opener-console
    window-obj
    "edit-and-submit-form")
  (let [document (aget window-obj "document")
        last-name (md/query-selector-on-element
                    document
                    "#txtLastname")
        email (md/query-selector-on-element
                document
                "#txtEmail")
        height (md/query-selector-on-element
                 document
                 "#txtHeight")
        weight (md/query-selector-on-element
                 document
                 "#txtWeight")
        birthday (md/query-selector-on-element
                   document
                   "#txtBirthday")]
    (md/set-value
      last-name
      (str
        window-number
        "lastNameTest1"))
    (md/set-value
      email
      (str
        window-number
        "emailTest1"))
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
      "2018-07-02"))
  (click-elem
    "#rGenderFemale"
    window-obj)
  (click-elem
    "#rDietVegetarian"
    window-obj)
  (click-elem
    "#rActivityEasyphysicallabor"
    window-obj)
  (click-elem
    "#btnUpdate"
    window-obj))

(defn details-inserted-entity
  "Open details of inserted entity for particular window"
  [window-number
   window-obj]
  (opener-console
    window-obj
    "details-inserted-entity")
  (let [td (md/query-selector-on-element
             (aget window-obj "document")
             (str
               "td[title='"
               window-number
               "firstNameTest']"))
        tr (aget td "parentNode")
        details-btn (md/query-selector-on-element tr "input[value='details']")]
    (click-elem
      details-btn
      window-obj))
  )

(defn delete-inserted-entity
  "Delete inserted entity from particular window-obj"
  [window-number
   window-obj]
  (opener-console
    window-obj
    "delete-inserted-entity")
  (let [td (md/query-selector-on-element
             (aget window-obj "document")
             (str
               "td[title='"
               window-number
               "firstNameTest']"))
        tr (aget td "parentNode")
        delete-btn (md/query-selector-on-element tr "input[value='delete']")]
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
  (let [window-number (aget
                        window-obj
                        "name")]
    (ctest/execute-vector-when-loaded
      window-obj
      [["#aPersonId"
        click-elem
        "#aPersonId"]
       [".entities"
        click-elem
        "#aCreateId"]
       [".entity"
        fill-out-and-submit-form
        window-number]
       [".entities"
        edit-inserted-entity
        window-number]
       [".entity"
        edit-and-submit-form
        window-number]
       [".entities"
        details-inserted-entity
        window-number]
       [".entity"
        click-elem
        "#btnCancel"]
       [".entities"
        details-inserted-entity
        window-number]
       [".entity"
        click-elem
        "#btnEdit"]
       [".entity"
        edit-and-submit-form
        window-number]
       [".entities"
        delete-inserted-entity
        window-number]
       [".entities"
        close-window]]))
  )

(defn run-test
  "Runs tests from test-cases-fn function in particular window"
  []
  (ctest/run-tests
    test-cases-fn
    19))

