// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('framework_lib.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.core');
goog.require('js_lib.core');
goog.require('utils_lib.core');
goog.require('htmlcss_lib.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('language_lib.core');
goog.require('common_middle.request_urls');
/**
 * Render uploaded image
 */
framework_lib.core.render_img = (function framework_lib$core$render_img(p__8011){
var map__8012 = p__8011;
var map__8012__$1 = ((((!((map__8012 == null)))?(((((map__8012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8012):map__8012);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8012__$1,cljs.core.cst$kw$file_DASH_id);
var img_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8012__$1,cljs.core.cst$kw$img_DASH_id);
var hidden_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8012__$1,cljs.core.cst$kw$hidden_DASH_id);
var file_field = js_lib.core.query_selector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)].join(''));
var file_field_parent = js_lib.core.get_parent(file_field);
var file = ((file_field["files"])[(0)]);
var img = js_lib.core.query_selector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img_id)].join(''));
var hidden_input = js_lib.core.query_selector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hidden_id)].join(''));
var fileReader = (new FileReader());
var onload = (fileReader["onload"] = (function (){var fexpr__8014 = ((function (file_field,file_field_parent,file,img,hidden_input,fileReader,map__8012,map__8012__$1,file_id,img_id,hidden_id){
return (function (aimg,ahidden_input){
return ((function (file_field,file_field_parent,file,img,hidden_input,fileReader,map__8012,map__8012__$1,file_id,img_id,hidden_id){
return (function (e){
(aimg["src"] = ((e["target"])["result"]));

return (ahidden_input["value"] = ((e["target"])["result"]));
});
;})(file_field,file_field_parent,file,img,hidden_input,fileReader,map__8012,map__8012__$1,file_id,img_id,hidden_id))
});})(file_field,file_field_parent,file,img,hidden_input,fileReader,map__8012,map__8012__$1,file_id,img_id,hidden_id))
;
return fexpr__8014(img,hidden_input);
})());
var dataURL = fileReader.readAsDataURL(file);
return null;
});
/**
 * Render img html field and hidden input field
 */
framework_lib.core.image_field = (function framework_lib$core$image_field(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8022 = arguments.length;
var i__4532__auto___8023 = (0);
while(true){
if((i__4532__auto___8023 < len__4531__auto___8022)){
args__4534__auto__.push((arguments[i__4532__auto___8023]));

var G__8024 = (i__4532__auto___8023 + (1));
i__4532__auto___8023 = G__8024;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return framework_lib.core.image_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

framework_lib.core.image_field.cljs$core$IFn$_invoke$arity$variadic = (function (content,attrs,p__8018){
var vec__8019 = p__8018;
var evts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8019,(0),null);
var dyn_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8019,(1),null);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(attrs);
var data = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(attrs);
var hidden_id = ["hidden",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var file_id = ["file",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var f_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,file_id,cljs.core.cst$kw$name,file_id,cljs.core.cst$kw$type,"file"], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$name,id,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,"100px",cljs.core.cst$kw$max_DASH_height,"100px"], null),cljs.core.cst$kw$src,data], null)], 0)),htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,hidden_id,cljs.core.cst$kw$type,"hidden",cljs.core.cst$kw$value,data], null)], 0))], null)], 0)),htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",f_attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onchange,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.render_img,cljs.core.cst$kw$evt_DASH_p,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file_DASH_id,file_id,cljs.core.cst$kw$img_DASH_id,id,cljs.core.cst$kw$hidden_DASH_id,hidden_id], null)], null)], null)], 0))], 0))], null);
});

framework_lib.core.image_field.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
framework_lib.core.image_field.cljs$lang$applyTo = (function (seq8015){
var G__8016 = cljs.core.first(seq8015);
var seq8015__$1 = cljs.core.next(seq8015);
var G__8017 = cljs.core.first(seq8015__$1);
var seq8015__$2 = cljs.core.next(seq8015__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8016,G__8017,seq8015__$2);
});

/**
 * Render select field
 */
framework_lib.core.select_field = (function framework_lib$core$select_field(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8043 = arguments.length;
var i__4532__auto___8044 = (0);
while(true){
if((i__4532__auto___8044 < len__4531__auto___8043)){
args__4534__auto__.push((arguments[i__4532__auto___8044]));

var G__8045 = (i__4532__auto___8044 + (1));
i__4532__auto___8044 = G__8045;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return framework_lib.core.select_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

framework_lib.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (content,attrs,evts,p__8029){
var vec__8030 = p__8029;
var dyn_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8030,(0),null);
return htmlcss_lib.core.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__8033_8046 = cljs.core.seq(content);
var chunk__8034_8047 = null;
var count__8035_8048 = (0);
var i__8036_8049 = (0);
while(true){
if((i__8036_8049 < count__8035_8048)){
var vec__8037_8050 = chunk__8034_8047.cljs$core$IIndexed$_nth$arity$2(null,i__8036_8049);
var opt_val_8051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8037_8050,(0),null);
var opt_lbl_8052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8037_8050,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(options,cljs.core.conj,htmlcss_lib.core.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt_lbl_8052,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,opt_val_8051], null)], 0)));


var G__8053 = seq__8033_8046;
var G__8054 = chunk__8034_8047;
var G__8055 = count__8035_8048;
var G__8056 = (i__8036_8049 + (1));
seq__8033_8046 = G__8053;
chunk__8034_8047 = G__8054;
count__8035_8048 = G__8055;
i__8036_8049 = G__8056;
continue;
} else {
var temp__5457__auto___8057 = cljs.core.seq(seq__8033_8046);
if(temp__5457__auto___8057){
var seq__8033_8058__$1 = temp__5457__auto___8057;
if(cljs.core.chunked_seq_QMARK_(seq__8033_8058__$1)){
var c__4351__auto___8059 = cljs.core.chunk_first(seq__8033_8058__$1);
var G__8060 = cljs.core.chunk_rest(seq__8033_8058__$1);
var G__8061 = c__4351__auto___8059;
var G__8062 = cljs.core.count(c__4351__auto___8059);
var G__8063 = (0);
seq__8033_8046 = G__8060;
chunk__8034_8047 = G__8061;
count__8035_8048 = G__8062;
i__8036_8049 = G__8063;
continue;
} else {
var vec__8040_8064 = cljs.core.first(seq__8033_8058__$1);
var opt_val_8065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8040_8064,(0),null);
var opt_lbl_8066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8040_8064,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(options,cljs.core.conj,htmlcss_lib.core.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt_lbl_8066,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,opt_val_8065], null)], 0)));


var G__8067 = cljs.core.next(seq__8033_8058__$1);
var G__8068 = null;
var G__8069 = (0);
var G__8070 = (0);
seq__8033_8046 = G__8067;
chunk__8034_8047 = G__8068;
count__8035_8048 = G__8069;
i__8036_8049 = G__8070;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(options);
})(),attrs], 0));
});

framework_lib.core.select_field.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
framework_lib.core.select_field.cljs$lang$applyTo = (function (seq8025){
var G__8026 = cljs.core.first(seq8025);
var seq8025__$1 = cljs.core.next(seq8025);
var G__8027 = cljs.core.first(seq8025__$1);
var seq8025__$2 = cljs.core.next(seq8025__$1);
var G__8028 = cljs.core.first(seq8025__$2);
var seq8025__$3 = cljs.core.next(seq8025__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8026,G__8027,G__8028,seq8025__$3);
});

/**
 * Render select field
 */
framework_lib.core.textarea_field = (function framework_lib$core$textarea_field(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8079 = arguments.length;
var i__4532__auto___8080 = (0);
while(true){
if((i__4532__auto___8080 < len__4531__auto___8079)){
args__4534__auto__.push((arguments[i__4532__auto___8080]));

var G__8081 = (i__4532__auto___8080 + (1));
i__4532__auto___8080 = G__8081;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return framework_lib.core.textarea_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

framework_lib.core.textarea_field.cljs$core$IFn$_invoke$arity$variadic = (function (content,attrs,evts,p__8075){
var vec__8076 = p__8075;
var dyn_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8076,(0),null);
if(((cljs.core.seqable_QMARK_(content)) && (cljs.core.empty_QMARK_(content)))){
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(dyn_attrs);
return htmlcss_lib.core.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value,attrs], 0));
} else {
return htmlcss_lib.core.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content,attrs], 0));
}
});

framework_lib.core.textarea_field.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
framework_lib.core.textarea_field.cljs$lang$applyTo = (function (seq8071){
var G__8072 = cljs.core.first(seq8071);
var seq8071__$1 = cljs.core.next(seq8071);
var G__8073 = cljs.core.first(seq8071__$1);
var seq8071__$2 = cljs.core.next(seq8071__$1);
var G__8074 = cljs.core.first(seq8071__$2);
var seq8071__$3 = cljs.core.next(seq8071__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8072,G__8073,G__8074,seq8071__$3);
});

framework_lib.core.input_types = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["email",null,"checkbox",null,"radio",null,"text",null,"number",null,"password",null,"date",null], null), null),cljs.core.cst$kw$input_DASH_el,htmlcss_lib.core.input], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["textarea",null], null), null),cljs.core.cst$kw$input_DASH_el,framework_lib.core.textarea_field], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["select",null], null), null),cljs.core.cst$kw$input_DASH_el,framework_lib.core.select_field], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["img",null], null), null),cljs.core.cst$kw$input_DASH_el,framework_lib.core.image_field], null)], null);
/**
 * Find fn that generates right input field type
 */
framework_lib.core.find_input_fn = (function framework_lib$core$find_input_fn(field_type,i){
while(true){
if((i < cljs.core.count(framework_lib.core.input_types))){
var map__8082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(framework_lib.core.input_types,i);
var map__8082__$1 = ((((!((map__8082 == null)))?(((((map__8082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8082):map__8082);
var input_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8082__$1,cljs.core.cst$kw$type);
var input_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8082__$1,cljs.core.cst$kw$input_DASH_el);
if(cljs.core.contains_QMARK_(input_types,field_type)){
return input_el;
} else {
var G__8084 = field_type;
var G__8085 = (i + (1));
field_type = G__8084;
i = G__8085;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Generate input field of particular type
 */
framework_lib.core.generate_field = (function framework_lib$core$generate_field(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8108 = arguments.length;
var i__4532__auto___8109 = (0);
while(true){
if((i__4532__auto___8109 < len__4531__auto___8108)){
args__4534__auto__.push((arguments[i__4532__auto___8109]));

var G__8110 = (i__4532__auto___8109 + (1));
i__4532__auto___8109 = G__8110;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return framework_lib.core.generate_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

framework_lib.core.generate_field.cljs$core$IFn$_invoke$arity$variadic = (function (id,value,field_type,p__8090){
var vec__8091 = p__8090;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8091,(0),null);
var evts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8091,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8091,(2),null);
var input_fn = framework_lib.core.find_input_fn(field_type,(0));
var attrs__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,id,cljs.core.cst$kw$type,field_type], null),attrs);
var temp__5455__auto__ = options;
if(cljs.core.truth_(temp__5455__auto__)){
var options__$1 = temp__5455__auto__;
var html_options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var options_a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.fn_QMARK_(options__$1)){
cljs.core.reset_BANG_(options_a,(options__$1.cljs$core$IFn$_invoke$arity$0 ? options__$1.cljs$core$IFn$_invoke$arity$0() : options__$1.call(null)));
} else {
}

var seq__8094_8111 = cljs.core.seq(cljs.core.deref(options_a));
var chunk__8095_8112 = null;
var count__8096_8113 = (0);
var i__8097_8114 = (0);
while(true){
if((i__8097_8114 < count__8096_8113)){
var option_8115 = chunk__8095_8112.cljs$core$IIndexed$_nth$arity$2(null,i__8097_8114);
var vec__8098_8116 = ((cljs.core.vector_QMARK_(option_8115))?option_8115:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option_8115,option_8115], null));
var op_label_8117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8098_8116,(0),null);
var op_value_8118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8098_8116,(1),null);
var attrs_8119__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs__$1,cljs.core.cst$kw$value,op_value_8118,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_value_8118)].join('')], 0));
var attrs_8120__$3 = (cljs.core.truth_((function (){var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,op_value_8118);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([op_value_8118]),value);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs_8119__$2,cljs.core.cst$kw$checked,"checked"):attrs_8119__$2);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(html_options,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(input_fn.cljs$core$IFn$_invoke$arity$3 ? input_fn.cljs$core$IFn$_invoke$arity$3("",attrs_8120__$3,evts) : input_fn.call(null,"",attrs_8120__$3,evts)),htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op_label_8117], 0))], null)], 0)));


