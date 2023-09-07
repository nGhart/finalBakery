import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ShopContext } from '../context/context';

const SingleMenuItem = ({ val }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <>
      <Col sm={6} lg={4} key={val.id}>
        <Card style={{ margin: '10px' }} className="cardBoxes">
          <div>
            <Row>
              <Col sm={4}>
                <img src={val.img} alt="item" width="100%" height="100%" />
              </Col>

              <Col sm={8}>
                <Card.Body>
                  <Card.Title className="itemNprice">
                    {val.title}
                    <span className="price">GHC {val.price}</span>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    Photo by <a href={val.picLink}>{val.artist}</a> on{' '}
                    <a href={val.siteLink} className="credit">
                      Unsplash
                    </a>{' '}
                  </Card.Subtitle>
                  <button
                    className="filterButtons"
                    onClick={() => addToCart(val.id)}
                  >
                    Add to Cart
                  </button>
                </Card.Body>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default SingleMenuItem;
