import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
// Components
import DragOverlay from "./DragOverlay";
import CountDown from "./CountDown";

const MODE_HOVERING = "hovering";
const MODE_CLICKING = "clicking";
const MODE_AUTOSELECTING = "autoSelecting";
const MODE_SELECTING = "selecting";
const MODE_PANNING = "panning";

const ACTION_MOUSEDOWN = "mouseDown";
const ACTION_MOUSEMOVE = "mouseMove";
const ACTION_MOUSEUP = "mouseUp";
const ACTION_TIMEOUT = "timeout";

export const INTERACTION_MODEL_DEFAULT = {[MODE_HOVERING]:{ [ACTION_MOUSEDOWN]:MODE_CLICKING},
                                          [MODE_CLICKING]:{ [ACTION_TIMEOUT]:MODE_AUTOSELECTING,
                                                            [ACTION_MOUSEMOVE]:MODE_SELECTING,
                                                            [ACTION_MOUSEUP]:MODE_HOVERING
                                                            },
                                          [MODE_AUTOSELECTING]:{[ACTION_TIMEOUT]:MODE_PANNING,
                                                                [ACTION_MOUSEMOVE]:MODE_SELECTING
                                                                },
                                          [MODE_SELECTING]:{[ACTION_MOUSEUP]:MODE_HOVERING},
                                          [MODE_PANNING]:{[ACTION_MOUSEUP]:MODE_HOVERING}
                                          };

export const INTERACTION_MODEL_SELECTING = {[MODE_HOVERING]:{ [ACTION_MOUSEDOWN]:MODE_CLICKING},
                                            [MODE_CLICKING]:{ [ACTION_TIMEOUT]:MODE_SELECTING,
                                                              [ACTION_MOUSEMOVE]:MODE_SELECTING,
                                                              [ACTION_MOUSEUP]:MODE_HOVERING
                                                              },
                                            [MODE_SELECTING]:{[ACTION_MOUSEUP]:MODE_HOVERING}
                                            };

export const INTERACTION_MODEL_PANNING = {[MODE_HOVERING]:{ [ACTION_MOUSEDOWN]:MODE_CLICKING},
                                          [MODE_CLICKING]:{ [ACTION_TIMEOUT]:MODE_PANNING,
                                                            [ACTION_MOUSEMOVE]:MODE_PANNING,
                                                            [ACTION_MOUSEUP]:MODE_HOVERING
                                                            },
                                          [MODE_PANNING]:{  [ACTION_MOUSEUP]:MODE_HOVERING}
                                          };

export const INTERACTION_MODEL_BARE = { [MODE_HOVERING]:{[ACTION_MOUSEDOWN]:MODE_CLICKING},
                                        [MODE_CLICKING]:{[ACTION_MOUSEUP]:MODE_HOVERING},
                                        };

class PlotInteractionBox extends PureComponent {
  constructor(props){
    super(props);
    this.state={mode:MODE_HOVERING};
    this.ref = React.createRef();
    this.initialMouseDownPosition = null;
    this.prevClickTimeStamp = null;
  }

  render() {
    let { width,height,
          children
          } = this.props;
    let style = {width,height};
    switch (this.state.mode) {
      case MODE_HOVERING:
        return (
          <>
            <div  ref={this.ref} style={style}
                  onMouseMove={this.handleMouseMove_Hovering}
                  onMouseOut={this.handleMouseOut_Hovering}
                  onMouseDown={this.handleMouseDown_Hovering}
                  >
              {children}
            </div>
          </>
        );
      case MODE_CLICKING:
        return (
          <>
            <div  ref={this.ref} style={style}>
              {children}
            </div>
            <DragOverlay mouseMoveHandler={this.handleMouseMove_Clicking} mouseUpHandler={this.handleMouseUp_Clicking} cursor="point"/>
            <CountDown timeout={200} callback={this.clickTimeout}/>
          </>
        );
      case MODE_AUTOSELECTING:
        return (
          <>
            <div  ref={this.ref} style={style}>
              {children}
            </div>
            <DragOverlay mouseMoveHandler={this.handleMouseMove_AutoSelecting} mouseUpHandler={this.handleMouseUp_AutoSelecting} cursor="nesw-resize"/>
            <CountDown timeout={500} callback={this.autoSelectingTimeout}/>
          </>
        );
      case MODE_SELECTING:
        return (
          <>
            <div  ref={this.ref} style={style}>
              {children}
            </div>
            <DragOverlay mouseMoveHandler={this.handleMouseMove_Selecting} mouseUpHandler={this.handleMouseUp_Selecting} cursor="nesw-resize"/>
          </>
        );
      case MODE_PANNING:
        return (
          <>
            <div  ref={this.ref} style={style}>
              {children}
            </div>
            <DragOverlay mouseMoveHandler={this.handleMouseMove_Panning} mouseUpHandler={this.handleMouseUp_Panning} cursor="grabbing"/>
          </>
        );
      default:
        throw new Error("ProgrammerTooDumbError");
    }
  }
  
