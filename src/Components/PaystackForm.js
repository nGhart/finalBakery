import React, { useState, useContext, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { PaystackButton } from 'react-paystack';
import { ShopContext } from '../context/context';
import menuitems from './menuData';
import CheckoutItem from './CheckoutItem';

function PaystackForm({ props }) {
  const [amount, setAmount] = useState(100);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { cartItems, totalCartAmount, clearCart, checkout } =
    useContext(ShopContext);
  useEffect(() => {
    setAmount(Math.ceil(totalCartAmount) * 100);
  });

  const componentProps = {
    email,
    amount,
    currency: 'GHS',
    metadata: {
      name,
      phone,
    },
    publicKey: `${process.env.REACT_APP_API_KEY}`,
    text: 'Pay Now',
    onSuccess: () => {
      alert('Thanks for doing business with us! Come back soon!!');
      clearCart();
      setEmail('');
      setName('');
      setPhone('');
    },
    onClose: () => alert('Get it while it lasts!!!'),
  };
  return (
    <Container className="cart title">
      <Row>
        <Col className="paystackSection">
          {' '}
          <h1>Checkout</h1>
          <div className="">
            <div className="item">
              <div className="payStackTotal itemNprice">
                <h6>Total</h6>
                <p className="item-details__amount">
                  GHC {totalCartAmount.toFixed(2)}
                </p>
              </div>
              <div className="payStackSummary">
                <h6 className="item-details__title font">Order Summary</h6>
                <p className="itemNprice">
                  Item
                  <span className="payStackSummaryPrice">
                    <span className="font" style={{ marginRight: '30px' }}>
                      Qty
                    </span>
                    Item Total
                  </span>
                </p>
                {menuitems.map((val) => {
                  if (cartItems[val.id] !== 0) {
                    return <CheckoutItem val={val} key={val.id} />;
                  }
                })}
              </div>
              <div className="checkout-form">
                <div className="fieldsets">
                  <div className="checkout-field">
                    <label>Name: </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="checkout-field">
                    <label>Email: </label>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="checkout-field">
                    <label>Phone: </label>
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <PaystackButton
                  className="paystack-button"
                  {...componentProps}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PaystackForm;
