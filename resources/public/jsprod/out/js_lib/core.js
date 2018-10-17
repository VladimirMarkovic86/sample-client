// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('js_lib.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('htmlcss_lib.core');
js_lib.core.anim_time = (100);
js_lib.core.events = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"AnimationEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initAnimationEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["animationend",null,"animationiteration",null,"animationstart",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"ClipboardEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initClipboardEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["copy",null,"paste",null,"cut",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"DragEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initDragEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["dragleave",null,"dragenter",null,"dragstart",null,"drag",null,"drop",null,"dragend",null,"dragover",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"FocusEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initFocusEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["focus",null,"focusin",null,"blur",null,"focusout",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"HashChangeEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initHashChangeEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["hashchange",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"InputEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initInputEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["input",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"KeyboardEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initKeyboardEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["keydown",null,"keyup",null,"keypress",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"MouseEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initMouseEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["mousedown",null,"mouseout",null,"dblclick",null,"click",null,"mouseenter",null,"mousemove",null,"mouseup",null,"contextmenu",null,"mouseover",null,"mouseleave",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"PageTransitionEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initPageTransitionEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["pageshow",null,"pagehide",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"PopStateEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initPopStateEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["popstate",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"ProgressEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initProgressEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["loadstart",null,"error",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"StorageEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initStorageEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["storage",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"TouchEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initTouchEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["touchcancel",null,"touchmove",null,"touchend",null,"touchstart",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"TransitionEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initTransitionEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["transitionend",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"UiEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initUiEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["load",null,"scroll",null,"unload",null,"error",null,"select",null,"beforeunload",null,"abort",null,"resize",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"WheelEvent",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initWheelEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["onwheel",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event_DASH_type,"Event",cljs.core.cst$kw$init_DASH_event_DASH_fn,"initEvent",cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 39, ["message",null,"seeking",null,"play",null,"progress",null,"online",null,"load",null,"scroll",null,"suspend",null,"unload",null,"offline",null,"error",null,"reset",null,"stalled",null,"invalid",null,"canplaythrough",null,"show",null,"fullscreenerror",null,"playing",null,"timeupdate",null,"loadeddata",null,"beforeprint",null,"select",null,"waiting",null,"pause",null,"canplay",null,"submit",null,"fullscreenchange",null,"input",null,"toggle",null,"beforeunload",null,"abort",null,"resize",null,"afterprint",null,"seeked",null,"open",null,"loadedmetadata",null,"search",null,"change",null,"ratechange",null], null), null)], null)], null);
/**
 * Retrieve URL from address bar
 */
js_lib.core.get_url = (function js_lib$core$get_url(){
return (document["URL"]);
});
/**
 * Is data fn parameter HTML element
 */
js_lib.core.html_QMARK_ = (function js_lib$core$html_QMARK_(data){
if(cljs.core.truth_(data)){
var temp__5457__auto__ = (cljs.core.type(data)["name"]);
if(cljs.core.truth_(temp__5457__auto__)){
var data_type_name = temp__5457__auto__;
return (data_type_name.indexOf("HTML") > (-1));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert html NodeList object to clojure vector
 */
js_lib.core.convert_to_vector = (function js_lib$core$convert_to_vector(node_list){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var node_list_length = node_list.length;
var seq__7131_7135 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),node_list_length));
var chunk__7132_7136 = null;
var count__7133_7137 = (0);
var i__7134_7138 = (0);
while(true){
if((i__7134_7138 < count__7133_7137)){
var node_index_7139 = chunk__7132_7136.cljs$core$IIndexed$_nth$arity$2(null,i__7134_7138);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,(node_list[node_index_7139]));


var G__7140 = seq__7131_7135;
var G__7141 = chunk__7132_7136;
var G__7142 = count__7133_7137;
var G__7143 = (i__7134_7138 + (1));
seq__7131_7135 = G__7140;
chunk__7132_7136 = G__7141;
count__7133_7137 = G__7142;
i__7134_7138 = G__7143;
continue;
} else {
var temp__5457__auto___7144 = cljs.core.seq(seq__7131_7135);
if(temp__5457__auto___7144){
var seq__7131_7145__$1 = temp__5457__auto___7144;
if(cljs.core.chunked_seq_QMARK_(seq__7131_7145__$1)){
var c__4351__auto___7146 = cljs.core.chunk_first(seq__7131_7145__$1);
var G__7147 = cljs.core.chunk_rest(seq__7131_7145__$1);
var G__7148 = c__4351__auto___7146;
var G__7149 = cljs.core.count(c__4351__auto___7146);
var G__7150 = (0);
seq__7131_7135 = G__7147;
chunk__7132_7136 = G__7148;
count__7133_7137 = G__7149;
i__7134_7138 = G__7150;
continue;
} else {
var node_index_7151 = cljs.core.first(seq__7131_7145__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,(node_list[node_index_7151]));


var G__7152 = cljs.core.next(seq__7131_7145__$1);
var G__7153 = null;
var G__7154 = (0);
var G__7155 = (0);
seq__7131_7135 = G__7152;
chunk__7132_7136 = G__7153;
count__7133_7137 = G__7154;
i__7134_7138 = G__7155;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(result);
});
/**
 * Select first element of what css selector fetches from document
 * returns single element (html node)
 */
js_lib.core.query_selector = (function js_lib$core$query_selector(selector){
if(typeof selector === 'string'){
return document.querySelector(selector);
} else {
if(cljs.core.truth_(js_lib.core.html_QMARK_(selector))){
return selector;
} else {
return null;
}
}
});
/**
 * Select all element of what css selector fetches from document
 * returns collection of elements (html nodes)
 */
js_lib.core.query_selector_all = (function js_lib$core$query_selector_all(selector){
return js_lib.core.convert_to_vector(document.querySelectorAll(selector));
});
/**
 * Select first element of what css selector fetches from element param
 * returns single element (html node)
 */
js_lib.core.query_selector_on_element = (function js_lib$core$query_selector_on_element(element,selector){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(((typeof element === 'string') && (typeof selector === 'string'))){
var element_7156__$1 = document.querySelector(element);
cljs.core.reset_BANG_(result,element_7156__$1.querySelector(selector));
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = js_lib.core.html_QMARK_(element);
if(cljs.core.truth_(and__3938__auto__)){
return typeof selector === 'string';
} else {
return and__3938__auto__;
}
})())){
cljs.core.reset_BANG_(result,element.querySelector(selector));
} else {
}

if(cljs.core.truth_(js_lib.core.html_QMARK_(selector))){
cljs.core.reset_BANG_(result,selector);
} else {
}

return cljs.core.deref(result);
});
/**
 * Select all element of what css selector fetches from element param
 * returns collection of elements (html nodes)
 */
js_lib.core.query_selector_all_on_element = (function js_lib$core$query_selector_all_on_element(element,selector){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if(((typeof element === 'string') && (typeof selector === 'string'))){
var elements_7161 = js_lib.core.convert_to_vector(document.querySelectorAll(element));
var seq__7157_7162 = cljs.core.seq(elements_7161);
var chunk__7158_7163 = null;
var count__7159_7164 = (0);
var i__7160_7165 = (0);
while(true){
if((i__7160_7165 < count__7159_7164)){
var element_7166__$1 = chunk__7158_7163.cljs$core$IIndexed$_nth$arity$2(null,i__7160_7165);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,((function (seq__7157_7162,chunk__7158_7163,count__7159_7164,i__7160_7165,element_7166__$1,elements_7161,result){
return (function (atom_value,collection){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,atom_value,collection);
});})(seq__7157_7162,chunk__7158_7163,count__7159_7164,i__7160_7165,element_7166__$1,elements_7161,result))
,js_lib.core.convert_to_vector(element_7166__$1.querySelectorAll(selector)));


var G__7167 = seq__7157_7162;
var G__7168 = chunk__7158_7163;
var G__7169 = count__7159_7164;
var G__7170 = (i__7160_7165 + (1));
seq__7157_7162 = G__7167;
chunk__7158_7163 = G__7168;
count__7159_7164 = G__7169;
i__7160_7165 = G__7170;
continue;
} else {
var temp__5457__auto___7171 = cljs.core.seq(seq__7157_7162);
if(temp__5457__auto___7171){
var seq__7157_7172__$1 = temp__5457__auto___7171;
if(cljs.core.chunked_seq_QMARK_(seq__7157_7172__$1)){
var c__4351__auto___7173 = cljs.core.chunk_first(seq__7157_7172__$1);
var G__7174 = cljs.core.chunk_rest(seq__7157_7172__$1);
var G__7175 = c__4351__auto___7173;
var G__7176 = cljs.core.count(c__4351__auto___7173);
var G__7177 = (0);
seq__7157_7162 = G__7174;
chunk__7158_7163 = G__7175;
count__7159_7164 = G__7176;
i__7160_7165 = G__7177;
continue;
} else {
var element_7178__$1 = cljs.core.first(seq__7157_7172__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,((function (seq__7157_7162,chunk__7158_7163,count__7159_7164,i__7160_7165,element_7178__$1,seq__7157_7172__$1,temp__5457__auto___7171,elements_7161,result){
return (function (atom_value,collection){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,atom_value,collection);
});})(seq__7157_7162,chunk__7158_7163,count__7159_7164,i__7160_7165,element_7178__$1,seq__7157_7172__$1,temp__5457__auto___7171,elements_7161,result))
,js_lib.core.convert_to_vector(element_7178__$1.querySelectorAll(selector)));


var G__7179 = cljs.core.next(seq__7157_7172__$1);
var G__7180 = null;
var G__7181 = (0);
var G__7182 = (0);
seq__7157_7162 = G__7179;
chunk__7158_7163 = G__7180;
count__7159_7164 = G__7181;
i__7160_7165 = G__7182;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = js_lib.core.html_QMARK_(element);
if(cljs.core.truth_(and__3938__auto__)){
return typeof selector === 'string';
} else {
return and__3938__auto__;
}
})())){
cljs.core.reset_BANG_(result,js_lib.core.convert_to_vector(element.querySelectorAll(selector)));
} else {
}

return cljs.core.deref(result);
});
/**
 * Select element by id
 * returns single element (html node)
 */
js_lib.core.get_by_id = (function js_lib$core$get_by_id(element_id){
return document.getElementById(element_id);
});
/**
 * Select elements by class
 * returns collection of elements (html nodes)
 */
js_lib.core.get_by_class = (function js_lib$core$get_by_class(element_class){
return document.getElementsByClassName(element_class);
});
/**
 * (xpath '//div[contains(text(), 'Searched text')]')
 */
js_lib.core.xpath = (function js_lib$core$xpath(selector){
var iterator = document.evaluate(selector,document,null,(XPathResult["UNORDERED_NODE_ITERATOR_TYPE"]),null);
var this_node = iterator.iterateNext();
return this_node;
});
/**
 * Fetch child nodes of element param
 */
js_lib.core.get_child_nodes = (function js_lib$core$get_child_nodes(element){
return js_lib.core.convert_to_vector((element["childNodes"]));
});
/**
 * Parses html from string
 */
js_lib.core.parse_html = (function js_lib$core$parse_html(html_content){
var parser = (new DOMParser());
var html_dom_content = parser.parseFromString(html_content,"text/html");
var html_element = cljs.core.first(js_lib.core.get_child_nodes(html_dom_content));
var head_element = cljs.core.first(js_lib.core.get_child_nodes(html_element));
var body_element = cljs.core.first(cljs.core.rest(js_lib.core.get_child_nodes(html_element)));
var concrete_head_elements = js_lib.core.get_child_nodes(head_element);
var concrete_body_elements = js_lib.core.get_child_nodes(body_element);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(concrete_body_elements),(0))){
return concrete_head_elements;
} else {
return concrete_body_elements;
}
});
/**
 * Determine if param is string or html type of object
 */
js_lib.core.determine_param_type = (function js_lib$core$determine_param_type(exec_fn,param){
if(typeof param === 'string'){
return (exec_fn.cljs$core$IFn$_invoke$arity$1 ? exec_fn.cljs$core$IFn$_invoke$arity$1(param) : exec_fn.call(null,param));
} else {
if(cljs.core.truth_(js_lib.core.html_QMARK_(param))){
return param;
} else {
if(cljs.core.vector_QMARK_(param)){
return param;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
}
});
/**
 * Returns elements value
 */
js_lib.core.is_valid_QMARK_ = (function js_lib$core$is_valid_QMARK_(element){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return ((element__$1["validity"])["valid"]);
});
/**
 * Returns elements value
 */
js_lib.core.get_value = (function js_lib$core$get_value(element){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["value"]);
});
/**
 * Returns elements value
 */
js_lib.core.get_value_as_number = (function js_lib$core$get_value_as_number(element){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["valueAsNumber"]);
});
/**
 * Returns elements value
 */
js_lib.core.get_value_as_date = (function js_lib$core$get_value_as_date(element){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["valueAsDate"]);
});
/**
 * Sets element's value
 */
js_lib.core.set_value = (function js_lib$core$set_value(element,new_value){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["value"] = new_value);
});
/**
 * Returns elements checked
 */
js_lib.core.get_checked = (function js_lib$core$get_checked(element){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["checked"]);
});
/**
 * Sets element's checked
 */
js_lib.core.set_checked = (function js_lib$core$set_checked(element,new_value){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["checked"] = new_value);
});
/**
 * Returns elements src attribute value
 */
