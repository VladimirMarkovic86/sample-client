// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sample_client.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.core');
goog.require('sample_client.html');
goog.require('sample_middle.functionalities');
goog.require('common_middle.request_urls');
goog.require('common_client.role.entity');
goog.require('common_client.login.controller');
/**
 * Check if session is active
 */
sample_client.controller.am_i_logged_in = (function sample_client$controller$am_i_logged_in(){
cljs.core.reset_BANG_(ajax_lib.core.base_url,"https://sample:1603");

cljs.core.reset_BANG_(ajax_lib.core.with_credentials,true);

cljs.core.reset_BANG_(common_client.login.controller.custom_menu,sample_client.html.custom_menu);

cljs.core.reset_BANG_(common_client.login.controller.logout_fn,common_client.login.controller.logout);

cljs.core.reset_BANG_(common_client.login.controller.logout_success_fn,common_client.login.controller.logout_success);

cljs.core.reset_BANG_(common_client.role.entity.functionalities,sample_middle.functionalities.functionalities);

return ajax_lib.core.ajax(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,common_middle.request_urls.am_i_logged_in_url,cljs.core.cst$kw$success_DASH_fn,common_client.login.controller.main_page,cljs.core.cst$kw$error_DASH_fn,common_client.login.controller.redirect_to_login,cljs.core.cst$kw$entity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,"it's me"], null)], null));
});
window.onload = sample_client.controller.am_i_logged_in;
