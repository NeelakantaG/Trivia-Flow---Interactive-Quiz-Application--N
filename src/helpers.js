/**
 * Helper functions for quiz functionality
 */

/**
 * Shuffles the answers array to randomize the order of options
 * @param {Object} question - Question object containing correctAnswer and incorrectAnswers
 * @returns {Array} - Shuffled array of all answers (correct + incorrect)
 */
export const shuffleAnswers = (question) => {
    // Combine correct answer with incorrect answers into one array
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ];

    // Shuffle the answers using random sort
    return unshuffledAnswers
    .map(unshuffledAnswer => ({sort : Math.random(), value : unshuffledAnswer }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};


/**
 * Normalizes questions from external API format to internal format
 * Decodes URL-encoded strings from the API response
 * @param {Array} backendQuestions - Array of questions from external API
 * @returns {Array} - Normalized questions array
 */
export const normalizeQuestions = (backendQuestions) => {
    return backendQuestions.map((backendQuestion) => {
        // Decode URL-encoded incorrect answers
        const incorrectAnswers = backendQuestion.incorrect_answers.map(
                (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
                );
        return {
            // Decode URL-encoded correct answer and question text
            correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
            question : decodeURIComponent(backendQuestion.question),
            incorrectAnswers,
        };
    });
};