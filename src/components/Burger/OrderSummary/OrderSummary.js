import React, { Component } from "react";
import Auxilliary from "../../../hoc/Auxilliary.js";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  componentWillUpdate(){
    console.log('[ordersummary] will update');
  }
  render() {
    let ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Auxilliary>
        <h3>Your order summary</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price is : {this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Auxilliary>
    );
  }
}

export default OrderSummary;
