// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.sign_up.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('htmlcss_lib.core');
goog.require('language_lib.core');
/**
 * Generate table HTML element that contains sign up form
 */
common_client.sign_up.html.form = (function common_client$sign_up$html$form(sign_up_evt,cancel_evt){
return htmlcss_lib.core.gen(htmlcss_lib.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((18))], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colspan,(2)], null)], 0))], 0)),htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((19)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"txtUsernameId"], null)], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"txtUsernameId",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$required,"required"], null)], 0))], 0))], null)], 0)),htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((14)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"txtEmailId"], null)], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"txtEmailId",cljs.core.cst$kw$type,"email",cljs.core.cst$kw$required,"required"], null)], 0))], 0))], null)], 0)),htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((15)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pswSignUpId"], null)], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"pswSignUpId",cljs.core.cst$kw$type,"password",cljs.core.cst$kw$required,"required"], null)], 0))], 0))], null)], 0)),htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((20)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pswConfirmSignUpId"], null)], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"pswConfirmSignUpId",cljs.core.cst$kw$type,"password",cljs.core.cst$kw$required,"required"], null)], 0))], 0))], null)], 0)),htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"btnCancelId",cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,language_lib.core.get_label((12)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"right"], null)], null),cancel_evt], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"btnSignUpId",cljs.core.cst$kw$name,"btnSignUpN",cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,language_lib.core.get_label((18))], null),sign_up_evt], 0))], 0))], null)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"signUp"], null)], 0)));
});