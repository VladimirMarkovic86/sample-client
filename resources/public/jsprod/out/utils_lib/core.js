// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('utils_lib.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Round up divided numbers
 */
utils_lib.core.round_up = (function utils_lib$core$round_up(number1,number2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(number1,number2))){
return ((number1 / number2) | (0));
} else {
return (((number1 / number2) | (0)) + (1));
}
});
/**
 * Round number to particular number of decimals
 */
utils_lib.core.round_decimals = (function utils_lib$core$round_decimals(number,decimals_num){
var number_i = (number | (0));
var number_ii = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((number - number_i));
var divider = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var seq__6064_6072 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(decimals_num));
var chunk__6065_6073 = null;
var count__6066_6074 = (0);
var i__6067_6075 = (0);
while(true){
if((i__6067_6075 < count__6066_6074)){
var itr_6076 = chunk__6065_6073.cljs$core$IIndexed$_nth$arity$2(null,i__6067_6075);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(number_ii,cljs.core._STAR_,(10));


var G__6077 = seq__6064_6072;
var G__6078 = chunk__6065_6073;
var G__6079 = count__6066_6074;
var G__6080 = (i__6067_6075 + (1));
seq__6064_6072 = G__6077;
chunk__6065_6073 = G__6078;
count__6066_6074 = G__6079;
i__6067_6075 = G__6080;
continue;
} else {
var temp__5457__auto___6081 = cljs.core.seq(seq__6064_6072);
if(temp__5457__auto___6081){
var seq__6064_6082__$1 = temp__5457__auto___6081;
if(cljs.core.chunked_seq_QMARK_(seq__6064_6082__$1)){
var c__4351__auto___6083 = cljs.core.chunk_first(seq__6064_6082__$1);
var G__6084 = cljs.core.chunk_rest(seq__6064_6082__$1);
var G__6085 = c__4351__auto___6083;
var G__6086 = cljs.core.count(c__4351__auto___6083);
var G__6087 = (0);
seq__6064_6072 = G__6084;
chunk__6065_6073 = G__6085;
count__6066_6074 = G__6086;
i__6067_6075 = G__6087;
continue;
} else {
var itr_6088 = cljs.core.first(seq__6064_6082__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(number_ii,cljs.core._STAR_,(10));


var G__6089 = cljs.core.next(seq__6064_6082__$1);
var G__6090 = null;
var G__6091 = (0);
var G__6092 = (0);
seq__6064_6072 = G__6089;
chunk__6065_6073 = G__6090;
count__6066_6074 = G__6091;
i__6067_6075 = G__6092;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(number_ii,cljs.core.int$);

var seq__6068_6093 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(decimals_num));
var chunk__6069_6094 = null;
var count__6070_6095 = (0);
var i__6071_6096 = (0);
while(true){
if((i__6071_6096 < count__6070_6095)){
var itr_6097 = chunk__6069_6094.cljs$core$IIndexed$_nth$arity$2(null,i__6071_6096);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(divider,cljs.core._STAR_,(10));


var G__6098 = seq__6068_6093;
var G__6099 = chunk__6069_6094;
var G__6100 = count__6070_6095;
var G__6101 = (i__6071_6096 + (1));
seq__6068_6093 = G__6098;
chunk__6069_6094 = G__6099;
count__6070_6095 = G__6100;
i__6071_6096 = G__6101;
continue;
} else {
var temp__5457__auto___6102 = cljs.core.seq(seq__6068_6093);
if(temp__5457__auto___6102){
var seq__6068_6103__$1 = temp__5457__auto___6102;
if(cljs.core.chunked_seq_QMARK_(seq__6068_6103__$1)){
var c__4351__auto___6104 = cljs.core.chunk_first(seq__6068_6103__$1);
var G__6105 = cljs.core.chunk_rest(seq__6068_6103__$1);
var G__6106 = c__4351__auto___6104;
var G__6107 = cljs.core.count(c__4351__auto___6104);
var G__6108 = (0);
seq__6068_6093 = G__6105;
chunk__6069_6094 = G__6106;
count__6070_6095 = G__6107;
i__6071_6096 = G__6108;
continue;
} else {
var itr_6109 = cljs.core.first(seq__6068_6103__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(divider,cljs.core._STAR_,(10));


var G__6110 = cljs.core.next(seq__6068_6103__$1);
var G__6111 = null;
var G__6112 = (0);
var G__6113 = (0);
seq__6068_6093 = G__6110;
chunk__6069_6094 = G__6111;
count__6070_6095 = G__6112;
i__6071_6096 = G__6113;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(number_ii,cljs.core._SLASH_,cljs.core.deref(divider));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(number_ii,cljs.core.double$);

return (number_i + cljs.core.deref(number_ii));
});
/**
 * Additional function for remove-index-from-vector fn
 * determine if index and data at that index in vector should be removed
 */
utils_lib.core.find_index_to_remove = (function utils_lib$core$find_index_to_remove(itr,index_to_remove,current_index){
while(true){
if((current_index < cljs.core.count(index_to_remove))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(itr,(index_to_remove.cljs$core$IFn$_invoke$arity$1 ? index_to_remove.cljs$core$IFn$_invoke$arity$1(current_index) : index_to_remove.call(null,current_index)))){
return current_index;
} else {
var G__6114 = itr;
var G__6115 = index_to_remove;
var G__6116 = (current_index + (1));
itr = G__6114;
index_to_remove = G__6115;
current_index = G__6116;
continue;
}
} else {
return false;
}
break;
}
});
/**
 * Remove data at particular index or indexes
 * 
 * data-vector is simple vector with elements of any data type
 * index is single number od vector of numbers that represent index/es
 * that should be removed
 */
utils_lib.core.remove_index_from_vector = (function utils_lib$core$remove_index_from_vector(data_vector,index){
var removed_index = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,elem){
var itr = cljs.core.cst$kw$itr.cljs$core$IFn$_invoke$arity$1(acc);
var index_to_remove = cljs.core.cst$kw$index_DASH_to_DASH_remove.cljs$core$IFn$_invoke$arity$1(acc);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(acc);
var compared_index = utils_lib.core.find_index_to_remove(itr,index_to_remove,(0));
if(cljs.core.truth_(compared_index)){
if((cljs.core.count(index_to_remove) < (2))){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$itr,(itr + (1)),cljs.core.cst$kw$index_DASH_to_DASH_remove,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$result,result], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$itr,(itr + (1)),cljs.core.cst$kw$index_DASH_to_DASH_remove,(utils_lib.core.remove_index_from_vector.cljs$core$IFn$_invoke$arity$2 ? utils_lib.core.remove_index_from_vector.cljs$core$IFn$_invoke$arity$2(index_to_remove,compared_index) : utils_lib.core.remove_index_from_vector.call(null,index_to_remove,compared_index)),cljs.core.cst$kw$result,result], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$itr,(itr + (1)),cljs.core.cst$kw$index_DASH_to_DASH_remove,index_to_remove,cljs.core.cst$kw$result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,elem)], null);
}
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$itr,(0),cljs.core.cst$kw$index_DASH_to_DASH_remove,((cljs.core.vector_QMARK_(index))?index:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null)),cljs.core.cst$kw$result,cljs.core.PersistentVector.EMPTY], null),data_vector);
return cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(removed_index);
});
/**
 * Replace data in vector on particular indexes
 * 
 * data-vector is vector with elements of any data type
 * element is single element or vector of elements that are going to replace old data
 * index is single number or vector of numbers that represent positions in data vector
 *  where replacement/s will take place
 */
