import React, { useState, useContext } from 'react';
import PaystackForm from './PaystackForm';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import CartItem from './CartItem';
import { ShopContext } from '../context/context';
import menuitems from './menuData';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const { cartItems, totalCartAmount, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <div className="cartMain">
        <Col sm={6}>
          <div className="cartSection">
            <h1 className=" cartTitle">My Cart</h1>
            <div className="cartContainer">
              {menuitems.map((val) => {
                if (cartItems[val.id] !== 0) {
                  return <CartItem val={val} key={val.id} />;
                }
              })}
              {totalCartAmount > 0 ? (
                <div>
                  <div className="totalContainer font">
                    <h6>Total</h6>
                    <h6>
                      GHC{' '}
                      <span id="totalAmount">{totalCartAmount.toFixed(2)}</span>
                    </h6>{' '}
                  </div>
                  <button
                    onClick={() => clearCart()}
                    className="continueButton"
                  >
                    Empty Cart
                  </button>
                </div>
              ) : (
                <section className="emptyContainer">
                  <h3> Your Cart is Empty</h3>

                  <button
                    onClick={() => navigate('/menu')}
                    className="continueButton"
                  >
                    Continue Shopping
                  </button>
                </section>
              )}
            </div>

            <div className="checkoutContainer">
              <button
                className="checkoutButton"
                onClick={() => handleShow(true)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </Col>
      </div>

      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="checkoutSection"
      >
        <Modal.Header closeButton className="modalHeader">
          <h1>Checkout</h1>
        </Modal.Header>
        <Modal.Body className="cartForm">
          <PaystackForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cart;
