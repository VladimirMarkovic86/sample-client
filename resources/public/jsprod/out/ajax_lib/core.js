// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax_lib.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax_lib.http.mime_type');
goog.require('ajax_lib.http.request_header');
goog.require('ajax_lib.http.entity_header');
goog.require('cljs.reader');
ajax_lib.core.base_url = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ajax_lib.core.with_credentials = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
/**
 * Get response from XMLHttpRequest
 */
ajax_lib.core.get_response = (function ajax_lib$core$get_response(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5902 = arguments.length;
var i__4532__auto___5903 = (0);
while(true){
if((i__4532__auto___5903 < len__4531__auto___5902)){
args__4534__auto__.push((arguments[i__4532__auto___5903]));

var G__5904 = (i__4532__auto___5903 + (1));
i__4532__auto___5903 = G__5904;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax_lib.core.get_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax_lib.core.get_response.cljs$core$IFn$_invoke$arity$variadic = (function (xhr,p__5897){
var vec__5898 = p__5897;
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5898,(0),null);
try{if(cljs.core.truth_(raw)){
return (xhr["response"]);
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((xhr["response"]));
}
}catch (e5901){if((e5901 instanceof Error)){
var e = e5901;
return console.log((e["message"]));
} else {
throw e5901;

}
}});

ajax_lib.core.get_response.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax_lib.core.get_response.cljs$lang$applyTo = (function (seq5895){
var G__5896 = cljs.core.first(seq5895);
var seq5895__$1 = cljs.core.next(seq5895);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5896,seq5895__$1);
});

/**
 * Handle details error
 */
ajax_lib.core.ajax_error = (function ajax_lib$core$ajax_error(xhr){
var response = ajax_lib.core.get_response(xhr);
var error_message = cljs.core.cst$kw$error_DASH_message.cljs$core$IFn$_invoke$arity$1(response);
return console.error(error_message);
});
/**
 * Ajax onload function
 */
ajax_lib.core.onload = (function ajax_lib$core$onload(xhr,params_map){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((xhr["readyState"]),(4))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((xhr["status"]),(200))))){
var success_fn = cljs.core.cst$kw$success_DASH_fn.cljs$core$IFn$_invoke$arity$1(params_map);
var success_fn__$1 = (cljs.core.truth_(success_fn)?success_fn:((function (success_fn){
return (function (){
return null;
});})(success_fn))
);
console.log(xhr);

return (success_fn__$1.cljs$core$IFn$_invoke$arity$2 ? success_fn__$1.cljs$core$IFn$_invoke$arity$2(xhr,params_map) : success_fn__$1.call(null,xhr,params_map));
} else {
var error_fn = cljs.core.cst$kw$error_DASH_fn.cljs$core$IFn$_invoke$arity$1(params_map);
var error_fn__$1 = (cljs.core.truth_(error_fn)?error_fn:ajax_lib.core.ajax_error);
var G__5905 = (xhr["status"]);
switch (G__5905) {
case (1):
return console.log("OPENED");

break;
case (2):
return console.log("HEADERS_RECEIVED");

break;
case (3):
return console.log("LOADING");

break;
default:
console.log(xhr);

return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(xhr,params_map) : error_fn__$1.call(null,xhr,params_map));

}
}
});
/**
 * Ajax onreadystatechange function
 */
