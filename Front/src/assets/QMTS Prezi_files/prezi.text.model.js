;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-21-g384e8fc";},getModuleName:function(){return "prezi.text.model";},getModuleVersion:function(){return "7.1-115-g75931ec";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.text":dependencies[0]}};})());};})(arguments);var moduleImpl=(function(){return module(function(B){var x;(function(){function r(){}function w(){}function l(){}function t(){}function y(){}function m(){}function u(a,b){b=b.split("u").join("");this.r=new RegExp(a,b)}var q;u.__name__=!0;u.prototype={split:function(a){return a.replace(this.r,"#__delim__#").split("#__delim__#")},v:u};m.__name__=!0;m.substr=function(a,b,e){if(null!=b&&0!=b&&null!=e&&0>e)return"";null==e&&(e=a.length);0>b?(b=a.length+b,0>b&&(b=0)):0>e&&(e=a.length+e-b);return a.substr(b,e)};y.__name__=!0;Math.__name__=
!0;t.__name__=!0;t.ra=function(a,b){try{return a[b]}catch(e){return null}};l.__name__=!0;l.u=function(a){return h.m.P(a,"")};w.__name__=!0;w.Aa=function(a){var b="";do b="0123456789ABCDEF".charAt(a&15)+b,a>>>=4;while(0<a);for(;6>b.length;)b="0"+b;return b};r.__name__=!0;r.T=function(a){return null==a?null:a instanceof Array&&null==a.ba?Array:a.v};var v=function(){this.C=""};v.__name__=!0;v.prototype={v:v};var n=function(){this.ha={}};n.__name__=!0;n.F=[y];n.prototype={set:function(a,b){this.ha["$"+
a]=b},get:function(a){return this.ha["$"+a]},qa:function(a){return this.ha.hasOwnProperty("$"+a)},v:n};var h={m:function(){}};h.m.__name__=!0;h.m.T=function(a){return a instanceof Array&&null==a.ba?Array:a.v};h.m.P=function(a,b){if(null==a)return"null";if(5<=b.length)return"<...>";var c=typeof a;"function"==c&&(a.__name__||a.ma)&&(c="object");switch(c){case "object":if(a instanceof Array){if(a.ba){if(2==a.length)return a[0];c=a[0]+"(";b+="\t";for(var d=2,f=a.length;d<f;){var g=d++;c=2!=g?c+(","+h.m.P(a[g],
b)):c+h.m.P(a[g],b)}return c+")"}c=a.length;d="[";b+="\t";for(f=0;f<c;)g=f++,d+=(0<g?",":"")+h.m.P(a[g],b);return d+"]"}try{d=a.toString}catch(k){return"???"}if(null!=d&&d!=Object.toString&&(c=a.toString(),"[object Object]"!=c))return c;c=null;d="{\n";b+="\t";f=null!=a.hasOwnProperty;for(c in a)f&&!a.hasOwnProperty(c)||"prototype"==c||"__class__"==c||"__super__"==c||"__interfaces__"==c||"__properties__"==c||(2!=d.length&&(d+=", \n"),d+=b+c+" : "+h.m.P(a[c],b));b=b.substring(1);return d+("\n"+b+"}");
case "function":return"<function>";case "string":return a;default:return String(a)}};h.m.fa=function(a,b){if(null==a)return!1;if(a==b)return!0;var c=a.F;if(null!=c)for(var d=0,f=c.length;d<f;){var g=d++;g=c[g];if(g==b||h.m.fa(g,b))return!0}return h.m.fa(a.Ga,b)};h.m.O=function(a,b){if(null==b)return!1;switch(b){case C:return(a|0)===a;case z:return"number"==typeof a;case A:return"boolean"==typeof a;case String:return"string"==typeof a;case Array:return a instanceof Array&&null==a.ba;case D:return!0;
default:if(null!=a){if("function"==typeof b&&(a instanceof b||h.m.fa(h.m.T(a),b)))return!0}else return!1;return b==E&&null!=a.__name__||b==F&&null!=a.ma?!0:a.ba==b}};h.m.K=function(a,b){if(h.m.O(a,b))return a;throw"Cannot cast "+l.u(a)+" to "+l.u(b);};var b=q=void 0;q=function(){};q.__name__=!0;b={b:{}};b.b.c=function(){};b.b.c.__name__=!0;b.b.c.va=function(a){return a};b.b.c.value=function(a){return a};b.b.c.za=function(a){var c=null==a?"null":""+a;if(!b.b.c.R.qa(c))throw"Invalid value for Alignment: "+
a;return b.b.c.R.get(c)};b.b.c.ua=function(a){return b.b.c.ga.get(null==a?"null":""+a)};b.b.c.valueOf=function(a){switch(a){case "LEFT":return b.b.c.LEFT;case "CENTER":return b.b.c.CENTER;case "RIGHT":return b.b.c.RIGHT;case "JUSTIFY":return b.b.c.JUSTIFY;default:throw"Invalid name for Alignment: "+a;}};b.b.c.values=function(){return[b.b.c.LEFT,b.b.c.CENTER,b.b.c.RIGHT,b.b.c.JUSTIFY]};b.V=function(){};b.V.__name__=!0;b.V.prototype={v:b.V};b.ka=function(){};b.ka.__name__=!0;b.ka.equals=function(a,
b){return a==b?!0:null==a?null==b:null==b?!1:a.length==b.length&&a.styles.equals(b.styles)};b.W=function(){};b.W.__name__=!0;b.W.prototype={v:b.W};b.J=function(a){this.color=a;this.wa="#"+w.Aa(a)};b.J.__name__=!0;b.J.F=[b.W];b.J.prototype={asInt:function(){return this.color},asHexString:function(){return this.wa},equals:function(a){return null==a?!1:this.color==a.asInt()},v:b.J};b.a=function(a,b,e,d,f,g,k){null==k&&(k=-1);null==g&&(g=-1);null==e&&(e=-1);this.color=a;this.fontFamily=b;this.fontSize=
e;this.fontStyle=d;this.fontWeight=f;this.s=g;this.url=k};b.a.__name__=!0;b.a.F=[b.V];b.a.withColor=function(a){return new b.a(a,null,-1,null,null,-1,-1)};b.a.withFontFamily=function(a){return new b.a(null,a,-1,null,null,-1,-1)};b.a.withFontSize=function(a){return new b.a(null,null,a,null,null,-1,-1)};b.a.withFontStyle=function(a){return new b.a(null,null,-1,a,null,-1,-1)};b.a.withFontWeight=function(a){return new b.a(null,null,-1,null,a,-1,-1)};b.a.withUnderline=function(a){return new b.a(null,null,
-1,null,null,a,-1)};b.a.withUrl=function(a){return new b.a(null,null,-1,null,null,-1,a)};b.a.prototype={getColor:function(){return this.color},getColorWithFallback:function(a){return null!=this.color?this.color:a.getColor()},isColorSet:function(){return null!=this.color},setColor:function(a){return b.B.I(this.color,a)?this:new b.a(a,this.fontFamily,this.fontSize,this.fontStyle,this.fontWeight,this.s,this.url)},resetColor:function(){return this.setColor(null)},getFontFamily:function(){return this.fontFamily},
getFontFamilyWithFallback:function(a){return null!=this.fontFamily?this.fontFamily:a.getFontFamily()},isFontFamilySet:function(){return null!=this.fontFamily},setFontFamily:function(a){return this.fontFamily==a?this:new b.a(this.color,a,this.fontSize,this.fontStyle,this.fontWeight,this.s,this.url)},resetFontFamily:function(){return this.setFontFamily(null)},getFontSize:function(){return this.fontSize},getFontSizeWithFallback:function(a){return-1!=this.fontSize?this.fontSize:a.getFontSize()},isFontSizeSet:function(){return-1!=
this.fontSize},setFontSize:function(a){return this.fontSize==a?this:new b.a(this.color,this.fontFamily,a,this.fontStyle,this.fontWeight,this.s,this.url)},resetFontSize:function(){return this.setFontSize(-1)},getFontStyle:function(){return this.fontStyle},getFontStyleWithFallback:function(a){return null!=this.fontStyle?this.fontStyle:a.getFontStyle()},isFontStyleSet:function(){return null!=this.fontStyle},setFontStyle:function(a){return this.fontStyle==a?this:new b.a(this.color,this.fontFamily,this.fontSize,
a,this.fontWeight,this.s,this.url)},resetFontStyle:function(){return this.setFontStyle(null)},getFontWeight:function(){return this.fontWeight},getFontWeightWithFallback:function(a){return null!=this.fontWeight?this.fontWeight:a.getFontWeight()},isFontWeightSet:function(){return null!=this.fontWeight},setFontWeight:function(a){return this.fontWeight==a?this:new b.a(this.color,this.fontFamily,this.fontSize,this.fontStyle,a,this.s,this.url)},resetFontWeight:function(){return this.setFontWeight(null)},
getFontFaceId:function(){return q.na.getFontFaceId(this.fontFamily,this.fontWeight,this.fontStyle)},getFontFaceIdWithFallback:function(a){var b=null!=this.fontFamily?this.fontFamily:a.getFontFamily();var e=null!=this.fontWeight?this.fontWeight:a.getFontWeight();a=null!=this.fontStyle?this.fontStyle:a.getFontStyle();return q.na.getFontFaceId(b,e,a)},getUnderline:function(){return this.s},isUnderline:function(){return 1==this.s},getUnderlineWithFallback:function(a){return-1!=this.s?this.s:a.getUnderline()},
isUnderlineWithFallback:function(a){return-1!=this.s?1==this.s:a.isUnderline()},isUnderlineSet:function(){return-1!=this.s},setUnderline:function(a){return this.s==a?this:new b.a(this.color,this.fontFamily,this.fontSize,this.fontStyle,this.fontWeight,a,this.url)},resetUnderline:function(){return this.setUnderline(-1)},getUrl:function(){return this.url},isUrl:function(){return 1==this.url},getUrlWithFallback:function(a){return-1!=this.url?this.url:a.getUrl()},isUrlWithFallback:function(a){return-1!=
this.url?1==this.url:a.isUrl()},isUrlSet:function(){return-1!=this.url},setUrl:function(a){return this.url==a?this:new b.a(this.color,this.fontFamily,this.fontSize,this.fontStyle,this.fontWeight,this.s,a)},resetUrl:function(){return this.setUrl(-1)},setAll:function(a){var c=a.isColorSet()?a.getColor():this.color;var e=a.isFontFamilySet()?a.getFontFamily():this.fontFamily;var d=a.isFontSizeSet()?a.getFontSize():this.fontSize;var f=a.isFontStyleSet()?a.getFontStyle():this.fontStyle;var g=a.isFontWeightSet()?
a.getFontWeight():this.fontWeight;var k=a.isUnderlineSet()?a.getUnderline():this.s;a=a.isUrlSet()?a.getUrl():this.url;return b.B.I(this.color,c)&&this.fontFamily==e&&this.fontSize==d&&this.fontStyle==f&&this.fontWeight==g&&this.s==k&&this.url==a?this:new b.a(c,e,d,f,g,k,a)},resetMatching:function(a){var c=b.B.I(a.getColor(),this.color)?null:this.color;var e=a.getFontFamily()!=this.fontFamily?this.fontFamily:null;var d=a.getFontSize()!=this.fontSize?this.fontSize:-1;var f=a.getFontStyle()!=this.fontStyle?
this.fontStyle:null;var g=a.getFontWeight()!=this.fontWeight?this.fontWeight:null;var k=a.getUnderline()!=this.s?this.s:-1;a=a.getUrl()!=this.url?this.url:-1;return b.B.I(this.color,c)&&this.fontFamily==e&&this.fontSize==d&&this.fontStyle==f&&this.fontWeight==g&&this.s==k&&this.url==a?this:new b.a(c,e,d,f,g,k,a)},resetAll:function(){return b.B.I(this.color,null)&&null==this.fontFamily&&-1==this.fontSize&&null==this.fontStyle&&null==this.fontWeight&&-1==this.s&&-1==this.url?this:new b.a(null,null,
-1,null,null,-1,-1)},equals:function(a){if(a==this)return!0;if(!h.m.O(a,b.a))return!1;a=h.m.K(a,b.a);return b.B.I(this.color,a.color)&&this.fontFamily==a.fontFamily&&this.fontSize==a.fontSize&&this.fontStyle==a.fontStyle&&this.fontWeight==a.fontWeight&&this.s==a.s&&this.url==a.url},compareWithNaNCheck:function(a){if(a==this)return!0;if(!h.m.O(a,b.a))return!1;a=h.m.K(a,b.a);return b.B.I(this.color,a.color)&&this.fontFamily==a.fontFamily&&b.ea.compareWithNaNCheck(this.fontSize,a.fontSize)&&this.fontStyle==
a.fontStyle&&this.fontWeight==a.fontWeight&&this.s==a.s&&this.url==a.url},toString:function(){return b.N.toString(this,"color fontFamily fontSize fontStyle fontWeight underline url".split(" "))},v:b.a};b.X=function(){};b.X.__name__=!0;b.X.prototype={v:b.X};b.M=function(){};b.M.__name__=!0;b.M.F=[b.X];b.M.prototype={v:b.M};b.j=function(a,b,e){if(null==a)throw"text should not be null";this.text=a;if(null==b)throw"paragraphStyle should not be null";this.o=b;if(null==e)throw"characterStyles should not be null";
this.l=e};b.j.__name__=!0;b.j.F=[b.M];b.j.ca=function(a){if(null==a)throw"paras should not be null";a;if(0==a.length)throw"paras should not be empty";var c=a[0];if(1==a.length)return c;c=c.getParagraphStyle();for(var e="",d=[],f=0,g=a.length;f<g;){var k=f++;k=a[k];e+=k.getText();0<k.getLength()&&(d=d.concat(k.getAllCharacterStyles()))}0==d.length&&(d=d.concat(a[0].getAllCharacterStyles()));return new b.j(e,c,d)};b.j.prototype={clone:function(){return this},getText:function(){return this.text},getLength:function(){return this.text.length},
getParagraphStyle:function(){return this.o},getAllCharacterStyles:function(){return this.l},addEmptyLineStyle:function(a){if(0<this.l.length)throw"characterStyles should be empty to add empty line style";return new b.j(this.text,this.o,[a])},getCharacterStyleRanges:function(){if(0==this.l.length)return[];if(0==this.text.length&&1==this.l.length)return[{length:0,styles:this.l[0]}];for(var a=[],b=1,e=this.l[0],d=1;;){var f=d>=this.text.length;if(f||!e.equals(this.l[d]))if(a.push({length:b,styles:e}),
f)break;else b=0,e=this.l[d];b++;d++}return a},insertParagraph:function(a,c){if(null==c)throw"para should not be null";c;if(0==c.getLength())return this;var e=m.substr(this.text,0,a)+c.getText()+m.substr(this.text,a,null);a=this.D().slice(0,a).concat(c.getAllCharacterStyles()).concat(this.D().slice(a));return new b.j(e,this.o,a)},D:function(){return 0==this.text.length?[]:this.l},deleteText:function(a,c){0>a&&(a=0);c>this.text.length&&(c=this.text.length);if(a>=c)return this;var e=m.substr(this.text,
0,a)+m.substr(this.text,c,null);a=this.D().slice(0,a).concat(this.D().slice(c));return new b.j(e,this.o,a)},applyStyles:function(a,c,e,d){if(null==e)throw"styles should not be null";e;if(0==this.text.length&&1==this.l.length)return c=d?e:this.l[0].setAll(e),new b.j(this.text,this.o,[c]);0>a&&(a=0);c>this.text.length&&(c=this.text.length);if(a>=c)return this;for(var f=null;a<c;){var g=a++,k=this.l[g];var h=d?e:k.setAll(e);h.equals(k)||(null==f&&(f=this.l.slice()),f[g]=h)}return null==f?this:new b.j(this.text,
this.o,f)},resetStyles:function(a,c){return this.applyStyles(a,c,new b.a,!0)},removeMatchingStyles:function(a){if(null==a)throw"baseStyle should not be null";a;for(var c=null,e=0,d=this.D().length;e<d;){var f=e++,g=this.D()[f],k=g.resetMatching(a);k!=g&&(null==c&&(c=this.D().slice()),c[f]=k)}return null==c?this:new b.j(this.text,this.o,c)},split:function(a){0>a?a=0:a>this.text.length&&(a=this.text.length);if(0==a)return[new b.j("",this.o,[]),this];if(a==this.text.length)return[this,new b.j("",this.o,
[])];var c=new b.j(m.substr(this.text,0,a),this.o,this.D().slice(0,a));a=new b.j(m.substr(this.text,a,null),this.o,this.D().slice(a));return[c,a]},getCharacterStylesAt:function(a){if(0==this.text.length&&0==a)return 0==this.l.length?new b.a:this.l[0];0>a&&(a=0);a>=this.text.length&&(a=this.text.length-1);return this.l[a]},getAlignment:function(){return this.o.getAlignment()},setAlignment:function(a){a=this.o.setAlignment(a);return a==this.o?this:new b.j(this.text,a,this.l)},getIndent:function(){return this.o.getIndent()},
setIndent:function(a){a=this.o.setIndent(a);return a==this.o?this:new b.j(this.text,a,this.l)},getListType:function(){return this.o.getListType()},setListType:function(a){a=this.o.setListType(a);return a==this.o?this:new b.j(this.text,a,this.l)},toString:function(){return b.N.toString(this,["text","paragraphStyle","characterStyles"])},equals:function(a){if(a==this)return!0;if(r.T(a)!=b.j)return!1;a=h.m.K(a,b.j);if(this.text!=a.text||!this.o.equals(a.o)||this.l.length!=a.l.length)return!1;for(var c=
0,e=this.l.length;c<e;){var d=c++;if(!this.l[d].equals(a.l[d]))return!1}return!0},compareWithNaNCheck:function(a){if(a==this)return!0;if(r.T(a)!=b.j)return!1;a=h.m.K(a,b.j);if(this.text!=a.text||!this.o.equals(a.o)||this.l.length!=a.l.length)return!1;for(var c=0,e=this.l.length;c<e;){var d=c++;if(!this.l[d].compareWithNaNCheck(a.l[d]))return!1}return!0},v:b.j};b.Y=function(){};b.Y.__name__=!0;b.Y.prototype={v:b.Y};b.w=function(a,b,e){this.G=a;this.L=b;this.H=e};b.w.__name__=!0;b.w.F=[b.Y];b.w.ja=
function(a,c,e){if(e!=b.f.g.NONE&&1>a)return 1;if(0>a)return 0;switch(c){case b.b.c.LEFT:case b.b.c.JUSTIFY:return a;default:return e!=b.f.g.NONE?1:0}};b.w.prototype={clone:function(){return this},getAlignment:function(){return this.G},setAlignment:function(a){return this.G==a?this:new b.w(a,b.w.ja(this.L,a,this.H),this.H)},getIndent:function(){return this.L},setIndent:function(a){a=b.w.ja(a,this.G,this.H);return this.L==a?this:new b.w(this.G,a,this.H)},getListType:function(){return this.H},setListType:function(a){if(this.H==
a)return this;var c=this.L;switch(a){case b.f.g.BULLET:c++;break;case b.f.g.NONE:c--;break;default:throw"Unknown list type: "+l.u(a);}return new b.w(this.G,b.w.ja(c,this.G,a),a)},toString:function(){return b.N.toString(this,["alignment","indent","listType"])},equals:function(a){return a==this?!0:r.T(a)!=b.w?!1:this.G==a.G&&this.L==a.L&&this.H==a.H},v:b.w};b.Z=function(){};b.Z.__name__=!0;b.Z.prototype={v:b.Z};b.Text=function(){};b.Text.__name__=!0;b.Text.F=[b.Z];b.Text.prototype={v:b.Text};b.h=function(a,
b){if(null==b)throw"paragraphs should not be null";b;if(Math.isNaN(a))throw"Invalid wrapWidth: "+a;0==a&&(a=-1);this.A=a;this.ia=null;this.i=b.slice();for(var c=a=0;c<b.length;){var d=b[c];++c;a+=d.getLength()}this.length=a+=b.length-1};b.h.__name__=!0;b.h.F=[b.Text];b.h.oa=function(a){for(var b=[],e=0,d=0;d<a.length;){var f=a[d];++d;0==f.getLength()&&0==f.getAllCharacterStyles().length&&b.push({ta:f,index:e});e++}return b};b.h.S=function(a){var c=b.h.oa(a);if(1>c.length)return a;a=a.slice();for(var e=
0;e<c.length;){var d=c[e];++e;a[d.index]=d.ta.addEmptyLineStyle(new b.a)}return a};b.h.sa=function(a,c,e){c=c.slice();for(var d=b.h.oa(c),f=0;f<d.length;){var g=d[f];++f;c[g.index]=g.ta.addEmptyLineStyle(e)}return new b.h(a,c)};b.h.pa=function(a,c,e,d){if(null==e)return"NULL\n";if(0==e.length)return"[]\n";for(var f="",g=0;g<a;)g++,f+=b.h.da;a="\n";g=0;for(var k=e.length;g<k;){var h=g++,p=e[h];p=null==d?l.u(p):d(p);null!=c&&(p=c+"#"+h+": "+p);h=0;for(p=p.split("\n");h<p.length;){var m=p[h];++h;a+=
f;a+=m+"\n"}}return a};b.h.prototype={clone:function(){return this},getRawText:function(){if(null==this.ia){for(var a="",b=0,e=this.i.length;b<e;){var d=b++;0<d&&(a+="\n");a+=this.i[d].getText()}this.ia=a}return this.ia},getLength:function(){return this.length},getWrapWidth:function(){return this.A},setWrapWidth:function(a){return new b.h(a,this.i)},getParagraphs:function(){return this.i},getParagraphCount:function(){return this.i.length},getParagraph:function(a){return this.i[a]},getParagraphStartOffset:function(a){for(var b=
0,e=0;e<a;){var d=e++;b+=this.i[d].getLength()+1}return b},getParagraphIndexesBetween:function(a,b){if(0>b||a==b)b=a+1;for(var c=0,d=[],f=0,g=this.i.length;f<g;){var k=f++;if(b<=c)break;var h=c+this.i[k].getLength()+1;h>a&&c<b&&d.push(k);c=h}return d},locate:function(a,b){for(var c=a,d=0,f=this.i[d];d<this.i.length-1&&!(c<f.getLength()+1||b&&c==f.getLength()+1);)c-=f.getLength()+1,d++,f=this.i[d];return{offset:a,para:d,paraOffset:c}},slice:function(a,b){return this.deleteText(b,this.length).deleteText(0,
a)},insertText:function(a,b){return this.insertTextWithStyle(a,b,null)},insertTextWithStyle:function(a,c,e){if(null==c)throw"textToInsert should not be null";c;if(0==c.length)return this;0>a?a=0:a>this.length&&(a=this.length);a=this.locate(a,!1);var d=b.h.S(this.i)[a.para],f=d.getParagraphStyle();if(0<d.getLength()){var g=a.paraOffset-1;0>g&&(g=0);d=d.getCharacterStylesAt(g)}else d=0==d.getLength()?d.getCharacterStylesAt(0):new b.a;null!=e&&(d=d.setAll(e));e=[];g=0;for(c=b.h.Ca.split(c);g<c.length;){var k=
c[g];++g;for(var h=[],l=0,m=k.length;l<m;)l++,h.push(d);e.push(new b.j(k,f,h))}return this.Ba(a,e,d)},Ba:function(a,c,e){if(0==c.length)return this;var d=b.h.S(this.i),f=d.slice(0,a.para),g=d[a.para];if(1==c.length)f.push(g.insertParagraph(a.paraOffset,c[0]));else{var k=g.split(a.paraOffset);g=b.j.ca([k[0],c[0]]);k=b.j.ca([c[c.length-1],k[1]]);f.push(g);2<c.length&&(f=f.concat(c.slice(1,c.length-1)));f.push(k)}a.para+1<d.length&&(f=f.concat(d.slice(a.para+1)));return b.h.sa(this.A,f,e)},deleteText:function(a,
c){0>a&&(a=0);0>c&&(c=0);c>this.length&&(c=this.length);if(a>=c)return this;a=this.locate(a,!1);c=this.locate(c,!1);var e=b.h.S(this.i),d=e.slice(0,a.para),f=e[a.para];var g=a.para==c.para?c.paraOffset:f.getLength();g=f.deleteText(a.paraOffset,g);f=f.getCharacterStylesAt(a.paraOffset);a.para!=c.para&&(a=e[c.para].deleteText(0,c.paraOffset),g=b.j.ca([g,a]));d.push(g);c.para+1<e.length&&(d=d.concat(e.slice(c.para+1)));return b.h.sa(this.A,d,f)},replaceText:function(a,b,e){return this.replaceTextWithStyle(a,
b,e,null)},replaceTextWithStyle:function(a,b,e,d){if(null==e)throw"text should not be null";e;0>a?a=0:a>this.length&&(a=this.length);0>b&&(b=0);b>this.length&&(b=this.length);a>=b&&(a=b);if(0==e.length&&a==b)return this;var c=this;a<b&&(c=c.deleteText(a,b));0<e.length&&(c=c.insertTextWithStyle(a,e,d));return c},getCharacterStylesAt:function(a){a=this.locate(a,!1);return this.i[a.para].getCharacterStylesAt(a.paraOffset)},applyStyles:function(a,c,e,d){if(null==e)throw"styles should not be null";e;0>
a&&(a=0);c>this.length&&(c=this.length+1);if(a>=c)return this;var f=this.locate(a,!1);c=this.locate(c,!1);var g=f.paraOffset;a=null;var k=b.h.S(this.i);f=f.para;for(var h=c.para+1;f<h;){var l=f++,m=k[l];if(l==c.para){var n=c.paraOffset;if(0==n)break}else n=m.getLength();g=m.applyStyles(g,n,e,d);g!=m&&(null==a&&(a=k.slice()),a[l]=g);g=0}return null==a?this:new b.h(this.A,a)},resetStyles:function(a,c){return this.applyStyles(a,c,new b.a,!0)},getAlignment:function(a,b){var c=null,d=0;for(a=this.getParagraphIndexesBetween(a,
b);d<a.length;)if(b=a[d],++d,b=this.i[b],null==c)c=b.getAlignment();else if(c!=b.getAlignment()){c=null;break}return c},setAlignment:function(a,b,e){return this.U(a,b,function(a){return a.setAlignment(e)})},getIndent:function(a,b){var c=-1,d=0;for(a=this.getParagraphIndexesBetween(a,b);d<a.length;)if(b=a[d],++d,b=this.i[b],-1==c)c=b.getIndent();else if(c!=b.getIndent()){c=-1;break}return c},changeIndent:function(a,b,e){return this.U(a,b,function(a){var b=a.getIndent()+e;return a.setIndent(b)})},setIndent:function(a,
b,e){return this.U(a,b,function(a){return a.setIndent(e)})},getListType:function(a,b){var c=null,d=0;for(a=this.getParagraphIndexesBetween(a,b);d<a.length;)if(b=a[d],++d,b=this.i[b],null==c)c=b.getListType();else if(c!=b.getListType()){c=null;break}return c},toggleBullet:function(a,c){var e=!1,d=b.f.g.NONE;return this.U(a,c,function(a){if(!e){switch(a.getListType()){case b.f.g.BULLET:d=b.f.g.NONE;break;case b.f.g.NONE:d=b.f.g.BULLET;break;default:throw"Unknown list type: "+l.u(d);}e=!0}return a.setListType(d)})},
setListType:function(a,b,e){return this.U(a,b,function(a){return a.setListType(e)})},U:function(a,c,e){a=this.getParagraphIndexesBetween(a,c);c=null;var d=b.h.S(this.i);if(0<a.length)for(var f=0;f<a.length;){var g=a[f];++f;var k=d[g],h=e(k);null!=h&&h!=k&&(null==c&&(c=d.slice()),c[g]=h)}return null==c?this:new b.h(this.A,c)},toString:function(){var a="Text dump:\n"+("length="+this.length+"\n");a+="wrapWidth="+this.A+"\n";return a=a+"paragraphs="+b.h.pa(1,"Para",this.i,function(a){for(var c=a.getLength()+
'/"'+a.getText()+'"\n',d=["alignment","indent","listType"],f=0;f<d.length;){var g=d[f];++f;c+=b.h.da+g+"="+l.u(t.ra(a.getParagraphStyle(),g))+"\n"}return c+=b.h.da+"styles="+b.h.pa(2,"style",a.getAllCharacterStyles())})},equals:function(a){if(a==this)return!0;if(!h.m.O(a,b.h))return!1;a=h.m.K(a,b.h);if(this.A!=a.A||this.length!=a.length||this.i.length!=a.i.length)return!1;for(var c=0,e=this.i.length;c<e;){var d=c++;if(!this.i[d].equals(a.i[d]))return!1}return!0},compareWithNaNCheck:function(a){if(a==
this)return!0;if(!h.m.O(a,b.h))return!1;a=h.m.K(a,b.h);if(this.A!=a.A||this.length!=a.length||this.i.length!=a.i.length)return!1;for(var c=0,e=this.i.length;c<e;){var d=c++;if(!this.i[d].compareWithNaNCheck(a.i[d]))return!1}return!0},v:b.h};b.LayoutModel=function(){};b.LayoutModel.__name__=!0;b.LayoutModel.createColor=function(a){return new b.J(a)};b.LayoutModel.createCharacterStyleContainer=function(a,c,e,d,f,g,h){return new b.a(a,c,e,d,f,g,h)};b.LayoutModel.createEmptyCharacterStyleContainer=function(){return new b.a};
b.LayoutModel.withColor=function(a){return b.a.withColor(a)};b.LayoutModel.withFontFamily=function(a){return b.a.withFontFamily(a)};b.LayoutModel.withFontSize=function(a){return b.a.withFontSize(a)};b.LayoutModel.withFontStyle=function(a){return b.a.withFontStyle(a)};b.LayoutModel.withFontWeight=function(a){return b.a.withFontWeight(a)};b.LayoutModel.withUnderline=function(a){return b.a.withUnderline(a)};b.LayoutModel.withUrl=function(a){return b.a.withUrl(a)};b.LayoutModel.createParagraphStyleContainer=
function(a,c,e){return new b.w(a,c,e)};b.LayoutModel.createParagraph=function(a,c,e){return new b.j(a,c,e)};b.LayoutModel.mergeParagraphs=function(a){return b.j.ca(a)};b.LayoutModel.createText=function(a,c){return new b.h(a,c)};b.LayoutModel.xa=function(){return[b.LayoutModel.createParagraph("",new b.w(b.b.c.LEFT,0,b.f.g.NONE),[])]};b.LayoutModel.createEmptyText=function(a){return new b.h(a,b.LayoutModel.xa())};b.LayoutModel.parseText=function(a,c){return b.LayoutModel.createEmptyText(a).insertText(0,
c)};b.f={};b.f.g=function(){};b.f.g.__name__=!0;b.f.g.va=function(a){return a};b.f.g.value=function(a){return a};b.f.g.za=function(a){var c=null==a?"null":""+a;if(!b.f.g.R.qa(c))throw"Invalid value for ListType: "+a;return b.f.g.R.get(c)};b.f.g.ua=function(a){return b.f.g.ga.get(null==a?"null":""+a)};b.f.g.valueOf=function(a){switch(a){case "NONE":return b.f.g.NONE;case "BULLET":return b.f.g.BULLET;default:throw"Invalid name for ListType: "+a;}};b.f.g.values=function(){return[b.f.g.NONE,b.f.g.BULLET]};
b.B=function(){};b.B.__name__=!0;b.B.I=function(a,b){return null==a?null==b:a.equals(b)};b.la=function(){};b.la.__name__=!0;b.la.Ha=function(a,b){null==b&&(b="parameter");if(null==a)throw""+b+" should not be null";return a};b.N=function(){};b.N.__name__=!0;b.N.toString=function(a,b){for(var c="",d=0;d<b.length;){var f=b[d];++d;c+=f+"="+l.u(t.ra(a,f))+"; "}return c};b.ea=function(){};b.ea.__name__=!0;b.ea.compareWithNaNCheck=function(a,b){return a==b||Math.isNaN(a)&&Math.isNaN(b)};b.aa=function(){this.LayoutModel=
this;this.ListType=b.f.g;this.Alignment=b.b.c};b.aa.__name__=!0;b.aa.prototype={createColor:function(a){return new b.J(a)},createCharacterStyleContainer:function(a,c,e,d,f,g,h){return new b.a(a,c,e,d,f,g,h)},createEmptyCharacterStyleContainer:function(){return new b.a},withColor:function(a){return b.a.withColor(a)},withFontFamily:function(a){return b.a.withFontFamily(a)},withFontSize:function(a){return b.a.withFontSize(a)},withFontStyle:function(a){return b.a.withFontStyle(a)},withFontWeight:function(a){return b.a.withFontWeight(a)},
withUnderline:function(a){return b.a.withUnderline(a)},withUrl:function(a){return b.a.withUrl(a)},createParagraphStyleContainer:function(a,c,e){return b.LayoutModel.createParagraphStyleContainer(a,c,e)},createParagraph:function(a,c,e){return b.LayoutModel.createParagraph(a,c,e)},mergeParagraphs:function(a){return b.LayoutModel.mergeParagraphs(a)},createText:function(a,c){return b.LayoutModel.createText(a,c)},createEmptyText:function(a){return b.LayoutModel.createEmptyText(a)},parseText:function(a,
c){return b.LayoutModel.parseText(a,c)},v:b.aa};b.$=function(){};b.$.__name__=!0;b.$.ya=function(){x=new b.aa;return!0};Math.NaN=Number.NaN;Math.NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY;Math.POSITIVE_INFINITY=Number.POSITIVE_INFINITY;Math.isFinite=function(a){return isFinite(a)};Math.isNaN=function(a){return isNaN(a)};String.prototype.v=String;String.__name__=!0;Array.__name__=!0;var C={__name__:["Int"]},D={__name__:["Dynamic"]},z=Number;z.__name__=["Float"];var A=Boolean;A.ma=["Bool"];var E={__name__:["Class"]},
F={};q.na=B.dependencies["prezi.text"];b.b.c.LEFT=0;b.b.c.CENTER=1;b.b.c.RIGHT=2;b.b.c.JUSTIFY=3;b.b.c.R=function(){var a=b.b.c;a[a.LEFT]="LEFT";a[a.CENTER]="CENTER";a[a.RIGHT]="RIGHT";a[a.JUSTIFY]="JUSTIFY";a=new n;a.set(l.u(b.b.c.LEFT),b.b.c.LEFT);a.set(l.u(b.b.c.CENTER),b.b.c.CENTER);a.set(l.u(b.b.c.RIGHT),b.b.c.RIGHT);a.set(l.u(b.b.c.JUSTIFY),b.b.c.JUSTIFY);return a}(this);b.b.c.ga=function(){var a=new n;a.set(l.u(b.b.c.LEFT),"LEFT");a.set(l.u(b.b.c.CENTER),"CENTER");a.set(l.u(b.b.c.RIGHT),"RIGHT");
a.set(l.u(b.b.c.JUSTIFY),"JUSTIFY");return a}(this);b.a.Da=-1;b.a.Ea=-1;b.a.Fa=-1;b.h.Ca=new u("\r\n|\r|\n","g");b.h.da=function(){var a=new v(3);a.C+=String.fromCharCode(160);a.C+=String.fromCharCode(160);a.C+=String.fromCharCode(160);a.C+=String.fromCharCode(160);return a.C}(this);b.f.g.NONE=0;b.f.g.BULLET=1;b.f.g.R=function(){var a=b.f.g;a[a.NONE]="NONE";a[a.BULLET]="BULLET";a=new n;a.set(l.u(b.f.g.NONE),b.f.g.NONE);a.set(l.u(b.f.g.BULLET),b.f.g.BULLET);return a}(this);b.f.g.ga=function(){var a=
new n;a.set(l.u(b.f.g.NONE),"NONE");a.set(l.u(b.f.g.BULLET),"BULLET");return a}(this);b.$.Ia=b.$.ya()})();return x});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi.text.model",["require","prezi.text"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi.text.model.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.text"));}else{this["prezi.text.model"]=__factory(this["prezi.text"]);}}).call(this);