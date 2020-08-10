import React from "react";

import CheckoutItem from "../../checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem, index) => {
        return <CheckoutItem key={index} cartItem={cartItem} />;
      })}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
    </div>
    <br />
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});

export default connect(mapStateToProps, null)(CheckoutPage);
