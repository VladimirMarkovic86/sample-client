(ns sample-client.chart.controller
  (:require [js-lib.core :as md]
            [svg-lib.chart.core :as chart]
            [common-middle.session :as cms]
            [language-lib.core :refer [get-label]]))

(defn display-charts
  "Renders charts in content area"
  []
  (md/remove-element-content
    ".content")
  (let [svg-element (chart/render-line-chart
                      {:dot-values [[20 100] [25 170] [30 110]
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
                       :svg-width 500
                       :svg-height 500
                       :x-minimum 0
                       :y-minimum 0
                       :x-maximum 80
                       :y-maximum 300})
        svg-element-i (chart/render-line-chart
                        {:dot-values [[23 106] [25 171] [32 119]
                                      [36 164] [41 213] [44 187]
                                      [52 148] [56 166] [62 102]]
                         :horizontal-grid-lines true})
        svg-element-ii (chart/render-line-chart
                         {:dot-values [[[23 106] [25 171] [32 119]
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
                          :y-maximum 250})
        svg-element-iii (chart/render-line-chart
                          {:dot-values [[[230000 1060000] [250000 1710000] [320000 1190000]
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
                           :selected-language @cms/selected-language})
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
        svg-element-iv (chart/render-line-chart
                         {:dot-values [[november-2018 1]
                                       [december-2018 2]
                                       [january-2019 3]
                                       [february-2019 4]
                                       [march-2019 5]
                                       [april-2019 6]
                                       [may-2019 7]
                                       [jun-2019 8]
                                       [july-2019 9]]
                          :x-value-type "date"
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
                          :selected-language @cms/selected-language})
        svg-element-v (chart/render-line-chart
                        {:dot-values [[1 november-2018]
                                      [2 december-2018]
                                      [3 january-2019]
                                      [4 february-2019]
                                      [5 march-2019]
                                      [6 april-2019]
                                      [7 may-2019]
                                      [8 jun-2019]
                                      [9 july-2019]]
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
                         :selected-language @cms/selected-language})
        svg-element-vi (chart/render-line-chart
                         {:dot-values [[[-20 -100] [-5 -50] [10 -90]
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
                          :svg-width 500
                          :svg-height 500
                          :x-minimum -40
                          :y-minimum -150
                          :x-maximum 120
                          :y-maximum 100})
        svg-element-vii (chart/render-bar-chart
                          {:bar-values [10 20 30 40 50]
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
                           :svg-width 500
                           :svg-height 500
                           :x-maximum nil
                           :y-maximum nil
                           :selected-language @cms/selected-language})
        svg-element-viii (chart/render-bar-chart
                           {:bar-values [10 20 30 40 50]
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
                            :svg-width 500
                            :svg-height 500
                            :x-maximum nil
                            :y-maximum nil
                            :selected-language @cms/selected-language})
        svg-element-ix (chart/render-bar-chart
                         {:bar-values [[10 20 30 40 50]
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
                          :svg-width 500
                          :svg-height 500
                          :x-maximum nil
                          :y-maximum 50
                          :selected-language @cms/selected-language})
        svg-element-x (chart/render-bar-chart
                        {:bar-values [[10 20 30 40 50]
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
                         :svg-width 500
                         :svg-height 500
                         :x-maximum 50
                         :y-maximum nil
                         :selected-language @cms/selected-language})
        svg-element-xi (chart/render-bar-chart
                         {:bar-values [december-2018
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
                          :svg-width 500
                          :svg-height 500
                          :x-minimum nil
                          :y-minimum (.getTime
                                       november-2018)
                          :x-maximum nil
                          :y-maximum (.getTime
                                       may-2019)
                          :selected-language @cms/selected-language})
        svg-element-xii (chart/render-bar-chart
                          {:bar-values [march-2019
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
                           :svg-width 500
                           :svg-height 500
                           :x-minimum (.getTime
                                        february-2019)
                           :y-minimum nil
                           :x-maximum (.getTime
                                        august-2019)
                           :y-maximum nil
                           :selected-language @cms/selected-language})
        svg-element-xiii (chart/render-bar-chart
                           {:bar-values [[december-2018
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
                            :svg-width 500
                            :svg-height 500
                            :x-minimum nil
                            :y-minimum (.getTime
                                         november-2018)
                            :x-maximum nil
                            :y-maximum (.getTime
                                         may-2019)
                            :selected-language @cms/selected-language})
        svg-element-xiv (chart/render-bar-chart
                          {:bar-values [[december-2018
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
                           :svg-width 500
                           :svg-height 500
                           :x-minimum (.getTime
                                        november-2018)
                           :y-minimum nil
                           :x-maximum (.getTime
                                        may-2019)
                           :y-maximum nil
                           :selected-language @cms/selected-language})
        svg-element-xv (chart/render-bar-chart
                         {:bar-values [10000 20000 30000 40000 50000]
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
                          :svg-width 500
                          :svg-height 500
                          :x-maximum nil
                          :y-maximum nil
                          :selected-language @cms/selected-language})
        svg-element-xvi (chart/render-bar-chart
                          {:bar-values [10000000
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
                           :svg-width 500
                           :svg-height 500
                           :x-maximum nil
                           :y-maximum nil
                           :selected-language @cms/selected-language})
        svg-element-xvii (chart/render-bar-chart
                           {:bar-values [[10000000
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
                            :svg-width 500
                            :svg-height 500
                            :x-maximum nil
                            :y-maximum 50000000
                            :selected-language @cms/selected-language})
        svg-element-xviii (chart/render-bar-chart
                            {:bar-values [[10000 20000 30000 40000 50000]
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
                             :svg-width 500
                             :svg-height 500
                             :x-maximum 50000
                             :y-maximum nil
                             :selected-language @cms/selected-language})
        svg-element-xix (chart/render-pie-chart
                          {:pie-values [10 20 30]
                           :value-type "number"
                           :legend {:bar-names [(str
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
                           :svg-width 500
                           :svg-height 500
                           :selected-language @cms/selected-language})
        svg-element-xx (chart/render-pie-chart
                         {:pie-values [20 20 20]
                          :value-type "percentage"
                          :legend {:bar-names [(str
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
                          :svg-width 500
                          :svg-height 500
                          :selected-language @cms/selected-language})
        svg-element-xxi (chart/render-pie-chart
                          {:pie-values [30 15 15]
                           :value-type "percentage"
                           :legend {:bar-names [(str
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
                           :svg-width 500
                           :svg-height 500
                           :selected-language @cms/selected-language})
        svg-element-xxii (chart/render-pie-chart
                           {:pie-values [10 100 50]
                            :value-type "percentage"
                            :legend {:bar-names [(str
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
                            :svg-width 500
                            :svg-height 500
                            :selected-language @cms/selected-language})]
    (md/append-element
      ".content"
      svg-element)
    (md/append-element
      ".content"
      svg-element-i)
    (md/append-element
      ".content"
      svg-element-ii)
    (md/append-element
      ".content"
      svg-element-iii)
    (md/append-element
      ".content"
      svg-element-iv)
    (md/append-element
      ".content"
      svg-element-v)
    (md/append-element
      ".content"
      svg-element-vi)
    (md/append-element
      ".content"
      svg-element-vii)
    (md/append-element
      ".content"
      svg-element-viii)
    (md/append-element
      ".content"
      svg-element-ix)
    (md/append-element
      ".content"
      svg-element-x)
    (md/append-element
      ".content"
      svg-element-xi)
    (md/append-element
      ".content"
      svg-element-xii)
    (md/append-element
      ".content"
      svg-element-xiii)
    (md/append-element
      ".content"
      svg-element-xiv)
    (md/append-element
      ".content"
      svg-element-xv)
    (md/append-element
      ".content"
      svg-element-xvi)
    (md/append-element
      ".content"
      svg-element-xvii)
    (md/append-element
      ".content"
      svg-element-xviii)
    (md/append-element
      ".content"
      svg-element-xix)
    (md/append-element
      ".content"
      svg-element-xx)
    (md/append-element
      ".content"
      svg-element-xxi)
    (md/append-element
      ".content"
      svg-element-xxii))
 )

