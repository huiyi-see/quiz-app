
import React, { useState } from 'react';

export default function App() {
  /*state object which will hold the current question no. the user is on,
   * this will be initialized to 0, so the quiz takes the 1st question from the array.
  */
  const questions =[
  {
    questionText: 'What is the capital of France?',
    answerOptions:[
      {answerText: 'New York', isCorrect: false},
      {answerText: 'London', isCorrect: false},
      {answerText: 'Paris', isCorrect: false},
      {answerText: 'Dublin', isCorrect: false},
    ],
  },
  {
    questionText:'Who is CEO of Tesla?',
    answerOptions: [
      {answerText:'Jeff Bezos', isCorrect: false},
      {answerText:'Elon Musk', isCorrect:true},
      {answerText: 'Bill Gates', isCorrect: false},
      {answerText: 'Tony Stark', isCorrect: false},
    ],
  },
  {
    questionText:'The iPhone was created by which company?',
    answerOptions: [
      {answerText: 'Apple', isCorrect: true},
      {answerText: 'Intel', isCorrect: false},
      {answerText: 'Amazon', isCorrect: false},
      {answerText: 'Microsoft', isCorrect: false},
    ]
  },
  {
    questionText:'How many Harry Potter books are there?',
    answerOptions:[
      {answerText: '1', isCorrect: false},
      {answerText: '4', isCorrect: false},
      {answerText: '6', isCorrect: false},
      {answerText: '7', isCorrect: true},
    ],
  },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
   /*a state object which will store whether we wanna show the score screen or not*/
  const [showScore, setShowScore] = useState(0);
  const [score, setScore] = useState(0);
  /* this function is to direct the user the next question when the user clicks an answer*/
  const handleAnswerButtonClick = (isCorrect) => {
    /*the alert to tell the user if they get the answer correct*/
    /*if (isCorrect){
      alert("the answer is correct!");
    }*/
    /*instead of showing an alert, we wanna update the score by 1 if the user got the answer correct*/
    if (isCorrect){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion +1;
    /*this condition is to make sure we dont go over the limit of the array*/
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      /*update the state var. when the user has reached the end of the quiz*/
      setShowScore(true);
    }
  };
 
/*map function loops over the array and gives us the current item the loop is currently at, in the form of a var*/
  return (
    <div className='app'>
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {showScore ? (
            <div className='score-section'>
            You scored {score} out of {questions.length} </div>
          ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOptions) => (
                  <button onClick={()=> handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
      
                  ))}
            </div>
            </>
          )}
          </div>
    );
}