  transition(action) {
    let {transitionGraph} = this.props;
    let {mode} = this.state;
    let nextMode = transitionGraph[mode][action];
    if (nextMode) {
      this.setState({mode:nextMode});
    }
  }
  
  getCustomEventObject(ev){
    let {left,top} = this.ref.current.getBoundingClientRect();
    let {clientX,clientY} = ev;
    let domX = clientX - left;
    let domY = clientY - top;
    return {domX,domY,clientX,clientY}
  }
  
  handleMouseMove_Hovering = (ev)=>{
    let {hoveringHandler} = this.props;
    let myEV = this.getCustomEventObject(ev);
    hoveringHandler(myEV);
  }

  handleMouseOut_Hovering = (ev)=>{
    let {hoverEndHandler} = this.props;
    hoverEndHandler();
  }
  
  handleMouseDown_Hovering = (ev)=>{
    let {hoverEndHandler} = this.props;
    ev.preventDefault();
    let myEV = this.getCustomEventObject(ev);
    this.initialMouseDownPosition = myEV;
    hoverEndHandler();
    this.transition(ACTION_MOUSEDOWN);
  }
  
  clickTimeout = ()=> {
    this.transition(ACTION_TIMEOUT);
  }

  autoSelectingTimeout = ()=>{
    this.transition(ACTION_TIMEOUT);
  }
  
  handleMouseMove_Clicking = (ev)=> {
    let {initialMouseDownPosition} = this;
    let myEV = this.getCustomEventObject(ev);
    if (Math.abs(myEV.domX-initialMouseDownPosition.domX)<10 ||
        Math.abs(myEV.domY-initialMouseDownPosition.domX)<10) {
      return;
    }
    else {
      this.transition(ACTION_MOUSEMOVE);
    }
  }

  handleMouseUp_Clicking = (ev)=> {
    let {clickHandler,doubleClickHandler} = this.props;
    let {prevClickTimeStamp} = this;
    let myEV = this.getCustomEventObject(ev);
    if (prevClickTimeStamp===null || prevClickTimeStamp+200<ev.timeStamp ) {
      this.prevClickTimeStamp = ev.timeStamp;
      clickHandler(myEV);
    }
    else {
      this.prevClickTimeStamp = null;
      doubleClickHandler(myEV);
    }
    this.transition(ACTION_MOUSEUP);
  }


  handleMouseMove_AutoSelecting = (ev)=>{
    let {selectingHandler} = this.props;
    let {initialMouseDownPosition} = this;
    let myEV = this.getCustomEventObject(ev);
    if (Math.abs(myEV.domX-initialMouseDownPosition.domX)<10 ||
        Math.abs(myEV.domY-initialMouseDownPosition.domX)<10) {
      return;
    }
    else {
      selectingHandler({start:initialMouseDownPosition,end:myEV});
      this.transition(ACTION_MOUSEMOVE);
    }
  }

  handleMouseUp_AutoSelecting = (ev)=>{
    this.transition(ACTION_MOUSEUP);
  }
  
  handleMouseMove_Selecting = (ev)=>{
    let {selectingHandler} = this.props;
    let {initialMouseDownPosition} = this;
    let myEV = this.getCustomEventObject(ev);
    selectingHandler({start:initialMouseDownPosition,end:myEV});
  }

  handleMouseUp_Selecting = (ev)=>{
    let {selectedHandler} = this.props;
    let {initialMouseDownPosition} = this;
    let myEV = this.getCustomEventObject(ev);
    selectedHandler({start:initialMouseDownPosition,end:myEV});
    this.transition(ACTION_MOUSEUP);
  }

  handleMouseMove_Panning = (ev)=>{
    let {panningHandler} = this.props;
    let {initialMouseDownPosition} = this;
    let myEV = this.getCustomEventObject(ev);
    panningHandler({start:initialMouseDownPosition,end:myEV});
  }

  handleMouseUp_Panning = (ev)=>{
    let {pannedHandler} = this.props;
    let {initialMouseDownPosition} = this;
    let myEV = this.getCustomEventObject(ev);
    pannedHandler({start:initialMouseDownPosition,end:myEV});
    this.transition(ACTION_MOUSEUP);
  }
}

PlotInteractionBox.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node,
  transitionGraph: PropTypes.object.isRequired,
  hoveringHandler: PropTypes.func.isRequired,
  hoverEndHandler: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
  doubleClickHandler: PropTypes.func.isRequired,
  selectingHandler: PropTypes.func.isRequired,
  selectedHandler: PropTypes.func.isRequired,
  panningHandler:  PropTypes.func.isRequired,
  pannedHandler: PropTypes.func.isRequired,
}

export default PlotInteractionBox;
