import React, { Component } from 'react'
import quiz6 from '../../api/quiz6';
import Quiz from './Quiz';
import { Col } from 'react-bootstrap';

export class QuizSix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      qid: {}
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // Shuffle Question Answers
  componentDidMount() {
    const shuffledAnswerOptions = quiz6.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quiz6[0].question,
      answerOptions: shuffledAnswerOptions[0],
      
    });
  }
  // Shuffle Question Answers Math
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quiz6.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quiz6[counter].question,
      answerOptions: quiz6[counter].answers,
      answer: ''

    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    var answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    // answersCountKeys[0]
    return "Your personal brands style is " + "Trendy" +  ",  " + answersCountKeys[0] +  " and  " + answersCountKeys[1] +  ", very similar to a brand like " + answersCountKeys[2] + " mixed with (brand that is trendy)"; 
    // .filter(key => answersCount[key] === maxAnswerCount)
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  // Displays Questions & Answers from /api
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quiz6.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  // *** This does nothing ***
  // renderResult() {
  //   return <Result quizResult={this.state.result} />;
  // }

  render() {
    return (
      
        <Col lg={12}>
          
          <h2>Brand Quiz</h2>
          
        
        {/* {this.state.question} */}
        {this.state.result ? this.getResults() : this.renderQuiz()}
        </Col>
 

    );
  }
}

export default QuizSix
