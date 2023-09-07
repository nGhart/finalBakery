import React, { useState } from 'react';
import data from '../data';
import { Col, Container, Row } from 'react-bootstrap';
import Question from './Question';

function Faqs() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <Container className="title faqSection">
        <h1>FAQs</h1>
        <Row>
          <Col md={{ span: 10, offset: 1 }} className="faqContainer">
            {questions.map((question) => {
              return (
                <Row className="faqs">
                  <Question key={question.id} {...question} />
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Faqs;
