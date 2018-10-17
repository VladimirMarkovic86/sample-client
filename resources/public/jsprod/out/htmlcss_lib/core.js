// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('htmlcss_lib.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Create clojure map that represents HTML element
 * 
 * el String that represents HTML element
 * cont Content of HTML that can be string, new crt fn call or vector of crt fn calls
 * attrs Attrs is a map of attributes for particular HTML element
 *  {:style {:width "50px"}
 *   :id "id"}
 * events Events is a map of events on particular HTML element
 *  {:onclick {:evt-fn <fn-name>
 *             :evt-p <fn-param-name>}}
 * 
 */
htmlcss_lib.core.crt = (function htmlcss_lib$core$crt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6195 = arguments.length;
var i__4532__auto___6196 = (0);
while(true){
if((i__4532__auto___6196 < len__4531__auto___6195)){
args__4534__auto__.push((arguments[i__4532__auto___6196]));

var G__6197 = (i__4532__auto___6196 + (1));
i__4532__auto___6196 = G__6197;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic = (function (el,p__6191){
var vec__6192 = p__6191;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6192,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6192,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6192,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6192,(3),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$el,el,cljs.core.cst$kw$events,events,cljs.core.cst$kw$attrs,attrs,cljs.core.cst$kw$dynamic_DASH_attrs,dynamic_attrs,cljs.core.cst$kw$cont,cont], null);
});

htmlcss_lib.core.crt.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
htmlcss_lib.core.crt.cljs$lang$applyTo = (function (seq6189){
var G__6190 = cljs.core.first(seq6189);
var seq6189__$1 = cljs.core.next(seq6189);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6190,seq6189__$1);
});

/**
 * Shortcut for clojure map representation of html tag
 */