var G__8121 = seq__8094_8111;
var G__8122 = chunk__8095_8112;
var G__8123 = count__8096_8113;
var G__8124 = (i__8097_8114 + (1));
seq__8094_8111 = G__8121;
chunk__8095_8112 = G__8122;
count__8096_8113 = G__8123;
i__8097_8114 = G__8124;
continue;
} else {
var temp__5457__auto___8125 = cljs.core.seq(seq__8094_8111);
if(temp__5457__auto___8125){
var seq__8094_8126__$1 = temp__5457__auto___8125;
if(cljs.core.chunked_seq_QMARK_(seq__8094_8126__$1)){
var c__4351__auto___8127 = cljs.core.chunk_first(seq__8094_8126__$1);
var G__8128 = cljs.core.chunk_rest(seq__8094_8126__$1);
var G__8129 = c__4351__auto___8127;
var G__8130 = cljs.core.count(c__4351__auto___8127);
var G__8131 = (0);
seq__8094_8111 = G__8128;
chunk__8095_8112 = G__8129;
count__8096_8113 = G__8130;
i__8097_8114 = G__8131;
continue;
} else {
var option_8132 = cljs.core.first(seq__8094_8126__$1);
var vec__8101_8133 = ((cljs.core.vector_QMARK_(option_8132))?option_8132:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option_8132,option_8132], null));
var op_label_8134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8101_8133,(0),null);
var op_value_8135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8101_8133,(1),null);
var attrs_8136__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs__$1,cljs.core.cst$kw$value,op_value_8135,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_value_8135)].join('')], 0));
var attrs_8137__$3 = (cljs.core.truth_((function (){var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,op_value_8135);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([op_value_8135]),value);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs_8136__$2,cljs.core.cst$kw$checked,"checked"):attrs_8136__$2);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(html_options,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(input_fn.cljs$core$IFn$_invoke$arity$3 ? input_fn.cljs$core$IFn$_invoke$arity$3("",attrs_8137__$3,evts) : input_fn.call(null,"",attrs_8137__$3,evts)),htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op_label_8134], 0))], null)], 0)));


var G__8138 = cljs.core.next(seq__8094_8126__$1);
var G__8139 = null;
var G__8140 = (0);
var G__8141 = (0);
seq__8094_8111 = G__8138;
chunk__8095_8112 = G__8139;
count__8096_8113 = G__8140;
i__8097_8114 = G__8141;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(html_options);
} else {
var dyn_attrs = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field_type,"number"))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$valueAsNumber,value], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field_type,"date"))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$valueAsDate,value], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null)));
var G__8104 = "";
var G__8105 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.cst$kw$id,id);
var G__8106 = evts;
var G__8107 = dyn_attrs;
return (input_fn.cljs$core$IFn$_invoke$arity$4 ? input_fn.cljs$core$IFn$_invoke$arity$4(G__8104,G__8105,G__8106,G__8107) : input_fn.call(null,G__8104,G__8105,G__8106,G__8107));
}
});

framework_lib.core.generate_field.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
framework_lib.core.generate_field.cljs$lang$applyTo = (function (seq8086){
var G__8087 = cljs.core.first(seq8086);
var seq8086__$1 = cljs.core.next(seq8086);
var G__8088 = cljs.core.first(seq8086__$1);
var seq8086__$2 = cljs.core.next(seq8086__$1);
var G__8089 = cljs.core.first(seq8086__$2);
var seq8086__$3 = cljs.core.next(seq8086__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8087,G__8088,G__8089,seq8086__$3);
});

/**
 * Close popup
 */
framework_lib.core.close_popup = (function framework_lib$core$close_popup(){
js_lib.core.remove_element("#popup-window");

return js_lib.core.remove_element("#popup-background");
});
/**
 * Append generated popup to body
 */
framework_lib.core.popup_fn = (function framework_lib$core$popup_fn(p__8142){
var map__8143 = p__8142;
var map__8143__$1 = ((((!((map__8143 == null)))?(((((map__8143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8143):map__8143);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8143__$1,cljs.core.cst$kw$content);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8143__$1,cljs.core.cst$kw$heading);
return js_lib.core.append_element("body",htmlcss_lib.core.gen(htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$opacity,"0.2",cljs.core.cst$kw$background_DASH_color,"black"], null)], null)], 0)),htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"close-btn",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$float,"right",cljs.core.cst$kw$margin_DASH_top,"10px",cljs.core.cst$kw$border_DASH_radius,"15px",cljs.core.cst$kw$padding,"0px 4px"], null),cljs.core.cst$kw$value,"X",cljs.core.cst$kw$type,"button"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.close_popup], null)], null)], 0)),htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([heading], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"popup-heading",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null)], 0)),htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"popup-content"], null)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"popup-window",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$border,"5px solid white",cljs.core.cst$kw$border_DASH_radius,"15px",cljs.core.cst$kw$padding,"0 15px 15px 15px",cljs.core.cst$kw$z_DASH_index,"0",cljs.core.cst$kw$background_DASH_color,"white"], null)], null)], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"popup-background",cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_content,cljs.core.cst$kw$color,cljs.core.cst$kw$top,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$height],["center","black","0","100%",(1),"center","grid","absolute","100%"])], null)], 0))));
});
/**
 * Framework default error function
 */
framework_lib.core.framework_default_error = (function framework_lib$core$framework_default_error(xhr){
var response = ajax_lib.core.get_response(xhr);
var message = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(response);
var status = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response);
return framework_lib.core.popup_fn(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,status,cljs.core.cst$kw$content,message], null));
});
framework_lib.core.default_th_td_style = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$white_DASH_space,"nowrap",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$text_DASH_overflow,"ellipsis",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$padding,"0 5px"], null);
/**
 * Generate th and append style for that th and td column
 */
framework_lib.core.generate_ths = (function framework_lib$core$generate_ths(columns,actions){
var ths = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var projection = cljs.core.cst$kw$projection.cljs$core$IFn$_invoke$arity$1(columns);
var style = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(columns);
var actions__$1 = cljs.core.count(actions);
var seq__8145_8149 = cljs.core.seq(projection);
var chunk__8146_8150 = null;
var count__8147_8151 = (0);
var i__8148_8152 = (0);
while(true){
if((i__8148_8152 < count__8147_8151)){
var column_8153 = chunk__8146_8150.cljs$core$IIndexed$_nth$arity$2(null,i__8148_8152);
var column_style_8154 = (column_8153.cljs$core$IFn$_invoke$arity$1 ? column_8153.cljs$core$IFn$_invoke$arity$1(style) : column_8153.call(null,style));
var content_8155 = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(column_style_8154);
var th_column_8156 = cljs.core.cst$kw$th.cljs$core$IFn$_invoke$arity$1(column_style_8154);
var th_style_8157 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(framework_lib.core.default_th_td_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(th_column_8156));
var th_attrs_8158 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(th_column_8156,cljs.core.cst$kw$style);
var th_attrs_8159__$1 = ((!(cljs.core.contains_QMARK_(th_attrs_8158,cljs.core.cst$kw$title)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(th_attrs_8158,cljs.core.cst$kw$title,content_8155):th_attrs_8158);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ths,cljs.core.conj,htmlcss_lib.core.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_8155,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,th_style_8157], null)], 0)),th_attrs_8159__$1], 0)));


var G__8160 = seq__8145_8149;
var G__8161 = chunk__8146_8150;
var G__8162 = count__8147_8151;
var G__8163 = (i__8148_8152 + (1));
seq__8145_8149 = G__8160;
chunk__8146_8150 = G__8161;
count__8147_8151 = G__8162;
i__8148_8152 = G__8163;
continue;
} else {
var temp__5457__auto___8164 = cljs.core.seq(seq__8145_8149);
if(temp__5457__auto___8164){
var seq__8145_8165__$1 = temp__5457__auto___8164;
if(cljs.core.chunked_seq_QMARK_(seq__8145_8165__$1)){
var c__4351__auto___8166 = cljs.core.chunk_first(seq__8145_8165__$1);
var G__8167 = cljs.core.chunk_rest(seq__8145_8165__$1);
var G__8168 = c__4351__auto___8166;
var G__8169 = cljs.core.count(c__4351__auto___8166);
var G__8170 = (0);
seq__8145_8149 = G__8167;
chunk__8146_8150 = G__8168;
count__8147_8151 = G__8169;
i__8148_8152 = G__8170;
continue;
} else {
var column_8171 = cljs.core.first(seq__8145_8165__$1);
var column_style_8172 = (column_8171.cljs$core$IFn$_invoke$arity$1 ? column_8171.cljs$core$IFn$_invoke$arity$1(style) : column_8171.call(null,style));
var content_8173 = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(column_style_8172);
var th_column_8174 = cljs.core.cst$kw$th.cljs$core$IFn$_invoke$arity$1(column_style_8172);
var th_style_8175 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(framework_lib.core.default_th_td_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(th_column_8174));
var th_attrs_8176 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(th_column_8174,cljs.core.cst$kw$style);
var th_attrs_8177__$1 = ((!(cljs.core.contains_QMARK_(th_attrs_8176,cljs.core.cst$kw$title)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(th_attrs_8176,cljs.core.cst$kw$title,content_8173):th_attrs_8176);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ths,cljs.core.conj,htmlcss_lib.core.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_8173,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,th_style_8175], null)], 0)),th_attrs_8177__$1], 0)));


var G__8178 = cljs.core.next(seq__8145_8165__$1);
var G__8179 = null;
var G__8180 = (0);
var G__8181 = (0);
seq__8145_8149 = G__8178;
chunk__8146_8150 = G__8179;
count__8147_8151 = G__8180;
i__8148_8152 = G__8181;
continue;
}
} else {
}
}
break;
}

if(((0) < actions__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ths,cljs.core.conj,htmlcss_lib.core.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((9))], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colspan,actions__$1,cljs.core.cst$kw$title,language_lib.core.get_label((9))], null)], 0)));
} else {
}

