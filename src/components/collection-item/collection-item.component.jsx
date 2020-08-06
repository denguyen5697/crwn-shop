import React from "react";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

const CollectionItem = (props) => {
  const { item } = props;

  // console.log(item.imageUrl);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton onClick={() => props.addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
