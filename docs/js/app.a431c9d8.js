(function(t){function e(e){for(var a,i,r=e[0],s=e[1],c=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},u=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("p",{staticClass:"oshietekun"},[t._v("電子レンジ加熱時間おしえて君")]),n("div",{attrs:{id:"input_item"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"input_item",attrs:{id:"watt"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?n:n[0]},function(e){return t.calculate()}]}},t._l(t.options,(function(e){return n("option",{key:e.text},[t._v(t._s(e.text))])})),0),n("span",{staticClass:"unit"},[t._v("W で")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.defaultMinute,expression:"defaultMinute"}],staticClass:"input_item",attrs:{type:"tel",id:"minute",onfocus:"this.select();",maxlength:"2",onkeyup:"this.value=this.value.replace(/[^0-9]+/,'')"},domProps:{value:t.defaultMinute},on:{change:function(e){return t.calculate()},input:function(e){e.target.composing||(t.defaultMinute=e.target.value)}}}),n("span",{staticClass:"unit"},[t._v("分")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.defaultSecond,expression:"defaultSecond"}],staticClass:"input_item",attrs:{type:"tel",id:"second",onfocus:"this.select();",maxlength:"2",onkeyup:"this.value=this.value.replace(/[^0-9]+/,'')"},domProps:{value:t.defaultSecond},on:{change:function(e){return t.calculate()},input:function(e){e.target.composing||(t.defaultSecond=e.target.value)}}}),n("span",{staticClass:"unit"},[t._v("秒")])]),n("br"),n("div",{staticClass:"output"},[n("table",{attrs:{id:"table",align:"center"}},[n("tbody",t._l(t.items,(function(e){return n("tr",{key:e.watt},[n("td",[t._v(" "+t._s(e.watt)+" "),n("span",{staticClass:"unit"},[t._v("W で")])]),n("td",[t._v(" "+t._s(e.minute)+" "),n("span",{staticClass:"unit"},[t._v("分")])]),n("td",[t._v(" "+t._s(e.second)+" "),n("span",{staticClass:"unit"},[t._v("秒")])])])})),0)])]),n("footer",[n("p",[t._v("ネメシスちゃん a.k.a プログラミングをする点P")]),n("a",{attrs:{href:"https://twitter.com/nemesispointp",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),n("a",{attrs:{href:"https://github.com/NemesisChan/microwave",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])])},u=[],i=(n("4160"),n("159b"),{data:function(){return{selected:500,options:[{text:"100",value:100},{text:"200",value:200},{text:"500",value:500},{text:"600",value:600},{text:"700",value:700},{text:"800",value:800},{text:"900",value:900},{text:"1000",value:1e3},{text:"1200",value:1200},{text:"1500",value:1500}],items:[{watt:100,minute:15,second:0},{watt:200,minute:7,second:30},{watt:500,minute:3,second:0},{watt:600,minute:2,second:30},{watt:700,minute:2,second:8},{watt:800,minute:1,second:52},{watt:900,minute:1,second:40},{watt:1e3,minute:1,second:30},{watt:1200,minute:1,second:15},{watt:1500,minute:1,second:0}],defaultMinute:3,defaultSecond:0}},methods:{calculate:function(){var t=document.getElementById("watt").value,e=parseInt(document.getElementById("minute").value),n=parseInt(document.getElementById("second").value),a=t*(60*e+n),o=this.items;o.forEach((function(t){t.minute=Math.floor(a/t.watt/60),t.second=Math.floor(a/t.watt%60)}))}}}),r=i,s=(n("034f"),n("2877")),c=Object(s["a"])(r,o,u,!1,null,null,null),l=c.exports,d=n("ecee"),p=n("f2d1"),f=n("ad3d");d["c"].add(p["a"]),a["a"].component("font-awesome-icon",f["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a431c9d8.js.map