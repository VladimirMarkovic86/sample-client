// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.allowed_actions.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.core');
goog.require('common_middle.functionalities');
goog.require('common_middle.request_urls');
common_client.allowed_actions.controller.allowed_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Request set of allowed actions for user that is logged in
 */
common_client.allowed_actions.controller.get_allowed_actions = (function common_client$allowed_actions$controller$get_allowed_actions(){
var xhr = ajax_lib.core.sjax(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,common_middle.request_urls.get_allowed_actions_url], null));
var response = ajax_lib.core.get_response(xhr);
var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(response);
return cljs.core.reset_BANG_(common_client.allowed_actions.controller.allowed_actions,data);
});
