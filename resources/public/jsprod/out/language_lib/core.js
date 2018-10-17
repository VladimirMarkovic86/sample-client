// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('language_lib.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.core');
goog.require('common_middle.request_urls');
language_lib.core.default_language = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$english);
language_lib.core.cached_labels = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Read all labels if cached-labels is empty
 */
language_lib.core.read_all_labels = (function language_lib$core$read_all_labels(){
if(cljs.core.empty_QMARK_(cljs.core.deref(language_lib.core.cached_labels))){
var xhr = ajax_lib.core.sjax(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,common_middle.request_urls.get_labels_url], null));
var response = ajax_lib.core.get_response(xhr);
var language = cljs.core.cst$kw$language.cljs$core$IFn$_invoke$arity$1(response);
var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(response);
cljs.core.reset_BANG_(language_lib.core.default_language,language);

return cljs.core.reset_BANG_(language_lib.core.cached_labels,data);
} else {
return cljs.core.deref(language_lib.core.cached_labels);
}
});
/**
 * Get label for chosen language by it's code recursion
 */
language_lib.core.get_label_recur = (function language_lib$core$get_label_recur(code,language,index){
while(true){
if((index < cljs.core.count(cljs.core.deref(language_lib.core.cached_labels)))){
var cached_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(language_lib.core.cached_labels),index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cached_label),code)){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cached_label,language);
if(cljs.core.truth_(temp__5455__auto__)){
var cached_translation = temp__5455__auto__;
return cached_translation;
} else {
return code;
}
} else {
var G__7117 = code;
var G__7118 = language;
var G__7119 = (index + (1));
code = G__7117;
language = G__7118;
index = G__7119;
continue;
}
} else {
return code;
}
break;
}
});
/**
 * Get label for chosen language by it's code
 */
language_lib.core.get_label = (function language_lib$core$get_label(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7126 = arguments.length;
var i__4532__auto___7127 = (0);
while(true){
if((i__4532__auto___7127 < len__4531__auto___7126)){
args__4534__auto__.push((arguments[i__4532__auto___7127]));

var G__7128 = (i__4532__auto___7127 + (1));
i__4532__auto___7127 = G__7128;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return language_lib.core.get_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

language_lib.core.get_label.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__7122){
var vec__7123 = p__7122;
var language = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7123,(0),null);
language_lib.core.read_all_labels();

return language_lib.core.get_label_recur(code,cljs.core.deref(language_lib.core.default_language),(0));
});

language_lib.core.get_label.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
language_lib.core.get_label.cljs$lang$applyTo = (function (seq7120){
var G__7121 = cljs.core.first(seq7120);
var seq7120__$1 = cljs.core.next(seq7120);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7121,seq7120__$1);
});

