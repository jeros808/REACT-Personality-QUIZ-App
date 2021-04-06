import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';



function AnswerOption(props) {
  return (
    // <li className="answerOption">
    //   <input
    //     type="radio"
    //     className="radioCustomButton"
    //     name="radioGroup"
    //     checked={props.answerType === props.answer}
    //     id={props.answerType}
    //     value={props.answerType}
    //     disabled={props.answer}
    //     onChange={props.onAnswerSelected}
    //   />
    //   <label className="radioCustomLabel" htmlFor={props.answerType}>
    //     {props.answerContent}
    //   </label>
    // </li>
    <Col className="answerOption" md={3}>
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      checked={props.answerType === props.answer}
      id={props.answerType}
      value={props.answerType}
      disabled={props.answer}
      onChange={props.onAnswerSelected}
      
    />
   
    <label className="radioCustomLabel" htmlFor={props.answerType}>
    <img src={props.answerContent} style={{
            resizeMode: "cover",
            height: 200,
            width: 200
          }} />
    </label>


  </Col>
 
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.any.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;