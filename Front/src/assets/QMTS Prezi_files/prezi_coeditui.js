;(function(){var baseUrl;var __factory=function(){var React=arguments[0];var ReactDOM=arguments[1];var ReactTransitionGroup=arguments[2];var StyledComponents=arguments[3];var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_coeditui";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[4],"prezi_bacon":dependencies[5],"prezi_cet":dependencies[6],"prezi_cet_model":dependencies[7],"prezi_cet_renderer":dependencies[8],"prezi_editor_store_object":dependencies[9],"prezi_featureswitcher":dependencies[10],"prezi_i18n":dependencies[11],"prezi_koi_widgets":dependencies[12],"prezi_logger":dependencies[13],"prezi_utils":dependencies[14],"prezi_widgets":dependencies[15]}};})(),React,ReactDOM,ReactTransitionGroup,StyledComponents);};})(arguments);var moduleImpl=(function(){return module(function(f,h,A,r,m){var B=f.dependencies.prezi_featureswitcher,G=f.dependencies.prezi_i18n,C=f.dependencies.prezi_bacon,p=f.dependencies.prezi_cet,t=f.dependencies.prezi_logger,u=f.dependencies.prezi_utils,v=f.dependencies["prezi.geometry"],H=f.dependencies.prezi_cet_renderer,q=f.dependencies.prezi_widgets,w=f.dependencies.prezi_koi_widgets,e={};Object.defineProperty(e,"__esModule",{value:!0});var {default:f}=m;const D="rgba(49, 129, 255, 1);#4CD3D1;#2EC986;#E28BC0;#FA6546;#A5577E;#EC2E53;#DFAB29".split(";");
var x;(function(a){a[a.Label=0]="Label";a[a.User=1]="User"})(x=e.AvatarKind||(e.AvatarKind={}));e.AvatarContainer=f.div`
    background-color: ${(a)=>{switch(a.kind){case x.Label:return"#C2C7CD";case x.User:return a=Math.abs(u.Utils.hashString(`${a.firstName} ${a.lastName}`))%D.length,a=D[a];default:u.Utils.assertNever(a)}}};
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
    width: ${24}px;
    display: inline-block;
    cursor: default;
    height: ${24}px;
    border-radius: ${12}px;
    margin: 2px;
    padding-top: ${6}px;
    letter-spacing: 0.5px;
    color: white;
    text-align: center;
    font-family: "RalewayBold";
    font-size: 11px;
`;e.AvatarDetail=f.div`
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-evenly;
`;e.Label=f.span`
    text-align: start;
    font-variant: small-caps;
    letter-spacing: .5px;
    padding: 5px;
    font-family: RalewaySemiBold;
    font-size: 16;
`;e.ListItem=f.div`
    width: 240px;
    text-align: center;
    margin: 10px;
`;e.TopMenuCoeditUIMenuComponent=f.div`
    margin-right: -1px; // Visual fix, needed because the coedit menu-items have a 1px white border
    display: flex;
    flex-direction: row;
    align-items: center;
`;r=f.div`
    margin-left: -8px;
    width: fit-content;
    height: fit-content;
    border: 1px solid white;
    border-radius: 100%;

    div {
        width: 28px;
        height: 28px;
        margin: 0;
        border-radius: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;e.TopMenuCoeditUIMenuAvatarItem=f(r)`
    z-index: 1;
`;e.TopMenuCoeditUIMenuUserCountItem=r;var l={};Object.defineProperty(l,"__esModule",{value:!0});class I{constructor(){this.factory=w.KoiWidgetsModule.getWidgetFactory();this.avatar=({firstName:a,lastName:b,userName:c,onClick:d})=>this.factory.avatar({firstName:a,lastName:b,userName:c,onClick:d,style:{display:"inline-block",margin:2,cursor:"default"}});this.label=({text:a})=>h.createElement(e.Label,null,a);this.numberIndicator=({text:a})=>this.factory.avatar({firstName:a,lastName:"",userName:"",
style:{display:"inline-block",margin:2,cursor:"default",backgroundColor:"#929AA3"}});this.avatarDetail=(a)=>h.createElement(e.AvatarDetail,{className:"coedit-ui-list-row"},a);this.divider=()=>h.createElement(w.KoiWidgets.Divider,null);this.popup=(a,b)=>h.createElement(w.KoiWidgets.SimplePopup,{className:a.id,styles:{popup:{width:240}},open:a.open,orientation:"BOTTOM"},b)}}const J=(a,b)=>{try{return(a[0]+b[0]).toLocaleUpperCase()}catch(c){return""}};class K{constructor(){this.avatar=(a)=>h.createElement(e.AvatarContainer,
Object.assign({},a),J(a.firstName,a.lastName));this.label=({text:a})=>h.createElement(e.Label,null,a);this.numberIndicator=(a)=>h.createElement(e.AvatarContainer,Object.assign({},a),a.text);this.avatarDetail=(a)=>h.createElement(e.AvatarDetail,{className:"coedit-ui-list-row"},a);this.divider=()=>h.createElement(q.DropdownMenuSeparator,null);this.popup=(a,b)=>h.createElement(q.Popup,{id:a.id,position:"bottom"},b)}}l.koiUIFactory=new I;l.styledFactory=new K;var k={};Object.defineProperty(k,"__esModule",
{value:!0});k.CoeditUIAvatar=class{constructor(a,b,c){this.domLayer=a;this.user=b;this.editScene=c;this.clientUuid=b.clientUuid;this.hidden=!1;this.logger=t.LoggerModule.getLoggerManager().createLogger("prezi_coeditui.CoeditUIAvatar")}getDomElementId(){return this.domElementId}setHidden(a){this.hidden=a}isHidden(){return this.hidden}getClientUuid(){return this.clientUuid}dispose(){null!=this.domElement&&(null!=this.container&&this.container.parentElement&&this.domElement.parentElement===this.container&&
this.container.removeChild(this.domElement),this.domElementId=this.domElement=null);this.container&&0===this.container.children.length&&this.container.parentElement&&(this.container.parentElement.removeChild(this.container),this.container=null)}refresh(a,b){b&&!this.domElementId&&(this.domElement=this.createAvatarDomElement(this.user,b),this.domElementId=this.domElement.id);if(this.domElement&&b){var c=$(this.domElement);this.isVisible(a,b)?(c.css({display:"block"}),a=this.getEntityTopLeftCorner(b),
null!=a?(c=v.Geometry.createTranslation(a.x,a.y),this.domLayer.positionElementToCenter(this.domElementId,k.CoeditUIAvatar.ICON_SIZE,k.CoeditUIAvatar.ICON_SIZE),this.domLayer.transformWithoutScaleAndRotation(this.domElementId,c),this.offsetAvatar()):c.css({display:"none"})):c.css({display:"none"})}else this.logger.debug({action:"render",object:"floating-avatar",trigger:"machine",feature:"coedit-ui",payload:{message:"This shouldn't be rendered anymore!"}})}createAvatarDomElement(a,b){var c=b.getId();
const d=b.getDef().getName();b=this.domLayer.createElement(`${k.CoeditUIAvatar.COEDITUI_AVATAR_ID_PREFIX}_${this.clientUuid}_${c}`);b.className="coedit-ui-avatar";b.style.display="block";c=this.getContainer(c);this.domLayer.insertUIElement(c,b);a=l.styledFactory.avatar({kind:e.AvatarKind.User,firstName:a.firstName,lastName:a.lastName,userName:a.userName,onClick:()=>{this.logger.info({action:"click",object:"avatar",trigger:"user",feature:"coedit",payload:{message:"Floating avatar clicked",location_tag:"entity",
object_type:d}})}});A.render(a,b,()=>{});return b}isVisible(a,b){return this.isSceneAncestorOf(this.editScene,a.getRenderedScene())&&!this.hidden&&null!=p.Cet.visibility(b)&&p.Cet.visibility(b).isVisible()?!0:!1}getEntityTopLeftCorner(a){if(null==a)return null;a=a.getComponent(H.CetRendererModule.getWorldGeometryComponentKey());if(null==a)return null;var b=a.getWorldBounds();a=k.CoeditUIAvatar.AVATAR_BASE_MARGIN/this.domLayer.getCameraScale();a=Math.min(a,b.getWidthHalf());const c=v.Geometry.fromPoint(b.getVertices()[0]);
b=v.Geometry.fromPoint(b.getVertices()[1]).sub(c);b.setLength(a);return c.add(b).toPoint()}getContainer(a){this.container||(this.container=this.domLayer.createElement(`coedit-ui-avatar-container_${a}`),this.container.style.display="block");return this.container}offsetAvatar(){if(null!=this.domElement.parentElement){var a=[].slice.call(this.domElement.parentElement.children).indexOf(this.domElement);a=Math.round((this.domElement.parentElement.children.length-a-1)*k.CoeditUIAvatar.ICON_SIZE*k.CoeditUIAvatar.ICON_OFFSETTING_RATIO);
const b=$(this.domElement);b.css("left",parseInt(b.css("left"),10)+a)}}isSceneAncestorOf(a,b){for(;null!=b;){if(b===a)return!0;b=b.getParentScene()}return!1}};k.CoeditUIAvatar.COEDITUI_AVATAR_ID_PREFIX="c_overlay_avatar_";k.CoeditUIAvatar.AVATAR_BASE_MARGIN=30;k.CoeditUIAvatar.ICON_SIZE=36;k.CoeditUIAvatar.ICON_OFFSETTING_RATIO=.33;var y={};Object.defineProperty(y,"__esModule",{value:!0});const E=["Steve","Joe","Anna","Mia"],F=["Smith","Johnson","Williams"];f=Array.from(Array(10).keys()).map((a)=>
({getUserId:()=>a,getClientUuid:()=>`${a}`,isSelf:()=>!1,isDisconnected:()=>!1,getFirstName:()=>E[a%E.length],getLastName:()=>F[a%F.length],getUserName:()=>`user${a}`}));y.debugUsers=[{getUserId:()=>4444,getClientUuid:()=>"3333",isSelf:()=>!0,isDisconnected:()=>!1,getFirstName:()=>"John",getLastName:()=>"Wick",getUserName:()=>"babayaga"},...f];var g={};Object.defineProperty(g,"__esModule",{value:!0});g.CoeditUIMenu=class extends h.Component{constructor(a){super(a);this.createAvatarIcon=(a,c,d)=>l.styledFactory.avatar({kind:e.AvatarKind.User,
firstName:a,lastName:c,userName:d,onClick:()=>{this.logger.info({action:"click",object:"avatar",trigger:"user",feature:"coedit",payload:{message:"Collaborator list avatar clicked",location_tag:"collaborator_list",object_type:"collaborator_name"}})}});this.logger=t.LoggerModule.getLoggerManager().createLogger("prezi_coeditui.CoeditUIMenu");this.coeditUIController=a.coeditUIController;this.state={activeCoeditors:[],collaborators:[],collaboratorsPresent:this.coeditUIController.getCollaboratorsPresent()};
this.activeUsersStreamOnValueTimer=this.coeditUIController.getActiveUsersStream().onValue((a)=>{this.setState({activeCoeditors:a})});this.collaboratorListStreamOnValueTimer=this.coeditUIController.getCollaboratorListStream().onValue((a)=>{this.setState({collaborators:a})});this.collaboratorsPresentStreamOnValueTimer=this.coeditUIController.getCollaboratorsPresentStream().onValue((a)=>{this.setState({collaboratorsPresent:a})})}componentWillUnmount(){"function"===typeof this.activeUsersStreamOnValueTimer&&
this.activeUsersStreamOnValueTimer();"function"===typeof this.collaboratorListStreamOnValueTimer&&this.collaboratorListStreamOnValueTimer();"function"===typeof this.collaboratorsPresentStreamOnValueTimer&&this.collaboratorsPresentStreamOnValueTimer()}componentWillMount(){this.coeditUIController.initializeData()}render(){const {isOffline:a,isOnboarding:b}=this.props;if(!B.isActive("js-debug-force-show-coedit-ui")&&(a||b))return null;var c=B.isActive("js-debug-force-show-coedit-ui")?y.debugUsers:this.state.collaboratorsPresent;
const d=!this.props.hideSelf&&c.find((a)=>a.isSelf());c=c.filter((a)=>!a.isSelf());const L=q.tooltipWrapper(e.TopMenuCoeditUIMenuUserCountItem),f=q.tooltipWrapper(e.TopMenuCoeditUIMenuAvatarItem),k=c.slice(0,10).map((a)=>h.createElement(M,null,`${a.getFirstName()} ${a.getLastName()}`));return h.createElement(e.TopMenuCoeditUIMenuComponent,{id:g.CoeditUIMenu.COEDIT_UI_MENU_ID,key:g.CoeditUIMenu.COEDIT_UI_MENU_ID},d&&h.createElement(f,{id:g.CoeditUIMenu.COEDITORS_ME_ID,tooltipText:`${d.getFirstName()} ${d.getLastName()}`},
this.createAvatarIcon(d.getFirstName(),d.getLastName(),d.getUserName())),0<c.length&&h.createElement(L,{tooltipNode:k},this.createUserNumberIndicator(c)))}componentDidMount(){this.setState({anchorNode:A.findDOMNode(this.refs&&this.refs[g.CoeditUIMenu.COEDITORS_BUTTON_ID])})}getDropdownContent(a){return[l.styledFactory.label({text:G.I18n.ts("collaborating now").toLocaleLowerCase()}),l.styledFactory.divider(),...a.map((a)=>this.createAvatar(a.getFirstName(),a.getLastName(),a.getUserName()))]}createUserNumberIndicator(a){return h.createElement("div",
{id:g.CoeditUIMenu.COEDITORS_BUTTON_ID,onClick:()=>{}},l.styledFactory.numberIndicator({kind:e.AvatarKind.Label,text:`+${a.length}`,onClick:null}),this.props.isDropdownOpen&&l.styledFactory.popup({id:g.CoeditUIMenu.POPUP_ID,open:this.props.isDropdownOpen},this.getDropdownContent(a).map((a,c)=>h.createElement(e.ListItem,{key:c},a))))}createAvatar(a,b,c){return l.styledFactory.avatarDetail([this.createAvatarIcon(a,b,c),l.styledFactory.label({text:`${a} ${b}`})])}};g.CoeditUIMenu.POPUP_ID="coedit-ui-dropdown-menu";
g.CoeditUIMenu.COEDITORS_BUTTON_ID="coedit-ui-menu-button";g.CoeditUIMenu.COEDITORS_ME_ID="coedit-ui-menu-me";g.CoeditUIMenu.COEDITORS_LIST_ID="coedit-ui-list";g.CoeditUIMenu.COEDIT_UI_MENU_ID="coedit-ui-menu";g.CoeditUIMenu.COLLABORATORS_BUTTON_ID="coedit-ui-collaborators-button";g.CoeditUIMenu.COEDIT_UI_MENU_ROW_CLASS="coedit-ui-list-row";g.CoeditUIMenu.COLLABORATOR_NAME_KEY="coedit-ui-collaborator-name";g.CoeditUIMenu.COLLABORATOR_AVATAR_KEY="coedit-ui-collaborator-avatar";const M=m.default.div`
	 text-align: center;
	 padding-top: 2px;
	 padding-bottom: 2px;
 `;var n={};Object.defineProperty(n,"__esModule",{value:!0});n.CoeditUIControllerImpl=class{constructor(a,b,c){this.logger=t.LoggerModule.getLoggerManager().createLogger("prezi_coeditui.CoeditUIControllerImpl");this.collaboratorsPresent=[];this.peerSelectionStream=b;this.activeUsersStream=this.transformUserStream(a);this.collaboratorsPresentStream=this.filterCollaboratorsPresent(a);this.openPopupIdStream=C.Bacon.newBus();this.openPopupIdStream.onValue((a)=>c(a));this.collaboratorStream=C.Bacon.newBus();
this.isDropdownOpen=!1;this.lastActiveUsers=[];this.lastActivePeerSelection={};this.activeUsersFloatingAvatars={};this.activeUsersStream.onValue(()=>{});this.collaboratorsPresentStream.onValue((a)=>{this.collaboratorsPresent=a})}static getCoeditUIComponentKeyForClientUuid(a){return p.Cet.createOverlayComponentKey("coeditUIOverlay-"+a)}getCollaboratorsPresent(){return this.collaboratorsPresent}getCollaboratorsPresentStream(){return this.collaboratorsPresentStream}getActiveUsersStream(){return this.activeUsersStream}setShareService(a){this.collaboratorInfoService=
a}getCollaboratorListStream(){return this.collaboratorStream}getOpenPopupIdStream(){return this.openPopupIdStream}openMenu(){this.requestCollaboratorUpdate();this.openPopupIdStream.push(g.CoeditUIMenu.POPUP_ID)}closeMenu(){return this.openPopupIdStream.push(null)}initializeData(){this.requestCollaboratorUpdate()}initHoverAvatarRendering(a,b,c,d){this.domLayer=c;this.mainStage=d;this.baseScene=b;this.editScene=a;this.peerSelectionStream.onValue((a)=>{u.Utils.arrayEquals(this.lastActivePeerSelection[a.clientUuid],
a.selectedEntityIds)||(this.lastActivePeerSelection[a.clientUuid]=a.selectedEntityIds,this.alignAvatarsToPeerSelection(a.clientUuid,a.selectedEntityIds))});this.activeUsersStream.onValue((a)=>{this.lastActiveUsers=a;this.clearInactiveUserAvatars();this.lastActiveUsers.forEach((a)=>{var b=a.getClientUuid();b=this.lastActivePeerSelection[b];this.alignAvatarsToPeerSelection(a.getClientUuid(),b)})})}alignAvatarsToPeerSelection(a,b){let c=this.lastActiveUsers.filter((b)=>b.getClientUuid()===a)[0];if(c){var d=
this.extractFlatUserObj(c);this.baseScene.requestNoDomBatchUpdate((a)=>{this.updateAvatarsForNewSelection(this.activeUsersFloatingAvatars,d,b,a)})}}updateAvatarsForNewSelection(a,b,c,d){c&&0!==c.length?c.map((a)=>d.getEntityById(a)).every((a)=>!a)||this.disposeAllAvatarsForUser(b.clientUuid,a,d,()=>{c.forEach((c)=>{this.attachAvatar(b,c,d,a)})}):this.disposeAllAvatarsForUser(b.clientUuid,a,d)}attachAvatar(a,b,c,d){if(a=this.createFloatingAvatar(a,b,c))c=a.getClientUuid(),d[c]||(d[c]={}),d[c][b]=a}disposeAllAvatarsForUser(a,
b,c,d){let e=b[a];if(e&&Object.keys(e).length){let f=Object.keys(e);c.requestNoDomBatchUpdate((b)=>{f.forEach((c)=>{let d=b.getEntityById(c);if(d){let b=n.CoeditUIControllerImpl.getCoeditUIComponentKeyForClientUuid(a),f=d.getComponent(b);f?f.dispose():null!=e[c]?e[c].dispose():this.logger.warn({action:"disposeError",object:"coeditUIController",trigger:"collaboratorChange",feature:"coedit-ui",payload:{message:"Coedit UI component can't be disposed.",clientUuid:a,entityId:c,componentKey:b.getName()}});
d.discardOwnComponent(n.CoeditUIControllerImpl.getCoeditUIComponentKeyForClientUuid(a))}});d&&d()});b[a]={}}else d&&d()}createFloatingAvatar(a,b,c){b=c.getEntityById(b);if(!b)return null;c=new k.CoeditUIAvatar(this.domLayer,a,this.editScene);let d=p.Cet.createOverlayComponent(c,c);c.refresh(this.mainStage,b);b.setComponent(n.CoeditUIControllerImpl.getCoeditUIComponentKeyForClientUuid(a.clientUuid),d);return c}transformUserStream(a){return a.map(this.filterActiveUsersInArray)}filterCollaboratorsPresent(a){return a.map(this.presentCollaboratorsInArray)}filterActiveUsersInArray(a){return a.filter((a)=>
!a.isDisconnected()).filter((a)=>!a.isSelf()).filter((a,c,d)=>d.map((a)=>a.getClientUuid()).indexOf(a.getClientUuid())===c)}presentCollaboratorsInArray(a){return a.filter((a)=>!a.isDisconnected()).filter((a,c,d)=>d.map((a)=>a.getClientUuid()).indexOf(a.getClientUuid())===c)}extractFlatUserObj(a){return{userName:a.getUserName(),firstName:a.getFirstName(),lastName:a.getLastName(),clientUuid:a.getClientUuid()}}clearInactiveUserAvatars(){let a=this.lastActiveUsers.map((a)=>a.getClientUuid());Object.keys(this.activeUsersFloatingAvatars).filter((b)=>
-1===a.indexOf(b)).forEach((a)=>{this.disposeAllAvatarsForUser(a,this.activeUsersFloatingAvatars,this.baseScene)})}requestCollaboratorUpdate(){this.collaboratorInfoService&&this.collaboratorInfoService.getCollaborators((a)=>{this.collaboratorStream.push(a)},(a)=>{this.logger.warn({action:"requestCollaboratorUpdate",object:"coeditUIController",trigger:"click",feature:"coedit",payload:{message:"Collaborator Info Service returned error",errorObj:a}})})}};var z={};Object.defineProperty(z,"__esModule",
{value:!0});z.CoeditUISectionImpl=class{constructor(a){this.coeditUIController=a;this.coeditUIMenuFactory=h.createFactory(g.CoeditUIMenu)}createCoeditUIPanel(a,b,c,d,e){return this.coeditUIMenuFactory({coeditUIController:this.coeditUIController,isDropdownOpen:c===g.CoeditUIMenu.POPUP_ID,openShareDialogCallback:d,isOffline:a,isOnboarding:b,hideSelf:e})}};m={};Object.defineProperty(m,"__esModule",{value:!0});(function(a){a.createCoeditUIController=function(a,c,d){return new n.CoeditUIControllerImpl(a,
c,d)};a.createCoeditUISection=function(a){return new z.CoeditUISectionImpl(a)}})(m.CoeditUIModule||(m.CoeditUIModule={}));return m});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_coeditui",["require","react","react-dom","react-transition-group","styled-components","prezi.geometry","prezi_bacon","prezi_cet","prezi_cet_model","prezi_cet_renderer","prezi_editor_store_object","prezi_featureswitcher","prezi_i18n","prezi_koi_widgets","prezi_logger","prezi_utils","prezi_widgets"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_coeditui.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("react"),require("react-dom"),require("react-transition-group"),require("styled-components"),require("prezi.geometry"),require("prezi_bacon"),require("prezi_cet"),require("prezi_cet_model"),require("prezi_cet_renderer"),require("prezi_editor_store_object"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_koi_widgets"),require("prezi_logger"),require("prezi_utils"),require("prezi_widgets"));}else{this["prezi_coeditui"]=__factory(React,ReactDOM,ReactTransitionGroup,StyledComponents,this["prezi.geometry"],this["prezi_bacon"],this["prezi_cet"],this["prezi_cet_model"],this["prezi_cet_renderer"],this["prezi_editor_store_object"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_koi_widgets"],this["prezi_logger"],this["prezi_utils"],this["prezi_widgets"]);}}).call(this);