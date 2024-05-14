;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_grouping";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_featureswitcher":dependencies[1],"prezi_i18n":dependencies[2],"prezi_logger":dependencies[3],"prezi_plugin_api":dependencies[4],"prezi_plugin_meta":dependencies[5]}};})());};})(arguments);var moduleImpl=(function(){return module(function(d){var g=d.dependencies.prezi_cet_model_editor,h=d.dependencies.prezi_logger,k=d.dependencies.prezi_plugin_api,e={};Object.defineProperty(e,"__esModule",{value:!0});var f=g.base.ObjectKind,m=g.base.editorIs;const n={f:!1,i:!1};e.j=class{init(a){this.u=a.declareUI(n,(a,b)=>{const c=b.createAction({shortcut:this.pluginDescription.shortcuts.group,enabled:a.f,onExecute:(a,b)=>{b===k.ActionTrigger.Keyboard&&h.avro.Avro.createDefaultLogger().logUseKeyboardShortcut({shortcut_type:"JUMP_TO_LAST_PATH_STEP"});
this.session.document.executeApiCommand(a,{name:"Create group",run:(b)=>{const c=this.session.selection.getSelectionInfo(b);e.j.f(c)&&(this.group(a,b,c),this.o(b))}})}}),l=b.createAction({shortcut:this.pluginDescription.shortcuts.ungroup,enabled:a.i,onExecute:(a,b)=>{b===k.ActionTrigger.Keyboard&&h.avro.Avro.createDefaultLogger().logUseKeyboardShortcut({shortcut_type:"JUMP_TO_LAST_PATH_STEP"});this.session.document.executeApiCommand(a,{name:"Ungroup",run:(b)=>{const c=this.session.selection.getSelectionInfo(b);
this.v(a,c);this.o(b)}})}});a.f&&this.createAction(b,"create-group",9,100,66,c);a.i&&this.createAction(b,"ungroup",9,101,66,l)});a.onDocumentChange(()=>{this.session.document.read((a)=>{this.o(a)})});a.onSelectionChange(()=>{this.session.document.read((a)=>{this.o(a)})})}o(a){a=this.session.selection.getReadonlySelectionInfo(a);this.u.setState({f:e.j.f(a),i:e.j.i(a)})}createAction(a,c,b,d,l,e){a.createPropertyBarItem((a)=>a.button({id:c,groupWeight:b,weight:d,action:e}));a.createMenuItem({kind:k.MenuItemKind.context,
id:c+"-ctx",weight:l,action:e})}static f(a){if(a.allObjects.some((a)=>a.is(g.base.ObjectKind.lockable)&&a.locked))return!1;const c=2<=a.nonGroupedObjects.length+a.groups.length,b=!a.nonGroupedObjects.some((a)=>a.is(f.simpleObject)&&null!=a.group),d=1===(new Set(a.allObjects.map((a)=>a.parent.id))).size;a=a.allObjects.every((a)=>a.is(f.simpleObject));return c&&b&&d&&a}group(a,c,b){c=b.allObjects[0].parent.add.group(b.allObjects.filter(m(f.simpleObject)));h.avro.Avro.createDefaultLogger().logGroupObjects();
this.session.selection.setSelection(a,[c])}static i(a){if(a.allObjects.some((a)=>a.is(g.base.ObjectKind.lockable)&&a.locked))return!1;const c=0<a.groups.length;a=a.nonGroupedObjects.some((a)=>a.is(f.simpleObject)&&null!=a.group);return c||a}v(a,c){c.groups.forEach((a)=>a.delete());c.nonGroupedObjects.forEach((a)=>{a.is(f.simpleObject)&&null!=a.group&&a.group.removeMember(a)});h.avro.Avro.createDefaultLogger().logUngroupObjects();this.session.selection.setSelection(a,c.allObjects)}};d={};Object.defineProperty(d,
"__esModule",{value:!0});d.lazyModule={createPlugin(){return new e.j}};return d});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_grouping",["require","prezi_cet_model_editor","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_grouping.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"));}else{this["prezi_grouping"]=__factory(this["prezi_cet_model_editor"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"]);}}).call(this);