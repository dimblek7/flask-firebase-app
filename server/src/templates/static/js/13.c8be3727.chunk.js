(this["webpackJsonppayference-fe"]=this["webpackJsonppayference-fe"]||[]).push([[13],{499:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(506);t.a=function(e){var t=e.isfullscreen;return r.a.createElement("div",{className:"card-body w-100 text-center pt-5 mt-5 ".concat(t&&"vh-100")},r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},503:function(e,t,a){},504:function(e,t,a){"use strict";var n=a(14),r=a(15),i=a(17),c=a(16),o=a(18),l=a(0),s=a.n(l),u=(a(4),a(147)),d=a.n(u),f=a(21),m=a.n(f),p=a(151),g=a.n(p),h=(a(233),function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).updateDates=function(e,t){a.setState({startDate:m()(e),endDate:m()(t),text:"".concat(m()(e).format("MMM DD, YYYY")," - ").concat(m()(t).format("MMM DD, YYYY"))})},a.getDates=function(e){var t=e.startDate,n=e.endDate,r=e.chosenLabel;a.setState({startDate:t,endDate:n,text:"".concat(m()(t).format("MMM DD, YYYY")," - ").concat(m()(n).format("MMM DD, YYYY"))},(function(){return a.props.getSelectedDates(a.state.startDate,a.state.endDate,r)}))};var r=m()(),o=m()().add(30,"days");return a.state={endDate:o,startDate:r,text:"",showDatePicker:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.startDate,a=e.endDate;this.updateDates(t,a)}},{key:"componentWillReceiveProps",value:function(e){var t=e.startDate,a=e.endDate;d()(e,this.props)||this.updateDates(t,a)}},{key:"render",value:function(){var e=this,t={Today:[m()(),m()()],"Next 7 Days":[m()(),m()().add(7,"days")],"Next 30 Days":[m()(),m()().add(30,"days")],"Past 7 Days":[m()().subtract(7,"days"),m()()],"Past 30 Days":[m()().subtract(30,"days"),m()()],"Past 90 Days":[m()().subtract(90,"days"),m()()],"Past 365 Days":[m()().subtract(365,"days"),m()()]},a=this.state,n=a.startDate,r=a.endDate,i=a.text,c=a.showDatePicker,o=this.props,l=o.parentEl;o.labelFormat;return s.a.createElement("div",{id:"datepicker-wrap"},c?s.a.createElement(g.a,{parentEl:l,startDate:n,endDate:r,ranges:t,width:"100",showDropdowns:!0,linkedCalendars:!1,format:"MMM DD, YYYY",onApply:function(t,a){e.setState({text:""},(function(){return e.getDates(a)}))},onBlur:function(){return e.setState({showDatePicker:!1})}},s.a.createElement("div",{id:"wrap-date",className:"rounded",style:{background:"#fff",cursor:"pointer",padding:"8px 10px",border:"1px solid #ccc"}},s.a.createElement("i",{id:"fa-calender-real",className:"fa fa-calendar real"}),"\xa0",s.a.createElement("span",null,i))):s.a.createElement("div",{id:"reportrange_view",className:"rounded",style:{background:"#fff",cursor:"pointer",padding:"8px 10px",border:"1px solid #ccc"},onClick:function(){e.setState({showDatePicker:!0},(function(){setTimeout((function(){document.getElementById("fa-calender-real").click()}),100)}))}},s.a.createElement("i",{className:"fa fa-calendar"}),"\xa0",s.a.createElement("span",null,i)))}}]),t}(l.Component));t.a=h},506:function(e,t,a){"use strict";var n=a(2),r=a(23),i=a(5),c=a.n(i),o=a(0),l=a.n(o),s=a(40),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,o=e.animation,u=e.size,d=e.children,f=e.as,m=void 0===f?"div":f,p=e.className,g=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),h=(a=Object(s.b)(a,"spinner"))+"-"+o;return l.a.createElement(m,Object(n.a)({ref:t},g,{className:c()(p,h,u&&h+"-"+u,i&&"text-"+i)}),d)}));u.displayName="Spinner",t.a=u},529:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:"w-100 h-100 d-flex justify-content-center"},r.a.createElement("div",{style:{height:320,width:320},className:"my-auto d-flex justify-content-center"},r.a.createElement("div",{className:"my-auto"},"No data available")))}},575:function(e,t,a){"use strict";var n=a(3),r=a(576),i=a(7),c=a(0),o=a.n(c),l=a(763),s={cursor:"grab"};t.a=function(e){var t=e.data,a=e.className,c=void 0===a?"":a,u=e.type,d=void 0===u?"ALL":u,f=e.children,m=Object(l.a)({item:{data:t,type:d},collect:function(e){return{isDropping:e.isDragging()}}}),p=Object(i.a)(m,2);Object(r.a)(p[0]);var g=p[1];return o.a.createElement("div",{ref:g,className:c,style:Object(n.a)({},s)},f)}},576:function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",(function(){return n}))},758:function(e,t,a){},759:function(e,t,a){var n=a(760),r=a(98);e.exports=function(e){return e&&e.length?n(e,r):0}},760:function(e,t){e.exports=function(e,t){for(var a,n=-1,r=e.length;++n<r;){var i=t(e[n]);void 0!==i&&(a=void 0===a?i:a+i)}return a}},763:function(e,t,a){"use strict";var n=a(0),r=a(8),i=a.n(r),c=a(170),o=a(62),l=a(169),s=a(138);function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=!1,f=!1,m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sourceId=null,this.internalMonitor=t.getMonitor()}var t,a,n;return t=e,(a=[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){i()(!d,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return d=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{d=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;i()(!f,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return f=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{f=!1}}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,t){return this.internalMonitor.isOverTarget(e,t)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}])&&u(t.prototype,a),n&&u(t,n),e}(),p=a(171),g=a(168),h=a(108),v=a.n(h);function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hooks=Object(p.a)({dragSource:function(e,t){a.clearDragSource(),a.dragSourceOptions=t||null,Object(g.a)(e)?a.dragSourceRef=e:a.dragSourceNode=e,a.reconnectDragSource()},dragPreview:function(e,t){a.clearDragPreview(),a.dragPreviewOptions=t||null,Object(g.a)(e)?a.dragPreviewRef=e:a.dragPreviewNode=e,a.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}var t,a,n;return t=e,(a=[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"reconnect",value:function(){this.reconnectDragSource(),this.reconnectDragPreview()}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();t&&this.disconnectDragSource(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)):this.lastConnectedDragSource=e)}},{key:"reconnectDragPreview",value:function(){var e=this.dragPreview,t=this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();this.handlerId?this.dragPreview&&t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=e,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.disconnectDragPreview(),this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,e,this.dragPreviewOptions)):this.disconnectDragPreview()}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!v()(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!v()(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}}])&&y(t.prototype,a),n&&y(t,n),e}();function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,i=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,i=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e){var t=Object(n.useRef)(e);t.current=e,i()(null!=e.item,"item must be defined"),i()(null!=e.item.type,"item type must be defined");var a=w(function(){var e=Object(s.a)();return[Object(n.useMemo)((function(){return new m(e)}),[e]),Object(n.useMemo)((function(){return new b(e.getBackend())}),[e])]}(),2),r=a[0],u=a[1];!function(e,t,a){var r=Object(s.a)(),c=Object(n.useMemo)((function(){return{beginDrag:function(){var a=e.current,n=a.begin,r=a.item;if(n){var c=n(t);return i()(null==c||"object"===E(c),"dragSpec.begin() must either return an object, undefined, or null"),c||r||{}}return r||{}},canDrag:function(){return"boolean"===typeof e.current.canDrag?e.current.canDrag:"function"!==typeof e.current.canDrag||e.current.canDrag(t)},isDragging:function(a,n){var r=e.current.isDragging;return r?r(t):n===a.getSourceId()},endDrag:function(){var n=e.current.end;n&&n(t.getItem(),t),a.reconnect()}}}),[]);Object(o.a)((function(){var n=D(Object(l.a)(e.current.item.type,c,r),2),i=n[0],o=n[1];return t.receiveHandlerId(i),a.receiveHandlerId(i),o}),[])}(t,r,u);var d=Object(c.a)(r,t.current.collect||function(){return{}},(function(){return u.reconnect()})),f=Object(n.useMemo)((function(){return u.hooks.dragSource()}),[u]),p=Object(n.useMemo)((function(){return u.hooks.dragPreview()}),[u]);return Object(o.a)((function(){u.dragSourceOptions=t.current.options||null,u.reconnect()}),[u]),Object(o.a)((function(){u.dragPreviewOptions=t.current.previewOptions||null,u.reconnect()}),[u]),[d,f,p]}a.d(t,"a",(function(){return S}))},778:function(e,t,a){"use strict";a.r(t);var n=a(7),r=(a(150),a(0)),i=a.n(r),c=a(12),o=a(66),l=(a(758),a(3)),s=a(6),u=(a(503),a(142)),d=a(27),f=a(20),m=a(13),p=a(10),g=a(4),h=a.n(g),v=a(21),y=a.n(v),b=a(145);function D(e,t,a){return[{id:"due_date",label:"Date*",typeid:f.a.Date,required:!0},{id:"total",label:"Amount*",typeid:f.a.Float,required:!0},{id:"entity",label:"Entity*",typeid:f.a.Select,options:t,required:!0},{id:"bank",label:"Bank Account*",typeid:f.a.Select,options:a,required:!0},{id:"period",label:"Period",typeid:f.a.Text},{id:"notes",label:"Notes",typeid:f.a.Text},{id:"salary",label:"Salary",typeid:f.a.Float},{id:"bonus",label:"Bonus",typeid:f.a.Float},{id:"tax",label:"Payroll tax",typeid:f.a.Float},{id:"benefits",label:"Benefits",typeid:f.a.Float},{id:"commission",label:"Commision",typeid:f.a.Float},{id:"misc",label:"Misc",typeid:f.a.Float}].map((function(t){return Object(l.a)({},d.a,{},t,{value:e[t.id]})}))}var E={entity:null,due_date:null,salary:"0",bonus:"0",tax:"",period:"",benefits:"0",commission:"0",total:"0",notes:" ",misc:"0",bank:""};var w=Object(c.b)((function(e){return{}}),{})((function(e){var t=e.history,a=e.selectedpayment,c=Object(r.useState)(""),o=Object(n.a)(c,2),d=(o[0],o[1]),f=Object(r.useState)(null),g=Object(n.a)(f,2),v=g[0],w=g[1],S=Object(r.useState)([]),O=Object(n.a)(S,2),k=(O[0],O[1],Object(r.useState)(null)),N=Object(n.a)(k,2),j=(N[0],N[1],Object(r.useState)(null)),P=Object(n.a)(j,2),C=P[0],M=P[1],Y=Object(r.useState)(null),x=Object(n.a)(Y,2),I=x[0],_=x[1];Object(r.useEffect)((function(){return window.scrollTo(0,0),s.a.get("/bankaccount").then((function(e){M(h()(e,"data.result",[]))})).catch((function(e){return Object(p.a)(e)})),s.a.get("/payroll/setting").then((function(e){_(h()(e,"data.result",[]).map((function(e){return Object(l.a)({},e,{id:e.name})})))})).catch((function(e){return Object(p.a)(e)})),function(){e.setselectedpayment(null)}}),[]),Object(r.useEffect)((function(){var e=t.location.pathname;(e=(e=e.split("/"))[2])&&"create"!==e?s.a.get("/payroll?id=".concat(e)).then((function(e){var t,a=Object(l.a)({},h()(e,"data.result[0]",{}),{bank:h()(e,"data.result[0].bank_account_id",""),due_date:(t=h()(e,"data.result[0].due_date",""),y()(t,"YYYY-MM-DD").format("YYYY-MM-DD"))});w(a),d(h()(e,"data.result[0].entity",""))})).catch((function(e){return Object(p.a)(e)})):w(a||E)}),[t,a]);var F=I&&h()(I.find((function(e){return e.id===h()(v,"entity","")})),"name","");return i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",null,i.a.createElement("div",{className:"titletranshist px-3",style:{fontSize:"18px",float:"left"}},i.a.createElement("span",{onClick:function(){return t.push("/payroll")},title:"Back"},i.a.createElement("i",{className:"fa fa-arrow-left",style:{color:"#ddd",marginRight:"5px",ariaHidden:!0,cursor:"pointer"}})),"\xa0"," ",h()(v,"id","")?"".concat(F,", ").concat(Object(b.b)(h()(v,"due_date",""))):"Add new")),i.a.createElement("div",{className:"col-md-12"},C&&I&&v&&i.a.createElement(u.a,{fields:D(v,I,C),numberOfColumns:3,formKey:"createPayroll"}),i.a.createElement("div",{className:"w-100"},i.a.createElement("button",{className:"btn btn-primary pull-right mt-3",onClick:function(){var e=Object(u.b)({formKey:"createPayroll"}),a=e.error,n=e.fields;if(!a){var r=function(e,t){var a=Object(l.a)({},t);return e.forEach((function(e){a[e.id]="due_date"===e.id&&e.value?y()(e.value,"YYYY-MM-DD").format("MM/DD/YYYY"):e.value})),a}(void 0===n?[]:n,v);r===v&&t.push("/payroll");r.salary,r.bonus,r.tax,r.benefits,r.commission,r.period,r.misc;var i=r.notes,c=(r.due_date,r.bank,r.id),o=void 0===c?"":c,d=(r.total,r.entity,{});if(Object.keys(E).forEach((function(e){"notes"===e?d.notes=i||"":(r[e]||"0"==r[e])&&(d[e]=r[e])})),console.log("updatedpostData: ",d),o&&"create"!==o){var f={records:[d]};s.a.put("/payroll?id=".concat(o),f).then((function(){localStorage.setItem("refresh_reports",!0),Object(m.a)("Saved successfully","success"),t.push("/payroll")})).catch((function(e){return Object(p.a)(e)}))}else{var g={records:[d]};s.a.put("/payroll",g).then((function(){localStorage.setItem("refresh_reports",!0),t.push("/payroll")})).catch((function(e){return Object(p.a)(e)}))}}}},"Save")))))})),S=a(14),O=a(15),k=a(17),N=a(16),j=a(43),P=a(18),C=a(39),M=a(504),Y=a(529),x=a(159),I=a(30),_=a(499),F=a(575),R=a(93),T=a(95),A=a.n(T),H=a(759),B=a.n(H),L=a(94),U=a(74),G=a(500),z=a(58),J=a(73),q=function(e){var t=e.cx,a=e.cy,n=e.innerRadius,r=e.outerRadius,c=e.startAngle,o=e.endAngle,l=e.fill;return i.a.createElement("g",null,i.a.createElement(G.o,{className:"cursour-pointer",cx:t,cy:a,innerRadius:n,outerRadius:r+5,startAngle:c,endAngle:o,fill:l}))},V=function(e){var t=e.data,a=e.onRecordClick,c=e.total,o=e.selectedPayroll,l=Object(r.useState)(null),s=Object(n.a)(l,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){(h()(o,"dataindex",null)||0===h()(o,"dataindex",null))&&d(h()(o,"dataindex",null))}),[o]),i.a.createElement(G.m,{width:320,height:320},i.a.createElement(G.l,{animationDuration:1e3,activeIndex:u,activeShape:q,data:t,innerRadius:60,outerRadius:140,fill:"#8884d8",dataKey:"value",onClick:function(e){a(e.payload.payload)},onMouseEnter:function(e,t){d(t)},onMouseLeave:function(e,t){d(h()(o,"dataindex",null))}},i.a.createElement(G.g,{className:"cursour-pointer",width:30,position:"center",onClick:function(){return a(null)}},"Total ".concat(Object(z.f)(c))),t.map((function(e,t){return i.a.createElement(G.e,{className:"cursour-pointer",fill:K[t%K.length]})}))))},K=["#2B7EF6","#7CA82D","#EF853A","#DB504D","#424348","#90ED7D","#3C861F","#F9D7E0"],W={Today:1,"Next 7 Days":7,"Next 30 Days":30,"Past 7 Days":7,"Past 30 Days":30};function Q(e,t){return e.map((function(e){return{Date:y()(h()(e,"due_date","")).format("YYYY/MM/DD"),Total:Object(z.b)(h()(e,"total",0)),Entity:h()(e,"entity",""),BankAccount:h()(t.find((function(t){return t.id===h()(e,"bank_account_id","-")})),"name",""),Note:h()(e,"notes","")}}))}var X="",Z=function(e){function t(){var e;return Object(S.a)(this,t),(e=Object(k.a)(this,Object(N.a)(t).call(this))).getallentities=function(){s.a.get("/payroll/setting").then((function(t){e.setState({allentities:h()(t,"data.result",[])},e.setpayrollGraphData)})).catch((function(e){return Object(p.a)(e)}))},e.getallbankaccounts=function(){s.a.get("/bankaccount").then((function(t){e.setState({allbankaccounts:h()(t,"data.result",[])})})).catch((function(e){return Object(p.a)(e)}))},e.setshowExport=function(t){e.setState({showexport:t})},e.setNextPage=function(){e.setState({currPage:e.state.currPage+1},e.filterData)},e.setPrevPage=function(){e.setState({currPage:1===e.state.currPage?1:e.state.currPage-1},e.filterData)},e.searchVendor=function(t,a){var n="apinvoice/search?per_page=100&".concat(a,"=").concat(t);t&&s.a.get(n).then((function(t){e.setState({supplierList:t.data.result})})).catch((function(e){}))},e.filterData=function(){e.setState({showFilter:!1});var t=e.state,a=t.startDate,n=t.endDate,r=t.vendorCategory,i=t.status,c=t.currPage,o=t.dateType,l=t.vendorSelect,s=t.invoiceSelect,u=t.selectedEntity,d=(t.payrollGraphData,"payroll?page=".concat(c)),f={currPage:c};a&&n&&(f.startDate=a,f.endDate=n,d+="&from_date='".concat(a,"'&to_date='").concat(n,"'")),u&&(f.selectedEntity=u,d+="&entity=".concat(u)),i&&(d+="&status='".concat(i,"'")),r&&(d+="&category='".concat(r,"'")),o&&(d+="&date_type=".concat(o)),l&&(d+="&supplier_id=".concat(l.id)),s&&(d+="&invoice_id=".concat(s.invoice_number)),localStorage.setItem("payrollFilters",JSON.stringify(f)),e.getData(d==="payroll?page=".concat(c)?"":d)},e.getData=function(t){var a=e.state,n=a.endDate,r=a.startDate,i=a.currPage,c=t||"payroll?page=".concat(i,"&from_date='").concat(r,"'&to_date='").concat(n,"'");e.setState({rows:[],originalRows:[],isFetching:!0}),s.a.get(c).then((function(t){e.setState({isFetching:!1,isFetchingOriginal:!1});var a=t.data.result;e.setState({rows:a,originalRows:a,showFilter:!1},(function(){return e.setpayrollGraphData()}))})).catch((function(t){e.setState({isFetching:!1,showFilter:!1}),t&&Object(p.a)(t)}))},e.setpayrollGraphData=function(){var t=e.state,a=t.endDate,n=t.startDate,r=t.allentities,i=r.map((function(e){return"payroll/total?from_date='".concat(n,"'&to_date='").concat(a,"'&entity=").concat(e.name)}));X!==i[0]&&i[0]&&(X=i[0],Promise.all(i.map((function(e){return s.a.get(e)}))).then((function(t){var a=t.map((function(e){return e.data.total})),n=r.map((function(e,t){return{name:e.name,value:a[t],dataindex:t}})).filter((function(e){return e.value})).map((function(e,t){return Object(l.a)({},e,{dataindex:t})}));e.setState({payrollGraphData:n,chartdatareceived:!0})})))},e.setshowFilter=function(t){e.setState({showFilter:t})},e.onReset=function(){document.getElementById("filter-form").reset(),e.setState({endDate:y()().add(30,"days").format("MM/DD/YYYY"),startDate:y()().format("MM/DD/YYYY"),vendorCategory:"",sentiment:"",status:"all",selectedSupplier:"",dateType:"",vendorSelect:null,currPage:1,supplierList:[],invoiceSelect:null,selectedEntity:""},(function(){localStorage.removeItem("payrollFilters"),e.getData()}))},e.setDates=function(t,a,n){e.setState({startDate:y()(t).format("MM/DD/YYYY"),endDate:y()(a).format("MM/DD/YYYY"),interval:W[n||30],showFilter:!0})},e.onClone=function(t){t.id="create",t.due_date=y()(t.due_date,"YYYY-MM-DD").format("YYYY-MM-DD"),t.notes="Copy of - ".concat(t.entity),t.bank=t.bank_account_id,e.props.changeSelection(t)},e.onDelete=function(t){s.a.put("payroll/delete?id=".concat(t),{}).then((function(t){e.getData()})).catch((function(e){}))},e.debounceMethod=A()(e.searchVendor.bind(Object(j.a)(e)),500),e.handleAddClick=e.handleAddClick.bind(Object(j.a)(e)),e.state={rows:[],originalRows:[],showFilter:!1,showexport:!1,currPage:1,isFetching:!0,isFetchingOriginal:!0,supplierList:[],endDate:y()().add(30,"days").format("MM/DD/YYYY"),startDate:y()().format("MM/DD/YYYY"),interval:30,vendorCategory:"",sentiment:"",status:"",selectedSupplier:"",dateType:"",vendorSelect:null,invoiceSelect:null,payrollGraphData:[],allbankaccounts:[],allentities:[],selectedEntity:""},e.filters=JSON.parse(localStorage.getItem("payrollFilters")),e}return Object(P.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("payrollFilters"));t?this.setState(Object(l.a)({},t),(function(){return e.filterData()})):this.getData(),this.getallbankaccounts(),this.getallentities(),window.scrollTo(0,0)}},{key:"handleAddClick",value:function(){this.props.history.push("payroll/create")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",(function(){})),X=""}},{key:"render",value:function(){var e=this,t=this.state,a=t.rows,n=t.showFilter,r=t.showexport,c=t.currPage,o=t.isFetching,l=t.startDate,s=t.endDate,u=t.payrollGraphData,d=t.selectedEntity,f=t.allbankaccounts,m=void 0===f?[]:f,p=t.allentities,g=void 0===p?[]:p,v=t.isFetchingOriginal,D=t.chartdatareceived,E=[{Header:function(){return i.a.createElement("span",null,"Date",i.a.createElement("span",{className:"sort-icons"},i.a.createElement("i",{className:"fas fa-caret-up"}),i.a.createElement("i",{className:"fas fa-caret-down"})))},accessor:"due_date",width:140,Cell:function(e,t){return i.a.createElement(F.a,{className:"ml-3 pt-2"},i.a.createElement("span",null,Object(b.b)(h()(e,"original.due_date",""))))}},{Header:function(){return i.a.createElement("span",null,"Amount",i.a.createElement("span",{className:"sort-icons"},i.a.createElement("i",{className:"fas fa-caret-up"}),i.a.createElement("i",{className:"fas fa-caret-down"})))},accessor:"total",width:100,className:"text-right pr-2",Cell:function(e){return i.a.createElement(F.a,{className:"pt-2"},i.a.createElement("span",null,Object(z.c)(h()(e,"original.total",""))))}},{Header:function(){return i.a.createElement("span",null,"Entity",i.a.createElement("span",{className:"sort-icons"},i.a.createElement("i",{className:"fas fa-caret-up"}),i.a.createElement("i",{className:"fas fa-caret-down"})))},accessor:"invoice_number",Cell:function(e){var t=h()(e,"original.entity","");return i.a.createElement(F.a,{className:"pt-2"},i.a.createElement("span",null,t))}},{Header:function(){return i.a.createElement("span",null,"Bank Acc",i.a.createElement("span",{className:"sort-icons"},i.a.createElement("i",{className:"fas fa-caret-up"}),i.a.createElement("i",{className:"fas fa-caret-down"})))},accessor:"bank_account_id",Cell:function(e){var t=m.find((function(t){return t.id===h()(e,"original.bank_account_id","-")})),a=h()(t,"name","-");return i.a.createElement(F.a,{className:"pt-2"},i.a.createElement("span",null,a))}},{Header:function(){return i.a.createElement("span",null,"Note",i.a.createElement("span",{className:"sort-icons"},i.a.createElement("i",{className:"fas fa-caret-up"}),i.a.createElement("i",{className:"fas fa-caret-down"})))},accessor:"updatedNotes",Cell:function(e){return i.a.createElement(F.a,{className:"pt-2"},i.a.createElement("span",null,h()(e,"original.notes","")))}},{Header:function(){return i.a.createElement("span",{className:"ml-2"})},accessor:"",width:100,className:"overflow-unset",Cell:function(t){return i.a.createElement("span",null,i.a.createElement("button",{title:"Clone",className:"btn",onClick:function(a){a.stopPropagation(),e.onClone(h()(t,"original",""))}},i.a.createElement("i",{className:"fa fa-clone color-blue"}))," ","|",i.a.createElement("button",{title:"Delete",className:"btn",onClick:function(a){a.stopPropagation(),Object(I.c)({variant:"warning",msg:"Are you sure you want to delete this record?",onSave:function(){Object(I.b)(),e.onDelete(h()(t,"original.id",""))}})}},i.a.createElement("i",{className:"fa fa-trash-o color-blue"})))}}],w=u.map((function(e){return e.value}));w=w.reduce((function(e,t){return e+t}),0);var S=a,O=u.find((function(e){return e.name===d}));return i.a.createElement(x.a,null,i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h5",null,"Payroll"))),v?i.a.createElement(_.a,{isfullscreen:!0}):i.a.createElement("div",null,i.a.createElement("div",{className:"colorwireframe"},i.a.createElement("div",{className:"row"},D?w?i.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},i.a.createElement("div",null,i.a.createElement(V,{onRecordClick:function(t){e.setState({selectedEntity:t.name,currPage:1},e.filterData)},data:u,total:B()(u.map((function(e){return e.value}))),selectedPayroll:O})),i.a.createElement("div",{className:"hide-scroll",style:{height:300,marginLeft:50,overflowY:"auto"}},i.a.createElement("div",{className:"mt-4"},u&&u.map((function(t,a){return i.a.createElement("div",{className:"col-md-12 p-2 cursour-pointer",onClick:function(){e.setState({selectedEntity:t.name,currPage:1},e.filterData)}},i.a.createElement("span",{className:"ml-2 mr-2 donutchart-legend-dot",style:{backgroundColor:"".concat(h()(t,"line-color",K[a%8]))}}),i.a.createElement("span",null,h()(t,"name","-"),"\xa0(",Object(z.c)(t.value),")"))}))))):i.a.createElement(Y.a,null):i.a.createElement("div",{className:"w-100",style:{height:300}},i.a.createElement(_.a,null)))),i.a.createElement("div",{className:"row mb-4 mt-2"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"dropdown pull-left",style:{margin:"0px"}},i.a.createElement("span",{className:"btn dropdown-toggle btn-primary","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return e.setshowFilter(!0)}},i.a.createElement("i",{className:"fa fa-sliders","aria-hidden":"true"}),"\xa0 Filter"),i.a.createElement("form",{id:"filter-form"},i.a.createElement(C.a,{onClickAway:this.setshowFilter},i.a.createElement("div",{id:"outerside",className:"dropdown-menu filterdroplist p-2 ".concat(n?"show":""),"aria-labelledby":"dropdownMenuLink"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("label",{className:""},"Entity name"),i.a.createElement("select",{style:{width:200},id:"myThinSelect",className:"custom-select-thin",onChange:function(t){e.setState({selectedEntity:t.target.value})},value:h()(this.state,"selectedEntity",""),placeholder:"select"},i.a.createElement("option",{value:""},"All entities"),g&&g.map((function(e){return i.a.createElement("option",{value:e.name},e.name)})))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Date"),i.a.createElement("div",{style:{fontSize:12,overflow:"hidden"}},i.a.createElement("div",{className:"pull-left"},i.a.createElement(M.a,{startDate:y()(l),endDate:y()(s),getSelectedDates:this.setDates,labelFormat:"MMM DD, YYYY",parentEl:"#outerside"})))),i.a.createElement("div",{className:"setbtn"},i.a.createElement("button",{type:"button",className:"btn resetbtn btn-light",onClick:this.onReset},"Reset"),i.a.createElement("button",{type:"button",className:"btn applybtn btn-primary",onClick:function(){return e.setState({currPage:1},e.filterData)}},"Submit")))))))),i.a.createElement("button",{onClick:this.handleAddClick,className:"btn btn-primary ml-3",id:"hidetable","data-toggle":"modal"},"Add New")),i.a.createElement("div",{className:"col-md-6",style:{textAlign:"right"}},i.a.createElement("div",{className:"dropdown"},i.a.createElement("span",{className:"btn dropdown-toggle btn-primary",role:"button",id:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return e.setshowExport(!0)}},"Export"),i.a.createElement(C.a,{onClickAway:this.setshowExport},i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right payexpdroplist ".concat(r&&"show"),"aria-labelledby":"dropdownMenuLink",id:""},i.a.createElement(L.CSVLink,{data:Q(a,m),filename:"payroll_".concat(y()().format("MMMM Do YYYY-h:mm:ss-a"),".csv")},"Export CSV"),i.a.createElement("span",{style:{fontSize:12,float:"right",marginRight:"10px",cursor:"pointer"},onClick:function(){return function(e){var t="payroll".concat(y()().format("MMMM Do YYYY-h:mm:ss-a"),".xlsx"),a={Sheets:{data:J.utils.json_to_sheet(e)},SheetNames:["data"]},n=J.write(a,{bookType:"xlsx",type:"array"}),r=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});R.saveAs(r,t)}(Q(a,m))}},"Export Excel")))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(U.a,{noDataText:o?"":"No data found",minRows:S.length>20?20:S.length,loading:o,sortable:!0,resizable:!0,showPagination:!1,defaultSorted:[{id:"due_date",desc:!0}],getTrProps:function(t,a,n){return{onClick:function(t){return e.props.changeSelection(a.original)}}},columns:E,data:S}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"filterthree"},i.a.createElement("div",{className:"pull-right"},i.a.createElement("button",{className:"btn btn-primary mr-2 width-94px",disabled:1===c,onClick:this.setPrevPage},"Previous"),i.a.createElement("button",{disabled:20!==a.length,className:"btn btn-primary width-94px",onClick:this.setNextPage},"Next")))))))}}]),t}(i.a.Component),$=Object(c.b)((function(e){return{login:e.payables}}),{})(Z);t.default=Object(o.g)(Object(c.b)((function(e){return{login:e.payables}}),{})((function(e){document.title="Payroll - Payference";var t=e.history,a=e.match,c=Object(r.useState)(null),l=Object(n.a)(c,2),s=l[0],u=l[1];function d(e){u(e),t.push("payroll/".concat(e.id))}return i.a.createElement("div",null,i.a.createElement("div",{className:"row px-15",id:"dashboardBody"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement(o.d,null,i.a.createElement(o.b,{path:"".concat(a.path,"/create"),component:function(){return i.a.createElement(w,Object.assign({},e,{selectedpayment:s,setselectedpayment:u}))}}),i.a.createElement(o.b,{path:"".concat(a.path,"/:payrollid"),component:function(){return i.a.createElement(w,Object.assign({},e,{selectedpayment:s,setselectedpayment:u}))}}),i.a.createElement(o.b,{path:"".concat(a.path),component:function(){return i.a.createElement($,Object.assign({},e,{changeSelection:d}))}}))))))})))}}]);
//# sourceMappingURL=13.c8be3727.chunk.js.map