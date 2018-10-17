// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sample_middle.functionalities');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('common_middle.functionalities');
sample_middle.functionalities.person_create = "person-create";
sample_middle.functionalities.person_read = "person-read";
sample_middle.functionalities.person_update = "person-update";
sample_middle.functionalities.person_delete = "person-delete";
sample_middle.functionalities.functionalities = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(common_middle.functionalities.functionalities,sample_middle.functionalities.person_create,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sample_middle.functionalities.person_read,sample_middle.functionalities.person_update,sample_middle.functionalities.person_delete], 0));
