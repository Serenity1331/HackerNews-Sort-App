(this["webpackJsonpapi-pagination-test"]=this["webpackJsonpapi-pagination-test"]||[]).push([[0],{22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(15),a=n.n(i),s=(n(22),n(5)),o=n(16),d=n.n(o),u=(n(41),n(17)),j=(n(42),n(0));var l=function(e){var t=e.data,n=new Date(1e3*t.time).toLocaleString();return Object(j.jsxs)("tr",{onClick:function(){return window.open("https://news.ycombinator.com/item?id=".concat(t.id))},children:[Object(j.jsx)("td",{className:"date",children:n}),Object(j.jsx)("td",{className:"title",children:Object(j.jsx)("div",{children:t.title})}),Object(j.jsx)("td",{className:"domain",children:t.domain})]})};n(44);var b=function(e){var t=e.number,n=e.current,c=e.setCurrentPage;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"page-num ".concat(t===n?"current-page":""),onClick:function(){return c(t)},children:t})})};n(45);function h(e,t,n){for(var c=[],r=1;r<=e;r++)c.push(Object(j.jsx)(b,{number:r,current:t,setCurrentPage:n},r));return c}var O=function(e){var t=e.data,n=e.sortConfig,r=e.requestSort,i=e.currentPage,a=e.setCurrentPage,s=Object(c.useMemo)((function(){var e=Object(u.a)(t);return e.sort((function(e,t){return e[n.key]<t[n.key]?"ascending"===n.direction?-1:1:e[n.key]>t[n.key]?"ascending"===n.direction?1:-1:0})),e}),[t,n]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("table",{className:"customTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"header-time",onClick:function(){return r("time")},children:Object(j.jsx)("span",{children:"Time"})}),Object(j.jsx)("th",{onClick:function(){return r("title")},children:Object(j.jsx)("span",{children:"Title"})}),Object(j.jsx)("th",{onClick:function(){return r("domain")},children:Object(j.jsx)("span",{children:"Domain"})})]})}),Object(j.jsx)("tbody",{children:s.map((function(e){return Object(j.jsx)(l,{data:e},e.id)}))})]}),Object(j.jsx)("div",{className:"page-list",children:h(10,i,a)}),Object(j.jsx)("button",{className:"sort-by-time",onClick:function(){return r("time")},children:"Sort By Time"})]})},m={loading:!0,error:"",data:{}},f=function(e,t){switch(t.type){case"FETCH_SUCCESS":return{loading:!1,data:t.payload,error:""};case"FETCH_ERROR":return{loading:!1,data:{},error:"Something went wrong"};default:return e}};var g=function(){var e=Object(c.useReducer)(f,m),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({key:"",direction:"ascending"}),a=Object(s.a)(i,2),o=a[0],u=a[1],l=Object(c.useState)(1),b=Object(s.a)(l,2),h=b[0],g=b[1],p="https://api.hnpwa.com/v0/news/".concat(h,".json");return Object(c.useEffect)((function(){d.a.get(p).then((function(e){r({type:"FETCH_SUCCESS",payload:e.data})})).catch((function(e){r({type:"FETCH_ERROR"})}))}),[p]),Object(j.jsxs)("div",{className:"container-main",children:[n.loading?"Loading":Object(j.jsx)(O,{data:n.data,sortConfig:o,setSortConfig:u,requestSort:function(e){var t="ascending";o.key===e&&"ascending"===o.direction&&(t="descending"),u({key:e,direction:t})},currentPage:h,setCurrentPage:g}),n.error?n.error:null]})};var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(g,{})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2d53af50.chunk.js.map