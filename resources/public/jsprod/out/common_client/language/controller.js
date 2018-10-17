// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('common_client.language.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('js_lib.core');
goog.require('framework_lib.core');
goog.require('common_client.language.entity');
goog.require('common_client.language.html');
/**
 * Process these functions after link is clicked in main menu
 */
common_client.language.controller.nav_link = (function common_client$language$controller$nav_link(){
js_lib.core.remove_element_content(".content");

js_lib.core.append_element(".content",framework_lib.core.gen_table(common_client.language.entity.table_conf_fn()));

js_lib.core.remove_element_content(".sidebar-menu");

return js_lib.core.append_element(".sidebar-menu",common_client.language.html.nav());
});
