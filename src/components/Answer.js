/**
 * Answer Component - Renders individual answer options for quiz questions
 * Handles answer selection and visual feedback for correct/incorrect answers
 */

/**
 * Answer component that displays a single answer option
 * @param {string} answerText - The text content of the answer
 * @param {function} onSelectAnswer - Callback function when answer is selected
 * @param {number} index - Index of the answer (0-3) for letter mapping
 * @param {string} currentAnswer - Currently selected answer
 * @param {string} correctAnswer - The correct answer for comparison
 * @returns {JSX.Element} - Rendered answer option
 */
const Answer = ({answerText, onSelectAnswer, index, currentAnswer, correctAnswer}) => {
    // Map answer indices to letters (A, B, C, D)
    const mappingLetters=["A", "B", "C", "D"];
    
    // Determine if this answer is correct
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    
    // Determine if this answer is wrong (selected but not correct)
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    
    // Apply CSS classes based on answer state
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    const disabledClass = currentAnswer ? "disabled-answer": ""; // Disable after selection
    
    return (
        <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} 
           onClick={() => onSelectAnswer(answerText)}>
            {/* Display answer letter (A, B, C, D) */}
            <div className="answer-letter">{mappingLetters[index]}</div>
            {/* Display answer text */}
            <div className="answer-text">{answerText} </div>
        </div>
    );
};

export default Answer;