return cljs.core.deref(ths);
});
/**
 * Handle click event on pagination link
 */
framework_lib.core.handle_paging = (function framework_lib$core$handle_paging(p__8182){
var map__8183 = p__8182;
var map__8183__$1 = ((((!((map__8183 == null)))?(((((map__8183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8183):map__8183);
var conf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8183__$1,cljs.core.cst$kw$conf);
var map__8184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8183__$1,cljs.core.cst$kw$conf);
var map__8184__$1 = ((((!((map__8184 == null)))?(((((map__8184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8184):map__8184);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8184__$1,cljs.core.cst$kw$query);
var table_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8184__$1,cljs.core.cst$kw$table_DASH_fn);
var pagination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8183__$1,cljs.core.cst$kw$pagination);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8183__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,"first")){
var G__8187_8192 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,(0));
(table_fn.cljs$core$IFn$_invoke$arity$1 ? table_fn.cljs$core$IFn$_invoke$arity$1(G__8187_8192) : table_fn.call(null,G__8187_8192));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,"previous")){
var G__8188_8193 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,(cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(query) - (1)));
(table_fn.cljs$core$IFn$_invoke$arity$1 ? table_fn.cljs$core$IFn$_invoke$arity$1(G__8188_8193) : table_fn.call(null,G__8188_8193));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,"next")){
var G__8189_8194 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,(cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(query) + (1)));
(table_fn.cljs$core$IFn$_invoke$arity$1 ? table_fn.cljs$core$IFn$_invoke$arity$1(G__8189_8194) : table_fn.call(null,G__8189_8194));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,"last")){
var G__8190_8195 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,(utils_lib.core.round_up(cljs.core.cst$kw$total_DASH_row_DASH_count.cljs$core$IFn$_invoke$arity$1(pagination),cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(pagination)) - (1)));
(table_fn.cljs$core$IFn$_invoke$arity$1 ? table_fn.cljs$core$IFn$_invoke$arity$1(G__8190_8195) : table_fn.call(null,G__8190_8195));
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,"first")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,"previous")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,"next")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page,"last")))){
var G__8191 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,(parseInt(page) - (1)));
return (table_fn.cljs$core$IFn$_invoke$arity$1 ? table_fn.cljs$core$IFn$_invoke$arity$1(G__8191) : table_fn.call(null,G__8191));
} else {
return null;
}
});
/**
 * Generate pagination row in thead
 */
framework_lib.core.generate_pagination = (function framework_lib$core$generate_pagination(current_page,number_of_pages,show_link,assoc_page){
var page_vector = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_vector,((function (page_vector){
return (function (atom_val,seq){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,atom_val,seq);
});})(page_vector))
,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_link,(2))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_link,(3)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["first",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"first"], null),(assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1("first") : assoc_page.call(null,"first"))], 0))], 0)),htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["previous",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"previous"], null),(assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1("previous") : assoc_page.call(null,"previous"))], 0))], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.div(),htmlcss_lib.core.div()], null)));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,(number_of_pages - (1)))) && (((-1) < ((current_page - (1)) - (1)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_vector,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(current_page - (1)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,(current_page - (1))], null),(function (){var G__8196 = (current_page - (1));
return (assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1(G__8196) : assoc_page.call(null,G__8196));
})()], 0))], 0)));
} else {
}

if(((-1) < (current_page - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_vector,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,current_page], null),(assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1(current_page) : assoc_page.call(null,current_page))], 0))], 0)));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_vector,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(current_page + (1)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"current-page"], null)], 0)));

if(((current_page + (1)) < number_of_pages)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_vector,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((current_page + (1)) + (1)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,((current_page + (1)) + (1))], null),(function (){var G__8197 = ((current_page + (1)) + (1));
return (assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1(G__8197) : assoc_page.call(null,G__8197));
})()], 0))], 0)));
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,(0))) && ((((current_page + (1)) + (1)) < number_of_pages)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_vector,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((current_page + (1)) + (1)) + (1)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,(((current_page + (1)) + (1)) + (1))], null),(function (){var G__8198 = (((current_page + (1)) + (1)) + (1));
return (assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1(G__8198) : assoc_page.call(null,G__8198));
})()], 0))], 0)));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_vector,((function (page_vector){
return (function (atom_val,seq){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,atom_val,seq);
});})(page_vector))
,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_link,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_link,(3)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["next",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"next"], null),(assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1("next") : assoc_page.call(null,"next"))], 0))], 0)),htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["last",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"last"], null),(assoc_page.cljs$core$IFn$_invoke$arity$1 ? assoc_page.cljs$core$IFn$_invoke$arity$1("last") : assoc_page.call(null,"last"))], 0))], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.div(),htmlcss_lib.core.div()], null)));

return cljs.core.deref(page_vector);
});
/**
 * Generate thead for table
 */
framework_lib.core.generate_thead = (function framework_lib$core$generate_thead(table_class,columns,actions,pagination,conf){
return htmlcss_lib.core.thead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([framework_lib.core.generate_ths(columns,actions)], 0)),(function (){var temp__5457__auto__ = pagination;
if(cljs.core.truth_(temp__5457__auto__)){
var pagination__$1 = temp__5457__auto__;
return htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var current_page = cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(pagination__$1);
var rows = cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(pagination__$1);
var total_row_count = cljs.core.cst$kw$total_DASH_row_DASH_count.cljs$core$IFn$_invoke$arity$1(pagination__$1);
var first_page_index = (0);
var second_page_index = (1);
var number_of_pages = utils_lib.core.round_up(total_row_count,rows);
var last_page_index = (number_of_pages - (1));
var one_before_last = (last_page_index - (1));
var assoc_page = ((function (current_page,rows,total_row_count,first_page_index,second_page_index,number_of_pages,last_page_index,one_before_last,pagination__$1,temp__5457__auto__){
return (function (page){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.handle_paging,cljs.core.cst$kw$evt_DASH_p,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$conf,conf,cljs.core.cst$kw$pagination,pagination__$1,cljs.core.cst$kw$page,page], null)], null)], null);
});})(current_page,rows,total_row_count,first_page_index,second_page_index,number_of_pages,last_page_index,one_before_last,pagination__$1,temp__5457__auto__))
;
var condition_i = (number_of_pages < (4));
var condition_ii = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,first_page_index);
var condition_iii = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,last_page_index);
var pagination_row = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(condition_i){
cljs.core.reset_BANG_(pagination_row,framework_lib.core.generate_pagination(current_page,number_of_pages,(0),assoc_page));
} else {
}

if(((!(condition_i)) && (condition_ii))){
cljs.core.reset_BANG_(pagination_row,framework_lib.core.generate_pagination(current_page,number_of_pages,(1),assoc_page));
} else {
}

if(((!(condition_i)) && (!(condition_ii)) && (condition_iii))){
cljs.core.reset_BANG_(pagination_row,framework_lib.core.generate_pagination(current_page,number_of_pages,(2),assoc_page));
} else {
}

if(((!(condition_i)) && (!(condition_ii)) && (!(condition_iii)))){
cljs.core.reset_BANG_(pagination_row,framework_lib.core.generate_pagination(current_page,number_of_pages,(3),assoc_page));
} else {
}

return cljs.core.deref(pagination_row);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"pagination"], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colspan,(cljs.core.count(actions) + cljs.core.count(cljs.core.cst$kw$projection.cljs$core$IFn$_invoke$arity$1(columns)))], null)], 0))], 0));
} else {
return null;
}
})()], null)], 0));
});
/**
 * Generate tbody for table
 */
framework_lib.core.generate_tbody = (function framework_lib$core$generate_tbody(entities,columns,actions){
return htmlcss_lib.core.tbody.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var trs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var projection = cljs.core.cst$kw$projection.cljs$core$IFn$_invoke$arity$1(columns);
var style = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(columns);
var seq__8199_8227 = cljs.core.seq(entities);
var chunk__8200_8228 = null;
var count__8201_8229 = (0);
var i__8202_8230 = (0);
while(true){
if((i__8202_8230 < count__8201_8229)){
var entity_8231 = chunk__8200_8228.cljs$core$IIndexed$_nth$arity$2(null,i__8202_8230);
var row_id_8232 = cljs.core.cst$kw$_id.cljs$core$IFn$_invoke$arity$1(entity_8231);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var tds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__8203_8233 = cljs.core.seq(projection);
var chunk__8204_8234 = null;
var count__8205_8235 = (0);
var i__8206_8236 = (0);
while(true){
if((i__8206_8236 < count__8205_8235)){
var column_8237 = chunk__8204_8234.cljs$core$IIndexed$_nth$arity$2(null,i__8206_8236);
var column_style_8238 = (column_8237.cljs$core$IFn$_invoke$arity$1 ? column_8237.cljs$core$IFn$_invoke$arity$1(style) : column_8237.call(null,style));
var content_8239 = (column_8237.cljs$core$IFn$_invoke$arity$1 ? column_8237.cljs$core$IFn$_invoke$arity$1(entity_8231) : column_8237.call(null,entity_8231));
var content_8240__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(content_8239),Date))?content_8239.toLocaleString():content_8239);
var td_column_8241 = cljs.core.cst$kw$td.cljs$core$IFn$_invoke$arity$1(column_style_8238);
var td_style_8242 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(framework_lib.core.default_th_td_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(td_column_8241));
var td_attrs_8243 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(td_column_8241,cljs.core.cst$kw$style);
var td_attrs_8244__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(td_attrs_8243,cljs.core.cst$kw$title,content_8240__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_8240__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,td_style_8242], null)], 0)),td_attrs_8244__$1], 0)));


var G__8245 = seq__8203_8233;
var G__8246 = chunk__8204_8234;
var G__8247 = count__8205_8235;
var G__8248 = (i__8206_8236 + (1));
seq__8203_8233 = G__8245;
chunk__8204_8234 = G__8246;
count__8205_8235 = G__8247;
i__8206_8236 = G__8248;
continue;
} else {
var temp__5457__auto___8249 = cljs.core.seq(seq__8203_8233);
if(temp__5457__auto___8249){
var seq__8203_8250__$1 = temp__5457__auto___8249;
if(cljs.core.chunked_seq_QMARK_(seq__8203_8250__$1)){
var c__4351__auto___8251 = cljs.core.chunk_first(seq__8203_8250__$1);
var G__8252 = cljs.core.chunk_rest(seq__8203_8250__$1);
var G__8253 = c__4351__auto___8251;
var G__8254 = cljs.core.count(c__4351__auto___8251);
var G__8255 = (0);
seq__8203_8233 = G__8252;
chunk__8204_8234 = G__8253;
count__8205_8235 = G__8254;
i__8206_8236 = G__8255;
continue;
} else {
var column_8256 = cljs.core.first(seq__8203_8250__$1);
var column_style_8257 = (column_8256.cljs$core$IFn$_invoke$arity$1 ? column_8256.cljs$core$IFn$_invoke$arity$1(style) : column_8256.call(null,style));
var content_8258 = (column_8256.cljs$core$IFn$_invoke$arity$1 ? column_8256.cljs$core$IFn$_invoke$arity$1(entity_8231) : column_8256.call(null,entity_8231));
var content_8259__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(content_8258),Date))?content_8258.toLocaleString():content_8258);
var td_column_8260 = cljs.core.cst$kw$td.cljs$core$IFn$_invoke$arity$1(column_style_8257);
var td_style_8261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(framework_lib.core.default_th_td_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(td_column_8260));
var td_attrs_8262 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(td_column_8260,cljs.core.cst$kw$style);
var td_attrs_8263__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(td_attrs_8262,cljs.core.cst$kw$title,content_8259__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_8259__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,td_style_8261], null)], 0)),td_attrs_8263__$1], 0)));


