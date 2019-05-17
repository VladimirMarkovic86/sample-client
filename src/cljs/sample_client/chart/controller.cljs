(ns sample-client.chart.controller
  (:require [ajax-lib.core :refer [ajax get-response]]
            [htmlcss-lib.core :refer [gen div a]]
            [js-lib.core :as md]
            [svg-lib.chart.core :as chart]
            [canvas-lib.chart.core :as cchart]
            [common-middle.session :as cms]
            [common-middle.request-urls :as rurls]
            [language-lib.core :refer [get-label]]))

(defn display-pdf
  "Opens new window with chart in pdf file"
  [xhr
   ajax-params]
  (let [response (get-response
                   xhr)
        file-url (.createObjectURL
                   js/URL
                   response)]
    (.open
      js/window
      file-url))
 )

(defn export-chart
  "Exports chart into image"
  [{chart-config :chart-config
    export-chart-fn :export-chart-fn
    resolution :resolution}
   element
   event]
  (let [current-width (:width chart-config)
        current-height (:height chart-config)
        [width
         height] (if (= resolution
                        "higher")
                   [(if (and current-width
                             (number?
                               current-width))
                      (* current-width
                         2)
                      1000)
                    (if (and current-height
                             (number?
                               current-height))
                      (* current-height
                         2)
                      1000)]
                   [current-width
                    current-height])
        chart-config (assoc
                       chart-config
                       :width width
                       :height height)
        canvas-element (export-chart-fn
                         chart-config)
        data-url (.toDataURL
                   canvas-element)]
    (ajax
      {:url (str
              rurls/reports-url
              "?report=chart"
              "&language=" @cms/selected-language)
       :request-property-map {"responseType" "blob"
                              "cljResponseType" "blob"}
       :success-fn display-pdf
       :entity {:base64-png data-url}}))
 )

(defn display-export-chart-link
  "Adds export chart link above chart"
  [chart-config
   display-chart-fn
   export-chart-fn]
  (let [width (or (:width chart-config)
                  500)]
    (gen
      (div
        [(div
           [(a
              (div
                nil
                {:class (str
                          @cms/selected-language
                          "-full-report report-icon")})
              nil
              {:onclick {:evt-fn export-chart
                         :evt-p {:chart-config chart-config
                                 :export-chart-fn export-chart-fn
                                 :resolution "higher"}}
               })
            (a
              (div
                nil
                {:class (str
                          @cms/selected-language
                          "-page-report report-icon")})
              nil
              {:onclick {:evt-fn export-chart
                         :evt-p {:chart-config chart-config
                                 :export-chart-fn export-chart-fn}}
               })]
           {:class "report-links"})
         (display-chart-fn
           chart-config)]
        {:style {:width (str
                          width
                          "px")
                 :float "left"}}))
   ))

