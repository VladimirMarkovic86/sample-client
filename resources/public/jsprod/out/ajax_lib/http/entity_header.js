// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax_lib.http.entity_header');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Allow entity-header field lists the set of methods supported by the resource identified by the Request-URI
 * 
 * example: GET, HEAD, PUT
 * 
 * https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.7
 */
ajax_lib.http.entity_header.allow = (function ajax_lib$http$entity_header$allow(){
return "Allow";
});
/**
 * Content encoding entity-header field is used as modifier to the media-type. When present, its value indicates what additional content codings have been applied to the entity-body, and thus what decoding mechanisms must be applied in order to obtain the media-type referenced by the Content-Type header field. Content-Encoding is primarily used to allow a document to be compressed without losing the identity of its underlying media type.
 * 
 * example: gzip
 * 
 * https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11
 */
ajax_lib.http.entity_header.content_encoding = (function ajax_lib$http$entity_header$content_encoding(){
return "Content-Encoding";
});
/**
 * Content language entity-header field describes the natural language(s) of the intended audience for the enclosed entity. Note that this might not be equivalent to all the languages used within the entity-body.
 *  
 *   example: da
 *     <language-tag>
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12
 */
ajax_lib.http.entity_header.content_language = (function ajax_lib$http$entity_header$content_language(){
return "Content-Language";
});
/**
 * Content length entity-header field indicates the size of the entity-body, in decimal number of OCTETs, sent to the recipient or, in the case of the HEAD method, the size of the entity-body that would have been sent had the request been GET.
 *  
 *   example: 1*DIGIT
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13
 */
ajax_lib.http.entity_header.content_length = (function ajax_lib$http$entity_header$content_length(){
return "Content-Length";
});
/**
 * Content location entity-header field MAY be used to supply the resource location for the entity enclosed in the message when that entity is accessible from a location separate from the requested resource's URI.
 *  
 *   example: ( absoluteURI | relativeURI )
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.14
 */
ajax_lib.http.entity_header.content_location = (function ajax_lib$http$entity_header$content_location(){
return "Content-Location";
});
/**
 * Content MD5 entity-header field is an MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check (MIC) of the entity-body. (Note; a MIC is good for detecting accidental modification of the entity-body in transit, but is not proof against malicious attacs.)
 *  
 *   example: <base64 of 128 bit MD5 digest>
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.15
 */
ajax_lib.http.entity_header.content_md5 = (function ajax_lib$http$entity_header$content_md5(){
return "Content-MD5";
});
/**
 * Content range entity-header field is sent with a partial entity-body to specify where in the full entity-body the partial body should be applied.
 *  
 *   example: 0-499
 *     9500-
 *      <first-byte-pos>-[<last-byte-pos>]
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16
 */
ajax_lib.http.entity_header.content_range = (function ajax_lib$http$entity_header$content_range(){
return "Content-Range";
});
/**
 * Content type entity-header field indicates the media type of the entity-body sent to the recipient or, in case of the HEAD method, the media type that would have been sent had the request been a GET.
 *  
 *   example: text/html; charset=ISO-8859-4
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17
 */
ajax_lib.http.entity_header.content_type = (function ajax_lib$http$entity_header$content_type(){
return "Content-Type";
});
/**
 * Expires entity-header field gives the date/time after which the response is considered stale. A stale cache entry may not normally be returned by a cache (either a proxy cache or a user agent cache) unless it is first validated with the origin server (or with an intermediate cache that has a fresh copy of the entity)
 *  
 *   example: Thu, 01 Dec 1994 16:00:00 GMT
 *     -HTTP-date
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21
 */
ajax_lib.http.entity_header.expires = (function ajax_lib$http$entity_header$expires(){
return "Expires";
});
/**
 * Last modified entity-header field indicates the date and time at which the origin server believes the variant was last-modified.
 *  
 *   example: Thu, 01 Dec 1994 16:00:00 GMT
 *     -HTTP-date
 *  
 *   https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.29
 */
ajax_lib.http.entity_header.last_modified = (function ajax_lib$http$entity_header$last_modified(){
return "Last-Modified";
});
