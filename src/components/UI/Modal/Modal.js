import React, { Component } from "react";
import classes from "./Modal.css";
import Auxilliary from "../../../hoc/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
    shouldComponentUpdate(nexProps, nextState){
        return nexProps.show !== this.props.show || nexProps.children !== this.props.children;
    }

  render() {

    return (
      <Auxilliary>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vH)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxilliary>
    );
  }
}

export default Modal;
