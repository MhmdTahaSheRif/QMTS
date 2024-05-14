;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_bracket_frame";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_brand_kit_cta":dependencies[0],"prezi_cet_model_editor":dependencies[1],"prezi_featureswitcher":dependencies[2],"prezi_i18n":dependencies[3],"prezi_logger":dependencies[4],"prezi_plugin_api":dependencies[5],"prezi_plugin_meta":dependencies[6],"prezi_utils":dependencies[7],"prezi_widgets":dependencies[8]}};})());};})(arguments);var moduleImpl=(function(){return module(function(b){var g=b.dependencies.prezi_plugin_api,d=b.dependencies.prezi_i18n,m=b.dependencies.prezi_cet_model_editor,h=b.dependencies.prezi_widgets,c=b.dependencies.prezi_logger,f=b.dependencies.prezi_brand_kit_cta,e=b.dependencies.prezi_featureswitcher,n=b.dependencies.prezi_utils,k={};Object.defineProperty(k,"__esModule",{value:!0});k.u=class{constructor(){this.f=null}update(a){this.session.document.read((l)=>{const b=0<a.length&&a.every((a)=>{a=l.lookup.base(a);return a.is(m.base.ObjectKind.bracketFrame)&&
!a.locked});if(b){const d=l.lookup.bracketFrame(a[0]);this.i.setState({o:b,selected:a,fills:d.fills})}else this.i.setState({o:b,selected:null,fills:null})})}log(a){c.avro.Avro.createDefaultLogger().logModifiedObject({object_type:a,modify_action:"STYLE_CHANGE",topic_relationship:a,object_id:a.id})}v(a,b){b=b===h.ColorPickerChangeSource.opacitySlider?"CHANGE_OPACITY_SLIDER":"CHANGE_OPACITY_INPUT_VALUE";c.avro.Avro.createDefaultLogger().logModifiedObject({object_type:a,modify_action:b,topic_relationship:a,
object_id:a.id})}init(a){a.onDocumentChange(()=>{const {selected:a}=this.i.getState();null!=a&&this.update(a)});a.onSelectionChange((a)=>{this.update(a.allObjects.map((a)=>a.id))});this.i=a.declareUI({o:!1,selected:null,fills:null,j:e.isActive("js-present-editor-brandkit-enabled")&&e.isActive("js-show-brand-kit-paywalls")?f.BrandKitCTA.sul:f.BrandKitCTA.none},({o:a,selected:b,fills:e},c)=>{a&&(c.createPropertyBarItem((a)=>a.submenu({id:"bracket-frame-thickness",title:d.I18n.ts("Bracket frame thickness"),
tooltip:d.I18n.ts("Bracket frame thickness"),groupWeight:1,weight:3,icon:g.IconSmallId.BorderWeight,items:[{id:"bracket-frame-decrease-thickness",icon:g.IconSmallId.Minus,tooltip:d.I18n.ts("Decrease thickness"),onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"bracket-frame-decrease-thickness",run:(a)=>{b.forEach((b)=>{b=a.lookup.bracketFrame(b);b.thickness=Math.max(1,b.thickness-5);this.log(b)})}})}},{id:"bracket-frame-increase-thickness",icon:g.IconSmallId.Plus,tooltip:d.I18n.ts("Increase thickness"),
onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"bracket-frame-increase-thickness",run:(a)=>{b.forEach((b)=>{b=a.lookup.bracketFrame(b);b.thickness+=5;this.log(b)})}})}}]})),c.createPropertyBarItem((a)=>a.popupButton((a)=>{const c=d.I18n.ts("Bracket frame color");return{id:"bracket-frame-color",groupWeight:1,weight:1,tooltipText:c,$:!0,content:{text:c,icon:g.IconSmallId.FillColor,fills:Object.assign(Object.assign({},e),{radialFill:null,canPickClearFill:!0})},onOpen:()=>this.w(),popupContent:[...f.createBrandKitColorCTA(a,
this.i.getState().j,"PRESENT_COLOR_PICKER_SHAPE"),a.colorPicker({id:"bracket-frame-color-picker",showThemeColors:!0,fills:e,expanded:!0,onChange:(a,c)=>{const d=c.source;null!=this.f&&this.f.isActive()||(this.f=this.session.document.beginLongRunningCommand(a,{name:"applyBracketFrameColorInTransaction"},()=>{}));this.f.isActive()&&(this.f.execute(a,(a)=>{b.forEach((b)=>{b=a.lookup.bracketFrame(b);null!=b&&(b.fill=c.newFill,c.isFinal&&(this.log(b),d!==h.ColorPickerChangeSource.opacitySlider&&d!==h.ColorPickerChangeSource.opacityNumericField||
this.v(b,d)))})}),c.isFinal&&this.f.end())}})]}})))})}processMessage(a){switch(a){case "canEditBrandKit":this.i.setState({j:f.BrandKitCTA.canEditTeam});break;case "canNotEditBrandKit":this.i.setState({j:f.BrandKitCTA.canNotEditTeam});break;default:n.Utils.assertNever(a)}}w(){e.isActive("js-present-editor-brandkit-enabled")&&e.isActive("js-show-brand-kit-paywalls")&&c.avro.Avro.createDefaultLogger().logShownUpgradeToTeamCta({team_upgrade_trigger:"PRESENT_COLOR_PICKER_SHAPE"})}};b={};Object.defineProperty(b,
"__esModule",{value:!0});b.lazyModule={createPlugin(){return new k.u}};return b});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_bracket_frame",["require","prezi_brand_kit_cta","prezi_cet_model_editor","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_utils","prezi_widgets"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_bracket_frame.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_brand_kit_cta"),require("prezi_cet_model_editor"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_utils"),require("prezi_widgets"));}else{this["prezi_bracket_frame"]=__factory(this["prezi_brand_kit_cta"],this["prezi_cet_model_editor"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_utils"],this["prezi_widgets"]);}}).call(this);