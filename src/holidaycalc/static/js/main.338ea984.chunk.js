(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(9),s=t.n(a),o=(t(41),t(1));function r(){return Object(o.jsx)("div",{})}var i=t(3),l=t(5),d=t(12),j=t(15),u=t(14),b=Object(u.b)({name:"storage",initialState:{groups:[],payments:[]},reducers:{addGroup:function(e,n){e.groups.push(n.payload)},addPerson:function(e,n){var t=n.payload.id;e.groups.find((function(e){return e.id===t})).persons.push({id:Object(u.c)(),name:"",drinksAlcohol:!0,eatMeat:!0})},addSpending:function(e,n){var t=n.payload.id;e.groups.find((function(e){return e.id===t})).spendings.push({id:Object(u.c)(),amount:"",type:"other"})},changePersonName:function(e,n){var t=n.payload,c=t.id,a=t.name,s=m(c,e);null!=s&&(s.name=a)},toggleDrinksAlcohol:function(e,n){var t=m(n.payload.id,e);null!=t&&(t.drinksAlcohol=!t.drinksAlcohol)},toggleEatMeat:function(e,n){var t=m(n.payload.id,e);null!=t&&(t.eatMeat=!t.eatMeat)},changeSpendingAmount:function(e,n){var t=n.payload,c=t.id,a=t.amount,s=p(c,e);null!=s&&(s.amount=a)},changeSpendingType:function(e,n){var t=n.payload,c=t.id,a=t.type,s=p(c,e);null!=s&&(s.type=a)},addPayments:function(e,n){var t=n.payload.data,c=e.payments;if(t){for(;c.length>0;)c.pop();var a,s=Object(j.a)(t);try{for(s.s();!(a=s.n()).done;){var o=a.value;c.push(o)}}catch(r){s.e(r)}finally{s.f()}}}}});function m(e,n){var t,c=Object(j.a)(n.groups);try{for(c.s();!(t=c.n()).done;){var a,s=t.value,o=Object(j.a)(s.persons);try{for(o.s();!(a=o.n()).done;){var r=a.value;if(r.id===e)return r}}catch(i){o.e(i)}finally{o.f()}}}catch(i){c.e(i)}finally{c.f()}return null}function p(e,n){var t,c=Object(j.a)(n.groups);try{for(c.s();!(t=c.n()).done;){var a,s=t.value,o=Object(j.a)(s.spendings);try{for(o.s();!(a=o.n()).done;){var r=a.value;if(r.id===e)return r}}catch(i){o.e(i)}finally{o.f()}}}catch(i){c.e(i)}finally{c.f()}return null}var h=b.actions,O=h.addGroup,f=h.addPerson,g=h.addSpending,x=h.changePersonName,v=h.toggleDrinksAlcohol,y=h.toggleEatMeat,N=h.changeSpendingAmount,k=h.changeSpendingType,w=h.addPayments,C=t(17),A=t(18),S=t(77);function T(){var e=Object(d.c)((function(e){return e.storage.groups})),n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],s=t[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),j=i[0],b=i[1],m=Object(c.useState)("empty"),p=Object(l.a)(m,2),h=p[0],f=p[1],g=Object(d.b)();var x=function(){return s(!1)};return Object(o.jsxs)("div",{className:"container",children:[e.map((function(e,n){return Object(o.jsx)(M,{name:e.name,id:e.id,persons:e.persons,spendings:e.spendings},e.id)})),Object(o.jsx)("div",{className:"row align-content-center",style:{marginTop:10},children:Object(o.jsx)("button",{type:"button",className:"btn btn-success btn-lg",onClick:function(){return s(!0)},children:"+"})}),Object(o.jsx)(B,{}),Object(o.jsx)(F,{}),Object(o.jsxs)(S.a,{show:a,onHide:x,children:[Object(o.jsx)(S.a.Header,{closeButton:!0,children:Object(o.jsx)(S.a.Title,{children:"Add new group"})}),Object(o.jsx)(S.a.Body,{children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-1"}),Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("input",{className:"empty"===h?"form-control form-control-lg":"form-control form-control-lg is-invalid",type:"text",placeholder:"Group name",value:j,onChange:function(e){b(e.target.value)}})}),Object(o.jsx)("div",{className:"col-1"})]})}),Object(o.jsxs)(S.a.Footer,{children:[Object(o.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:x,children:"Close"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){j.length>=3?(g(O({id:Object(u.c)(),name:j,persons:[],spendings:[]})),f("empty"),b(""),s(!1)):(f("error"),setTimeout((function(){f("empty")}),2e3))},children:"Add"})]})]})]})}function M(e){var n=e.id,t=e.name,c=e.persons,a=e.spendings,s=Object(d.b)();return Object(o.jsxs)("div",{className:"container",style:{marginTop:15},children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("p",{className:"h3",children:t})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("p",{className:"h6",children:["Persons ",Object(o.jsx)(C.a,{icon:A.b,color:"green",onClick:function(){s(f({id:n}))}})]})})}),Object(o.jsx)("div",{className:"row justify-content-center",children:c?c.map((function(e,n){return Object(o.jsx)(P,{name:e.name,drinksAlcohol:e.drinksAlcohol,eatMeat:e.eatMeat,id:e.id},e.id)})):""}),Object(o.jsx)("div",{className:"row",style:{marginTop:5},children:Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("p",{className:"h6",children:["Spendings ",Object(o.jsx)(C.a,{icon:A.b,color:"green",onClick:function(){s(g({id:n}))}})]})})}),Object(o.jsx)("div",{className:"row justify-content-center",children:a?a.map((function(e,n){return Object(o.jsx)(E,{amount:e.amount,type:e.type,id:e.id},e.id)})):""})]})}function P(e){var n=e.id,t=e.name,c=e.eatMeat,a=e.drinksAlcohol,s=Object(d.b)();return Object(o.jsx)("div",{className:"row align-content-center",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-md-12 col-lg-6",children:Object(o.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(o.jsx)("span",{className:"input-group-text",id:"name",children:Object(o.jsx)("i",{className:"bi bi-person-circle"})}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Name","aria-label":"Username","aria-describedby":"name",value:t,onChange:function(e){s(x({id:n,name:e.target.value}))}})]})}),Object(o.jsxs)("div",{className:"col-md-12 col-lg-6 align-self-center",children:[Object(o.jsxs)("div",{className:"form-check form-check-inline",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"alcoholCheckbox",checked:a,onChange:function(){s(v({id:n}))}}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"alcoholCheckbox",children:"Alcohol"})]}),Object(o.jsxs)("div",{className:"form-check form-check-inline",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"meatCheckbox",checked:c,onChange:function(){s(y({id:n}))}}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"meatCheckbox",children:"Meat"})]})]})]})})}function E(e){var n=e.id,t=e.amount,c=e.type,a=Object(d.b)();return Object(o.jsx)("div",{className:"row",style:{marginTop:5},children:Object(o.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(o.jsx)("input",{type:"number",className:"form-control",placeholder:"Amount",value:t,onChange:function(e){a(N({id:n,amount:e.target.value}))}}),Object(o.jsxs)("select",{className:"form-select",value:c,onChange:function(e){a(k({id:n,type:e.target.value}))},children:[Object(o.jsx)("option",{value:"other",children:"Other"}),Object(o.jsx)("option",{value:"alcohol",children:"Alcohol"}),Object(o.jsx)("option",{value:"meat",children:"Meat"})]})]})})}function B(){var e=Object(d.c)((function(e){return e.storage.groups})),n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],s=t[1],r=Object(d.b)();return Object(c.useEffect)((function(){e.length>=2&&s(!0)}),[e]),a?Object(o.jsx)("div",{className:"row align-content-center",style:{marginTop:10},children:Object(o.jsx)("button",{type:"button",className:"btn btn-success btn-lg",onClick:function(){fetch("/calculator/calculate-spendings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventName:"event",participants:e})}).then((function(e){if(e.ok)return console.log("big success"),e.json();console.log("error happen")})).then((function(e){r(w({data:e.payments}))})).catch((function(e){console.log(e)}))},children:"Calculate"})}):Object(o.jsx)("div",{})}function F(){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1],s=Object(d.c)((function(e){return e.storage.payments}));return Object(c.useEffect)((function(){console.log("payments",s),a(!!s)}),[s]),t?Object(o.jsx)("div",{className:"container",style:{marginTop:20},children:Object(o.jsx)("div",{className:"row",children:s.map((function(e,n){return Object(o.jsx)(G,{payer:e.payer,amount:e.amount,recepient:e.recepient})}))})}):Object(o.jsx)("div",{})}function G(e){return Object(o.jsx)("div",{className:"row align-content-center",children:Object(o.jsx)("div",{className:"col-md-12 justify-content-center",children:Object(o.jsxs)("p",{className:"h5 text-center",children:[e.payer,Object(o.jsx)(C.a,{icon:A.a,style:{marginLeft:30,marginRight:30}}),"  ",e.amount,Object(o.jsx)(C.a,{icon:A.c,size:"xs"})," ",Object(o.jsx)(C.a,{icon:A.a,style:{marginLeft:30,marginRight:30}}),e.recepient]})})})}function J(){var e=[{path:"/",element:Object(o.jsx)(D,{}),children:[{index:!0,element:Object(o.jsx)(T,{})}]}],n=Object(i.g)(e);return Object(o.jsx)("div",{children:n})}function D(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(r,{}),Object(o.jsx)(i.a,{})]})}t(51),t(52),t(73);var H=t(27),L=Object(u.a)({reducer:{storage:b.reducer}});s.a.render(Object(o.jsx)(d.a,{store:L,children:Object(o.jsx)(H.a,{children:Object(o.jsx)(J,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.338ea984.chunk.js.map