js_lib.core.get_src = (function js_lib$core$get_src(element){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["src"]);
});
/**
 * Sets element's src
 */
js_lib.core.set_src = (function js_lib$core$set_src(element,new_value){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (element__$1["src"] = new_value);
});
/**
 * Returns elements type
 */
js_lib.core.get_type = (function js_lib$core$get_type(element){
return (element["type"]);
});
/**
 * Get parentNode property
 */
js_lib.core.get_parent = (function js_lib$core$get_parent(element){
return (element["parentNode"]);
});
/**
 * Finds ancestor of an element at particular level
 */
js_lib.core.ancestor = (function js_lib$core$ancestor(element,ancestor_level){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,elem){
return js_lib.core.get_parent(acc);
}),element,cljs.core.range.cljs$core$IFn$_invoke$arity$1(ancestor_level));
});
/**
 * Replace first occurrence of string in first parameter
 */
js_lib.core.replace_single = (function js_lib$core$replace_single(str_content,replace_this,replace_with){
return str_content.replace(replace_this,replace_with);
});
/**
 * Replace every occurance of supplied string
 */
js_lib.core.replace_all = (function js_lib$core$replace_all(str_content,replace_this,replace_with){
while(true){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(str_content);
if(((-1) < cljs.core.deref(result).indexOf(replace_this))){
var G__7183 = cljs.core.reset_BANG_(result,str_content.replace(replace_this,replace_with));
var G__7184 = replace_this;
var G__7185 = replace_with;
str_content = G__7183;
replace_this = G__7184;
replace_with = G__7185;
continue;
} else {
return cljs.core.deref(result);
}
break;
}
});
/**
 * Empty elements feched by selector
 */
js_lib.core.empty_nodes = (function js_lib$core$empty_nodes(selector){
var selected_nodes = js_lib.core.query_selector_all(selector);
var seq__7186 = cljs.core.seq(selected_nodes);
var chunk__7187 = null;
var count__7188 = (0);
var i__7189 = (0);
while(true){
if((i__7189 < count__7188)){
var sl_node = chunk__7187.cljs$core$IIndexed$_nth$arity$2(null,i__7189);
var child_nodes_7198 = js_lib.core.get_child_nodes(sl_node);
var seq__7190_7199 = cljs.core.seq(child_nodes_7198);
var chunk__7191_7200 = null;
var count__7192_7201 = (0);
var i__7193_7202 = (0);
while(true){
if((i__7193_7202 < count__7192_7201)){
var ch_node_7203 = chunk__7191_7200.cljs$core$IIndexed$_nth$arity$2(null,i__7193_7202);
sl_node.removeChild(ch_node_7203);


var G__7204 = seq__7190_7199;
var G__7205 = chunk__7191_7200;
var G__7206 = count__7192_7201;
var G__7207 = (i__7193_7202 + (1));
seq__7190_7199 = G__7204;
chunk__7191_7200 = G__7205;
count__7192_7201 = G__7206;
i__7193_7202 = G__7207;
continue;
} else {
var temp__5457__auto___7208 = cljs.core.seq(seq__7190_7199);
if(temp__5457__auto___7208){
var seq__7190_7209__$1 = temp__5457__auto___7208;
if(cljs.core.chunked_seq_QMARK_(seq__7190_7209__$1)){
var c__4351__auto___7210 = cljs.core.chunk_first(seq__7190_7209__$1);
var G__7211 = cljs.core.chunk_rest(seq__7190_7209__$1);
var G__7212 = c__4351__auto___7210;
var G__7213 = cljs.core.count(c__4351__auto___7210);
var G__7214 = (0);
seq__7190_7199 = G__7211;
chunk__7191_7200 = G__7212;
count__7192_7201 = G__7213;
i__7193_7202 = G__7214;
continue;
} else {
var ch_node_7215 = cljs.core.first(seq__7190_7209__$1);
sl_node.removeChild(ch_node_7215);


var G__7216 = cljs.core.next(seq__7190_7209__$1);
var G__7217 = null;
var G__7218 = (0);
var G__7219 = (0);
seq__7190_7199 = G__7216;
chunk__7191_7200 = G__7217;
count__7192_7201 = G__7218;
i__7193_7202 = G__7219;
continue;
}
} else {
}
}
break;
}


var G__7220 = seq__7186;
var G__7221 = chunk__7187;
var G__7222 = count__7188;
var G__7223 = (i__7189 + (1));
seq__7186 = G__7220;
chunk__7187 = G__7221;
count__7188 = G__7222;
i__7189 = G__7223;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7186);
if(temp__5457__auto__){
var seq__7186__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7186__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7186__$1);
var G__7224 = cljs.core.chunk_rest(seq__7186__$1);
var G__7225 = c__4351__auto__;
var G__7226 = cljs.core.count(c__4351__auto__);
var G__7227 = (0);
seq__7186 = G__7224;
chunk__7187 = G__7225;
count__7188 = G__7226;
i__7189 = G__7227;
continue;
} else {
var sl_node = cljs.core.first(seq__7186__$1);
var child_nodes_7228 = js_lib.core.get_child_nodes(sl_node);
var seq__7194_7229 = cljs.core.seq(child_nodes_7228);
var chunk__7195_7230 = null;
var count__7196_7231 = (0);
var i__7197_7232 = (0);
while(true){
if((i__7197_7232 < count__7196_7231)){
var ch_node_7233 = chunk__7195_7230.cljs$core$IIndexed$_nth$arity$2(null,i__7197_7232);
sl_node.removeChild(ch_node_7233);


var G__7234 = seq__7194_7229;
var G__7235 = chunk__7195_7230;
var G__7236 = count__7196_7231;
var G__7237 = (i__7197_7232 + (1));
seq__7194_7229 = G__7234;
chunk__7195_7230 = G__7235;
count__7196_7231 = G__7236;
i__7197_7232 = G__7237;
continue;
} else {
var temp__5457__auto___7238__$1 = cljs.core.seq(seq__7194_7229);
if(temp__5457__auto___7238__$1){
var seq__7194_7239__$1 = temp__5457__auto___7238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7194_7239__$1)){
var c__4351__auto___7240 = cljs.core.chunk_first(seq__7194_7239__$1);
var G__7241 = cljs.core.chunk_rest(seq__7194_7239__$1);
var G__7242 = c__4351__auto___7240;
var G__7243 = cljs.core.count(c__4351__auto___7240);
var G__7244 = (0);
seq__7194_7229 = G__7241;
chunk__7195_7230 = G__7242;
count__7196_7231 = G__7243;
i__7197_7232 = G__7244;
continue;
} else {
var ch_node_7245 = cljs.core.first(seq__7194_7239__$1);
sl_node.removeChild(ch_node_7245);


var G__7246 = cljs.core.next(seq__7194_7239__$1);
var G__7247 = null;
var G__7248 = (0);
var G__7249 = (0);
seq__7194_7229 = G__7246;
chunk__7195_7230 = G__7247;
count__7196_7231 = G__7248;
i__7197_7232 = G__7249;
continue;
}
} else {
}
}
break;
}


var G__7250 = cljs.core.next(seq__7186__$1);
var G__7251 = null;
var G__7252 = (0);
var G__7253 = (0);
seq__7186 = G__7250;
chunk__7187 = G__7251;
count__7188 = G__7252;
i__7189 = G__7253;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Get innerHTML property of first element feched by selector
 */
js_lib.core.get_inner_html = (function js_lib$core$get_inner_html(element){
var sl_node = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
return (sl_node["innerHTML"]);
});
/**
 * Set html-content as innerHTML property of elements feched by selector
 */
js_lib.core.set_inner_html = (function js_lib$core$set_inner_html(selector,html_content){
var selected_nodes = js_lib.core.determine_param_type(js_lib.core.query_selector_all,selector);
if(cljs.core.vector_QMARK_(selected_nodes)){
var seq__7254 = cljs.core.seq(selected_nodes);
var chunk__7255 = null;
var count__7256 = (0);
var i__7257 = (0);
while(true){
if((i__7257 < count__7256)){
var sl_node = chunk__7255.cljs$core$IIndexed$_nth$arity$2(null,i__7257);
(sl_node["innerHTML"] = html_content);


var G__7258 = seq__7254;
var G__7259 = chunk__7255;
var G__7260 = count__7256;
var G__7261 = (i__7257 + (1));
seq__7254 = G__7258;
chunk__7255 = G__7259;
count__7256 = G__7260;
i__7257 = G__7261;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7254);
if(temp__5457__auto__){
var seq__7254__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7254__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7254__$1);
var G__7262 = cljs.core.chunk_rest(seq__7254__$1);
var G__7263 = c__4351__auto__;
var G__7264 = cljs.core.count(c__4351__auto__);
var G__7265 = (0);
seq__7254 = G__7262;
chunk__7255 = G__7263;
count__7256 = G__7264;
i__7257 = G__7265;
continue;
} else {
var sl_node = cljs.core.first(seq__7254__$1);
(sl_node["innerHTML"] = html_content);


var G__7266 = cljs.core.next(seq__7254__$1);
var G__7267 = null;
var G__7268 = (0);
var G__7269 = (0);
seq__7254 = G__7266;
chunk__7255 = G__7267;
count__7256 = G__7268;
i__7257 = G__7269;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (selected_nodes["innerHTML"] = html_content);
}
});
/**
 * Get outerHTML property of first element feched by selector
 */
js_lib.core.get_outer_html = (function js_lib$core$get_outer_html(selector){
var sl_node = js_lib.core.query_selector(selector);
return (sl_node["outerHTML"]);
});
/**
 * Set html-content as outerHTML property of elements feched by selector
 */
js_lib.core.set_outer_html = (function js_lib$core$set_outer_html(selector,html_content){
var selected_nodes = js_lib.core.query_selector_all(selector);
var seq__7270 = cljs.core.seq(selected_nodes);
var chunk__7271 = null;
var count__7272 = (0);
var i__7273 = (0);
while(true){
if((i__7273 < count__7272)){
var sl_node = chunk__7271.cljs$core$IIndexed$_nth$arity$2(null,i__7273);
(sl_node["outerHTML"] = html_content);


var G__7274 = seq__7270;
var G__7275 = chunk__7271;
var G__7276 = count__7272;
var G__7277 = (i__7273 + (1));
seq__7270 = G__7274;
chunk__7271 = G__7275;
count__7272 = G__7276;
i__7273 = G__7277;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7270);
if(temp__5457__auto__){
var seq__7270__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7270__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7270__$1);
var G__7278 = cljs.core.chunk_rest(seq__7270__$1);
var G__7279 = c__4351__auto__;
var G__7280 = cljs.core.count(c__4351__auto__);
var G__7281 = (0);
seq__7270 = G__7278;
chunk__7271 = G__7279;
count__7272 = G__7280;
i__7273 = G__7281;
continue;
} else {
var sl_node = cljs.core.first(seq__7270__$1);
(sl_node["outerHTML"] = html_content);


var G__7282 = cljs.core.next(seq__7270__$1);
var G__7283 = null;
var G__7284 = (0);
var G__7285 = (0);
seq__7270 = G__7282;
chunk__7271 = G__7283;
count__7272 = G__7284;
i__7273 = G__7285;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Get values of property selectedOptions and pack them in vector
 */
js_lib.core.get_selected_options = (function js_lib$core$get_selected_options(element){
var element__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector,element);
var slctd_optns = js_lib.core.convert_to_vector((element__$1["selectedOptions"]));
var slctd_optns_vec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__7286_7298 = cljs.core.seq(slctd_optns);
var chunk__7287_7299 = null;
var count__7288_7300 = (0);
var i__7289_7301 = (0);
while(true){
if((i__7289_7301 < count__7288_7300)){
var slctd_optn_7302 = chunk__7287_7299.cljs$core$IIndexed$_nth$arity$2(null,i__7289_7301);
var sl_attrs_7303 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__7290_7304 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(((slctd_optn_7302["attributes"])["length"])));
var chunk__7291_7305 = null;
var count__7292_7306 = (0);
var i__7293_7307 = (0);
while(true){
if((i__7293_7307 < count__7292_7306)){
var i_7308 = chunk__7291_7305.cljs$core$IIndexed$_nth$arity$2(null,i__7293_7307);
var attr_7309 = ((slctd_optn_7302["attributes"])[i_7308]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sl_attrs_7303,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((attr_7309["name"])),(attr_7309["value"])]));


var G__7310 = seq__7290_7304;
var G__7311 = chunk__7291_7305;
var G__7312 = count__7292_7306;
var G__7313 = (i__7293_7307 + (1));
seq__7290_7304 = G__7310;
chunk__7291_7305 = G__7311;
count__7292_7306 = G__7312;
i__7293_7307 = G__7313;
continue;
} else {
var temp__5457__auto___7314 = cljs.core.seq(seq__7290_7304);
if(temp__5457__auto___7314){
var seq__7290_7315__$1 = temp__5457__auto___7314;
if(cljs.core.chunked_seq_QMARK_(seq__7290_7315__$1)){
var c__4351__auto___7316 = cljs.core.chunk_first(seq__7290_7315__$1);
var G__7317 = cljs.core.chunk_rest(seq__7290_7315__$1);
var G__7318 = c__4351__auto___7316;
var G__7319 = cljs.core.count(c__4351__auto___7316);
var G__7320 = (0);
seq__7290_7304 = G__7317;
chunk__7291_7305 = G__7318;
count__7292_7306 = G__7319;
i__7293_7307 = G__7320;
continue;
} else {
var i_7321 = cljs.core.first(seq__7290_7315__$1);
var attr_7322 = ((slctd_optn_7302["attributes"])[i_7321]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sl_attrs_7303,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((attr_7322["name"])),(attr_7322["value"])]));


var G__7323 = cljs.core.next(seq__7290_7315__$1);
var G__7324 = null;
var G__7325 = (0);
var G__7326 = (0);
seq__7290_7304 = G__7323;
chunk__7291_7305 = G__7324;
count__7292_7306 = G__7325;
i__7293_7307 = G__7326;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sl_attrs_7303,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("label"),(slctd_optn_7302["innerHTML"])]));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(slctd_optns_vec,cljs.core.conj,cljs.core.deref(sl_attrs_7303));


var G__7327 = seq__7286_7298;
var G__7328 = chunk__7287_7299;
var G__7329 = count__7288_7300;
var G__7330 = (i__7289_7301 + (1));
seq__7286_7298 = G__7327;
chunk__7287_7299 = G__7328;
count__7288_7300 = G__7329;
i__7289_7301 = G__7330;
continue;
} else {
var temp__5457__auto___7331 = cljs.core.seq(seq__7286_7298);
if(temp__5457__auto___7331){
var seq__7286_7332__$1 = temp__5457__auto___7331;
if(cljs.core.chunked_seq_QMARK_(seq__7286_7332__$1)){
var c__4351__auto___7333 = cljs.core.chunk_first(seq__7286_7332__$1);
var G__7334 = cljs.core.chunk_rest(seq__7286_7332__$1);
var G__7335 = c__4351__auto___7333;
var G__7336 = cljs.core.count(c__4351__auto___7333);
var G__7337 = (0);
seq__7286_7298 = G__7334;
chunk__7287_7299 = G__7335;
count__7288_7300 = G__7336;
i__7289_7301 = G__7337;
continue;
} else {
var slctd_optn_7338 = cljs.core.first(seq__7286_7332__$1);
var sl_attrs_7339 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__7294_7340 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(((slctd_optn_7338["attributes"])["length"])));
var chunk__7295_7341 = null;
var count__7296_7342 = (0);
var i__7297_7343 = (0);
while(true){
if((i__7297_7343 < count__7296_7342)){
var i_7344 = chunk__7295_7341.cljs$core$IIndexed$_nth$arity$2(null,i__7297_7343);
var attr_7345 = ((slctd_optn_7338["attributes"])[i_7344]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sl_attrs_7339,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((attr_7345["name"])),(attr_7345["value"])]));


var G__7346 = seq__7294_7340;
var G__7347 = chunk__7295_7341;
var G__7348 = count__7296_7342;
var G__7349 = (i__7297_7343 + (1));
seq__7294_7340 = G__7346;
chunk__7295_7341 = G__7347;
count__7296_7342 = G__7348;
i__7297_7343 = G__7349;
continue;
} else {
var temp__5457__auto___7350__$1 = cljs.core.seq(seq__7294_7340);
if(temp__5457__auto___7350__$1){
var seq__7294_7351__$1 = temp__5457__auto___7350__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7294_7351__$1)){
var c__4351__auto___7352 = cljs.core.chunk_first(seq__7294_7351__$1);
var G__7353 = cljs.core.chunk_rest(seq__7294_7351__$1);
var G__7354 = c__4351__auto___7352;
var G__7355 = cljs.core.count(c__4351__auto___7352);
var G__7356 = (0);
seq__7294_7340 = G__7353;
chunk__7295_7341 = G__7354;
count__7296_7342 = G__7355;
i__7297_7343 = G__7356;
continue;
} else {
var i_7357 = cljs.core.first(seq__7294_7351__$1);
var attr_7358 = ((slctd_optn_7338["attributes"])[i_7357]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sl_attrs_7339,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((attr_7358["name"])),(attr_7358["value"])]));


var G__7359 = cljs.core.next(seq__7294_7351__$1);
var G__7360 = null;
var G__7361 = (0);
var G__7362 = (0);
seq__7294_7340 = G__7359;
chunk__7295_7341 = G__7360;
count__7296_7342 = G__7361;
i__7297_7343 = G__7362;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sl_attrs_7339,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("label"),(slctd_optn_7338["innerHTML"])]));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(slctd_optns_vec,cljs.core.conj,cljs.core.deref(sl_attrs_7339));