ajax_lib.core.onready = (function ajax_lib$core$onready(xhr,params_map){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((xhr["readyState"]),(4))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((xhr["status"]),(200))))){
var fexpr__5907 = cljs.core.cst$kw$success_DASH_fn.cljs$core$IFn$_invoke$arity$1(params_map);
return (fexpr__5907.cljs$core$IFn$_invoke$arity$2 ? fexpr__5907.cljs$core$IFn$_invoke$arity$2(xhr,params_map) : fexpr__5907.call(null,xhr,params_map));
} else {
var G__5908 = (xhr["readyState"]);
switch (G__5908) {
case (1):
return console.log("OPENED");

break;
case (2):
return console.log("HEADERS_RECEIVED");

break;
case (3):
return console.log("LOADING");

break;
default:
var fexpr__5909 = cljs.core.cst$kw$error_DASH_fn.cljs$core$IFn$_invoke$arity$1(params_map);
return (fexpr__5909.cljs$core$IFn$_invoke$arity$2 ? fexpr__5909.cljs$core$IFn$_invoke$arity$2(xhr,params_map) : fexpr__5909.call(null,xhr,params_map));

}
}
});
/**
 * Set request header
 */
ajax_lib.core.set_request_header = (function ajax_lib$core$set_request_header(xhr,p__5911){
var vec__5912 = p__5911;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5912,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5912,(1),null);
return xhr.setRequestHeader(key,value);
});
/**
 * Set request property
 */
ajax_lib.core.set_request_property = (function ajax_lib$core$set_request_property(xhr,p__5915){
var vec__5916 = p__5915;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5916,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5916,(1),null);
return (xhr[key] = value);
});
/**
 * Universal ajax call
 *   
 *   :url                     Define url address to communicate with
 *   :request-method          Define request method ex. GET, POST...
 *   :success-fn              Specify function name which will handle success
 * 
 *                         example: (defn success-handler
 *                                    "Simple ajax success handler"
 *                                    [xhr
 *                                     params-map]
 *                                    implementation..)
 * 
 *   :error-fn                Specify function name which will handle error
 * 
 *                         example: (defn error-handler
 *                                    "Simple ajax error handler"
 *                                    [xhr
 *                                     params-map]
 *                                    implementation..)
 * 
 *   :request-header-map      Define map with key value pairs for request header
 *   :request-property-map    Define map with key value pairs for setting property values
 *   :entity                  Define content that you want to send
 *   :entity-fn-params        In case entity is a function, define vector of it's params
 *                          example: [param1 param2]
 */
ajax_lib.core.ajax = (function ajax_lib$core$ajax(params_map){
var xhr = (new XMLHttpRequest());
var url = (cljs.core.truth_(cljs.core.deref(ajax_lib.core.base_url))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ajax_lib.core.base_url)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(params_map))].join(''):cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(params_map));
var request_method = (function (){var or__3949__auto__ = cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(params_map);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "POST";
}
})();
var request_header_map = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([ajax_lib.http.request_header.accept(),ajax_lib.http.mime_type.text_plain(),ajax_lib.http.entity_header.content_type(),ajax_lib.http.mime_type.text_plain()]),cljs.core.cst$kw$request_DASH_header_DASH_map.cljs$core$IFn$_invoke$arity$1(params_map));
var request_property_map = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, ["responseType",ajax_lib.http.mime_type.text_plain()], null),(cljs.core.truth_(cljs.core.deref(ajax_lib.core.with_credentials))?new cljs.core.PersistentArrayMap(null, 1, ["withCredentials",true], null):null));
var request_property_map__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(request_property_map,cljs.core.cst$kw$request_DASH_property_DASH_map.cljs$core$IFn$_invoke$arity$1(params_map));
var entity = cljs.core.cst$kw$entity.cljs$core$IFn$_invoke$arity$1(params_map);
var entity_fn_params = cljs.core.cst$kw$entity_DASH_fn_DASH_params.cljs$core$IFn$_invoke$arity$1(params_map);
var entity__$1 = ((cljs.core.fn_QMARK_(entity))?(entity.cljs$core$IFn$_invoke$arity$1 ? entity.cljs$core$IFn$_invoke$arity$1(entity_fn_params) : entity.call(null,entity_fn_params)):entity);
(xhr["onload"] = ((function (xhr,url,request_method,request_header_map,request_property_map,request_property_map__$1,entity,entity_fn_params,entity__$1){
return (function (){
return ajax_lib.core.onload(xhr,params_map);
});})(xhr,url,request_method,request_header_map,request_property_map,request_property_map__$1,entity,entity_fn_params,entity__$1))
);