var G__8264 = cljs.core.next(seq__8203_8250__$1);
var G__8265 = null;
var G__8266 = (0);
var G__8267 = (0);
seq__8203_8233 = G__8264;
chunk__8204_8234 = G__8265;
count__8205_8235 = G__8266;
i__8206_8236 = G__8267;
continue;
}
} else {
}
}
break;
}

var seq__8207_8268 = cljs.core.seq(actions);
var chunk__8208_8269 = null;
var count__8209_8270 = (0);
var i__8210_8271 = (0);
while(true){
if((i__8210_8271 < count__8209_8270)){
var map__8211_8272 = chunk__8208_8269.cljs$core$IIndexed$_nth$arity$2(null,i__8210_8271);
var map__8211_8273__$1 = ((((!((map__8211_8272 == null)))?(((((map__8211_8272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8211_8272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8211_8272):map__8211_8272);
var label_8274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8211_8273__$1,cljs.core.cst$kw$label);
var evt_fn_8275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8211_8273__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_8276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8211_8273__$1,cljs.core.cst$kw$evt_DASH_p);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,label_8274,cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,label_8274], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,evt_fn_8275,cljs.core.cst$kw$evt_DASH_p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(evt_p_8276,cljs.core.cst$kw$ent_DASH_id,row_id_8232)], null)], null)], 0))], 0))], 0)));


var G__8277 = seq__8207_8268;
var G__8278 = chunk__8208_8269;
var G__8279 = count__8209_8270;
var G__8280 = (i__8210_8271 + (1));
seq__8207_8268 = G__8277;
chunk__8208_8269 = G__8278;
count__8209_8270 = G__8279;
i__8210_8271 = G__8280;
continue;
} else {
var temp__5457__auto___8281 = cljs.core.seq(seq__8207_8268);
if(temp__5457__auto___8281){
var seq__8207_8282__$1 = temp__5457__auto___8281;
if(cljs.core.chunked_seq_QMARK_(seq__8207_8282__$1)){
var c__4351__auto___8283 = cljs.core.chunk_first(seq__8207_8282__$1);
var G__8284 = cljs.core.chunk_rest(seq__8207_8282__$1);
var G__8285 = c__4351__auto___8283;
var G__8286 = cljs.core.count(c__4351__auto___8283);
var G__8287 = (0);
seq__8207_8268 = G__8284;
chunk__8208_8269 = G__8285;
count__8209_8270 = G__8286;
i__8210_8271 = G__8287;
continue;
} else {
var map__8213_8288 = cljs.core.first(seq__8207_8282__$1);
var map__8213_8289__$1 = ((((!((map__8213_8288 == null)))?(((((map__8213_8288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8213_8288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8213_8288):map__8213_8288);
var label_8290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8213_8289__$1,cljs.core.cst$kw$label);
var evt_fn_8291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8213_8289__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_8292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8213_8289__$1,cljs.core.cst$kw$evt_DASH_p);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,label_8290,cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,label_8290], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,evt_fn_8291,cljs.core.cst$kw$evt_DASH_p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(evt_p_8292,cljs.core.cst$kw$ent_DASH_id,row_id_8232)], null)], null)], 0))], 0))], 0)));


var G__8293 = cljs.core.next(seq__8207_8282__$1);
var G__8294 = null;
var G__8295 = (0);
var G__8296 = (0);
seq__8207_8268 = G__8293;
chunk__8208_8269 = G__8294;
count__8209_8270 = G__8295;
i__8210_8271 = G__8296;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(tds);
})()], 0)));


var G__8297 = seq__8199_8227;
var G__8298 = chunk__8200_8228;
var G__8299 = count__8201_8229;
var G__8300 = (i__8202_8230 + (1));
seq__8199_8227 = G__8297;
chunk__8200_8228 = G__8298;
count__8201_8229 = G__8299;
i__8202_8230 = G__8300;
continue;
} else {
var temp__5457__auto___8301 = cljs.core.seq(seq__8199_8227);
if(temp__5457__auto___8301){
var seq__8199_8302__$1 = temp__5457__auto___8301;
if(cljs.core.chunked_seq_QMARK_(seq__8199_8302__$1)){
var c__4351__auto___8303 = cljs.core.chunk_first(seq__8199_8302__$1);
var G__8304 = cljs.core.chunk_rest(seq__8199_8302__$1);
var G__8305 = c__4351__auto___8303;
var G__8306 = cljs.core.count(c__4351__auto___8303);
var G__8307 = (0);
seq__8199_8227 = G__8304;
chunk__8200_8228 = G__8305;
count__8201_8229 = G__8306;
i__8202_8230 = G__8307;
continue;
} else {
var entity_8308 = cljs.core.first(seq__8199_8302__$1);
var row_id_8309 = cljs.core.cst$kw$_id.cljs$core$IFn$_invoke$arity$1(entity_8308);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var tds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__8215_8310 = cljs.core.seq(projection);
var chunk__8216_8311 = null;
var count__8217_8312 = (0);
var i__8218_8313 = (0);
while(true){
if((i__8218_8313 < count__8217_8312)){
var column_8314 = chunk__8216_8311.cljs$core$IIndexed$_nth$arity$2(null,i__8218_8313);
var column_style_8315 = (column_8314.cljs$core$IFn$_invoke$arity$1 ? column_8314.cljs$core$IFn$_invoke$arity$1(style) : column_8314.call(null,style));
var content_8316 = (column_8314.cljs$core$IFn$_invoke$arity$1 ? column_8314.cljs$core$IFn$_invoke$arity$1(entity_8308) : column_8314.call(null,entity_8308));
var content_8317__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(content_8316),Date))?content_8316.toLocaleString():content_8316);
var td_column_8318 = cljs.core.cst$kw$td.cljs$core$IFn$_invoke$arity$1(column_style_8315);
var td_style_8319 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(framework_lib.core.default_th_td_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(td_column_8318));
var td_attrs_8320 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(td_column_8318,cljs.core.cst$kw$style);
var td_attrs_8321__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(td_attrs_8320,cljs.core.cst$kw$title,content_8317__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_8317__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,td_style_8319], null)], 0)),td_attrs_8321__$1], 0)));


var G__8322 = seq__8215_8310;
var G__8323 = chunk__8216_8311;
var G__8324 = count__8217_8312;
var G__8325 = (i__8218_8313 + (1));
seq__8215_8310 = G__8322;
chunk__8216_8311 = G__8323;
count__8217_8312 = G__8324;
i__8218_8313 = G__8325;
continue;
} else {
var temp__5457__auto___8326__$1 = cljs.core.seq(seq__8215_8310);
if(temp__5457__auto___8326__$1){
var seq__8215_8327__$1 = temp__5457__auto___8326__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8215_8327__$1)){
var c__4351__auto___8328 = cljs.core.chunk_first(seq__8215_8327__$1);
var G__8329 = cljs.core.chunk_rest(seq__8215_8327__$1);
var G__8330 = c__4351__auto___8328;
var G__8331 = cljs.core.count(c__4351__auto___8328);
var G__8332 = (0);
seq__8215_8310 = G__8329;
chunk__8216_8311 = G__8330;
count__8217_8312 = G__8331;
i__8218_8313 = G__8332;
continue;
} else {
var column_8333 = cljs.core.first(seq__8215_8327__$1);
var column_style_8334 = (column_8333.cljs$core$IFn$_invoke$arity$1 ? column_8333.cljs$core$IFn$_invoke$arity$1(style) : column_8333.call(null,style));
var content_8335 = (column_8333.cljs$core$IFn$_invoke$arity$1 ? column_8333.cljs$core$IFn$_invoke$arity$1(entity_8308) : column_8333.call(null,entity_8308));
var content_8336__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(content_8335),Date))?content_8335.toLocaleString():content_8335);
var td_column_8337 = cljs.core.cst$kw$td.cljs$core$IFn$_invoke$arity$1(column_style_8334);
var td_style_8338 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(framework_lib.core.default_th_td_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(td_column_8337));
var td_attrs_8339 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(td_column_8337,cljs.core.cst$kw$style);
var td_attrs_8340__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(td_attrs_8339,cljs.core.cst$kw$title,content_8336__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content_8336__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,td_style_8338], null)], 0)),td_attrs_8340__$1], 0)));


var G__8341 = cljs.core.next(seq__8215_8327__$1);
var G__8342 = null;
var G__8343 = (0);
var G__8344 = (0);
seq__8215_8310 = G__8341;
chunk__8216_8311 = G__8342;
count__8217_8312 = G__8343;
i__8218_8313 = G__8344;
continue;
}
} else {
}
}
break;
}

var seq__8219_8345 = cljs.core.seq(actions);
var chunk__8220_8346 = null;
var count__8221_8347 = (0);
var i__8222_8348 = (0);
while(true){
if((i__8222_8348 < count__8221_8347)){
var map__8223_8349 = chunk__8220_8346.cljs$core$IIndexed$_nth$arity$2(null,i__8222_8348);
var map__8223_8350__$1 = ((((!((map__8223_8349 == null)))?(((((map__8223_8349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8223_8349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8223_8349):map__8223_8349);
var label_8351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8223_8350__$1,cljs.core.cst$kw$label);
var evt_fn_8352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8223_8350__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_8353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8223_8350__$1,cljs.core.cst$kw$evt_DASH_p);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,label_8351,cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,label_8351], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,evt_fn_8352,cljs.core.cst$kw$evt_DASH_p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(evt_p_8353,cljs.core.cst$kw$ent_DASH_id,row_id_8309)], null)], null)], 0))], 0))], 0)));


var G__8354 = seq__8219_8345;
var G__8355 = chunk__8220_8346;
var G__8356 = count__8221_8347;
var G__8357 = (i__8222_8348 + (1));
seq__8219_8345 = G__8354;
chunk__8220_8346 = G__8355;
count__8221_8347 = G__8356;
i__8222_8348 = G__8357;
continue;
} else {
var temp__5457__auto___8358__$1 = cljs.core.seq(seq__8219_8345);
if(temp__5457__auto___8358__$1){
var seq__8219_8359__$1 = temp__5457__auto___8358__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8219_8359__$1)){
var c__4351__auto___8360 = cljs.core.chunk_first(seq__8219_8359__$1);
var G__8361 = cljs.core.chunk_rest(seq__8219_8359__$1);
var G__8362 = c__4351__auto___8360;
var G__8363 = cljs.core.count(c__4351__auto___8360);
var G__8364 = (0);
seq__8219_8345 = G__8361;
chunk__8220_8346 = G__8362;
count__8221_8347 = G__8363;
i__8222_8348 = G__8364;
continue;
} else {
var map__8225_8365 = cljs.core.first(seq__8219_8359__$1);
var map__8225_8366__$1 = ((((!((map__8225_8365 == null)))?(((((map__8225_8365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8225_8365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8225_8365):map__8225_8365);
var label_8367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8225_8366__$1,cljs.core.cst$kw$label);
var evt_fn_8368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8225_8366__$1,cljs.core.cst$kw$evt_DASH_fn);
var evt_p_8369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8225_8366__$1,cljs.core.cst$kw$evt_DASH_p);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tds,cljs.core.conj,htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,label_8367,cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,label_8367], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,evt_fn_8368,cljs.core.cst$kw$evt_DASH_p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(evt_p_8369,cljs.core.cst$kw$ent_DASH_id,row_id_8309)], null)], null)], 0))], 0))], 0)));


