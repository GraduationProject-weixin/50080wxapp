(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/storeup/add-or-update"],{"0ac4":function(e,t,r){},"4a55":function(e,t,r){"use strict";var n=r("0ac4"),a=r.n(n);a.a},"697d":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,n,a,i,u){try{var o=e[i](u),s=o.value}catch(c){return void r(c)}o.done?t(s):Promise.resolve(s).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function o(e){i(u,n,a,o,s,"next",e)}function s(e){i(u,n,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("b21c"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=u(n.default.mark((function t(r){var a,i,u,o;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:if(i=t.sent,this.user=i.data,this.ruleForm.userid=e.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!r.id){t.next=13;break}return this.ruleForm.id=r.id,t.next=11,this.$api.info("storeup",this.ruleForm.id);case 11:i=t.sent,this.ruleForm=i.data;case 13:if(!r.cross){t.next=40;break}u=e.getStorageSync("crossObj"),t.t0=n.default.keys(u);case 16:if((t.t1=t.t0()).done){t.next=40;break}if(o=t.t1.value,"userid"!=o){t.next=22;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,t.abrupt("continue",16);case 22:if("refid"!=o){t.next=26;break}return this.ruleForm.refid=u[o],this.ro.refid=!0,t.abrupt("continue",16);case 26:if("tablename"!=o){t.next=30;break}return this.ruleForm.tablename=u[o],this.ro.tablename=!0,t.abrupt("continue",16);case 30:if("name"!=o){t.next=34;break}return this.ruleForm.name=u[o],this.ro.name=!0,t.abrupt("continue",16);case 34:if("picture"!=o){t.next=38;break}return this.ruleForm.picture=u[o],this.ro.picture=!0,t.abrupt("continue",16);case 38:t.next=16;break;case 40:this.styleChange();case 41:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(this.ruleForm.name){e.next=6;break}return this.$utils.msg("收藏名称不能为空"),e.abrupt("return");case 6:if(this.ruleForm.picture){e.next=9;break}return this.$utils.msg("收藏图片不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("storeup",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("storeup",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,r("543d")["default"])},a08a:function(e,t,r){"use strict";r.r(t);var n=r("bb9a"),a=r("aedd");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("4a55");var u,o=r("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"e6873c18",null,!1,n["a"],u);t["default"]=s.exports},aedd:function(e,t,r){"use strict";r.r(t);var n=r("697d"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},bb9a:function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}))},e36a:function(e,t,r){"use strict";(function(e){r("42a8"),r("921b");n(r("66fd"));var t=n(r("a08a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])}},[["e36a","common/runtime","common/vendor"]]]);