var G__7363 = cljs.core.next(seq__7286_7332__$1);
var G__7364 = null;
var G__7365 = (0);
var G__7366 = (0);
seq__7286_7298 = G__7363;
chunk__7287_7299 = G__7364;
count__7288_7300 = G__7365;
i__7289_7301 = G__7366;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(slctd_optns_vec)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(slctd_optns_vec)),(1))){
return cljs.core.first(cljs.core.deref(slctd_optns_vec));
} else {
return cljs.core.deref(slctd_optns_vec);
}
} else {
return null;
}
});
/**
 * Add function to event for particular element
 */
js_lib.core.add_fn_to_event = (function js_lib$core$add_fn_to_event(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7379 = arguments.length;
var i__4532__auto___7380 = (0);
while(true){
if((i__4532__auto___7380 < len__4531__auto___7379)){
args__4534__auto__.push((arguments[i__4532__auto___7380]));

var G__7381 = (i__4532__auto___7380 + (1));
i__4532__auto___7380 = G__7381;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return js_lib.core.add_fn_to_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

js_lib.core.add_fn_to_event.cljs$core$IFn$_invoke$arity$variadic = (function (element,event_type,event_function,p__7371){
var vec__7372 = p__7371;
var fn_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7372,(0),null);
var event_funcs = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),"-funcs"].join('');
(element[event_funcs] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((element[event_funcs]),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_function)].join(''),((function (event_funcs,vec__7372,fn_params){
return (function (){
return (event_function.cljs$core$IFn$_invoke$arity$2 ? event_function.cljs$core$IFn$_invoke$arity$2(fn_params,element) : event_function.call(null,fn_params,element));
});})(event_funcs,vec__7372,fn_params))
));

if(cljs.core.truth_((element[event_type]))){
return null;
} else {
return (element[event_type] = ((function (event_funcs,vec__7372,fn_params){
return (function (){
var seq__7375 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,(element[event_funcs]))));
var chunk__7376 = null;
var count__7377 = (0);
var i__7378 = (0);
while(true){
if((i__7378 < count__7377)){
var func = chunk__7376.cljs$core$IIndexed$_nth$arity$2(null,i__7378);
(func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));


var G__7382 = seq__7375;
var G__7383 = chunk__7376;
var G__7384 = count__7377;
var G__7385 = (i__7378 + (1));
seq__7375 = G__7382;
chunk__7376 = G__7383;
count__7377 = G__7384;
i__7378 = G__7385;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7375);
if(temp__5457__auto__){
var seq__7375__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7375__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7375__$1);
var G__7386 = cljs.core.chunk_rest(seq__7375__$1);
var G__7387 = c__4351__auto__;
var G__7388 = cljs.core.count(c__4351__auto__);
var G__7389 = (0);
seq__7375 = G__7386;
chunk__7376 = G__7387;
count__7377 = G__7388;
i__7378 = G__7389;
continue;
} else {
var func = cljs.core.first(seq__7375__$1);
(func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));


var G__7390 = cljs.core.next(seq__7375__$1);
var G__7391 = null;
var G__7392 = (0);
var G__7393 = (0);
seq__7375 = G__7390;
chunk__7376 = G__7391;
count__7377 = G__7392;
i__7378 = G__7393;
continue;
}
} else {
return null;
}
}
break;
}
});})(event_funcs,vec__7372,fn_params))
);
}
});

js_lib.core.add_fn_to_event.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
js_lib.core.add_fn_to_event.cljs$lang$applyTo = (function (seq7367){
var G__7368 = cljs.core.first(seq7367);
var seq7367__$1 = cljs.core.next(seq7367);
var G__7369 = cljs.core.first(seq7367__$1);
var seq7367__$2 = cljs.core.next(seq7367__$1);
var G__7370 = cljs.core.first(seq7367__$2);
var seq7367__$3 = cljs.core.next(seq7367__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7368,G__7369,G__7370,seq7367__$3);
});

/**
 * Bind function to event on elements fetched by selector
 *   
 * (event element "onclick" event-function [1 2 3])
 * 
 * element         Represents selector or html element
 * event-type      Represents html event, like onclick, onload...
 * event-function  Represents function name
 * [fn-params]     Represents vector that will be passed to event function
 */
js_lib.core.event = (function js_lib$core$event(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7406 = arguments.length;
var i__4532__auto___7407 = (0);
while(true){
if((i__4532__auto___7407 < len__4531__auto___7406)){
args__4534__auto__.push((arguments[i__4532__auto___7407]));

var G__7408 = (i__4532__auto___7407 + (1));
i__4532__auto___7407 = G__7408;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return js_lib.core.event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

js_lib.core.event.cljs$core$IFn$_invoke$arity$variadic = (function (element,event_type,event_function,p__7398){
var vec__7399 = p__7398;
var fn_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7399,(0),null);
var selected_nodes = js_lib.core.determine_param_type(js_lib.core.query_selector_all,element);
if(cljs.core.vector_QMARK_(selected_nodes)){
var seq__7402 = cljs.core.seq(selected_nodes);
var chunk__7403 = null;
var count__7404 = (0);
var i__7405 = (0);
while(true){
if((i__7405 < count__7404)){
var sl_node = chunk__7403.cljs$core$IIndexed$_nth$arity$2(null,i__7405);
js_lib.core.add_fn_to_event.cljs$core$IFn$_invoke$arity$variadic(sl_node,event_type,event_function,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_params], 0));


var G__7409 = seq__7402;
var G__7410 = chunk__7403;
var G__7411 = count__7404;
var G__7412 = (i__7405 + (1));
seq__7402 = G__7409;
chunk__7403 = G__7410;
count__7404 = G__7411;
i__7405 = G__7412;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7402);
if(temp__5457__auto__){
var seq__7402__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7402__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7402__$1);
var G__7413 = cljs.core.chunk_rest(seq__7402__$1);
var G__7414 = c__4351__auto__;
var G__7415 = cljs.core.count(c__4351__auto__);
var G__7416 = (0);
seq__7402 = G__7413;
chunk__7403 = G__7414;
count__7404 = G__7415;
i__7405 = G__7416;
continue;
} else {
var sl_node = cljs.core.first(seq__7402__$1);
js_lib.core.add_fn_to_event.cljs$core$IFn$_invoke$arity$variadic(sl_node,event_type,event_function,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_params], 0));


var G__7417 = cljs.core.next(seq__7402__$1);
var G__7418 = null;
var G__7419 = (0);
var G__7420 = (0);
seq__7402 = G__7417;
chunk__7403 = G__7418;
count__7404 = G__7419;
i__7405 = G__7420;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return js_lib.core.add_fn_to_event.cljs$core$IFn$_invoke$arity$variadic(selected_nodes,event_type,event_function,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_params], 0));
}
});

js_lib.core.event.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
js_lib.core.event.cljs$lang$applyTo = (function (seq7394){
var G__7395 = cljs.core.first(seq7394);
var seq7394__$1 = cljs.core.next(seq7394);
var G__7396 = cljs.core.first(seq7394__$1);
var seq7394__$2 = cljs.core.next(seq7394__$1);
var G__7397 = cljs.core.first(seq7394__$2);
var seq7394__$3 = cljs.core.next(seq7394__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7395,G__7396,G__7397,seq7394__$3);
});

/**
 * Remove particular function from executing after an event has occurred
 */
js_lib.core.remove_fn_from_event = (function js_lib$core$remove_fn_from_event(element,event_type,event_function){
var event_funcs = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),"-funcs"].join('');
(element[event_funcs] = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((element[event_funcs]),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_function)].join('')));

if(cljs.core.empty_QMARK_((element[event_funcs]))){
(element[event_type] = null);

return (element[event_funcs] = null);
} else {
return null;
}
});
/**
 * Remove function from event on elements fetched by selector
 *   
 * (remove-event element "onclick" event-function))
 * 
 * element         Represents selector or html element
 * event-type      Represents html event, like onclick, onload...
 * event-function  Represents function name
 */
