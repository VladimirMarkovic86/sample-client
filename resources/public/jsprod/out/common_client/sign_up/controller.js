// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.sign_up.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.core');
goog.require('utils_lib.core');
goog.require('framework_lib.core');
goog.require('js_lib.core');
goog.require('common_client.sign_up.html');
goog.require('common_middle.request_urls');
/**
 * Sign up error function
 */
common_client.sign_up.controller.sign_up_error = (function common_client$sign_up$controller$sign_up_error(xhr){
var response = ajax_lib.core.get_response(xhr);
var message = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(response);
var status = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response);
return framework_lib.core.popup_fn(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,status,cljs.core.cst$kw$content,message], null));
});
/**
 * Read data from sign up page and submit form
 */
common_client.sign_up.controller.sign_up_evt = (function common_client$sign_up$controller$sign_up_evt(cancel_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$evt_DASH_fn,(function (){
var username = js_lib.core.get_value("#txtUsernameId");
var v_username = js_lib.core.is_valid_QMARK_("#txtUsernameId");
var email = js_lib.core.get_value("#txtEmailId");
var v_email = js_lib.core.is_valid_QMARK_("#txtEmailId");
var password = js_lib.core.get_value("#pswSignUpId");
var v_password = js_lib.core.is_valid_QMARK_("#pswSignUpId");
var confirm_password = js_lib.core.get_value("#pswConfirmSignUpId");
var v_confirm_password = js_lib.core.is_valid_QMARK_("#pswConfirmSignUpId");
if(cljs.core.truth_((function (){var and__3938__auto__ = v_username;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = v_email;
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = v_password;
if(cljs.core.truth_(and__3938__auto____$2)){
var and__3938__auto____$3 = v_confirm_password;
if(cljs.core.truth_(and__3938__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password,confirm_password);
} else {
return and__3938__auto____$3;
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return ajax_lib.core.ajax(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,common_middle.request_urls.sign_up_url,cljs.core.cst$kw$success_DASH_fn,cancel_fn,cljs.core.cst$kw$error_DASH_fn,common_client.sign_up.controller.sign_up_error,cljs.core.cst$kw$entity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$entity_DASH_type,"user",cljs.core.cst$kw$entity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,utils_lib.core.encrypt_password(password),cljs.core.cst$kw$email,email], null),cljs.core.cst$kw$_id,""], null)], null));
} else {
return console.log("Validation failed");
}
})], null)], null);
});
/**
 * Sign up form with cancel events
 */
common_client.sign_up.controller.sign_up_evt_fn = (function common_client$sign_up$controller$sign_up_evt_fn(p__8738){
var map__8739 = p__8738;
var map__8739__$1 = ((((!((map__8739 == null)))?(((((map__8739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8739):map__8739);
var cancel_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8739__$1,cljs.core.cst$kw$cancel_DASH_fn);
var cancel_evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8739__$1,cljs.core.cst$kw$cancel_DASH_evt);
js_lib.core.remove_element_content(".body");

return js_lib.core.append_element(".body",common_client.sign_up.html.form(common_client.sign_up.controller.sign_up_evt(cancel_fn),cancel_evt));
});
