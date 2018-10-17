(ns sample-middle.functionalities
  (:require [common-middle.functionalities :as fns]))

(def person-create "person-create")

(def person-read "person-read")

(def person-update "person-update")

(def person-delete "person-delete")

(def functionalities
     (conj
       fns/functionalities
       person-create
       person-read
       person-update
       person-delete))

