// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sample_client.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('htmlcss_lib.core');
goog.require('sample_middle.functionalities');
goog.require('common_client.allowed_actions.controller');
goog.require('sample_client.person.controller');
goog.require('language_lib.core');
/**
 * Render menu items for user that have privilege for them
 */
sample_client.html.custom_menu = (function sample_client$html$custom_menu(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(cljs.core.deref(common_client.allowed_actions.controller.allowed_actions),sample_middle.functionalities.person_read))?htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((1001)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"aPersonId"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$evt_DASH_fn,sample_client.person.controller.nav_link], null)], null)], 0)):null)], null);
});
