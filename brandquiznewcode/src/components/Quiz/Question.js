import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

function Question(props) {
  return (<Col lg={12}><h2 className="question">{props.content}</h2></Col>);
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;