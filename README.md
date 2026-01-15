# Trivia-Flow---Interactive-Quiz-Application

A modern, interactive quiz application built with React that fetches questions from the Open Trivia Database API. The application features a clean, responsive design with real-time feedback and scoring.

## 🚀 Features

- **Dynamic Question Loading**: Fetches questions from Open Trivia Database API
- **Interactive UI**: Clean, modern interface with visual feedback
- **Real-time Scoring**: Tracks correct answers and displays final score
- **Answer Validation**: Visual indicators for correct/incorrect answers
- **Responsive Design**: Works seamlessly across different screen sizes
- **Error Handling**: Graceful handling of API failures
- **Quiz Restart**: Option to restart the quiz after completion

## 🛠️ Technologies Used

- **React 19.2.3**: Modern React with hooks and context
- **React Context API**: Global state management
- **useReducer Hook**: Complex state logic management
- **CSS3**: Custom styling with flexbox layout
- **Open Trivia Database API**: External API for quiz questions
- **Create React App**: Development environment and build tools

## 📁 Project Structure

```
Quiz/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Answer.js           # Individual answer option component
│   │   ├── Questions.js        # Question display component
│   │   └── Quiz.js             # Main quiz orchestrator component
│   ├── contexts/
│   │   └── quiz.js             # React Context for state management
│   ├── data.js                 # Static quiz data (CSS questions)
│   ├── helpers.js              # Utility functions
│   ├── index.css               # Global styles
│   └── index.js                # Application entry point
├── package.json                # Dependencies and scripts
├── package-lock.json           # Dependency lock file
└── README.md                   # Project documentation
```

## 🎯 Core Components

### 1. Quiz Component (`src/components/Quiz.js`)
- **Main orchestrator** of the quiz application
- Handles API calls to fetch questions
- Manages quiz flow (questions → results → restart)
- Displays error states and loading states
- Controls navigation between questions

### 2. Questions Component (`src/components/Questions.js`)
- Renders the current question text
- Maps through available answers
- Passes answer selection to parent components
- Integrates with Answer components

### 3. Answer Component (`src/components/Answer.js`)
- Displays individual answer options (A, B, C, D)
- Handles click events for answer selection
- Provides visual feedback for correct/incorrect answers
- Disables interaction after answer selection

### 4. Quiz Context (`src/contexts/quiz.js`)
- **Global state management** using React Context + useReducer
- Manages quiz state: questions, current question, answers, score
- Handles state transitions: answer selection, navigation, restart
- Provides centralized state to all components

## 🔧 Key Functionality

### State Management
The application uses React Context with useReducer for state management:

- `SELECT_ANSWER`: Handles answer selection and score calculation
- `NEXT_QUESTION`: Navigates to next question or shows results
- `RESTART`: Resets quiz to initial state
- `LOADED_QUESTIONS`: Stores fetched questions from API
- `SERVER_ERROR`: Handles API errors gracefully

### Helper Functions (`src/helpers.js`)
- `shuffleAnswers()`: Randomizes answer order for each question
- `normalizeQuestions()`: Converts API response format to internal format

### API Integration
- Fetches questions from Open Trivia Database
- Handles URL-encoded responses
- Implements error handling for network failures
- Falls back to local data if API is unavailable

## 🎨 Styling Features

- **Modern Design**: Clean, professional appearance
- **Color-coded Feedback**: Green for correct, red for incorrect answers
- **Responsive Layout**: Flexbox-based responsive design
- **Interactive Elements**: Hover effects and visual feedback
- **Accessibility**: High contrast colors and readable fonts

## 🚦 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (one-way operation)

## 🌐 API Integration

The application integrates with the **Open Trivia Database API**:
- **Endpoint**: `https://opentdb.com/api.php`
- **Parameters**: 
  - `amount=10`: Fetches 10 questions
  - `difficulty=easy`: Easy difficulty level
  - `type=multiple`: Multiple choice questions
  - `encode=url3986`: URL encoding for special characters

## 🎮 How to Use

1. **Start Quiz**: Application automatically loads questions on startup
2. **Answer Questions**: Click on any answer option (A, B, C, D)
3. **Get Feedback**: Correct answers turn green, incorrect turn red
4. **Navigate**: Click "Next Question" to proceed
5. **View Results**: See final score after completing all questions
6. **Restart**: Click "Restart" to take the quiz again

## 🔄 Quiz Flow

```
App Start → Load Questions → Display Question → User Selects Answer → 
Show Feedback → Next Question → ... → Show Final Results → Restart Option
```

## 🎯 Learning Objectives Covered

This project demonstrates proficiency in:

- **React Hooks**: useState, useEffect, useContext, useReducer
- **Component Architecture**: Modular, reusable components
- **State Management**: Context API with reducer pattern
- **API Integration**: Fetch API with error handling
- **Event Handling**: User interactions and form handling
- **Conditional Rendering**: Dynamic UI based on state
- **CSS Styling**: Modern CSS with flexbox and responsive design
- **Project Structure**: Organized, maintainable codebase

**Built with ❤️ using React and modern web technologies**

