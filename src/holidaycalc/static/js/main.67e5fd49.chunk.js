(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(9),s=t.n(a),r=(t(41),t(1));function o(){return Object(r.jsx)("div",{})}var i=t(3),l=t(5),d=t(12),j=t(15),u=t(14),b=Object(u.b)({name:"storage",initialState:{groups:[],payments:[]},reducers:{addGroup:function(e,n){e.groups.push(n.payload)},addPerson:function(e,n){var t=n.payload.id;e.groups.find((function(e){return e.id===t})).persons.push({id:Object(u.c)(),name:"",drinksAlcohol:!0,eatMeat:!0})},addSpending:function(e,n){var t=n.payload.id;e.groups.find((function(e){return e.id===t})).spendings.push({id:Object(u.c)(),amount:"",type:"other"})},changePersonName:function(e,n){var t=n.payload,c=t.id,a=t.name,s=m(c,e);null!=s&&(s.name=a)},toggleDrinksAlcohol:function(e,n){var t=m(n.payload.id,e);null!=t&&(t.drinksAlcohol=!t.drinksAlcohol)},toggleEatMeat:function(e,n){var t=m(n.payload.id,e);null!=t&&(t.eatMeat=!t.eatMeat)},changeSpendingAmount:function(e,n){var t=n.payload,c=t.id,a=t.amount,s=h(c,e);null!=s&&(s.amount=a)},changeSpendingType:function(e,n){var t=n.payload,c=t.id,a=t.type,s=h(c,e);null!=s&&(s.type=a)},addPayments:function(e,n){var t=n.payload.data,c=e.payments;if(t){for(;c.length>0;)c.pop();var a,s=Object(j.a)(t);try{for(s.s();!(a=s.n()).done;){var r=a.value;c.push(r)}}catch(o){s.e(o)}finally{s.f()}}}}});function m(e,n){var t,c=Object(j.a)(n.groups);try{for(c.s();!(t=c.n()).done;){var a,s=t.value,r=Object(j.a)(s.persons);try{for(r.s();!(a=r.n()).done;){var o=a.value;if(o.id===e)return o}}catch(i){r.e(i)}finally{r.f()}}}catch(i){c.e(i)}finally{c.f()}return null}function h(e,n){var t,c=Object(j.a)(n.groups);try{for(c.s();!(t=c.n()).done;){var a,s=t.value,r=Object(j.a)(s.spendings);try{for(r.s();!(a=r.n()).done;){var o=a.value;if(o.id===e)return o}}catch(i){r.e(i)}finally{r.f()}}}catch(i){c.e(i)}finally{c.f()}return null}var p=b.actions,O=p.addGroup,f=p.addPerson,x=p.addSpending,g=p.changePersonName,v=p.toggleDrinksAlcohol,y=p.toggleEatMeat,N=p.changeSpendingAmount,k=p.changeSpendingType,w=p.addPayments,C=t(17),S=t(18),T=t(77);function A(){var e=Object(d.c)((function(e){return e.storage.groups})),n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],s=t[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],b=i[1],m=Object(c.useState)("empty"),h=Object(l.a)(m,2),p=h[0],f=h[1],x=Object(d.b)();var g=function(){return s(!1)};return Object(r.jsxs)("div",{className:"container",children:[e.map((function(e,n){return Object(r.jsx)(M,{name:e.name,id:e.id,persons:e.persons,spendings:e.spendings},e.id)})),Object(r.jsx)("div",{className:"row align-content-center",style:{marginTop:10},children:Object(r.jsx)("button",{type:"button",className:"btn btn-success btn-lg",onClick:function(){return s(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443"})}),Object(r.jsx)(B,{}),Object(r.jsx)(F,{}),Object(r.jsxs)(T.a,{show:a,onHide:g,children:[Object(r.jsx)(T.a.Header,{closeButton:!0,children:Object(r.jsx)(T.a.Title,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443"})}),Object(r.jsx)(T.a.Body,{children:Object(r.jsxs)("div",{className:"row justify-content-center",children:[Object(r.jsx)("div",{className:"col-1"}),Object(r.jsx)("div",{className:"col-auto",children:Object(r.jsx)("input",{className:"empty"===p?"form-control form-control-lg":"form-control form-control-lg is-invalid",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:j,onChange:function(e){b(e.target.value)}})}),Object(r.jsx)("div",{className:"col-1"})]})}),Object(r.jsxs)(T.a.Footer,{children:[Object(r.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:g,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){j.length>=3?(x(O({id:Object(u.c)(),name:j,persons:[],spendings:[]})),f("empty"),b(""),s(!1)):(f("error"),setTimeout((function(){f("empty")}),2e3))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})]})}function M(e){var n=e.id,t=e.name,c=e.persons,a=e.spendings,s=Object(d.b)();return Object(r.jsxs)("div",{className:"container",style:{marginTop:15},children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("p",{className:"h3",children:t})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col",children:Object(r.jsxs)("p",{className:"h6",children:["\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 ",Object(r.jsx)(C.a,{icon:S.b,color:"green",onClick:function(){s(f({id:n}))}})]})})}),Object(r.jsx)("div",{className:"row justify-content-center",children:c?c.map((function(e,n){return Object(r.jsx)(P,{name:e.name,drinksAlcohol:e.drinksAlcohol,eatMeat:e.eatMeat,id:e.id},e.id)})):""}),Object(r.jsx)("div",{className:"row",style:{marginTop:5},children:Object(r.jsx)("div",{className:"col",children:Object(r.jsxs)("p",{className:"h6",children:["\u0422\u0440\u0430\u0442\u044b ",Object(r.jsx)(C.a,{icon:S.b,color:"green",onClick:function(){s(x({id:n}))}})]})})}),Object(r.jsx)("div",{className:"row justify-content-center",children:a?a.map((function(e,n){return Object(r.jsx)(E,{amount:e.amount,type:e.type,id:e.id},e.id)})):""})]})}function P(e){var n=e.id,t=e.name,c=e.eatMeat,a=e.drinksAlcohol,s=Object(d.b)();return Object(r.jsx)("div",{className:"row align-content-center",children:Object(r.jsxs)("div",{className:"row justify-content-center",children:[Object(r.jsx)("div",{className:"col-md-12 col-lg-6",children:Object(r.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(r.jsx)("span",{className:"input-group-text",id:"name",children:Object(r.jsx)("i",{className:"bi bi-person-circle"})}),Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0418\u043c\u044f",value:t,onChange:function(e){s(g({id:n,name:e.target.value}))}})]})}),Object(r.jsxs)("div",{className:"col-md-12 col-lg-6 align-self-center",children:[Object(r.jsxs)("div",{className:"form-check form-check-inline",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",id:n+":alcoholCheckbox",checked:a,onChange:function(){s(v({id:n}))}}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:n+":alcoholCheckbox",children:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c"})]}),Object(r.jsxs)("div",{className:"form-check form-check-inline",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",id:n+":meatCheckbox",checked:c,onChange:function(){s(y({id:n}))}}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:n+":meatCheckbox",children:"\u041c\u044f\u0441\u043e"})]})]})]})})}function E(e){var n=e.id,t=e.amount,c=e.type,a=Object(d.b)();return Object(r.jsx)("div",{className:"row",style:{marginTop:5},children:Object(r.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(r.jsx)("input",{type:"number",className:"form-control",placeholder:"\u0421\u0443\u043c\u043c\u0430",value:t,onChange:function(e){a(N({id:n,amount:e.target.value}))}}),Object(r.jsxs)("select",{className:"form-select",value:c,onChange:function(e){a(k({id:n,type:e.target.value}))},children:[Object(r.jsx)("option",{value:"other",children:"\u0414\u0440\u0443\u0433\u043e\u0435"}),Object(r.jsx)("option",{value:"alcohol",children:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c"}),Object(r.jsx)("option",{value:"meat",children:"\u041c\u044f\u0441\u043e"})]})]})})}function B(){var e=Object(d.c)((function(e){return e.storage.groups})),n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],s=t[1],o=Object(d.b)();return Object(c.useEffect)((function(){e.length>=2&&s(!0)}),[e]),a?Object(r.jsx)("div",{className:"row align-content-center",style:{marginTop:10},children:Object(r.jsx)("button",{type:"button",className:"btn btn-success btn-lg",onClick:function(){fetch("/calculator/calculate-spendings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventName:"event",participants:e})}).then((function(e){if(e.ok)return e.json();console.error("error")})).then((function(e){o(w({data:e.payments}))})).catch((function(e){console.error(e)}))},children:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})}):Object(r.jsx)("div",{})}function F(){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1],s=Object(d.c)((function(e){return e.storage.payments}));return Object(c.useEffect)((function(){a(!!s)}),[s]),t?Object(r.jsx)("div",{className:"container",style:{marginTop:20},children:Object(r.jsx)("div",{className:"row",children:s.map((function(e,n){return Object(r.jsx)(J,{payer:e.payer,amount:e.amount,recepient:e.recepient})}))})}):Object(r.jsx)("div",{})}function J(e){return Object(r.jsx)("div",{className:"row align-content-center",children:Object(r.jsx)("div",{className:"col-md-12 justify-content-center",children:Object(r.jsxs)("p",{className:"h5 text-center",children:[e.payer,Object(r.jsx)(C.a,{icon:S.a,style:{marginLeft:30,marginRight:30}})," ",e.amount,Object(r.jsx)(C.a,{icon:S.c,size:"xs"})," ",Object(r.jsx)(C.a,{icon:S.a,style:{marginLeft:30,marginRight:30}}),e.recepient]})})})}function D(){var e=[{path:"/",element:Object(r.jsx)(G,{}),children:[{index:!0,element:Object(r.jsx)(A,{})}]}],n=Object(i.g)(e);return Object(r.jsx)("div",{children:n})}function G(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(o,{}),Object(r.jsx)(i.a,{})]})}t(51),t(52),t(73);var H=t(27),L=Object(u.a)({reducer:{storage:b.reducer}});s.a.render(Object(r.jsx)(d.a,{store:L,children:Object(r.jsx)(H.a,{children:Object(r.jsx)(D,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.67e5fd49.chunk.js.map