(defn display-charts
  "Renders charts in content area"
  []
  (md/remove-element-content
    ".content")
  (let [chart-config {:dot-values [[20 100] [25 170] [30 110]
                                   [35 160] [40 200] [45 180]
                                   [50 140] [55 160] [60 100]]
                      :main-title (get-label
                                    1020)
                      :x-axis-title (get-label
                                      1021)
                      :y-axis-title (get-label
                                      1022)
                      :horizontal-grid-lines true
                      :vertical-grid-lines false
                      :width 500
                      :height 500
                      :x-minimum 0
                      :y-minimum 0
                      :x-maximum 80
                      :y-maximum 300}
        chart-config-i {:dot-values [[23 106] [25 171] [32 119]
                                     [36 164] [41 213] [44 187]
                                     [52 148] [56 166] [62 102]]
                        :horizontal-grid-lines true}
        chart-config-ii {:dot-values [[[23 106] [25 171] [32 119]
                                       [36 164] [41 213] [44 187]
                                       [52 148] [56 166] [62 102]]
                                      [[23 116] [25 181] [32 129]
                                       [36 174] [41 223] [44 197]
                                       [52 158] [56 176] [62 112]]
                                      [[33 106] [35 171] [42 119]
                                       [46 164] [51 213] [54 187]
                                       [62 148] [66 166] [72 102]]]
                         :main-title (get-label
                                       1020)
                         :x-axis-title (get-label
                                         1021)
                         :y-axis-title (get-label
                                         1022)
                         :legend {:line-names [(str
                                                 (get-label
                                                   1023)
                                                 " 1")
                                               (str
                                                 (get-label
                                                   1023)
                                                 " 2")
                                               (str
                                                 (get-label
                                                   1023)
                                                 " 3")]
                                  :position "right"}
                         :multi-line true
                         :horizontal-grid-lines true
                         :x-minimum 20
                         :y-minimum 100
                         :x-maximum 80
                         :y-maximum 250}
        chart-config-iii {:dot-values [[[230000 1060000] [250000 1710000] [320000 1190000]
                                        [360000 1640000] [410000 2130000] [440000 1870000]
                                        [520000 1480000] [560000 1660000] [620000 1020000]]
                                       [[230000 1160000] [250000 1810000] [320000 1290000]
                                        [360000 1740000] [410000 2230000] [440000 1970000]
                                        [520000 1580000] [560000 1760000] [620000 1120000]]
                                       [[330000 1060000] [350000 1710000] [420000 1190000]
                                        [460000 1640000] [510000 2130000] [540000 1870000]
                                        [620000 1480000] [660000 1660000] [720000 1020000]]]
                          :main-title (get-label
                                        1020)
                          :x-axis-title (get-label
                                          1021)
                          :y-axis-title (get-label
                                          1022)
                          :legend {:line-names [(str
                                                 (get-label
                                                   1023)
                                                 " 1")
                                                (str
                                                 (get-label
                                                   1023)
                                                 " 2")
                                                (str
                                                 (get-label
                                                   1023)
                                                 " 3")]
                                   :position "right"}
                          :multi-line true
                          :horizontal-grid-lines true
                          :x-minimum 200000
                          :y-minimum 1000000
                          :x-maximum 800000
                          :y-maximum 2500000
                          :selected-language @cms/selected-language}
        november-2018 (js/Date.
                        "2018-11-01")
        december-2018 (js/Date.
                        "2018-12-01")
        january-2019 (js/Date.
                       "2019-01-01")
        february-2019 (js/Date.
                       "2019-02-01")
        march-2019 (js/Date.
                     "2019-03-01")
        april-2019 (js/Date.
                     "2019-04-01")
        may-2019 (js/Date.
                   "2019-05-01")
        jun-2019 (js/Date.
                   "2019-06-01")
        july-2019 (js/Date.
                    "2019-07-01")
        august-2019 (js/Date.
                      "2019-08-01")
        september-2019 (js/Date.
                         "2019-09-01")
        chart-config-iv {:dot-values [[november-2018 1]
                                      [december-2018 2]
                                      [january-2019 3]
                                      [february-2019 4]
                                      [march-2019 5]
                                      [april-2019 6]
                                      [may-2019 7]
                                      [jun-2019 8]
                                      [july-2019 9]]
                         :x-value-type "date"
                         :legend {:line-names [(str
                                                 (get-label
                                                   1023)
                                                 " 1")]
                                  :position "bottom"}
                         :main-title (get-label
                                       1020)
                         :x-axis-title (get-label
                                         1021)
                         :y-axis-title (get-label
                                         1022)
                         :horizontal-grid-lines true
                         ;:x-minimum 20
                         ;:y-minimum -100
                         :x-maximum (.getTime
                                      september-2019)
                         ;:y-maximum 200
                         :selected-language @cms/selected-language}
        chart-config-v {:dot-values [[1 november-2018]
                                     [2 december-2018]
                                     [3 january-2019]
                                     [4 february-2019]
                                     [5 march-2019]
                                     [6 april-2019]
                                     [7 may-2019]
                                     [8 jun-2019]
                                     [9 july-2019]]
                        ;:legend {:line-names [(str
                        ;                        (get-label
                        ;                          1023)
                        ;                        " 1")]
                        ;         :position "top"}
                        :y-value-type "date"
                        :main-title (get-label
                                      1020)
                        :x-axis-title (get-label
                                        1021)
                        :y-axis-title (get-label
                                        1022)
                        :horizontal-grid-lines true
                         ;:x-minimum 20
                         ;:y-minimum -100
                         :x-maximum 12
                         :y-maximum (.getTime
                                      september-2019)
                        :selected-language @cms/selected-language}
        chart-config-vi {:dot-values [[[-20 -100] [-5 -50] [10 -90]
                                       [25 -40] [40 -80] [55 -30]
                                       [60 -70] [75 -20] [90 0]]
                                      [[-20 -50] [-5 0] [10 -40]
                                       [25 10] [40 -30] [55 20]
                                       [60 -20] [75 30] [90 50]]
                                      [[-20 0] [-5 50] [10 10]
                                       [25 60] [40 20] [55 70]
                                       [60 30] [75 80] [90 100]]]
                         :multi-line true
                         :legend {:line-names [(str
                                                 (get-label
                                                   1023)
                                                 " 1")
                                               (str
                                                 (get-label
                                                   1023)
                                                 " 2")
                                               (str
                                                 (get-label
                                                   1023)
                                                 " 3")]
                                  :position "right"}
                         :main-title (get-label
                                       1020)
                         :x-axis-title (get-label
                                         1021)
                         :y-axis-title (get-label
                                         1022)
                         :horizontal-grid-lines true
                         :vertical-grid-lines false
                         :width 500
                         :height 500
                         :x-minimum -40
                         :y-minimum -150
                         :x-maximum 120
                         :y-maximum 100}
        chart-config-vii {:bar-values [10 20 30 40 50]
                          ;:bar-labels [(str
                          ;               (get-label
                          ;                 1024)
                          ;               " 1")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 2")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 3")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 4")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 5")]
                          :bar-values-on-x-axis false
                          :value-type "number"
                          :multi-bars false
                          ;:legend {:bar-names [(str
                          ;                       (get-label
                          ;                         1025)
                          ;                       " 1")]
                          ;         :position "right"}
                          :main-title (get-label
                                        1020)
                          :x-axis-title (get-label
                                          1021)
                          :y-axis-title (get-label
                                          1022)
                          :horizontal-grid-lines true
                          :vertical-grid-lines false
                          :width 500
                          :height 500
                          :x-maximum nil
                          :y-maximum nil
                          :selected-language @cms/selected-language}
        svg-element-vii (chart/render-bar-chart
                          chart-config-vii)
        canvas-element-vii (cchart/render-bar-chart
                             chart-config-vii)
        chart-config-viii {:bar-values [10 20 30 40 50]
                           :bar-labels [(str
                                          (get-label
                                            1024)
                                          " 1")
                                        (str
                                          (get-label
                                            1024)
                                          " 2")
                                        (str
                                          (get-label
                                            1024)
                                          " 3")
                                        (str
                                          (get-label
                                            1024)
                                          " 4")
                                        (str
                                          (get-label
                                            1024)
                                          " 5")]
                           :bar-values-on-x-axis true
                           :value-type "number"
                           :multi-bars false
                           ;:legend {:bar-names [(str
                           ;                       (get-label
                           ;                         1025)
                           ;                       " 1")]
                           ;         :position "top"}
                           :main-title (get-label
                                         1020)
                           :x-axis-title (get-label
                                           1021)
                           :y-axis-title (get-label
                                           1022)
                           :horizontal-grid-lines false
                           :vertical-grid-lines true
                           :width 500
                           :height 500
                           :x-maximum nil
                           :y-maximum nil
                           :selected-language @cms/selected-language}
        svg-element-viii (chart/render-bar-chart
                           chart-config-viii)
        canvas-element-viii (cchart/render-bar-chart
                              chart-config-viii)
        chart-config-ix {:bar-values [[10 20 30 40 50]
                                      [50 40 30 20 10]
                                      [25 25 25 25 25]]
                         :bar-labels [(str
                                         (get-label
                                           1024)
                                         " 1")
                                       (str
                                         (get-label
                                           1024)
                                         " 2")
                                       (str
                                         (get-label
                                           1024)
                                         " 3")
                                       (str
                                         (get-label
                                           1024)
                                         " 4")
                                       (str
                                         (get-label
                                           1024)
                                         " 5")]
                         :bar-values-on-x-axis false
                         :value-type "number"
                         :multi-bars true
                         :legend {:bar-names [(str
                                                (get-label
                                                  1025)
                                                " 1")
                                              (str
                                                (get-label
                                                  1025)
                                                " 2")
                                              (str
                                                (get-label
                                                  1025)
                                                " 3")]
                                  :position "right"}
                         :main-title (get-label
                                       1020)
                         :x-axis-title (get-label
                                         1021)
                         :y-axis-title (get-label
                                         1022)
                         :horizontal-grid-lines true
                         :vertical-grid-lines false
                         :width 500
                         :height 500
                         :x-maximum nil
                         :y-maximum 50
                         :selected-language @cms/selected-language}
        svg-element-ix (chart/render-bar-chart
                         chart-config-ix)
        canvas-element-ix (cchart/render-bar-chart
                            chart-config-ix)
        chart-config-x {:bar-values [[10 20 30 40 50]
                                     [50 40 30 20 10]
                                     [25 25 25 25 25]]
                        ;:bar-labels [(str
                        ;               (get-label
                        ;                 1024)
                        ;               " 1")
                        ;             (str
                        ;               (get-label
                        ;                 1024)
                        ;               " 2")
                        ;             (str
                        ;               (get-label
                        ;                 1024)
                        ;               " 3")
                        ;             (str
                        ;               (get-label
                        ;                 1024)
                        ;               " 4")
                        ;             (str
                        ;               (get-label
                        ;                 1024)
                        ;               " 5")]
                        :bar-values-on-x-axis true
                        :value-type "number"
                        :multi-bars true
                        :legend {:bar-names [(str
                                               (get-label
                                                 1025)
                                               " 1")
                                             (str
                                               (get-label
                                                 1025)
                                               " 2")
                                             (str
                                               (get-label
                                                 1025)
                                               " 3")]
                                 :position "right"}
                        :main-title (get-label
                                      1020)
                        :x-axis-title (get-label
                                        1021)
                        :y-axis-title (get-label
                                        1022)
                        :horizontal-grid-lines false
                        :vertical-grid-lines true
                        :width 500
                        :height 500
                        :x-maximum 50
                        :y-maximum nil
                        :selected-language @cms/selected-language}
        svg-element-x (chart/render-bar-chart
                        chart-config-x)
        canvas-element-x (cchart/render-bar-chart
                           chart-config-x)
        chart-config-xi {:bar-values [december-2018
                                      january-2019
                                      february-2019
                                      march-2019
                                      april-2019]
                         ;:bar-labels [(str
                         ;               (get-label
                         ;                 1024)
                         ;               " 1")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 2")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 3")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 4")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 5")]
                         :bar-values-on-x-axis false
                         :value-type "date"
                         :multi-bars false
                         ;:legend {:bar-names [(str
                         ;                       (get-label
                         ;                         1025)
                         ;                       " 1")]
                         ;         :position "right"}
                         :main-title (get-label
                                       1020)
                         :x-axis-title (get-label
                                         1021)
                         :y-axis-title (get-label
                                         1022)
                         :horizontal-grid-lines true
                         :vertical-grid-lines false
                         :width 500
                         :height 500
                         :x-minimum nil
                         :y-minimum (.getTime
                                      november-2018)
                         :x-maximum nil
                         :y-maximum (.getTime
                                      may-2019)
                         :selected-language @cms/selected-language}
        svg-element-xi (chart/render-bar-chart
                         chart-config-xi)
        canvas-element-xi (cchart/render-bar-chart
                            chart-config-xi)
        chart-config-xii {:bar-values [march-2019
                                       april-2019
                                       may-2019
                                       jun-2019
                                       july-2019]
                          :bar-labels [(str
                                         (get-label
                                           1024)
                                         " 1")
                                       (str
                                         (get-label
                                           1024)
                                         " 2")
                                       (str
                                         (get-label
                                           1024)
                                         " 3")
                                       (str
                                         (get-label
                                           1024)
                                         " 4")
                                       (str
                                         (get-label
                                           1024)
                                         " 5")]
                          :bar-values-on-x-axis true
                          :value-type "date"
                          :multi-bars false
                          ;:legend {:bar-names [(str
                          ;                       (get-label
                          ;                         1025)
                          ;                       " 1")]
                          ;         :position "right"}
                          :main-title (get-label
                                        1020)
                          :x-axis-title (get-label
                                          1021)
                          :y-axis-title (get-label
                                          1022)
                          :horizontal-grid-lines false
                          :vertical-grid-lines true
                          :width 500
                          :height 500
                          :x-minimum (.getTime
                                       february-2019)
                          :y-minimum nil
                          :x-maximum (.getTime
                                       august-2019)
                          :y-maximum nil
                          :selected-language @cms/selected-language}
        svg-element-xii (chart/render-bar-chart
                          chart-config-xii)
        canvas-element-xii (cchart/render-bar-chart
                             chart-config-xii)
        chart-config-xiii {:bar-values [[december-2018
                                         january-2019
                                         february-2019
                                         march-2019
                                         april-2019]
                                        [april-2019
                                         march-2019
                                         february-2019
                                         january-2019
                                         december-2018]
                                        [february-2019
                                         february-2019
                                         february-2019
                                         february-2019
                                         february-2019]]
                           :bar-labels [(str
                                          (get-label
                                            1024)
                                          " 1")
                                        (str
                                          (get-label
                                            1024)
                                          " 2")
                                        (str
                                          (get-label
                                            1024)
                                          " 3")
                                        (str
                                          (get-label
                                            1024)
                                          " 4")
                                        (str
                                          (get-label
                                            1024)
                                          " 5")]
                           :bar-values-on-x-axis false
                           :value-type "date"
                           :multi-bars true
                           :legend {:bar-names [(str
                                                  (get-label
                                                    1025)
                                                  " 1")
                                                (str
                                                  (get-label
                                                    1025)
                                                  " 2")
                                                (str
                                                  (get-label
                                                    1025)
                                                  " 3")]
                                    :position "right"}
                           :main-title (get-label
                                         1020)
                           :x-axis-title (get-label
                                           1021)
                           :y-axis-title (get-label
                                           1022)
                           :horizontal-grid-lines true
                           :vertical-grid-lines false
                           :width 500
                           :height 500
                           :x-minimum nil
                           :y-minimum (.getTime
                                        november-2018)
                           :x-maximum nil
                           :y-maximum (.getTime
                                        may-2019)
                           :selected-language @cms/selected-language}
        svg-element-xiii (chart/render-bar-chart
                           chart-config-xiii)
        canvas-element-xiii (cchart/render-bar-chart
                              chart-config-xiii)
        chart-config-xiv {:bar-values [[december-2018
                                        january-2019
                                        february-2019
                                        march-2019
                                        april-2019]
                                       [april-2019
                                        march-2019
                                        february-2019
                                        january-2019
                                        december-2018]
                                       [february-2019
                                        february-2019
                                        february-2019
                                        february-2019
                                        february-2019]]
                          ;:bar-labels [(str
                          ;               (get-label
                          ;                 1024)
                          ;               " 1")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 2")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 3")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 4")
                          ;             (str
                          ;               (get-label
                          ;                 1024)
                          ;               " 5")]
                          :bar-values-on-x-axis true
                          :value-type "date"
                          :multi-bars true
                          :legend {:bar-names [(str
                                                 (get-label
                                                   1025)
                                                 " 1")
                                                (str
                                                  (get-label
                                                    1025)
                                                  " 2")
                                                (str
                                                  (get-label
                                                    1025)
                                                  " 3")]
                                   :position "right"}
                          :main-title (get-label
                                        1020)
                          :x-axis-title (get-label
                                          1021)
                          :y-axis-title (get-label
                                          1022)
                          :horizontal-grid-lines false
                          :vertical-grid-lines true
                          :width 500
                          :height 500
                          :x-minimum (.getTime
                                       november-2018)
                          :y-minimum nil
                          :x-maximum (.getTime
                                       may-2019)
                          :y-maximum nil
                          :selected-language @cms/selected-language}
        svg-element-xiv (chart/render-bar-chart
                          chart-config-xiv)
        canvas-element-xiv (cchart/render-bar-chart
                             chart-config-xiv)
        chart-config-xv {:bar-values [10000 20000 30000 40000 50000]
                         ;:bar-labels [(str
                         ;               (get-label
                         ;                 1024)
                         ;               " 1")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 2")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 3")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 4")
                         ;             (str
                         ;               (get-label
                         ;                 1024)
                         ;               " 5")]
                         :bar-values-on-x-axis false
                         :value-type "number"
                         :multi-bars false
                         ;:legend {:bar-names [(str
                         ;                       (get-label
                         ;                         1025)
                         ;                       " 1")]
                         ;         :position "right"}
                         :main-title (get-label
                                       1020)
                         :x-axis-title (get-label
                                         1021)
                         :y-axis-title (get-label
                                         1022)
                         :horizontal-grid-lines true
                         :vertical-grid-lines false
                         :width 500
                         :height 500
                         :x-maximum nil
                         :y-maximum nil
                         :selected-language @cms/selected-language}
        svg-element-xv (chart/render-bar-chart
                         chart-config-xv)
        canvas-element-xv (cchart/render-bar-chart
                            chart-config-xv)
        chart-config-xvi {:bar-values [10000000
                                       20000000
                                       30000000
                                       40000000
                                       50000000]
                          :bar-labels [(str
                                         (get-label
                                           1024)
                                         " 1")
                                       (str
                                         (get-label
                                           1024)
                                         " 2")
                                       (str
                                         (get-label
                                           1024)
                                         " 3")
                                       (str
                                         (get-label
                                           1024)
                                         " 4")
                                       (str
                                         (get-label
                                           1024)
                                         " 5")]
                          :bar-values-on-x-axis true
                          :value-type "number"
                          :multi-bars false
                          ;:legend {:bar-names [(str
                          ;                       (get-label
                          ;                         1025)
                          ;                       " 1")]
                          ;         :position "right"}
                          :main-title (get-label
                                        1020)
                          :x-axis-title (get-label
                                          1021)
                          :y-axis-title (get-label
                                          1022)
                          :horizontal-grid-lines false
                          :vertical-grid-lines true
                          :width 500
                          :height 500
                          :x-maximum nil
                          :y-maximum nil
                          :selected-language @cms/selected-language}
        svg-element-xvi (chart/render-bar-chart
                          chart-config-xvi)
        canvas-element-xvi (cchart/render-bar-chart
                             chart-config-xvi)
        chart-config-xvii {:bar-values [[10000000
                                         20000000
                                         30000000
                                         40000000
                                         50000000]
                                        [50000000
                                         40000000
                                         30000000
                                         20000000
                                         10000000]
                                        [25000000
                                         25000000
                                         25000000
                                         25000000
                                         25000000]]
                           :bar-labels [(str
                                          (get-label
                                            1024)
                                          " 1")
                                        (str
                                          (get-label
                                            1024)
                                          " 2")
                                        (str
                                          (get-label
                                            1024)
                                          " 3")
                                        (str
                                          (get-label
                                            1024)
                                          " 4")
                                        (str
                                          (get-label
                                            1024)
                                          " 5")]
                           :bar-values-on-x-axis false
                           :value-type "number"
                           :multi-bars true
                           :legend {:bar-names [(str
                                                  (get-label
                                                    1025)
                                                  " 1")
                                                (str
                                                  (get-label
                                                    1025)
                                                  " 2")
                                                (str
                                                  (get-label
                                                    1025)
                                                  " 3")]
                                    :position "right"}
                           :main-title (get-label
                                         1020)
                           :x-axis-title (get-label
                                           1021)
                           :y-axis-title (get-label
                                           1022)
                           :horizontal-grid-lines true
                           :vertical-grid-lines false
                           :width 500
                           :height 500
                           :x-maximum nil
                           :y-maximum 50000000
                           :selected-language @cms/selected-language}
        svg-element-xvii (chart/render-bar-chart
                           chart-config-xvii)
        canvas-element-xvii (cchart/render-bar-chart
                              chart-config-xvii)
        chart-config-xviii {:bar-values [[10000 20000 30000 40000 50000]
                                         [50000 40000 30000 20000 10000]
                                         [25000 25000 25000 25000 25000]]
                            ;:bar-labels [(str
                            ;               (get-label
                            ;                 1024)
                            ;               " 1")
                            ;             (str
                            ;               (get-label
                            ;                 1024)
                            ;               " 2")
                            ;             (str
                            ;               (get-label
                            ;                 1024)
                            ;               " 3")
                            ;             (str
                            ;               (get-label
                            ;                 1024)
                            ;               " 4")
                            ;             (str
                            ;               (get-label
                            ;                 1024)
                            ;               " 5")]
                            :bar-values-on-x-axis true
                            :value-type "number"
                            :multi-bars true
                            :legend {:bar-names [(str
                                                   (get-label
                                                     1025)
                                                   " 1")
                                                 (str
                                                   (get-label
                                                     1025)
                                                   " 2")
                                                 (str
                                                   (get-label
                                                     1025)
                                                   " 3")]
                                     :position "right"}
                            :main-title (get-label
                                          1020)
                            :x-axis-title (get-label
                                            1021)
                            :y-axis-title (get-label
                                            1022)
                            :horizontal-grid-lines false
                            :vertical-grid-lines true
                            :width 500
                            :height 500
                            :x-maximum 50000
                            :y-maximum nil
                            :selected-language @cms/selected-language}
        svg-element-xviii (chart/render-bar-chart
                            chart-config-xviii)
        canvas-element-xviii (cchart/render-bar-chart
                               chart-config-xviii)
        chart-config-xix {:pie-values [10 20 30]
                          :value-type "number"
                          :legend {:piece-names [(str
                                                   (get-label
                                                     1026)
                                                   " 1")
                                                 (str
                                                   (get-label
                                                     1026)
                                                   " 2")
                                                 (str
                                                   (get-label
                                                     1026)
                                                   " 3")]
                                   :position "top"}
                          :main-title (get-label
                                        1020)
                          :width 500
                          :height 500
                          :selected-language @cms/selected-language}
        svg-element-xix (chart/render-pie-chart
                          chart-config-xix)
        canvas-element-xix (cchart/render-pie-chart
                             chart-config-xix)
        chart-config-xx {:pie-values [20 20 20]
                         :value-type "percentage"
                         :legend {:piece-names [(str
                                                  (get-label
                                                    1026)
                                                  " 1")
                                                (str
                                                  (get-label
                                                    1026)
                                                  " 2")
                                                (str
                                                  (get-label
                                                    1026)
                                                  " 3")]
                                  :position "right"}
                         :main-title (get-label
                                       1020)
                         :width 500
                         :height 500
                         :selected-language @cms/selected-language}
        svg-element-xx (chart/render-pie-chart
                         chart-config-xx)
        canvas-element-xx (cchart/render-pie-chart
                            chart-config-xx)
        chart-config-xxi {:pie-values [30 15 15]
                          :value-type "percentage"
                          :legend {:piece-names [(str
                                                   (get-label
                                                     1026)
                                                   " 1")
                                                 (str
                                                   (get-label
                                                     1026)
                                                   " 2")
                                                 (str
                                                   (get-label
                                                     1026)
                                                   " 3")]
                                   :position "bottom"}
                          :main-title (get-label
                                        1020)
                          :width 500
                          :height 500
                          :selected-language @cms/selected-language}
        svg-element-xxi (chart/render-pie-chart
                          chart-config-xxi)
        canvas-element-xxi (cchart/render-pie-chart
                             chart-config-xxi)
        chart-config-xxii {:pie-values [10 100 50]
                           :value-type "percentage"
                           :legend {:piece-names [(str
                                                    (get-label
                                                      1026)
                                                    " 1")
                                                  (str
                                                    (get-label
                                                      1026)
                                                    " 2")
                                                  (str
                                                    (get-label
                                                      1026)
                                                    " 3")]
                                    :position "left"}
                           :main-title (get-label
                                         1020)
                           :width 500
                           :height 500
                           :selected-language @cms/selected-language}
        svg-element-xxii (chart/render-pie-chart
                           chart-config-xxii)
        canvas-element-xxii (cchart/render-pie-chart
                              chart-config-xxii)]
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config
        chart/render-line-chart
        cchart/render-line-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-i
        chart/render-line-chart
        cchart/render-line-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-ii
        chart/render-line-chart
        cchart/render-line-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-iii
        chart/render-line-chart
        cchart/render-line-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-iv
        chart/render-line-chart
        cchart/render-line-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-v
        chart/render-line-chart
        cchart/render-line-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-vi
        chart/render-line-chart
        cchart/render-line-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-vii
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-viii
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-ix
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-x
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xi
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xii
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xiii
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xiv
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xv
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xvi
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xvii
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xviii
        chart/render-bar-chart
        cchart/render-bar-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xix
        chart/render-pie-chart
        cchart/render-pie-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xx
        chart/render-pie-chart
        cchart/render-pie-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xxi
        chart/render-pie-chart
        cchart/render-pie-chart))
    (md/append-element
      ".content"
      (display-export-chart-link
        chart-config-xxii
        chart/render-pie-chart
        cchart/render-pie-chart))
   ))

