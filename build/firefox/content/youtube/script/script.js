/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Mozilla Firefox",slug:"firefox",version:"0.1.8"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",DISSENTER_HOME_PAGE_URI="https://dissenter.com",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",COMMENT_COUNT_URI="https://dissenter.com/notification/comment-count?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",BACKGROUND_ACTION_GET_KEY="get_key",BACKGROUND_ACTION_SET_KEY="set_key",BACKGROUND_ACTION_SET_BADGE="set_badge",BACKGROUND_ACTION_TAB_UPDATED="tab_updated",COLOR_GAB_GREEN="#21cf7b",SEARCH_ENGINES=[{name:"DuckDuckGo",url:"https://duckduckgo.com/?q=",icon:"duckduckgo.svg"},{name:"Startpage",url:"https://www.startpage.com/do/search?q=",icon:"startpage.png"},{name:"Bing",url:"https://www.bing.com/search?q=",icon:"bing.svg"},{name:"Yahoo!",url:"https://search.yahoo.com/search?p=",icon:"yahoo.svg"},{name:"Google",url:"https://www.google.com/search?q=",icon:"google.svg"}],STORAGE_BASE="gab_dissenter_extension_data",TWITTER_BUTTONS_ENABLED="twitter_buttons_enabled",REDDIT_BUTTONS_ENABLED="reddit_buttons_enabled",YOUTUBE_BUTTONS_ENABLED="youtube_buttons_enabled",WINDOW_SIDEBAR_UNAVAILABLE_ENABLED="window_sidebar_unavailable_enabled",WEBSITE_COMMENT_BADGE_ENABLED="website_comment_badge_enabled",DISSENT_DISQUS_BUTTONS_ENABLED="dissent_disqus_buttons_enabled",WIKIPEDIA_BUTTONS_ENABLED="wikipedia_buttons_enabled",NT_DEFAULT_SEARCH_ENGINE="nt_default_search_engine",NT_TOP_SITES_ENABLED="nt_top_sites_enabled",NT_TOP_SITES_LIMIT="nt_top_sites_limit",NT_TOP_SITES_SIZE="nt_top_sites_size",NT_TOP_SITES_SHAPE="nt_top_sites_shape",NT_TOP_SITES_HIGHLIGHT="nt_top_sites_highlight",NT_TOP_SITES_SHOW_TITLE="nt_top_sites_show_title",NT_DATETIME_SHOW_DATE="nt_datetime_show_date",NT_DATETIME_SHOW_TIME="nt_datetime_show_time",NT_COLORS_SEARCH="nt_colors_search",NT_COLORS_TEXT="nt_colors_text",NT_BACKGROUND_RANDOM="nt_background_random",NT_BACKGROUND_SOLID_COLOR="nt_background_solid_color",NT_BACKGROUND_IMAGE="nt_background_image",NT_BACKGROUND_RANDOM_GRADIENT="nt_background_random_gradient",NT_DISSENTER_ENABLED="nt_dissenter_enabled",NT_DISSENTER_DEFAULT_TAB="nt_dissenter_default_tab",STORAGE_DEFAULT_PARAMS={};STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED]=!1,STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED]=!1,STORAGE_DEFAULT_PARAMS[WIKIPEDIA_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[NT_DEFAULT_SEARCH_ENGINE]=SEARCH_ENGINES[0],STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_ENABLED]=!1,STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_LIMIT]=10,STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SIZE]="md",STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHAPE]="circle",STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_HIGHLIGHT]="light",STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHOW_TITLE]=!0,STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_DATE]=!0,STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_TIME]=!0,STORAGE_DEFAULT_PARAMS[NT_COLORS_SEARCH]="white",STORAGE_DEFAULT_PARAMS[NT_COLORS_TEXT]="white",STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM]=!1,STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_SOLID_COLOR]="",STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE]="",STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM_GRADIENT]=!0,STORAGE_DEFAULT_PARAMS[NT_DISSENTER_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[NT_DISSENTER_DEFAULT_TAB]="home";var STORAGE_KEY_ALL="all",isObject=function(t){return!isArray(t)&&!isDate(t)&&(null!==t&&"object"==typeof t)},isString=function(t){return"string"==typeof t||t instanceof String},isDate=function(t){return!isString(t)&&!isArray(t)&&null!=t&&null!=t&&(t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t))},isArray=function(t){return Array.isArray(t)};function ready(t){var e=document;"loading"==e.readyState?e.addEventListener("DOMContentLoaded",t):t()}function getQueryStringValue(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function getDissenterDLogoAsSVG(t,e,_,r){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.style.setProperty("height",t,"important"),n.style.setProperty("width",e,"important"),n.setAttribute("version","1.1"),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),n.setAttribute("viewBox","0 0 500 500");var o=document.createElementNS("http://www.w3.org/2000/svg","g");o.style.setProperty("transform","translate(17, 37)","important");var i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M244.885937,0 L193.657763,0 L65.5018905,0 L45.5665325,0 C20.4992438,0 0,20.5016933 0,45.5466667 L0,381.453333 C0,406.504 20.4992438,427 45.5665325,427 L65.5018905,427 L193.657763,427 L244.885937,427 C389.348933,427 467,326.3134 467,213.5 C467,100.6866 393.563837,0 244.885937,0"),i.setAttribute("fill",_);var E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d","M309.275885,155 L121.729792,155 C115.246045,155 110,149.623395 110,143.002906 C110,136.376605 115.246045,131 121.729792,131 L309.275885,131 C315.759633,131 321,136.376605 321,143.002906 C321,149.623395 315.759633,155 309.275885,155"),E.setAttribute("fill",r);var s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d","M309.275885,225 L121.729792,225 C115.246045,225 110,219.623395 110,213.002906 C110,206.376605 115.246045,201 121.729792,201 L309.275885,201 C315.759633,201 321,206.376605 321,213.002906 C321,219.623395 315.759633,225 309.275885,225"),s.setAttribute("fill",r);var A=document.createElementNS("http://www.w3.org/2000/svg","path");return A.setAttribute("d","M121.78718,296 C115.271711,296 110,290.623395 110,284.002906 C110,277.376605 115.271711,272 121.78718,272 L247.218525,272 C253.733994,272 259,277.376605 259,284.002906 C259,290.623395 253.733994,296 247.218525,296 L121.78718,296 Z"),A.setAttribute("fill",r),o.appendChild(i),o.appendChild(E),o.appendChild(s),o.appendChild(A),n.appendChild(o),n}function addManyClasses(t,e){if(!isArray(e))return!1;for(var _=0,r=e.length;_<r;_++)t.classList.add(e[_])}function removeManyClasses(t,e){if(!isArray(e))return!1;for(var _=0,r=e.length;_<r;_++)t.classList.remove(e[_])}var GDYoutube=function(){function _(){var t=document.querySelector("#top-row.style-scope.ytd-video-secondary-info-renderer");if(!t)return setTimeout(function(){_()},500),!1;var e=function(){var t=document.createElement("div");t.style.setProperty("display","inline-block","important"),t.style.setProperty("width","140px","important"),t.style.setProperty("height","50px","important"),t.style.setProperty("padding","7px","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("box-sizing","border-box","important");var e=getDissenterDLogoAsSVG("18px","18px","#fff",COLOR_GAB_GREEN);e.style.setProperty("display","inline-block","important"),e.style.setProperty("vertical-align","middle","important"),e.style.setProperty("margin-right","8px","important");var _=document.createElement("a");_.style.setProperty("display","inline-block","important"),_.style.setProperty("width","100%","important"),_.style.setProperty("height","100%","important"),_.style.setProperty("padding","10px","important"),_.style.setProperty("background-color",COLOR_GAB_GREEN,"important"),_.style.setProperty("border-radius","2px","important"),_.style.setProperty("text-align","center","important"),_.style.setProperty("box-sizing","border-box","important"),_.style.setProperty("cursor","pointer","important");var r=document.createElement("span");return r.textContent="Dissent This",r.style.setProperty("display","inline-block","important"),r.style.setProperty("color","#fff","important"),r.style.setProperty("text-align","left","important"),r.style.setProperty("font-size","14px","important"),r.style.setProperty("box-sizing","border-box","important"),r.style.setProperty("vertical-align","top","important"),r.style.setProperty("line-height","17px","important"),_.appendChild(e),_.appendChild(r),t.appendChild(_),t}();return t.appendChild(e),e.onclick=r,!0}function r(){var t=window.location.href,e=window.innerHeight;browser.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:t,height:e})}this.init=function(){_()}};ready(function(){browser.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:YOUTUBE_BUTTONS_ENABLED},function(t){if(!t)return!1;setTimeout(function(){(new GDYoutube).init()},250)})});