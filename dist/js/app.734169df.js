(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand mr-auto"},[t._v("Movieticket")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"FoodList"}}},[t._v("รายการภาพยนต์")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"CreateFood"}}},[t._v("เพิ่มรายการภาพยนต์")])],1)])])]),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navContent","aria-controls":"navContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s=a("2f62");n["a"].use(s["a"]);var l=new s["a"].Store({state:{foods:[]},mutations:{addFood:function(t,e){var a=e.payload;t.foods.push(a)}},actions:{addFood:function(t,e){var a=t.commit;a("addFood",{payload:e})}},getters:{foods:function(t){return t.foods}}}),c={store:l},u=c,d=a("2877"),v=Object(d["a"])(u,o,i,!1,null,null,null),p=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container fluid"},[a("br"),a("div",[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-hover"},[t._m(1),a("tbody",t._l(t.$store.getters.foods,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.price))]),a("td")])})),0)])])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h2",[t._v("รายการภาพยนต์")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{width:"8.33%"}},[t._v("ลำดับ")]),a("th",{staticStyle:{width:"50%"}},[t._v("รายการภาพยนต์")]),a("th",{staticStyle:{width:"10%%"}},[t._v("ราคา")]),a("th",{staticStyle:{width:"31.66%"}},[t._v("การดำเนินการ")])])])}],b={},h=Object(d["a"])(b,f,m,!1,null,null,null),_=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container fluid"},[a("br"),a("div",[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addFood()}}},[a("div",{staticClass:"form-group"},[a("label",[t._v("ชื่อภาพยนต์")]),a("div",{staticStyle:{padding:"20px 0"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.name=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Jumanji:จูแมนจี้เกมดูดโลกมหัศจรรย์"}},[t._v("Jumanji:จูแมนจี้เกมดูดโลกมหัศจรรย์")]),a("option",{attrs:{value:"Mulan (2020) มู่หลาน"}},[t._v("Mulan (2020) มู่หลาน")]),a("option",{attrs:{value:"Train to Busan 2 (2020) ฝ่านรกซอมบี้คลั่ง"}},[t._v(" Train to Busan 2 (2020) ฝ่านรกซอมบี้คลั่ง")]),a("option",{attrs:{value:"ฮาวทูทิ้ง..ทิ้งอย่างไรไม่ให้เหลือเธอ"}},[t._v("ฮาวทูทิ้ง..ทิ้งอย่างไรไม่ให้เหลือเธอ")])])])]),a("div",{staticClass:"form-group"},[a("label",[t._v("ราคาตั๋วหนัง")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"ระบุราคาตั๋ว"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("เพิ่มรายการภาพยนต์")])])])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h2",[t._v("เลือกภาพยนต์")])])}],C=(a("b0c0"),{data:function(){return{name:"",price:0}},methods:{addFood:function(){if(this.name){var t={name:this.name,price:this.price};this.$store.dispatch("addFood",t)}}}}),w=C,j=Object(d["a"])(w,g,y,!1,null,null,null),x=j.exports;n["a"].use(r["a"]);var O=[{name:"FoodList",path:"/food_list",component:_},{name:"CreateFood",path:"/create_food",component:x}],S=new r["a"]({mode:"history",routes:O});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(p)},router:S}).$mount("#app")}});
//# sourceMappingURL=app.734169df.js.map