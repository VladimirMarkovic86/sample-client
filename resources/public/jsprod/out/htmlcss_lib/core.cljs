(ns htmlcss-lib.core)

(defn- crt
  "Create clojure map that represents HTML element
   
   el String that represents HTML element
   cont Content of HTML that can be string, new crt fn call or vector of crt fn calls
   attrs Attrs is a map of attributes for particular HTML element
    {:style {:width \"50px\"}
     :id \"id\"}
   events Events is a map of events on particular HTML element
    {:onclick {:evt-fn <fn-name>
               :evt-p <fn-param-name>}}
   "
  [el
   & [cont
      attrs
      events
      dynamic-attrs]]
  {:el el
   :events events
   :attrs attrs
   :dynamic-attrs dynamic-attrs
   :cont cont})

(defn html
  "Shortcut for clojure map representation of html tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "html"
       cont
       attrs
       events
       dynamic-attrs))

(defn head
  "Shortcut for clojure map representation of head tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "head"
       cont
       attrs
       events
       dynamic-attrs))

(defn title
  "Shortcut for clojure map representation of title tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "title"
       cont
       attrs
       events
       dynamic-attrs))

(defn body
  "Shortcut for clojure map representation of body tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "body"
       cont
       attrs
       events
       dynamic-attrs))

(defn p
  "Shortcut for clojure map representation of p tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "p"
       cont
       attrs
       events
       dynamic-attrs))

(defn h1
  "Shortcut for clojure map representation of h1 tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "h1"
       cont
       attrs
       events
       dynamic-attrs))

(defn h2
  "Shortcut for clojure map representation of h2 tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "h2"
       cont
       attrs
       events
       dynamic-attrs))

(defn h3
  "Shortcut for clojure map representation of h3 tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "h3"
       cont
       attrs
       events
       dynamic-attrs))

(defn h4
  "Shortcut for clojure map representation of h4 tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "h4"
       cont
       attrs
       events
       dynamic-attrs))

(defn h5
  "Shortcut for clojure map representation of h5 tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "h5"
       cont
       attrs
       events
       dynamic-attrs))

(defn h6
  "Shortcut for clojure map representation of h6 tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "h6"
       cont
       attrs
       events
       dynamic-attrs))

(defn pre
  "Shortcut for clojure map representation of pre tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "pre"
       cont
       attrs
       events
       dynamic-attrs))

(defn b
  "Shortcut for clojure map representation of b tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "b"
       cont
       attrs
       events
       dynamic-attrs))

(defn strong
  "Shortcut for clojure map representation of strong tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "strong"
       cont
       attrs
       events
       dynamic-attrs))

(defn i
  "Shortcut for clojure map representation of i tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "i"
       cont
       attrs
       events
       dynamic-attrs))

(defn em
  "Shortcut for clojure map representation of em tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "em"
       cont
       attrs
       events
       dynamic-attrs))

(defn mark
  "Shortcut for clojure map representation of mark tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "mark"
       cont
       attrs
       events
       dynamic-attrs))

(defn small
  "Shortcut for clojure map representation of small tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "small"
       cont
       attrs
       events
       dynamic-attrs))

(defn del
  "Shortcut for clojure map representation of del tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "del"
       cont
       attrs
       events
       dynamic-attrs))

(defn ins
  "Shortcut for clojure map representation of ins tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "ins"
       cont
       attrs
       events
       dynamic-attrs))

(defn sub
  "Shortcut for clojure map representation of sub tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "sub"
       cont
       attrs
       events
       dynamic-attrs))

(defn sup
  "Shortcut for clojure map representation of sup tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "sup"
       cont
       attrs
       events
       dynamic-attrs))

(defn q
  "Shortcut for clojure map representation of q tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "q"
       cont
       attrs
       events
       dynamic-attrs))

(defn blockquote
  "Shortcut for clojure map representation of blockquote tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "blockquote"
       cont
       attrs
       events
       dynamic-attrs))

(defn nav
  "Shortcut for clojure map representation of nav tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "nav"
       cont
       attrs
       events
       dynamic-attrs))

(defn a
  "Shortcut for clojure map representation of a tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "a"
       cont
       attrs
       events
       dynamic-attrs))

(defn img
  "Shortcut for clojure map representation of img tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "img"
       cont
       attrs
       events
       dynamic-attrs))

(defn video
  "Shortcut for clojure map representation of video tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "video"
       cont
       attrs
       events
       dynamic-attrs))

(defn source
  "Shortcut for clojure map representation of source tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "source"
       cont
       attrs
       events
       dynamic-attrs))

