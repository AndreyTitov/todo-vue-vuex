(function(t){function e(e){for(var n,i,s=e[0],d=e[1],u=e[2],c=0,f=[];c<s.length;c++)i=s[c],r[i]&&f.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var d=o[s];0!==r[d]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"04a0":function(t,e,o){"use strict";var n=o("bb6a"),r=o.n(n);r.a},"0596":function(t,e,o){},1:function(t,e){},"190c":function(t,e,o){"use strict";var n=o("6b80"),r=o.n(n);r.a},2:function(t,e){},5452:function(t,e,o){"use strict";var n=o("0596"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);var n={};o.r(n),o.d(n,"getTodo",function(){return A});var r={};o.r(r),o.d(r,"addToDo",function(){return M}),o.d(r,"deleteToDo",function(){return H});var a={};o.r(a),o.d(a,"ADD_TO_DO",function(){return F}),o.d(a,"DELETE_TO_DO",function(){return J});o("cadf"),o("551c"),o("f751"),o("097d");var i=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddToDo"),o("ToDo")],1)},d=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-wrapper"},[o("h3",{staticClass:"header-title"},[t._v("\n        TODO\n    ")])])}],c={name:"Header"},f=c,p=(o("5452"),o("2877")),v=Object(p["a"])(f,u,l,!1,null,null,null),h=v.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add-wrapper"},[t._m(0),o("div",{staticClass:"add-todo-title-wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.toDoTitle,expression:"toDoTitle"}],staticClass:"add-todo-input",attrs:{type:"text",placeholder:"Todo Title"},domProps:{value:t.toDoTitle},on:{input:function(e){e.target.composing||(t.toDoTitle=e.target.value)}}})]),o("div",{staticClass:"add-todo-target-wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.toDoTarget,expression:"toDoTarget"}],staticClass:"add-todo-input",attrs:{type:"text",placeholder:"Todo Target"},domProps:{value:t.toDoTarget},on:{input:function(e){e.target.composing||(t.toDoTarget=e.target.value)}}})]),o("transition",{attrs:{name:"bounce"}},[t.showErr?o("div",{staticClass:"error-wrapper"},[o("p",{staticClass:"error"},[t._v("Fill on all the fields")])]):t._e()]),o("button",{staticClass:"add-button",on:{click:t.addToDo}},[t._v("Add ToDo")])],1)},D=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add-title-wrapper"},[o("h3",{staticClass:"add-title"},[t._v("Enter todo's title and target below")])])}],g=(o("6b54"),{name:"AddToDo",data:function(){return{id:0,toDoTitle:"",toDoTarget:"",date:"",showErr:!1}},methods:{addToDo:function(){var t=new Date,e=t.getFullYear(),o=t.getDate().toString(),n=t.getMonth()+1,r=t.getHours(),a=t.getMinutes(),i=t.getSeconds();i<10&&(i="0"+i),a<10&&(a="0"+a),n<10&&(n="0"+n),t<10&&(t="0"+t),r<10&&(r="0"+r),this.date=o+"/"+n+"/"+e+" "+r+":"+a+":"+i,""==this.toDoTitle?this.showErr=!0:""==this.toDoTarget?this.showErr=!0:(this.id+=1,this.$store.dispatch("addToDo",{id:this.id,title:this.toDoTitle,target:this.toDoTarget,date:this.date,done:!1}),this.toDoTitle="",this.toDoTarget="",this.showErr=!1)}}}),_=g,m=(o("04a0"),Object(p["a"])(_,T,D,!1,null,null,null)),b=m.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-wrapper"},[o("transition-group",{attrs:{name:"list"}},t._l(t.getToDo,function(e){return o("div",{key:e.id,staticClass:"todo"},[o("p",{staticClass:"date"},[t._v("Added: "+t._s(e.date))]),o("h3",{staticClass:"todo-title",class:{done:e.done}},[t._v(t._s(e.title)+" #"+t._s(e.id))]),o("p",{staticClass:"todo-target",class:{done:e.done}},[t._v(t._s(e.target))]),o("div",{staticClass:"todo-button-wrapper"},[o("button",{staticClass:"todo-button-done",class:{disableButton:e.done},on:{click:function(o){return t.doneToDo(e)}}},[t._v("Done")]),o("button",{staticClass:"todo-button-delete",on:{click:function(o){return t.deleteToDo(e)}}},[t._v("Delete")])])])}),0)],1)},O=[],C=(o("d485"),{name:"ToDo",data:function(){return{}},computed:{getToDo:function(){return this.$store.getters.getTodo}},methods:{doneToDo:function(t){t.done=!t.done},deleteToDo:function(t){this.$store.dispatch("deleteToDo",{id:t.id})}}}),y=C,E=(o("190c"),Object(p["a"])(y,w,O,!1,null,null,null)),x=E.exports,j={name:"app",components:{Header:h,AddToDo:b,ToDo:x}},$=j,P=(o("5c0b"),Object(p["a"])($,s,d,!1,null,null,null)),S=P.exports,k=o("2f62"),A=function(t){return t.todos},M=function(t,e){var o=t.commit;o("ADD_TO_DO",e)},H=function(t,e){var o=t.commit;o("DELETE_TO_DO",e)},F=function(t,e){t.todos.push(e)},J=function(t,e){t.todos=t.todos.filter(function(t){if(console.log(e.id),t.id!==e.id)return t})};i["a"].use(k["a"]);var L={todos:[]},N=new k["a"].Store({state:L,getters:n,actions:r,mutations:a});i["a"].config.productionTip=!1,new i["a"]({store:N,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),r=o.n(n);r.a},"5e27":function(t,e,o){},"6b80":function(t,e,o){},bb6a:function(t,e,o){}});
//# sourceMappingURL=app.12075829.js.map