(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],g=0,h=[];g<c.length;g++)n=c[g],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"app-title"},[a("span",[t._v("MIR")]),a("span",{staticClass:"mflip"},[t._v("R")]),a("span",{staticClass:"mflip"},[t._v("I")]),a("span",{staticClass:"mflip"},[t._v("M")]),t._v(" "),a("span",{staticClass:"mflip"},[t._v("R")]),a("span",{staticClass:"mflip"},[t._v("O")]),a("span",{staticClass:"mflip"},[t._v("R")]),a("span",[t._v("ROR")])])]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-help-circle-outline")])],1),a("a",{staticClass:"v-btn v-btn--icon v-btn--round theme--dark v-size--default",attrs:{href:"https://github.com/mirrim-rorror/mirrim-rorror"}},[a("v-icon",[t._v("mdi-github")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-cog")])],1)],1),a("v-main",[a("v-container",[a("v-row",[t._v(" 1. Copy image data into clipboard or press Print Screen "),a("br"),t._v(" 2. Press Ctrl+V (page/iframe must be focused): ")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{ref:"srcView",staticClass:"viewport"},[a("canvas",{ref:"srcImgCanvas",staticStyle:{border:"1px solid grey"},attrs:{id:"srcImgCanvas",height:"300",width:"300"}})]),a("div",[a("trim-field",{model:{value:t.srcImg.trim,callback:function(e){t.$set(t.srcImg,"trim",e)},expression:"srcImg.trim"}})],1),a("div",{staticStyle:{"min-width":"300px"}},[a("v-slider",{attrs:{max:t.srcImgMax,min:t.srcImgMin,label:"Shift"},on:{input:t.update},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},on:{input:t.update},model:{value:t.srcImg.translate,callback:function(e){t.$set(t.srcImg,"translate",e)},expression:"srcImg.translate"}})]},proxy:!0}]),model:{value:t.srcImg.translate,callback:function(e){t.$set(t.srcImg,"translate",e)},expression:"srcImg.translate"}}),a("v-slider",{attrs:{label:"Rotation",max:"180",min:"-180"},on:{input:t.update},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},on:{input:t.update},model:{value:t.srcImg.rotation,callback:function(e){t.$set(t.srcImg,"rotation",e)},expression:"srcImg.rotation"}})]},proxy:!0}]),model:{value:t.srcImg.rotation,callback:function(e){t.$set(t.srcImg,"rotation",e)},expression:"srcImg.rotation"}}),a("v-color-picker",{on:{input:t.update},model:{value:t.srcImg.bgColor,callback:function(e){t.$set(t.srcImg,"bgColor",e)},expression:"srcImg.bgColor"}})],1)]),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("canvas",{ref:"destImgCanvas",staticStyle:{border:"1px solid grey"},attrs:{id:"destImgCanvas",height:"300",width:"300"}}),a("v-row",[a("v-col",[a("v-text-field",{attrs:{hint:t.getSaveFilename(),label:"Filename","persistent-hint":""},model:{value:t.saveFilenameTemplate,callback:function(e){t.saveFilenameTemplate=e},expression:"saveFilenameTemplate"}})],1),a("v-col",[a("v-select",{attrs:{items:t.saveFileTypes,"item-text":"label","item-value":"value","return-object":""},model:{value:t.saveFileType,callback:function(e){t.saveFileType=e},expression:"saveFileType"}}),t.saveFileType.hasQuality?a("v-text-field",{attrs:{label:"Quality",max:"100",min:"1",type:"number"},model:{value:t.saveCompression,callback:function(e){t.saveCompression=e},expression:"saveCompression"}}):t._e()],1),a("v-col",[a("v-btn",{attrs:{icon:""},on:{click:t.doSave}},[a("v-icon",[t._v("mdi-content-save")])],1)],1)],1)],1)],1),a("v-row",[a("v-col")],1)],1)],1),a("v-overlay",{attrs:{absolute:"",value:t.isFileDragging}},[a("v-row",[a("v-col",[a("v-icon",[t._v("mdi-download")]),t._v(" Drop file to load ")],1)],1)],1)],1)},r=[],n=a("2909"),c=(a("d3b7"),a("25f0"),a("a1f0"),a("ac1f"),a("5319"),a("b0c0"),a("3ca3"),a("ddb0"),a("2b3d"),a("df7c")),o={name:"App",components:{},computed:{srcImgCanvas:function(){return this.$refs.srcImgCanvas},srcImgCtx:function(){return this.srcImgCanvas.getContext("2d")},destImgCanvas:function(){return this.$refs.destImgCanvas},destImgCtx:function(){return this.destImgCanvas.getContext("2d")},srcImgMin:function(){return this.srcImg?this.srcImg.width/-2:-1},srcImgMax:function(){return this.srcImg?this.srcImg.width/2:1}},data:function(){var t=this,e={dragCounter:0,saveUrl:"",saveFilenameTemplate:"{{timestamp}}",saveFileType:"image/png",saveCompression:75,isDragging:!1,isFileDragging:!1,srcImg:{trim:{left:0,right:0,top:0,bottom:0},origFileName:"",url:"",width:0,height:0,translate:0,rotation:0,bgColor:"white"},destImg:null,filenameMacros:{timestamp:function(){return Date.now().toString()},fileName:function(){return t.srcImg.origFileName}},saveFileTypes:[{label:"PNG",value:"image/png",ext:"png",hasQuality:!1},{label:"JPEG",value:"image/jpeg",ext:"jpg",hasQuality:!0}]};return e.saveFileType=e.saveFileTypes[0],e},watch:{},methods:{getSaveFilename:function(){for(var t=this.saveFilenameTemplate,e=Object(n["a"])(t.matchAll(/{{(\w*)}}/g)),a=0;a<e.length;a++){var s=e[a];s[1]in this.filenameMacros&&(t=t.replace(s[0],this.filenameMacros[s[1]](t)))}return t+"."+this.saveFileType.ext},doSave:function(){this.saveUrl=this.destImgCanvas.toDataURL(this.saveFileType.value,this.saveCompression/100);var t=document.createElement("a");t.download=this.getSaveFilename(),t.href="data:"+this.saveUrl,t.click()},createBitmap:function(t){var e=this;createImageBitmap(t).then((function(t){e.srcImg.bitmap=t,e.srcImg.width=t.width,e.srcImg.height=t.height,e.srcImg.rotation=0,e.srcImg.translate=0,e.update()})).catch((function(t){console.log(t)}))},loadUrl:function(t){var e=this,a=new Image;a.onload=function(){e.createBitmap(a)},a.src=t},handlePaste:function(t){var e=this;if(t.clipboardData){var a=t.clipboardData.items;if(!a)return;for(var s=0;s<a.length;s++){var i=a[s];if(-1!==i.type.indexOf("image")){var r=a[s].getAsFile();this.createBitmap(r),this.srcImg.origFileName=c.basename(r.name,c.extname(r.name)),t.preventDefault()}else-1!==i.type.indexOf("plain")&&i.getAsString((function(a){if(-1!==a.indexOf("http")){e.loadUrl(a);var s=new URL(a);e.srcImg.origFileName=c.basename(s.pathname,c.extname(s.pathname)),t.preventDefault()}}))}}},drawSourceImage:function(){var t=this.srcImgCtx;t.save(),t.translate(this.srcImg.width/2,this.srcImg.height/2),t.rotate(this.srcImg.rotation*Math.PI/180),t.drawImage(this.srcImg.bitmap,this.srcImg.translate<0?-this.srcImg.translate:0,0,this.srcImg.width,this.srcImg.height,-this.srcImg.width/2,-this.srcImg.height/2,this.srcImg.width,this.srcImg.height),t.restore()},drawDestImage:function(){var t=this.destImgCtx,e=this.destImgCanvas;e.width=2*this.srcImgCanvas.width,e.height=this.srcImgCanvas.height,t.drawImage(this.srcImgCanvas,0,0,this.srcImg.width/2,this.srcImg.height,0,0,this.srcImg.width/2,this.srcImg.height),t.drawImage(this.srcImgCanvas,this.srcImg.width/2,0,this.srcImg.width/2,this.srcImg.height,1.5*this.srcImg.width,0,this.srcImg.width/2,this.srcImg.height),t.save(),t.translate(this.srcImg.width,0),t.scale(-1,1),t.drawImage(this.srcImgCanvas,0,0,this.srcImg.width/2,this.srcImg.height,0,0,this.srcImg.width/2,this.srcImg.height),t.drawImage(this.srcImgCanvas,this.srcImg.width/2,0,this.srcImg.width/2,this.srcImg.height,-this.srcImg.width/2,0,this.srcImg.width/2,this.srcImg.height),t.restore()},drawSourceOverlay:function(){var t=this.srcImgCtx;t.strokeStyle="green",t.lineWidth=5,t.beginPath(),t.setLineDash([10,10]),t.moveTo(this.srcImg.width/2,0),t.lineTo(this.srcImg.width/2,this.srcImg.height),t.stroke()},update:function(){if(this.srcImg.bitmap){this.srcImg.width=this.srcImg.bitmap.width-Math.abs(this.srcImg.translate),this.srcImg.height=this.srcImg.bitmap.height;var t=this.srcImgCanvas,e=this.srcImgCtx,a=this.srcImg.width,s=this.srcImg.height;t.width=a,t.height=s,e.fillStyle=this.srcImg.bgColor,e.fillRect(0,0,a,s),this.drawSourceImage(),this.drawSourceOverlay(),this.drawDestImage()}}},mounted:function(){var t=this;document.addEventListener("paste",(function(e){t.handlePaste(e)}),!1),document.addEventListener("dragenter",(function(e){t.dragCounter++,t.isFileDragging=!0,e.preventDefault(),e.stopPropagation()})),document.addEventListener("dragleave",(function(e){t.dragCounter--,0===t.dragCounter&&(t.isFileDragging=!1),e.preventDefault(),e.stopPropagation()})),document.addEventListener("dragover",(function(e){t.isFileDragging=!0,e.preventDefault(),e.stopPropagation()})),document.addEventListener("drop",(function(e){var a=e.dataTransfer.files[0];t.createBitmap(a),t.srcImg.origFileName=c.basename(a.name,c.extname(a.name)),t.update(),t.isFileDragging=!1,e.preventDefault(),e.stopPropagation()})),this.$refs.srcImgCanvas.addEventListener("mousedown",(function(){t.isDragging=!0})),this.$refs.srcImgCanvas.addEventListener("mouseup",(function(){t.isDragging=!1})),this.$refs.srcImgCanvas.addEventListener("mouseleave",(function(){t.isDragging=!1})),this.$refs.srcImgCanvas.addEventListener("mousemove",(function(e){t.isDragging&&(e.movementX>0?(t.srcImg.translate+=1,t.srcImg.translate>t.srcImg.width/2&&(t.srcImg.translate=t.srcImg.width/2),t.update()):e.movementX<0&&(t.srcImg.translate-=1,t.srcImg.translate<-t.srcImg.width/2&&(t.srcImg.translate=-t.srcImg.width/2),t.update()))})),this.srcImg.url="https://thispersondoesnotexist.com/image",this.loadUrl(this.srcImg.url)}},l=o,m=(a("5c0b"),a("2877")),g=a("6544"),h=a.n(g),d=a("7496"),v=a("40dc"),u=a("8336"),p=a("62ad"),f=a("03a4"),I=a("a523"),b=a("132d"),w=a("f6c4"),C=a("a797"),y=a("0fd9"),x=a("b974"),F=a("ba0d"),S=a("2fa4"),_=a("8654"),D=Object(m["a"])(l,i,r,!1,null,null,null),T=D.exports;h()(D,{VApp:d["a"],VAppBar:v["a"],VBtn:u["a"],VCol:p["a"],VColorPicker:f["a"],VContainer:I["a"],VIcon:b["a"],VMain:w["a"],VOverlay:C["a"],VRow:y["a"],VSelect:x["a"],VSlider:F["a"],VSpacer:S["a"],VTextField:_["a"]});var k=a("f309");s["a"].use(k["a"]);var O=new k["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:O,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.f5bc3a00.js.map