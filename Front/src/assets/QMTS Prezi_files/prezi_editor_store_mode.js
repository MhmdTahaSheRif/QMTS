;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_editor_store_mode";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_app_utils":dependencies[0],"prezi_bacon":dependencies[1],"prezi_cet":dependencies[2],"prezi_service_data":dependencies[3]}};})());};})(arguments);var moduleImpl=(function(){return module(function(){var b={};Object.defineProperty(b,"__esModule",{value:!0});(function(a){a[a.advanced=0]="advanced";a[a.titleEditOnly=1]="titleEditOnly";a[a.insideAdvanced=2]="insideAdvanced"})(b.CoverEditModeKind||(b.CoverEditModeKind={}));(function(a){a[a.on=0]="on";a[a.off=1]="off"})(b.MaskingModeKind||(b.MaskingModeKind={}));(function(a){a.image="image";a.mask="mask"})(b.MaskEditTarget||(b.MaskEditTarget={}));(function(a){a.normal="normal";a.imageMask="imageMask";a.drawInsert="drawInsert"})(b.EditingKind||
(b.EditingKind={}));(function(a){a[a.enabled=0]="enabled";a[a.disabled=1]="disabled"})(b.SaveAvailabilityStatus||(b.SaveAvailabilityStatus={}));(function(a){a[a.uninitialized=0]="uninitialized";a[a.connected=1]="connected";a[a.offlineTimerTriggered=2]="offlineTimerTriggered";a[a.connectionLost=3]="connectionLost";a[a.connectionClosed=4]="connectionClosed"})(b.CoeditStatus||(b.CoeditStatus={}));(b.ModeStoreModule||(b.ModeStoreModule={})).forceModuleGeneration=null;return b});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_editor_store_mode",["require","prezi_app_utils","prezi_bacon","prezi_cet","prezi_service_data"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_editor_store_mode.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_app_utils"),require("prezi_bacon"),require("prezi_cet"),require("prezi_service_data"));}else{this["prezi_editor_store_mode"]=__factory(this["prezi_app_utils"],this["prezi_bacon"],this["prezi_cet"],this["prezi_service_data"]);}}).call(this);