var G__8370 = cljs.core.next(seq__8219_8359__$1);
var G__8371 = null;
var G__8372 = (0);
var G__8373 = (0);
seq__8219_8345 = G__8370;
chunk__8220_8346 = G__8371;
count__8221_8347 = G__8372;
i__8222_8348 = G__8373;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(tds);
})()], 0)));


var G__8374 = cljs.core.next(seq__8199_8302__$1);
var G__8375 = null;
var G__8376 = (0);
var G__8377 = (0);
seq__8199_8227 = G__8374;
chunk__8200_8228 = G__8375;
count__8201_8229 = G__8376;
i__8202_8230 = G__8377;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(trs);
})()], 0));
});
/**
 * Query current option if it is checked
 */
framework_lib.core.cb_checked_QMARK_ = (function framework_lib$core$cb_checked_QMARK_(selected_cbs,current_index,option){
while(true){
if((current_index < cljs.core.count(selected_cbs))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option,cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_cbs,current_index))){
return true;
} else {
var G__8378 = selected_cbs;
var G__8379 = (current_index + (1));
var G__8380 = option;
selected_cbs = G__8378;
current_index = G__8379;
option = G__8380;
continue;
}
} else {
return false;
}
break;
}
});
/**
 * If vector contains element
 */
framework_lib.core.vec_contains_QMARK_ = (function framework_lib$core$vec_contains_QMARK_(data,el,index){
while(true){
if((index < cljs.core.count(data))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,index),el)){
return true;
} else {
var G__8381 = data;
var G__8382 = el;
var G__8383 = (index + (1));
data = G__8381;
el = G__8382;
index = G__8383;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Render checkbox fields with different options
 */
framework_lib.core.checkbox_field = (function framework_lib$core$checkbox_field(selected_cbs,label_txt,options,disabled){
var cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__8384_8388 = cljs.core.seq(options);
var chunk__8385_8389 = null;
var count__8386_8390 = (0);
var i__8387_8391 = (0);
while(true){
if((i__8387_8391 < count__8386_8390)){
var option_8392 = chunk__8385_8389.cljs$core$IIndexed$_nth$arity$2(null,i__8387_8391);
var cb_name_8393 = ["cb",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_txt)].join('');
var id_8394 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cb_name_8393),cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_lib.core.replace_all(option_8392," ",""))].join('');
var cb_attrs_8395 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,id_8394,cljs.core.cst$kw$name,cb_name_8393,cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$value,option_8392], null);
var cb_attrs_8396__$1 = (cljs.core.truth_(framework_lib.core.vec_contains_QMARK_(selected_cbs,option_8392,(0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cb_attrs_8395,cljs.core.cst$kw$checked,"checked"):cb_attrs_8395);
var cb_attrs_8397__$2 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cb_attrs_8396__$1,cljs.core.cst$kw$disabled,"disabled"):cb_attrs_8396__$1);
var l_attrs_8398 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,["lbl",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8394)].join(''),cljs.core.cst$kw$for,id_8394], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cbs,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",cb_attrs_8397__$2], 0)),htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_8392,l_attrs_8398], 0))], null)], 0)));


var G__8399 = seq__8384_8388;
var G__8400 = chunk__8385_8389;
var G__8401 = count__8386_8390;
var G__8402 = (i__8387_8391 + (1));
seq__8384_8388 = G__8399;
chunk__8385_8389 = G__8400;
count__8386_8390 = G__8401;
i__8387_8391 = G__8402;
continue;
} else {
var temp__5457__auto___8403 = cljs.core.seq(seq__8384_8388);
if(temp__5457__auto___8403){
var seq__8384_8404__$1 = temp__5457__auto___8403;
if(cljs.core.chunked_seq_QMARK_(seq__8384_8404__$1)){
var c__4351__auto___8405 = cljs.core.chunk_first(seq__8384_8404__$1);
var G__8406 = cljs.core.chunk_rest(seq__8384_8404__$1);
var G__8407 = c__4351__auto___8405;
var G__8408 = cljs.core.count(c__4351__auto___8405);
var G__8409 = (0);
seq__8384_8388 = G__8406;
chunk__8385_8389 = G__8407;
count__8386_8390 = G__8408;
i__8387_8391 = G__8409;
continue;
} else {
var option_8410 = cljs.core.first(seq__8384_8404__$1);
var cb_name_8411 = ["cb",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_txt)].join('');
var id_8412 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cb_name_8411),cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_lib.core.replace_all(option_8410," ",""))].join('');
var cb_attrs_8413 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,id_8412,cljs.core.cst$kw$name,cb_name_8411,cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$value,option_8410], null);
var cb_attrs_8414__$1 = (cljs.core.truth_(framework_lib.core.vec_contains_QMARK_(selected_cbs,option_8410,(0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cb_attrs_8413,cljs.core.cst$kw$checked,"checked"):cb_attrs_8413);
var cb_attrs_8415__$2 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cb_attrs_8414__$1,cljs.core.cst$kw$disabled,"disabled"):cb_attrs_8414__$1);
var l_attrs_8416 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,["lbl",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8412)].join(''),cljs.core.cst$kw$for,id_8412], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cbs,cljs.core.conj,htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",cb_attrs_8415__$2], 0)),htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_8410,l_attrs_8416], 0))], null)], 0)));


var G__8417 = cljs.core.next(seq__8384_8404__$1);
var G__8418 = null;
var G__8419 = (0);
var G__8420 = (0);
seq__8384_8388 = G__8417;
chunk__8385_8389 = G__8418;
count__8386_8390 = G__8419;
i__8387_8391 = G__8420;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(cbs);
});
/**
 * After successful entity insert or update display table again
 */
framework_lib.core.insert_update_entity_success = (function framework_lib$core$insert_update_entity_success(xhr,p__8421){
var map__8422 = p__8421;
var map__8422__$1 = ((((!((map__8422 == null)))?(((((map__8422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8422):map__8422);
var conf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8422__$1,cljs.core.cst$kw$conf);
var map__8423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8422__$1,cljs.core.cst$kw$conf);
var map__8423__$1 = ((((!((map__8423 == null)))?(((((map__8423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8423):map__8423);
var table_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8423__$1,cljs.core.cst$kw$table_DASH_fn);
return (table_fn.cljs$core$IFn$_invoke$arity$1 ? table_fn.cljs$core$IFn$_invoke$arity$1(conf) : table_fn.call(null,conf));
});
/**
 * Read validation attributes of particular fields
 */
framework_lib.core.validate_field = (function framework_lib$core$validate_field(input_element,validations,id){
var validity = (input_element["validity"]);
var valid = (validity["valid"]);
if(cljs.core.not(valid)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(validations,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["#td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(input_element["validationMessage"])], null));
} else {
return null;
}
});
/**
 * Insert or update entity
 */
framework_lib.core.insert_update_entity = (function framework_lib$core$insert_update_entity(conf){
var action = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(conf);
var form_conf = cljs.core.cst$kw$form_DASH_conf.cljs$core$IFn$_invoke$arity$1(conf);
var entity_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form_conf);
var fields = cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(form_conf);
var entity_keys = cljs.core.keys(fields);
var table_node = js_lib.core.query_selector(".entity");
var request_body = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$entity_DASH_type,entity_type], null);
var hidden_id = js_lib.core.query_selector_on_element(table_node,"#_id");
var entity_id = js_lib.core.get_value(hidden_id);
var entity = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var specific_read_form = cljs.core.cst$kw$specific_DASH_read_DASH_form.cljs$core$IFn$_invoke$arity$1(form_conf);
var validations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(specific_read_form)){
(specific_read_form.cljs$core$IFn$_invoke$arity$1 ? specific_read_form.cljs$core$IFn$_invoke$arity$1(entity) : specific_read_form.call(null,entity));
} else {
var seq__8426_8440 = cljs.core.seq(entity_keys);
var chunk__8427_8441 = null;
var count__8428_8442 = (0);
var i__8429_8443 = (0);
while(true){
if((i__8429_8443 < count__8428_8442)){
var e_key_8444 = chunk__8427_8441.cljs$core$IIndexed$_nth$arity$2(null,i__8429_8443);
var field_8445 = (e_key_8444.cljs$core$IFn$_invoke$arity$1 ? e_key_8444.cljs$core$IFn$_invoke$arity$1(fields) : e_key_8444.call(null,fields));
var label_txt_8446 = cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(field_8445);
var input_el_8447 = cljs.core.cst$kw$input_DASH_el.cljs$core$IFn$_invoke$arity$1(field_8445);
var id_8448 = cljs.core.name(e_key_8444);
var message_selector_8449 = ["#td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8448)].join('');
var message_el_8450 = js_lib.core.query_selector_on_element(".entity",message_selector_8449);
js_lib.core.set_inner_html(message_el_8450,"");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"radio")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8444,js_lib.core.checked_value(id_8448));

framework_lib.core.validate_field(js_lib.core.query_selector_on_element(".entity",["input[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8448),"']"].join('')),validations,id_8448);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"checkbox")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8444,js_lib.core.cb_checked_values(id_8448));
} else {
}

var temp__5457__auto___8451 = js_lib.core.query_selector_on_element(table_node,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8448)].join(''));
if(cljs.core.truth_(temp__5457__auto___8451)){
var input_element_8452 = temp__5457__auto___8451;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"img")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8444,js_lib.core.get_src(input_element_8452));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"number")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8444,js_lib.core.get_value_as_number(input_element_8452));

framework_lib.core.validate_field(input_element_8452,validations,id_8448);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"date")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8444,js_lib.core.get_value_as_date(input_element_8452));

framework_lib.core.validate_field(input_element_8452,validations,id_8448);
} else {
}

if(!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"img")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"number")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8447,"date"))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8444,js_lib.core.get_value(input_element_8452));

framework_lib.core.validate_field(input_element_8452,validations,id_8448);
} else {
}
} else {
}


