;(function(){var baseUrl;var __factory=function(){var React=arguments[0];var ReactDOM=arguments[1];var ReactTransitionGroup=arguments[2];var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_error_page";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_externalserviceprovider":dependencies[3],"prezi_i18n":dependencies[4],"prezi_logger":dependencies[5],"prezi_uaparser":dependencies[6]}};})(),React,ReactDOM,ReactTransitionGroup);};})(arguments);var moduleImpl=(function(){return module(function(e,J,K,Z){function p(){return-1<f.PreziUAParser.createUAParser().browser.name.indexOf("Chrome")}function z(){return-1<f.PreziUAParser.createUAParser().browser.name.indexOf("Firefox")}function A(){return-1<f.PreziUAParser.createUAParser().browser.name.indexOf("Safari")}function B(a,c,q,d){a=document.getElementById(a);C.render(b.createElement(D,{onClickAction:(a)=>n.logWebglContextErrorPageAction(c,a),isDesktop:q,canHaveDesktop:d}),a)}function D(a){const c=g.getWebglContextErrorTroubleshootingTips(a.isDesktop,
a.canHaveDesktop);return b.createElement("div",{style:{overflow:"auto",width:"100%",height:"100%"}},b.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",paddingLeft:24,paddingRight:24,maxWidth:703}},b.createElement("div",{style:{position:"relative",left:-23,marginTop:14}},b.createElement(u.SadFace,null)),b.createElement(M,{title:d.I18n.ts("The presentation can\u2019t be accessed")}),b.createElement(N,{description:a.isDesktop?d.I18n.ts("Looks like your computer doesn\u2019t meet Prezi\u2019s system requirements."):
d.I18n.ts("Looks like your computer or browser is unable to run this presentation."),detailsLabel:d.I18n.ts("Details"),detailsUrl:"https://prezi.com/business/kb/get-started/system-requirements/",onDetailsClick:()=>{if(a.onClickAction)a.onClickAction(k.DETAILS)}}),b.createElement(O,{items:c.tryItems,onItemLinkClick:()=>{if(a.onClickAction)a.onClickAction(k.TROUBLESHOOT_TRY_ITEM)}}),b.createElement(P,{onClickAction:a.onClickAction,mainAction:c.mainAction})))}function M(a){const c=Object.assign(Object.assign({},
r()),{fontSize:36,letterSpacing:1.4,marginBottom:24});return b.createElement("div",{style:c},a.title)}function N(a){const c=Object.assign(Object.assign({},r()),{lineHeight:1.33,marginBottom:6});return b.createElement("div",{style:{marginBottom:45}},b.createElement("div",{style:c},a.description),b.createElement(v,{label:a.detailsLabel,url:a.detailsUrl,onClick:a.onDetailsClick}))}function v(a){return b.createElement("div",null,b.createElement("a",{ref:(b)=>{null!=a.onClick&&null!=b&&b.addEventListener("click",
()=>a.onClick())},style:Object.assign(Object.assign({},r()),{color:"#8e939c",textTransform:"uppercase"}),href:a.url,target:"_blank",tabIndex:-1},a.label))}function E(a){if(null==a.item.action)return b.createElement("span",null,a.item.string);const c=F.parseStringWithSingleAnchorTag(a.item.string);return 1===c.length&&"string"===typeof c[0]?b.createElement(G,{action:a.item.action,onClick:a.onAction},c[0]):b.createElement("span",null,c.map((c)=>"string"===typeof c?c:null!=c.anchor?b.createElement(G,
{action:a.item.action,onClick:a.onAction},c.anchor):null))}function G(a){const c=(b)=>{b&&b.addEventListener("click",()=>{if(null!=a.onClick)a.onClick();a.action.kind===g.ActionType.Refresh&&window.location.reload()})};return a.action.kind===g.ActionType.VisitUrl?b.createElement("a",{ref:c,href:a.action.url,target:"_blank",tabIndex:-1},a.children):b.createElement("a",{ref:c,href:"#",tabIndex:-1},a.children)}function O(a){if(0===a.items.length)return null;const c=Object.assign(Object.assign({},r()),
{lineHeight:2.22,marginBottom:76});return 1===a.items.length?b.createElement("div",{style:c},b.createElement(E,{item:a.items[0],onAction:a.onItemLinkClick})):b.createElement("div",{style:c},d.I18n.ts("Try:"),b.createElement("ul",null,a.items.map((c)=>b.createElement("li",null,b.createElement(E,{item:c,onAction:a.onItemLinkClick})))))}function P(a){const c={width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},q=()=>{a.onClickAction(k.TROUBLESHOOT_CONTACT_SUPPORT)},L=()=>
{a.onClickAction(k.TROUBLESHOOT_BUTTON)};return a.mainAction&&a.mainAction.action&&a.mainAction.action.kind===g.ActionType.VisitUrl?b.createElement("div",{style:c},b.createElement(v,{label:d.I18n.ts("Contact support"),url:"https://prezi.com/business/support/",onClick:q}),b.createElement(Q,{label:a.mainAction.string,onClick:L,url:a.mainAction.action.url})):b.createElement("div",{style:c},b.createElement(v,{label:d.I18n.ts("Contact support"),url:"https://prezi.com/business/support/",onClick:q}))}function Q(a){return b.createElement("a",
{href:a.url?a.url:"#",target:"_blank",tabIndex:-1},b.createElement("button",{style:{backgroundColor:"#3181ff",height:48,textAlign:"center",paddingLeft:30,paddingRight:30,borderRadius:3,fontSize:16,color:"#ffffff",letterSpacing:.6},onClick:a.onClick},a.label))}function r(){return{fontFamily:"RalewayRegular",letterSpacing:.7,fontSize:18,color:"#475262"}}function R(a,b){return new Promise((c)=>{S.ExternalServiceProviderModule.getUserLicenseConnector(a,b).loadUserLicense((a)=>{c(a)})})}function T(a,c,
d){a=document.getElementById(a);C.render(b.createElement(H,{onClickAction:(a)=>w.logCoeditErrorPageAction(c,a),isDesktop:d}),a)}function H(a){return b.createElement("div",{style:{overflow:"auto",width:"100%",height:"100%"}},b.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",paddingLeft:24,paddingRight:24,width:768,height:660,display:"flex",flexDirection:"column",justifyContent:"space-between"}},b.createElement("div",{style:{position:"relative",left:-23,marginTop:14}},b.createElement(u.NewSadFace,
null)),b.createElement(U,{title:d.I18n.ts("We\u2019re having trouble accessing the Prezi editor")}),b.createElement(V,{description:d.I18n.ts("Looks like the Prezi editor is unavailable at the moment. We\u2019re working hard to fix the issue, so please check back soon. In the meantime, you can still view your presentation.")}),b.createElement("div",{style:{flex:1}},b.createElement(W,{label:d.I18n.ts("View presentation"),onClick:()=>{a.onClickAction(x.OPEN_IN_PRESENT_MODE)},url:`//${location.host}${location.pathname}?present=1`})),
b.createElement(X,{onClickAction:a.onClickAction})))}function U(a){const c=Object.assign(Object.assign({},y()),{fontSize:32,letterSpacing:.5,marginBottom:24});return b.createElement("div",{style:c},a.title)}function V(a){const c=Object.assign(Object.assign({},y()),{fontSize:16,letterSpacing:.5,lineHeight:"24px",marginBottom:40});return b.createElement("div",{style:c},a.description)}function Y(a){return b.createElement("div",null,b.createElement("a",{ref:(b)=>{null!=a.onClick&&null!=b&&b.addEventListener("click",
()=>a.onClick())},style:Object.assign(Object.assign({},y()),{color:"#8e939c",textTransform:"uppercase"}),href:a.url,target:"_blank",tabIndex:-1},a.label))}function X(a){return b.createElement("div",{style:{width:"100%"}},b.createElement(Y,{label:d.I18n.ts("Contact our support team"),url:"https://prezi.com/business/support/",onClick:()=>{a.onClickAction(x.TROUBLESHOOT_CONTACT_SUPPORT)}}))}function W(a){return b.createElement("a",{href:a.url?a.url:"#",target:"_blank",tabIndex:-1},b.createElement("button",
{style:{backgroundColor:"#1E55EB",height:32,textAlign:"center",padding:"4px 16px",borderRadius:4,fontSize:14,color:"#ffffff",letterSpacing:.6},onClick:a.onClick},a.label))}function y(){return{fontFamily:"RalewayRegular",letterSpacing:.7,fontSize:18,color:"#475262"}}var S=e.dependencies.prezi_externalserviceprovider,d=e.dependencies.prezi_i18n,I=e.dependencies.prezi_logger,f=e.dependencies.prezi_uaparser,b=J,C=K,u={SadFace:function(){return b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",
width:"192",height:"192",viewBox:"0 0 192 192"},b.createElement("g",{fill:"none",fillRule:"evenodd"},b.createElement("g",{fillRule:"nonzero"},b.createElement("path",{fill:"#F7FAFF",d:"M83.096 192a13.437 13.437 0 0 1-5.472-25.712l82.034-36.524a13.435 13.435 0 1 1 10.93 24.546l-82.034 36.525A13.392 13.392 0 0 1 83.096 192z"}),b.createElement("path",{fill:"#F7FAFF",d:"M68.23 169.821a9.95 9.95 0 0 1-4.052-19.04l60.75-27.048a9.949 9.949 0 1 1 8.093 18.178l-60.749 27.047a9.917 9.917 0 0 1-4.041.863zM67.288 63.402a13.437 13.437 0 0 1-5.472-25.712l82.035-36.525a13.435 13.435 0 1 1 10.93 24.547L72.745 62.236a13.392 13.392 0 0 1-5.458 1.166z"}),
b.createElement("path",{fill:"#F7FAFF",d:"M22.41 114.088a22.395 22.395 0 0 1-9.12-42.853l102.256-45.527c11.296-5.023 24.525.059 29.553 11.352 5.028 11.294-.047 24.525-11.338 29.56L31.505 112.145a22.311 22.311 0 0 1-9.096 1.942zM48.633 158.626a17.916 17.916 0 0 1-7.296-34.281l99.953-44.503c9.038-4.024 19.627.041 23.65 9.079 4.024 9.038-.04 19.626-9.078 23.65l-99.953 44.502a17.853 17.853 0 0 1-7.276 1.553z"}),b.createElement("path",{fill:"#F7FAFF",d:"M20.426 181.478a4.48 4.48 0 0 1-1.825-8.57l167.097-74.396a4.478 4.478 0 1 1 3.644 8.182L22.245 181.089a4.472 4.472 0 0 1-1.82.39zM26.635 130.806a8.063 8.063 0 0 1-3.284-15.427l148.847-66.27a8.061 8.061 0 1 1 6.559 14.728l-148.848 66.27a8.036 8.036 0 0 1-3.274.7z"}),
b.createElement("path",{fill:"#FFF",d:"M8.316 138.962a8.063 8.063 0 0 1-3.284-15.427l42.976-19.134a8.061 8.061 0 0 1 6.558 14.729L11.59 138.264a8.036 8.036 0 0 1-3.274.698z"})),b.createElement("path",{d:"M0 0h192v192H0z"}),b.createElement("path",{fill:"#3181FF",fillRule:"nonzero",d:"M30.672 46.776h133.802a4.276 4.276 0 0 1 4.276 4.277v93.038a4.277 4.277 0 0 1-4.277 4.277h-133.8a4.277 4.277 0 0 1-4.278-4.277V51.053a4.276 4.276 0 0 1 4.277-4.277z",opacity:".2"}),b.createElement("path",{fill:"#3181FF",
fillRule:"nonzero",d:"M31.51 101.88a.812.812 0 0 1-.813-.812v-48.14a.812.812 0 1 1 1.625 0v48.14a.812.812 0 0 1-.813.812zM31.51 135.01a.812.812 0 0 1-.813-.813v-26.813a.812.812 0 1 1 1.625 0v26.813a.812.812 0 0 1-.813.812z",opacity:".2"}),b.createElement("g",{fillRule:"nonzero",transform:"translate(23 43)"},b.createElement("rect",{width:"139.065",height:"98.302",x:"1.75",y:"2.131",fill:"#E6F5FF",rx:"2.631"}),b.createElement("path",{fill:"#3181FF",d:"M138.184 101.933H4.382A4.136 4.136 0 0 1 .25 97.802V4.762A4.136 4.136 0 0 1 4.382.633h133.802a4.136 4.136 0 0 1 4.131 4.13v93.04a4.136 4.136 0 0 1-4.131 4.131zM4.382 3.632c-.625 0-1.131.506-1.132 1.13v93.04c0 .624.507 1.13 1.132 1.131h133.802c.624 0 1.13-.507 1.131-1.131V4.762c0-.624-.507-1.13-1.131-1.13H4.382z"})),
b.createElement("path",{fill:"#3181FF",fillRule:"nonzero",d:"M64.426 94.949a4.205 4.205 0 1 1 8.41 0 4.205 4.205 0 0 1-8.41 0M117.492 94.949a4.205 4.205 0 1 1 8.41 0 4.205 4.205 0 0 1-8.41 0M95.165 106.499a16.614 16.614 0 0 1 11.786 4.874 1.5 1.5 0 0 1-2.121 2.121c-5.342-5.33-13.99-5.33-19.331 0a1.5 1.5 0 0 1-2.121-2.121 16.619 16.619 0 0 1 11.787-4.874z"}),b.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M35.804 127.272a1 1 0 0 1-1-1v-25.65a1 1 0 1 1 2 0v25.65a1 1 0 0 1-1 1zM35.804 93.854a1 1 0 0 1-1-1V59.435a1 1 0 0 1 2 0v33.42a1 1 0 0 1-1 1z"})))},
NewSadFace:function(){return b.createElement("svg",{width:"224",height:"224",viewBox:"0 0 224 224",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b.createElement("path",{opacity:"0.2",d:"M48.672 62.776H182.474C183.036 62.776 183.592 62.8866 184.111 63.1016C184.629 63.3165 185.101 63.6316 185.498 64.0288C185.895 64.4259 186.21 64.8974 186.425 65.4163C186.64 65.9352 186.75 66.4914 186.75 67.053V160.091C186.75 161.225 186.299 162.313 185.497 163.115C184.695 163.917 183.607 164.368 182.473 164.368H48.673C48.1113 164.368 47.555 164.258 47.036 164.043C46.517 163.828 46.0453 163.513 45.6481 163.116C45.2508 162.718 44.9357 162.247 44.7207 161.728C44.5057 161.209 44.395 160.653 44.395 160.091V67.053C44.3949 66.4913 44.5054 65.9351 44.7203 65.4161C44.9352 64.8971 45.2502 64.4256 45.6474 64.0284C46.0446 63.6312 46.5162 63.3162 47.0351 63.1013C47.5541 62.8864 48.1103 62.7759 48.672 62.776Z",
fill:"#3181FF"}),b.createElement("path",{opacity:"0.2",d:"M49.51 117.88C49.4033 117.88 49.2976 117.859 49.199 117.819C49.1003 117.778 49.0107 117.718 48.9352 117.643C48.8597 117.567 48.7998 117.478 48.7589 117.379C48.7181 117.28 48.697 117.175 48.697 117.068V68.9281C48.697 68.7126 48.7826 68.5059 48.935 68.3536C49.0874 68.2012 49.294 68.1156 49.5095 68.1156C49.725 68.1156 49.9317 68.2012 50.084 68.3536C50.2364 68.5059 50.322 68.7126 50.322 68.9281V117.068C50.322 117.175 50.301 117.28 50.2601 117.379C50.2192 117.478 50.1593 117.567 50.0838 117.643C50.0083 117.718 49.9187 117.778 49.8201 117.819C49.7214 117.859 49.6157 117.88 49.509 117.88H49.51ZM49.51 151.01C49.4032 151.01 49.2974 150.989 49.1987 150.948C49.1 150.908 49.0104 150.848 48.9349 150.772C48.8593 150.697 48.7995 150.607 48.7586 150.508C48.7178 150.41 48.6969 150.304 48.697 150.197V123.384C48.697 123.169 48.7826 122.962 48.935 122.81C49.0874 122.657 49.294 122.572 49.5095 122.572C49.725 122.572 49.9317 122.657 50.084 122.81C50.2364 122.962 50.322 123.169 50.322 123.384V150.197C50.322 150.304 50.301 150.409 50.2601 150.508C50.2192 150.607 50.1593 150.696 50.0838 150.772C50.0083 150.847 49.9187 150.907 49.8201 150.948C49.7214 150.988 49.6157 151.009 49.509 151.009L49.51 151.01Z",
fill:"#3181FF"}),b.createElement("path",{d:"M179.184 61.1311H45.381C43.9279 61.1311 42.75 62.309 42.75 63.7621V156.802C42.75 158.255 43.9279 159.433 45.381 159.433H179.184C180.637 159.433 181.815 158.255 181.815 156.802V63.7621C181.815 62.309 180.637 61.1311 179.184 61.1311Z",fill:"#E6F5FF"}),b.createElement("path",{d:"M179.184 160.933H45.382C44.2866 160.932 43.2364 160.496 42.4618 159.722C41.6871 158.948 41.2513 157.897 41.25 156.802V63.7621C41.2519 62.667 41.6879 61.6174 42.4625 60.8434C43.237 60.0694 44.287 59.6341 45.382 59.6331H179.184C180.279 59.6344 181.329 60.0699 182.103 60.8441C182.878 61.6183 183.313 62.668 183.315 63.7631V156.803C183.314 157.898 182.878 158.948 182.104 159.723C181.329 160.497 180.279 160.933 179.184 160.934V160.933ZM45.382 62.6321C44.757 62.6321 44.251 63.1381 44.25 63.7621V156.802C44.25 157.426 44.757 157.932 45.382 157.933H179.184C179.808 157.933 180.314 157.426 180.315 156.802V63.7621C180.315 63.1381 179.808 62.6321 179.184 62.6321H45.382Z",
fill:"#1E55EB"}),b.createElement("path",{d:"M82.426 110.949C82.426 109.834 82.869 108.764 83.6576 107.976C84.4462 107.187 85.5158 106.744 86.631 106.744C87.7463 106.744 88.8158 107.187 89.6044 107.976C90.393 108.764 90.836 109.834 90.836 110.949C90.836 112.064 90.393 113.134 89.6044 113.923C88.8158 114.711 87.7463 115.154 86.631 115.154C85.5158 115.154 84.4462 114.711 83.6576 113.923C82.869 113.134 82.426 112.064 82.426 110.949ZM135.492 110.949C135.492 109.834 135.935 108.764 136.724 107.976C137.512 107.187 138.582 106.744 139.697 106.744C140.812 106.744 141.882 107.187 142.67 107.976C143.459 108.764 143.902 109.834 143.902 110.949C143.902 112.064 143.459 113.134 142.67 113.923C141.882 114.711 140.812 115.154 139.697 115.154C138.582 115.154 137.512 114.711 136.724 113.923C135.935 113.134 135.492 112.064 135.492 110.949ZM113.165 122.499C115.354 122.495 117.522 122.924 119.544 123.76C121.567 124.597 123.404 125.824 124.951 127.373C125.224 127.656 125.375 128.035 125.372 128.428C125.369 128.822 125.211 129.198 124.933 129.476C124.655 129.754 124.278 129.912 123.885 129.915C123.492 129.919 123.113 129.767 122.83 129.494C117.488 124.164 108.84 124.164 103.499 129.494C103.216 129.767 102.837 129.919 102.444 129.915C102.051 129.912 101.674 129.754 101.396 129.476C101.118 129.198 100.96 128.822 100.957 128.428C100.954 128.035 101.105 127.656 101.378 127.373C102.925 125.825 104.763 124.597 106.785 123.76C108.808 122.924 110.976 122.495 113.165 122.499Z",
fill:"#1E55EB"}),b.createElement("path",{d:"M53.804 143.272C53.5388 143.272 53.2844 143.167 53.0969 142.979C52.9094 142.792 52.804 142.537 52.804 142.272V116.622C52.804 116.357 52.9094 116.102 53.0969 115.915C53.2844 115.727 53.5388 115.622 53.804 115.622C54.0692 115.622 54.3236 115.727 54.5111 115.915C54.6987 116.102 54.804 116.357 54.804 116.622V142.272C54.804 142.537 54.6987 142.792 54.5111 142.979C54.3236 143.167 54.0692 143.272 53.804 143.272ZM53.804 109.854C53.5388 109.854 53.2844 109.749 53.0969 109.561C52.9094 109.374 52.804 109.119 52.804 108.854V75.4351C52.804 75.1698 52.9094 74.9155 53.0969 74.728C53.2844 74.5404 53.5388 74.4351 53.804 74.4351C54.0692 74.4351 54.3236 74.5404 54.5111 74.728C54.6987 74.9155 54.804 75.1698 54.804 75.4351V108.855C54.804 109.12 54.6987 109.375 54.5111 109.562C54.3236 109.75 54.0692 109.855 53.804 109.855V109.854Z",
fill:"white"}))}};Object.defineProperty(u,"__esModule",{value:!0});var F={parseStringWithSingleAnchorTag:function(a){const b=a.match(/^(.*)<a>(.*)<\/a>(.*)$/);if(b){const [,a,c,d]=b;return[a,{anchor:c},d]}return[a]}};Object.defineProperty(F,"__esModule",{value:!0});var n={logWebglContextErrorPageAction:function(a,b){a.info({action:b,object:"webgl_error_page",trigger:"click",payload:{_type:"debug"}})},logWebglContextErrorPageShow:function(a,b,d,f){a.info({action:"load",object:"troubleshooting_modal",
trigger:"machine",payload:{browserName:b.browser.name,browserVersion:b.browser.major,osName:b.os.name,osVersion:b.os.version,modal_type:d?"desktop_troubleshooting":f?"web_troubleshooting_with_desktop":"web_troubleshooting"}})}};Object.defineProperty(n,"__esModule",{value:!0});var g={};Object.defineProperty(g,"__esModule",{value:!0});var l;(function(a){a.VisitUrl="visit_url_action";a.Refresh="refresh"})(l=g.ActionType||(g.ActionType={}));g.getWebglContextErrorTroubleshootingTips=function(a,b){if(a)return{tryItems:[{string:d.I18n.ts("Please try accessing Prezi from a different computer.")}]};
{a={string:d.I18n.ts("Closing unused tabs and <a>refreshing the page</a>"),action:{kind:l.Refresh}};const c={string:d.I18n.ts("Please try closing unused tabs and <a>refreshing the page</a>"),action:{kind:l.Refresh}},g={string:d.I18n.ts("Download Prezi app"),action:{kind:l.VisitUrl,url:"https://prezi.com/download/business/"}},e={string:d.I18n.ts("Downloading the Prezi app"),action:{kind:l.VisitUrl,url:"https://prezi.com/download/business/"}},t={string:d.I18n.ts("Enabling \u201cUse hardware acceleration when available\u201d in Chrome\u2019s system settings")},
k={string:d.I18n.ts("Enabling \u201cUse hardware acceleration when available\u201d in Firefox\u2019s system settings")},h={string:d.I18n.ts("Switch to Chrome"),action:{kind:l.VisitUrl,url:"https://www.google.com/chrome/browser/desktop/"}},m={string:d.I18n.ts("Switch to Safari"),action:{kind:l.VisitUrl,url:"https://support.apple.com/downloads/safari"}},n={string:d.I18n.ts("Update Safari"),action:{kind:l.VisitUrl,url:"https://support.apple.com/en-us/HT201541"}};b=z()&&!b?{tryItems:[a,k],mainAction:h}:
z()&&b?{tryItems:[a,k,e],mainAction:h}:A()&&!b?{tryItems:[c],mainAction:n}:A()&&b?{tryItems:[a,e],mainAction:n}:!p()||f.PreziUAParser.isMac()||b?p()&&!f.PreziUAParser.isMac()&&b?{tryItems:[a,t],mainAction:g}:p()&&f.PreziUAParser.isMac()&&!b?{tryItems:[a,t],mainAction:m}:p()&&f.PreziUAParser.isMac()&&b?{tryItems:[a,t,e],mainAction:m}:{tryItems:[],mainAction:h}:{tryItems:[a,t]}}return b};var h={showContextErrorPage_:function(a){const b=I.LoggerModule.getLoggerManager().createLogger("WebglContextErrorPage"),
d=f.PreziUAParser.createUAParser();if(!a.isDesktop&&a.hostName&&a.userId){const c=new Promise((a)=>{setTimeout(a,5E3,null)}),e=R(a.hostName,a.userId);return Promise.race([e,c]).then((c)=>{c=c&&c.pitch&&c.pitch.feature_set&&c.pitch.feature_set.pitch_desktop;n.logWebglContextErrorPageShow(b,d,a.isDesktop,c);B(a.rootElementId,b,a.isDesktop,c)})}n.logWebglContextErrorPageShow(b,d,a.isDesktop,!1);B(a.rootElementId,b,a.isDesktop,!1);return Promise.resolve()}};Object.defineProperty(h,"__esModule",{value:!0});
var k;(function(a){a.DETAILS="details";a.TROUBLESHOOT_TRY_ITEM="troubleshoot_try_item";a.TROUBLESHOOT_BUTTON="troubleshoot_button";a.TROUBLESHOOT_CONTACT_SUPPORT="contact_support"})(k=h.WebglContextErrorPageClickAction||(h.WebglContextErrorPageClickAction={}));h.WebglContextErrorPage=D;var w={logCoeditErrorPageAction:function(a,b){a.info({action:b,object:"coedit_error_page",trigger:"click",payload:{_type:"debug"}})},logCoeditErrorPageShow:function(a,b,d){a.info({action:"load",object:"troubleshooting_modal",
trigger:"machine",payload:{browserName:b.browser.name,browserVersion:b.browser.major,osName:b.os.name,osVersion:b.os.version,modal_type:d?"desktop_troubleshooting":"web_troubleshooting"}})}};Object.defineProperty(w,"__esModule",{value:!0});var m={showCoeditErrorPage_:function(a){const b=I.LoggerModule.getLoggerManager().createLogger("CoeditErrorPage"),d=f.PreziUAParser.createUAParser();w.logCoeditErrorPageShow(b,d,a.isDesktop);T(a.rootElementId,b,a.isDesktop);return Promise.resolve()}};Object.defineProperty(m,
"__esModule",{value:!0});var x;(function(a){a.OPEN_IN_PRESENT_MODE="open_in_present_mode";a.TROUBLESHOOT_CONTACT_SUPPORT="contact_support"})(x=m.CoeditErrorPageClickAction||(m.CoeditErrorPageClickAction={}));m.CoeditErrorPage=H;e={showWebglContextErrorPage:function(a){return h.showContextErrorPage_(a)},showCoeditErrorPage:function(a){return m.showCoeditErrorPage_(a)}};Object.defineProperty(e,"__esModule",{value:!0});return e});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_error_page",["require","react","react-dom","react-transition-group","prezi_externalserviceprovider","prezi_i18n","prezi_logger","prezi_uaparser"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_error_page.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("react"),require("react-dom"),require("react-transition-group"),require("prezi_externalserviceprovider"),require("prezi_i18n"),require("prezi_logger"),require("prezi_uaparser"));}else{this["prezi_error_page"]=__factory(React,ReactDOM,ReactTransitionGroup,this["prezi_externalserviceprovider"],this["prezi_i18n"],this["prezi_logger"],this["prezi_uaparser"]);}}).call(this);