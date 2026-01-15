/**
 * Questions Component - Displays the current question and its answer options
 * Manages the rendering of question text and answer choices
 */
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";


/**
 * Questions component that renders the current question and its answers
 * @returns {JSX.Element} - Current question with answer options
 */
const Questions = () => {
    // Access quiz state and dispatch function from context
    const [quizState, dispatch] = useContext(QuizContext);
    
    // Get the current question based on the current question index
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    return (
        <div>
            {/* Display the current question text */}
            <div className="question">{currentQuestion.question}</div>
            
            {/* Render all answer options */}
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer
                        answerText={answer}
                        key={index}
                        index={index}
                        currentAnswer={quizState.currentAnswer}
                        correctAnswer={currentQuestion.correctAnswer}
                        onSelectAnswer={(answerText) => dispatch({ type: "SELECT_ANSWER", payload: answerText })} />
                ))}
            </div>
        </div>
    );

}

export default Questions;