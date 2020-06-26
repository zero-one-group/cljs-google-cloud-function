(ns cloud-function 
  (:require ["firebase-functions" :as fun]))

(defn handle-request [req, res]
  (.send res "Clojurescript is sick!"))

(def main 
  #js{:home (.onRequest fun/https handle-request)})
