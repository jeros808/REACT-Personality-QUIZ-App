import React, {Component} from 'react';
import QuizOne from './Quiz/QuizOne';
import QuizTwo from './Quiz/QuizTwo';
import QuizThree from './Quiz/QuizThree';
import QuizFour from './Quiz/QuizFour';
import QuizFive from './Quiz/QuizFive';
import QuizSix from './Quiz/QuizSix';
import { Container, Row, Col } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

export class BrandQuiz extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1
    }
  }

  startquiz = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

// Start Quiz
startQuiz(){
  let currentStep = this.state.currentStep;
  if(currentStep === 1){
    return (
      <Col lg={12}>
      <button 
        type="button" onClick={this.startquiz}>
      Start Quiz
      </button>    
      </Col>    
    )
  }
  return null;
}


// Quiz Selection 1
quizone = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep + 1
  this.setState({
    currentStep: currentStep
  })
}

quizOne() {
  let currentStep = this.state.currentStep;
  if(currentStep === 2){
    return (
      <Col lg={4} onClick={this.quizone}>
        <ResponsiveEmbed aspectRatio="1by1" style={{borderRadius:'15px', backgroundColor:'#999', backgroundImage: 'url(https://stylecaster.com/wp-content/uploads/2016/07/aconstellation-celine-ballerinas-7.jpg)', backgroundSize:'cover'}}>
        <embed />
        </ResponsiveEmbed>
        Sporty
      </Col>
    )
  }
  return null;
}

// Quiz Selection 2
quiztwo = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep + 2
  this.setState({
    currentStep: currentStep
  })
}

quizTwo() {
  let currentStep = this.state.currentStep;
  if(currentStep === 2){
    return (
      <Col lg={4} onClick={this.quiztwo}>
        <ResponsiveEmbed aspectRatio="1by1" onClick={this.quiztwo} style={{borderRadius:'15px', backgroundColor:'#999'}}>
        <img />
        </ResponsiveEmbed>
        Basic
      </Col>
    )
  }
  return null;
}

// Quiz Selection 3
quizthree = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep + 3
  this.setState({
    currentStep: currentStep
  })
}

quizThree() {
  let currentStep = this.state.currentStep;
  if(currentStep === 2){
    return (
      <Col lg={4} onClick={this.quizthree}>
        <ResponsiveEmbed aspectRatio="1by1" style={{borderRadius:'15px', backgroundColor:'#999'}}>
        <embed />
        </ResponsiveEmbed>
        Preppy
      </Col>
    )
  }
  return null;
}

// Quiz Selection 4
quizfour = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep + 4
  this.setState({
    currentStep: currentStep
  })
}

quizFour() {
  let currentStep = this.state.currentStep;
  if(currentStep === 2){
    return (
      <Col lg={4} onClick={this.quizfour}>
        <ResponsiveEmbed aspectRatio="1by1" style={{borderRadius:'15px', backgroundColor:'#999'}}>
        <embed />
        </ResponsiveEmbed>
        Edgy
      </Col>
    )
  }
  return null;
}

// Quiz Selection 5
quizfive = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep + 5
  this.setState({
    currentStep: currentStep
  })
}

quizFive() {
  let currentStep = this.state.currentStep;
  if(currentStep === 2){
    return (
      <Col lg={4} onClick={this.quizfive}>
        <ResponsiveEmbed aspectRatio="1by1" style={{borderRadius:'15px', backgroundColor:'#999'}}>
        <embed />
        </ResponsiveEmbed>
        Vintage
      </Col>
    )
  }
  return null;
}

// Quiz Selection 6
quizsix = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep + 6
  this.setState({
    currentStep: currentStep
  })
}

quizSix() {
  let currentStep = this.state.currentStep;
  if(currentStep === 2){
    return (
      <Col lg={4} onClick={this.quizsix}>
        <ResponsiveEmbed aspectRatio="1by1" style={{borderRadius:'15px', backgroundColor:'#999'}}>
        <embed />
        </ResponsiveEmbed>
        Trendy
      </Col>
    )
  }
  return null;
}

render(){
  return (
    <React.Fragment>
      
    {/* <h1>React Wizard Form 🧙‍♂️</h1>
    <p>Step {this.state.currentStep} </p>  */}
      <Container style={{paddingTop:"120px"}}>
      <Row>
      <Intro
        currentStep={this.state.currentStep} 
      />
      <QuizSelection
        currentStep={this.state.currentStep} 
      />
      <QuizOnePage
        currentStep={this.state.currentStep} 
      />
      <QuizTwoPage
        currentStep={this.state.currentStep} 
      />
      <QuizThreePage
        currentStep={this.state.currentStep} 
      />
      <QuizFourPage
        currentStep={this.state.currentStep} 
      />
      <QuizFivePage
        currentStep={this.state.currentStep} 
      />
      <QuizSixPage
        currentStep={this.state.currentStep} 
      />
      
 
          
      {this.startQuiz()}
      
      
        {this.quizOne()}
        {this.quizTwo()}
        {this.quizThree()}
        {this.quizFour()}
        {this.quizFive()}
        {this.quizSix()}
      </Row>
      </Container>
    </React.Fragment>
  )
}

}

function Intro(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
   
      <Col lg={12}>
      What is my brand?<br />
      Ever wonder what type of brand you are?<br />
      You might surprise yourself. Take our quiz and find out!
      </Col>
    );
  }

function QuizSelection(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <Col lg={12}>
      <h2>Brand Quiz</h2><br />
      Question 1 of 4<br />
      <h2>What is your day-to-day style?</h2>
      </Col>
    );
  }

function QuizOnePage(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <div>
        <QuizOne />
      </div>
    );
  }

function QuizTwoPage(props) {
  if (props.currentStep !== 4) {
    return null
  } 
  return(
    <div>
      <QuizTwo />
    </div>
  );
}
function QuizThreePage(props) {
  if (props.currentStep !== 5) {
    return null
  } 
  return(
    <div>
      <QuizThree />
    </div>
  );
}

function QuizFourPage(props) {
  if (props.currentStep !== 6) {
    return null
  } 
  return(
    <div>
      <QuizFour />
    </div>
  );
}

function QuizFivePage(props) {
if (props.currentStep !== 7) {
  return null
} 
return(
  <div>
    <QuizFive />
  </div>
);
}
function QuizSixPage(props) {
if (props.currentStep !== 8) {
  return null
} 
return(
  <div>
    <QuizSix />
  </div>
);
}

export default BrandQuiz;