xhr.open(request_method,url,true);

var seq__5919_5939 = cljs.core.seq(request_header_map);
var chunk__5920_5940 = null;
var count__5921_5941 = (0);
var i__5922_5942 = (0);
while(true){
if((i__5922_5942 < count__5921_5941)){
var vec__5923_5943 = chunk__5920_5940.cljs$core$IIndexed$_nth$arity$2(null,i__5922_5942);
var k_5944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5923_5943,(0),null);
var v_5945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5923_5943,(1),null);
ajax_lib.core.set_request_header(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_5944,v_5945], null));


var G__5946 = seq__5919_5939;
var G__5947 = chunk__5920_5940;
var G__5948 = count__5921_5941;
var G__5949 = (i__5922_5942 + (1));
seq__5919_5939 = G__5946;
chunk__5920_5940 = G__5947;
count__5921_5941 = G__5948;
i__5922_5942 = G__5949;
continue;
} else {
var temp__5457__auto___5950 = cljs.core.seq(seq__5919_5939);
if(temp__5457__auto___5950){
var seq__5919_5951__$1 = temp__5457__auto___5950;
if(cljs.core.chunked_seq_QMARK_(seq__5919_5951__$1)){
var c__4351__auto___5952 = cljs.core.chunk_first(seq__5919_5951__$1);
var G__5953 = cljs.core.chunk_rest(seq__5919_5951__$1);
var G__5954 = c__4351__auto___5952;
var G__5955 = cljs.core.count(c__4351__auto___5952);
var G__5956 = (0);
seq__5919_5939 = G__5953;
chunk__5920_5940 = G__5954;
count__5921_5941 = G__5955;
i__5922_5942 = G__5956;
continue;
} else {
var vec__5926_5957 = cljs.core.first(seq__5919_5951__$1);
var k_5958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5926_5957,(0),null);
var v_5959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5926_5957,(1),null);
ajax_lib.core.set_request_header(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_5958,v_5959], null));


var G__5960 = cljs.core.next(seq__5919_5951__$1);
var G__5961 = null;
var G__5962 = (0);
var G__5963 = (0);
seq__5919_5939 = G__5960;
chunk__5920_5940 = G__5961;
count__5921_5941 = G__5962;
i__5922_5942 = G__5963;
continue;
}
} else {
}
}
break;
}

var seq__5929_5964 = cljs.core.seq(request_property_map__$1);
var chunk__5930_5965 = null;
var count__5931_5966 = (0);
var i__5932_5967 = (0);
while(true){
if((i__5932_5967 < count__5931_5966)){
var vec__5933_5968 = chunk__5930_5965.cljs$core$IIndexed$_nth$arity$2(null,i__5932_5967);
var k_5969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5933_5968,(0),null);
var v_5970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5933_5968,(1),null);
ajax_lib.core.set_request_property(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_5969,v_5970], null));


var G__5971 = seq__5929_5964;
var G__5972 = chunk__5930_5965;
var G__5973 = count__5931_5966;
var G__5974 = (i__5932_5967 + (1));
seq__5929_5964 = G__5971;
chunk__5930_5965 = G__5972;
count__5931_5966 = G__5973;
i__5932_5967 = G__5974;
continue;
} else {
var temp__5457__auto___5975 = cljs.core.seq(seq__5929_5964);
if(temp__5457__auto___5975){
var seq__5929_5976__$1 = temp__5457__auto___5975;
if(cljs.core.chunked_seq_QMARK_(seq__5929_5976__$1)){
var c__4351__auto___5977 = cljs.core.chunk_first(seq__5929_5976__$1);
var G__5978 = cljs.core.chunk_rest(seq__5929_5976__$1);
var G__5979 = c__4351__auto___5977;
var G__5980 = cljs.core.count(c__4351__auto___5977);
var G__5981 = (0);
seq__5929_5964 = G__5978;
chunk__5930_5965 = G__5979;
count__5931_5966 = G__5980;
i__5932_5967 = G__5981;
continue;
} else {
var vec__5936_5982 = cljs.core.first(seq__5929_5976__$1);
var k_5983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5936_5982,(0),null);
var v_5984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5936_5982,(1),null);
ajax_lib.core.set_request_property(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_5983,v_5984], null));