utils_lib.core.replace_in_vector_on_index = (function utils_lib$core$replace_in_vector_on_index(data_vector,element,index){
var replaced_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,elem){
var itr = cljs.core.cst$kw$itr.cljs$core$IFn$_invoke$arity$1(acc);
var replace_on_index = cljs.core.cst$kw$replace_DASH_on_DASH_index.cljs$core$IFn$_invoke$arity$1(acc);
var replace_element = cljs.core.cst$kw$replace_DASH_element.cljs$core$IFn$_invoke$arity$1(acc);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(acc);
var compared_index = utils_lib.core.find_index_to_remove(itr,replace_on_index,(0));
if(cljs.core.truth_(compared_index)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$itr,(itr + (1)),cljs.core.cst$kw$replace_DASH_on_DASH_index,utils_lib.core.remove_index_from_vector(replace_on_index,compared_index),cljs.core.cst$kw$replace_DASH_element,utils_lib.core.remove_index_from_vector(replace_element,compared_index),cljs.core.cst$kw$result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(replace_element.cljs$core$IFn$_invoke$arity$1 ? replace_element.cljs$core$IFn$_invoke$arity$1(compared_index) : replace_element.call(null,compared_index)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$itr,(itr + (1)),cljs.core.cst$kw$replace_DASH_on_DASH_index,replace_on_index,cljs.core.cst$kw$replace_DASH_element,replace_element,cljs.core.cst$kw$result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,elem)], null);
}
}),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$itr,(0),cljs.core.cst$kw$replace_DASH_on_DASH_index,((cljs.core.vector_QMARK_(index))?index:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null)),cljs.core.cst$kw$replace_DASH_element,((cljs.core.vector_QMARK_(index))?element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)),cljs.core.cst$kw$result,cljs.core.PersistentVector.EMPTY], null),data_vector);
return cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(replaced_elements);
});
/**
 * Insert data in vector
 *   
 * data-vector is vector with elements of any data type
 * element is single element or vector of elements that are going to be inserted
 *  in data vector
 * index is single number or vector of numbers that represent positions in data-vector
 *  where element/s will be inserted
 */
