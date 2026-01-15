/**
 * Quiz Context Provider - Manages global quiz state using React Context and useReducer
 * Handles quiz navigation, answer selection, scoring, and question loading
 */
import { createContext, useReducer } from "react";
import { shuffleAnswers, normalizeQuestions } from "../helpers";

// Initial state for the quiz application
const initialState = {
    currentQuestionIndex: 0,    // Current question being displayed
    questions: [],              // Array of quiz questions
    showResults: false,         // Flag to show results screen
    answers: [],                // Shuffled answers for current question
    currentAnswer: '',          // User's selected answer
    correctAnswersCount: 0,     // Number of correct answers
    error: null,                // Error message if API fails

};


/**
 * Reducer function to handle state updates based on dispatched actions
 * @param {Object} state - Current state
 * @param {Object} action - Action object with type and payload
 * @returns {Object} - New state
 */
const reducer = (state, action) => {

    switch (action.type) {
        // Handle answer selection
        case "SELECT_ANSWER": {
            // Check if selected answer is correct and update score
            const correctAnswersCount =
                action.payload ===
                    state.questions[state.currentQuestionIndex].correctAnswer
                    ? state.correctAnswersCount + 1 : state.correctAnswersCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount
            }

        }
        // Handle navigation to next question
        case "NEXT_QUESTION": {
            // Check if this is the last question to show results
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            // Shuffle answers for next question or clear if showing results
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: "",
            };
        }
        // Handle quiz restart
        case "RESTART":
            return {
                ...state,
                currentQuestionIndex: 0,
                showResults: false,
                currentAnswer: "",
                correctAnswersCount: 0,
                answers: shuffleAnswers(state.questions[0]),
                error: null,
            };

        // Handle loading questions from API
        case "LOADED_QUESTIONS": {
            const normalizedQuestions = normalizeQuestions(action.payload);
            return {
                ...state,
                questions: normalizedQuestions,
                answers: shuffleAnswers(normalizedQuestions[0])
            };
        }
        // Handle server/API errors
        case "SERVER_ERROR": {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }

};


// Create React Context for quiz state
export const QuizContext = createContext();

/**
 * Quiz Provider component that wraps the app with quiz context
 * @param {Object} children - Child components to wrap
 * @returns {JSX.Element} - Context provider with quiz state
 */
export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
} 