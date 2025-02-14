import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   totalPrice :0
  // };

  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price =0;
  //   for (let param of query.entries()) {
  //       if(param[0] === 'price'){

  //           price = +param[1];
  //           price = price.toFixed(2)
  //       }
  //       else{
  //           ingredients[param[0]] = +param[1];
  //       }

  //   }
  //   this.setState({
  //     ingredients: ingredients,
  //     totalPrice :price
  //   });
  // }

  
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStatetoProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    purchased: state.order.purchased,
  };
};



export default connect(mapStatetoProps)(Checkout);
