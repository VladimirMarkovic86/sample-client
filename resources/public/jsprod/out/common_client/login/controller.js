// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.login.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.core');
goog.require('js_lib.core');
goog.require('utils_lib.core');
goog.require('framework_lib.core');
goog.require('common_client.login.html');
goog.require('common_client.sign_up.controller');
goog.require('common_client.allowed_actions.controller');
goog.require('common_middle.request_urls');
goog.require('language_lib.core');
common_client.login.controller.custom_menu = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
common_client.login.controller.logout_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
common_client.login.controller.logout_success_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Remove main page from HTML document
 */
common_client.login.controller.remove_main = (function common_client$login$controller$remove_main(){
return js_lib.core.remove_element_content(".body");
});
/**
 * Set cookie in browser
 */
common_client.login.controller.set_cookie = (function common_client$login$controller$set_cookie(cookie_value){
return (document["cookie"] = cookie_value);
});
/**
 * Destroy session cookie
 */
common_client.login.controller.destroy_session_cookie = (function common_client$login$controller$destroy_session_cookie(){
common_client.login.controller.set_cookie(["session=destroyed; ","expires=Thu, 01 Jan 1970 00:00:01 GMT; "].join(''));

return common_client.login.controller.set_cookie(["long_session=destroyed; ","expires=Thu, 01 Jan 1970 00:00:01 GMT; "].join(''));
});
/**
 * Check if session cookie exists
 */
common_client.login.controller.is_session_expired = (function common_client$login$controller$is_session_expired(){
var cookies = (document["cookie"]);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),cookies.indexOf("session"));
});
/**
 * Check if login form displayed
 */
common_client.login.controller.is_login_displayed = (function common_client$login$controller$is_login_displayed(){
return js_lib.core.query_selector("table.login");
});
/**
 * Log out if session expired
 */
common_client.login.controller.logout_on_session_expired = (function common_client$login$controller$logout_on_session_expired(){
return js_lib.core.timeout((function (){
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not(common_client.login.controller.is_login_displayed());
if(and__3938__auto__){
return common_client.login.controller.is_session_expired();
} else {
return and__3938__auto__;
}
})())){
location.reload();
} else {
}

if(cljs.core.not((function (){var and__3938__auto__ = common_client.login.controller.is_login_displayed();
if(cljs.core.truth_(and__3938__auto__)){
return common_client.login.controller.is_session_expired();
} else {
return and__3938__auto__;
}
})())){
return (common_client.login.controller.logout_on_session_expired.cljs$core$IFn$_invoke$arity$0 ? common_client.login.controller.logout_on_session_expired.cljs$core$IFn$_invoke$arity$0() : common_client.login.controller.logout_on_session_expired.call(null));
} else {
return null;
}
}),(1000));
});
/**
 * Function that resets cached labels and reads labels for chosen language
 */
common_client.login.controller.change_language_fn = (function common_client$login$controller$change_language_fn(evt_p,element,event){
cljs.core.reset_BANG_(language_lib.core.cached_labels,cljs.core.PersistentVector.EMPTY);

var xhr = ajax_lib.core.sjax(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,common_middle.request_urls.set_language_url,cljs.core.cst$kw$entity,evt_p], null));
return location.reload();
});
/**
 * Open main page
 */
common_client.login.controller.main_page = (function common_client$login$controller$main_page(xhr){
common_client.allowed_actions.controller.get_allowed_actions();

var response = ajax_lib.core.get_response(xhr);
var username = cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(response);
var language_name = cljs.core.cst$kw$language_DASH_name.cljs$core$IFn$_invoke$arity$1(response);
return js_lib.core.append_element(".body",common_client.login.html.template(cljs.core.deref(common_client.login.controller.logout_fn),username,common_client.login.controller.change_language_fn,language_name,cljs.core.deref(common_client.login.controller.custom_menu)));
});
/**
 * Login success
 */
