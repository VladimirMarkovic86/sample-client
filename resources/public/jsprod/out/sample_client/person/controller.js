// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sample_client.person.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('js_lib.core');
goog.require('framework_lib.core');
goog.require('sample_client.person.entity');
goog.require('sample_client.person.html');
/**
 * Process these functions after link is clicked in main menu
 */
sample_client.person.controller.nav_link = (function sample_client$person$controller$nav_link(){
js_lib.core.remove_element_content(".content");

js_lib.core.append_element(".content",framework_lib.core.gen_table(sample_client.person.entity.table_conf_fn()));

js_lib.core.remove_element_content(".sidebar-menu");

return js_lib.core.append_element(".sidebar-menu",sample_client.person.html.nav());
});