utils_lib.core.insert_in_vector_on_index = (function utils_lib$core$insert_in_vector_on_index(data_vector,element,index){
var inserted_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,elem){
var itr = cljs.core.cst$kw$itr.cljs$core$IFn$_invoke$arity$1(acc);
var insert_on_index = cljs.core.cst$kw$insert_DASH_on_DASH_index.cljs$core$IFn$_invoke$arity$1(acc);
var insert_element = cljs.core.cst$kw$insert_DASH_element.cljs$core$IFn$_invoke$arity$1(acc);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(itr,insert_on_index)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$itr,(itr + (1)),cljs.core.cst$kw$insert_DASH_on_DASH_index,(-1),cljs.core.cst$kw$insert_DASH_element,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$result,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,result,insert_element)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$itr,(itr + (1)),cljs.core.cst$kw$insert_DASH_on_DASH_index,insert_on_index,cljs.core.cst$kw$insert_DASH_element,insert_element,cljs.core.cst$kw$result,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,elem)], null);
}
}),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$itr,(0),cljs.core.cst$kw$insert_DASH_on_DASH_index,index,cljs.core.cst$kw$insert_DASH_element,((cljs.core.vector_QMARK_(element))?element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)),cljs.core.cst$kw$result,cljs.core.PersistentVector.EMPTY], null),data_vector);
return cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inserted_elements);
});
/**
 * example:
 *   file-pathe  public/index.html
 */
utils_lib.core.read_file = (function utils_lib$core$read_file(file_path){
return null;
});
utils_lib.core.pass_key = "password-key";
/**
 * Encrypt password
 */
