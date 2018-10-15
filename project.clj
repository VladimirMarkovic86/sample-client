(defproject org.vladimir/sample-client "0.1.0"
  :description "Sample client"
  :url "http://gitlab:1610/VladimirMarkovic86/sample-client"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [org.vladimir/ajax-lib "0.1.0"]
                 [org.vladimir/htmlcss-lib "0.1.0"]
                 [org.vladimir/js-lib "0.1.0"]
                 [org.vladimir/framework-lib "0.1.0"]
                 [org.vladimir/utils-lib "0.1.0"]
                 [org.vladimir/client-test-lib "0.1.0"]
                 [org.vladimir/language-lib "0.1.0"]
                 [org.vladimir/sample-middle "0.1.0"]
                 [org.vladimir/common-client "0.1.0"]
                 [org.vladimir/server-lib "0.1.0"]
                 ]
  
  :resource-paths ["resources"]
  :source-paths ["src/clj"]
  :main ^:skip-aot sample-client.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  
  :plugins [[lein-cljsbuild  "1.1.7"]
            ]

  :cljsbuild
   {:builds
    {:dev
     {:source-paths ["src/cljs"]
      :compiler     {:main sample-client.controller
                     :output-to "resources/public/js/main.js"
                     :output-dir "resources/public/js/out"
                     :asset-path "js/out"
                     :pretty-print true}}
     :prod
     {:source-paths ["src/cljs"]
      :compiler     {:main sample-client.controller
                     :output-to "resources/public/jsprod/main.js"
                     :output-dir "resources/public/jsprod/out"
                     :asset-path "jsprod/out"
                     :optimizations :advanced}}
     }}
  )