var G__8453 = seq__8426_8440;
var G__8454 = chunk__8427_8441;
var G__8455 = count__8428_8442;
var G__8456 = (i__8429_8443 + (1));
seq__8426_8440 = G__8453;
chunk__8427_8441 = G__8454;
count__8428_8442 = G__8455;
i__8429_8443 = G__8456;
continue;
} else {
var temp__5457__auto___8457 = cljs.core.seq(seq__8426_8440);
if(temp__5457__auto___8457){
var seq__8426_8458__$1 = temp__5457__auto___8457;
if(cljs.core.chunked_seq_QMARK_(seq__8426_8458__$1)){
var c__4351__auto___8459 = cljs.core.chunk_first(seq__8426_8458__$1);
var G__8460 = cljs.core.chunk_rest(seq__8426_8458__$1);
var G__8461 = c__4351__auto___8459;
var G__8462 = cljs.core.count(c__4351__auto___8459);
var G__8463 = (0);
seq__8426_8440 = G__8460;
chunk__8427_8441 = G__8461;
count__8428_8442 = G__8462;
i__8429_8443 = G__8463;
continue;
} else {
var e_key_8464 = cljs.core.first(seq__8426_8458__$1);
var field_8465 = (e_key_8464.cljs$core$IFn$_invoke$arity$1 ? e_key_8464.cljs$core$IFn$_invoke$arity$1(fields) : e_key_8464.call(null,fields));
var label_txt_8466 = cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(field_8465);
var input_el_8467 = cljs.core.cst$kw$input_DASH_el.cljs$core$IFn$_invoke$arity$1(field_8465);
var id_8468 = cljs.core.name(e_key_8464);
var message_selector_8469 = ["#td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8468)].join('');
var message_el_8470 = js_lib.core.query_selector_on_element(".entity",message_selector_8469);
js_lib.core.set_inner_html(message_el_8470,"");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"radio")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8464,js_lib.core.checked_value(id_8468));

framework_lib.core.validate_field(js_lib.core.query_selector_on_element(".entity",["input[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8468),"']"].join('')),validations,id_8468);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"checkbox")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8464,js_lib.core.cb_checked_values(id_8468));
} else {
}

var temp__5457__auto___8471__$1 = js_lib.core.query_selector_on_element(table_node,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8468)].join(''));
if(cljs.core.truth_(temp__5457__auto___8471__$1)){
var input_element_8472 = temp__5457__auto___8471__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"img")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8464,js_lib.core.get_src(input_element_8472));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"number")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8464,js_lib.core.get_value_as_number(input_element_8472));

framework_lib.core.validate_field(input_element_8472,validations,id_8468);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"date")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8464,js_lib.core.get_value_as_date(input_element_8472));

framework_lib.core.validate_field(input_element_8472,validations,id_8468);
} else {
}

if(!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"img")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"number")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_el_8467,"date"))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity,cljs.core.assoc,e_key_8464,js_lib.core.get_value(input_element_8472));

framework_lib.core.validate_field(input_element_8472,validations,id_8468);
} else {
}
} else {
}


var G__8473 = cljs.core.next(seq__8426_8458__$1);
var G__8474 = null;
var G__8475 = (0);
var G__8476 = (0);
seq__8426_8440 = G__8473;
chunk__8427_8441 = G__8474;
count__8428_8442 = G__8475;
i__8429_8443 = G__8476;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.empty_QMARK_(cljs.core.deref(validations))){
return ajax_lib.core.ajax(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$url,((cljs.core.empty_QMARK_(entity_id))?common_middle.request_urls.insert_entity_url:common_middle.request_urls.update_entity_url),cljs.core.cst$kw$success_DASH_fn,framework_lib.core.insert_update_entity_success,cljs.core.cst$kw$error_DASH_fn,framework_lib.core.framework_default_error,cljs.core.cst$kw$entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request_body,cljs.core.cst$kw$entity,cljs.core.deref(entity),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_id,entity_id], 0)),cljs.core.cst$kw$conf,conf], null));
} else {
var seq__8430 = cljs.core.seq(cljs.core.deref(validations));
var chunk__8431 = null;
var count__8432 = (0);
var i__8433 = (0);
while(true){
if((i__8433 < count__8432)){
var vec__8434 = chunk__8431.cljs$core$IIndexed$_nth$arity$2(null,i__8433);
var message_selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8434,(0),null);
var validation_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8434,(1),null);
var message_el_8477 = js_lib.core.query_selector_on_element(".entity",message_selector);
js_lib.core.set_inner_html(message_el_8477,validation_message);


var G__8478 = seq__8430;
var G__8479 = chunk__8431;
var G__8480 = count__8432;
var G__8481 = (i__8433 + (1));
seq__8430 = G__8478;
chunk__8431 = G__8479;
count__8432 = G__8480;
i__8433 = G__8481;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__8430);
if(temp__5457__auto__){
var seq__8430__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8430__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__8430__$1);
var G__8482 = cljs.core.chunk_rest(seq__8430__$1);
var G__8483 = c__4351__auto__;
var G__8484 = cljs.core.count(c__4351__auto__);
var G__8485 = (0);
seq__8430 = G__8482;
chunk__8431 = G__8483;
count__8432 = G__8484;
i__8433 = G__8485;
continue;
} else {
var vec__8437 = cljs.core.first(seq__8430__$1);
var message_selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8437,(0),null);
var validation_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8437,(1),null);
var message_el_8486 = js_lib.core.query_selector_on_element(".entity",message_selector);
js_lib.core.set_inner_html(message_el_8486,validation_message);


var G__8487 = cljs.core.next(seq__8430__$1);
var G__8488 = null;
var G__8489 = (0);
var G__8490 = (0);
seq__8430 = G__8487;
chunk__8431 = G__8488;
count__8432 = G__8489;
i__8433 = G__8490;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * Generate form fields
 */
framework_lib.core.generate_form_trs = (function framework_lib$core$generate_form_trs(xhr,p__8491){
var map__8492 = p__8491;
var map__8492__$1 = ((((!((map__8492 == null)))?(((((map__8492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8492):map__8492);
var conf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8492__$1,cljs.core.cst$kw$conf);
var map__8493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8492__$1,cljs.core.cst$kw$conf);
var map__8493__$1 = ((((!((map__8493 == null)))?(((((map__8493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8493):map__8493);
var action_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$action_DASH_label);
var form_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$form_DASH_type);
var table_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$table_DASH_fn);
var allowed_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$allowed_DASH_actions);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$disabled);
var action_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$action_DASH_p);
var map__8494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$form_DASH_conf);
var map__8494__$1 = ((((!((map__8494 == null)))?(((((map__8494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8494):map__8494);
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,cljs.core.cst$kw$type);
var entity_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,cljs.core.cst$kw$entity_DASH_name);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,cljs.core.cst$kw$fields);
var entity_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,cljs.core.cst$kw$fields_DASH_order);
var action_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$action_DASH_fn);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8493__$1,cljs.core.cst$kw$action);
var entity_name__$1 = (function (){var or__3949__auto__ = entity_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return entity_type;
}
})();
var response = (((xhr == null))?null:ajax_lib.core.get_response(xhr));
var entity_data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(response);
var conf__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conf,cljs.core.cst$kw$disabled,false);
var conf__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$entity_DASH_filter,cljs.core.PersistentArrayMap.EMPTY);
var trs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_name__$1)].join('')], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colspan,(3)], null)], 0))], 0)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"_id",cljs.core.cst$kw$name,"_id",cljs.core.cst$kw$type,"hidden",cljs.core.cst$kw$value,cljs.core.cst$kw$_id.cljs$core$IFn$_invoke$arity$1(entity_data)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colspan,(3)], null)], 0))], 0)));

var seq__8498_8510 = cljs.core.seq(entity_keys);
var chunk__8499_8511 = null;
var count__8500_8512 = (0);
var i__8501_8513 = (0);
while(true){
if((i__8501_8513 < count__8500_8512)){
var e_key_8514 = chunk__8499_8511.cljs$core$IIndexed$_nth$arity$2(null,i__8501_8513);
var field_conf_8515 = (e_key_8514.cljs$core$IFn$_invoke$arity$1 ? e_key_8514.cljs$core$IFn$_invoke$arity$1(fields) : e_key_8514.call(null,fields));
var label_txt_8516 = cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(field_conf_8515);
var attrs_8517 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(field_conf_8515);
var attrs_8518__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs_8517,cljs.core.cst$kw$disabled,true):attrs_8517);
var evts_8519 = cljs.core.cst$kw$evts.cljs$core$IFn$_invoke$arity$1(field_conf_8515);
var id_8520 = cljs.core.name(e_key_8514);
var input_el_8521 = cljs.core.cst$kw$input_DASH_el.cljs$core$IFn$_invoke$arity$1(field_conf_8515);
var options_8522 = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(field_conf_8515);
var data_8523 = (e_key_8514.cljs$core$IFn$_invoke$arity$1 ? e_key_8514.cljs$core$IFn$_invoke$arity$1(entity_data) : e_key_8514.call(null,entity_data));
var sub_form_trs_8524 = cljs.core.cst$kw$sub_DASH_form_DASH_trs.cljs$core$IFn$_invoke$arity$1(field_conf_8515);
var temp__5457__auto___8525 = sub_form_trs_8524;
if(cljs.core.truth_(temp__5457__auto___8525)){
var sub_form_trs_8526__$1 = temp__5457__auto___8525;
var seq__8502_8527 = cljs.core.seq((sub_form_trs_8526__$1.cljs$core$IFn$_invoke$arity$2 ? sub_form_trs_8526__$1.cljs$core$IFn$_invoke$arity$2(entity_data,attrs_8518__$1) : sub_form_trs_8526__$1.call(null,entity_data,attrs_8518__$1)));
var chunk__8503_8528 = null;
var count__8504_8529 = (0);
var i__8505_8530 = (0);
while(true){
if((i__8505_8530 < count__8504_8529)){
var sub_form_tr_8531 = chunk__8503_8528.cljs$core$IIndexed$_nth$arity$2(null,i__8505_8530);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,sub_form_tr_8531);


var G__8532 = seq__8502_8527;
var G__8533 = chunk__8503_8528;
var G__8534 = count__8504_8529;
var G__8535 = (i__8505_8530 + (1));
seq__8502_8527 = G__8532;
chunk__8503_8528 = G__8533;
count__8504_8529 = G__8534;
i__8505_8530 = G__8535;
continue;
} else {
var temp__5457__auto___8536__$1 = cljs.core.seq(seq__8502_8527);
if(temp__5457__auto___8536__$1){
var seq__8502_8537__$1 = temp__5457__auto___8536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8502_8537__$1)){
var c__4351__auto___8538 = cljs.core.chunk_first(seq__8502_8537__$1);
var G__8539 = cljs.core.chunk_rest(seq__8502_8537__$1);
var G__8540 = c__4351__auto___8538;
var G__8541 = cljs.core.count(c__4351__auto___8538);
var G__8542 = (0);
seq__8502_8527 = G__8539;
chunk__8503_8528 = G__8540;
count__8504_8529 = G__8541;
i__8505_8530 = G__8542;
continue;
} else {
var sub_form_tr_8543 = cljs.core.first(seq__8502_8537__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,sub_form_tr_8543);


var G__8544 = cljs.core.next(seq__8502_8537__$1);
var G__8545 = null;
var G__8546 = (0);
var G__8547 = (0);
seq__8502_8527 = G__8544;
chunk__8503_8528 = G__8545;
count__8504_8529 = G__8546;
i__8505_8530 = G__8547;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.not(sub_form_trs_8524)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label_txt_8516,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,["lbl",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8520)].join('')], null)], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([framework_lib.core.generate_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.name(e_key_8514),data_8523,input_el_8521,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_8518__$1,evts_8519,options_8522], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8520)].join(''),cljs.core.cst$kw$class,"validationMessage"], null)], 0))], null)], 0)));
} else {
}