js_lib.core.remove_event = (function js_lib$core$remove_event(element,event_type,event_function){
var selected_nodes = js_lib.core.determine_param_type(js_lib.core.query_selector_all,element);
if(cljs.core.vector_QMARK_(selected_nodes)){
var seq__7421 = cljs.core.seq(selected_nodes);
var chunk__7422 = null;
var count__7423 = (0);
var i__7424 = (0);
while(true){
if((i__7424 < count__7423)){
var sl_node = chunk__7422.cljs$core$IIndexed$_nth$arity$2(null,i__7424);
js_lib.core.remove_fn_from_event(sl_node,event_type,event_function);


var G__7425 = seq__7421;
var G__7426 = chunk__7422;
var G__7427 = count__7423;
var G__7428 = (i__7424 + (1));
seq__7421 = G__7425;
chunk__7422 = G__7426;
count__7423 = G__7427;
i__7424 = G__7428;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7421);
if(temp__5457__auto__){
var seq__7421__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7421__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7421__$1);
var G__7429 = cljs.core.chunk_rest(seq__7421__$1);
var G__7430 = c__4351__auto__;
var G__7431 = cljs.core.count(c__4351__auto__);
var G__7432 = (0);
seq__7421 = G__7429;
chunk__7422 = G__7430;
count__7423 = G__7431;
i__7424 = G__7432;
continue;
} else {
var sl_node = cljs.core.first(seq__7421__$1);
js_lib.core.remove_fn_from_event(sl_node,event_type,event_function);


var G__7433 = cljs.core.next(seq__7421__$1);
var G__7434 = null;
var G__7435 = (0);
var G__7436 = (0);
seq__7421 = G__7433;
chunk__7422 = G__7434;
count__7423 = G__7435;
i__7424 = G__7436;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return js_lib.core.remove_fn_from_event(element,event_type,event_function);
}
});
/**
 * Remove all functions from executing after an event has occurred on particular element
 */
js_lib.core.remove_all_fns_from_event = (function js_lib$core$remove_all_fns_from_event(element,event_type){
var event_funcs = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),"-funcs"].join('');
(element[event_type] = null);

return (element[event_funcs] = null);
});
/**
 * Remove all functions from executing after an event has occurred on particular element/s
 */
