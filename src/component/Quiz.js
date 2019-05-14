import React, { Component } from 'react'
import Quiz from './Quiz/Quiz';

export default class MyQuiz extends Component {
    quiz =  {
        "quizTitle": "Demo Question",
        "quizSynopsis": "pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        "questions": [
          {
            "question": "Demo question is?",
            "questionType": "text",
            "answers": [
              "Answer 1",
              "Answer 2",
              "Answer 3"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Oh no, the correct answer should be blabla...",
            "explanation": "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
        ]
      } 

  render() {
    return (
        <Quiz quiz={this.quiz} showInstantFeedback={true}/>
    )
  }
}
