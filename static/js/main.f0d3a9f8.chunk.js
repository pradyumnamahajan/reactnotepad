(this.webpackJsonpprad=this.webpackJsonpprad||[]).push([[0],{35:function(e,t,a){e.exports=a(70)},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=(a(40),a(41),a(6)),o=a.n(i),s=a(9),u=a(10),m=a(11),d=a(14),h=a(12),p=a(15),f=(a(43),a(17)),v=a.n(f),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).changedis=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure?")){e.next=5;break}return a.setState({dis:"nope"}),e.next=4,v.a.delete("/api/".concat(a.props.id));case 4:e.sent;case 5:case"end":return e.stop()}}),e)}))),a.state={dis:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.body,n=this.state.dis;return r.a.createElement("div",{className:"".concat(n," card")},r.a.createElement("div",{className:"titleStyle"},t),r.a.createElement("div",{className:"bodyStyle"},a),r.a.createElement("div",null,r.a.createElement("i",{onClick:this.changedis,className:"fa fa-times delet","aria-hidden":"true"})))}}]),t}(n.Component),E=(a(61),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,a.setState({posts:t});case 7:case"end":return e.stop()}}),e)}))),a.state={posts:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.posts;return r.a.createElement("div",null,r.a.createElement("div",null,e.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,title:e.title,body:e.body})}))))}}]),t}(n.Component)),y=(a(62),a(13)),j=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"ulbox"},r.a.createElement("h1",null,"Notepad"),r.a.createElement("ul",{className:"ulstyle"},r.a.createElement(y.b,{to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(y.b,{to:"/add"},r.a.createElement("li",null,"Add")))))};var O=function(){return r.a.createElement("div",{className:"MainPage"},r.a.createElement(j,null),r.a.createElement(E,null))},g=a(34),w=(a(68),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{v.a.post("/api/",a.state).then(a.setState({formSubmitted:!0}))}catch(n){console.log(n)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={formSubmitted:!1,title:"",body:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body,n=e.formSubmitted,c=r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"textarea",name:"body",placeholder:"Body",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Send"}));return n&&(c=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",null,"Data Submitted"))),r.a.createElement("div",{className:"form-style-6"},r.a.createElement("h1",null,"Add Data"),r.a.createElement("form",{onSubmit:this.handleSubmit},c,r.a.createElement("br",null),r.a.createElement("a",{href:"/"},r.a.createElement("input",{type:"button",value:"Go Back"}))))}}]),t}(n.Component)),N=(a(69),function(){return r.a.createElement("div",{className:"AddPage"},r.a.createElement("div",{className:"Nav"},r.a.createElement(j,null)),r.a.createElement("div",{className:"align"},r.a.createElement("div",null),r.a.createElement(w,null)))}),k=a(7);var S=function(){return r.a.createElement(y.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k.a,{path:"/",exact:!0,component:O}),r.a.createElement(k.a,{path:"/add",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.f0d3a9f8.chunk.js.map