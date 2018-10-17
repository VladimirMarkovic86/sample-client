// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.role.entity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('framework_lib.core');
goog.require('language_lib.core');
goog.require('common_client.allowed_actions.controller');
common_client.role.entity.entity_type = "role";
common_client.role.entity.functionalities = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Form configuration for role entity
 */
common_client.role.entity.form_conf_fn = (function common_client$role$entity$form_conf_fn(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$_id,cljs.core.cst$kw$type,common_client.role.entity.entity_type,cljs.core.cst$kw$entity_DASH_name,language_lib.core.get_label((22)),cljs.core.cst$kw$fields,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role_DASH_name,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,language_lib.core.get_label((28)),cljs.core.cst$kw$input_DASH_el,"text",cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,"required"], null)], null),cljs.core.cst$kw$functionalities,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,language_lib.core.get_label((29)),cljs.core.cst$kw$input_DASH_el,"checkbox",cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,"required"], null),cljs.core.cst$kw$options,cljs.core.deref(common_client.role.entity.functionalities)], null)], null),cljs.core.cst$kw$fields_DASH_order,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$role_DASH_name,cljs.core.cst$kw$functionalities], null)], null);
});
/**
 * Table columns for role entity
 */
common_client.role.entity.columns_fn = (function common_client$role$entity$columns_fn(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$projection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$role_DASH_name], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role_DASH_name,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content,language_lib.core.get_label((28)),cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"200px"], null)], null),cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$text_DASH_align,"left"], null)], null)], null),cljs.core.cst$kw$functionalities,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content,language_lib.core.get_label((29)),cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100px"], null)], null),cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$text_DASH_align,"left"], null)], null)], null)], null)], null);
});
/**
 * Table query for role entity
 */
common_client.role.entity.query_fn = (function common_client$role$entity$query_fn(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$entity_DASH_type,cljs.core.cst$kw$entity_DASH_filter,cljs.core.cst$kw$qsort,cljs.core.cst$kw$collation,cljs.core.cst$kw$rows,cljs.core.cst$kw$pagination,cljs.core.cst$kw$projection_DASH_include,cljs.core.cst$kw$current_DASH_page,cljs.core.cst$kw$projection],[common_client.role.entity.entity_type,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role_DASH_name,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$locale,"sr"], null),(25),true,true,(0),cljs.core.cst$kw$projection.cljs$core$IFn$_invoke$arity$1(common_client.role.entity.columns_fn())]);
});
/**
 * Table configuration for role entity
 */
common_client.role.entity.table_conf_fn = (function common_client$role$entity$table_conf_fn(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$allowed_DASH_actions,cljs.core.cst$kw$search_DASH_fields,cljs.core.cst$kw$search_DASH_on,cljs.core.cst$kw$form_DASH_conf,cljs.core.cst$kw$columns,cljs.core.cst$kw$table_DASH_class,cljs.core.cst$kw$actions,cljs.core.cst$kw$query,cljs.core.cst$kw$render_DASH_in,cljs.core.cst$kw$table_DASH_fn],[cljs.core.deref(common_client.allowed_actions.controller.allowed_actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$role_DASH_name], null),true,common_client.role.entity.form_conf_fn(),common_client.role.entity.columns_fn(),"entities",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$details,cljs.core.cst$kw$edit,cljs.core.cst$kw$delete], null),common_client.role.entity.query_fn(),".content",framework_lib.core.gen_table]);
});
