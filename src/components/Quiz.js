/**
 * Main Quiz Component - Root component that manages the quiz flow
 * Handles API calls, error states, results display, and quiz navigation
 */
import { useContext, useEffect } from "react";
import Questions from "./Questions";
import { QuizContext } from "../contexts/quiz";


/**
 * Main Quiz component that orchestrates the entire quiz experience
 * @returns {JSX.Element} - Complete quiz interface
 */
const Quiz = () => {
    // Access quiz state and dispatch function from context
    const [quizState, dispatch] = useContext(QuizContext);
    
    // API endpoint for fetching quiz questions from Open Trivia Database
    const apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986";

    // Fetch questions from API on component mount
    useEffect(() => {
        // Skip API call if questions already loaded or there's an error
        if (quizState.questions.length > 0 || quizState.error) {
            return;
        }
        
        // Fetch questions from Open Trivia Database API
        fetch(apiUrl).then((res) => res.json()).then((data) => {
            console.log("data", data);
            // Dispatch action to load questions into state
            dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
        }).catch(err => {
            console.log('err', err.message);
            // Dispatch error action if API call fails
            dispatch({ type: "SERVER_ERROR", payload: err.message });

        });
    },[]);


    return (
        <div className="quiz">
            {/* Display error message if API call failed */}
            {quizState.error && (
                <div className="results">
                    <div className="congratulations">Server error</div>
                    <div className="results-info">
                        <div>{quizState.error}</div>
                    </div>
                </div>
            )}
            
            {/* Display results screen when quiz is completed */}
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>You have completed the Quiz</div>
                        <div>You've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                    </div>
                    {/* Restart button to begin quiz again */}
                    <div className="next-button" onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
                </div>
            )}
            
            {/* Display quiz questions and navigation when quiz is active */}
            {!quizState.showResults && quizState.questions.length > 0 && (
                <div>
                    {/* Show current question number and total questions */}
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                    </div>
                    
                    {/* Render current question and answers */}
                    <Questions />
                    
                    {/* Next question button */}
                    <div className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
                        Next Question
                    </div>
                </div>)}
        </div>
    );

}

export default Quiz;