(this["webpackJsonpproyecto-ego"]=this["webpackJsonpproyecto-ego"]||[]).push([[0],{17:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(19),n=c.n(a),o=(c(27),c(28),c(8)),r=c(9),l=c(11),d=c(10),j=(c(29),c(0));function h(e){return Object(j.jsxs)("div",{id:"mod"+e.id,className:"ItemModelo",children:[Object(j.jsxs)("div",{className:"ContenedorTitulo",children:[Object(j.jsxs)("h3",{className:"NombreText",children:[" ",e.name," "]}),Object(j.jsxs)("p",{className:"DescripcionText",children:[" ",e.year," | $",e.price]})]}),Object(j.jsx)("div",{className:"ContenedorImagen",children:Object(j.jsx)("img",{src:e.photo,alt:"Foto",className:"fotoVeiculo"})})]})}c(31);var m=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var i;return Object(o.a)(this,c),(i=t.call(this)).state={Modelos:e.Modelos},i}return Object(r.a)(c,[{key:"render",value:function(){var e=this.state.Modelos.map((function(e){return Object(j.jsx)(h,{id:e.id,name:e.name,year:e.year,price:e.price,photo:e.photo})})),t=Object(j.jsx)("div",{className:"ContenedorItemsVeiculos",children:e});return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"ContenedorEncabezadoModelos",children:[Object(j.jsx)("h1",{children:"Descubr\xed todos los modelos "}),Object(j.jsx)("div",{className:"ContenedorSelectores2",children:Object(j.jsxs)("div",{className:"ContenedorSelectores",children:[Object(j.jsxs)("select",{name:"Filtrar",className:"Selector",children:[Object(j.jsx)("option",{selected:!0,value:"0",children:" Filtar por "}),Object(j.jsxs)("optgroup",{label:"Marca",children:[Object(j.jsx)("option",{value:"1",children:"Sedan"}),Object(j.jsx)("option",{value:"2",children:"Hatchback"}),Object(j.jsx)("option",{value:"3",children:"Pickups y Comerciales"}),Object(j.jsx)("option",{value:"4",children:"SUVs"})]})]}),Object(j.jsxs)("select",{name:"Ordenar",className:"Selector",children:[Object(j.jsx)("option",{selected:!0,value:"0",children:"Ordenar por "}),Object(j.jsxs)("optgroup",{label:"A\xf1o",children:[Object(j.jsx)("option",{value:"1",children:"Acendente"}),Object(j.jsx)("option",{value:"2",children:"Desendente"})]}),Object(j.jsxs)("optgroup",{label:"Precio",children:[Object(j.jsx)("option",{value:"1",children:"Mas bajo"}),Object(j.jsx)("option",{value:"2",children:"Mas Alto"})]})]})]})})]}),t]})}}]),c}(s.a.Component);c(32),c(17);function p(e){return Object(j.jsxs)("div",{className:"ItemParte",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.photo,alt:"Foto",className:"fotoPartes"})," "]}),Object(j.jsxs)("h3",{className:"tituloItemParte",children:[" ",e.titulo," "]}),Object(j.jsxs)("p",{className:"descripcionItemParte",children:[" ",e.descripcion]})]})}function b(e){var t=e.ItemsPartes.map((function(e){return Object(j.jsx)(p,{titulo:e.titulo,descripcion:e.descripcion,photo:e.photo})}));return Object(j.jsx)("div",{className:"ContenedorCarrusel",children:Object(j.jsxs)("div",{className:"ContenedorItemsCarrusel",children:[Object(j.jsx)("div",{className:"gradienteDerecho"}),Object(j.jsx)("div",{className:"gradienteIzquerdo"}),t]})})}var g=c.p+"static/media/Imagen1.7dc90a37.png",u=c.p+"static/media/Imagen2.2413caae.jpg",x=c.p+"static/media/Imagen3.a70abf65.png",O=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var i;return Object(o.a)(this,c),(i=t.call(this)).state={ItemsPartes:e.ItemsPartes},i}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("section",{className:"estilosSeccionEncabezado",children:[Object(j.jsx)("img",{src:g,alt:"Foto",className:"ImagenVeiculo"}),Object(j.jsxs)("div",{className:"ContenedorTextoSeccionEncabezado",children:[Object(j.jsxs)("p",{className:"subtituloFicha",children:[" ",Object(j.jsx)("b",{children:"Hilux DX/SR"})]}),Object(j.jsx)("h1",{className:"tituloFicha",children:"Preparada para cualquier desaf\xedo "}),Object(j.jsx)("p",{className:"descripcionFicha",children:" Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xe1ndar de las industrias desde el a\xf1o 1500 "})]})]}),Object(j.jsx)("section",{children:Object(j.jsx)(b,{ItemsPartes:this.state.ItemsPartes})}),Object(j.jsxs)("section",{className:"estilosSeccion",children:[Object(j.jsxs)("div",{className:"ContenedorTextoSeccion",children:[Object(j.jsx)("h4",{className:"tituloSeccion",children:"Titulo de 20px"}),Object(j.jsx)("p",{className:"descripcionSeccion",children:" Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xe1ndar de las industrias desde el a\xf1o 1500 "})]}),Object(j.jsx)("img",{src:u,alt:"Foto",className:"ImagenSeccion"})]}),Object(j.jsxs)("section",{className:"estilosSeccion",style:{flexDirection:"row-reverse"},children:[Object(j.jsxs)("div",{className:"ContenedorTextoSeccion",children:[Object(j.jsx)("h4",{className:"tituloSeccion",children:"Titulo de 20px"}),Object(j.jsx)("p",{className:"descripcionSeccion",children:" Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xe1ndar de las industrias desde el a\xf1o 1500 "})]}),Object(j.jsx)("img",{src:x,alt:"Foto",className:"ImagenSeccion"})]})]})}}]),c}(s.a.Component),v=c(13),N=c(2),C=c(22);c(33);function f(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:e.width,viewBox:"0 0 459 459",children:[Object(j.jsx)("g",{children:Object(j.jsx)("g",{id:"menu",children:Object(j.jsx)("path",{d:"M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"})})}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{}),Object(j.jsx)("g",{})]})})}function _(e){return Object(j.jsx)("div",{children:Object(j.jsx)("svg",{width:e.width,viewBox:"0 0 512 512",children:Object(j.jsx)("polygon",{fill:"var(--ci-primary-color, currentColor)",points:"427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"})})})}function I(e){var t=Object(i.useState)(!1),c=Object(C.a)(t,2),s=c[0],a=c[1];return Object(j.jsxs)("div",{className:"ContenedorNavbar",children:[Object(j.jsxs)("div",{className:"ContenedorLinks",children:[Object(j.jsx)("div",{className:"LogoEGO",children:Object(j.jsx)("p",{className:"textLogo",children:"EGO"})}),Object(j.jsx)("div",{className:"ContenedorBotones",children:e.children})]}),Object(j.jsxs)("div",{className:"ContenedorBotonMenu",children:[Object(j.jsx)("p",{className:"textMenu",children:"Men\xfa"}),Object(j.jsx)("button",{className:"botonMenu",onClick:function(){a(!s)},children:s?Object(j.jsx)(_,{width:"30px"}):Object(j.jsx)(f,{width:"30px"})}),Object(j.jsx)("div",{className:"seccionMenu",style:s?{width:"250px",visibility:"visible",transition:"all 2s ease"}:{width:"0px",visibility:"hidden",transition:"all 2s ease"},children:Object(j.jsxs)("div",{style:s?{display:"inline"}:{display:"none"},children:[Object(j.jsx)("p",{className:"textMenu2",children:"Men\xfa"}),Object(j.jsxs)("div",{className:"contenedorOpciones",children:[Object(j.jsx)("a",{href:"#a",children:"login"}),Object(j.jsx)("a",{href:"#a",children:"opcion1"}),Object(j.jsx)("a",{href:"#a",children:"opcion2"}),Object(j.jsx)("p",{children:"..."})]}),Object(j.jsxs)("div",{className:"ContenedorBotones2",children:[Object(j.jsx)("p",{className:"textMenu2",children:"Secciones"}),e.children]})]})})]})]})}var M=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var i;return Object(o.a)(this,c),(i=t.call(this)).state={Modelos:e.Modelos,ItemsPartes:e.ItemsPartes},i}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsxs)(I,{children:[Object(j.jsx)(v.b,{activeClassName:"active",to:"/Modelos",className:"BotonLink",children:Object(j.jsx)("h3",{children:"Modelos"})}),Object(j.jsx)(v.b,{activeClassName:"active",to:"/FichaDeModelo",className:"BotonLink",children:Object(j.jsx)("h3",{children:"Ficha del modelo"})})]}),Object(j.jsxs)(N.c,{children:[Object(j.jsx)(N.a,{path:"/Modelos",children:Object(j.jsx)(m,{Modelos:this.state.Modelos})}),Object(j.jsx)(N.a,{path:"/FichaDeModelo",children:Object(j.jsx)(O,{ItemsPartes:this.state.ItemsPartes})})]})]})})})}}]),c}(s.a.Component),y=c.p+"static/media/Parte1.4a231f07.jpg",P=c.p+"static/media/Parte2.dd5fa342.jpg",L=c.p+"static/media/Parte3.52865ed0.jpg",S=c.p+"static/media/Parte4.8b396336.jpg",w=c.p+"static/media/Parte5.1473a3ad.jpg",T=c.p+"static/media/Parte6.c9c2b6d6.jpg",A=c.p+"static/media/Parte7.c29bdcd1.jpg",H=c.p+"static/media/Parte8.5e185645.jpg",F=[{id:1,name:"Corolla",segment:"Sedan",year:2021,price:3817e3,thumbnail:"http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-600.png"},{id:2,name:"Camry",segment:"Sedan",year:2021,price:4250400,thumbnail:"http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-600.png"},{id:3,name:"Yaris Hatchback",segment:"Hatchback",year:2021,price:2585e3,thumbnail:"http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-600.png"},{id:4,name:"Etios",segment:"Hatchback",year:2021,price:1731e3,thumbnail:"http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png"},{id:5,name:"Hilux",segment:"Pickups y Comerciales",year:2021,price:341e4,thumbnail:"http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png"},{id:6,name:"Hiace Furg\xf3n",segment:"Pickups y Comerciales",year:2021,price:3645200,thumbnail:"http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png"},{id:7,name:"Rav4",segment:"SUVs",year:2021,price:2960500,thumbnail:"http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png"},{id:8,name:"SW4",segment:"SUVs",year:2021,price:6892e3,thumbnail:"http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",photo:"http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"}],D=[{id:1,titulo:"Motores",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:y},{id:2,titulo:"Suspencion Mejorada",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:P},{id:3,titulo:"Transmis\xedon autom\xe1tica",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:L},{id:4,titulo:"Transmis\xedon manual",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:S},{id:5,titulo:"Transmis\xedon asistida",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:w},{id:6,titulo:"Traccion tracera",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:T},{id:7,titulo:"Traccion delantera",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:A},{id:8,titulo:"Sistema de frenos",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",photo:H}];var k=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(M,{Modelos:F,ItemsPartes:D})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),i(e),s(e),a(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),V()}},[[39,1,2]]]);
//# sourceMappingURL=main.0f6b5f24.chunk.js.map