;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_about_box";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_featureswitcher":dependencies[0],"prezi_i18n":dependencies[1],"prezi_logger":dependencies[2],"prezi_plugin_api":dependencies[3]}};})());};})(arguments);var moduleImpl=(function(){return module(function(e){var l=e.dependencies.prezi_featureswitcher,q=e.dependencies.prezi_logger,g=e.dependencies.prezi_plugin_api,m=e.dependencies.prezi_i18n,h={};Object.defineProperty(h,"__esModule",{value:!0});h.$=class{constructor(){this.o="features";this.fa="feature_preview";this.j="editor_channel";this.i="unknown"}init(a){const b=a.getAllFeatureSwitches(),k=-1!==a.getActiveFeatureSwitches().indexOf("js-developer-features"),c=new URL(window.location.href),e=c.searchParams.has(this.j)?c.searchParams.get(this.j):
this.i,n=a.declareUI({f:{},filter:"",previewMode:l.FeatureSwitcher.isFeaturePreviewModeActive(),generation:"",devicePixelRatio:0},(f,c)=>{const p=Object.assign(Object.assign({},b),f.f);c.createMenuItem({kind:g.MenuItemKind.dropdown,parent:g.MenuId.Hamburger,id:"about",title:m.I18n.ts("About..."),weight:22,onClick:()=>n.sidebar.toggle("sidebar-about-box")});c.createSidebar("sidebar-about-box",(d)=>{let c=[d.sectionHeader({content:m.I18n.ts("Editor loader version")}),d.inputField({id:"editor-version",
value:this.u(),readonly:!0}),d.sectionHeader({content:m.I18n.ts("Renderer version")}),d.inputField({id:"renderer-version",value:this.w(),readonly:!0}),d.sectionHeader({content:m.I18n.ts("Document generation")}),d.inputField({id:"generation",value:f.generation.toString(),readonly:!0}),d.sectionHeader({content:m.I18n.ts("Device pixel ratio")}),d.inputField({id:"device-pixel-ratio",value:f.devicePixelRatio.toString(),readonly:!0})],h=[];k&&(c=[...c,...[d.sectionHeader({content:"Editor channel"}),d.dropdown({id:"editor-channel",
activeId:e,onChange:(a,b)=>{b!==this.i&&(a=new URL(window.location.href),a.searchParams.set(this.j,b),window.location.replace(a.toString()))},options:[{id:this.i,title:"Select to reload..."},{id:"nightly",title:"nightly"},{id:"beta",title:"beta"},{id:"public",title:"public"}]}),d.sectionHeader({content:"Feature switches"}),d.searchField({id:"filter",placeholderText:"Filter features",onValueChange:(a,b)=>{n.setState({filter:b})},value:f.filter}),...Object.keys(p).filter((a)=>null==f.filter||0===f.filter.length||
-1!==a.indexOf(f.filter)).map((a)=>this.ea(a,p,f,n)).sort(this.aa).map((a)=>d.checkbox(a))]],h=[...h,d.button(g.ButtonSize.Large,g.ButtonAlign.Start,(a)=>[a.button({id:"reload-with-fs",color:g.ButtonColor.Gray,content:{text:f.previewMode?"Reload in preview mode":"Reload"},onClick:()=>{const a=new URL(window.location.href);f.previewMode?a.searchParams.set(this.fa,l.FeatureSwitcher.generateFeaturePreviewFlagParam(this.v(f,b))):a.searchParams.set(this.o,this.ca(f,b));window.location.replace(a.toString())}})]),
d.checkbox({id:"preview-mode",label:"preview mode",disabled:l.FeatureSwitcher.isFeaturePreviewModeActive()||!l.FeatureSwitcher.isActive("js-can-use-feature-preview-mode"),checked:f.previewMode,onCheck:(a,b)=>{n.setState({previewMode:b})}}),d.button(g.ButtonSize.Large,g.ButtonAlign.Start,(b)=>[b.button({id:"reload-with-fs",color:g.ButtonColor.Gray,content:{text:"Copy to clipboard"},onClick:()=>{const b={"editor loader version":this.u(),"renderer version":this.w(),"document generation":f.generation,
"device pixel ratio":f.devicePixelRatio,features:[...a.getActiveFeatureSwitches()].sort(),"logger config":q.LoggerModule.getLoggerManager().getConfig()};this.ba(JSON.stringify(b,null,"\t"))}})])]);return{root:{title:m.I18n.ts("About"),content:c,footer:h},onOpen:()=>{this.session.document.read((a)=>{n.setState({generation:a.meta.generation})});n.setState({devicePixelRatio:this.devicePixelRatio()})}}})})}ea(a,b,k,c){return{id:`feature-${a}`,label:a,checked:b[a],onCheck:(b,e)=>{b=Object.assign({},k.f);
b[a]=e;c.setState({f:b})}}}aa(a,b){return a.checked===b.checked?a.label===b.label?0:a.label<b.label?-1:1:a.checked?-1:1}da(){return window.preziEditorInitVersion}u(){return this.da()||"unknown"}ga(){return window.rendererBoxfishLibVersion}devicePixelRatio(){return window.devicePixelRatio}w(){return this.ga()||"unknown"}v(a,b){return Object.keys(a.f).filter((k)=>a.f[k]!==b[k]).map((b)=>a.f[b]?b:l.getFlippedFeatureSwitchName(b))}ca(a,b){const e=new URL(window.location.href);var c=[];e.searchParams.has(this.o)&&
(c=e.searchParams.get(this.o).split(","));a=this.v(a,b);c=[...c,...a];const g=new Set(c);return c.filter((a)=>!g.has(l.getFlippedFeatureSwitchName(a))).join(",")}ba(a){const b=document.createElement("textarea");try{b.value=a,document.body.appendChild(b),b.focus(),b.select(),document.execCommand("copy")}finally{try{document.body.removeChild(b)}catch(k){}}}};e={};Object.defineProperty(e,"__esModule",{value:!0});e.lazyModule={createPlugin(){return new h.$}};return e});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_about_box",["require","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_about_box.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"));}else{this["prezi_about_box"]=__factory(this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"]);}}).call(this);