utils_lib.core.encrypt_password = (function utils_lib$core$encrypt_password(password){
var pass_key_len = cljs.core.count(utils_lib.core.pass_key);
var pass_len = cljs.core.count(password);
var encrypted_password = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var seq__6117_6121 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pass_len));
var chunk__6118_6122 = null;
var count__6119_6123 = (0);
var i__6120_6124 = (0);
while(true){
if((i__6120_6124 < count__6119_6123)){
var itr_6125 = chunk__6118_6122.cljs$core$IIndexed$_nth$arity$2(null,i__6120_6124);
var key_char_6126 = (password[itr_6125]);
var pass_key_char_6127 = (utils_lib.core.pass_key[cljs.core.mod(itr_6125,pass_key_len)]);
var key_char_code_6128 = key_char_6126.charCodeAt((0));
var key_pass_code_6129 = (key_char_6126.charCodeAt((0)) + pass_key_char_6127.charCodeAt((0)));
var key_pass_char_6130 = String.fromCharCode(key_pass_code_6129);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(encrypted_password,cljs.core.str,key_pass_char_6130);


var G__6131 = seq__6117_6121;
var G__6132 = chunk__6118_6122;
var G__6133 = count__6119_6123;
var G__6134 = (i__6120_6124 + (1));
seq__6117_6121 = G__6131;
chunk__6118_6122 = G__6132;
count__6119_6123 = G__6133;
i__6120_6124 = G__6134;
continue;
} else {
var temp__5457__auto___6135 = cljs.core.seq(seq__6117_6121);
if(temp__5457__auto___6135){
var seq__6117_6136__$1 = temp__5457__auto___6135;
if(cljs.core.chunked_seq_QMARK_(seq__6117_6136__$1)){
var c__4351__auto___6137 = cljs.core.chunk_first(seq__6117_6136__$1);
var G__6138 = cljs.core.chunk_rest(seq__6117_6136__$1);
var G__6139 = c__4351__auto___6137;
var G__6140 = cljs.core.count(c__4351__auto___6137);
var G__6141 = (0);
seq__6117_6121 = G__6138;
chunk__6118_6122 = G__6139;
count__6119_6123 = G__6140;
i__6120_6124 = G__6141;
continue;
} else {
var itr_6142 = cljs.core.first(seq__6117_6136__$1);
var key_char_6143 = (password[itr_6142]);
var pass_key_char_6144 = (utils_lib.core.pass_key[cljs.core.mod(itr_6142,pass_key_len)]);
var key_char_code_6145 = key_char_6143.charCodeAt((0));
var key_pass_code_6146 = (key_char_6143.charCodeAt((0)) + pass_key_char_6144.charCodeAt((0)));
var key_pass_char_6147 = String.fromCharCode(key_pass_code_6146);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(encrypted_password,cljs.core.str,key_pass_char_6147);


var G__6148 = cljs.core.next(seq__6117_6136__$1);
var G__6149 = null;
var G__6150 = (0);
var G__6151 = (0);
seq__6117_6121 = G__6148;
chunk__6118_6122 = G__6149;
count__6119_6123 = G__6150;
i__6120_6124 = G__6151;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(encrypted_password);
});
/**
 * Decrypt password
 */
utils_lib.core.decrypt_password = (function utils_lib$core$decrypt_password(encrypted_password){
var pass_key_len = cljs.core.count(utils_lib.core.pass_key);
var pass_len = cljs.core.count(encrypted_password);
var decrypted_password = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var seq__6152_6156 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(pass_len));
var chunk__6153_6157 = null;
var count__6154_6158 = (0);
var i__6155_6159 = (0);
while(true){
if((i__6155_6159 < count__6154_6158)){
var itr_6160 = chunk__6153_6157.cljs$core$IIndexed$_nth$arity$2(null,i__6155_6159);
var key_char_6161 = (encrypted_password[itr_6160]);
var pass_key_char_6162 = (utils_lib.core.pass_key[cljs.core.mod(itr_6160,pass_key_len)]);
var key_char_code_6163 = key_char_6161.charCodeAt((0));
var key_pass_code_6164 = (key_char_6161.charCodeAt((0)) - pass_key_char_6162.charCodeAt((0)));
var key_pass_char_6165 = String.fromCharCode(key_pass_code_6164);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(decrypted_password,cljs.core.str,key_pass_char_6165);


var G__6166 = seq__6152_6156;
var G__6167 = chunk__6153_6157;
var G__6168 = count__6154_6158;
var G__6169 = (i__6155_6159 + (1));
seq__6152_6156 = G__6166;
chunk__6153_6157 = G__6167;
count__6154_6158 = G__6168;
i__6155_6159 = G__6169;
continue;
} else {
var temp__5457__auto___6170 = cljs.core.seq(seq__6152_6156);
if(temp__5457__auto___6170){
var seq__6152_6171__$1 = temp__5457__auto___6170;
if(cljs.core.chunked_seq_QMARK_(seq__6152_6171__$1)){
var c__4351__auto___6172 = cljs.core.chunk_first(seq__6152_6171__$1);
var G__6173 = cljs.core.chunk_rest(seq__6152_6171__$1);
var G__6174 = c__4351__auto___6172;
var G__6175 = cljs.core.count(c__4351__auto___6172);
var G__6176 = (0);
seq__6152_6156 = G__6173;
chunk__6153_6157 = G__6174;
count__6154_6158 = G__6175;
i__6155_6159 = G__6176;
continue;
} else {
var itr_6177 = cljs.core.first(seq__6152_6171__$1);
var key_char_6178 = (encrypted_password[itr_6177]);
var pass_key_char_6179 = (utils_lib.core.pass_key[cljs.core.mod(itr_6177,pass_key_len)]);
var key_char_code_6180 = key_char_6178.charCodeAt((0));
var key_pass_code_6181 = (key_char_6178.charCodeAt((0)) - pass_key_char_6179.charCodeAt((0)));
var key_pass_char_6182 = String.fromCharCode(key_pass_code_6181);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(decrypted_password,cljs.core.str,key_pass_char_6182);


var G__6183 = cljs.core.next(seq__6152_6171__$1);
var G__6184 = null;
var G__6185 = (0);
var G__6186 = (0);
seq__6152_6156 = G__6183;
chunk__6153_6157 = G__6184;
count__6154_6158 = G__6185;
i__6155_6159 = G__6186;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(decrypted_password);
});
/**
 * Read entity-body from request, convert from string to clojure data
 */
utils_lib.core.parse_body = (function utils_lib$core$parse_body(request){
return null;
});