(defn button
  "Shortcut for clojure map representation of button tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "button"
       cont
       attrs
       events
       dynamic-attrs))

(defn input
  "Shortcut for clojure map representation of input tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "input"
       cont
       attrs
       events
       dynamic-attrs))

(defn textarea
  "Shortcut for clojure map representation of textarea tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "textarea"
       cont
       attrs
       events
       dynamic-attrs))

(defn select
  "Shortcut for clojure map representation of select tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "select"
       cont
       attrs
       events
       dynamic-attrs))

(defn option
  "Shortcut for clojure map representation of option tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "option"
       cont
       attrs
       events
       dynamic-attrs))

(defn ol
  "Shortcut for clojure map representation of ol tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "ol"
       cont
       attrs
       events
       dynamic-attrs))

(defn ul
  "Shortcut for clojure map representation of ul tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "ul"
       cont
       attrs
       events
       dynamic-attrs))

(defn li
  "Shortcut for clojure map representation of li tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "li"
       cont
       attrs
       events
       dynamic-attrs))

(defn table
  "Shortcut for clojure map representation of table tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "table"
       cont
       attrs
       events
       dynamic-attrs))

(defn thead
  "Shortcut for clojure map representation of thead tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "thead"
       cont
       attrs
       events
       dynamic-attrs))

(defn tbody
  "Shortcut for clojure map representation of tbody tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "tbody"
       cont
       attrs
       events
       dynamic-attrs))

(defn tr
  "Shortcut for clojure map representation of tr tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "tr"
       cont
       attrs
       events
       dynamic-attrs))

(defn th
  "Shortcut for clojure map representation of th tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "th"
       cont
       attrs
       events
       dynamic-attrs))

(defn td
  "Shortcut for clojure map representation of td tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "td"
       cont
       attrs
       events
       dynamic-attrs))

(defn div
  "Shortcut for clojure map representation of div tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "div"
       cont
       attrs
       events
       dynamic-attrs))

(defn label
  "Shortcut for clojure map representation of label tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "label"
       cont
       attrs
       events
       dynamic-attrs))

(defn span
  "Shortcut for clojure map representation of span tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "span"
       cont
       attrs
       events
       dynamic-attrs))

(defn menu
  "Shortcut for clojure map representation of menu tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "menu"
       cont
       attrs
       events
       dynamic-attrs))

(defn menuitem
  "Shortcut for clojure map representation of menuitem tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "menuitem"
       cont
       attrs
       events
       dynamic-attrs))

(defn style
  "Shortcut for clojure map representation of style tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "style"
       cont
       (assoc attrs :type "text/css")
       events
       dynamic-attrs))

(defn script
  "Shortcut for clojure map representation of script tag"
  [& [cont
      attrs
      events
      dynamic-attrs]]
  (crt "script"
       cont
       (assoc attrs :type "text/javascript")
       events
       dynamic-attrs))

;(defn css
; ""
; [selector
;  props]
; (str selector)
; )

;(defn keyframes
; ""
; [animation-name
;  & [props]]
; (let [props-keys (keys props)]
;  
;  )
; )

;(defn media
; ""
; []
; 
; )

(defn html?
  "Is data of HTML type"
  [data]
  (when data
    (when-let [data-type-name (aget
                                (type data)
                                "name")]
      (> (.indexOf
           data-type-name
           "HTML")
         -1))
   ))

