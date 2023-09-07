import React, { useContext } from 'react';
import { ShopContext } from '../context/context';

const CheckoutItem = (props) => {
  const { cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[props.val.id];
  return (
    <>
      <p className="itemNprice">
        {props.val.title}
        <span className="payStackSummaryPrice">
          <span style={{ marginRight: '30px' }}>{cartItemCount}</span>
          GHC {(props.val.price * cartItemCount).toFixed(2)}
        </span>
      </p>
    </>
  );
};

export default CheckoutItem;
