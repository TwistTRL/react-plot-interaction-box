(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,t){e.exports=t(49)},41:function(e,n,t){},42:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var i,l,a,o,r,c,s,u,d=t(12),m=t(3),h=t(4),g=t(6),p=t(5),E=t(7),v=t(0),b=t.n(v),C=t(24),O=t.n(C),f=t(17),X=t(13),D=t(18),S=t.n(D),j=t(11),Y=t(1),k=(t(41),function(e){function n(){var e,t;Object(m.a)(this,n);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return(t=Object(g.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(l)))).handleMouseMove=function(e){e.preventDefault(),e.stopPropagation(),(0,t.props.mouseMoveHandler)(e)},t.handleMouseUp=function(e){e.preventDefault(),e.stopPropagation(),(0,t.props.mouseUpHandler)(e)},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props.cursor;return b.a.createElement("div",{className:"fullscreen",style:{cursor:e}})}},{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.handleMouseMove,!0),document.addEventListener("mouseup",this.handleMouseUp,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.handleMouseMove,!0),document.removeEventListener("mouseup",this.handleMouseUp,!0)}},{key:"ignoreScroll",value:function(e){e.preventDefault(),e.stopPropagation()}}]),n}(v.PureComponent)),M=function(e){function n(){return Object(m.a)(this,n),Object(g.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return null}},{key:"componentDidMount",value:function(){var e=this.props,n=e.timeout,t=e.callback;this.timeout=setTimeout(t,n)}},{key:"componentDidUpdate",value:function(){clearTimeout(this.timeout);var e=this.props,n=e.timeout,t=e.callback;this.timeout=setTimeout(t,n)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}}]),n}(v.PureComponent),P="hovering",H="mouseDown",T="mouseMove",_="mouseUp",I="timeout",N=(a={},Object(Y.a)(a,P,Object(Y.a)({},H,"clicking")),Object(Y.a)(a,"clicking",(i={},Object(Y.a)(i,I,"autoSelecting"),Object(Y.a)(i,T,"selecting"),Object(Y.a)(i,_,P),i)),Object(Y.a)(a,"autoSelecting",(l={},Object(Y.a)(l,I,"panning"),Object(Y.a)(l,T,"selecting"),l)),Object(Y.a)(a,"selecting",Object(Y.a)({},_,P)),Object(Y.a)(a,"panning",Object(Y.a)({},_,P)),a),w=(r={},Object(Y.a)(r,P,Object(Y.a)({},H,"clicking")),Object(Y.a)(r,"clicking",(o={},Object(Y.a)(o,I,"selecting"),Object(Y.a)(o,T,"selecting"),Object(Y.a)(o,_,P),o)),Object(Y.a)(r,"selecting",Object(Y.a)({},_,P)),r),y=(s={},Object(Y.a)(s,P,Object(Y.a)({},H,"clicking")),Object(Y.a)(s,"clicking",(c={},Object(Y.a)(c,I,"panning"),Object(Y.a)(c,T,"panning"),Object(Y.a)(c,_,P),c)),Object(Y.a)(s,"panning",Object(Y.a)({},_,P)),s),A=(u={},Object(Y.a)(u,P,Object(Y.a)({},H,"clicking")),Object(Y.a)(u,"clicking",Object(Y.a)({},_,P)),u),R=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(g.a)(this,Object(p.a)(n).call(this,e))).handleMouseMove_Hovering=function(e){(0,t.props.hoveringHandler)(t.getCustomEventObject(e))},t.handleMouseOut_Hovering=function(e){(0,t.props.hoverEndHandler)()},t.handleMouseDown_Hovering=function(e){var n=t.props.hoverEndHandler;e.preventDefault();var i=t.getCustomEventObject(e);t.initialMouseDownPosition=i,n(),t.transition(H)},t.clickTimeout=function(){t.transition(I)},t.autoSelectingTimeout=function(){t.transition(I)},t.handleMouseMove_Clicking=function(e){var n=Object(j.a)(t).initialMouseDownPosition,i=t.getCustomEventObject(e);Math.abs(i.domX-n.domX)<10||Math.abs(i.domY-n.domX)<10||t.transition(T)},t.handleMouseUp_Clicking=function(e){var n=t.props,i=n.clickHandler,l=n.doubleClickHandler,a=Object(j.a)(t).prevClickTimeStamp,o=t.getCustomEventObject(e);null===a||a+200<e.timeStamp?(t.prevClickTimeStamp=e.timeStamp,i(o)):(t.prevClickTimeStamp=null,l(o)),t.transition(_)},t.handleMouseMove_AutoSelecting=function(e){var n=t.props.selectingHandler,i=Object(j.a)(t).initialMouseDownPosition,l=t.getCustomEventObject(e);Math.abs(l.domX-i.domX)<10||Math.abs(l.domY-i.domX)<10||(n({start:i,end:l}),t.transition(T))},t.handleMouseUp_AutoSelecting=function(e){t.transition(_)},t.handleMouseMove_Selecting=function(e){(0,t.props.selectingHandler)({start:Object(j.a)(t).initialMouseDownPosition,end:t.getCustomEventObject(e)})},t.handleMouseUp_Selecting=function(e){(0,t.props.selectedHandler)({start:Object(j.a)(t).initialMouseDownPosition,end:t.getCustomEventObject(e)}),t.transition(_)},t.handleMouseMove_Panning=function(e){(0,t.props.panningHandler)({start:Object(j.a)(t).initialMouseDownPosition,end:t.getCustomEventObject(e)})},t.handleMouseUp_Panning=function(e){(0,t.props.pannedHandler)({start:Object(j.a)(t).initialMouseDownPosition,end:t.getCustomEventObject(e)}),t.transition(_)},t.state={mode:P},t.ref=b.a.createRef(),t.initialMouseDownPosition=null,t.prevClickTimeStamp=null,t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props,n=e.width,t=e.height,i=e.children,l={width:n,height:t};switch(this.state.mode){case P:return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{ref:this.ref,style:l,onMouseMove:this.handleMouseMove_Hovering,onMouseOut:this.handleMouseOut_Hovering,onMouseDown:this.handleMouseDown_Hovering},i));case"clicking":return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{ref:this.ref,style:l},i),b.a.createElement(k,{mouseMoveHandler:this.handleMouseMove_Clicking,mouseUpHandler:this.handleMouseUp_Clicking,cursor:"point"}),b.a.createElement(M,{timeout:200,callback:this.clickTimeout}));case"autoSelecting":return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{ref:this.ref,style:l},i),b.a.createElement(k,{mouseMoveHandler:this.handleMouseMove_AutoSelecting,mouseUpHandler:this.handleMouseUp_AutoSelecting,cursor:"nesw-resize"}),b.a.createElement(M,{timeout:500,callback:this.autoSelectingTimeout}));case"selecting":return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{ref:this.ref,style:l},i),b.a.createElement(k,{mouseMoveHandler:this.handleMouseMove_Selecting,mouseUpHandler:this.handleMouseUp_Selecting,cursor:"nesw-resize"}));case"panning":return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{ref:this.ref,style:l},i),b.a.createElement(k,{mouseMoveHandler:this.handleMouseMove_Panning,mouseUpHandler:this.handleMouseUp_Panning,cursor:"grabbing"}));default:throw new Error("ProgrammerTooDumbError")}}},{key:"transition",value:function(e){var n=this.props.transitionGraph[this.state.mode][e];n&&this.setState({mode:n})}},{key:"getCustomEventObject",value:function(e){var n=this.ref.current.getBoundingClientRect(),t=n.left,i=n.top,l=e.clientX,a=e.clientY;return{domX:l-t,domY:a-i,clientX:l,clientY:a}}}]),n}(v.PureComponent),L=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(g.a)(this,Object(p.a)(n).call(this,e))).handleHovering=function(e){t.setState({hoveringPosition:e})},t.handleHoverEnd=function(){t.setState({hoveringPosition:null})},t.handleClick=function(e){t.setState({clickPosition:e})},t.handleDoubleClick=function(e){t.setState({doubleClickPosition:e})},t.handleSelecting=function(e){t.setState({selectingPositions:e})},t.handleSelected=function(e){t.setState({selectedPositions:e,selectingPositions:null})},t.handlePanning=function(e){t.setState({panningPositions:e})},t.handlePanned=function(e){t.setState({pannedPositions:e,panningPositions:null})},t.state={hoveringPosition:null,clickPosition:null,doubleClickPosition:null,selectingPositions:null,selectedPositions:null,panningPositions:null,pannedPositions:null},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props,n=e.render,t=e.width,i=e.height,l=e.transitionGraph;return b.a.createElement(R,{width:t,height:i,transitionGraph:l,hoveringHandler:this.handleHovering,hoverEndHandler:this.handleHoverEnd,clickHandler:this.handleClick,doubleClickHandler:this.handleDoubleClick,selectingHandler:this.handleSelecting,selectedHandler:this.handleSelected,panningHandler:this.handlePanning,pannedHandler:this.handlePanned},n(this.state))}}]),n}(v.Component),G=t(16),U=(v.PureComponent,function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(g.a)(this,Object(p.a)(n).call(this,e))).lastData=null,t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props,n=e.data,t=e.updateHandler;return n===this.lastData||(this.lastData=n,t(n)),null}}]),n}(v.Component)),x=(t(42),{INTERACTION_MODEL_DEFAULT:N,INTERACTION_MODEL_SELECTING:w,INTERACTION_MODEL_PANNING:y,INTERACTION_MODEL_BARE:A}),B=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(g.a)(this,Object(p.a)(n).call(this,e))).state={width:1e3,height:400,transitionGraph_:"INTERACTION_MODEL_BARE",interactions:{hoveringDomX:null,hoveringDomY:null,hoveringClientX:null,hoveringClientY:null,panningStartDomX:null,panningStartDomY:null,panningStartClientX:null,panningStartClientY:null,panningEndDomX:null,panningEndDomY:null,panningEndClientX:null,panningEndClientY:null,selectingStartDomX:null,selectingStartDomY:null,selectingStartClientX:null,selectingStartClientY:null,selectingEndDomX:null,selectingEndDomY:null,selectingEndClientX:null,selectingEndClientY:null,clickDomX:null,clickDomY:null,clickClientX:null,clickClientY:null,doubleClickDomX:null,doubleClickDomY:null,doubleClickClientX:null,doubleClickClientY:null}},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.width,i=n.height,l=n.transitionGraph_,a=n.interactions;return b.a.createElement(b.a.Fragment,null,b.a.createElement("fieldset",null,b.a.createElement("legend",null,"Props"),b.a.createElement("div",null,"width",b.a.createElement("input",{type:"range",min:500,max:1e3,value:t,onChange:function(n){return e.setState({width:Number.parseInt(n.target.value)})}})),b.a.createElement("div",null,"height",b.a.createElement("input",{type:"range",min:500,max:1e3,value:i,onChange:function(n){return e.setState({height:Number.parseInt(n.target.value)})}})),b.a.createElement("div",null,"transitionGraph",b.a.createElement("select",{value:l,onChange:function(n){return e.setState({transitionGraph_:n.target.value})}},b.a.createElement("option",{value:"INTERACTION_MODEL_BARE"},"BARE"),b.a.createElement("option",{value:"INTERACTION_MODEL_SELECTING"},"SELECTING"),b.a.createElement("option",{value:"INTERACTION_MODEL_PANNING"},"PANNING"),b.a.createElement("option",{value:"INTERACTION_MODEL_DEFAULT"},"DEFAULT"))),b.a.createElement("div",null,"Additional arguments:",b.a.createElement("ul",null,b.a.createElement("li",null,"hoveringHandler: PropTypes.func.isRequired "),b.a.createElement("li",null,"hoverEndHandler: PropTypes.func.isRequired"),b.a.createElement("li",null,"clickHandler: PropTypes.func.isRequired"),b.a.createElement("li",null,"doubleClickHandler: PropTypes.func.isRequired"),b.a.createElement("li",null,"selectingHandler: PropTypes.func.isRequired"),b.a.createElement("li",null,"selectedHandler: PropTypes.func.isRequired"),b.a.createElement("li",null,"panningHandler:  PropTypes.func.isRequired"),b.a.createElement("li",null,"pannedHandler: PropTypes.func.isRequired")))),b.a.createElement("fieldset",null,b.a.createElement("legend",null,"Result"),b.a.createElement(R,{width:t,height:i,transitionGraph:x[l],hoveringHandler:function(n){return e.setState({interactions:Object(d.a)({},a,{hoveringDomX:n.domX,hoveringDomY:n.domY,hoveringClientX:n.clientX,hoveringClientY:n.clientY})})},hoverEndHandler:function(){return e.setState({interactions:Object(d.a)({},a,{hoveringDomX:null,hoveringDomY:null,hoveringClientX:null,hoveringClientY:null})})},clickHandler:function(n){return e.setState({interactions:Object(d.a)({},a,{clickDomX:n.domX,clickDomY:n.domY,clickClientX:n.clientX,clickClientY:n.clientY})})},doubleClickHandler:function(n){return e.setState({interactions:Object(d.a)({},a,{doubleClickDomX:n.domX,doubleClickDomY:n.domY,doubleClickClientX:n.clientX,doubleClickClientY:n.clientY})})},selectingHandler:function(n){return e.setState({interactions:Object(d.a)({},a,{selectingStartDomX:n.start.domX,selectingStartDomY:n.start.domY,selectingStartClientX:n.start.clientX,selectingStartClientY:n.start.clientY,selectingEndDomX:n.end.domX,selectingEndDomY:n.end.domY,selectingEndClientX:n.end.clientX,selectingEndClientY:n.end.clientY})})},selectedHandler:function(n){return e.setState({interactions:Object(d.a)({},a,{selectingStartDomX:null,selectingStartDomY:null,selectingStartClientX:null,selectingStartClientY:null,selectingEndDomX:null,selectingEndDomY:null,selectingEndClientX:null,selectingEndClientY:null})})},panningHandler:function(n){return e.setState({interactions:Object(d.a)({},a,{panningStartDomX:n.start.domX,panningStartDomY:n.start.domY,panningStartClientX:n.start.clientX,panningStartClientY:n.start.clientY,panningEndDomX:n.end.domX,panningEndDomY:n.end.domY,panningEndClientX:n.end.clientX,panningEndClientY:n.end.clientY})})},pannedHandler:function(n){return e.setState({interactions:Object(d.a)({},a,{panningStartDomX:null,panningStartDomY:null,panningStartClientX:null,panningStartClientY:null,panningEndDomX:null,panningEndDomY:null,panningEndClientX:null,panningEndClientY:null})})}},b.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"grey"}}))),b.a.createElement("fieldset",null,b.a.createElement("legend",null,"Comment"),"The mouse interaction goes to the state and then updates the following display.",b.a.createElement("pre",null,JSON.stringify(this.state.interactions,null," "))),b.a.createElement("fieldset",null,b.a.createElement("legend",null,"Code snippet"),b.a.createElement("pre",null,'<PlotInteractionBox width={width}\n                    height={height}\n                    transitionGraph={TRANSITION_GRAPH[transitionGraph_]}\n                    hoveringHandler={(positions)=>this.setState( {interactions:{...interactions,\n                                                                                hoveringDomX: positions.domX,\n                                                                                hoveringDomY: positions.domY,\n                                                                                hoveringClientX: positions.clientX,\n                                                                                hoveringClientY: positions.clientY,\n                                                                                }\n                                                                  })\n                                      }\n                    hoverEndHandler={()=>this.setState( {interactions:{ ...interactions,\n                                                                        hoveringDomX: null,\n                                                                        hoveringDomY: null,\n                                                                        hoveringClientX: null,\n                                                                        hoveringClientY: null,\n                                                                        }\n                                                        })\n                                      }\n                    clickHandler={(positions)=>this.setState( {interactions:{ ...interactions,\n                                                                              clickDomX: positions.domX,\n                                                                              clickDomY: positions.domY,\n                                                                              clickClientX: positions.clientX,\n                                                                              clickClientY: positions.clientY,\n                                                                              }\n                                                              })\n                                      }\n                    doubleClickHandler={(positions)=>this.setState({interactions:{...interactions,\n                                                                                  doubleClickDomX: positions.domX,\n                                                                                  doubleClickDomY: positions.domY,\n                                                                                  doubleClickClientX: positions.clientX,\n                                                                                  doubleClickClientY: positions.clientY,\n                                                                                  }\n                                                                    })\n                                        }\n                    selectingHandler={(positions)=>this.setState({interactions:{...interactions,\n                                                                                selectingStartDomX: positions.start.domX,\n                                                                                selectingStartDomY: positions.start.domY,\n                                                                                selectingStartClientX: positions.start.clientX,\n                                                                                selectingStartClientY: positions.start.clientY,\n                                                                                selectingEndDomX: positions.end.domX,\n                                                                                selectingEndDomY: positions.end.domY,\n                                                                                selectingEndClientX: positions.end.clientX,\n                                                                                selectingEndClientY: positions.end.clientY,\n                                                                                }\n                                                                  })\n                                      }\n                    selectedHandler={(positions)=>this.setState({ interactions:{...interactions,\n                                                                                selectingStartDomX: null,\n                                                                                selectingStartDomY: null,\n                                                                                selectingStartClientX: null,\n                                                                                selectingStartClientY: null,\n                                                                                selectingEndDomX: null,\n                                                                                selectingEndDomY: null,\n                                                                                selectingEndClientX: null,\n                                                                                selectingEndClientY: null,\n                                                                                }\n                                                                  })\n                                      }\n                    panningHandler={(positions)=>this.setState({interactions:{...interactions,\n                                                                              panningStartDomX: positions.start.domX,\n                                                                              panningStartDomY: positions.start.domY,\n                                                                              panningStartClientX: positions.start.clientX,\n                                                                              panningStartClientY: positions.start.clientY,\n                                                                              panningEndDomX: positions.end.domX,\n                                                                              panningEndDomY: positions.end.domY,\n                                                                              panningEndClientX: positions.end.clientX,\n                                                                              panningEndClientY: positions.end.clientY,\n                                                                              }\n                                                                })\n                                    }\n                    pannedHandler={(positions)=>this.setState({ interactions:{...interactions,\n                                                                              panningStartDomX: null,\n                                                                              panningStartDomY: null,\n                                                                              panningStartClientX: null,\n                                                                              panningStartClientY: null,\n                                                                              panningEndDomX: null,\n                                                                              panningEndDomY: null,\n                                                                              panningEndClientX: null,\n                                                                              panningEndClientY: null,\n                                                                              }\n                                                                })\n                                    }\n                    >\n  <div style={{width:"100%",height:"100%",backgroundColor:"grey"}}>\n  </div>\n</PlotInteractionBox>\n')))}}]),n}(v.Component),F=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(g.a)(this,Object(p.a)(n).call(this,e))).state={width:1e3,height:400,transitionGraph_:"INTERACTION_MODEL_BARE"},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.width,i=n.height,l=n.transitionGraph_;return b.a.createElement(b.a.Fragment,null,b.a.createElement("fieldset",null,b.a.createElement("legend",null,"Props"),b.a.createElement("div",null,"width",b.a.createElement("input",{type:"range",min:500,max:1e3,value:t,onChange:function(n){return e.setState({width:Number.parseInt(n.target.value)})}})),b.a.createElement("div",null,"height",b.a.createElement("input",{type:"range",min:500,max:1e3,value:i,onChange:function(n){return e.setState({height:Number.parseInt(n.target.value)})}})),b.a.createElement("div",null,"transitionGraph",b.a.createElement("select",{value:l,onChange:function(n){return e.setState({transitionGraph_:n.target.value})}},b.a.createElement("option",{value:"INTERACTION_MODEL_BARE"},"BARE"),b.a.createElement("option",{value:"INTERACTION_MODEL_SELECTING"},"SELECTING"),b.a.createElement("option",{value:"INTERACTION_MODEL_PANNING"},"PANNING"),b.a.createElement("option",{value:"INTERACTION_MODEL_DEFAULT"},"DEFAULT"))),b.a.createElement("div",null,"Additional arguments:",b.a.createElement("ul",null,b.a.createElement("li",null,"render")))),b.a.createElement("fieldset",null,b.a.createElement("legend",null,"Result"),b.a.createElement(L,{width:t,height:i,transitionGraph:x[l],render:function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"lightgrey"}},b.a.createElement("pre",null,JSON.stringify(e,null," "))),b.a.createElement(U,{data:e,updateHandler:console.log}))}})),b.a.createElement("fieldset",null,b.a.createElement("legend",null,"Comment"),b.a.createElement("p",null,"The render props allows the interactions to be passed to other components without a round trip into the state.dataPointSelection and prevent unnecessary rerender."),b.a.createElement("small",null,"Actually, the round trip takes place in PlotInteractionProvider.")))}}]),n}(v.Component),q=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(g.a)(this,Object(p.a)(n).call(this,e))).state={crosshairX:null},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this,n=this.state.crosshairX;return b.a.createElement("div",{style:{position:"relative",width:400,height:400}},b.a.createElement("div",{style:{position:"absolute",backgroundImage:"linear-gradient(to bottom right, rgba(0,0,0,0), lightblue)",width:400,height:400}}),b.a.createElement("div",{style:{position:"absolute",backgroundImage:"linear-gradient(to bottom right, pink, rgba(0,0,0,0))",width:400,height:400}}),b.a.createElement("div",{style:{position:"absolute",width:400,height:400}},b.a.createElement(S.a,{width:400,height:400,minX:0,maxX:400,X:n})),b.a.createElement("div",{style:{position:"absolute",width:400,height:400}},b.a.createElement(L,{width:400,height:400,transitionGraph:A,render:function(n){return b.a.createElement(D.VerticalCrosshairSelector,{width:400,minX:0,maxX:400,hoveringPosition:n.hoveringPosition,selectHandler:function(n){e.setState({crosshairX:n})}})}})))}}]),n}(v.Component);O.a.render(b.a.createElement(function(e){return b.a.createElement(f.a,null,b.a.createElement("nav",{className:"app"},b.a.createElement(f.b,{to:"/PlotInteractionBox"},"PlotInteractionBox"),b.a.createElement(f.b,{to:"/PlotInteractionProvider"},"PlotInteractionProvider"),b.a.createElement(f.b,{to:"/PlotInteractionProvider_with_VerticalCrosshair"},"PlotInteractionProvider with VerticalCrosshair")),b.a.createElement(X.a,{path:"/PlotInteractionBox",exact:!0,component:B}),b.a.createElement(X.a,{path:"/PlotInteractionProvider",exact:!0,component:F}),b.a.createElement(X.a,{path:"/PlotInteractionProvider_with_VerticalCrosshair",exact:!0,component:q}))},null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4d186cf5.chunk.js.map