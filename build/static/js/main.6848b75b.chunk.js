(this["webpackJsonpchatbot-frontend"]=this["webpackJsonpchatbot-frontend"]||[]).push([[0],{47:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},53:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),i=a.n(r),o=(a(52),a(53),a(16)),c=a(9),m=a(17),l=a(18),u=a(22),h=a(103),d=a(38),g=a.n(d),f=a(105),p=a(104),b=a(100),v=a(101),E=a(102),O=a(98),k=Object(O.a)((function(e){return{card:{maxHeight:"3.8em",alignContent:"center",justifyContent:"center",background:"#365a9e"},title:{color:"white",align:"center",fontSize:"1.3em"}}}));var y=function(e){var t=k();return s.a.createElement(b.a,{className:t.card},s.a.createElement(v.a,null,s.a.createElement(E.a,{align:"center",className:t.title,color:"textPrimary",gutterBottom:!0},e&&e.title?e.title:"TITLE NOT SPECIFIED")))},j=a(81),w=Object(O.a)({cardbot:{maxWidth:"65%",background:"#e0f7a8",marginBottom:"0.7em"},carduser:{maxWidth:"65%",background:"#c2d7ff",marginBottom:"0.7em"},sender:{fontSize:"0.5em",marginTop:"-1em",marginLeft:"-0.6em"},message:{fontSize:"0.7em"},timestamp:{color:"textSecondary",fontSize:"0.5em",marginBottom:"-1.8em",marginRight:"-0.5em"}});var x=function(e){var t=w(),a=e.sender&&"BOT"===e.sender;return s.a.createElement("div",{align:a?"left":"right"},s.a.createElement(b.a,{className:a?t.cardbot:t.carduser},s.a.createElement(v.a,null,s.a.createElement(E.a,{align:"left",className:t.sender,color:"textSecondary",gutterBottom:!0},e.sender),s.a.createElement(E.a,{align:"center",className:t.message,variant:"h5",component:"h2"},e.message),s.a.createElement(E.a,{align:"right",className:t.timestamp,color:"textSecondary"},e.timestamp))))},B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement(b.a,{className:t.card},s.a.createElement(v.a,null,this.props.entries.map((function(e,t){return s.a.createElement(x,{key:"div_"+t,message:e.message,sender:e.sender,timestamp:e.timestamp})})),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})))}}]),t}(s.a.Component),S=Object(j.a)((function(){return{card:{minHeight:"30em",maxHeight:"30em",height:"100%",width:"100%",overflow:"auto",background:"#fcfcfc"}}}))(B),T=a(79),N=a(107),C=a(106),D=a(39),I=a.n(D),M=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(T.a,{onSubmit:this.props.submitMessage,width:"100%",component:"form",className:e.root},s.a.createElement(N.a,{onChange:this.props.textHandler,className:e.input,placeholder:"Deine Nachricht",value:this.props.message}),s.a.createElement(h.a,{className:e.divider,orientation:"vertical"}),s.a.createElement(C.a,{onClick:this.props.submitMessage,className:e.iconButton,"aria-label":"Versenden"},s.a.createElement(I.a,null)))}}]),t}(s.a.Component),H=Object(j.a)((function(){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",background:"#fcfcfc"},input:{marginLeft:"0.8em",flex:1},iconButton:{padding:10,background:"#edf8ff"},divider:{height:28,margin:4}}}))(M),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={messages:[],message:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleMessage",value:function(e){e.preventDefault(),this.setState({message:e.target.value})}},{key:"getTimestamp",value:function(){var e=new Date;return("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),""!==this.state.message){var a=this.state.messages,n={sender:"YOU",message:this.state.message,timestamp:this.getTimestamp()};a.push(n),this.setState({messages:a,message:""}),g()({method:"post",url:"http://localhost:5005/webhooks/rest/webhook",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){var a=t.state.messages;e.data.forEach((function(e){var n={sender:"BOT",message:e.text,timestamp:t.getTimestamp()};a.push(n)})),t.setState(a)}))}}},{key:"render",value:function(){return s.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center"},s.a.createElement(p.a,{item:!0},s.a.createElement(f.a,{width:"25em",marginTop:"3em"},s.a.createElement(y,{title:"3BIT Dev Chatbot"}),s.a.createElement(S,{entries:this.state.messages}),s.a.createElement(h.a,{light:!0}),s.a.createElement(H,{message:this.state.message,textHandler:this.handleMessage.bind(this),submitMessage:this.handleSubmit.bind(this)}))))}}]),t}(s.a.Component);var W=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.6848b75b.chunk.js.map