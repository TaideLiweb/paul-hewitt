(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04abed1e"],{"5dae":function(t,e,i){"use strict";var a=i("b1dd"),c=i.n(a);c.a},8418:function(t,e,i){"use strict";var a=i("c04e"),c=i("9bf2"),r=i("5c6c");t.exports=function(t,e,i){var o=a(e);o in t?c.f(t,o,r(0,i)):t[o]=i}},"99af":function(t,e,i){"use strict";var a=i("23e7"),c=i("d039"),r=i("e8b5"),o=i("861d"),s=i("7b0b"),n=i("50c4"),d=i("8418"),l=i("65f0"),f=i("1dde"),u=i("b622"),h=i("2d00"),v=u("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",b=h>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=f("concat"),y=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},x=!b||!_;a({target:"Array",proto:!0,forced:x},{concat:function(t){var e,i,a,c,r,o=s(this),f=l(o,0),u=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],y(r)){if(c=n(r.length),u+c>p)throw TypeError(g);for(i=0;i<c;i++,u++)i in r&&d(f,u,r[i])}else{if(u>=p)throw TypeError(g);d(f,u++,r)}return f.length=u,f}})},a434:function(t,e,i){"use strict";var a=i("23e7"),c=i("23cb"),r=i("a691"),o=i("50c4"),s=i("7b0b"),n=i("65f0"),d=i("8418"),l=i("1dde"),f=i("ae40"),u=l("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u||!h},{splice:function(t,e){var i,a,l,f,u,h,_=s(this),y=o(_.length),x=c(t,y),m=arguments.length;if(0===m?i=a=0:1===m?(i=0,a=y-x):(i=m-2,a=p(v(r(e),0),y-x)),y+i-a>g)throw TypeError(b);for(l=n(_,a),f=0;f<a;f++)u=x+f,u in _&&d(l,f,_[u]);if(l.length=a,i<a){for(f=x;f<y-a;f++)u=f+a,h=f+i,u in _?_[h]=_[u]:delete _[h];for(f=y;f>y-a+i;f--)delete _[f-1]}else if(i>a)for(f=y-a;f>x;f--)u=f+a-1,h=f+i-1,u in _?_[h]=_[u]:delete _[h];for(f=0;f<i;f++)_[f+x]=arguments[f+2];return _.length=y-a+i,l}})},b1dd:function(t,e,i){},c975:function(t,e,i){"use strict";var a=i("23e7"),c=i("4d64").indexOf,r=i("a640"),o=i("ae40"),s=[].indexOf,n=!!s&&1/[1].indexOf(1,-0)<0,d=r("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:n||!d||!l},{indexOf:function(t){return n?s.apply(this,arguments)||0:c(this,t,arguments.length>1?arguments[1]:void 0)}})},c9bd:function(t,e,i){t.exports=i.p+"img/paul-hewitt-banner_1.e3036101.jpg"},e6dc:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("div",[t._m(0),i("div",{staticClass:"container section1"},[i("div",{staticClass:"row mt-4"},[i("div",{staticClass:"col-12 col-md-3 col-lg-2 product_category"},[i("h2",[t._v("商品分類")]),i("ul",{staticClass:"px-0"},t._l(t.category,(function(e){return i("li",{key:e,staticClass:"py-2",on:{click:function(i){return t.category_switch(e)}}},[i("a",[t._v(t._s(e))])])})),0)]),i("div",{staticClass:"col-12 col-md-9 col-gl-10 product_list"},[i("h2",[t._v("全部商品")]),i("div",{staticClass:"row mt-3"},t._l(t.products,(function(e){return i("div",{key:e.id,staticClass:"col-sm-6 col-lg-4 mb-3"},[i("div",{staticClass:"card"},[i("div",[i("img",{attrs:{src:e.imageUrl[0],width:"100%",alt:""}})]),i("div",[i("div",{staticClass:"py-2 px-3 border_t overflow-hidden"},[i("h3",{staticClass:"text_break"},[t._v(t._s(e.title))]),i("div",{staticClass:"my-2 d-flex align-items-center justify-content-between"},[i("div",{staticClass:"origin_price"},[i("del",[t._v(t._s(t._f("money")(e.origin_price)))])]),i("div",{staticClass:"text-center price"},[t._v(t._s(t._f("money")(e.price)))])])]),i("div",{staticClass:"d-flex border_t"},[i("router-link",{staticClass:"border_r buy px-2 py-2",attrs:{to:"/product/"+e.id}},[t._v("商品詳情")]),i("button",{staticClass:"btn px-2 favor",staticStyle:{flex:"1"},on:{click:function(i){return t.Atob(e.id)}}},[-1===t.favorite.indexOf(e.id)?i("i",{staticClass:"far fa-heart",staticStyle:{color:"red"}}):i("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])],1)])])])})),0)])])])])],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("img",{attrs:{src:i("c9bd"),width:"100%",alt:""}})])}],r=(i("99af"),i("4160"),i("c975"),i("a434"),i("159b"),{data:function(){return{favorite:JSON.parse(localStorage.getItem("favorite"))||[],products:[],category:["所有商品","手錶","手環","組合商品"],isLoading:!1}},methods:{Atob:function(t){var e=this.favorite.indexOf(t);-1===e?this.favorite.push(t):this.favorite.splice(e,1),localStorage.setItem("favorite",JSON.stringify(this.favorite)),this.$bus.$emit("pushfavorite",t)},category_switch:function(t){switch(this.isLoading=!0,t){case"所有商品":this.category_all();break;default:this.category_fliter(t);break}},category_all:function(){var t=this;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io/api/").concat("4e5317b1-b943-407e-81cc-73ea10b6482c","/ec/products")).then((function(e){t.products=e.data.data,t.$bus.$on("delfavorite",(function(e){var i=t.favorite.indexOf(e);-1!==i&&t.favorite.splice(i,1)})),t.isLoading=!1}))},category_fliter:function(t){var e=this;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io/api/").concat("4e5317b1-b943-407e-81cc-73ea10b6482c","/ec/products")).then((function(i){var a=i.data.data,c=[];a.forEach((function(i){i.category===t&&(c.push(i),e.products=c)})),e.isLoading=!1}))}},created:function(){this.category_all()}}),o=r,s=(i("5dae"),i("2877")),n=Object(s["a"])(o,a,c,!1,null,"67f80632",null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-04abed1e.a64c46aa.js.map