htmlcss_lib.core.html = (function htmlcss_lib$core$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6203 = arguments.length;
var i__4532__auto___6204 = (0);
while(true){
if((i__4532__auto___6204 < len__4531__auto___6203)){
args__4534__auto__.push((arguments[i__4532__auto___6204]));

var G__6205 = (i__4532__auto___6204 + (1));
i__4532__auto___6204 = G__6205;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (p__6199){
var vec__6200 = p__6199;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6200,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6200,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6200,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6200,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("html",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.html.cljs$lang$applyTo = (function (seq6198){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6198));
});

/**
 * Shortcut for clojure map representation of head tag
 */
htmlcss_lib.core.head = (function htmlcss_lib$core$head(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6211 = arguments.length;
var i__4532__auto___6212 = (0);
while(true){
if((i__4532__auto___6212 < len__4531__auto___6211)){
args__4534__auto__.push((arguments[i__4532__auto___6212]));

var G__6213 = (i__4532__auto___6212 + (1));
i__4532__auto___6212 = G__6213;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.head.cljs$core$IFn$_invoke$arity$variadic = (function (p__6207){
var vec__6208 = p__6207;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6208,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6208,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6208,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6208,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("head",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.head.cljs$lang$applyTo = (function (seq6206){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6206));
});

/**
 * Shortcut for clojure map representation of title tag
 */
htmlcss_lib.core.title = (function htmlcss_lib$core$title(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6219 = arguments.length;
var i__4532__auto___6220 = (0);
while(true){
if((i__4532__auto___6220 < len__4531__auto___6219)){
args__4534__auto__.push((arguments[i__4532__auto___6220]));

var G__6221 = (i__4532__auto___6220 + (1));
i__4532__auto___6220 = G__6221;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__6215){
var vec__6216 = p__6215;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6216,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6216,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6216,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6216,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.title.cljs$lang$applyTo = (function (seq6214){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6214));
});

/**
 * Shortcut for clojure map representation of body tag
 */
htmlcss_lib.core.body = (function htmlcss_lib$core$body(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6227 = arguments.length;
var i__4532__auto___6228 = (0);
while(true){
if((i__4532__auto___6228 < len__4531__auto___6227)){
args__4534__auto__.push((arguments[i__4532__auto___6228]));

var G__6229 = (i__4532__auto___6228 + (1));
i__4532__auto___6228 = G__6229;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.body.cljs$core$IFn$_invoke$arity$variadic = (function (p__6223){
var vec__6224 = p__6223;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6224,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6224,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6224,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6224,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("body",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.body.cljs$lang$applyTo = (function (seq6222){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6222));
});

/**
 * Shortcut for clojure map representation of p tag
 */
htmlcss_lib.core.p = (function htmlcss_lib$core$p(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6235 = arguments.length;
var i__4532__auto___6236 = (0);
while(true){
if((i__4532__auto___6236 < len__4531__auto___6235)){
args__4534__auto__.push((arguments[i__4532__auto___6236]));

var G__6237 = (i__4532__auto___6236 + (1));
i__4532__auto___6236 = G__6237;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.p.cljs$core$IFn$_invoke$arity$variadic = (function (p__6231){
var vec__6232 = p__6231;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6232,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6232,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6232,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6232,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("p",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.p.cljs$lang$applyTo = (function (seq6230){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6230));
});

/**
 * Shortcut for clojure map representation of h1 tag
 */
htmlcss_lib.core.h1 = (function htmlcss_lib$core$h1(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6243 = arguments.length;
var i__4532__auto___6244 = (0);
while(true){
if((i__4532__auto___6244 < len__4531__auto___6243)){
args__4534__auto__.push((arguments[i__4532__auto___6244]));

var G__6245 = (i__4532__auto___6244 + (1));
i__4532__auto___6244 = G__6245;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.h1.cljs$core$IFn$_invoke$arity$variadic = (function (p__6239){
var vec__6240 = p__6239;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("h1",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.h1.cljs$lang$applyTo = (function (seq6238){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6238));
});

/**
 * Shortcut for clojure map representation of h2 tag
 */
htmlcss_lib.core.h2 = (function htmlcss_lib$core$h2(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6251 = arguments.length;
var i__4532__auto___6252 = (0);
while(true){
if((i__4532__auto___6252 < len__4531__auto___6251)){
args__4534__auto__.push((arguments[i__4532__auto___6252]));

var G__6253 = (i__4532__auto___6252 + (1));
i__4532__auto___6252 = G__6253;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.h2.cljs$core$IFn$_invoke$arity$variadic = (function (p__6247){
var vec__6248 = p__6247;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6248,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6248,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6248,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6248,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("h2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.h2.cljs$lang$applyTo = (function (seq6246){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6246));
});

/**
 * Shortcut for clojure map representation of h3 tag
 */
htmlcss_lib.core.h3 = (function htmlcss_lib$core$h3(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6259 = arguments.length;
var i__4532__auto___6260 = (0);
while(true){
if((i__4532__auto___6260 < len__4531__auto___6259)){
args__4534__auto__.push((arguments[i__4532__auto___6260]));

var G__6261 = (i__4532__auto___6260 + (1));
i__4532__auto___6260 = G__6261;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.h3.cljs$core$IFn$_invoke$arity$variadic = (function (p__6255){
var vec__6256 = p__6255;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("h3",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.h3.cljs$lang$applyTo = (function (seq6254){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6254));
});

/**
 * Shortcut for clojure map representation of h4 tag
 */
htmlcss_lib.core.h4 = (function htmlcss_lib$core$h4(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6267 = arguments.length;
var i__4532__auto___6268 = (0);
while(true){
if((i__4532__auto___6268 < len__4531__auto___6267)){
args__4534__auto__.push((arguments[i__4532__auto___6268]));

var G__6269 = (i__4532__auto___6268 + (1));
i__4532__auto___6268 = G__6269;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.h4.cljs$core$IFn$_invoke$arity$variadic = (function (p__6263){
var vec__6264 = p__6263;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6264,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6264,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6264,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6264,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("h4",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.h4.cljs$lang$applyTo = (function (seq6262){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6262));
});

/**
 * Shortcut for clojure map representation of h5 tag
 */
htmlcss_lib.core.h5 = (function htmlcss_lib$core$h5(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6275 = arguments.length;
var i__4532__auto___6276 = (0);
while(true){
if((i__4532__auto___6276 < len__4531__auto___6275)){
args__4534__auto__.push((arguments[i__4532__auto___6276]));

var G__6277 = (i__4532__auto___6276 + (1));
i__4532__auto___6276 = G__6277;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.h5.cljs$core$IFn$_invoke$arity$variadic = (function (p__6271){
var vec__6272 = p__6271;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("h5",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.h5.cljs$lang$applyTo = (function (seq6270){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6270));
});

/**
 * Shortcut for clojure map representation of h6 tag
 */
htmlcss_lib.core.h6 = (function htmlcss_lib$core$h6(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6283 = arguments.length;
var i__4532__auto___6284 = (0);
while(true){
if((i__4532__auto___6284 < len__4531__auto___6283)){
args__4534__auto__.push((arguments[i__4532__auto___6284]));

var G__6285 = (i__4532__auto___6284 + (1));
i__4532__auto___6284 = G__6285;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.h6.cljs$core$IFn$_invoke$arity$variadic = (function (p__6279){
var vec__6280 = p__6279;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("h6",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.h6.cljs$lang$applyTo = (function (seq6278){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6278));
});

/**
 * Shortcut for clojure map representation of pre tag
 */
htmlcss_lib.core.pre = (function htmlcss_lib$core$pre(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6291 = arguments.length;
var i__4532__auto___6292 = (0);
while(true){
if((i__4532__auto___6292 < len__4531__auto___6291)){
args__4534__auto__.push((arguments[i__4532__auto___6292]));

var G__6293 = (i__4532__auto___6292 + (1));
i__4532__auto___6292 = G__6293;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.pre.cljs$core$IFn$_invoke$arity$variadic = (function (p__6287){
var vec__6288 = p__6287;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6288,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6288,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6288,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6288,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("pre",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.pre.cljs$lang$applyTo = (function (seq6286){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6286));
});

/**
 * Shortcut for clojure map representation of b tag
 */
htmlcss_lib.core.b = (function htmlcss_lib$core$b(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6299 = arguments.length;
var i__4532__auto___6300 = (0);
while(true){
if((i__4532__auto___6300 < len__4531__auto___6299)){
args__4534__auto__.push((arguments[i__4532__auto___6300]));

var G__6301 = (i__4532__auto___6300 + (1));
i__4532__auto___6300 = G__6301;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.b.cljs$core$IFn$_invoke$arity$variadic = (function (p__6295){
var vec__6296 = p__6295;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("b",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.b.cljs$lang$applyTo = (function (seq6294){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6294));
});

/**
 * Shortcut for clojure map representation of strong tag
 */
htmlcss_lib.core.strong = (function htmlcss_lib$core$strong(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6307 = arguments.length;
var i__4532__auto___6308 = (0);
while(true){
if((i__4532__auto___6308 < len__4531__auto___6307)){
args__4534__auto__.push((arguments[i__4532__auto___6308]));

var G__6309 = (i__4532__auto___6308 + (1));
i__4532__auto___6308 = G__6309;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.strong.cljs$core$IFn$_invoke$arity$variadic = (function (p__6303){
var vec__6304 = p__6303;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6304,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6304,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6304,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6304,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("strong",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.strong.cljs$lang$applyTo = (function (seq6302){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6302));
});

/**
 * Shortcut for clojure map representation of i tag
 */
htmlcss_lib.core.i = (function htmlcss_lib$core$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6315 = arguments.length;
var i__4532__auto___6316 = (0);
while(true){
if((i__4532__auto___6316 < len__4531__auto___6315)){
args__4534__auto__.push((arguments[i__4532__auto___6316]));

var G__6317 = (i__4532__auto___6316 + (1));
i__4532__auto___6316 = G__6317;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.i.cljs$core$IFn$_invoke$arity$variadic = (function (p__6311){
var vec__6312 = p__6311;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("i",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.i.cljs$lang$applyTo = (function (seq6310){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6310));
});

/**
 * Shortcut for clojure map representation of em tag
 */
htmlcss_lib.core.em = (function htmlcss_lib$core$em(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6323 = arguments.length;
var i__4532__auto___6324 = (0);
while(true){
if((i__4532__auto___6324 < len__4531__auto___6323)){
args__4534__auto__.push((arguments[i__4532__auto___6324]));

var G__6325 = (i__4532__auto___6324 + (1));
i__4532__auto___6324 = G__6325;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.em.cljs$core$IFn$_invoke$arity$variadic = (function (p__6319){
var vec__6320 = p__6319;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6320,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6320,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6320,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6320,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("em",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.em.cljs$lang$applyTo = (function (seq6318){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6318));
});

/**
 * Shortcut for clojure map representation of mark tag
 */
htmlcss_lib.core.mark = (function htmlcss_lib$core$mark(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6331 = arguments.length;
var i__4532__auto___6332 = (0);
while(true){
if((i__4532__auto___6332 < len__4531__auto___6331)){
args__4534__auto__.push((arguments[i__4532__auto___6332]));

var G__6333 = (i__4532__auto___6332 + (1));
i__4532__auto___6332 = G__6333;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.mark.cljs$core$IFn$_invoke$arity$variadic = (function (p__6327){
var vec__6328 = p__6327;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("mark",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.mark.cljs$lang$applyTo = (function (seq6326){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6326));
});

/**
 * Shortcut for clojure map representation of small tag
 */
htmlcss_lib.core.small = (function htmlcss_lib$core$small(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6339 = arguments.length;
var i__4532__auto___6340 = (0);
while(true){
if((i__4532__auto___6340 < len__4531__auto___6339)){
args__4534__auto__.push((arguments[i__4532__auto___6340]));

var G__6341 = (i__4532__auto___6340 + (1));
i__4532__auto___6340 = G__6341;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.small.cljs$core$IFn$_invoke$arity$variadic = (function (p__6335){
var vec__6336 = p__6335;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6336,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6336,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6336,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6336,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("small",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.small.cljs$lang$applyTo = (function (seq6334){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6334));
});

/**
 * Shortcut for clojure map representation of del tag
 */
htmlcss_lib.core.del = (function htmlcss_lib$core$del(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6347 = arguments.length;
var i__4532__auto___6348 = (0);
while(true){
if((i__4532__auto___6348 < len__4531__auto___6347)){
args__4534__auto__.push((arguments[i__4532__auto___6348]));

var G__6349 = (i__4532__auto___6348 + (1));
i__4532__auto___6348 = G__6349;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.del.cljs$core$IFn$_invoke$arity$variadic = (function (p__6343){
var vec__6344 = p__6343;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("del",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.del.cljs$lang$applyTo = (function (seq6342){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6342));
});

/**
 * Shortcut for clojure map representation of ins tag
 */
htmlcss_lib.core.ins = (function htmlcss_lib$core$ins(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6355 = arguments.length;
var i__4532__auto___6356 = (0);
while(true){
if((i__4532__auto___6356 < len__4531__auto___6355)){
args__4534__auto__.push((arguments[i__4532__auto___6356]));

var G__6357 = (i__4532__auto___6356 + (1));
i__4532__auto___6356 = G__6357;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.ins.cljs$core$IFn$_invoke$arity$variadic = (function (p__6351){
var vec__6352 = p__6351;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6352,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6352,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6352,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6352,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("ins",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.ins.cljs$lang$applyTo = (function (seq6350){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6350));
});

/**
 * Shortcut for clojure map representation of sub tag
 */
htmlcss_lib.core.sub = (function htmlcss_lib$core$sub(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6363 = arguments.length;
var i__4532__auto___6364 = (0);
while(true){
if((i__4532__auto___6364 < len__4531__auto___6363)){
args__4534__auto__.push((arguments[i__4532__auto___6364]));

var G__6365 = (i__4532__auto___6364 + (1));
i__4532__auto___6364 = G__6365;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.sub.cljs$core$IFn$_invoke$arity$variadic = (function (p__6359){
var vec__6360 = p__6359;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6360,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6360,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6360,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6360,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("sub",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.sub.cljs$lang$applyTo = (function (seq6358){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6358));
});

/**
 * Shortcut for clojure map representation of sup tag
 */
htmlcss_lib.core.sup = (function htmlcss_lib$core$sup(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6371 = arguments.length;
var i__4532__auto___6372 = (0);
while(true){
if((i__4532__auto___6372 < len__4531__auto___6371)){
args__4534__auto__.push((arguments[i__4532__auto___6372]));

var G__6373 = (i__4532__auto___6372 + (1));
i__4532__auto___6372 = G__6373;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.sup.cljs$core$IFn$_invoke$arity$variadic = (function (p__6367){
var vec__6368 = p__6367;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6368,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6368,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6368,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6368,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("sup",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.sup.cljs$lang$applyTo = (function (seq6366){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6366));
});

/**
 * Shortcut for clojure map representation of q tag
 */
htmlcss_lib.core.q = (function htmlcss_lib$core$q(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6379 = arguments.length;
var i__4532__auto___6380 = (0);
while(true){
if((i__4532__auto___6380 < len__4531__auto___6379)){
args__4534__auto__.push((arguments[i__4532__auto___6380]));

var G__6381 = (i__4532__auto___6380 + (1));
i__4532__auto___6380 = G__6381;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (p__6375){
var vec__6376 = p__6375;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6376,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6376,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6376,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6376,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("q",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.q.cljs$lang$applyTo = (function (seq6374){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6374));
});

/**
 * Shortcut for clojure map representation of blockquote tag
 */
htmlcss_lib.core.blockquote = (function htmlcss_lib$core$blockquote(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6387 = arguments.length;
var i__4532__auto___6388 = (0);
while(true){
if((i__4532__auto___6388 < len__4531__auto___6387)){
args__4534__auto__.push((arguments[i__4532__auto___6388]));

var G__6389 = (i__4532__auto___6388 + (1));
i__4532__auto___6388 = G__6389;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (p__6383){
var vec__6384 = p__6383;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6384,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6384,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6384,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6384,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("blockquote",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.blockquote.cljs$lang$applyTo = (function (seq6382){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6382));
});

/**
 * Shortcut for clojure map representation of nav tag
 */
htmlcss_lib.core.nav = (function htmlcss_lib$core$nav(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6395 = arguments.length;
var i__4532__auto___6396 = (0);
while(true){
if((i__4532__auto___6396 < len__4531__auto___6395)){
args__4534__auto__.push((arguments[i__4532__auto___6396]));

var G__6397 = (i__4532__auto___6396 + (1));
i__4532__auto___6396 = G__6397;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__6391){
var vec__6392 = p__6391;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("nav",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.nav.cljs$lang$applyTo = (function (seq6390){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6390));
});

/**
 * Shortcut for clojure map representation of a tag
 */
htmlcss_lib.core.a = (function htmlcss_lib$core$a(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6403 = arguments.length;
var i__4532__auto___6404 = (0);
while(true){
if((i__4532__auto___6404 < len__4531__auto___6403)){
args__4534__auto__.push((arguments[i__4532__auto___6404]));

var G__6405 = (i__4532__auto___6404 + (1));
i__4532__auto___6404 = G__6405;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic = (function (p__6399){
var vec__6400 = p__6399;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6400,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6400,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6400,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6400,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.a.cljs$lang$applyTo = (function (seq6398){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6398));
});

/**
 * Shortcut for clojure map representation of img tag
 */
htmlcss_lib.core.img = (function htmlcss_lib$core$img(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6411 = arguments.length;
var i__4532__auto___6412 = (0);
while(true){
if((i__4532__auto___6412 < len__4531__auto___6411)){
args__4534__auto__.push((arguments[i__4532__auto___6412]));

var G__6413 = (i__4532__auto___6412 + (1));
i__4532__auto___6412 = G__6413;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.img.cljs$core$IFn$_invoke$arity$variadic = (function (p__6407){
var vec__6408 = p__6407;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("img",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.img.cljs$lang$applyTo = (function (seq6406){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6406));
});

/**
 * Shortcut for clojure map representation of video tag
 */
htmlcss_lib.core.video = (function htmlcss_lib$core$video(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6419 = arguments.length;
var i__4532__auto___6420 = (0);
while(true){
if((i__4532__auto___6420 < len__4531__auto___6419)){
args__4534__auto__.push((arguments[i__4532__auto___6420]));

var G__6421 = (i__4532__auto___6420 + (1));
i__4532__auto___6420 = G__6421;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.video.cljs$core$IFn$_invoke$arity$variadic = (function (p__6415){
var vec__6416 = p__6415;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6416,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6416,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6416,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6416,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("video",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.video.cljs$lang$applyTo = (function (seq6414){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6414));
});

/**
 * Shortcut for clojure map representation of source tag
 */
htmlcss_lib.core.source = (function htmlcss_lib$core$source(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6427 = arguments.length;
var i__4532__auto___6428 = (0);
while(true){
if((i__4532__auto___6428 < len__4531__auto___6427)){
args__4534__auto__.push((arguments[i__4532__auto___6428]));

var G__6429 = (i__4532__auto___6428 + (1));
i__4532__auto___6428 = G__6429;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.source.cljs$core$IFn$_invoke$arity$variadic = (function (p__6423){
var vec__6424 = p__6423;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6424,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6424,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6424,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6424,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("source",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.source.cljs$lang$applyTo = (function (seq6422){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6422));
});

/**
 * Shortcut for clojure map representation of button tag
 */
htmlcss_lib.core.button = (function htmlcss_lib$core$button(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6435 = arguments.length;
var i__4532__auto___6436 = (0);
while(true){
if((i__4532__auto___6436 < len__4531__auto___6435)){
args__4534__auto__.push((arguments[i__4532__auto___6436]));

var G__6437 = (i__4532__auto___6436 + (1));
i__4532__auto___6436 = G__6437;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__6431){
var vec__6432 = p__6431;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6432,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6432,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6432,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6432,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("button",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.button.cljs$lang$applyTo = (function (seq6430){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6430));
});

/**
 * Shortcut for clojure map representation of input tag
 */
htmlcss_lib.core.input = (function htmlcss_lib$core$input(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6443 = arguments.length;
var i__4532__auto___6444 = (0);
while(true){
if((i__4532__auto___6444 < len__4531__auto___6443)){
args__4534__auto__.push((arguments[i__4532__auto___6444]));

var G__6445 = (i__4532__auto___6444 + (1));
i__4532__auto___6444 = G__6445;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic = (function (p__6439){
var vec__6440 = p__6439;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6440,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6440,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6440,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6440,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("input",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.input.cljs$lang$applyTo = (function (seq6438){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6438));
});

/**
 * Shortcut for clojure map representation of textarea tag
 */
htmlcss_lib.core.textarea = (function htmlcss_lib$core$textarea(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6451 = arguments.length;
var i__4532__auto___6452 = (0);
while(true){
if((i__4532__auto___6452 < len__4531__auto___6451)){
args__4534__auto__.push((arguments[i__4532__auto___6452]));

var G__6453 = (i__4532__auto___6452 + (1));
i__4532__auto___6452 = G__6453;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (p__6447){
var vec__6448 = p__6447;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6448,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6448,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6448,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6448,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("textarea",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.textarea.cljs$lang$applyTo = (function (seq6446){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6446));
});

/**
 * Shortcut for clojure map representation of select tag
 */
htmlcss_lib.core.select = (function htmlcss_lib$core$select(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6459 = arguments.length;
var i__4532__auto___6460 = (0);
while(true){
if((i__4532__auto___6460 < len__4531__auto___6459)){
args__4534__auto__.push((arguments[i__4532__auto___6460]));

var G__6461 = (i__4532__auto___6460 + (1));
i__4532__auto___6460 = G__6461;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (p__6455){
var vec__6456 = p__6455;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6456,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6456,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6456,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6456,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("select",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.select.cljs$lang$applyTo = (function (seq6454){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6454));
});

/**
 * Shortcut for clojure map representation of option tag
 */
htmlcss_lib.core.option = (function htmlcss_lib$core$option(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6467 = arguments.length;
var i__4532__auto___6468 = (0);
while(true){
if((i__4532__auto___6468 < len__4531__auto___6467)){
args__4534__auto__.push((arguments[i__4532__auto___6468]));

var G__6469 = (i__4532__auto___6468 + (1));
i__4532__auto___6468 = G__6469;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.option.cljs$core$IFn$_invoke$arity$variadic = (function (p__6463){
var vec__6464 = p__6463;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("option",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.option.cljs$lang$applyTo = (function (seq6462){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6462));
});

/**
 * Shortcut for clojure map representation of ol tag
 */
htmlcss_lib.core.ol = (function htmlcss_lib$core$ol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6475 = arguments.length;
var i__4532__auto___6476 = (0);
while(true){
if((i__4532__auto___6476 < len__4531__auto___6475)){
args__4534__auto__.push((arguments[i__4532__auto___6476]));

var G__6477 = (i__4532__auto___6476 + (1));
i__4532__auto___6476 = G__6477;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.ol.cljs$core$IFn$_invoke$arity$variadic = (function (p__6471){
var vec__6472 = p__6471;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("ol",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.ol.cljs$lang$applyTo = (function (seq6470){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6470));
});

/**
 * Shortcut for clojure map representation of ul tag
 */
htmlcss_lib.core.ul = (function htmlcss_lib$core$ul(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6483 = arguments.length;
var i__4532__auto___6484 = (0);
while(true){
if((i__4532__auto___6484 < len__4531__auto___6483)){
args__4534__auto__.push((arguments[i__4532__auto___6484]));

var G__6485 = (i__4532__auto___6484 + (1));
i__4532__auto___6484 = G__6485;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.ul.cljs$core$IFn$_invoke$arity$variadic = (function (p__6479){
var vec__6480 = p__6479;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6480,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("ul",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.ul.cljs$lang$applyTo = (function (seq6478){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6478));
});

/**
 * Shortcut for clojure map representation of li tag
 */
htmlcss_lib.core.li = (function htmlcss_lib$core$li(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6491 = arguments.length;
var i__4532__auto___6492 = (0);
while(true){
if((i__4532__auto___6492 < len__4531__auto___6491)){
args__4534__auto__.push((arguments[i__4532__auto___6492]));

var G__6493 = (i__4532__auto___6492 + (1));
i__4532__auto___6492 = G__6493;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.li.cljs$core$IFn$_invoke$arity$variadic = (function (p__6487){
var vec__6488 = p__6487;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6488,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6488,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6488,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6488,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("li",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.li.cljs$lang$applyTo = (function (seq6486){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6486));
});

/**
 * Shortcut for clojure map representation of table tag
 */
htmlcss_lib.core.table = (function htmlcss_lib$core$table(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6499 = arguments.length;
var i__4532__auto___6500 = (0);
while(true){
if((i__4532__auto___6500 < len__4531__auto___6499)){
args__4534__auto__.push((arguments[i__4532__auto___6500]));

var G__6501 = (i__4532__auto___6500 + (1));
i__4532__auto___6500 = G__6501;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (p__6495){
var vec__6496 = p__6495;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6496,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6496,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6496,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6496,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("table",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.table.cljs$lang$applyTo = (function (seq6494){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6494));
});

/**
 * Shortcut for clojure map representation of thead tag
 */
htmlcss_lib.core.thead = (function htmlcss_lib$core$thead(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6507 = arguments.length;
var i__4532__auto___6508 = (0);
while(true){
if((i__4532__auto___6508 < len__4531__auto___6507)){
args__4534__auto__.push((arguments[i__4532__auto___6508]));

var G__6509 = (i__4532__auto___6508 + (1));
i__4532__auto___6508 = G__6509;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.thead.cljs$core$IFn$_invoke$arity$variadic = (function (p__6503){
var vec__6504 = p__6503;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("thead",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.thead.cljs$lang$applyTo = (function (seq6502){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6502));
});

/**
 * Shortcut for clojure map representation of tbody tag
 */
htmlcss_lib.core.tbody = (function htmlcss_lib$core$tbody(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6515 = arguments.length;
var i__4532__auto___6516 = (0);
while(true){
if((i__4532__auto___6516 < len__4531__auto___6515)){
args__4534__auto__.push((arguments[i__4532__auto___6516]));

var G__6517 = (i__4532__auto___6516 + (1));
i__4532__auto___6516 = G__6517;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (p__6511){
var vec__6512 = p__6511;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6512,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6512,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6512,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6512,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("tbody",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.tbody.cljs$lang$applyTo = (function (seq6510){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6510));
});

/**
 * Shortcut for clojure map representation of tr tag
 */
htmlcss_lib.core.tr = (function htmlcss_lib$core$tr(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6523 = arguments.length;
var i__4532__auto___6524 = (0);
while(true){
if((i__4532__auto___6524 < len__4531__auto___6523)){
args__4534__auto__.push((arguments[i__4532__auto___6524]));

var G__6525 = (i__4532__auto___6524 + (1));
i__4532__auto___6524 = G__6525;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic = (function (p__6519){
var vec__6520 = p__6519;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6520,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6520,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6520,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6520,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("tr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.tr.cljs$lang$applyTo = (function (seq6518){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6518));
});

/**
 * Shortcut for clojure map representation of th tag
 */
htmlcss_lib.core.th = (function htmlcss_lib$core$th(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6531 = arguments.length;
var i__4532__auto___6532 = (0);
while(true){
if((i__4532__auto___6532 < len__4531__auto___6531)){
args__4534__auto__.push((arguments[i__4532__auto___6532]));

var G__6533 = (i__4532__auto___6532 + (1));
i__4532__auto___6532 = G__6533;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.th.cljs$core$IFn$_invoke$arity$variadic = (function (p__6527){
var vec__6528 = p__6527;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6528,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6528,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6528,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6528,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("th",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.th.cljs$lang$applyTo = (function (seq6526){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6526));
});

/**
 * Shortcut for clojure map representation of td tag
 */
htmlcss_lib.core.td = (function htmlcss_lib$core$td(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6539 = arguments.length;
var i__4532__auto___6540 = (0);
while(true){
if((i__4532__auto___6540 < len__4531__auto___6539)){
args__4534__auto__.push((arguments[i__4532__auto___6540]));

var G__6541 = (i__4532__auto___6540 + (1));
i__4532__auto___6540 = G__6541;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic = (function (p__6535){
var vec__6536 = p__6535;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6536,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6536,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6536,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6536,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("td",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.td.cljs$lang$applyTo = (function (seq6534){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6534));
});

/**
 * Shortcut for clojure map representation of div tag
 */
htmlcss_lib.core.div = (function htmlcss_lib$core$div(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6547 = arguments.length;
var i__4532__auto___6548 = (0);
while(true){
if((i__4532__auto___6548 < len__4531__auto___6547)){
args__4534__auto__.push((arguments[i__4532__auto___6548]));

var G__6549 = (i__4532__auto___6548 + (1));
i__4532__auto___6548 = G__6549;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic = (function (p__6543){
var vec__6544 = p__6543;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("div",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.div.cljs$lang$applyTo = (function (seq6542){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6542));
});

/**
 * Shortcut for clojure map representation of label tag
 */
htmlcss_lib.core.label = (function htmlcss_lib$core$label(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6555 = arguments.length;
var i__4532__auto___6556 = (0);
while(true){
if((i__4532__auto___6556 < len__4531__auto___6555)){
args__4534__auto__.push((arguments[i__4532__auto___6556]));

var G__6557 = (i__4532__auto___6556 + (1));
i__4532__auto___6556 = G__6557;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__6551){
var vec__6552 = p__6551;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("label",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.label.cljs$lang$applyTo = (function (seq6550){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6550));
});

/**
 * Shortcut for clojure map representation of span tag
 */
htmlcss_lib.core.span = (function htmlcss_lib$core$span(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6563 = arguments.length;
var i__4532__auto___6564 = (0);
while(true){
if((i__4532__auto___6564 < len__4531__auto___6563)){
args__4534__auto__.push((arguments[i__4532__auto___6564]));

var G__6565 = (i__4532__auto___6564 + (1));
i__4532__auto___6564 = G__6565;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.span.cljs$core$IFn$_invoke$arity$variadic = (function (p__6559){
var vec__6560 = p__6559;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("span",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.span.cljs$lang$applyTo = (function (seq6558){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6558));
});

/**
 * Shortcut for clojure map representation of menu tag
 */
htmlcss_lib.core.menu = (function htmlcss_lib$core$menu(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6571 = arguments.length;
var i__4532__auto___6572 = (0);
while(true){
if((i__4532__auto___6572 < len__4531__auto___6571)){
args__4534__auto__.push((arguments[i__4532__auto___6572]));

var G__6573 = (i__4532__auto___6572 + (1));
i__4532__auto___6572 = G__6573;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (p__6567){
var vec__6568 = p__6567;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("menu",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.menu.cljs$lang$applyTo = (function (seq6566){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6566));
});

/**
 * Shortcut for clojure map representation of menuitem tag
 */
htmlcss_lib.core.menuitem = (function htmlcss_lib$core$menuitem(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6579 = arguments.length;
var i__4532__auto___6580 = (0);
while(true){
if((i__4532__auto___6580 < len__4531__auto___6579)){
args__4534__auto__.push((arguments[i__4532__auto___6580]));

var G__6581 = (i__4532__auto___6580 + (1));
i__4532__auto___6580 = G__6581;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (p__6575){
var vec__6576 = p__6575;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6576,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6576,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6576,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6576,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("menuitem",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,attrs,events,dynamic_attrs], 0));
});

htmlcss_lib.core.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.menuitem.cljs$lang$applyTo = (function (seq6574){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6574));
});

/**
 * Shortcut for clojure map representation of style tag
 */
htmlcss_lib.core.style = (function htmlcss_lib$core$style(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6587 = arguments.length;
var i__4532__auto___6588 = (0);
while(true){
if((i__4532__auto___6588 < len__4531__auto___6587)){
args__4534__auto__.push((arguments[i__4532__auto___6588]));

var G__6589 = (i__4532__auto___6588 + (1));
i__4532__auto___6588 = G__6589;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (p__6583){
var vec__6584 = p__6583;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6584,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6584,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6584,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6584,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("style",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$type,"text/css"),events,dynamic_attrs], 0));
});

htmlcss_lib.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.style.cljs$lang$applyTo = (function (seq6582){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6582));
});

/**
 * Shortcut for clojure map representation of script tag
 */
htmlcss_lib.core.script = (function htmlcss_lib$core$script(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6595 = arguments.length;
var i__4532__auto___6596 = (0);
while(true){
if((i__4532__auto___6596 < len__4531__auto___6595)){
args__4534__auto__.push((arguments[i__4532__auto___6596]));

var G__6597 = (i__4532__auto___6596 + (1));
i__4532__auto___6596 = G__6597;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return htmlcss_lib.core.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

htmlcss_lib.core.script.cljs$core$IFn$_invoke$arity$variadic = (function (p__6591){
var vec__6592 = p__6591;
var cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6592,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6592,(1),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6592,(2),null);
var dynamic_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6592,(3),null);
return htmlcss_lib.core.crt.cljs$core$IFn$_invoke$arity$variadic("script",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cont,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$type,"text/javascript"),events,dynamic_attrs], 0));
});

htmlcss_lib.core.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
htmlcss_lib.core.script.cljs$lang$applyTo = (function (seq6590){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6590));
});

/**
 * Is data of HTML type
 */
htmlcss_lib.core.html_QMARK_ = (function htmlcss_lib$core$html_QMARK_(data){
if(cljs.core.truth_(data)){
var temp__5457__auto__ = (cljs.core.type(data)["name"]);
if(cljs.core.truth_(temp__5457__auto__)){
var data_type_name = temp__5457__auto__;
return (data_type_name.indexOf("HTML") > (-1));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Generates HTML element out of clojure map created by crt fn
 */
htmlcss_lib.core.generate_html = (function htmlcss_lib$core$generate_html(data){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.map_QMARK_(data)){
var el_6682 = cljs.core.cst$kw$el.cljs$core$IFn$_invoke$arity$1(data);
var cont_6683 = cljs.core.cst$kw$cont.cljs$core$IFn$_invoke$arity$1(data);
var new_element_6684 = document.createElement(el_6682);
var attrs_6685 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(data);
var events_6686 = cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(data);
var dynamic_attrs_6687 = cljs.core.cst$kw$dynamic_DASH_attrs.cljs$core$IFn$_invoke$arity$1(data);
var seq__6598_6688 = cljs.core.seq(attrs_6685);
var chunk__6599_6689 = null;
var count__6600_6690 = (0);
var i__6601_6691 = (0);
while(true){
if((i__6601_6691 < count__6600_6690)){
var vec__6602_6692 = chunk__6599_6689.cljs$core$IIndexed$_nth$arity$2(null,i__6601_6691);
var attr_name_6693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602_6692,(0),null);
var attr_value_6694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602_6692,(1),null);
var attr_cont_6695 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_name_6693,cljs.core.cst$kw$style)) && (cljs.core.map_QMARK_(attr_value_6694)))){
var seq__6605_6696 = cljs.core.seq(attr_value_6694);
var chunk__6606_6697 = null;
var count__6607_6698 = (0);
var i__6608_6699 = (0);
while(true){
if((i__6608_6699 < count__6607_6698)){
var vec__6609_6700 = chunk__6606_6697.cljs$core$IIndexed$_nth$arity$2(null,i__6608_6699);
var prop_name_6701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6609_6700,(0),null);
var prop_value_6702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6609_6700,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(attr_cont_6695,cljs.core.str,cljs.core.name(prop_name_6701),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_6702,"; "], 0));


var G__6703 = seq__6605_6696;
var G__6704 = chunk__6606_6697;
var G__6705 = count__6607_6698;
var G__6706 = (i__6608_6699 + (1));
seq__6605_6696 = G__6703;
chunk__6606_6697 = G__6704;
count__6607_6698 = G__6705;
i__6608_6699 = G__6706;
continue;
} else {
var temp__5457__auto___6707 = cljs.core.seq(seq__6605_6696);
if(temp__5457__auto___6707){
var seq__6605_6708__$1 = temp__5457__auto___6707;
if(cljs.core.chunked_seq_QMARK_(seq__6605_6708__$1)){
var c__4351__auto___6709 = cljs.core.chunk_first(seq__6605_6708__$1);
var G__6710 = cljs.core.chunk_rest(seq__6605_6708__$1);
var G__6711 = c__4351__auto___6709;
var G__6712 = cljs.core.count(c__4351__auto___6709);
var G__6713 = (0);
seq__6605_6696 = G__6710;
chunk__6606_6697 = G__6711;
count__6607_6698 = G__6712;
i__6608_6699 = G__6713;
continue;
} else {
var vec__6612_6714 = cljs.core.first(seq__6605_6708__$1);
var prop_name_6715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6612_6714,(0),null);
var prop_value_6716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6612_6714,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(attr_cont_6695,cljs.core.str,cljs.core.name(prop_name_6715),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_6716,"; "], 0));


var G__6717 = cljs.core.next(seq__6605_6708__$1);
var G__6718 = null;
var G__6719 = (0);
var G__6720 = (0);
seq__6605_6696 = G__6717;
chunk__6606_6697 = G__6718;
count__6607_6698 = G__6719;
i__6608_6699 = G__6720;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(attr_cont_6695,cljs.core.str,attr_value_6694);
}

new_element_6684.setAttribute(cljs.core.name(attr_name_6693),cljs.core.deref(attr_cont_6695));


var G__6721 = seq__6598_6688;
var G__6722 = chunk__6599_6689;
var G__6723 = count__6600_6690;
var G__6724 = (i__6601_6691 + (1));
seq__6598_6688 = G__6721;
chunk__6599_6689 = G__6722;
count__6600_6690 = G__6723;
i__6601_6691 = G__6724;
continue;
} else {
var temp__5457__auto___6725 = cljs.core.seq(seq__6598_6688);
if(temp__5457__auto___6725){
var seq__6598_6726__$1 = temp__5457__auto___6725;
if(cljs.core.chunked_seq_QMARK_(seq__6598_6726__$1)){
var c__4351__auto___6727 = cljs.core.chunk_first(seq__6598_6726__$1);
var G__6728 = cljs.core.chunk_rest(seq__6598_6726__$1);
var G__6729 = c__4351__auto___6727;
var G__6730 = cljs.core.count(c__4351__auto___6727);
var G__6731 = (0);
seq__6598_6688 = G__6728;
chunk__6599_6689 = G__6729;
count__6600_6690 = G__6730;
i__6601_6691 = G__6731;
continue;
} else {
var vec__6615_6732 = cljs.core.first(seq__6598_6726__$1);
var attr_name_6733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6615_6732,(0),null);
var attr_value_6734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6615_6732,(1),null);
var attr_cont_6735 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_name_6733,cljs.core.cst$kw$style)) && (cljs.core.map_QMARK_(attr_value_6734)))){
var seq__6618_6736 = cljs.core.seq(attr_value_6734);
var chunk__6619_6737 = null;
var count__6620_6738 = (0);
var i__6621_6739 = (0);
while(true){
if((i__6621_6739 < count__6620_6738)){
var vec__6622_6740 = chunk__6619_6737.cljs$core$IIndexed$_nth$arity$2(null,i__6621_6739);
var prop_name_6741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6622_6740,(0),null);
var prop_value_6742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6622_6740,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(attr_cont_6735,cljs.core.str,cljs.core.name(prop_name_6741),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_6742,"; "], 0));


var G__6743 = seq__6618_6736;
var G__6744 = chunk__6619_6737;
var G__6745 = count__6620_6738;
var G__6746 = (i__6621_6739 + (1));
seq__6618_6736 = G__6743;
chunk__6619_6737 = G__6744;
count__6620_6738 = G__6745;
i__6621_6739 = G__6746;
continue;
} else {
var temp__5457__auto___6747__$1 = cljs.core.seq(seq__6618_6736);
if(temp__5457__auto___6747__$1){
var seq__6618_6748__$1 = temp__5457__auto___6747__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6618_6748__$1)){
var c__4351__auto___6749 = cljs.core.chunk_first(seq__6618_6748__$1);
var G__6750 = cljs.core.chunk_rest(seq__6618_6748__$1);
var G__6751 = c__4351__auto___6749;
var G__6752 = cljs.core.count(c__4351__auto___6749);
var G__6753 = (0);
seq__6618_6736 = G__6750;
chunk__6619_6737 = G__6751;
count__6620_6738 = G__6752;
i__6621_6739 = G__6753;
continue;
} else {
var vec__6625_6754 = cljs.core.first(seq__6618_6748__$1);
var prop_name_6755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6625_6754,(0),null);
var prop_value_6756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6625_6754,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(attr_cont_6735,cljs.core.str,cljs.core.name(prop_name_6755),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_6756,"; "], 0));


var G__6757 = cljs.core.next(seq__6618_6748__$1);
var G__6758 = null;
var G__6759 = (0);
var G__6760 = (0);
seq__6618_6736 = G__6757;
chunk__6619_6737 = G__6758;
count__6620_6738 = G__6759;
i__6621_6739 = G__6760;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(attr_cont_6735,cljs.core.str,attr_value_6734);
}

new_element_6684.setAttribute(cljs.core.name(attr_name_6733),cljs.core.deref(attr_cont_6735));


var G__6761 = cljs.core.next(seq__6598_6726__$1);
var G__6762 = null;
var G__6763 = (0);
var G__6764 = (0);
seq__6598_6688 = G__6761;
chunk__6599_6689 = G__6762;
count__6600_6690 = G__6763;
i__6601_6691 = G__6764;
continue;
}
} else {
}
}
break;
}

var seq__6628_6765 = cljs.core.seq(events_6686);
var chunk__6629_6766 = null;
var count__6630_6767 = (0);
var i__6631_6768 = (0);
while(true){
if((i__6631_6768 < count__6630_6767)){
var vec__6632_6769 = chunk__6629_6766.cljs$core$IIndexed$_nth$arity$2(null,i__6631_6768);
var evt_name_6770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632_6769,(0),null);
var evt_conf_6771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632_6769,(1),null);
if(cljs.core.map_QMARK_(evt_conf_6771)){
var map__6635_6772 = evt_conf_6771;
var map__6635_6773__$1 = ((((!((map__6635_6772 == null)))?(((((map__6635_6772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6635_6772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6635_6772):map__6635_6772);
var evt_fn_6774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635_6773__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_6775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635_6773__$1,cljs.core.cst$kw$evt_DASH_p);
(new_element_6684[cljs.core.name(evt_name_6770)] = (function (){var fexpr__6637 = ((function (seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6635_6772,map__6635_6773__$1,evt_fn_6774,evt_p_6775,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (){
return ((function (seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6635_6772,map__6635_6773__$1,evt_fn_6774,evt_p_6775,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (event){
return (evt_fn_6774.cljs$core$IFn$_invoke$arity$3 ? evt_fn_6774.cljs$core$IFn$_invoke$arity$3(evt_p_6775,new_element_6684,event) : evt_fn_6774.call(null,evt_p_6775,new_element_6684,event));
});
;})(seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6635_6772,map__6635_6773__$1,evt_fn_6774,evt_p_6775,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
});})(seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6635_6772,map__6635_6773__$1,evt_fn_6774,evt_p_6775,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
;
return fexpr__6637();
})());
} else {
}

if(cljs.core.vector_QMARK_(evt_conf_6771)){
var seq__6638_6776 = cljs.core.seq(evt_conf_6771);
var chunk__6639_6777 = null;
var count__6640_6778 = (0);
var i__6641_6779 = (0);
while(true){
if((i__6641_6779 < count__6640_6778)){
var map__6642_6780 = chunk__6639_6777.cljs$core$IIndexed$_nth$arity$2(null,i__6641_6779);
var map__6642_6781__$1 = ((((!((map__6642_6780 == null)))?(((((map__6642_6780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6642_6780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6642_6780):map__6642_6780);
var evt_fn_6782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6642_6781__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_6783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6642_6781__$1,cljs.core.cst$kw$evt_DASH_p);
var attached_evts_6784 = (new_element_6684[cljs.core.name(evt_name_6770)]);
new_element_6684.addEventListener(cljs.core.name(evt_name_6770).replace("on",""),(function (){var fexpr__6644 = ((function (seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6784,map__6642_6780,map__6642_6781__$1,evt_fn_6782,evt_p_6783,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (){
return ((function (seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6784,map__6642_6780,map__6642_6781__$1,evt_fn_6782,evt_p_6783,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (event){
return (evt_fn_6782.cljs$core$IFn$_invoke$arity$3 ? evt_fn_6782.cljs$core$IFn$_invoke$arity$3(evt_p_6783,new_element_6684,event) : evt_fn_6782.call(null,evt_p_6783,new_element_6684,event));
});
;})(seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6784,map__6642_6780,map__6642_6781__$1,evt_fn_6782,evt_p_6783,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
});})(seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6784,map__6642_6780,map__6642_6781__$1,evt_fn_6782,evt_p_6783,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
;
return fexpr__6644();
})());


var G__6785 = seq__6638_6776;
var G__6786 = chunk__6639_6777;
var G__6787 = count__6640_6778;
var G__6788 = (i__6641_6779 + (1));
seq__6638_6776 = G__6785;
chunk__6639_6777 = G__6786;
count__6640_6778 = G__6787;
i__6641_6779 = G__6788;
continue;
} else {
var temp__5457__auto___6789 = cljs.core.seq(seq__6638_6776);
if(temp__5457__auto___6789){
var seq__6638_6790__$1 = temp__5457__auto___6789;
if(cljs.core.chunked_seq_QMARK_(seq__6638_6790__$1)){
var c__4351__auto___6791 = cljs.core.chunk_first(seq__6638_6790__$1);
var G__6792 = cljs.core.chunk_rest(seq__6638_6790__$1);
var G__6793 = c__4351__auto___6791;
var G__6794 = cljs.core.count(c__4351__auto___6791);
var G__6795 = (0);
seq__6638_6776 = G__6792;
chunk__6639_6777 = G__6793;
count__6640_6778 = G__6794;
i__6641_6779 = G__6795;
continue;
} else {
var map__6645_6796 = cljs.core.first(seq__6638_6790__$1);
var map__6645_6797__$1 = ((((!((map__6645_6796 == null)))?(((((map__6645_6796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6645_6796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6645_6796):map__6645_6796);
var evt_fn_6798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645_6797__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_6799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645_6797__$1,cljs.core.cst$kw$evt_DASH_p);
var attached_evts_6800 = (new_element_6684[cljs.core.name(evt_name_6770)]);
new_element_6684.addEventListener(cljs.core.name(evt_name_6770).replace("on",""),(function (){var fexpr__6647 = ((function (seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6800,map__6645_6796,map__6645_6797__$1,evt_fn_6798,evt_p_6799,seq__6638_6790__$1,temp__5457__auto___6789,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (){
return ((function (seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6800,map__6645_6796,map__6645_6797__$1,evt_fn_6798,evt_p_6799,seq__6638_6790__$1,temp__5457__auto___6789,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (event){
return (evt_fn_6798.cljs$core$IFn$_invoke$arity$3 ? evt_fn_6798.cljs$core$IFn$_invoke$arity$3(evt_p_6799,new_element_6684,event) : evt_fn_6798.call(null,evt_p_6799,new_element_6684,event));
});
;})(seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6800,map__6645_6796,map__6645_6797__$1,evt_fn_6798,evt_p_6799,seq__6638_6790__$1,temp__5457__auto___6789,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
});})(seq__6638_6776,chunk__6639_6777,count__6640_6778,i__6641_6779,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6800,map__6645_6796,map__6645_6797__$1,evt_fn_6798,evt_p_6799,seq__6638_6790__$1,temp__5457__auto___6789,vec__6632_6769,evt_name_6770,evt_conf_6771,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
;
return fexpr__6647();
})());


var G__6801 = cljs.core.next(seq__6638_6790__$1);
var G__6802 = null;
var G__6803 = (0);
var G__6804 = (0);
seq__6638_6776 = G__6801;
chunk__6639_6777 = G__6802;
count__6640_6778 = G__6803;
i__6641_6779 = G__6804;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__6805 = seq__6628_6765;
var G__6806 = chunk__6629_6766;
var G__6807 = count__6630_6767;
var G__6808 = (i__6631_6768 + (1));
seq__6628_6765 = G__6805;
chunk__6629_6766 = G__6806;
count__6630_6767 = G__6807;
i__6631_6768 = G__6808;
continue;
} else {
var temp__5457__auto___6809 = cljs.core.seq(seq__6628_6765);
if(temp__5457__auto___6809){
var seq__6628_6810__$1 = temp__5457__auto___6809;
if(cljs.core.chunked_seq_QMARK_(seq__6628_6810__$1)){
var c__4351__auto___6811 = cljs.core.chunk_first(seq__6628_6810__$1);
var G__6812 = cljs.core.chunk_rest(seq__6628_6810__$1);
var G__6813 = c__4351__auto___6811;
var G__6814 = cljs.core.count(c__4351__auto___6811);
var G__6815 = (0);
seq__6628_6765 = G__6812;
chunk__6629_6766 = G__6813;
count__6630_6767 = G__6814;
i__6631_6768 = G__6815;
continue;
} else {
var vec__6648_6816 = cljs.core.first(seq__6628_6810__$1);
var evt_name_6817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6648_6816,(0),null);
var evt_conf_6818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6648_6816,(1),null);
if(cljs.core.map_QMARK_(evt_conf_6818)){
var map__6651_6819 = evt_conf_6818;
var map__6651_6820__$1 = ((((!((map__6651_6819 == null)))?(((((map__6651_6819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6651_6819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6651_6819):map__6651_6819);
var evt_fn_6821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6651_6820__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_6822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6651_6820__$1,cljs.core.cst$kw$evt_DASH_p);
(new_element_6684[cljs.core.name(evt_name_6817)] = (function (){var fexpr__6653 = ((function (seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6651_6819,map__6651_6820__$1,evt_fn_6821,evt_p_6822,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (){
return ((function (seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6651_6819,map__6651_6820__$1,evt_fn_6821,evt_p_6822,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (event){
return (evt_fn_6821.cljs$core$IFn$_invoke$arity$3 ? evt_fn_6821.cljs$core$IFn$_invoke$arity$3(evt_p_6822,new_element_6684,event) : evt_fn_6821.call(null,evt_p_6822,new_element_6684,event));
});
;})(seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6651_6819,map__6651_6820__$1,evt_fn_6821,evt_p_6822,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
});})(seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,map__6651_6819,map__6651_6820__$1,evt_fn_6821,evt_p_6822,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
;
return fexpr__6653();
})());
} else {
}

if(cljs.core.vector_QMARK_(evt_conf_6818)){
var seq__6654_6823 = cljs.core.seq(evt_conf_6818);
var chunk__6655_6824 = null;
var count__6656_6825 = (0);
var i__6657_6826 = (0);
while(true){
if((i__6657_6826 < count__6656_6825)){
var map__6658_6827 = chunk__6655_6824.cljs$core$IIndexed$_nth$arity$2(null,i__6657_6826);
var map__6658_6828__$1 = ((((!((map__6658_6827 == null)))?(((((map__6658_6827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6658_6827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6658_6827):map__6658_6827);
var evt_fn_6829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6658_6828__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_6830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6658_6828__$1,cljs.core.cst$kw$evt_DASH_p);
var attached_evts_6831 = (new_element_6684[cljs.core.name(evt_name_6817)]);
new_element_6684.addEventListener(cljs.core.name(evt_name_6817).replace("on",""),(function (){var fexpr__6660 = ((function (seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6831,map__6658_6827,map__6658_6828__$1,evt_fn_6829,evt_p_6830,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (){
return ((function (seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6831,map__6658_6827,map__6658_6828__$1,evt_fn_6829,evt_p_6830,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (event){
return (evt_fn_6829.cljs$core$IFn$_invoke$arity$3 ? evt_fn_6829.cljs$core$IFn$_invoke$arity$3(evt_p_6830,new_element_6684,event) : evt_fn_6829.call(null,evt_p_6830,new_element_6684,event));
});
;})(seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6831,map__6658_6827,map__6658_6828__$1,evt_fn_6829,evt_p_6830,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
});})(seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6831,map__6658_6827,map__6658_6828__$1,evt_fn_6829,evt_p_6830,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
;
return fexpr__6660();
})());


var G__6832 = seq__6654_6823;
var G__6833 = chunk__6655_6824;
var G__6834 = count__6656_6825;
var G__6835 = (i__6657_6826 + (1));
seq__6654_6823 = G__6832;
chunk__6655_6824 = G__6833;
count__6656_6825 = G__6834;
i__6657_6826 = G__6835;
continue;
} else {
var temp__5457__auto___6836__$1 = cljs.core.seq(seq__6654_6823);
if(temp__5457__auto___6836__$1){
var seq__6654_6837__$1 = temp__5457__auto___6836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6654_6837__$1)){
var c__4351__auto___6838 = cljs.core.chunk_first(seq__6654_6837__$1);
var G__6839 = cljs.core.chunk_rest(seq__6654_6837__$1);
var G__6840 = c__4351__auto___6838;
var G__6841 = cljs.core.count(c__4351__auto___6838);
var G__6842 = (0);
seq__6654_6823 = G__6839;
chunk__6655_6824 = G__6840;
count__6656_6825 = G__6841;
i__6657_6826 = G__6842;
continue;
} else {
var map__6661_6843 = cljs.core.first(seq__6654_6837__$1);
var map__6661_6844__$1 = ((((!((map__6661_6843 == null)))?(((((map__6661_6843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6661_6843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6661_6843):map__6661_6843);
var evt_fn_6845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6661_6844__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_6846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6661_6844__$1,cljs.core.cst$kw$evt_DASH_p);
var attached_evts_6847 = (new_element_6684[cljs.core.name(evt_name_6817)]);
new_element_6684.addEventListener(cljs.core.name(evt_name_6817).replace("on",""),(function (){var fexpr__6663 = ((function (seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6847,map__6661_6843,map__6661_6844__$1,evt_fn_6845,evt_p_6846,seq__6654_6837__$1,temp__5457__auto___6836__$1,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (){
return ((function (seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6847,map__6661_6843,map__6661_6844__$1,evt_fn_6845,evt_p_6846,seq__6654_6837__$1,temp__5457__auto___6836__$1,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result){
return (function (event){
return (evt_fn_6845.cljs$core$IFn$_invoke$arity$3 ? evt_fn_6845.cljs$core$IFn$_invoke$arity$3(evt_p_6846,new_element_6684,event) : evt_fn_6845.call(null,evt_p_6846,new_element_6684,event));
});
;})(seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6847,map__6661_6843,map__6661_6844__$1,evt_fn_6845,evt_p_6846,seq__6654_6837__$1,temp__5457__auto___6836__$1,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
});})(seq__6654_6823,chunk__6655_6824,count__6656_6825,i__6657_6826,seq__6628_6765,chunk__6629_6766,count__6630_6767,i__6631_6768,attached_evts_6847,map__6661_6843,map__6661_6844__$1,evt_fn_6845,evt_p_6846,seq__6654_6837__$1,temp__5457__auto___6836__$1,vec__6648_6816,evt_name_6817,evt_conf_6818,seq__6628_6810__$1,temp__5457__auto___6809,el_6682,cont_6683,new_element_6684,attrs_6685,events_6686,dynamic_attrs_6687,result))
;
return fexpr__6663();
})());


var G__6848 = cljs.core.next(seq__6654_6837__$1);
var G__6849 = null;
var G__6850 = (0);
var G__6851 = (0);
seq__6654_6823 = G__6848;
chunk__6655_6824 = G__6849;
count__6656_6825 = G__6850;
i__6657_6826 = G__6851;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__6852 = cljs.core.next(seq__6628_6810__$1);
var G__6853 = null;
var G__6854 = (0);
var G__6855 = (0);
seq__6628_6765 = G__6852;
chunk__6629_6766 = G__6853;
count__6630_6767 = G__6854;
i__6631_6768 = G__6855;
continue;
}
} else {
}
}
break;
}

var seq__6664_6856 = cljs.core.seq(dynamic_attrs_6687);
var chunk__6665_6857 = null;
var count__6666_6858 = (0);
var i__6667_6859 = (0);
while(true){
if((i__6667_6859 < count__6666_6858)){
var vec__6668_6860 = chunk__6665_6857.cljs$core$IIndexed$_nth$arity$2(null,i__6667_6859);
var dyn_attr_name_6861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6668_6860,(0),null);
var dyn_attr_value_6862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6668_6860,(1),null);
(new_element_6684[cljs.core.name(dyn_attr_name_6861)] = dyn_attr_value_6862);


var G__6863 = seq__6664_6856;
var G__6864 = chunk__6665_6857;
var G__6865 = count__6666_6858;
var G__6866 = (i__6667_6859 + (1));
seq__6664_6856 = G__6863;
chunk__6665_6857 = G__6864;
count__6666_6858 = G__6865;
i__6667_6859 = G__6866;
continue;
} else {
var temp__5457__auto___6867 = cljs.core.seq(seq__6664_6856);
if(temp__5457__auto___6867){
var seq__6664_6868__$1 = temp__5457__auto___6867;
if(cljs.core.chunked_seq_QMARK_(seq__6664_6868__$1)){
var c__4351__auto___6869 = cljs.core.chunk_first(seq__6664_6868__$1);
var G__6870 = cljs.core.chunk_rest(seq__6664_6868__$1);
var G__6871 = c__4351__auto___6869;
var G__6872 = cljs.core.count(c__4351__auto___6869);
var G__6873 = (0);
seq__6664_6856 = G__6870;
chunk__6665_6857 = G__6871;
count__6666_6858 = G__6872;
i__6667_6859 = G__6873;
continue;
} else {
var vec__6671_6874 = cljs.core.first(seq__6664_6868__$1);
var dyn_attr_name_6875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6671_6874,(0),null);
var dyn_attr_value_6876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6671_6874,(1),null);
(new_element_6684[cljs.core.name(dyn_attr_name_6875)] = dyn_attr_value_6876);


var G__6877 = cljs.core.next(seq__6664_6868__$1);
var G__6878 = null;
var G__6879 = (0);
var G__6880 = (0);
seq__6664_6856 = G__6877;
chunk__6665_6857 = G__6878;
count__6666_6858 = G__6879;
i__6667_6859 = G__6880;
continue;
}
} else {
}
}
break;
}

if(((typeof cont_6683 === 'string') || (typeof cont_6683 === 'number'))){
(new_element_6684["innerHTML"] = cont_6683);
} else {
}

if(cljs.core.vector_QMARK_(cont_6683)){
var seq__6674_6881 = cljs.core.seq(cont_6683);
var chunk__6675_6882 = null;
var count__6676_6883 = (0);
var i__6677_6884 = (0);
while(true){
if((i__6677_6884 < count__6676_6883)){
var cont_element_6885 = chunk__6675_6882.cljs$core$IIndexed$_nth$arity$2(null,i__6677_6884);
var temp__5457__auto___6886 = (htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1 ? htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1(cont_element_6885) : htmlcss_lib.core.generate_html.call(null,cont_element_6885));
if(cljs.core.truth_(temp__5457__auto___6886)){
var generated_elem_6887 = temp__5457__auto___6886;
new_element_6684.appendChild(generated_elem_6887);
} else {
}


var G__6888 = seq__6674_6881;
var G__6889 = chunk__6675_6882;
var G__6890 = count__6676_6883;
var G__6891 = (i__6677_6884 + (1));
seq__6674_6881 = G__6888;
chunk__6675_6882 = G__6889;
count__6676_6883 = G__6890;
i__6677_6884 = G__6891;
continue;
} else {
var temp__5457__auto___6892 = cljs.core.seq(seq__6674_6881);
if(temp__5457__auto___6892){
var seq__6674_6893__$1 = temp__5457__auto___6892;
if(cljs.core.chunked_seq_QMARK_(seq__6674_6893__$1)){
var c__4351__auto___6894 = cljs.core.chunk_first(seq__6674_6893__$1);
var G__6895 = cljs.core.chunk_rest(seq__6674_6893__$1);
var G__6896 = c__4351__auto___6894;
var G__6897 = cljs.core.count(c__4351__auto___6894);
var G__6898 = (0);
seq__6674_6881 = G__6895;
chunk__6675_6882 = G__6896;
count__6676_6883 = G__6897;
i__6677_6884 = G__6898;
continue;
} else {
var cont_element_6899 = cljs.core.first(seq__6674_6893__$1);
var temp__5457__auto___6900__$1 = (htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1 ? htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1(cont_element_6899) : htmlcss_lib.core.generate_html.call(null,cont_element_6899));
if(cljs.core.truth_(temp__5457__auto___6900__$1)){
var generated_elem_6901 = temp__5457__auto___6900__$1;
new_element_6684.appendChild(generated_elem_6901);
} else {
}


var G__6902 = cljs.core.next(seq__6674_6893__$1);
var G__6903 = null;
var G__6904 = (0);
var G__6905 = (0);
seq__6674_6881 = G__6902;
chunk__6675_6882 = G__6903;
count__6676_6883 = G__6904;
i__6677_6884 = G__6905;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.map_QMARK_(cont_6683)){
var temp__5457__auto___6906 = (htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1 ? htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1(cont_6683) : htmlcss_lib.core.generate_html.call(null,cont_6683));
if(cljs.core.truth_(temp__5457__auto___6906)){
var generated_elem_6907 = temp__5457__auto___6906;
new_element_6684.appendChild(generated_elem_6907);
} else {
}
} else {
}

if(cljs.core.truth_(htmlcss_lib.core.html_QMARK_(cont_6683))){
new_element_6684.appendChild(cont_6683);
} else {
}

cljs.core.reset_BANG_(result,new_element_6684);
} else {
}

if(cljs.core.vector_QMARK_(data)){
var generated_htmls_6908 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__6678_6909 = cljs.core.seq(data);
var chunk__6679_6910 = null;
var count__6680_6911 = (0);
var i__6681_6912 = (0);
while(true){
if((i__6681_6912 < count__6680_6911)){
var data_element_6913 = chunk__6679_6910.cljs$core$IIndexed$_nth$arity$2(null,i__6681_6912);
var temp__5457__auto___6914 = (htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1 ? htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1(data_element_6913) : htmlcss_lib.core.generate_html.call(null,data_element_6913));
if(cljs.core.truth_(temp__5457__auto___6914)){
var generated_elem_6915 = temp__5457__auto___6914;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(generated_htmls_6908,cljs.core.conj,generated_elem_6915);
} else {
}


var G__6916 = seq__6678_6909;
var G__6917 = chunk__6679_6910;
var G__6918 = count__6680_6911;
var G__6919 = (i__6681_6912 + (1));
seq__6678_6909 = G__6916;
chunk__6679_6910 = G__6917;
count__6680_6911 = G__6918;
i__6681_6912 = G__6919;
continue;
} else {
var temp__5457__auto___6920 = cljs.core.seq(seq__6678_6909);
if(temp__5457__auto___6920){
var seq__6678_6921__$1 = temp__5457__auto___6920;
if(cljs.core.chunked_seq_QMARK_(seq__6678_6921__$1)){
var c__4351__auto___6922 = cljs.core.chunk_first(seq__6678_6921__$1);
var G__6923 = cljs.core.chunk_rest(seq__6678_6921__$1);
var G__6924 = c__4351__auto___6922;
var G__6925 = cljs.core.count(c__4351__auto___6922);
var G__6926 = (0);
seq__6678_6909 = G__6923;
chunk__6679_6910 = G__6924;
count__6680_6911 = G__6925;
i__6681_6912 = G__6926;
continue;
} else {
var data_element_6927 = cljs.core.first(seq__6678_6921__$1);
var temp__5457__auto___6928__$1 = (htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1 ? htmlcss_lib.core.generate_html.cljs$core$IFn$_invoke$arity$1(data_element_6927) : htmlcss_lib.core.generate_html.call(null,data_element_6927));
if(cljs.core.truth_(temp__5457__auto___6928__$1)){
var generated_elem_6929 = temp__5457__auto___6928__$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(generated_htmls_6908,cljs.core.conj,generated_elem_6929);
} else {
}


var G__6930 = cljs.core.next(seq__6678_6921__$1);
var G__6931 = null;
var G__6932 = (0);
var G__6933 = (0);
seq__6678_6909 = G__6930;
chunk__6679_6910 = G__6931;
count__6680_6911 = G__6932;
i__6681_6912 = G__6933;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(result,cljs.core.deref(generated_htmls_6908));
} else {
}

if(cljs.core.truth_(htmlcss_lib.core.html_QMARK_(data))){
cljs.core.reset_BANG_(result,data);
} else {
}

return cljs.core.deref(result);
});
/**
 * Generate map that represents animation in css style
 * 
 * animation-name Is animation name
 * from-props Is map of properties at the start of animation
 *  {:width "50px"}
 * to-props Is map of properties at the end of animation
 *  {:width "100px"}
 */
htmlcss_lib.core.anmtn = (function htmlcss_lib$core$anmtn(animation_name,from_props,to_props){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$anim,["@keyframes ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name)].join(''),cljs.core.cst$kw$from,from_props,cljs.core.cst$kw$to,to_props], null);
});
/**
 * Generate map that represents selector and it's properties
 * 
 * selector Is a css selector
 * props-map Is map of properties applied to element selected by selector
 */
htmlcss_lib.core.slctr = (function htmlcss_lib$core$slctr(selector,props_map){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sel,selector,cljs.core.cst$kw$props,props_map], null);
});
/**
 * Generate map that represents style HTML element
 *   
 * id Is identification of style HTML element
 * cont Is a content of style HTML element that can be map generated by anmtn or slctr fns
 *  or vector of these maps
 */
htmlcss_lib.core.stl = (function htmlcss_lib$core$stl(var_args){
var args__4534__auto__ = [];
var len__4531__auto___6936 = arguments.length;
var i__4532__auto___6937 = (0);
while(true){
if((i__4532__auto___6937 < len__4531__auto___6936)){
args__4534__auto__.push((arguments[i__4532__auto___6937]));

var G__6938 = (i__4532__auto___6937 + (1));
i__4532__auto___6937 = G__6938;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return htmlcss_lib.core.stl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

htmlcss_lib.core.stl.cljs$core$IFn$_invoke$arity$variadic = (function (id,cont){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$type,"text/css"], null),cljs.core.cst$kw$cont,cljs.core.vec(cont)], null);
});

htmlcss_lib.core.stl.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
htmlcss_lib.core.stl.cljs$lang$applyTo = (function (seq6934){
var G__6935 = cljs.core.first(seq6934);
var seq6934__$1 = cljs.core.next(seq6934);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6935,seq6934__$1);
});

/**
 * Generate string that represents selector or animation of style HTML element
 */
htmlcss_lib.core.form_style_content = (function htmlcss_lib$core$form_style_content(data){
var sel = cljs.core.cst$kw$sel.cljs$core$IFn$_invoke$arity$1(data);
var props = cljs.core.cst$kw$props.cljs$core$IFn$_invoke$arity$1(data);
var anim = cljs.core.cst$kw$anim.cljs$core$IFn$_invoke$arity$1(data);
var from_props = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(data);
var to_props = cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(data);
var content = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
if(cljs.core.truth_(sel)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.str,sel," { ");

var seq__6939_6969 = cljs.core.seq(props);
var chunk__6940_6970 = null;
var count__6941_6971 = (0);
var i__6942_6972 = (0);
while(true){
if((i__6942_6972 < count__6941_6971)){
var vec__6943_6973 = chunk__6940_6970.cljs$core$IIndexed$_nth$arity$2(null,i__6942_6972);
var prop_name_6974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6943_6973,(0),null);
var prop_value_6975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6943_6973,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.str,cljs.core.name(prop_name_6974),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_6975,"; "], 0));


var G__6976 = seq__6939_6969;
var G__6977 = chunk__6940_6970;
var G__6978 = count__6941_6971;
var G__6979 = (i__6942_6972 + (1));
seq__6939_6969 = G__6976;
chunk__6940_6970 = G__6977;
count__6941_6971 = G__6978;
i__6942_6972 = G__6979;
continue;
} else {
var temp__5457__auto___6980 = cljs.core.seq(seq__6939_6969);
if(temp__5457__auto___6980){
var seq__6939_6981__$1 = temp__5457__auto___6980;
if(cljs.core.chunked_seq_QMARK_(seq__6939_6981__$1)){
var c__4351__auto___6982 = cljs.core.chunk_first(seq__6939_6981__$1);
var G__6983 = cljs.core.chunk_rest(seq__6939_6981__$1);
var G__6984 = c__4351__auto___6982;
var G__6985 = cljs.core.count(c__4351__auto___6982);
var G__6986 = (0);
seq__6939_6969 = G__6983;
chunk__6940_6970 = G__6984;
count__6941_6971 = G__6985;
i__6942_6972 = G__6986;
continue;
} else {
var vec__6946_6987 = cljs.core.first(seq__6939_6981__$1);
var prop_name_6988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6946_6987,(0),null);
var prop_value_6989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6946_6987,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.str,cljs.core.name(prop_name_6988),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_6989,"; "], 0));


var G__6990 = cljs.core.next(seq__6939_6981__$1);
var G__6991 = null;
var G__6992 = (0);
var G__6993 = (0);
seq__6939_6969 = G__6990;
chunk__6940_6970 = G__6991;
count__6941_6971 = G__6992;
i__6942_6972 = G__6993;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(anim)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.str,anim," { ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["from { "], 0));

var seq__6949_6994 = cljs.core.seq(from_props);
var chunk__6950_6995 = null;
var count__6951_6996 = (0);
var i__6952_6997 = (0);
while(true){
if((i__6952_6997 < count__6951_6996)){
var vec__6953_6998 = chunk__6950_6995.cljs$core$IIndexed$_nth$arity$2(null,i__6952_6997);
var prop_name_6999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6953_6998,(0),null);
var prop_value_7000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6953_6998,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.str,cljs.core.name(prop_name_6999),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_7000,"; "], 0));


var G__7001 = seq__6949_6994;
var G__7002 = chunk__6950_6995;
var G__7003 = count__6951_6996;
var G__7004 = (i__6952_6997 + (1));
seq__6949_6994 = G__7001;
chunk__6950_6995 = G__7002;
count__6951_6996 = G__7003;
i__6952_6997 = G__7004;
continue;
} else {
var temp__5457__auto___7005 = cljs.core.seq(seq__6949_6994);
if(temp__5457__auto___7005){
var seq__6949_7006__$1 = temp__5457__auto___7005;
if(cljs.core.chunked_seq_QMARK_(seq__6949_7006__$1)){
var c__4351__auto___7007 = cljs.core.chunk_first(seq__6949_7006__$1);
var G__7008 = cljs.core.chunk_rest(seq__6949_7006__$1);
var G__7009 = c__4351__auto___7007;
var G__7010 = cljs.core.count(c__4351__auto___7007);
var G__7011 = (0);
seq__6949_6994 = G__7008;
chunk__6950_6995 = G__7009;
count__6951_6996 = G__7010;
i__6952_6997 = G__7011;
continue;
} else {
var vec__6956_7012 = cljs.core.first(seq__6949_7006__$1);
var prop_name_7013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6956_7012,(0),null);
var prop_value_7014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6956_7012,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.str,cljs.core.name(prop_name_7013),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_7014,"; "], 0));


var G__7015 = cljs.core.next(seq__6949_7006__$1);
var G__7016 = null;
var G__7017 = (0);
var G__7018 = (0);
seq__6949_6994 = G__7015;
chunk__6950_6995 = G__7016;
count__6951_6996 = G__7017;
i__6952_6997 = G__7018;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(content,cljs.core.str,"} ");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(content,cljs.core.str,"to { ");

var seq__6959_7019 = cljs.core.seq(to_props);
var chunk__6960_7020 = null;
var count__6961_7021 = (0);
var i__6962_7022 = (0);
while(true){
if((i__6962_7022 < count__6961_7021)){
var vec__6963_7023 = chunk__6960_7020.cljs$core$IIndexed$_nth$arity$2(null,i__6962_7022);
var prop_name_7024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963_7023,(0),null);
var prop_value_7025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963_7023,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.str,cljs.core.name(prop_name_7024),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_7025,"; "], 0));


var G__7026 = seq__6959_7019;
var G__7027 = chunk__6960_7020;
var G__7028 = count__6961_7021;
var G__7029 = (i__6962_7022 + (1));
seq__6959_7019 = G__7026;
chunk__6960_7020 = G__7027;
count__6961_7021 = G__7028;
i__6962_7022 = G__7029;
continue;
} else {
var temp__5457__auto___7030 = cljs.core.seq(seq__6959_7019);
if(temp__5457__auto___7030){
var seq__6959_7031__$1 = temp__5457__auto___7030;
if(cljs.core.chunked_seq_QMARK_(seq__6959_7031__$1)){
var c__4351__auto___7032 = cljs.core.chunk_first(seq__6959_7031__$1);
var G__7033 = cljs.core.chunk_rest(seq__6959_7031__$1);
var G__7034 = c__4351__auto___7032;
var G__7035 = cljs.core.count(c__4351__auto___7032);
var G__7036 = (0);
seq__6959_7019 = G__7033;
chunk__6960_7020 = G__7034;
count__6961_7021 = G__7035;
i__6962_7022 = G__7036;
continue;
} else {
var vec__6966_7037 = cljs.core.first(seq__6959_7031__$1);
var prop_name_7038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966_7037,(0),null);
var prop_value_7039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966_7037,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.str,cljs.core.name(prop_name_7038),": ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop_value_7039,"; "], 0));


var G__7040 = cljs.core.next(seq__6959_7031__$1);
var G__7041 = null;
var G__7042 = (0);
var G__7043 = (0);
seq__6959_7019 = G__7040;
chunk__6960_7020 = G__7041;
count__6961_7021 = G__7042;
i__6962_7022 = G__7043;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(content,cljs.core.str,"} ");
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(content,cljs.core.str,"} ");

return cljs.core.deref(content);
});
/**
 * Generates style HTML element from clojure map generated by stl fn
 */
htmlcss_lib.core.generate_style = (function htmlcss_lib$core$generate_style(data){
if(cljs.core.map_QMARK_(data)){
var new_element = document.createElement("style");
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(data);
var cont = cljs.core.cst$kw$cont.cljs$core$IFn$_invoke$arity$1(data);
if(typeof cont === 'string'){
(new_element["innerHTML"] = cont);
} else {
if(cljs.core.vector_QMARK_(cont)){
var seq__7044_7058 = cljs.core.seq(cont);
var chunk__7045_7059 = null;
var count__7046_7060 = (0);
var i__7047_7061 = (0);
while(true){
if((i__7047_7061 < count__7046_7060)){
var cont_element_7062 = chunk__7045_7059.cljs$core$IIndexed$_nth$arity$2(null,i__7047_7061);
(new_element["innerHTML"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((new_element["innerHTML"]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlcss_lib.core.form_style_content(cont_element_7062))].join(''));


var G__7063 = seq__7044_7058;
var G__7064 = chunk__7045_7059;
var G__7065 = count__7046_7060;
var G__7066 = (i__7047_7061 + (1));
seq__7044_7058 = G__7063;
chunk__7045_7059 = G__7064;
count__7046_7060 = G__7065;
i__7047_7061 = G__7066;
continue;
} else {
var temp__5457__auto___7067 = cljs.core.seq(seq__7044_7058);
if(temp__5457__auto___7067){
var seq__7044_7068__$1 = temp__5457__auto___7067;
if(cljs.core.chunked_seq_QMARK_(seq__7044_7068__$1)){
var c__4351__auto___7069 = cljs.core.chunk_first(seq__7044_7068__$1);
var G__7070 = cljs.core.chunk_rest(seq__7044_7068__$1);
var G__7071 = c__4351__auto___7069;
var G__7072 = cljs.core.count(c__4351__auto___7069);
var G__7073 = (0);
seq__7044_7058 = G__7070;
chunk__7045_7059 = G__7071;
count__7046_7060 = G__7072;
i__7047_7061 = G__7073;
continue;
} else {
var cont_element_7074 = cljs.core.first(seq__7044_7068__$1);
(new_element["innerHTML"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((new_element["innerHTML"]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(htmlcss_lib.core.form_style_content(cont_element_7074))].join(''));


var G__7075 = cljs.core.next(seq__7044_7068__$1);
var G__7076 = null;
var G__7077 = (0);
var G__7078 = (0);
seq__7044_7058 = G__7075;
chunk__7045_7059 = G__7076;
count__7046_7060 = G__7077;
i__7047_7061 = G__7078;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(cont)){
(new_element["innerHTML"] = htmlcss_lib.core.form_style_content(cont));
} else {
(new_element["innerHTML"] = htmlcss_lib.core.form_style_content(data));
}
}
}

var seq__7048_7079 = cljs.core.seq(attrs);
var chunk__7049_7080 = null;
var count__7050_7081 = (0);
var i__7051_7082 = (0);
while(true){
if((i__7051_7082 < count__7050_7081)){
var vec__7052_7083 = chunk__7049_7080.cljs$core$IIndexed$_nth$arity$2(null,i__7051_7082);
var attr_name_7084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7052_7083,(0),null);
var attr_value_7085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7052_7083,(1),null);
new_element.setAttribute(cljs.core.name(attr_name_7084),attr_value_7085);


var G__7086 = seq__7048_7079;
var G__7087 = chunk__7049_7080;
var G__7088 = count__7050_7081;
var G__7089 = (i__7051_7082 + (1));
seq__7048_7079 = G__7086;
chunk__7049_7080 = G__7087;
count__7050_7081 = G__7088;
i__7051_7082 = G__7089;
continue;
} else {
var temp__5457__auto___7090 = cljs.core.seq(seq__7048_7079);
if(temp__5457__auto___7090){
var seq__7048_7091__$1 = temp__5457__auto___7090;
if(cljs.core.chunked_seq_QMARK_(seq__7048_7091__$1)){
var c__4351__auto___7092 = cljs.core.chunk_first(seq__7048_7091__$1);
var G__7093 = cljs.core.chunk_rest(seq__7048_7091__$1);
var G__7094 = c__4351__auto___7092;
var G__7095 = cljs.core.count(c__4351__auto___7092);
var G__7096 = (0);
seq__7048_7079 = G__7093;
chunk__7049_7080 = G__7094;
count__7050_7081 = G__7095;
i__7051_7082 = G__7096;
continue;
} else {
var vec__7055_7097 = cljs.core.first(seq__7048_7091__$1);
var attr_name_7098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7055_7097,(0),null);
var attr_value_7099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7055_7097,(1),null);
new_element.setAttribute(cljs.core.name(attr_name_7098),attr_value_7099);


var G__7100 = cljs.core.next(seq__7048_7091__$1);
var G__7101 = null;
var G__7102 = (0);
var G__7103 = (0);
seq__7048_7079 = G__7100;
chunk__7049_7080 = G__7101;
count__7050_7081 = G__7102;
i__7051_7082 = G__7103;
continue;
}
} else {
}
}
break;
}

return new_element;
} else {
return null;
}
});
/**
 * Generate HTML element from map generated by crt or stl fns
 */
htmlcss_lib.core.gen = (function htmlcss_lib$core$gen(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7110 = arguments.length;
var i__4532__auto___7111 = (0);
while(true){
if((i__4532__auto___7111 < len__4531__auto___7110)){
args__4534__auto__.push((arguments[i__4532__auto___7111]));

var G__7112 = (i__4532__auto___7111 + (1));
i__4532__auto___7111 = G__7112;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return htmlcss_lib.core.gen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

htmlcss_lib.core.gen.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__7106){
var vec__7107 = p__7106;
var tag_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7107,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_type,"style")){
return htmlcss_lib.core.generate_style(data);
} else {
return htmlcss_lib.core.generate_html(data);
}
});

htmlcss_lib.core.gen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
htmlcss_lib.core.gen.cljs$lang$applyTo = (function (seq7104){
var G__7105 = cljs.core.first(seq7104);
var seq7104__$1 = cljs.core.next(seq7104);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7105,seq7104__$1);
});