js_lib.core.remove_all_event = (function js_lib$core$remove_all_event(element,event_type){
var selected_nodes = js_lib.core.determine_param_type(js_lib.core.query_selector_all,element);
if(cljs.core.vector_QMARK_(selected_nodes)){
var seq__7437 = cljs.core.seq(selected_nodes);
var chunk__7438 = null;
var count__7439 = (0);
var i__7440 = (0);
while(true){
if((i__7440 < count__7439)){
var sl_node = chunk__7438.cljs$core$IIndexed$_nth$arity$2(null,i__7440);
js_lib.core.remove_all_fns_from_event(sl_node,event_type);


var G__7441 = seq__7437;
var G__7442 = chunk__7438;
var G__7443 = count__7439;
var G__7444 = (i__7440 + (1));
seq__7437 = G__7441;
chunk__7438 = G__7442;
count__7439 = G__7443;
i__7440 = G__7444;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7437);
if(temp__5457__auto__){
var seq__7437__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7437__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7437__$1);
var G__7445 = cljs.core.chunk_rest(seq__7437__$1);
var G__7446 = c__4351__auto__;
var G__7447 = cljs.core.count(c__4351__auto__);
var G__7448 = (0);
seq__7437 = G__7445;
chunk__7438 = G__7446;
count__7439 = G__7447;
i__7440 = G__7448;
continue;
} else {
var sl_node = cljs.core.first(seq__7437__$1);
js_lib.core.remove_all_fns_from_event(sl_node,event_type);


var G__7449 = cljs.core.next(seq__7437__$1);
var G__7450 = null;
var G__7451 = (0);
var G__7452 = (0);
seq__7437 = G__7449;
chunk__7438 = G__7450;
count__7439 = G__7451;
i__7440 = G__7452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return js_lib.core.remove_all_fns_from_event(element,event_type);
}
});
/**
 * Prepend html string in elements fetched by selector
 */
js_lib.core.prepend_element = (function js_lib$core$prepend_element(selector,html_content){
var selected_nodes = js_lib.core.query_selector_all(selector);
var child_nodes = js_lib.core.determine_param_type(js_lib.core.parse_html,html_content);
var seq__7453 = cljs.core.seq(selected_nodes);
var chunk__7454 = null;
var count__7455 = (0);
var i__7456 = (0);
while(true){
if((i__7456 < count__7455)){
var sl_node = chunk__7454.cljs$core$IIndexed$_nth$arity$2(null,i__7456);
if(cljs.core.vector_QMARK_(child_nodes)){
var seq__7457_7465 = cljs.core.seq(child_nodes);
var chunk__7458_7466 = null;
var count__7459_7467 = (0);
var i__7460_7468 = (0);
while(true){
if((i__7460_7468 < count__7459_7467)){
var ch_node_7469 = chunk__7458_7466.cljs$core$IIndexed$_nth$arity$2(null,i__7460_7468);
var insert_before_this_7470 = cljs.core.first(js_lib.core.get_child_nodes(sl_node));
sl_node.insertBefore(ch_node_7469,insert_before_this_7470);


var G__7471 = seq__7457_7465;
var G__7472 = chunk__7458_7466;
var G__7473 = count__7459_7467;
var G__7474 = (i__7460_7468 + (1));
seq__7457_7465 = G__7471;
chunk__7458_7466 = G__7472;
count__7459_7467 = G__7473;
i__7460_7468 = G__7474;
continue;
} else {
var temp__5457__auto___7475 = cljs.core.seq(seq__7457_7465);
if(temp__5457__auto___7475){
var seq__7457_7476__$1 = temp__5457__auto___7475;
if(cljs.core.chunked_seq_QMARK_(seq__7457_7476__$1)){
var c__4351__auto___7477 = cljs.core.chunk_first(seq__7457_7476__$1);
var G__7478 = cljs.core.chunk_rest(seq__7457_7476__$1);
var G__7479 = c__4351__auto___7477;
var G__7480 = cljs.core.count(c__4351__auto___7477);
var G__7481 = (0);
seq__7457_7465 = G__7478;
chunk__7458_7466 = G__7479;
count__7459_7467 = G__7480;
i__7460_7468 = G__7481;
continue;
} else {
var ch_node_7482 = cljs.core.first(seq__7457_7476__$1);
var insert_before_this_7483 = cljs.core.first(js_lib.core.get_child_nodes(sl_node));
sl_node.insertBefore(ch_node_7482,insert_before_this_7483);


var G__7484 = cljs.core.next(seq__7457_7476__$1);
var G__7485 = null;
var G__7486 = (0);
var G__7487 = (0);
seq__7457_7465 = G__7484;
chunk__7458_7466 = G__7485;
count__7459_7467 = G__7486;
i__7460_7468 = G__7487;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(js_lib.core.html_QMARK_(child_nodes))){
var insert_before_this_7488 = cljs.core.first(js_lib.core.get_child_nodes(sl_node));
sl_node.insertBefore(child_nodes,insert_before_this_7488);
} else {
}


var G__7489 = seq__7453;
var G__7490 = chunk__7454;
var G__7491 = count__7455;
var G__7492 = (i__7456 + (1));
seq__7453 = G__7489;
chunk__7454 = G__7490;
count__7455 = G__7491;
i__7456 = G__7492;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7453);
if(temp__5457__auto__){
var seq__7453__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7453__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7453__$1);
var G__7493 = cljs.core.chunk_rest(seq__7453__$1);
var G__7494 = c__4351__auto__;
var G__7495 = cljs.core.count(c__4351__auto__);
var G__7496 = (0);
seq__7453 = G__7493;
chunk__7454 = G__7494;
count__7455 = G__7495;
i__7456 = G__7496;
continue;
} else {
var sl_node = cljs.core.first(seq__7453__$1);
if(cljs.core.vector_QMARK_(child_nodes)){
var seq__7461_7497 = cljs.core.seq(child_nodes);
var chunk__7462_7498 = null;
var count__7463_7499 = (0);
var i__7464_7500 = (0);
while(true){
if((i__7464_7500 < count__7463_7499)){
var ch_node_7501 = chunk__7462_7498.cljs$core$IIndexed$_nth$arity$2(null,i__7464_7500);
var insert_before_this_7502 = cljs.core.first(js_lib.core.get_child_nodes(sl_node));
sl_node.insertBefore(ch_node_7501,insert_before_this_7502);


var G__7503 = seq__7461_7497;
var G__7504 = chunk__7462_7498;
var G__7505 = count__7463_7499;
var G__7506 = (i__7464_7500 + (1));
seq__7461_7497 = G__7503;
chunk__7462_7498 = G__7504;
count__7463_7499 = G__7505;
i__7464_7500 = G__7506;
continue;
} else {
var temp__5457__auto___7507__$1 = cljs.core.seq(seq__7461_7497);
if(temp__5457__auto___7507__$1){
var seq__7461_7508__$1 = temp__5457__auto___7507__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7461_7508__$1)){
var c__4351__auto___7509 = cljs.core.chunk_first(seq__7461_7508__$1);
var G__7510 = cljs.core.chunk_rest(seq__7461_7508__$1);
var G__7511 = c__4351__auto___7509;
var G__7512 = cljs.core.count(c__4351__auto___7509);
var G__7513 = (0);
seq__7461_7497 = G__7510;
chunk__7462_7498 = G__7511;
count__7463_7499 = G__7512;
i__7464_7500 = G__7513;
continue;
} else {
var ch_node_7514 = cljs.core.first(seq__7461_7508__$1);
var insert_before_this_7515 = cljs.core.first(js_lib.core.get_child_nodes(sl_node));
sl_node.insertBefore(ch_node_7514,insert_before_this_7515);


var G__7516 = cljs.core.next(seq__7461_7508__$1);
var G__7517 = null;
var G__7518 = (0);
var G__7519 = (0);
seq__7461_7497 = G__7516;
chunk__7462_7498 = G__7517;
count__7463_7499 = G__7518;
i__7464_7500 = G__7519;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(js_lib.core.html_QMARK_(child_nodes))){
var insert_before_this_7520 = cljs.core.first(js_lib.core.get_child_nodes(sl_node));
sl_node.insertBefore(child_nodes,insert_before_this_7520);
} else {
}


var G__7521 = cljs.core.next(seq__7453__$1);
var G__7522 = null;
var G__7523 = (0);
var G__7524 = (0);
seq__7453 = G__7521;
chunk__7454 = G__7522;
count__7455 = G__7523;
i__7456 = G__7524;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Append html string in elements fetched by selector
 */
js_lib.core.append_element = (function js_lib$core$append_element(selector,html_content){
var selected_nodes = js_lib.core.determine_param_type(js_lib.core.query_selector_all,selector);
var child_nodes = js_lib.core.determine_param_type(js_lib.core.parse_html,html_content);
if(cljs.core.vector_QMARK_(selected_nodes)){
var seq__7525 = cljs.core.seq(selected_nodes);
var chunk__7526 = null;
var count__7527 = (0);
var i__7528 = (0);
while(true){
if((i__7528 < count__7527)){
var sl_node = chunk__7526.cljs$core$IIndexed$_nth$arity$2(null,i__7528);
if(cljs.core.vector_QMARK_(child_nodes)){
var seq__7529_7541 = cljs.core.seq(child_nodes);
var chunk__7530_7542 = null;
var count__7531_7543 = (0);
var i__7532_7544 = (0);
while(true){
if((i__7532_7544 < count__7531_7543)){
var ch_node_7545 = chunk__7530_7542.cljs$core$IIndexed$_nth$arity$2(null,i__7532_7544);
sl_node.appendChild(ch_node_7545);


var G__7546 = seq__7529_7541;
var G__7547 = chunk__7530_7542;
var G__7548 = count__7531_7543;
var G__7549 = (i__7532_7544 + (1));
seq__7529_7541 = G__7546;
chunk__7530_7542 = G__7547;
count__7531_7543 = G__7548;
i__7532_7544 = G__7549;
continue;
} else {
var temp__5457__auto___7550 = cljs.core.seq(seq__7529_7541);
if(temp__5457__auto___7550){
var seq__7529_7551__$1 = temp__5457__auto___7550;
if(cljs.core.chunked_seq_QMARK_(seq__7529_7551__$1)){
var c__4351__auto___7552 = cljs.core.chunk_first(seq__7529_7551__$1);
var G__7553 = cljs.core.chunk_rest(seq__7529_7551__$1);
var G__7554 = c__4351__auto___7552;
var G__7555 = cljs.core.count(c__4351__auto___7552);
var G__7556 = (0);
seq__7529_7541 = G__7553;
chunk__7530_7542 = G__7554;
count__7531_7543 = G__7555;
i__7532_7544 = G__7556;
continue;
} else {
var ch_node_7557 = cljs.core.first(seq__7529_7551__$1);
sl_node.appendChild(ch_node_7557);


var G__7558 = cljs.core.next(seq__7529_7551__$1);
var G__7559 = null;
var G__7560 = (0);
var G__7561 = (0);
seq__7529_7541 = G__7558;
chunk__7530_7542 = G__7559;
count__7531_7543 = G__7560;
i__7532_7544 = G__7561;
continue;
}
} else {
}
}
break;
}
} else {
sl_node.appendChild(child_nodes);
}


var G__7562 = seq__7525;
var G__7563 = chunk__7526;
var G__7564 = count__7527;
var G__7565 = (i__7528 + (1));
seq__7525 = G__7562;
chunk__7526 = G__7563;
count__7527 = G__7564;
i__7528 = G__7565;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7525);
if(temp__5457__auto__){
var seq__7525__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7525__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7525__$1);
var G__7566 = cljs.core.chunk_rest(seq__7525__$1);
var G__7567 = c__4351__auto__;
var G__7568 = cljs.core.count(c__4351__auto__);
var G__7569 = (0);
seq__7525 = G__7566;
chunk__7526 = G__7567;
count__7527 = G__7568;
i__7528 = G__7569;
continue;
} else {
var sl_node = cljs.core.first(seq__7525__$1);
if(cljs.core.vector_QMARK_(child_nodes)){
var seq__7533_7570 = cljs.core.seq(child_nodes);
var chunk__7534_7571 = null;
var count__7535_7572 = (0);
var i__7536_7573 = (0);
while(true){
if((i__7536_7573 < count__7535_7572)){
var ch_node_7574 = chunk__7534_7571.cljs$core$IIndexed$_nth$arity$2(null,i__7536_7573);
sl_node.appendChild(ch_node_7574);


var G__7575 = seq__7533_7570;
var G__7576 = chunk__7534_7571;
var G__7577 = count__7535_7572;
var G__7578 = (i__7536_7573 + (1));
seq__7533_7570 = G__7575;
chunk__7534_7571 = G__7576;
count__7535_7572 = G__7577;
i__7536_7573 = G__7578;
continue;
} else {
var temp__5457__auto___7579__$1 = cljs.core.seq(seq__7533_7570);
if(temp__5457__auto___7579__$1){
var seq__7533_7580__$1 = temp__5457__auto___7579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7533_7580__$1)){
var c__4351__auto___7581 = cljs.core.chunk_first(seq__7533_7580__$1);
var G__7582 = cljs.core.chunk_rest(seq__7533_7580__$1);
var G__7583 = c__4351__auto___7581;
var G__7584 = cljs.core.count(c__4351__auto___7581);
var G__7585 = (0);
seq__7533_7570 = G__7582;
chunk__7534_7571 = G__7583;
count__7535_7572 = G__7584;
i__7536_7573 = G__7585;
continue;
} else {
var ch_node_7586 = cljs.core.first(seq__7533_7580__$1);
sl_node.appendChild(ch_node_7586);


var G__7587 = cljs.core.next(seq__7533_7580__$1);
var G__7588 = null;
var G__7589 = (0);
var G__7590 = (0);
seq__7533_7570 = G__7587;
chunk__7534_7571 = G__7588;
count__7535_7572 = G__7589;
i__7536_7573 = G__7590;
continue;
}
} else {
}
}
break;
}
} else {
sl_node.appendChild(child_nodes);
}


var G__7591 = cljs.core.next(seq__7525__$1);
var G__7592 = null;
var G__7593 = (0);
var G__7594 = (0);
seq__7525 = G__7591;
chunk__7526 = G__7592;
count__7527 = G__7593;
i__7528 = G__7594;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.vector_QMARK_(child_nodes)){
var seq__7537 = cljs.core.seq(child_nodes);
var chunk__7538 = null;
var count__7539 = (0);
var i__7540 = (0);
while(true){
if((i__7540 < count__7539)){
var ch_node = chunk__7538.cljs$core$IIndexed$_nth$arity$2(null,i__7540);
selected_nodes.appendChild(ch_node);


var G__7595 = seq__7537;
var G__7596 = chunk__7538;
var G__7597 = count__7539;
var G__7598 = (i__7540 + (1));
seq__7537 = G__7595;
chunk__7538 = G__7596;
count__7539 = G__7597;
i__7540 = G__7598;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7537);
if(temp__5457__auto__){
var seq__7537__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7537__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7537__$1);
var G__7599 = cljs.core.chunk_rest(seq__7537__$1);
var G__7600 = c__4351__auto__;
var G__7601 = cljs.core.count(c__4351__auto__);
var G__7602 = (0);
seq__7537 = G__7599;
chunk__7538 = G__7600;
count__7539 = G__7601;
i__7540 = G__7602;
continue;
} else {
var ch_node = cljs.core.first(seq__7537__$1);
selected_nodes.appendChild(ch_node);


var G__7603 = cljs.core.next(seq__7537__$1);
var G__7604 = null;
var G__7605 = (0);
var G__7606 = (0);
seq__7537 = G__7603;
chunk__7538 = G__7604;
count__7539 = G__7605;
i__7540 = G__7606;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return selected_nodes.appendChild(child_nodes);
}
}
});
/**
 * Empty fetched elements by selector and append html string
 */
js_lib.core.content = (function js_lib$core$content(selector,html_content){
js_lib.core.empty_nodes(selector);

return js_lib.core.append_element(selector,html_content);
});
/**
 * Remove elements fetched by selector
 */
js_lib.core.remove_element = (function js_lib$core$remove_element(selector){
var selected_nodes = js_lib.core.determine_param_type(js_lib.core.query_selector_all,selector);
if(cljs.core.vector_QMARK_(selected_nodes)){
var seq__7607_7611 = cljs.core.seq(selected_nodes);
var chunk__7608_7612 = null;
var count__7609_7613 = (0);
var i__7610_7614 = (0);
while(true){
if((i__7610_7614 < count__7609_7613)){
var sl_node_7615 = chunk__7608_7612.cljs$core$IIndexed$_nth$arity$2(null,i__7610_7614);
js_lib.core.get_parent(sl_node_7615).removeChild(sl_node_7615);


var G__7616 = seq__7607_7611;
var G__7617 = chunk__7608_7612;
var G__7618 = count__7609_7613;
var G__7619 = (i__7610_7614 + (1));
seq__7607_7611 = G__7616;
chunk__7608_7612 = G__7617;
count__7609_7613 = G__7618;
i__7610_7614 = G__7619;
continue;
} else {
var temp__5457__auto___7620 = cljs.core.seq(seq__7607_7611);
if(temp__5457__auto___7620){
var seq__7607_7621__$1 = temp__5457__auto___7620;
if(cljs.core.chunked_seq_QMARK_(seq__7607_7621__$1)){
var c__4351__auto___7622 = cljs.core.chunk_first(seq__7607_7621__$1);
var G__7623 = cljs.core.chunk_rest(seq__7607_7621__$1);
var G__7624 = c__4351__auto___7622;
var G__7625 = cljs.core.count(c__4351__auto___7622);
var G__7626 = (0);
seq__7607_7611 = G__7623;
chunk__7608_7612 = G__7624;
count__7609_7613 = G__7625;
i__7610_7614 = G__7626;
continue;
} else {
var sl_node_7627 = cljs.core.first(seq__7607_7621__$1);
js_lib.core.get_parent(sl_node_7627).removeChild(sl_node_7627);


var G__7628 = cljs.core.next(seq__7607_7621__$1);
var G__7629 = null;
var G__7630 = (0);
var G__7631 = (0);
seq__7607_7611 = G__7628;
chunk__7608_7612 = G__7629;
count__7609_7613 = G__7630;
i__7610_7614 = G__7631;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(js_lib.core.html_QMARK_(selected_nodes))){
return js_lib.core.get_parent(selected_nodes).removeChild(selected_nodes);
} else {
return null;
}
});
/**
 * Remove content from elements fetched by selector
 */
js_lib.core.remove_element_content = (function js_lib$core$remove_element_content(selector){
var selected_nodes = js_lib.core.query_selector_all(selector);
var seq__7632 = cljs.core.seq(selected_nodes);
var chunk__7633 = null;
var count__7634 = (0);
var i__7635 = (0);
while(true){
if((i__7635 < count__7634)){
var sl_node = chunk__7633.cljs$core$IIndexed$_nth$arity$2(null,i__7635);
(sl_node["innerHTML"] = "");


var G__7636 = seq__7632;
var G__7637 = chunk__7633;
var G__7638 = count__7634;
var G__7639 = (i__7635 + (1));
seq__7632 = G__7636;
chunk__7633 = G__7637;
count__7634 = G__7638;
i__7635 = G__7639;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7632);
if(temp__5457__auto__){
var seq__7632__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7632__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7632__$1);
var G__7640 = cljs.core.chunk_rest(seq__7632__$1);
var G__7641 = c__4351__auto__;
var G__7642 = cljs.core.count(c__4351__auto__);
var G__7643 = (0);
seq__7632 = G__7640;
chunk__7633 = G__7641;
count__7634 = G__7642;
i__7635 = G__7643;
continue;
} else {
var sl_node = cljs.core.first(seq__7632__$1);
(sl_node["innerHTML"] = "");


var G__7644 = cljs.core.next(seq__7632__$1);
var G__7645 = null;
var G__7646 = (0);
var G__7647 = (0);
seq__7632 = G__7644;
chunk__7633 = G__7645;
count__7634 = G__7646;
i__7635 = G__7647;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Remove elements fetched by selector
 */
js_lib.core.remove_element_from_element = (function js_lib$core$remove_element_from_element(element,selector){
var element_nodes = js_lib.core.determine_param_type(js_lib.core.query_selector_all,element);
var seq__7648 = cljs.core.seq(element_nodes);
var chunk__7649 = null;
var count__7650 = (0);
var i__7651 = (0);
while(true){
if((i__7651 < count__7650)){
var element_node = chunk__7649.cljs$core$IIndexed$_nth$arity$2(null,i__7651);
var selected_nodes_7660 = js_lib.core.query_selector_all_on_element(element_node,selector);
var seq__7652_7661 = cljs.core.seq(selected_nodes_7660);
var chunk__7653_7662 = null;
var count__7654_7663 = (0);
var i__7655_7664 = (0);
while(true){
if((i__7655_7664 < count__7654_7663)){
var sl_node_7665 = chunk__7653_7662.cljs$core$IIndexed$_nth$arity$2(null,i__7655_7664);
js_lib.core.get_parent(sl_node_7665).removeChild(sl_node_7665);


var G__7666 = seq__7652_7661;
var G__7667 = chunk__7653_7662;
var G__7668 = count__7654_7663;
var G__7669 = (i__7655_7664 + (1));
seq__7652_7661 = G__7666;
chunk__7653_7662 = G__7667;
count__7654_7663 = G__7668;
i__7655_7664 = G__7669;
continue;
} else {
var temp__5457__auto___7670 = cljs.core.seq(seq__7652_7661);
if(temp__5457__auto___7670){
var seq__7652_7671__$1 = temp__5457__auto___7670;
if(cljs.core.chunked_seq_QMARK_(seq__7652_7671__$1)){
var c__4351__auto___7672 = cljs.core.chunk_first(seq__7652_7671__$1);
var G__7673 = cljs.core.chunk_rest(seq__7652_7671__$1);
var G__7674 = c__4351__auto___7672;
var G__7675 = cljs.core.count(c__4351__auto___7672);
var G__7676 = (0);
seq__7652_7661 = G__7673;
chunk__7653_7662 = G__7674;
count__7654_7663 = G__7675;
i__7655_7664 = G__7676;
continue;
} else {
var sl_node_7677 = cljs.core.first(seq__7652_7671__$1);
js_lib.core.get_parent(sl_node_7677).removeChild(sl_node_7677);


var G__7678 = cljs.core.next(seq__7652_7671__$1);
var G__7679 = null;
var G__7680 = (0);
var G__7681 = (0);
seq__7652_7661 = G__7678;
chunk__7653_7662 = G__7679;
count__7654_7663 = G__7680;
i__7655_7664 = G__7681;
continue;
}
} else {
}
}
break;
}


var G__7682 = seq__7648;
var G__7683 = chunk__7649;
var G__7684 = count__7650;
var G__7685 = (i__7651 + (1));
seq__7648 = G__7682;
chunk__7649 = G__7683;
count__7650 = G__7684;
i__7651 = G__7685;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7648);
if(temp__5457__auto__){
var seq__7648__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7648__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7648__$1);
var G__7686 = cljs.core.chunk_rest(seq__7648__$1);
var G__7687 = c__4351__auto__;
var G__7688 = cljs.core.count(c__4351__auto__);
var G__7689 = (0);
seq__7648 = G__7686;
chunk__7649 = G__7687;
count__7650 = G__7688;
i__7651 = G__7689;
continue;
} else {
var element_node = cljs.core.first(seq__7648__$1);
var selected_nodes_7690 = js_lib.core.query_selector_all_on_element(element_node,selector);
var seq__7656_7691 = cljs.core.seq(selected_nodes_7690);
var chunk__7657_7692 = null;
var count__7658_7693 = (0);
var i__7659_7694 = (0);
while(true){
if((i__7659_7694 < count__7658_7693)){
var sl_node_7695 = chunk__7657_7692.cljs$core$IIndexed$_nth$arity$2(null,i__7659_7694);
js_lib.core.get_parent(sl_node_7695).removeChild(sl_node_7695);


var G__7696 = seq__7656_7691;
var G__7697 = chunk__7657_7692;
var G__7698 = count__7658_7693;
var G__7699 = (i__7659_7694 + (1));
seq__7656_7691 = G__7696;
chunk__7657_7692 = G__7697;
count__7658_7693 = G__7698;
i__7659_7694 = G__7699;
continue;
} else {
var temp__5457__auto___7700__$1 = cljs.core.seq(seq__7656_7691);
if(temp__5457__auto___7700__$1){
var seq__7656_7701__$1 = temp__5457__auto___7700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7656_7701__$1)){
var c__4351__auto___7702 = cljs.core.chunk_first(seq__7656_7701__$1);
var G__7703 = cljs.core.chunk_rest(seq__7656_7701__$1);
var G__7704 = c__4351__auto___7702;
var G__7705 = cljs.core.count(c__4351__auto___7702);
var G__7706 = (0);
seq__7656_7691 = G__7703;
chunk__7657_7692 = G__7704;
count__7658_7693 = G__7705;
i__7659_7694 = G__7706;
continue;
} else {
var sl_node_7707 = cljs.core.first(seq__7656_7701__$1);
js_lib.core.get_parent(sl_node_7707).removeChild(sl_node_7707);


var G__7708 = cljs.core.next(seq__7656_7701__$1);
var G__7709 = null;
var G__7710 = (0);
var G__7711 = (0);
seq__7656_7691 = G__7708;
chunk__7657_7692 = G__7709;
count__7658_7693 = G__7710;
i__7659_7694 = G__7711;
continue;
}
} else {
}
}
break;
}


var G__7712 = cljs.core.next(seq__7648__$1);
var G__7713 = null;
var G__7714 = (0);
var G__7715 = (0);
seq__7648 = G__7712;
chunk__7649 = G__7713;
count__7650 = G__7714;
i__7651 = G__7715;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Delay function execution by milliseconds
 */
js_lib.core.timeout = (function js_lib$core$timeout(execute_fn,delay_time){
return setTimeout(execute_fn,delay_time);
});
/**
 * Get attribute's value of element
 */
js_lib.core.get_attr = (function js_lib$core$get_attr(element,attr_name){
return element.getAttribute(attr_name);
});
/**
 * Set attribute's value of element
 */
js_lib.core.set_attr = (function js_lib$core$set_attr(element,attr_name,value){
return element.setAttribute(attr_name,value);
});
/**
 * Set attribute's value of elements collection
 */
js_lib.core.set_attrs = (function js_lib$core$set_attrs(elements,attr_name,value){
var seq__7716 = cljs.core.seq(elements);
var chunk__7717 = null;
var count__7718 = (0);
var i__7719 = (0);
while(true){
if((i__7719 < count__7718)){
var element = chunk__7717.cljs$core$IIndexed$_nth$arity$2(null,i__7719);
js_lib.core.set_attr(element,attr_name,value);


var G__7720 = seq__7716;
var G__7721 = chunk__7717;
var G__7722 = count__7718;
var G__7723 = (i__7719 + (1));
seq__7716 = G__7720;
chunk__7717 = G__7721;
count__7718 = G__7722;
i__7719 = G__7723;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7716);
if(temp__5457__auto__){
var seq__7716__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7716__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7716__$1);
var G__7724 = cljs.core.chunk_rest(seq__7716__$1);
var G__7725 = c__4351__auto__;
var G__7726 = cljs.core.count(c__4351__auto__);
var G__7727 = (0);
seq__7716 = G__7724;
chunk__7717 = G__7725;
count__7718 = G__7726;
i__7719 = G__7727;
continue;
} else {
var element = cljs.core.first(seq__7716__$1);
js_lib.core.set_attr(element,attr_name,value);


var G__7728 = cljs.core.next(seq__7716__$1);
var G__7729 = null;
var G__7730 = (0);
var G__7731 = (0);
seq__7716 = G__7728;
chunk__7717 = G__7729;
count__7718 = G__7730;
i__7719 = G__7731;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Get classList property
 */
js_lib.core.get_class_list = (function js_lib$core$get_class_list(element){
return (element["classList"]);
});
/**
 * Get nodeName property
 */
js_lib.core.get_node_name = (function js_lib$core$get_node_name(element){
return (element["nodeName"]);
});
/**
 * Add class to elements collection
 */
js_lib.core.add_class = (function js_lib$core$add_class(elements,single_class){
var elements__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector_all,elements);
if(cljs.core.vector_QMARK_(elements__$1)){
var seq__7732_7736 = cljs.core.seq(elements__$1);
var chunk__7733_7737 = null;
var count__7734_7738 = (0);
var i__7735_7739 = (0);
while(true){
if((i__7735_7739 < count__7734_7738)){
var element_7740 = chunk__7733_7737.cljs$core$IIndexed$_nth$arity$2(null,i__7735_7739);
js_lib.core.get_class_list(element_7740).add(single_class);


var G__7741 = seq__7732_7736;
var G__7742 = chunk__7733_7737;
var G__7743 = count__7734_7738;
var G__7744 = (i__7735_7739 + (1));
seq__7732_7736 = G__7741;
chunk__7733_7737 = G__7742;
count__7734_7738 = G__7743;
i__7735_7739 = G__7744;
continue;
} else {
var temp__5457__auto___7745 = cljs.core.seq(seq__7732_7736);
if(temp__5457__auto___7745){
var seq__7732_7746__$1 = temp__5457__auto___7745;
if(cljs.core.chunked_seq_QMARK_(seq__7732_7746__$1)){
var c__4351__auto___7747 = cljs.core.chunk_first(seq__7732_7746__$1);
var G__7748 = cljs.core.chunk_rest(seq__7732_7746__$1);
var G__7749 = c__4351__auto___7747;
var G__7750 = cljs.core.count(c__4351__auto___7747);
var G__7751 = (0);
seq__7732_7736 = G__7748;
chunk__7733_7737 = G__7749;
count__7734_7738 = G__7750;
i__7735_7739 = G__7751;
continue;
} else {
var element_7752 = cljs.core.first(seq__7732_7746__$1);
js_lib.core.get_class_list(element_7752).add(single_class);


var G__7753 = cljs.core.next(seq__7732_7746__$1);
var G__7754 = null;
var G__7755 = (0);
var G__7756 = (0);
seq__7732_7736 = G__7753;
chunk__7733_7737 = G__7754;
count__7734_7738 = G__7755;
i__7735_7739 = G__7756;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(js_lib.core.html_QMARK_(elements__$1))){
return js_lib.core.get_class_list(elements__$1).add(single_class);
} else {
return null;
}
});
/**
 * Remove class from elements collection
 */
js_lib.core.remove_class = (function js_lib$core$remove_class(elements,single_class){
var elements__$1 = js_lib.core.determine_param_type(js_lib.core.query_selector_all,elements);
if(cljs.core.vector_QMARK_(elements__$1)){
var seq__7757_7761 = cljs.core.seq(elements__$1);
var chunk__7758_7762 = null;
var count__7759_7763 = (0);
var i__7760_7764 = (0);
while(true){
if((i__7760_7764 < count__7759_7763)){
var element_7765 = chunk__7758_7762.cljs$core$IIndexed$_nth$arity$2(null,i__7760_7764);
js_lib.core.get_class_list(element_7765).remove(single_class);


var G__7766 = seq__7757_7761;
var G__7767 = chunk__7758_7762;
var G__7768 = count__7759_7763;
var G__7769 = (i__7760_7764 + (1));
seq__7757_7761 = G__7766;
chunk__7758_7762 = G__7767;
count__7759_7763 = G__7768;
i__7760_7764 = G__7769;
continue;
} else {
var temp__5457__auto___7770 = cljs.core.seq(seq__7757_7761);
if(temp__5457__auto___7770){
var seq__7757_7771__$1 = temp__5457__auto___7770;
if(cljs.core.chunked_seq_QMARK_(seq__7757_7771__$1)){
var c__4351__auto___7772 = cljs.core.chunk_first(seq__7757_7771__$1);
var G__7773 = cljs.core.chunk_rest(seq__7757_7771__$1);
var G__7774 = c__4351__auto___7772;
var G__7775 = cljs.core.count(c__4351__auto___7772);
var G__7776 = (0);
seq__7757_7761 = G__7773;
chunk__7758_7762 = G__7774;
count__7759_7763 = G__7775;
i__7760_7764 = G__7776;
continue;
} else {
var element_7777 = cljs.core.first(seq__7757_7771__$1);
js_lib.core.get_class_list(element_7777).remove(single_class);


var G__7778 = cljs.core.next(seq__7757_7771__$1);
var G__7779 = null;
var G__7780 = (0);
var G__7781 = (0);
seq__7757_7761 = G__7778;
chunk__7758_7762 = G__7779;
count__7759_7763 = G__7780;
i__7760_7764 = G__7781;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(js_lib.core.html_QMARK_(elements__$1))){
return js_lib.core.get_class_list(elements__$1).remove(single_class);
} else {
return null;
}
});
/**
 * Check if fade in style exists in DOM
 */
js_lib.core.element_exists = (function js_lib$core$element_exists(selector){
var selected_elements = js_lib.core.query_selector_all(selector);
return !(cljs.core.empty_QMARK_(selected_elements));
});
/**
 * Append fade in style to head
 */
js_lib.core.fade_anim_append = (function js_lib$core$fade_anim_append(delay_time,style_id,animation_name_class,from_opacity,to_opacity){
if(cljs.core.truth_(js_lib.core.element_exists(["style#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_id)].join('')))){
return null;
} else {
var delay_time_as_string = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((delay_time / (1000)))].join('');
var final_element = htmlcss_lib.core.gen.cljs$core$IFn$_invoke$arity$variadic(htmlcss_lib.core.stl.cljs$core$IFn$_invoke$arity$variadic(style_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([htmlcss_lib.core.anmtn(animation_name_class,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_opacity)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_opacity)].join('')], null)),htmlcss_lib.core.slctr([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay_time_as_string),"s"].join('')], null))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["style"], 0));
return js_lib.core.append_element("body div.styles",final_element);
}
});
/**
 * Set class on element to fade in, and and then append element to selected node
 */
js_lib.core.fade_in_iteration = (function js_lib$core$fade_in_iteration(ch_node,sl_node,anim_name_class,style_id,delay_time){
var node_name = js_lib.core.get_node_name(ch_node);
var insert_before_this = js_lib.core.query_selector_on_element(sl_node,"div.scripts");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_name,"#text")){
return null;
} else {
js_lib.core.add_class(ch_node,anim_name_class);

sl_node.insertBefore(ch_node,insert_before_this);

return js_lib.core.timeout(((function (node_name,insert_before_this){
return (function (){
js_lib.core.remove_class(ch_node,anim_name_class);

js_lib.core.set_outer_html(["style#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_id)].join(''),"");

return js_lib.core.set_inner_html("div.styles",js_lib.core.replace_all(js_lib.core.get_inner_html("div.styles"),"\n",""));
});})(node_name,insert_before_this))
,delay_time);
}
});
/**
 * Fade in html string content in elements fetched by selector during delay time
 *   
 *   parameters:
 * selector              query document with this selector
 * html-content          String or HTMLObject that will be inserted
 * delay-time            fade-in duration time
 * 
 * style-identification  id of style html element that will be generated and appended
 * animation-name-class  generating style html element, this parameter will be used for
 *                         animation and class name
 * from-opacity          number from 0.0 to 1.0 that will specify starting opacity of
 *                         fading element
 * to-opacity            number from 0.0 to 1.0 that will specify ending opacity of
 *                         fading element
 */
js_lib.core.fade_in = (function js_lib$core$fade_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7802 = arguments.length;
var i__4532__auto___7803 = (0);
while(true){
if((i__4532__auto___7803 < len__4531__auto___7802)){
args__4534__auto__.push((arguments[i__4532__auto___7803]));

var G__7804 = (i__4532__auto___7803 + (1));
i__4532__auto___7803 = G__7804;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return js_lib.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

js_lib.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,html_content,delay_time,p__7786){
var vec__7787 = p__7786;
var style_identification = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7787,(0),null);
var animation_name_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7787,(1),null);
var from_opacity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7787,(2),null);
var to_opacity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7787,(3),null);
var style_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_identification),"fade-in"].join('');
var anim_name_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class),"fade-in"].join('');
var from_opac = (function (){var or__3949__auto__ = from_opacity;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
var to_opac = (function (){var or__3949__auto__ = to_opacity;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})();
js_lib.core.fade_anim_append(delay_time,style_id,anim_name_class,from_opac,to_opac);

var selected_nodes = js_lib.core.query_selector_all(selector);
var child_nodes = js_lib.core.determine_param_type(js_lib.core.parse_html,html_content);
var seq__7790 = cljs.core.seq(selected_nodes);
var chunk__7791 = null;
var count__7792 = (0);
var i__7793 = (0);
while(true){
if((i__7793 < count__7792)){
var sl_node = chunk__7791.cljs$core$IIndexed$_nth$arity$2(null,i__7793);
if(cljs.core.vector_QMARK_(child_nodes)){
var seq__7794_7805 = cljs.core.seq(child_nodes);
var chunk__7795_7806 = null;
var count__7796_7807 = (0);
var i__7797_7808 = (0);
while(true){
if((i__7797_7808 < count__7796_7807)){
var ch_node_7809 = chunk__7795_7806.cljs$core$IIndexed$_nth$arity$2(null,i__7797_7808);
js_lib.core.fade_in_iteration(ch_node_7809,sl_node,anim_name_class,style_id,delay_time);


var G__7810 = seq__7794_7805;
var G__7811 = chunk__7795_7806;
var G__7812 = count__7796_7807;
var G__7813 = (i__7797_7808 + (1));
seq__7794_7805 = G__7810;
chunk__7795_7806 = G__7811;
count__7796_7807 = G__7812;
i__7797_7808 = G__7813;
continue;
} else {
var temp__5457__auto___7814 = cljs.core.seq(seq__7794_7805);
if(temp__5457__auto___7814){
var seq__7794_7815__$1 = temp__5457__auto___7814;
if(cljs.core.chunked_seq_QMARK_(seq__7794_7815__$1)){
var c__4351__auto___7816 = cljs.core.chunk_first(seq__7794_7815__$1);
var G__7817 = cljs.core.chunk_rest(seq__7794_7815__$1);
var G__7818 = c__4351__auto___7816;
var G__7819 = cljs.core.count(c__4351__auto___7816);
var G__7820 = (0);
seq__7794_7805 = G__7817;
chunk__7795_7806 = G__7818;
count__7796_7807 = G__7819;
i__7797_7808 = G__7820;
continue;
} else {
var ch_node_7821 = cljs.core.first(seq__7794_7815__$1);
js_lib.core.fade_in_iteration(ch_node_7821,sl_node,anim_name_class,style_id,delay_time);


var G__7822 = cljs.core.next(seq__7794_7815__$1);
var G__7823 = null;
var G__7824 = (0);
var G__7825 = (0);
seq__7794_7805 = G__7822;
chunk__7795_7806 = G__7823;
count__7796_7807 = G__7824;
i__7797_7808 = G__7825;
continue;
}
} else {
}
}
break;
}
} else {
js_lib.core.fade_in_iteration(child_nodes,sl_node,anim_name_class,style_id,delay_time);
}


var G__7826 = seq__7790;
var G__7827 = chunk__7791;
var G__7828 = count__7792;
var G__7829 = (i__7793 + (1));
seq__7790 = G__7826;
chunk__7791 = G__7827;
count__7792 = G__7828;
i__7793 = G__7829;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7790);
if(temp__5457__auto__){
var seq__7790__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7790__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__7790__$1);
var G__7830 = cljs.core.chunk_rest(seq__7790__$1);
var G__7831 = c__4351__auto__;
var G__7832 = cljs.core.count(c__4351__auto__);
var G__7833 = (0);
seq__7790 = G__7830;
chunk__7791 = G__7831;
count__7792 = G__7832;
i__7793 = G__7833;
continue;
} else {
var sl_node = cljs.core.first(seq__7790__$1);
if(cljs.core.vector_QMARK_(child_nodes)){
var seq__7798_7834 = cljs.core.seq(child_nodes);
var chunk__7799_7835 = null;
var count__7800_7836 = (0);
var i__7801_7837 = (0);
while(true){
if((i__7801_7837 < count__7800_7836)){
var ch_node_7838 = chunk__7799_7835.cljs$core$IIndexed$_nth$arity$2(null,i__7801_7837);
js_lib.core.fade_in_iteration(ch_node_7838,sl_node,anim_name_class,style_id,delay_time);


var G__7839 = seq__7798_7834;
var G__7840 = chunk__7799_7835;
var G__7841 = count__7800_7836;
var G__7842 = (i__7801_7837 + (1));
seq__7798_7834 = G__7839;
chunk__7799_7835 = G__7840;
count__7800_7836 = G__7841;
i__7801_7837 = G__7842;
continue;
} else {
var temp__5457__auto___7843__$1 = cljs.core.seq(seq__7798_7834);
if(temp__5457__auto___7843__$1){
var seq__7798_7844__$1 = temp__5457__auto___7843__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7798_7844__$1)){
var c__4351__auto___7845 = cljs.core.chunk_first(seq__7798_7844__$1);
var G__7846 = cljs.core.chunk_rest(seq__7798_7844__$1);
var G__7847 = c__4351__auto___7845;
var G__7848 = cljs.core.count(c__4351__auto___7845);
var G__7849 = (0);
seq__7798_7834 = G__7846;
chunk__7799_7835 = G__7847;
count__7800_7836 = G__7848;
i__7801_7837 = G__7849;
continue;
} else {
var ch_node_7850 = cljs.core.first(seq__7798_7844__$1);
js_lib.core.fade_in_iteration(ch_node_7850,sl_node,anim_name_class,style_id,delay_time);


var G__7851 = cljs.core.next(seq__7798_7844__$1);
var G__7852 = null;
var G__7853 = (0);
var G__7854 = (0);
seq__7798_7834 = G__7851;
chunk__7799_7835 = G__7852;
count__7800_7836 = G__7853;
i__7801_7837 = G__7854;
continue;
}
} else {
}
}
break;
}
} else {
js_lib.core.fade_in_iteration(child_nodes,sl_node,anim_name_class,style_id,delay_time);
}


var G__7855 = cljs.core.next(seq__7790__$1);
var G__7856 = null;
var G__7857 = (0);
var G__7858 = (0);
seq__7790 = G__7855;
chunk__7791 = G__7856;
count__7792 = G__7857;
i__7793 = G__7858;
continue;
}
} else {
return null;
}
}
break;
}
});

js_lib.core.fade_in.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
js_lib.core.fade_in.cljs$lang$applyTo = (function (seq7782){
var G__7783 = cljs.core.first(seq7782);
var seq7782__$1 = cljs.core.next(seq7782);
var G__7784 = cljs.core.first(seq7782__$1);
var seq7782__$2 = cljs.core.next(seq7782__$1);
var G__7785 = cljs.core.first(seq7782__$2);
var seq7782__$3 = cljs.core.next(seq7782__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7783,G__7784,G__7785,seq7782__$3);
});

/**
 * Fade out html string content in elements fetched by selector during delay time
 *   
 *   parameters:
 * selector              query document with this selector
 * delay-time            fade-out duration time
 * 
 * style-identification  id of style html element that will be generated and appended
 * only-content          when removing faded element
 *                         true for only for content to be remove
 *                         false for element, fetched with selector, to be removed
 * animation-name-class  generating style html element, this parameter will be used for
 *                         animation and class name
 * from-opacity          number from 0.0 to 1.0 that will specify starting opacity of
 *                         fading element
 * to-opacity            number from 0.0 to 1.0 that will specify ending opacity of
 *                         fading element
 */
js_lib.core.fade_out = (function js_lib$core$fade_out(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7878 = arguments.length;
var i__4532__auto___7879 = (0);
while(true){
if((i__4532__auto___7879 < len__4531__auto___7878)){
args__4534__auto__.push((arguments[i__4532__auto___7879]));

var G__7880 = (i__4532__auto___7879 + (1));
i__4532__auto___7879 = G__7880;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return js_lib.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

js_lib.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function (selector,delay_time,p__7862){
var vec__7863 = p__7862;
var style_identification = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7863,(0),null);
var only_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7863,(1),null);
var animation_name_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7863,(2),null);
var from_opacity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7863,(3),null);
var to_opacity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7863,(4),null);
var style_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_identification),"fade-out"].join('');
var anim_name_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class),"fade-out"].join('');
var from_opac = (function (){var or__3949__auto__ = from_opacity;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})();
var to_opac = (function (){var or__3949__auto__ = to_opacity;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
js_lib.core.fade_anim_append(delay_time,style_id,anim_name_class,from_opac,to_opac);

var selected_nodes_7881 = js_lib.core.query_selector_all(selector);
var seq__7866_7882 = cljs.core.seq(selected_nodes_7881);
var chunk__7867_7883 = null;
var count__7868_7884 = (0);
var i__7869_7885 = (0);
while(true){
if((i__7869_7885 < count__7868_7884)){
var sl_node_7886 = chunk__7867_7883.cljs$core$IIndexed$_nth$arity$2(null,i__7869_7885);
var child_nodes_7887 = js_lib.core.get_child_nodes(sl_node_7886);
if(cljs.core.truth_(only_content)){
var seq__7870_7888 = cljs.core.seq(child_nodes_7887);
var chunk__7871_7889 = null;
var count__7872_7890 = (0);
var i__7873_7891 = (0);
while(true){
if((i__7873_7891 < count__7872_7890)){
var ch_node_7892 = chunk__7871_7889.cljs$core$IIndexed$_nth$arity$2(null,i__7873_7891);
var node_name_7893 = js_lib.core.get_node_name(ch_node_7892);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#text",node_name_7893)){
} else {
js_lib.core.remove_class(ch_node_7892,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class),"fade-in"].join(''));

js_lib.core.add_class(ch_node_7892,anim_name_class);
}


var G__7894 = seq__7870_7888;
var G__7895 = chunk__7871_7889;
var G__7896 = count__7872_7890;
var G__7897 = (i__7873_7891 + (1));
seq__7870_7888 = G__7894;
chunk__7871_7889 = G__7895;
count__7872_7890 = G__7896;
i__7873_7891 = G__7897;
continue;
} else {
var temp__5457__auto___7898 = cljs.core.seq(seq__7870_7888);
if(temp__5457__auto___7898){
var seq__7870_7899__$1 = temp__5457__auto___7898;
if(cljs.core.chunked_seq_QMARK_(seq__7870_7899__$1)){
var c__4351__auto___7900 = cljs.core.chunk_first(seq__7870_7899__$1);
var G__7901 = cljs.core.chunk_rest(seq__7870_7899__$1);
var G__7902 = c__4351__auto___7900;
var G__7903 = cljs.core.count(c__4351__auto___7900);
var G__7904 = (0);
seq__7870_7888 = G__7901;
chunk__7871_7889 = G__7902;
count__7872_7890 = G__7903;
i__7873_7891 = G__7904;
continue;
} else {
var ch_node_7905 = cljs.core.first(seq__7870_7899__$1);
var node_name_7906 = js_lib.core.get_node_name(ch_node_7905);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#text",node_name_7906)){
} else {
js_lib.core.remove_class(ch_node_7905,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class),"fade-in"].join(''));

js_lib.core.add_class(ch_node_7905,anim_name_class);
}


var G__7907 = cljs.core.next(seq__7870_7899__$1);
var G__7908 = null;
var G__7909 = (0);
var G__7910 = (0);
seq__7870_7888 = G__7907;
chunk__7871_7889 = G__7908;
count__7872_7890 = G__7909;
i__7873_7891 = G__7910;
continue;
}
} else {
}
}
break;
}
} else {
js_lib.core.add_class(sl_node_7886,anim_name_class);
}


var G__7911 = seq__7866_7882;
var G__7912 = chunk__7867_7883;
var G__7913 = count__7868_7884;
var G__7914 = (i__7869_7885 + (1));
seq__7866_7882 = G__7911;
chunk__7867_7883 = G__7912;
count__7868_7884 = G__7913;
i__7869_7885 = G__7914;
continue;
} else {
var temp__5457__auto___7915 = cljs.core.seq(seq__7866_7882);
if(temp__5457__auto___7915){
var seq__7866_7916__$1 = temp__5457__auto___7915;
if(cljs.core.chunked_seq_QMARK_(seq__7866_7916__$1)){
var c__4351__auto___7917 = cljs.core.chunk_first(seq__7866_7916__$1);
var G__7918 = cljs.core.chunk_rest(seq__7866_7916__$1);
var G__7919 = c__4351__auto___7917;
var G__7920 = cljs.core.count(c__4351__auto___7917);
var G__7921 = (0);
seq__7866_7882 = G__7918;
chunk__7867_7883 = G__7919;
count__7868_7884 = G__7920;
i__7869_7885 = G__7921;
continue;
} else {
var sl_node_7922 = cljs.core.first(seq__7866_7916__$1);
var child_nodes_7923 = js_lib.core.get_child_nodes(sl_node_7922);
if(cljs.core.truth_(only_content)){
var seq__7874_7924 = cljs.core.seq(child_nodes_7923);
var chunk__7875_7925 = null;
var count__7876_7926 = (0);
var i__7877_7927 = (0);
while(true){
if((i__7877_7927 < count__7876_7926)){
var ch_node_7928 = chunk__7875_7925.cljs$core$IIndexed$_nth$arity$2(null,i__7877_7927);
var node_name_7929 = js_lib.core.get_node_name(ch_node_7928);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#text",node_name_7929)){
} else {
js_lib.core.remove_class(ch_node_7928,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class),"fade-in"].join(''));

js_lib.core.add_class(ch_node_7928,anim_name_class);
}


var G__7930 = seq__7874_7924;
var G__7931 = chunk__7875_7925;
var G__7932 = count__7876_7926;
var G__7933 = (i__7877_7927 + (1));
seq__7874_7924 = G__7930;
chunk__7875_7925 = G__7931;
count__7876_7926 = G__7932;
i__7877_7927 = G__7933;
continue;
} else {
var temp__5457__auto___7934__$1 = cljs.core.seq(seq__7874_7924);
if(temp__5457__auto___7934__$1){
var seq__7874_7935__$1 = temp__5457__auto___7934__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7874_7935__$1)){
var c__4351__auto___7936 = cljs.core.chunk_first(seq__7874_7935__$1);
var G__7937 = cljs.core.chunk_rest(seq__7874_7935__$1);
var G__7938 = c__4351__auto___7936;
var G__7939 = cljs.core.count(c__4351__auto___7936);
var G__7940 = (0);
seq__7874_7924 = G__7937;
chunk__7875_7925 = G__7938;
count__7876_7926 = G__7939;
i__7877_7927 = G__7940;
continue;
} else {
var ch_node_7941 = cljs.core.first(seq__7874_7935__$1);
var node_name_7942 = js_lib.core.get_node_name(ch_node_7941);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#text",node_name_7942)){
} else {
js_lib.core.remove_class(ch_node_7941,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(animation_name_class),"fade-in"].join(''));

js_lib.core.add_class(ch_node_7941,anim_name_class);
}


var G__7943 = cljs.core.next(seq__7874_7935__$1);
var G__7944 = null;
var G__7945 = (0);
var G__7946 = (0);
seq__7874_7924 = G__7943;
chunk__7875_7925 = G__7944;
count__7876_7926 = G__7945;
i__7877_7927 = G__7946;
continue;
}
} else {
}
}
break;
}
} else {
js_lib.core.add_class(sl_node_7922,anim_name_class);
}


var G__7947 = cljs.core.next(seq__7866_7916__$1);
var G__7948 = null;
var G__7949 = (0);
var G__7950 = (0);
seq__7866_7882 = G__7947;
chunk__7867_7883 = G__7948;
count__7868_7884 = G__7949;
i__7869_7885 = G__7950;
continue;
}
} else {
}
}
break;
}

