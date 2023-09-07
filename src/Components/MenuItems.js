import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function MenuItems({ menuItems }) {
  return (
    <>
      <Row className="menu">
        {menuItems.map((item) => {
          return (
            <Col sm={6} lg={4} key={item.id}>
              <Card style={{ margin: '10px' }}>
                <div>
                  <Row>
                    <Col sm={4}>
                      <img
                        src={item.img}
                        alt="item"
                        width="100%"
                        height="100%"
                      />
                    </Col>

                    <Col sm={8}>
                      <Card.Body>
                        <Card.Title className="itemNprice">
                          {item.title}
                          <span className="price">GHC {item.price}</span>
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">
                          Photo by <a href={item.picLink}>{item.artist}</a> on{' '}
                          <a href={item.siteLink} className="credit">
                            Unsplash
                          </a>{' '}
                        </Card.Subtitle>
                      </Card.Body>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default MenuItems;
