;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_search_replace";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_i18n":dependencies[1],"prezi_logger":dependencies[2],"prezi_plugin_api":dependencies[3],"prezi_plugin_meta":dependencies[4]}};})());};})(arguments);var moduleImpl=(function(){return module(function(f){function q(b,a,c){const d=b.length;if(0===d)return[];let e=0;const g=[];c||(a=a.toLowerCase(),b=b.toLowerCase());for(;-1<(c=a.indexOf(b,e));)g.push(c),e=c+d;return g}var r=f.dependencies.prezi_cet_model_editor,k=f.dependencies.prezi_i18n,l=f.dependencies.prezi_logger,h=f.dependencies.prezi_plugin_api,m={};Object.defineProperty(m,"__esModule",{value:!0});var p=r.base.ObjectKind;class t{ca(b){return(a)=>a.getText().toLowerCase().includes(b.toLowerCase())}aa(b,a){return q(b,a,!1).map((a)=>
({start:a,end:a+b.length}))}}const u=new t;m.da=class{init(b){b.onSelectionChange(()=>{this.ba(a)});b.onDocumentChange(()=>{const c=a.getState();null!=c.cursor&&this.session.document.read((d)=>{const b=d.lookup.text(c.cursor.i);null!=b&&c.v.aa(c.o,b.getText()).some((a)=>a.start===c.cursor.f.start&&a.end===c.cursor.f.end)||(this.u(d,c.cursor),a.setState({cursor:null}))})});const a=b.declareUI({cursor:null,o:null,v:u,statusMessage:null,w:!1,replaceText:null},(c,d)=>{this.createMenuItem(d,c,a);this.createSidebar(d,
c,a)})}createMenuItem(b,a,c){a=b.createAction({shortcut:this.pluginDescription.shortcuts.find,enabled:!0,onExecute:()=>{c.sidebar.open("searchAndReplaceSidebarId")}});b.createMenuItem({kind:h.MenuItemKind.dropdown,id:"searchAndReplace",parent:h.MenuId.Hamburger,weight:11,action:a})}createSidebar(b,a,c){return b.createSidebar("searchAndReplaceSidebarId",(d)=>({root:{title:k.I18n.ts("Find and replace"),content:[d.sectionHeader({content:k.I18n.ts("Find")}),this.ja(d,a,c),this.ea(d,a,c),d.separator(),
this.ga(d,a,c),a.w&&this.ha(d,a,c),a.w&&this.fa(d,c),this.ia(d,a)].filter((a)=>!!a)},onOpen:()=>{l.avro.Avro.createDefaultLogger().logShowFindOptions()},onCloseButtonClicked:()=>{l.avro.Avro.createDefaultLogger().logCloseFindTextSidebar()}}))}ja(b,a,c){return b.inputField({id:"searchField",placeholderText:k.I18n.ts("Enter text to search"),value:a.o,autofocus:!0,onValueChange:(a,b)=>{this.ba(c);c.setState({o:b})},onEnter:(b)=>{this.$(b,a,c,1);l.avro.Avro.createDefaultLogger().logSearchText()}})}ga(b,
a,c){return b.checkbox({id:"checkbox-replace",checked:a.w,label:k.I18n.ts("Replace"),onCheck:(a,b)=>{c.setState({w:b});b&&l.avro.Avro.createDefaultLogger().logOpenReplaceTextOptions()}})}ea(b,a,c){return b.button(h.ButtonSize.Large,h.ButtonAlign.Start,(b)=>[b.button({id:"findPrevButton",color:h.ButtonColor.Gray,content:{text:k.I18n.ts("Previous")},onClick:(b)=>{this.$(b,a,c,-1);l.avro.Avro.createDefaultLogger().logPreviousTextSearch()}}),b.button({id:"findNextButton",color:h.ButtonColor.Gray,content:{text:k.I18n.ts("Next")},
onClick:(b)=>{this.$(b,a,c,1);l.avro.Avro.createDefaultLogger().logNextTextSearch()}})])}ha(b,a,c){return b.inputField({id:"replaceField",value:a.replaceText,onValueChange:(a,b)=>{c.setState({replaceText:b})}})}fa(b,a){return b.button(h.ButtonSize.Large,h.ButtonAlign.Start,(b)=>[b.button({id:"replaceButton",color:h.ButtonColor.Gray,content:{text:k.I18n.ts("Replace")},onClick:(b)=>{this.replace(b,a);l.avro.Avro.createDefaultLogger().logReplaceSelectedText()}}),b.button({id:"replaceAllButton",color:h.ButtonColor.Gray,
content:{text:k.I18n.ts("Replace all")},onClick:(b)=>{this.ka(b,a);l.avro.Avro.createDefaultLogger().logReplaceAllText()}})])}$(b,a,c,d){this.session.document.read((e)=>{this.u(e,a.cursor);const g=this.search(a.cursor,a.o,a.v,e,d);if(0===g.j.length)e=k.I18n.ts("The entered text does not match any of the elements."),c.setState({statusMessage:e});else{let a=k.I18n.tsFormatKeys("{count} matches",{count:g.j.length});const d=e.lookup.text(g.cursor.i);e.toDecorator(d).selection=g.cursor.f;c.setState({cursor:g.cursor,
statusMessage:a});this.session.navigation.flyTo(b,d)}})}la(b,a){b.toDecorator(a).selection={start:-1,end:0}}ia(b,a){return b.label(a.statusMessage)}ba(b){const a=b.getState();null!=a.cursor&&(this.session.document.read((b)=>this.u(b,a.cursor)),b.setState({cursor:null}))}u(b,a){null!=a&&(a=b.lookup.text(a.i),null!=a&&this.la(b,a))}ka(b,a){let c=a.getState();null!=c.replaceText&&this.session.document.executeApiCommand(b,{name:"Replace all",run:(b)=>{this.u(b,c.cursor);var d=b.lookup.findAll(p.text).filter((b)=>
!b.isPlaceholder).filter(c.v.ca(c.o)).map((b)=>c.v.aa(c.o,b.getText()).map((a)=>({i:b.id,f:a,ma:b.getText()})));d=[].concat(...d).reverse();d.map((a)=>{let d=b.lookup.text(a.i),g=d.getText();d.setText(g.substr(0,a.f.start)+c.replaceText+g.substr(a.f.end))});d=k.I18n.tsFormatKeys("Replaced {items} occurrences",{items:d.length});a.setState({statusMessage:d})}})}replace(b,a){let c=a.getState();if(null!=c.replaceText){var d=this.session.document.read((b)=>{this.u(b,c.cursor);return this.search(c.cursor,
c.o,c.v,b,1)}),e=null,g=-1;null==c.cursor?(e=d.cursor,g=2>d.j.length?-1:(d.index+1)%d.j.length):(e=c.cursor,g=2>d.j.length?-1:d.index);null!=e&&this.session.document.executeApiCommand(b,{name:"Replace",run:(n)=>{n.lookup.text(e.i).setText(c.replaceText,e.f.start,e.f.end-e.f.start);if(-1===g)n=k.I18n.ts("The entered text does not match any of the elements."),a.setState({cursor:null,statusMessage:n});else{const f=d.j[g],l=k.I18n.tsFormatKeys("{count} matches",{count:d.j.length-1}),m=n.lookup.text(f.i);
var h=c.o.length-c.replaceText.length;h=f.i===e.i&&f.f.start>e.f.start?{start:f.f.start-h,end:f.f.end-h}:f.f;n.toDecorator(m).selection=h;a.setState({cursor:{f:h,i:f.i},statusMessage:l});this.session.navigation.flyTo(b,m)}}})}}search(b,a,c,d,e){if(null==a||""===a)return{index:-1,cursor:null,j:[]};d=d.lookup.findAll(p.text).filter((b)=>!b.isPlaceholder);d=[].concat(...d.filter(c.ca(a)).map((b)=>c.aa(a,b.getText()).map((a)=>({i:b.id,f:a}))));if(0===d.length)return{index:-1,cursor:null,j:[]};{let a=
-1;null!=b&&(a=d.findIndex((a)=>a.i===b.i&&a.f.start===b.f.start&&a.f.end===b.f.end));a=-1===a?0===e||1===e?0:d.length-1:(d.length+a+e)%d.length;return{index:a,cursor:d[a],j:d}}}};f={};Object.defineProperty(f,"__esModule",{value:!0});f.lazyModule={createPlugin(){return new m.da}};return f});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_search_replace",["require","prezi_cet_model_editor","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_search_replace.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"));}else{this["prezi_search_replace"]=__factory(this["prezi_cet_model_editor"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"]);}}).call(this);