return js_lib.core.timeout(((function (style_id,anim_name_class,from_opac,to_opac,vec__7863,style_identification,only_content,animation_name_class,from_opacity,to_opacity){
return (function (){
if(cljs.core.truth_(only_content)){
js_lib.core.set_outer_html([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anim_name_class)].join(''),"");
} else {
js_lib.core.set_outer_html(selector,"");
}

js_lib.core.set_outer_html(["style#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_id)].join(''),"");

return js_lib.core.set_inner_html("div.styles",js_lib.core.replace_all(js_lib.core.get_inner_html("div.styles"),"\n",""));
});})(style_id,anim_name_class,from_opac,to_opac,vec__7863,style_identification,only_content,animation_name_class,from_opacity,to_opacity))
,delay_time);
});

js_lib.core.fade_out.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
js_lib.core.fade_out.cljs$lang$applyTo = (function (seq7859){
var G__7860 = cljs.core.first(seq7859);
var seq7859__$1 = cljs.core.next(seq7859);
var G__7861 = cljs.core.first(seq7859__$1);
var seq7859__$2 = cljs.core.next(seq7859__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7860,G__7861,seq7859__$2);
});

/**
 * Display please wait message
 */
js_lib.core.start_please_wait = (function js_lib$core$start_please_wait(){
document.activeElement.blur();

return js_lib.core.append_element("body","<div class=\"please-wait\" ></div>");
});
/**
 * Hide please wait message
 */