var G__8548 = seq__8498_8510;
var G__8549 = chunk__8499_8511;
var G__8550 = count__8500_8512;
var G__8551 = (i__8501_8513 + (1));
seq__8498_8510 = G__8548;
chunk__8499_8511 = G__8549;
count__8500_8512 = G__8550;
i__8501_8513 = G__8551;
continue;
} else {
var temp__5457__auto___8552 = cljs.core.seq(seq__8498_8510);
if(temp__5457__auto___8552){
var seq__8498_8553__$1 = temp__5457__auto___8552;
if(cljs.core.chunked_seq_QMARK_(seq__8498_8553__$1)){
var c__4351__auto___8554 = cljs.core.chunk_first(seq__8498_8553__$1);
var G__8555 = cljs.core.chunk_rest(seq__8498_8553__$1);
var G__8556 = c__4351__auto___8554;
var G__8557 = cljs.core.count(c__4351__auto___8554);
var G__8558 = (0);
seq__8498_8510 = G__8555;
chunk__8499_8511 = G__8556;
count__8500_8512 = G__8557;
i__8501_8513 = G__8558;
continue;
} else {
var e_key_8559 = cljs.core.first(seq__8498_8553__$1);
var field_conf_8560 = (e_key_8559.cljs$core$IFn$_invoke$arity$1 ? e_key_8559.cljs$core$IFn$_invoke$arity$1(fields) : e_key_8559.call(null,fields));
var label_txt_8561 = cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(field_conf_8560);
var attrs_8562 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(field_conf_8560);
var attrs_8563__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs_8562,cljs.core.cst$kw$disabled,true):attrs_8562);
var evts_8564 = cljs.core.cst$kw$evts.cljs$core$IFn$_invoke$arity$1(field_conf_8560);
var id_8565 = cljs.core.name(e_key_8559);
var input_el_8566 = cljs.core.cst$kw$input_DASH_el.cljs$core$IFn$_invoke$arity$1(field_conf_8560);
var options_8567 = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(field_conf_8560);
var data_8568 = (e_key_8559.cljs$core$IFn$_invoke$arity$1 ? e_key_8559.cljs$core$IFn$_invoke$arity$1(entity_data) : e_key_8559.call(null,entity_data));
var sub_form_trs_8569 = cljs.core.cst$kw$sub_DASH_form_DASH_trs.cljs$core$IFn$_invoke$arity$1(field_conf_8560);
var temp__5457__auto___8570__$1 = sub_form_trs_8569;
if(cljs.core.truth_(temp__5457__auto___8570__$1)){
var sub_form_trs_8571__$1 = temp__5457__auto___8570__$1;
var seq__8506_8572 = cljs.core.seq((sub_form_trs_8571__$1.cljs$core$IFn$_invoke$arity$2 ? sub_form_trs_8571__$1.cljs$core$IFn$_invoke$arity$2(entity_data,attrs_8563__$1) : sub_form_trs_8571__$1.call(null,entity_data,attrs_8563__$1)));
var chunk__8507_8573 = null;
var count__8508_8574 = (0);
var i__8509_8575 = (0);
while(true){
if((i__8509_8575 < count__8508_8574)){
var sub_form_tr_8576 = chunk__8507_8573.cljs$core$IIndexed$_nth$arity$2(null,i__8509_8575);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,sub_form_tr_8576);


var G__8577 = seq__8506_8572;
var G__8578 = chunk__8507_8573;
var G__8579 = count__8508_8574;
var G__8580 = (i__8509_8575 + (1));
seq__8506_8572 = G__8577;
chunk__8507_8573 = G__8578;
count__8508_8574 = G__8579;
i__8509_8575 = G__8580;
continue;
} else {
var temp__5457__auto___8581__$2 = cljs.core.seq(seq__8506_8572);
if(temp__5457__auto___8581__$2){
var seq__8506_8582__$1 = temp__5457__auto___8581__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8506_8582__$1)){
var c__4351__auto___8583 = cljs.core.chunk_first(seq__8506_8582__$1);
var G__8584 = cljs.core.chunk_rest(seq__8506_8582__$1);
var G__8585 = c__4351__auto___8583;
var G__8586 = cljs.core.count(c__4351__auto___8583);
var G__8587 = (0);
seq__8506_8572 = G__8584;
chunk__8507_8573 = G__8585;
count__8508_8574 = G__8586;
i__8509_8575 = G__8587;
continue;
} else {
var sub_form_tr_8588 = cljs.core.first(seq__8506_8582__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,sub_form_tr_8588);


var G__8589 = cljs.core.next(seq__8506_8582__$1);
var G__8590 = null;
var G__8591 = (0);
var G__8592 = (0);
seq__8506_8572 = G__8589;
chunk__8507_8573 = G__8590;
count__8508_8574 = G__8591;
i__8509_8575 = G__8592;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.not(sub_form_trs_8569)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label_txt_8561,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,["lbl",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8565)].join('')], null)], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([framework_lib.core.generate_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.name(e_key_8559),data_8568,input_el_8566,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_8563__$1,evts_8564,options_8567], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_8565)].join(''),cljs.core.cst$kw$class,"validationMessage"], null)], 0))], null)], 0)));
} else {
}


var G__8593 = cljs.core.next(seq__8498_8553__$1);
var G__8594 = null;
var G__8595 = (0);
var G__8596 = (0);
seq__8498_8510 = G__8593;
chunk__8499_8511 = G__8594;
count__8500_8512 = G__8595;
i__8501_8513 = G__8596;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(trs,cljs.core.conj,htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"btnCancel",cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,language_lib.core.get_label((12)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"right"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,table_fn,cljs.core.cst$kw$evt_DASH_p,conf__$2], null)], null)], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$insert)) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-create"].join(''))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$edit)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$update)))) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-update"].join('')))))))?htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,["btn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action_label)].join(''),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,action_label], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onclick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,action_fn,cljs.core.cst$kw$evt_DASH_p,(cljs.core.truth_(action_p)?action_p:conf__$2)], null)], null)], 0)):null)], 0)),htmlcss_lib.core.td()], null)], 0)));

return cljs.core.deref(trs);
});
/**
 * Generate entity form
 */
framework_lib.core.generate_form = (function framework_lib$core$generate_form(xhr,ajax_params){
var table_node = htmlcss_lib.core.gen(htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([framework_lib.core.generate_form_trs(xhr,ajax_params)], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"entity"], null)], 0)));
js_lib.core.remove_element_content(".content");

return js_lib.core.append_element(".content",table_node);
});
/**
 * Request data about particular entity for display, edit/update
 */
framework_lib.core.entity_form = (function framework_lib$core$entity_form(conf){
var ent_id = cljs.core.cst$kw$ent_DASH_id.cljs$core$IFn$_invoke$arity$1(conf);
var entity = cljs.core.cst$kw$form_DASH_conf.cljs$core$IFn$_invoke$arity$1(conf);
var ent_id_key = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(entity);
var entity_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(entity);
var request_body = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$entity_DASH_type,entity_type,cljs.core.cst$kw$entity_DASH_filter,cljs.core.PersistentArrayMap.createAsIfByAssoc([ent_id_key,ent_id])], null);
return ajax_lib.core.ajax(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$url,common_middle.request_urls.get_entity_url,cljs.core.cst$kw$success_DASH_fn,framework_lib.core.generate_form,cljs.core.cst$kw$error_DASH_fn,framework_lib.core.framework_default_error,cljs.core.cst$kw$entity,request_body,cljs.core.cst$kw$conf,conf], null));
});
/**
 * Insert action configuration
 */
framework_lib.core.insert_action = (function framework_lib$core$insert_action(conf){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(conf,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_type,language_lib.core.get_label((4)),cljs.core.cst$kw$action,cljs.core.cst$kw$insert,cljs.core.cst$kw$action_DASH_label,language_lib.core.get_label((10)),cljs.core.cst$kw$action_DASH_fn,framework_lib.core.insert_update_entity], null));
});
/**
 * Call generate-form function with create entity parameters
 */
framework_lib.core.create_entity = (function framework_lib$core$create_entity(conf){
return framework_lib.core.generate_form(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$conf,framework_lib.core.insert_action(conf)], null));
});
/**
 * Update action configuration
 */
framework_lib.core.update_action = (function framework_lib$core$update_action(conf){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(conf,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_type,language_lib.core.get_label((7)),cljs.core.cst$kw$action,cljs.core.cst$kw$update,cljs.core.cst$kw$action_DASH_label,language_lib.core.get_label((11)),cljs.core.cst$kw$action_DASH_fn,framework_lib.core.insert_update_entity], null));
});
/**
 * Call entity-form function
 */
framework_lib.core.edit_entity = (function framework_lib$core$edit_entity(conf){
return framework_lib.core.entity_form(framework_lib.core.update_action(conf));
});
/**
 * Edit action configuration
 */
framework_lib.core.edit_action = (function framework_lib$core$edit_action(conf){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(conf,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$form_DASH_type,language_lib.core.get_label((6)),cljs.core.cst$kw$disabled,true,cljs.core.cst$kw$action,cljs.core.cst$kw$edit,cljs.core.cst$kw$action_DASH_label,language_lib.core.get_label((7)),cljs.core.cst$kw$action_DASH_fn,framework_lib.core.edit_entity,cljs.core.cst$kw$action_DASH_p,framework_lib.core.update_action(conf)], null));
});
/**
 * Call entity-form function from generated entities table with details entity parameters
 */
framework_lib.core.entity_details = (function framework_lib$core$entity_details(conf){
return framework_lib.core.entity_form(framework_lib.core.edit_action(conf));
});
/**
 * Entity delete success
 */
