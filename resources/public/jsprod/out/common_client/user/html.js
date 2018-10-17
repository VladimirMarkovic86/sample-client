// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.user.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('htmlcss_lib.core');
goog.require('framework_lib.core');
goog.require('common_client.user.entity');
goog.require('language_lib.core');
goog.require('common_client.allowed_actions.controller');
goog.require('common_middle.functionalities');
/**
 * Generate ul HTML element
 * that represents navigation menu
 */
common_client.user.html.nav = (function common_client$user$html$nav(){
return htmlcss_lib.core.gen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(cljs.core.deref(common_client.allowed_actions.controller.allowed_actions),common_middle.functionalities.user_create))?htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((4)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"aCreateId"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.create_entity,cljs.core.cst$kw$evt_DASH_p,common_client.user.entity.table_conf_fn()], null)], null)], 0))], 0)):null),((cljs.core.contains_QMARK_(cljs.core.deref(common_client.allowed_actions.controller.allowed_actions),common_middle.functionalities.user_read))?htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((5)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"aShowAllId"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.gen_table,cljs.core.cst$kw$evt_DASH_p,common_client.user.entity.table_conf_fn()], null)], null)], 0))], 0)):null)], null));
});
