webpackJsonp([1],{"0umE":function(t,e){},"7Qyb":function(t,e){},BjtM:function(t,e){},G5iw:function(t,e){},Iu2W:function(t,e){},MfgP:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(t){n("G5iw")},null,null).exports,o=n("/ocq"),r=n("BO1k"),c=n.n(r),l=n("Dd8w"),u=n.n(l),d=n("NYxO"),h=n("mtWM"),v=n.n(h),f=n("cVr7"),m={name:"HeaderMenu",props:{list:Array},methods:{HandleMenuClose:function(){this.$emit("close")}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-wrap",on:{click:t.HandleMenuClose}},[n("div",{staticClass:"menu-left"},[t._m(0),t._v(" "),n("ul",{staticClass:"menu-data"},[n("router-link",{staticClass:"menu-bold menu-item border-bottom",attrs:{to:"/",tag:"li"}},[t._v("首页")]),t._v(" "),t._l(t.list,function(e){return n("router-link",{key:e.id,staticClass:"menu-item border-bottom iconfont",attrs:{to:"/Icon/"+e.id,tag:"li"}},[t._v("\n        "+t._s(e.name)+"\n      ")])})],2)]),t._v(" "),n("div",{staticClass:"menu-right"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-head border-bottom"},[e("div",{staticClass:"menu-left-name"},[this._v("gengjian1203")]),this._v(" "),e("div",{staticClass:"menu-left-text"},[this._v("You can either travel or read, but either your body or soul must be on the way.")])])}]};var _=n("VU/8")(m,p,!1,function(t){n("tLbl")},"data-v-a9c83376",null).exports,g={name:"HeaderSet",methods:{HandleSetClose:function(){this.$emit("close")},HandleBallClick:function(t){console.log(parseInt(t.target.id))}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"set-wrap",on:{click:t.HandleSetClose,touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"ball red",attrs:{id:"0"},on:{click:t.HandleBallClick}}),t._v(" "),n("div",{staticClass:"ball blue",attrs:{id:"1"},on:{click:t.HandleBallClick}}),t._v(" "),n("div",{staticClass:"ball green",attrs:{id:"2"},on:{click:t.HandleBallClick}}),t._v(" "),n("div",{staticClass:"ball yellow",attrs:{id:"3"},on:{click:t.HandleBallClick}}),t._v(" "),n("div",{staticClass:"ball purple",attrs:{id:"4"},on:{click:t.HandleBallClick}})])},staticRenderFns:[]};var w=n("VU/8")(g,C,!1,function(t){n("hvis")},"data-v-8652b2f4",null).exports,S={name:"CommonHeader",props:{title:String,list:Array},data:function(){return{bShowMenu:!1,bShowSet:!1}},components:{HeaderMenu:_,HeaderSet:w},methods:{HandleMenuClick:function(){this.bShowMenu=!0},HandleSetClick:function(){},HandleMenuClose:function(){this.bShowMenu=!1},HandleSetClose:function(){this.bShowSet=!1}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-wrap"},[n("div",{staticClass:"header-content"},[n("div",{staticClass:"header-content-text"},[t._v(t._s(this.title))]),t._v(" "),n("div",{staticClass:"icon iconfont icon-menu",on:{click:t.HandleMenuClick}},[t._v("")]),t._v(" "),n("div",{staticClass:"icon iconfont icon-set",on:{click:t.HandleSetClick}},[t._v("")])]),t._v(" "),n("transition",{attrs:{name:"menu"}},[n("header-menu",{directives:[{name:"show",rawName:"v-show",value:t.bShowMenu,expression:"bShowMenu"}],staticClass:"header-pop",attrs:{list:t.list},on:{close:t.HandleMenuClose}})],1),t._v(" "),n("transition",{attrs:{name:"set"}},[n("header-set",{directives:[{name:"show",rawName:"v-show",value:t.bShowSet,expression:"bShowSet"}],staticClass:"header-pop",on:{close:t.HandleSetClose}})],1)],1)},staticRenderFns:[]};var b=n("VU/8")(S,I,!1,function(t){n("mviL")},null,null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-wrap"},[e("router-link",{staticClass:"search-input",attrs:{tag:"div",to:"/Search/"}},[this._v("\n    请输入你要搜索的内容\n  ")])],1)},staticRenderFns:[]};var x=n("VU/8")({name:"HomeSearch"},k,!1,function(t){n("kNz6")},"data-v-59b28f50",null).exports,H={name:"HomeShown",props:{list:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},observer:!0,observeParents:!0,loop:!0,autoplay:{delay:2500,stopOnLastSlide:!1,disableOnInteraction:!1}}}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shown-wrap"},[e("swiper",{ref:"mySwiper",staticClass:"shown-content",attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("router-link",{attrs:{to:"/Paper/"+t.id}},[e("img",{staticClass:"shown-item",attrs:{src:t.imgUrl,alt:t.name}})])],1)}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var M=n("VU/8")(H,y,!1,function(t){n("Iu2W")},"data-v-4aa72a62",null).exports,P={name:"HomeIcon",props:{list:Array},data:function(){return{swiperOption:{}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-wrap"},[n("swiper",{ref:"mySwiper",staticClass:"icon-content",attrs:{options:t.swiperOption}},[n("swiper-slide",{staticClass:"icon-page"},t._l(t.list,function(e,s){return s<10?n("router-link",{key:e.id,staticClass:"icon-item",attrs:{tag:"div",to:"/Icon/"+e.id}},[n("div",{staticClass:"icon-item-circle"},[t._v(t._s(e.logo))]),t._v(" "),n("p",{staticClass:"icon-item-name"},[t._v(t._s(e.name))])]):t._e()}),1),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},staticRenderFns:[]};var L=n("VU/8")(P,j,!1,function(t){n("pwmb")},"data-v-463989cd",null).exports,$={name:"HomeList",props:{index:Number,title:String,list:Array},computed:{id:function(){return 2e4+this.index}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-wrap"},[n("div",{staticClass:"list-content"},[n("div",{staticClass:"list-title border-bottom"},[t._v("\n      "+t._s(this.title)+"\n    ")]),t._v(" "),n("ul",{staticClass:"list-data"},[t._l(t.list,function(e,s){return s<3?n("router-link",{key:e.id,staticClass:"list-item border-bottom",attrs:{tag:"li",to:"/Paper/"+e.id}},[n("p",{staticClass:"list-item-left"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"list-item-right"},[t._v(t._s(e.date))])]):t._e()}),t._v(" "),n("router-link",{staticClass:"list-item list-more",attrs:{tag:"div",to:"/Icon/"+t.id}},[t._v("\n        点击查看更多\n      ")])],2)])])},staticRenderFns:[]};var T=n("VU/8")($,F,!1,function(t){n("fAf7")},"data-v-a647bcae",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-wrap"},[e("p",{staticClass:"footer-text"},[this._v("made by "),e("span",[e("a",{attrs:{href:"https://github.com/gengjian1203"}},[this._v("gengjian1203")])])]),this._v(" "),e("p",{staticClass:"footer-text"},[this._v("E-mail:"),e("span",[e("a",{attrs:{href:"mailto:gengjian1203@foxmail.com"}},[this._v("gengjian1203@foxmail.com")])])])])}]};var R=n("VU/8")({name:"CommonFooter"},E,!1,function(t){n("PoP6")},"data-v-3da1b6b6",null).exports,U={name:"Home",data:function(){return{title:"耿健的个人博客",bShowTop:!1,timer:null,Shown:[],Icon:[],List:[]}},computed:u()({},Object(d.b)(["nDev"]),{reverseList:function(){var t=[];if(this.List){var e=!0,n=!1,s=void 0;try{for(var i,a=c()(this.List);!(e=(i=a.next()).done);e=!0){var o=i.value.reverse();t.push(o)}}catch(t){n=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw s}}}return t}}),components:{CommonHeader:b,HomeSearch:x,HomeShown:M,HomeIcon:L,HomeList:T,CommonFooter:R},methods:{refreshScroll:function(){var t=this;setTimeout(function(){t.scroll?(t.scroll.refresh(),t.scroll.scrollTo(0,0)):(t.scroll=new f.a(t.$refs.scroll,{click:!0,tap:!0,probeType:3}),t.scroll.on("scroll",function(e){t.timer||(t.timer=setTimeout(function(){e.y<-50?t.bShowTop=!0:t.bShowTop=!1,clearTimeout(t.timer),t.timer=null},200))}))},100)},HandleTopClick:function(){this.scroll.scrollTo(0,0,500)},getHomeInfo:function(){this.nDev?v.a.get("/api/home.json").then(this.getHomeInfoSucc):v.a.get("https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/home.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var n=e.data;this.Shown=n.Shown}this.refreshScroll()},getIconInfo:function(){this.nDev?v.a.get("/api/icon.json").then(this.getIconInfoSucc):v.a.get("https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/icon.json").then(this.getIconInfoSucc)},getIconInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var n=e.data;this.List=n.File,this.Icon=n.Icon}this.refreshScroll()}},mounted:function(){this.getHomeInfo(),this.getIconInfo()},activated:function(){this.refreshScroll()}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",on:{touchmove:function(t){t.preventDefault()}}},[t.Icon.length?n("common-header",{attrs:{title:t.title,list:t.Icon}}):t._e(),t._v(" "),n("div",{ref:"scroll",staticClass:"wrapper"},[n("div",{staticClass:"content"},[n("home-search",{attrs:{list:t.List}}),t._v(" "),n("home-shown",{attrs:{list:t.Shown}}),t._v(" "),n("home-icon",{attrs:{list:t.Icon}}),t._v(" "),t._l(t.reverseList,function(e,s){return s<11?n("home-list",{key:e.id,attrs:{index:s,title:t.Icon[s].name,list:e}}):t._e()}),t._v(" "),n("common-footer")],2)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.bShowTop,expression:"bShowTop"}],staticClass:"iconfont icon-top",on:{click:t.HandleTopClick}},[t._v("")])],1)},staticRenderFns:[]};var D=n("VU/8")(U,N,!1,function(t){n("Wfiv")},"data-v-7cfc07ee",null).exports,V={name:"IconNavigation",props:{title:String}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-wrap"},[e("router-link",{staticClass:"nav-text",attrs:{to:"/"}},[this._v("首页")]),this._v(" "),e("div",{staticClass:"nav-text"},[this._v(">")]),this._v(" "),e("div",{staticClass:"nav-text"},[this._v(this._s(this.title))])],1)},staticRenderFns:[]};var B=n("VU/8")(V,O,!1,function(t){n("MfgP")},"data-v-4a2fe021",null).exports,W={name:"IconList",props:{index:Number,list:Array},computed:{reverseList:function(){var t=[];this.list&&(t=this.list.reverse(),this.refreshScroll());return t}},components:{CommonFooter:R},methods:{refreshScroll:function(){var t=this;setTimeout(function(){t.scroll?(t.scroll.refresh(),t.scroll.scrollTo(0,0)):t.scroll=new f.a(t.$refs.scroll,{click:!0,tap:!0})},100)}},activated:function(){}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-wrap"},[n("div",{ref:"scroll",staticClass:"list-wrapper"},[n("ul",{staticClass:"list-content"},[t._l(t.reverseList,function(e){return n("router-link",{key:e.id,staticClass:"list-item border-top",attrs:{to:"/Paper/"+e.id,tag:"li"}},[n("p",{staticClass:"list-item-left"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"list-item-right"},[t._v(t._s(e.date))])])}),t._v(" "),n("li",{staticClass:"list-tail border-top"},[t._v("———— 你已经看到我的底线了 ————")])],2)]),t._v(" "),n("common-footer",{staticClass:"list-footer"})],1)},staticRenderFns:[]};var Q=n("VU/8")(W,A,!1,function(t){n("uLfP")},"data-v-2148bc28",null).exports,z={name:"Icon",props:{id:String},data:function(){return{arrMenu:[],arrList:[]}},computed:u()({},Object(d.b)(["nDev"]),{nIndex:function(){return parseInt(this.id)%1e4}}),components:{CommonHeader:b,IconNavigation:B,IconList:Q},methods:{getIconInfo:function(){this.nDev?v.a.get("/api/icon.json").then(this.getIconInfoSucc):v.a.get("https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/icon.json").then(this.getIconInfoSucc)},getIconInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var n=e.data;this.arrMenu=n.Icon,this.arrList=n.File}}},mounted:function(){this.getIconInfo()}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon",on:{touchmove:function(t){t.preventDefault()}}},[t.arrMenu.length?n("common-header",{attrs:{title:t.arrMenu[t.nIndex].name,list:t.arrMenu}}):t._e(),t._v(" "),t.arrMenu.length?n("icon-navigation",{attrs:{title:t.arrMenu[t.nIndex].name}}):t._e(),t._v(" "),t.arrList.length?n("icon-list",{attrs:{index:t.nIndex,list:t.arrList[t.nIndex]}}):t._e()],1)},staticRenderFns:[]};var G=n("VU/8")(z,q,!1,function(t){n("onjy")},"data-v-0d03ea30",null).exports,K={name:"PaperNavigation",props:{nIcon:Number,icon:String,title:String},computed:{nPath:function(){return"/Icon/2000"+this.nIcon}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-wrap"},[n("router-link",{staticClass:"nav-text",attrs:{to:"/"}},[t._v("首页")]),t._v(" "),n("div",{staticClass:"nav-text"},[t._v(">")]),t._v(" "),n("router-link",{staticClass:"nav-text",attrs:{to:t.nPath}},[t._v(t._s(t.icon))]),t._v(" "),n("div",{staticClass:"nav-text"},[t._v(">")]),t._v(" "),n("div",{staticClass:"nav-text"},[t._v(t._s(t.title))])],1)},staticRenderFns:[]};var J=n("VU/8")(K,Y,!1,function(t){n("iHdc")},"data-v-33931dd0",null).exports,Z=n("EFqf"),X=n.n(Z),tt=n("OvQW"),et=n.n(tt),nt={name:"PaperWord",props:{strUrl:String},data:function(){return{source:""}},components:{CommonFooter:R},methods:{refreshScroll:function(){var t=this;setTimeout(function(){t.scroll?(t.scroll.refresh(),t.scroll.scrollTo(0,0)):t.scroll=new f.a(t.$refs.scroll,{click:!0,tap:!0})},100)},getWordInfo:function(){v.a.get(this.strUrl).then(this.getWordInfoSucc)},getWordInfoSucc:function(t){var e=this;this.source=et.a.sanitize(X()(t.data||"")),setTimeout(function(){e.refreshScroll()},500)}},mounted:function(){var t=this;this.$nextTick(function(){t.getWordInfo()})},activated:function(){var t=this;this.$nextTick(function(){t.getWordInfo()})}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"word-wrap"},[e("div",[e("div",{ref:"scroll",staticClass:"word-wrapper"},[e("mavon-editor",{staticClass:"word-content",attrs:{subfield:!1,defaultOpen:"preview",toolbarsFlag:!1,boxShadow:!1},domProps:{innerHTML:this._s(this.source)}})],1)]),this._v(" "),e("common-footer",{staticClass:"word-footer"})],1)},staticRenderFns:[]};var it=n("VU/8")(nt,st,!1,function(t){n("7Qyb")},"data-v-7db13cbc",null).exports,at={name:"Paper",props:{id:String},data:function(){return{Icon:[],List:[]}},computed:u()({},Object(d.b)(["nDev"]),{nIcon:function(){return Math.floor(parseInt(this.id)/1e4)},nPaper:function(){return Math.floor(parseInt(this.id)%1e4)},bIf:function(){return this.List.length&&this.Icon.length}}),components:{CommonHeader:b,PaperNavigation:J,PaperWord:it},methods:{getPaperInfo:function(){this.nDev?v.a.get("/api/paper.json").then(this.getPaperInfoSucc):v.a.get("https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/paper.json").then(this.getPaperInfoSucc)},getPaperInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var n=e.data;this.Icon=n.Icon,this.List=n.File}}},mounted:function(){this.getPaperInfo()}},ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paper",on:{touchmove:function(t){t.preventDefault()}}},[t.bIf?n("common-header",{attrs:{title:t.List[t.nIcon][t.nPaper].name,list:t.Icon}}):t._e(),t._v(" "),t.bIf?n("paper-navigation",{attrs:{nIcon:t.nIcon,icon:t.Icon[t.nIcon].name,title:t.List[t.nIcon][t.nPaper].name}}):t._e(),t._v(" "),t.bIf?n("paper-word",{attrs:{strUrl:t.List[t.nIcon][t.nPaper].path}}):t._e()],1)},staticRenderFns:[]};var rt=n("VU/8")(at,ot,!1,function(t){n("vKDi")},"data-v-4c329acc",null).exports,ct={name:"Search",data:function(){return{strSearch:"",timer:null,list:[],listResult:[]}},computed:u()({},Object(d.b)(["nDev"]),{bShowNone:function(){return!this.listResult.length&&this.strSearch}}),watch:{strSearch:function(t){var e=this;this.listResult.length=0,t&&(clearTimeout(this.timer),this.timer=setTimeout(function(){e.list.forEach(function(n,s){n.forEach(function(n,s){if(n.name.indexOf(t)>-1){var i={id:n.id,name:n.name,date:n.date};e.listResult.push(i),e.refreshScroll()}})})},100),this.timer=null)}},methods:{refreshScroll:function(){var t=this;setTimeout(function(){t.scroll?(t.scroll.refresh(),t.scroll.scrollTo(0,0)):t.scroll=new f.a(t.$refs.scroll,{click:!0,tap:!0})},100)},getSearchInfo:function(){this.nDev?v.a.get("/api/icon.json").then(this.getSearchInfoSucc):v.a.get("https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/icon.json").then(this.getSearchInfoSucc)},getSearchInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var n=e.data;this.list=n.File}}},mounted:function(){this.getSearchInfo()},activated:function(){this.refreshScroll()}},lt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search",on:{touchmove:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.strSearch,expression:"strSearch"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入你要搜索的内容"},domProps:{value:t.strSearch},on:{input:function(e){e.target.composing||(t.strSearch=e.target.value)}}}),t._v(" "),n("router-link",{staticClass:"search-canncel",attrs:{to:"/"}},[t._v("取消")]),t._v(" "),n("div",{ref:"scroll",staticClass:"search-wrapper"},[n("ul",{staticClass:"search-content"},[t._l(t.listResult,function(e,s){return n("router-link",{key:s,staticClass:"search-item border-bottom",attrs:{tag:"li",to:"/Paper/"+e.id}},[n("div",{staticClass:"search-item-left"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"search-item-right"},[t._v(t._s(e.date))])])}),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.bShowNone,expression:"bShowNone"}],staticClass:"search-item"},[t._v("未找到相关内容")])],2)])],1)},staticRenderFns:[]};var ut=n("VU/8")(ct,lt,!1,function(t){n("0umE")},"data-v-5d0efe81",null).exports;s.a.use(o.a);var dt=new o.a({routes:[{path:"/",name:"Home",component:D},{path:"/Icon/:id",name:"Icon",component:G,props:!0},{path:"/Paper/:id",name:"Paper",component:rt,props:!0},{path:"/Search/",name:"Search",component:ut}],scrollBehavior:function(t,e,n){return{x:0,y:0}}}),ht=n("v5o6"),vt=n.n(ht),ft=(n("m0iu"),n("cjdf"),n("BjtM"),n("7QTg")),mt=n.n(ft),pt=(n("v2ns"),n("OS1Z")),_t=n.n(pt);n("pw1w"),n("j1ja");s.a.use(d.a);var gt=new d.a.Store({state:{nDev:0},actions:{},mutations:{}});s.a.config.productionTip=!1,vt.a.attach(document.body),s.a.use(mt.a),s.a.use(_t.a),new s.a({el:"#app",router:dt,store:gt,components:{App:a},template:"<App/>"})},PoP6:function(t,e){},Wfiv:function(t,e){},cjdf:function(t,e){},fAf7:function(t,e){},hvis:function(t,e){},iHdc:function(t,e){},kNz6:function(t,e){},m0iu:function(t,e){},mviL:function(t,e){},onjy:function(t,e){},pw1w:function(t,e){},pwmb:function(t,e){},tLbl:function(t,e){},uLfP:function(t,e){},v2ns:function(t,e){},vKDi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.318884b3940090b80ed5.js.map