framework_lib.core.entity_delete_success = (function framework_lib$core$entity_delete_success(xhr,p__8597){
var map__8598 = p__8597;
var map__8598__$1 = ((((!((map__8598 == null)))?(((((map__8598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8598):map__8598);
var conf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8598__$1,cljs.core.cst$kw$conf);
var map__8599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8598__$1,cljs.core.cst$kw$conf);
var map__8599__$1 = ((((!((map__8599 == null)))?(((((map__8599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8599):map__8599);
var table_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8599__$1,cljs.core.cst$kw$table_DASH_fn);
return (table_fn.cljs$core$IFn$_invoke$arity$1 ? table_fn.cljs$core$IFn$_invoke$arity$1(conf) : table_fn.call(null,conf));
});
/**
 * Request entity to be deleted from server
 */
framework_lib.core.entity_delete = (function framework_lib$core$entity_delete(conf){
var entity = cljs.core.cst$kw$form_DASH_conf.cljs$core$IFn$_invoke$arity$1(conf);
var ent_id = cljs.core.cst$kw$ent_DASH_id.cljs$core$IFn$_invoke$arity$1(conf);
var ent_id_key = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(entity);
var entity_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(entity);
var request_body = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$entity_DASH_type,entity_type,cljs.core.cst$kw$entity_DASH_filter,cljs.core.PersistentArrayMap.createAsIfByAssoc([ent_id_key,ent_id])], null);
var conf__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$entity_DASH_filter,cljs.core.PersistentArrayMap.EMPTY);
return ajax_lib.core.ajax(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$url,common_middle.request_urls.delete_entity_url,cljs.core.cst$kw$request_DASH_method,"DELETE",cljs.core.cst$kw$success_DASH_fn,framework_lib.core.entity_delete_success,cljs.core.cst$kw$error_DASH_fn,framework_lib.core.framework_default_error,cljs.core.cst$kw$entity,request_body,cljs.core.cst$kw$conf,conf__$1], null));
});
/**
 * Search entities by fields from configuration
 */
framework_lib.core.search_entities_fn = (function framework_lib$core$search_entities_fn(ajax_params){
var gen_table_fn = cljs.core.cst$kw$gen_DASH_table_DASH_fn.cljs$core$IFn$_invoke$arity$1(ajax_params);
var conf = cljs.core.cst$kw$conf.cljs$core$IFn$_invoke$arity$1(ajax_params);
var search_value = js_lib.core.get_value("#txtSearchTable");
var conf__$1 = (function (){var search_fields = cljs.core.cst$kw$search_DASH_fields.cljs$core$IFn$_invoke$arity$1(conf);
var or_vector = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__8602_8606 = cljs.core.seq(search_fields);
var chunk__8603_8607 = null;
var count__8604_8608 = (0);
var i__8605_8609 = (0);
while(true){
if((i__8605_8609 < count__8604_8608)){
var search_field_8610 = chunk__8603_8607.cljs$core$IIndexed$_nth$arity$2(null,i__8605_8609);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(or_vector,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attr_DASH_key,search_field_8610,cljs.core.cst$kw$attr_DASH_value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$contains,search_value], null)], null));


var G__8611 = seq__8602_8606;
var G__8612 = chunk__8603_8607;
var G__8613 = count__8604_8608;
var G__8614 = (i__8605_8609 + (1));
seq__8602_8606 = G__8611;
chunk__8603_8607 = G__8612;
count__8604_8608 = G__8613;
i__8605_8609 = G__8614;
continue;
} else {
var temp__5457__auto___8615 = cljs.core.seq(seq__8602_8606);
if(temp__5457__auto___8615){
var seq__8602_8616__$1 = temp__5457__auto___8615;
if(cljs.core.chunked_seq_QMARK_(seq__8602_8616__$1)){
var c__4351__auto___8617 = cljs.core.chunk_first(seq__8602_8616__$1);
var G__8618 = cljs.core.chunk_rest(seq__8602_8616__$1);
var G__8619 = c__4351__auto___8617;
var G__8620 = cljs.core.count(c__4351__auto___8617);
var G__8621 = (0);
seq__8602_8606 = G__8618;
chunk__8603_8607 = G__8619;
count__8604_8608 = G__8620;
i__8605_8609 = G__8621;
continue;
} else {
var search_field_8622 = cljs.core.first(seq__8602_8616__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(or_vector,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attr_DASH_key,search_field_8622,cljs.core.cst$kw$attr_DASH_value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$contains,search_value], null)], null));


var G__8623 = cljs.core.next(seq__8602_8616__$1);
var G__8624 = null;
var G__8625 = (0);
var G__8626 = (0);
seq__8602_8606 = G__8623;
chunk__8603_8607 = G__8624;
count__8604_8608 = G__8625;
i__8605_8609 = G__8626;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(conf,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.assoc,cljs.core.cst$kw$entity_DASH_filter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$or,cljs.core.deref(or_vector)], null));
})();
return (gen_table_fn.cljs$core$IFn$_invoke$arity$4 ? gen_table_fn.cljs$core$IFn$_invoke$arity$4(conf__$1,null,null,true) : gen_table_fn.call(null,conf__$1,null,null,true));
});
/**
 * Generate entity table after retrieving entities
 */
framework_lib.core.entity_table_success = (function framework_lib$core$entity_table_success(xhr,ajax_params){
var map__8627 = ajax_params;
var map__8627__$1 = ((((!((map__8627 == null)))?(((((map__8627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8627):map__8627);
var conf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8627__$1,cljs.core.cst$kw$conf);
var search_on = cljs.core.cst$kw$search_DASH_on.cljs$core$IFn$_invoke$arity$1(conf);
var search_call = cljs.core.cst$kw$search_DASH_call.cljs$core$IFn$_invoke$arity$1(ajax_params);
var table_class = (function (){var or__3949__auto__ = cljs.core.cst$kw$table_DASH_class.cljs$core$IFn$_invoke$arity$1(conf);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "entities";
}
})();
var table_selector = [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_class)].join('');
var columns = cljs.core.cst$kw$columns.cljs$core$IFn$_invoke$arity$1(conf);
var render_in = cljs.core.cst$kw$render_DASH_in.cljs$core$IFn$_invoke$arity$1(conf);
var response = ajax_lib.core.get_response(xhr);
var entities = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(response);
var pagination = cljs.core.cst$kw$pagination.cljs$core$IFn$_invoke$arity$1(response);
var default_actions = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$details,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,language_lib.core.get_label((6)),cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.entity_details,cljs.core.cst$kw$evt_DASH_p,conf], null),cljs.core.cst$kw$edit,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,language_lib.core.get_label((7)),cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.edit_entity,cljs.core.cst$kw$evt_DASH_p,conf], null),cljs.core.cst$kw$delete,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,language_lib.core.get_label((8)),cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.entity_delete,cljs.core.cst$kw$evt_DASH_p,conf], null)], null);
var actions_conf = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(conf));
var allowed_actions = cljs.core.cst$kw$allowed_DASH_actions.cljs$core$IFn$_invoke$arity$1(conf);
var entity_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(conf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_conf,cljs.core.cst$kw$type], null));
var actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__8629_8633 = cljs.core.seq(cljs.core.deref(actions_conf));
var chunk__8630_8634 = null;
var count__8631_8635 = (0);
var i__8632_8636 = (0);
while(true){
if((i__8632_8636 < count__8631_8635)){
var action_8637 = chunk__8630_8634.cljs$core$IIndexed$_nth$arity$2(null,i__8632_8636);
var temp__5455__auto___8638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(default_actions,action_8637);
if(cljs.core.truth_(temp__5455__auto___8638)){
var action_map_8639 = temp__5455__auto___8638;
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action_8637,cljs.core.cst$kw$details)) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-read"].join(''))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action_8637,cljs.core.cst$kw$edit)) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-update"].join(''))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action_8637,cljs.core.cst$kw$delete)) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-delete"].join(''))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(actions,cljs.core.conj,action_map_8639);
} else {
}
} else {
if(cljs.core.truth_(action_8637)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(actions,cljs.core.conj,action_8637);
} else {
}
}


var G__8640 = seq__8629_8633;
var G__8641 = chunk__8630_8634;
var G__8642 = count__8631_8635;
var G__8643 = (i__8632_8636 + (1));
seq__8629_8633 = G__8640;
chunk__8630_8634 = G__8641;
count__8631_8635 = G__8642;
i__8632_8636 = G__8643;
continue;
} else {
var temp__5457__auto___8644 = cljs.core.seq(seq__8629_8633);
if(temp__5457__auto___8644){
var seq__8629_8645__$1 = temp__5457__auto___8644;
if(cljs.core.chunked_seq_QMARK_(seq__8629_8645__$1)){
var c__4351__auto___8646 = cljs.core.chunk_first(seq__8629_8645__$1);
var G__8647 = cljs.core.chunk_rest(seq__8629_8645__$1);
var G__8648 = c__4351__auto___8646;
var G__8649 = cljs.core.count(c__4351__auto___8646);
var G__8650 = (0);
seq__8629_8633 = G__8647;
chunk__8630_8634 = G__8648;
count__8631_8635 = G__8649;
i__8632_8636 = G__8650;
continue;
} else {
var action_8651 = cljs.core.first(seq__8629_8645__$1);
var temp__5455__auto___8652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(default_actions,action_8651);
if(cljs.core.truth_(temp__5455__auto___8652)){
var action_map_8653 = temp__5455__auto___8652;
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action_8651,cljs.core.cst$kw$details)) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-read"].join(''))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action_8651,cljs.core.cst$kw$edit)) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-update"].join(''))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action_8651,cljs.core.cst$kw$delete)) && (cljs.core.contains_QMARK_(allowed_actions,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_type),"-delete"].join(''))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(actions,cljs.core.conj,action_map_8653);
} else {
}
} else {
if(cljs.core.truth_(action_8651)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(actions,cljs.core.conj,action_8651);
} else {
}
}


var G__8654 = cljs.core.next(seq__8629_8645__$1);
var G__8655 = null;
var G__8656 = (0);
var G__8657 = (0);
seq__8629_8633 = G__8654;
chunk__8630_8634 = G__8655;
count__8631_8635 = G__8656;
i__8632_8636 = G__8657;
continue;
}
} else {
}
}
break;
}

var table_node = htmlcss_lib.core.gen(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3938__auto__ = search_on;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(search_call);
} else {
return and__3938__auto__;
}
})())?htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((13))], 0))], 0)),htmlcss_lib.core.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"txtSearchTable"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onkeyup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$evt_DASH_fn,framework_lib.core.search_entities_fn,cljs.core.cst$kw$evt_DASH_p,ajax_params], null)], null)], 0))], 0))], null)], 0))], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"search"], null)], 0)):null),((cljs.core.empty_QMARK_(entities))?htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language_lib.core.get_label((31)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,table_class], null)], 0)):htmlcss_lib.core.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [framework_lib.core.generate_thead(table_class,columns,cljs.core.deref(actions),pagination,conf),framework_lib.core.generate_tbody(entities,columns,cljs.core.deref(actions))], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,table_class], null)], 0)))], null));
if(cljs.core.truth_(search_call)){
js_lib.core.remove_element(table_selector);
} else {
js_lib.core.remove_element_content(render_in);
}

return js_lib.core.append_element(render_in,table_node);
});
/**
 * Generate table with data
 */
framework_lib.core.gen_table = (function framework_lib$core$gen_table(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8664 = arguments.length;
var i__4532__auto___8665 = (0);
while(true){
if((i__4532__auto___8665 < len__4531__auto___8664)){
args__4534__auto__.push((arguments[i__4532__auto___8665]));

var G__8666 = (i__4532__auto___8665 + (1));
i__4532__auto___8665 = G__8666;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return framework_lib.core.gen_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

framework_lib.core.gen_table.cljs$core$IFn$_invoke$arity$variadic = (function (conf,p__8660){
var vec__8661 = p__8660;
var sl_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(1),null);
var search_call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(2),null);
return ajax_lib.core.ajax(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$url,common_middle.request_urls.get_entities_url,cljs.core.cst$kw$success_DASH_fn,framework_lib.core.entity_table_success,cljs.core.cst$kw$error_DASH_fn,framework_lib.core.framework_default_error,cljs.core.cst$kw$entity,cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(conf),cljs.core.cst$kw$conf,conf,cljs.core.cst$kw$gen_DASH_table_DASH_fn,framework_lib.core.gen_table,cljs.core.cst$kw$search_DASH_call,search_call], null));
});

framework_lib.core.gen_table.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
framework_lib.core.gen_table.cljs$lang$applyTo = (function (seq8658){
var G__8659 = cljs.core.first(seq8658);
var seq8658__$1 = cljs.core.next(seq8658);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8659,seq8658__$1);
});

