(function(e){function n(n){for(var a,o,s=n[0],c=n[1],l=n[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,o=1;o<t.length;o++){var s=t[o];0!==i[s]&&(a=!1)}a&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{"chunk-18abf34a":"34dd8333","chunk-29460b1d":"0ad68c23","chunk-2d0c031e":"2a9f5bae","chunk-46763a27":"85810dc0","chunk-6f26cf2c":"1e27acfb","chunk-6f971c89":"c6334845","chunk-7a8dacf9":"96eab084","chunk-7cc2f876":"8dfb34b3","chunk-7ffbae07":"4bb2ba3e","chunk-c30fa626":"96693622","chunk-cde99bde":"6be8ea5c",comple:"6e546e3f",creditos:"d296f4b5",glosario:"8104595a",intro:"1bb05ed9",referencias:"df88d91e",tema1:"59eb98f6"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-18abf34a":1,"chunk-29460b1d":1,"chunk-6f26cf2c":1,"chunk-7a8dacf9":1,"chunk-7cc2f876":1,"chunk-7ffbae07":1,"chunk-c30fa626":1,"chunk-cde99bde":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var a="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1"}[e]||e)+"."+{"chunk-18abf34a":"fbc6547e","chunk-29460b1d":"4fc86c55","chunk-2d0c031e":"31d6cfe0","chunk-46763a27":"31d6cfe0","chunk-6f26cf2c":"bb1f6de8","chunk-6f971c89":"31d6cfe0","chunk-7a8dacf9":"c0b9870d","chunk-7cc2f876":"c0b9870d","chunk-7ffbae07":"c0b9870d","chunk-c30fa626":"c10fd536","chunk-cde99bde":"c0b9870d",comple:"d13180e4",creditos:"d2daddf6",glosario:"599d8108",intro:"175570c5",referencias:"b298670c",tema1:"d2daddf6"}[e]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var a=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],m.parentNode.removeChild(m),t(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=i[e]=[n,t]}));n.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(m);var t=i[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,t[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var m=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0462":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[e._m(0)])},o=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"row align-items-center justify-content-center"},[a("div",{staticClass:"col-auto mb-2 mb-sm-0"},[a("img",{attrs:{src:t("52e5")}})]),a("div",{staticClass:"col-12 col-sm"},[a("p",{staticClass:"mb-0 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")])])])}],i={name:"Footer",props:{allRound:{type:Boolean,default:!1}}},r=i,s=(t("04b1"),t("2877")),c=Object(s["a"])(r,a,o,!1,null,"350fb762",null);n["a"]=c.exports},"04b1":function(e,n,t){"use strict";t("36e0")},"0ad3":function(e,n,t){"use strict";t("eb3a")},"25aa":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"creditos"},[e._m(0),t("div",{staticClass:"mb-4"},[t("p",[t("span",{staticClass:"text-bold"},[e._v(e._s(e.creditosData.liderEquipo.nombre))]),t("br"),e._v(e._s(e.creditosData.liderEquipo.cargo))])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"creditos__titulo mb-3"},[e._v("CONTENIDO INSTRUCCIONAL")]),t("div",{staticClass:"row"},e._l(e.contenidoInstruccional,(function(n,a){return t("div",{key:"inst-"+a,staticClass:"col-lg-6"},e._l(n,(function(e,n){return t("CreditosItem",{key:"inst-col-"+a+n,attrs:{item:e}})})),1)})),0)]),t("div",{staticClass:"col-lg-4"},[t("p",{staticClass:"creditos__titulo mb-3"},[e._v("DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES ")]),e._l(e.creditosData.desarrolloProducto,(function(e,n){return t("CreditosItem",{key:"desa-"+n,attrs:{item:e}})})),t("p",{staticClass:"creditos__titulo mb-3"},[e._v("GESTORES DE REPOSITORIO")]),e._l(e.creditosData.gestoresRepositorio,(function(e,n){return t("CreditosItem",{key:"repo-"+n,attrs:{item:e}})}))],2)])])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mb-3"},[t("p",{staticClass:"text-bold"},[e._v("ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES")])])}],i=t("2909"),r=(t("a434"),t("cdd9")),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mb-3"},["object"===typeof e.item.nombre?[e._l(e.item.nombre,(function(n){return[t("span",{staticClass:"text-bold"},[e._v(e._s(n))]),t("br")]}))]:e.item.nombre?[t("span",{staticClass:"text-bold"},[e._v(e._s(e.item.nombre))]),t("br")]:e._e(),"object"===typeof e.item.cargo?[e._l(e.item.cargo,(function(n){return[t("span",[e._v(e._s(n))]),t("br")]}))]:e.item.cargo?[t("span",[e._v(e._s(e.item.cargo))]),e.item.centro||e.item.regional?t("br"):e._e()]:e._e(),e.item.centro?[t("span",[e._v(e._s(e.item.centro))]),e.item.regional?t("br"):e._e()]:e._e(),e.item.regional?[t("span",[e._v(e._s(e.item.regional))])]:e._e()],2)},c=[],l={name:"CreditosItem",props:{item:{type:Object,default:function(){return{}}}}},u=l,d=t("2877"),m=Object(d["a"])(u,s,c,!1,null,"2e88dcde",null),f=m.exports,p={name:"CreditosComp",components:{CreditosItem:f},data:function(){return{creditosData:r["b"]}},computed:{contenidoInstruccional:function(){var e=this.creditosData.contenidoInstruccional,n=Math.round(e.length/2),t=Object(i["a"])(e).splice(0,n),a=Object(i["a"])(e).splice(n,e.length);return[t,a]}}},b=p,h=(t("4d3f"),Object(d["a"])(b,a,o,!1,null,"ce32b7bc",null));n["a"]=h.exports},"352c":function(e,n,t){},"36e0":function(e,n,t){},"4d3f":function(e,n,t){"use strict";t("c02a")},"52e5":function(e,n,t){e.exports=t.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("Header"),t("div",{staticClass:"contenedor-principal"},[t("AsideMenu"),t("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[t("router-view"),t("footer")],1)],1),t("BarraAvance")],1)},i=[],r=t("cdd9"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("aside",{staticClass:"aside-menu",class:{"aside-menu--open":e.menuOpen}},[t("nav",{staticClass:"aside-menu__content"},[e._m(0),t("ul",{staticClass:"aside-menu__menu"},[e._l(e.menuData,(function(n,a){return[t("li",{key:"menu-item-"+a,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":e.$route.name==n.nombreRuta}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[n.hasOwnProperty("numero")?t("span",[t("strong",[e._v(e._s(n.numero))])]):e._e(),t("span",[t("strong",[e._v(e._s(n.titulo))])])])],1),n.hasOwnProperty("subMenu")&&n.subMenu.length?e._l(n.subMenu,(function(o,i){return t("li",{key:"submenu-item-"+a+"-"+i,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":e.$route.hash=="#"+o.hash}},[t("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta,hash:"#"+o.hash}}},[t("i",{class:o.icono}),t("span",[e._v(e._s(o.numero))]),t("span",[e._v(e._s(o.titulo))])])],1)})):e._e()]}))],2),t("ul",{staticClass:"aside-menu__sec-menu"},e._l(e.subMenuData,(function(n,a){return t("li",{key:"SecMenu-item-"+a,staticClass:"aside-menu__sec-menu__item"},[n.hasOwnProperty("download")?t("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:e.obtenerLink(n.download),target:"_blank"}},[t("i",{class:n.icono}),t("span",[e._v(e._s(n.titulo))])]):t("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[t("i",{class:n.icono}),t("span",[e._v(e._s(n.titulo))])])],1)})),0)])])},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"aside-menu__header"},[t("div",{staticClass:"h5"},[e._v("Desarrollo de contenidos")])])}],l=(t("b0c0"),{name:"AsideMenu",data:function(){return{menuData:r["e"]&&r["e"].menu,subMenuData:r["e"]&&r["e"].subMenu}},computed:{menuOpen:function(){return this.$store.getters.isMenuOpen}},watch:{$route:function(e){"inicio"===e.name&&this.toggleMenu(!1)}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}}),u=l,d=(t("0ad3"),t("2877")),m=Object(d["a"])(u,s,c,!1,null,"046cc03c",null),f=m.exports,p=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("header",{staticClass:"header container-fluid"},[a("div",{staticClass:"row align-items-center justify-content-between"},[a("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=e.$route.name?a("div",{staticClass:"header__menu me-5",on:{click:function(n){return e.toggleMenu(!e.menuOpen)}}},[a("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":e.menuOpen}},[a("div",{staticClass:"line-2"}),a("div",{staticClass:"line-1"}),a("div",{staticClass:"line-3"})]),a("span",[e._v("MENÚ")])]):e._e(),a("img",{staticClass:"header__logo me-sm-5",attrs:{src:t("9eb5")}}),e.isInicio?a("div",{staticClass:"d-none d-md-flex align-items-center"},[a("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[e._v("Contenidos")]),a("a",{attrs:{href:"#creditos"}},[e._v("Créditos")])]):a("div",{staticClass:"header__componente-formativo"},[a("span",[e._v(e._s(e.globalData.componenteFormativo))])])]),e.isInicio?a("div",{staticClass:"col-auto"},[a("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[a("span",{staticClass:"me-1"},[e._v("Iniciar")]),a("i",{staticClass:"fas fa-angle-right"})])],1):e._e()])])},b=[],h=(t("7db0"),{data:function(){return{menuData:r["e"].menu}},methods:{},computed:{iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),n=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||n}}}),_={name:"Header",mixins:[h],data:function(){return{globalData:r["c"]}},computed:{isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}},g=_,v=(t("5cc8"),Object(d["a"])(g,p,b,!1,null,"3524e9ca",null)),C=v.exports,k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"barra-avance",class:[e.showBarra?"barra-avance--open":"barra-avance--close"]},[t("router-link",{staticClass:"boton barra-avance__boton--regresar",class:[!e.controlLinks.back.name&&"barra-avance__boton--disable"],attrs:{to:{name:e.controlLinks.back.name,hash:e.controlLinks.back.hash?"#"+e.controlLinks.back.hash:""}}},[t("i",{staticClass:"me-2 fas fa-angle-left"}),t("span",[e._v("Regresar")])]),t("router-link",{staticClass:"boton",class:[!e.controlLinks.next.name&&"barra-avance__boton--disable"],attrs:{to:{name:e.controlLinks.next.name,hash:e.controlLinks.next.hash?"#"+e.controlLinks.next.hash:""}}},[t("span",{staticClass:"me-2"},[e._v("Continuar")]),t("i",{staticClass:"fas fa-angle-right"})])],1)},y=[],x=(t("caad"),t("2532"),t("d81d"),{name:"BarraAvance",data:function(){return{menuData:r["e"].menu,cursoSelection:null,idSelecctionArr:[]}},computed:{showBarra:function(){var e=this.$route.fullPath.includes("/introduccion"),n=this.$route.fullPath.includes("/curso"),t=this.controlLinks.next&&this.controlLinks.next.name||this.controlLinks.back&&this.controlLinks.back.name;return!this.menuOpen&&(e||n)&&t},controlLinks:function(){var e=this,n=this.menuData.find((function(n){return n.nombreRuta===e.$route.name}));if("introduccion"===this.$route.name){var t=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return{next:{name:t.nombreRuta,hash:""},back:{name:"",hash:""}}}if(n){var a={},o=this.menuData.map((function(e){return e.nombreRuta})).indexOf(this.$route.name),i=this.menuData[o-1],r=i&&i.nombreRuta.includes("tema"),s=i&&i.nombreRuta.includes("introduccion");a.back=r||s?{name:i.nombreRuta,hash:""}:{name:"",hash:""};var c=this.menuData[o+1],l=c&&c.nombreRuta.includes("tema");return a.next=l?{name:c.nombreRuta,hash:""}:{name:"",hash:""},a}return{next:{name:"",hash:""},back:{name:"",hash:""}}},menuOpen:function(){return this.$store.getters.isMenuOpen}}}),D=x,O=(t("f431"),Object(d["a"])(D,k,y,!1,null,"14862916",null)),E=O.exports,R={name:"App",components:{AsideMenu:f,Header:C,BarraAvance:E},data:function(){return{menuOpen:!1,globalData:r["c"]}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},created:function(){document.title=this.globalData.componenteFormativo}},w=R,j=(t("cf25"),Object(d["a"])(w,o,i,!1,null,null,null)),L=j.exports,M=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("BannerPrincipal"),t("div",{staticClass:"pb-5",attrs:{id:"contenidos"}}),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5"},[e._m(0),t("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[t("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(n){return t("router-link",{key:"desarrollo-"+n.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:n.nombreRuta}}},[t("div",{staticClass:"desarrollo-contenidos__item__texto"},[n.hasOwnProperty("numero")?t("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(n.numero))]):t("i",{staticClass:"desarrollo-contenidos__item__icono",class:n.icono}),t("span",[e._v(e._s(n.titulo))])]),t("a",{staticClass:"boton--sm d-none d-md-block"},[t("span",[e._v("Ver más")])])])})),1)])]),t("div",{staticClass:"pb-5",attrs:{id:"creditos"}}),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 mb-5"},[e._m(1),t("CreditosComp")],1),t("Footer")],1)},A=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h6"},[e._v("Desarrollo"),t("br"),e._v("de contenidos")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h6"},[e._v("Créditos")])])}],I=t("2909"),P=(t("99af"),t("4de4"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"banner-principal"},[t("div",{staticClass:"container tarjeta p-4 ps-sm-5 pe-sm-5 pt-sm-5 pb-0",style:{"background-image":"url("+e.globalData.fondoBannerPrincipal+")"}},[t("div",{staticClass:"row justify-content-around"},[t("div",{staticClass:"col-lg-7 col-xxl-5 banner-principal__info pb-4 pb-sm-5"},[t("div",{staticClass:"banner-principal__componente"},[t("h1",{staticClass:"mb-0"},[e._v(e._s(e.globalData.componenteFormativo))])]),t("div",{staticClass:"banner-principal__descripcion"},[t("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})]),t("div",{staticClass:"banner-principal__accion"},[t("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[t("span",{staticClass:"me-1"},[e._v("Iniciar")]),t("i",{staticClass:"fas fa-angle-right"})])],1)]),t("div",{staticClass:"d-none d-lg-block col-lg-5 align-self-end"},[t("img",{attrs:{src:e.globalData.imagenBannerPrincipal}})])])])])}),z=[],$={name:"BannerPrincipal",mixins:[h],data:function(){return{globalData:r["c"]}}},T=$,q=(t("a5a7"),Object(d["a"])(T,P,z,!1,null,"7c39ecea",null)),B=q.exports,N=t("25aa"),G=t("0462"),F={name:"Inicio",components:{BannerPrincipal:B,CreditosComp:N["a"],Footer:G["a"]},data:function(){return{menuPrincipalData:r["e"]}},computed:{desarrolloContenidosData:function(){var e=[].concat(Object(I["a"])(this.menuPrincipalData.menu),Object(I["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},V=F,H=(t("b684"),Object(d["a"])(V,S,A,!1,null,"d8a00f74",null)),J=H.exports,U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"curso",attrs:{id:"curso"}},[t("router-view")],1)},Y=[],Q={name:"Curso"},K=Q,X=Object(d["a"])(K,U,Y,!1,null,"d1ebcac6",null),Z=X.exports;a["a"].use(M["a"]);var W=new M["a"]({routes:[{path:"/",name:"inicio",component:J},{path:"/introduccion",name:"introduccion",component:function(){return t.e("intro").then(t.bind(null,"5167"))}},{path:"/curso",name:"curso",component:Z,redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return t.e("tema1").then(t.bind(null,"b14e"))}}]},{path:"/actividad/:index?",name:"actividad"},{path:"/glosario",name:"glosario",component:function(){return t.e("glosario").then(t.bind(null,"c92c"))}},{path:"/complementario",name:"complementario",component:function(){return t.e("comple").then(t.bind(null,"dbb5"))}},{path:"/referencias",name:"referencias",component:function(){return t.e("referencias").then(t.bind(null,"7c1e"))}},{path:"/creditos",name:"creditos",component:function(){return t.e("creditos").then(t.bind(null,"ef72"))}}],scrollBehavior:function(e,n){if(e.hash){var t={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?t:new Promise((function(e){setTimeout((function(){e(t)}),500)}))}return{x:0,y:0,behavior:"auto"}}}),ee=W,ne=t("2f62");a["a"].use(ne["a"]);var te=new ne["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:function(e){return!!e.loading},isMenuOpen:function(e){return e.menuOpen}},mutations:{toggleMenu:function(e,n){e.menuOpen=n},increment:function(e){e.loading++},decrease:function(e){e.loading--}},actions:{toggleMenu:function(e,n){var t=e.commit;t("toggleMenu",n)},increment:function(e){var n=e.commit;n("increment")},decrease:function(e){var n=e.commit;n("decrease")}}});t("becf"),t("7b17"),t("ab8b"),t("a3a0");a["a"].component("AcordionA",(function(){return t.e("chunk-6f26cf2c").then(t.bind(null,"3997"))})),a["a"].component("TabsA",(function(){return t.e("chunk-29460b1d").then(t.bind(null,"67eb"))})),a["a"].component("TabsB",(function(){return t.e("chunk-6f971c89").then(t.bind(null,"fd2f"))})),a["a"].component("TabsC",(function(){return t.e("chunk-46763a27").then(t.bind(null,"58a2"))})),a["a"].component("LineaTiempoA",(function(){return t.e("chunk-2d0c031e").then(t.bind(null,"416a"))})),a["a"].component("LineaTiempoB",(function(){return t.e("chunk-c30fa626").then(t.bind(null,"b269"))})),a["a"].component("PasosA",(function(){return t.e("chunk-18abf34a").then(t.bind(null,"926a"))})),a["a"].component("SlyderA",(function(){return t.e("chunk-7a8dacf9").then(t.bind(null,"b198"))})),a["a"].component("SlyderB",(function(){return t.e("chunk-cde99bde").then(t.bind(null,"aae4"))})),a["a"].component("SlyderC",(function(){return t.e("chunk-7cc2f876").then(t.bind(null,"5dc7"))})),a["a"].component("SlyderD",(function(){return t.e("chunk-7ffbae07").then(t.bind(null,"bedf"))}));t("1276"),t("ac1f");a["a"].mixin({methods:{obtenerLink:function(e){var n=window.location.href,t=n.includes("/index.html#")?"index.html#":"#/",a=n.split(t)[0];return a+e}}}),a["a"].config.productionTip=!1,new a["a"]({router:ee,store:te,render:function(e){return e(L)}}).$mount("#app")},"5cc8":function(e,n,t){"use strict";t("352c")},"5e0d":function(e,n,t){},7738:function(e,n,t){},"91cc":function(e,n,t){},"9eb5":function(e,n,t){e.exports=t.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,t){},a5a7:function(e,n,t){"use strict";t("5e0d")},ae0a:function(e,n,t){e.exports=t.p+"img/banner-princiapal.1876fae4.svg"},b684:function(e,n,t){"use strict";t("7738")},c02a:function(e,n,t){},cdd9:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return r})),t.d(n,"d",(function(){return s})),t.d(n,"a",(function(){return c}));var a={componenteFormativo:"Evaluación de resultados de la intervención",descripcionCurso:"Este material aborda la etapa de evaluación de los resultados de intervención, dentro del modelo de extensionismo en el marco de la transformación digital. Incluye dentro de los resultados de la implementación del modelo, el análisis de la madurez de las empresas, seguimiento a indicadores y la consolidación de información y la construcción del informe final de la consultoría empresarial. Las conclusiones de este proceso de intervención, permiten validar  como a través de la asistencia técnica virtual, las organizaciones incrementan sus grados de madurez digital en pro de su progreso digital económico.",imagenBannerPrincipal:t("ae0a"),fondoBannerPrincipal:t("e6b0")},o={menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Resultados de implementación",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Análisis de la madurez digital de las empresas",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Seguimiento de indicadores",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Consolidación de información y construcción de informe final de consultoría",hash:"t_1_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},i={liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Luis Guillermo Alvarez García",cargo:"Experto temático",centro:"Centro De Servicios y Gestión Empresarial",regional:"Regional Antioquia"},{nombre:"Alejandro Moncada Betancur",cargo:"Experto temático",centro:"Centro De Procesos Industriales y Construcción",regional:"Regional Caldas"},{nombre:"Leidy Yohana Ortiz Diaz",cargo:"Experta temática",centro:"Centro de la Industria, la Empresa y los Servicios",regional:"Regional Norte de Santander"},{nombre:"Gimena Santacruz Benítez",cargo:"Experta temática",centro:"Centro de la Industria, la Empresa y los Servicios,",regional:"Regional Huila"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador instruccional",centro:"Centro para la industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"María Isabel Román Rueda",cargo:"Revisora de estilo",centro:"Centro Industrial Del Diseño Y La Manufactura",regional:"Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional"},{nombre:["Camilo Andrés Villamizar Lizcano","Eulises Orduz Amezquita","José Jaime Luis Tang Pinzón","Lady Adriana Ariza Luque","Oleg Litvin","Victor Raúl Cárdenas Cáceres","Zuleidy Maria Ruiz Torres"],cargo:"Diseño web y Producción Audiovisual"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollo Front-End"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación de recursos",centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]},r=[{referencia:"Definiciona. (s. f). Validar.",link:"https://definiciona.com/validar/"},{referencia:"Definición MX. (2014). Definición de logro.",link:"https://definicion.mx/logro/"},{referencia:"Pérez, J., y Merino, M. (2008). Definición de informe.",link:"https://definicion.de/informe/"},{referencia:"REDHAT. (s. f). ¿Qué es la transformación digital?",link:"https://www.redhat.com/es/topics/digital-transformation/what-is-digital-transformation"}],s=[{termino:"Informe",significado:"consiste en un texto o una declaración que describe las cualidades de un hecho y de los eventos que lo rodean. El informe, por lo tanto, es el resultado o la consecuencia de la acción de informar (difundir, informar)."},{termino:"Logro",significado:"se denomina logro al alcance de una meta previamente propuesta por una persona o un grupo de personas. Este logro, lejos de ser un mero “golpe de fortuna” (o “suerte”), necesita que la o las personas apliquen diferentes acciones, acordadas de manera previa, de modo que sean tendientes a facilitar el alcance de la meta."},{termino:"Matriz EBLA",significado:'identifica experiencias, buenas prácticas, lecciones aprendidas y otras experiencias que considere relevantes a destacar.<ul style="margin-left: 20px; margin-top: 20px"> <li style="margin-top: 10px;"> ●\tExperiencias: la aplicación metodológica condujo a los resultados esperados, o por el contrario no fue lo que esperaba.</li> <li style="margin-top: 10px;"></li> <li style="margin-top: 10px;"> ●\tBuenas prácticas: ¿qué elementos de la aplicación metodológica considera que lo condujo a resultados adecuados? </li> <li style="margin-top: 10px;"> ●\tLecciones aprendidas: ¿qué elementos de la aplicación metodológica considera se pueden ajustar y/o modificar para mejorar los resultados del acompañamiento? </li> <li style="margin-top: 10px;"> ●\tAportes al programa: sugerencias, recomendaciones, contribuciones y aportes que le haría usted como gestor consultor/extensionista a la implementación de la metodología.</li></ul>'},{termino:"Validar",significado:"se define como dar consistencia, resistencia, firmeza, dureza, coherencia, espesor, trabazón, densidad, solidez y fuerza a algo haciéndolo válido o simplemente en dar validez alguna cosa, constatar o también comprobar que es legal. "}],c=[{texto:"REDHAT. (s. f.). ¿Qué es la transformación digital?",tipo:"Página web",link:"https://www.redhat.com/es/topics/digital-transformation/what-is-digital-transformation"}]},cf25:function(e,n,t){"use strict";t("fea6")},e6b0:function(e,n,t){e.exports=t.p+"img/fondo-banner-principal.58e8997f.png"},eb3a:function(e,n,t){},f431:function(e,n,t){"use strict";t("91cc")},fea6:function(e,n,t){}});
//# sourceMappingURL=app.a3c7f6bb.js.map