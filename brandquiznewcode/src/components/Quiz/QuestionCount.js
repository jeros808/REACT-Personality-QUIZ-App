
import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

function QuestionCount(props) {
  return (
    <Col className="questionCount">
      Question <span>{props.counter+1}</span> of <span>{props.total+1}</span>
    </Col>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;