(this["webpackJsonpclone-netflix"]=this["webpackJsonpclone-netflix"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),s=n.n(c),i=n(3),o=n.n(i),l=n(5),u=n(4),d="0c5a4ac046c0020ef050cc3499705b20",j=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/discover/tv?with_network=213&language=pt-br&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,j("/trending/all/week?language=pt-br&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"Trending",title:"Recomendados para voc\xea",items:e.t2},e.next=10,j("/movie/top_rated?language=pt-br&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"top rated",title:"Em alta",items:e.t4},e.next=14,j("/discover/movie?with_genres=28&language=pt-br&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,j("/discover/movie?with_genres=35&language=pt-br&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,j("/discover/movie?with_genres=27&language=pt-br&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,j("/discover/movie?with_genres=10749&language=pt-br&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,j("/discover/movie?with_genres=99&language=pt-br&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Documentarios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,j("/movie/".concat(t,"?language=pt-br&api_key=").concat(d));case 7:return r=e.sent,e.abrupt("break",15);case 9:return e.next=11,j("/tv/".concat(t,"?language=pt-br&api_key=").concat(d));case 11:return r=e.sent,e.abrupt("break",15);case 13:return r=null,e.abrupt("break",15);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},m=(n(21),n(22),n(12)),h=n.n(m),g=n(14),v=n.n(g),f=n(1),p=function(e){var t=e.title,n=e.items,a=Object(r.useState)(0),c=Object(u.a)(a,2),s=c[0],i=c[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{id:"title",children:t}),Object(f.jsx)("div",{className:"movieRow--left",onClick:function(){var e=s+Math.round(window.innerWidth/2);e>0&&(e=0),i(e)},children:Object(f.jsx)(h.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--right",onClick:function(){var e=s-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),i(e)},children:Object(f.jsx)(v.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--listarea",children:Object(f.jsx)("div",{className:"movieRow--list",style:{marginLeft:s,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(f.jsx)("div",{className:"movieRow--item",children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})})}))})})]})};n(29);var x=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1];e.item.then((function(e){return c(e)}));var s=new Date(a.first_air_date),i=[];for(var o in a.genres)i.push(a.genres[o].name);console.log(a),console.log(a.overview);var l=a.overview;console.log(l),l=a.overview;try{l=l.substring(0,200)+"..."}catch(d){console.log(d)}return Object(f.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(a.backdrop_path,")")},children:Object(f.jsx)("div",{className:"featured--vertical",children:Object(f.jsxs)("div",{className:"featured--horizontal",children:[Object(f.jsx)("div",{className:"featured--name",children:a.original_name}),Object(f.jsxs)("div",{className:"featured--info",children:[Object(f.jsx)("div",{className:"featured--points",children:a.vote_average}),Object(f.jsx)("div",{className:"featured--year",children:s.getFullYear()}),Object(f.jsxs)("div",{className:"featured--seasons",children:[a.number_of_seasons," temporada",1!==a.number_of_seasons?"s":""]}),Object(f.jsx)("div",{className:"featured--description",children:l}),Object(f.jsxs)("div",{className:"featured--buttons",children:[Object(f.jsx)("a",{className:"featured--watchbutton",href:"/watch/".concat(a.id),children:"Assistir"}),Object(f.jsx)("a",{className:"featured--watchbutton",href:"/watch/add/".concat(a.id),children:"+ Minha lista"})]}),Object(f.jsxs)("div",{className:"featured--genres",children:[Object(f.jsx)("strong",{children:"G\xeaneros: "}),i.join(", ")]})]})]})})})};n(30);var O=function(e){var t=e.black;return Object(f.jsxs)("header",{className:t?"black":"",children:[Object(f.jsx)("div",{className:"header--logo",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})})}),Object(f.jsx)("div",{className:"header--user",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{id:"header--profile",src:"https://avatars.githubusercontent.com/u/56513919?v=4",alt:"Usuario"})})})]})},w=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),s=Object(u.a)(c,2),i=s[0],d=s[1],j=Object(r.useState)(!1),m=Object(u.a)(j,2),h=m[0],g=m[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getHomeList();case 2:t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),c=n[0].items.results[r],s=b.getMovieInfo(c.id,"tv"),d(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=function(){window.scrollY>10?g(!0):g(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(O,{black:h}),i&&Object(f.jsx)(x,{item:i}),Object(f.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(f.jsx)(p,{title:e.title,items:e.items},t)}))}),Object(f.jsxs)("footer",{children:[Object(f.jsxs)("p",{children:["Feito por ",Object(f.jsx)("strong",{children:"Gabriel Botelho Malenowitch"}),", com muito",Object(f.jsx)("span",{role:"img","aria-label":"cora\xe7\xe3o",children:"\ud83d\udc9d"})]}),Object(f.jsx)("p",{children:"Direitos de Imagem para Netflix"}),Object(f.jsx)("p",{children:"Dados pegos do site Themoviedb.org"})]})]})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7e720d75.chunk.js.map