var G__5985 = cljs.core.next(seq__5929_5976__$1);
var G__5986 = null;
var G__5987 = (0);
var G__5988 = (0);
seq__5929_5964 = G__5985;
chunk__5930_5965 = G__5986;
count__5931_5966 = G__5987;
i__5932_5967 = G__5988;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(entity__$1)){
return xhr.send(entity__$1);
} else {
return xhr.send();
}
});
/**
 * Synchronous javascript and XML
 * 
 * Same as ajax, except this function waits for server response
 */
ajax_lib.core.sjax = (function ajax_lib$core$sjax(params_map){
var xhr = (new XMLHttpRequest());
var url = (cljs.core.truth_(cljs.core.deref(ajax_lib.core.base_url))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ajax_lib.core.base_url)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(params_map))].join(''):cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(params_map));
var request_method = (function (){var or__3949__auto__ = cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(params_map);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "POST";
}
})();
var request_header_map = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([ajax_lib.http.request_header.accept(),ajax_lib.http.mime_type.text_plain(),ajax_lib.http.entity_header.content_type(),ajax_lib.http.mime_type.text_plain()]),cljs.core.cst$kw$request_DASH_header_DASH_map.cljs$core$IFn$_invoke$arity$1(params_map));
var request_property_map = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, ["responseType",ajax_lib.http.mime_type.text_plain()], null),(cljs.core.truth_(cljs.core.deref(ajax_lib.core.with_credentials))?new cljs.core.PersistentArrayMap(null, 1, ["withCredentials",true], null):null));
var request_property_map__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(request_property_map,cljs.core.cst$kw$request_DASH_property_DASH_map.cljs$core$IFn$_invoke$arity$1(params_map));
var entity = cljs.core.cst$kw$entity.cljs$core$IFn$_invoke$arity$1(params_map);
var entity_fn_params = cljs.core.cst$kw$entity_DASH_fn_DASH_params.cljs$core$IFn$_invoke$arity$1(params_map);
var entity__$1 = ((cljs.core.fn_QMARK_(entity))?(entity.cljs$core$IFn$_invoke$arity$1 ? entity.cljs$core$IFn$_invoke$arity$1(entity_fn_params) : entity.call(null,entity_fn_params)):entity);
xhr.open(request_method,url,false);

var seq__5989_6010 = cljs.core.seq(request_header_map);
var chunk__5990_6011 = null;
var count__5991_6012 = (0);
var i__5992_6013 = (0);
while(true){
if((i__5992_6013 < count__5991_6012)){
var vec__5993_6014 = chunk__5990_6011.cljs$core$IIndexed$_nth$arity$2(null,i__5992_6013);
var k_6015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5993_6014,(0),null);
var v_6016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5993_6014,(1),null);
ajax_lib.core.set_request_header(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_6015,v_6016], null));


