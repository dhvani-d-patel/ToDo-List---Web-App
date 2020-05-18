(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),s=(a(14),a(2)),i=a(3),o=a(5),u=a(4),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.call(this)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"page-container text-center"},c.a.createElement("header",null,c.a.createElement("h1",null,"Welcome to the ToDo List Web App  ",c.a.createElement("ion-icon",{name:"receipt-outline",fontSize:"64px"})),c.a.createElement("p",{className:"lead"},"Track your tasks for the day with ease...")))}}]),a}(c.a.Component),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.call(this)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("footer",{className:"container text-center"},c.a.createElement("h4",null,"Dream Big Everyday.",c.a.createElement("ion-icon",{name:"rocket-outline",size:"large"})))}}]),a}(c.a.Component),k=a(8),h=a(1);var p=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{id:"list-item",className:"container",key:"item.key"},c.a.createElement("input",{type:"checkbox",checked:e.task.completed,onChange:function(){return e.handleChange(e.task.key)}}),c.a.createElement("input",{type:"text",id:e.task.key,value:e.task.text,style:e.task.completed?{border:0,backgroundColor:"transparent",fontStyle:"italic",color:"#cccccc",textDecoration:"line-through"}:{border:0,backgroundColor:"transparent"},onChange:function(t){e.setUpdate(t.target.value,e.task.key)}}),c.a.createElement("span",{style:{position:"absolute",right:"10px"}}," ",c.a.createElement("ion-icon",{name:"close-circle-outline",fontSize:"100px",onClick:function(){return e.deleteTask(e.task.key)}},"Icon"))))},b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={tasks:[],currentTask:{text:"",key:"",completed:!1}},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.addTask=n.addTask.bind(Object(h.a)(n)),n.handleCompleted=n.handleCompleted.bind(Object(h.a)(n)),n.deleteTask=n.deleteTask.bind(Object(h.a)(n)),n.setUpdate=n.setUpdate.bind(Object(h.a)(n)),n.clearAll=n.clearAll.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({currentTask:{text:e.target.value,key:Date.now(),completed:!1}})}},{key:"addTask",value:function(e){e.preventDefault();var t=this.state.currentTask;if(""!==t.text){var a=[].concat(Object(k.a)(this.state.tasks),[t]);this.setState({tasks:a,currentTask:{text:"",key:"",completed:!1}})}}},{key:"handleCompleted",value:function(e){var t=this;this.setState((function(a){return{tasks:t.state.tasks.map((function(t){return t.key===e&&(t.completed=!t.completed),t}))}}))}},{key:"deleteTask",value:function(e){var t=this.state.tasks.filter((function(t){return t.key!==e}));this.setState({tasks:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.tasks;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({tasks:a})}},{key:"clearAll",value:function(){this.setState({tasks:[]})}},{key:"render",value:function(){var e=this,t=this.state.tasks.map((function(t){return c.a.createElement(p,{key:t.key,task:t,handleChange:e.handleCompleted,deleteTask:e.deleteTask,setUpdate:e.setUpdate})}));return c.a.createElement("div",{className:"container h-100",id:"MainBox"},c.a.createElement("form",{onSubmit:this.addTask},c.a.createElement("div",{className:"form-inline"},c.a.createElement("div",{className:"form-group mx-sm-4 mb-4"},c.a.createElement("input",{type:"text",placeholder:"Enter a task",className:"form-control",size:"50",value:this.state.currentTask.text,onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:"btn btn-dark mb-4 mx-sm-4"}," Add "),this.state.tasks.length>0?c.a.createElement("button",{type:"reset",className:"btn btn-danger mb-4",onClick:this.clearAll},"Clear All"):null)),t)}}]),a}(c.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(m,null),c.a.createElement(b,null),c.a.createElement(d,null))}}]),a}(c.a.Component);l.a.render(c.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1eddbe5b.chunk.js.map