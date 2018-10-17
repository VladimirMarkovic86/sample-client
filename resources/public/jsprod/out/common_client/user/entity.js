// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.user.entity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.core');
goog.require('framework_lib.core');
goog.require('language_lib.core');
goog.require('common_middle.request_urls');
goog.require('common_client.allowed_actions.controller');
common_client.user.entity.entity_type = "user";
/**
 * 
 */
common_client.user.entity.get_roles = (function common_client$user$entity$get_roles(){
var xhr = ajax_lib.core.sjax(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,common_middle.request_urls.get_entities_url,cljs.core.cst$kw$entity,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$entity_DASH_type,"role",cljs.core.cst$kw$entity_DASH_filter,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$projection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_id,cljs.core.cst$kw$role_DASH_name], null),cljs.core.cst$kw$projection_DASH_include,true,cljs.core.cst$kw$qsort,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role_DASH_name,(1)], null),cljs.core.cst$kw$pagination,false,cljs.core.cst$kw$collation,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"sr"], null)], null)], null));
var response = ajax_lib.core.get_response(xhr);
var data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(response);
var options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__8687_8695 = cljs.core.seq(data);
var chunk__8688_8696 = null;
var count__8689_8697 = (0);
var i__8690_8698 = (0);
while(true){
if((i__8690_8698 < count__8689_8697)){
var map__8691_8699 = chunk__8688_8696.cljs$core$IIndexed$_nth$arity$2(null,i__8690_8698);
var map__8691_8700__$1 = ((((!((map__8691_8699 == null)))?(((((map__8691_8699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8691_8699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8691_8699):map__8691_8699);
var op_value_8701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8691_8700__$1,cljs.core.cst$kw$_id);
var op_label_8702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8691_8700__$1,cljs.core.cst$kw$role_DASH_name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(options,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_label_8702,op_value_8701], null));


var G__8703 = seq__8687_8695;
var G__8704 = chunk__8688_8696;
var G__8705 = count__8689_8697;
var G__8706 = (i__8690_8698 + (1));
seq__8687_8695 = G__8703;
chunk__8688_8696 = G__8704;
count__8689_8697 = G__8705;
i__8690_8698 = G__8706;
continue;
} else {
var temp__5457__auto___8707 = cljs.core.seq(seq__8687_8695);
if(temp__5457__auto___8707){
var seq__8687_8708__$1 = temp__5457__auto___8707;
if(cljs.core.chunked_seq_QMARK_(seq__8687_8708__$1)){
var c__4351__auto___8709 = cljs.core.chunk_first(seq__8687_8708__$1);
var G__8710 = cljs.core.chunk_rest(seq__8687_8708__$1);
var G__8711 = c__4351__auto___8709;
var G__8712 = cljs.core.count(c__4351__auto___8709);
var G__8713 = (0);
seq__8687_8695 = G__8710;
chunk__8688_8696 = G__8711;
count__8689_8697 = G__8712;
i__8690_8698 = G__8713;
continue;
} else {
var map__8693_8714 = cljs.core.first(seq__8687_8708__$1);
var map__8693_8715__$1 = ((((!((map__8693_8714 == null)))?(((((map__8693_8714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8693_8714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8693_8714):map__8693_8714);
var op_value_8716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8693_8715__$1,cljs.core.cst$kw$_id);
var op_label_8717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8693_8715__$1,cljs.core.cst$kw$role_DASH_name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(options,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_label_8717,op_value_8716], null));


var G__8718 = cljs.core.next(seq__8687_8708__$1);
var G__8719 = null;
var G__8720 = (0);
var G__8721 = (0);
seq__8687_8695 = G__8718;
chunk__8688_8696 = G__8719;
count__8689_8697 = G__8720;
i__8690_8698 = G__8721;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(options);
});
/**
 * Form configuration for user entity
 */
common_client.user.entity.form_conf_fn = (function common_client$user$entity$form_conf_fn(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$_id,cljs.core.cst$kw$type,common_client.user.entity.entity_type,cljs.core.cst$kw$entity_DASH_name,language_lib.core.get_label((21)),cljs.core.cst$kw$fields,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$username,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,language_lib.core.get_label((19)),cljs.core.cst$kw$input_DASH_el,"text"], null),cljs.core.cst$kw$password,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,language_lib.core.get_label((15)),cljs.core.cst$kw$input_DASH_el,"password"], null),cljs.core.cst$kw$email,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,language_lib.core.get_label((14)),cljs.core.cst$kw$input_DASH_el,"email"], null),cljs.core.cst$kw$roles,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,language_lib.core.get_label((30)),cljs.core.cst$kw$input_DASH_el,"checkbox",cljs.core.cst$kw$options,common_client.user.entity.get_roles], null)], null),cljs.core.cst$kw$fields_DASH_order,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$username,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$roles], null)], null);
});
/**
 * Table columns for user entity
 */
common_client.user.entity.columns_fn = (function common_client$user$entity$columns_fn(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$projection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$username,cljs.core.cst$kw$email], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$username,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content,language_lib.core.get_label((19)),cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100px"], null)], null),cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$text_DASH_align,"left"], null)], null)], null),cljs.core.cst$kw$password,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content,language_lib.core.get_label((15)),cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100px"], null)], null),cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$text_DASH_align,"left"], null)], null)], null),cljs.core.cst$kw$email,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content,language_lib.core.get_label((14)),cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100px"], null)], null),cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$text_DASH_align,"left"], null)], null)], null)], null)], null);
});
/**
 * Table query for user entity
 */
common_client.user.entity.query_fn = (function common_client$user$entity$query_fn(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$entity_DASH_type,cljs.core.cst$kw$entity_DASH_filter,cljs.core.cst$kw$qsort,cljs.core.cst$kw$collation,cljs.core.cst$kw$rows,cljs.core.cst$kw$pagination,cljs.core.cst$kw$projection_DASH_include,cljs.core.cst$kw$current_DASH_page,cljs.core.cst$kw$projection],[common_client.user.entity.entity_type,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$username,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"sr"], null),(25),true,true,(0),cljs.core.cst$kw$projection.cljs$core$IFn$_invoke$arity$1(common_client.user.entity.columns_fn())]);
});
/**
 * Table configuration for user entity
 */
common_client.user.entity.table_conf_fn = (function common_client$user$entity$table_conf_fn(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$allowed_DASH_actions,cljs.core.cst$kw$search_DASH_fields,cljs.core.cst$kw$search_DASH_on,cljs.core.cst$kw$form_DASH_conf,cljs.core.cst$kw$columns,cljs.core.cst$kw$table_DASH_class,cljs.core.cst$kw$actions,cljs.core.cst$kw$query,cljs.core.cst$kw$render_DASH_in,cljs.core.cst$kw$table_DASH_fn],[cljs.core.deref(common_client.allowed_actions.controller.allowed_actions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$username,cljs.core.cst$kw$email], null),true,common_client.user.entity.form_conf_fn(),common_client.user.entity.columns_fn(),"entities",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$details,cljs.core.cst$kw$edit,cljs.core.cst$kw$delete], null),common_client.user.entity.query_fn(),".content",framework_lib.core.gen_table]);
});
