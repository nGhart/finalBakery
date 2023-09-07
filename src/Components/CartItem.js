import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ShopContext } from '../context/context';

const CartItem = (props) => {
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  const cartItemCount = cartItems[props.val.id];
  return (
    <>
      <Col className="checkoutItem">
        <Row>
          <Col xs={3}>
            <img
              src={props.val.img}
              alt="item"
              width={50}
              height="100%"
              className="cartImage"
            />
          </Col>

          <Col xs={5}>
            <Card.Body>
              <Card.Title className="itemNprice">{props.val.title}</Card.Title>
              <Card.Text>
                <p className="itemNprice">
                  GHC
                  <span className="prices">{props.val.price}</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={4}>
            <Card.Subtitle className="mb-2 text-muted itemCount">
              <button
                onClick={() => removeFromCart(props.val.id)}
                className="minus cartCount"
              >
                -
              </button>
              <button className="itemNumber">{cartItemCount}</button>
              <button
                onClick={() => addToCart(props.val.id)}
                className="plus cartCount"
              >
                +
              </button>
            </Card.Subtitle>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default CartItem;