(defn- generate-html
  "Generates HTML element out of clojure map created by crt fn"
  [data]
  (let [result (atom nil)]
    (when (map? data)
      (let [el (:el data)
            cont (:cont data)
            new-element (.createElement
                          js/document
                          el)
            attrs (:attrs data)
            events (:events data)
            dynamic-attrs (:dynamic-attrs data)]
       (doseq [[attr-name
                attr-value] attrs]
        (let [attr-cont (atom "")]
          (if (and (= attr-name
                      :style)
                   (map? attr-value))
            (doseq [[prop-name
                     prop-value] attr-value]
             (swap! attr-cont str (name prop-name)
                                  ": "
                                  prop-value
                                  "; "))
            (swap! attr-cont str attr-value))
          (.setAttribute new-element (name attr-name)
                                     @attr-cont))
        )       
       (doseq [[evt-name
                evt-conf] events]
         (when (map? evt-conf)
           (let [{evt-fn :evt-fn
                  evt-p :evt-p} evt-conf]
             (aset
               new-element
               (name evt-name)
               ((fn []
                  (fn [event]
                    (evt-fn
                      evt-p
                      new-element
                      event))
                 ))
              ))
          )
         (when (vector? evt-conf)
           (doseq [{evt-fn :evt-fn
                    evt-p :evt-p} evt-conf]
             (let [attached-evts (aget
                                   new-element
                                   (name evt-name))
                   
                   ]
               (.addEventListener
                 new-element
                 (.replace
                   (name evt-name)
                   "on"
                   "")
                 ((fn []
                    (fn [event]
                      (evt-fn
                        evt-p
                        new-element
                        event))
                   ))
                ))
            ))
        )
       (doseq [[dyn-attr-name
                dyn-attr-value] dynamic-attrs]
         (aset
           new-element
           (name dyn-attr-name)
           dyn-attr-value))
       (when (or (string? cont)
                 (number? cont))
         (aset new-element "innerHTML" cont))
       (when (vector? cont)
         (doseq [cont-element cont]
           (when-let [generated-elem (generate-html
                                       cont-element)]
             (.appendChild
               new-element
               generated-elem))
          ))
       (when (map? cont)
         (when-let [generated-elem (generate-html
                                     cont)]
           (.appendChild
             new-element
             generated-elem))
        )
       (when (html? cont)
         (.appendChild
           new-element
           cont))
       (reset!
         result
         new-element))
     )
    (when (vector? data)
      (let [generated-htmls (atom [])]
        (doseq [data-element data]
          (when-let [generated-elem (generate-html
                                      data-element)]
            (swap!
              generated-htmls
              conj
              generated-elem))
         )
        (reset!
          result
          @generated-htmls))
     )
    (when (html? data)
      (reset!
        result
        data))
    @result))

(defn anmtn
  "Generate map that represents animation in css style
   
   animation-name Is animation name
   from-props Is map of properties at the start of animation
    {:width \"50px\"}
   to-props Is map of properties at the end of animation
    {:width \"100px\"}"
  [animation-name
   from-props
   to-props]
  {:anim (str
           "@keyframes "
           animation-name)
   :from from-props
   :to to-props})

(defn slctr
  "Generate map that represents selector and it's properties
   
   selector Is a css selector
   props-map Is map of properties applied to element selected by selector"
  [selector
   props-map]
  {:sel selector
   :props props-map})

(defn stl
  "Generate map that represents style HTML element
  
   id Is identification of style HTML element
   cont Is a content of style HTML element that can be map generated by anmtn or slctr fns
    or vector of these maps"
  [id
   & cont]
  {:attrs {:id id
           :type "text/css"}
   :cont (vec cont)})

(defn- form-style-content
  "Generate string that represents selector or animation of style HTML element"
  [data]
  (let [sel (:sel data)
        props (:props data)
        anim (:anim data)
        from-props (:from data)
        to-props (:to data)
        content (atom "")]
    (when sel
      (swap! content str sel
                         " { ")
      (doseq [[prop-name
               prop-value] props]
        (swap! content str (name prop-name)
                           ": "
                           prop-value
                           "; "))
     )
    (when anim
      (swap! content str anim
                         " { "
                         "from { ")
      (doseq [[prop-name
               prop-value] from-props]
        (swap! content str (name prop-name)
                           ": "
                           prop-value
                           "; "))
      (swap! content str "} ")
      (swap! content str "to { ")
      (doseq [[prop-name
               prop-value] to-props]
        (swap! content str (name prop-name)
                           ": "
                           prop-value
                           "; "))
      (swap! content str "} "))
    (swap! content str "} ")
    @content))

(defn- generate-style
  "Generates style HTML element from clojure map generated by stl fn"
  [data]
  (when (map? data)
    (let [new-element (.createElement
                        js/document
                        "style")
          attrs (:attrs data)
          cont (:cont data)]
      (if (string? cont)
        (aset new-element "innerHTML" cont)
        (if (vector? cont)
          (doseq [cont-element cont]
            (aset new-element "innerHTML" (str (aget new-element "innerHTML")
                                               " "
                                               (form-style-content cont-element))
             ))
          (if (map? cont)
            (aset new-element "innerHTML" (form-style-content cont))
            (aset new-element "innerHTML" (form-style-content data))
           ))
       )
      (doseq [[attr-name
               attr-value] attrs]
        (.setAttribute new-element (name attr-name)
                                   attr-value))
      new-element))
 )

(defn gen
  "Generate HTML element from map generated by crt or stl fns"
  [data
  & [tag-type]]
  (if (= tag-type
         "style")
    (generate-style
      data)
    (generate-html
      data))
 )

