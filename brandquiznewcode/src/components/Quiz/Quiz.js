
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import { Row } from 'react-bootstrap';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        ids={key.qid}
      />
    );
  }

  return (
    <CSSTransitionGroup
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <Row key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        {/* <ul className="answerOptions"> */}
          {props.answerOptions.map(renderAnswerOptions)}
        {/* </ul> */}
      </Row>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: PropTypes.any.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.any.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;