var G__6017 = seq__5989_6010;
var G__6018 = chunk__5990_6011;
var G__6019 = count__5991_6012;
var G__6020 = (i__5992_6013 + (1));
seq__5989_6010 = G__6017;
chunk__5990_6011 = G__6018;
count__5991_6012 = G__6019;
i__5992_6013 = G__6020;
continue;
} else {
var temp__5457__auto___6021 = cljs.core.seq(seq__5989_6010);
if(temp__5457__auto___6021){
var seq__5989_6022__$1 = temp__5457__auto___6021;
if(cljs.core.chunked_seq_QMARK_(seq__5989_6022__$1)){
var c__4351__auto___6023 = cljs.core.chunk_first(seq__5989_6022__$1);
var G__6024 = cljs.core.chunk_rest(seq__5989_6022__$1);
var G__6025 = c__4351__auto___6023;
var G__6026 = cljs.core.count(c__4351__auto___6023);
var G__6027 = (0);
seq__5989_6010 = G__6024;
chunk__5990_6011 = G__6025;
count__5991_6012 = G__6026;
i__5992_6013 = G__6027;
continue;
} else {
var vec__5996_6028 = cljs.core.first(seq__5989_6022__$1);
var k_6029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5996_6028,(0),null);
var v_6030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5996_6028,(1),null);
ajax_lib.core.set_request_header(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_6029,v_6030], null));


var G__6031 = cljs.core.next(seq__5989_6022__$1);
var G__6032 = null;
var G__6033 = (0);
var G__6034 = (0);
seq__5989_6010 = G__6031;
chunk__5990_6011 = G__6032;
count__5991_6012 = G__6033;
i__5992_6013 = G__6034;
continue;
}
} else {
}
}
break;
}

var seq__5999_6035 = cljs.core.seq(request_property_map__$1);
var chunk__6000_6036 = null;
var count__6001_6037 = (0);
var i__6002_6038 = (0);
while(true){
if((i__6002_6038 < count__6001_6037)){
var vec__6003_6039 = chunk__6000_6036.cljs$core$IIndexed$_nth$arity$2(null,i__6002_6038);
var k_6040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6003_6039,(0),null);
var v_6041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6003_6039,(1),null);
ajax_lib.core.set_request_property(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_6040,v_6041], null));


var G__6042 = seq__5999_6035;
var G__6043 = chunk__6000_6036;
var G__6044 = count__6001_6037;
var G__6045 = (i__6002_6038 + (1));
seq__5999_6035 = G__6042;
chunk__6000_6036 = G__6043;
count__6001_6037 = G__6044;
i__6002_6038 = G__6045;
continue;
} else {
var temp__5457__auto___6046 = cljs.core.seq(seq__5999_6035);
if(temp__5457__auto___6046){
var seq__5999_6047__$1 = temp__5457__auto___6046;
if(cljs.core.chunked_seq_QMARK_(seq__5999_6047__$1)){
var c__4351__auto___6048 = cljs.core.chunk_first(seq__5999_6047__$1);
var G__6049 = cljs.core.chunk_rest(seq__5999_6047__$1);
var G__6050 = c__4351__auto___6048;
var G__6051 = cljs.core.count(c__4351__auto___6048);
var G__6052 = (0);
seq__5999_6035 = G__6049;
chunk__6000_6036 = G__6050;
count__6001_6037 = G__6051;
i__6002_6038 = G__6052;
continue;
} else {
var vec__6006_6053 = cljs.core.first(seq__5999_6047__$1);
var k_6054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6006_6053,(0),null);
var v_6055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6006_6053,(1),null);
ajax_lib.core.set_request_property(xhr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_6054,v_6055], null));


var G__6056 = cljs.core.next(seq__5999_6047__$1);
var G__6057 = null;
var G__6058 = (0);
var G__6059 = (0);
seq__5999_6035 = G__6056;
chunk__6000_6036 = G__6057;
count__6001_6037 = G__6058;
i__6002_6038 = G__6059;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(entity__$1)){
xhr.send(entity__$1);
} else {
xhr.send();
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((xhr["readyState"]),(4))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((xhr["status"]),(200))))){
console.log(xhr);
} else {
var G__6009_6060 = (xhr["status"]);
switch (G__6009_6060) {
case (1):
console.log("OPENED");

break;
case (2):
console.log("HEADERS_RECEIVED");

break;
case (3):
console.log("LOADING");

break;
default:
console.error(xhr);

}
}

return xhr;
});
