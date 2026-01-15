/**
 * Main entry point for the React Quiz Application
 * Sets up the root component with QuizProvider context
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'  // Import global styles
import Quiz from './components/Quiz';  // Main Quiz component
import { QuizProvider } from './contexts/quiz';  // Context provider for state management

// Create root element and render the application
// Wrap Quiz component with QuizProvider to provide global state
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QuizProvider>
      <Quiz />
    </QuizProvider>
);