js_lib.core.end_please_wait = (function js_lib$core$end_please_wait(){
return js_lib.core.remove_element("div.please-wait");
});
/**
 * Update percentage of progress bar
 */
js_lib.core.update_progress_bar = (function js_lib$core$update_progress_bar(progress_value){
var progress_bar_done = js_lib.core.query_selector(".progress-bar");
var progress_bar_done_number = js_lib.core.query_selector(".progress-bar-done-number");
if((progress_bar_done == null)){
} else {
js_lib.core.set_attr(progress_bar_done,"style",["background-image: ","linear-gradient(to right, ","red 0%, ","red ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress_value),"%, ","white ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress_value),"%, ","white 100%);"].join(''));
}

if((progress_bar_done_number == null)){
return null;
} else {
return js_lib.core.set_inner_html(progress_bar_done_number,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress_value),"%"].join(''));
}
});
/**
 * Display progress bar message
 */
js_lib.core.start_progress_bar = (function js_lib$core$start_progress_bar(){
document.activeElement.blur();

js_lib.core.start_please_wait();

return js_lib.core.append_element("body",["<div class=\"progress-bar-background\" >","<div class=\"progress-bar\" >","<div class=\"progress-bar-done-number\" >","0%","</div>","</div>","</div>"].join(''));
});
/**
 * Hide progress bar message
 */