common_client.login.controller.login_success = (function common_client$login$controller$login_success(xhr,ajax_params){
cljs.core.reset_BANG_(language_lib.core.cached_labels,cljs.core.PersistentVector.EMPTY);

js_lib.core.remove_element_content(".body");

common_client.login.controller.logout_on_session_expired();

return common_client.login.controller.main_page(xhr);
});
/**
 * Login error
 */
common_client.login.controller.login_error = (function common_client$login$controller$login_error(xhr){
var response = ajax_lib.core.get_response(xhr);
var email = js_lib.core.get_by_id("txtEmailId");
var password = js_lib.core.get_by_id("pswLoginId");
js_lib.core.remove_class(email,"error");

js_lib.core.remove_class(password,"error");

js_lib.core.remove_class(email,"success");

js_lib.core.remove_class(password,"success");

js_lib.core.add_class(email,cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(response));

return js_lib.core.add_class(password,cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(response));
});
/**
 * Read data from login form
 */
common_client.login.controller.read_login_form = (function common_client$login$controller$read_login_form(){
var email = js_lib.core.get_value("#txtEmailId");
var password = js_lib.core.get_value("#pswLoginId");
var remember_me = js_lib.core.get_checked("#chkRememberMeId");
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$email,email,cljs.core.cst$kw$password,utils_lib.core.encrypt_password(password),cljs.core.cst$kw$remember_DASH_me,remember_me], null);
});
/**
 * Redirect to login page
 */
common_client.login.controller.redirect_to_login = (function common_client$login$controller$redirect_to_login(){
return js_lib.core.append_element(".body",common_client.login.html.form(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,ajax_lib.core.ajax,cljs.core.cst$kw$evt_DASH_p,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,common_middle.request_urls.login_url,cljs.core.cst$kw$success_DASH_fn,common_client.login.controller.login_success,cljs.core.cst$kw$error_DASH_fn,common_client.login.controller.login_error,cljs.core.cst$kw$entity,common_client.login.controller.read_login_form], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,common_client.sign_up.controller.sign_up_evt_fn,cljs.core.cst$kw$evt_DASH_p,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cancel_DASH_fn,cljs.core.deref(common_client.login.controller.logout_success_fn),cljs.core.cst$kw$cancel_DASH_evt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$evt_DASH_fn,cljs.core.deref(common_client.login.controller.logout_success_fn)], null)], null)], null)], null)], null)));
});
/**
 * Logout success function
 */
common_client.login.controller.logout_success = (function common_client$login$controller$logout_success(xhr){
common_client.login.controller.remove_main();

common_client.login.controller.destroy_session_cookie();

return common_client.login.controller.redirect_to_login();
});
/**
 * Logout error function
 */
common_client.login.controller.logout_error = (function common_client$login$controller$logout_error(xhr){
var response = ajax_lib.core.get_response(xhr);
var message = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(response);
var status = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response);
return framework_lib.core.popup_fn(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,status,cljs.core.cst$kw$content,message], null));
});
/**
 * Logout
 */
common_client.login.controller.logout = (function common_client$login$controller$logout(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8744 = arguments.length;
var i__4532__auto___8745 = (0);
while(true){
if((i__4532__auto___8745 < len__4531__auto___8744)){
args__4534__auto__.push((arguments[i__4532__auto___8745]));

var G__8746 = (i__4532__auto___8745 + (1));
i__4532__auto___8745 = G__8746;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return common_client.login.controller.logout.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

common_client.login.controller.logout.cljs$core$IFn$_invoke$arity$variadic = (function (optional){
return ajax_lib.core.ajax(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,common_middle.request_urls.logout_url,cljs.core.cst$kw$success_DASH_fn,common_client.login.controller.logout_success,cljs.core.cst$kw$error_DASH_fn,common_client.login.controller.logout_error,cljs.core.cst$kw$entity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,"Bye"], null)], null));
});

common_client.login.controller.logout.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
common_client.login.controller.logout.cljs$lang$applyTo = (function (seq8743){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8743));
});