js_lib.core.end_progress_bar = (function js_lib$core$end_progress_bar(){
js_lib.core.remove_element("div.progress-bar-background");

return js_lib.core.end_please_wait();
});
/**
 * Return value of checked property from html element
 */
js_lib.core.is_checked_QMARK_ = (function js_lib$core$is_checked_QMARK_(element){
return (element["checked"]);
});
/**
 * Iterate through html radio elements and check if any of them is checked,
 * if html radio element is checked, return it's value
 */
js_lib.core.checked_value_with_index = (function js_lib$core$checked_value_with_index(radio_group_elements,index){
while(true){
if((index < cljs.core.count(radio_group_elements))){
var radio_group_element = (radio_group_elements.cljs$core$IFn$_invoke$arity$1 ? radio_group_elements.cljs$core$IFn$_invoke$arity$1(index) : radio_group_elements.call(null,index));
if(cljs.core.truth_(js_lib.core.is_checked_QMARK_(radio_group_element))){
return js_lib.core.get_value(radio_group_element);
} else {
var G__7951 = radio_group_elements;
var G__7952 = (index + (1));
radio_group_elements = G__7951;
index = G__7952;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Query dom for input html radio group by name and find if the choice was made
 */
js_lib.core.checked_value = (function js_lib$core$checked_value(radio_group_name){
var radio_group_elements = js_lib.core.query_selector_all(["input[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(radio_group_name),"']"].join(''));
return js_lib.core.checked_value_with_index(radio_group_elements,(0));
});
/**
 * Checks which values are checked in checkbox group and packs them in vector
 */
js_lib.core.cb_checked_values = (function js_lib$core$cb_checked_values(checkbox_group_name){
var checkbox_group_elements = js_lib.core.query_selector_all(["input[name='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(checkbox_group_name),"']"].join(''));
var checked_values = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__7953_7957 = cljs.core.seq(checkbox_group_elements);
var chunk__7954_7958 = null;
var count__7955_7959 = (0);
var i__7956_7960 = (0);
while(true){
if((i__7956_7960 < count__7955_7959)){
var checkbox_el_7961 = chunk__7954_7958.cljs$core$IIndexed$_nth$arity$2(null,i__7956_7960);
if(cljs.core.truth_(js_lib.core.is_checked_QMARK_(checkbox_el_7961))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(checked_values,cljs.core.conj,js_lib.core.get_value(checkbox_el_7961));
} else {
}


var G__7962 = seq__7953_7957;
var G__7963 = chunk__7954_7958;
var G__7964 = count__7955_7959;
var G__7965 = (i__7956_7960 + (1));
seq__7953_7957 = G__7962;
chunk__7954_7958 = G__7963;
count__7955_7959 = G__7964;
i__7956_7960 = G__7965;
continue;
} else {
var temp__5457__auto___7966 = cljs.core.seq(seq__7953_7957);
if(temp__5457__auto___7966){
var seq__7953_7967__$1 = temp__5457__auto___7966;
if(cljs.core.chunked_seq_QMARK_(seq__7953_7967__$1)){
var c__4351__auto___7968 = cljs.core.chunk_first(seq__7953_7967__$1);
var G__7969 = cljs.core.chunk_rest(seq__7953_7967__$1);
var G__7970 = c__4351__auto___7968;
var G__7971 = cljs.core.count(c__4351__auto___7968);
var G__7972 = (0);
seq__7953_7957 = G__7969;
chunk__7954_7958 = G__7970;
count__7955_7959 = G__7971;
i__7956_7960 = G__7972;
continue;
} else {
var checkbox_el_7973 = cljs.core.first(seq__7953_7967__$1);
if(cljs.core.truth_(js_lib.core.is_checked_QMARK_(checkbox_el_7973))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(checked_values,cljs.core.conj,js_lib.core.get_value(checkbox_el_7973));
} else {
}


var G__7974 = cljs.core.next(seq__7953_7967__$1);
var G__7975 = null;
var G__7976 = (0);
var G__7977 = (0);
seq__7953_7957 = G__7974;
chunk__7954_7958 = G__7975;
count__7955_7959 = G__7976;
i__7956_7960 = G__7977;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(checked_values);
});
/**
 * Automation fade in fade out of an element
 */
js_lib.core.fade_out_and_fade_in = (function js_lib$core$fade_out_and_fade_in(selector,anim_duration,html_content){
js_lib.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(selector,anim_duration,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fade-out-and-fade-in",true], 0));

return js_lib.core.timeout((function (){
return js_lib.core.fade_in(selector,html_content,anim_duration);
}),anim_duration);
});
/**
 * Find event type of predefined types
 */
js_lib.core.find_event_type = (function js_lib$core$find_event_type(event,index){
while(true){
if((index < cljs.core.count(js_lib.core.events))){
var event_type_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib.core.events,index);
var map__7978 = event_type_obj;
var map__7978__$1 = ((((!((map__7978 == null)))?(((((map__7978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7978):map__7978);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7978__$1,cljs.core.cst$kw$events);
if(cljs.core.contains_QMARK_(events,event)){
return event_type_obj;
} else {
var G__7980 = event;
var G__7981 = (index + (1));
event = G__7980;
index = G__7981;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Initialize event for particular event object
 */
js_lib.core.init_event = (function js_lib$core$init_event(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7990 = arguments.length;
var i__4532__auto___7991 = (0);
while(true){
if((i__4532__auto___7991 < len__4531__auto___7990)){
args__4534__auto__.push((arguments[i__4532__auto___7991]));

var G__7992 = (i__4532__auto___7991 + (1));
i__4532__auto___7991 = G__7992;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return js_lib.core.init_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

js_lib.core.init_event.cljs$core$IFn$_invoke$arity$variadic = (function (event,p__7984){
var vec__7985 = p__7984;
var window_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7985,(0),null);
var return_event = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((event instanceof Event)){
cljs.core.reset_BANG_(return_event,event);
} else {
}

if(typeof event === 'string'){
var window_obj_7993__$1 = (function (){var or__3949__auto__ = window_obj;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return window;
}
})();
var map__7988_7994 = js_lib.core.find_event_type(event,(0));
var map__7988_7995__$1 = ((((!((map__7988_7994 == null)))?(((((map__7988_7994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7988_7994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7988_7994):map__7988_7994);
var event_type_7996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7988_7995__$1,cljs.core.cst$kw$event_DASH_type);
var init_event_fn_7997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7988_7995__$1,cljs.core.cst$kw$init_DASH_event_DASH_fn);
var event_obj_7998 = (window_obj_7993__$1["document"]).createEvent(event_type_7996);
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(event_obj_7998,init_event_fn_7997,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event,true,true], 0));

cljs.core.reset_BANG_(return_event,event_obj_7998);
} else {
}

return cljs.core.deref(return_event);
});

js_lib.core.init_event.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
js_lib.core.init_event.cljs$lang$applyTo = (function (seq7982){
var G__7983 = cljs.core.first(seq7982);
var seq7982__$1 = cljs.core.next(seq7982);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7983,seq7982__$1);
});

/**
 * Dispatch event on element from window-obj
 */
js_lib.core.dispatch_event = (function js_lib$core$dispatch_event(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8006 = arguments.length;
var i__4532__auto___8007 = (0);
while(true){
if((i__4532__auto___8007 < len__4531__auto___8006)){
args__4534__auto__.push((arguments[i__4532__auto___8007]));

var G__8008 = (i__4532__auto___8007 + (1));
i__4532__auto___8007 = G__8008;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return js_lib.core.dispatch_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

js_lib.core.dispatch_event.cljs$core$IFn$_invoke$arity$variadic = (function (event,elem,p__8002){
var vec__8003 = p__8002;
var window_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8003,(0),null);
var window_obj__$1 = (function (){var or__3949__auto__ = window_obj;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return window;
}
})();
var elem__$1 = ((typeof elem === 'string')?js_lib.core.query_selector_on_element((window_obj__$1["document"]),elem):elem);
var event_obj = js_lib.core.init_event.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([window_obj__$1], 0));
return elem__$1.dispatchEvent(event_obj);
});

js_lib.core.dispatch_event.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
js_lib.core.dispatch_event.cljs$lang$applyTo = (function (seq7999){
var G__8000 = cljs.core.first(seq7999);
var seq7999__$1 = cljs.core.next(seq7999);
var G__8001 = cljs.core.first(seq7999__$1);
var seq7999__$2 = cljs.core.next(seq7999__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8000,G__8001,seq7999__$2);
});

