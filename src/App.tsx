import { useState } from "react";
import "./App.css";
import { Quiz } from "./components/Quiz/Quiz";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Start } from "./components/Start/Start";
import { initialWords, Language, Word } from "./data/InitialWords";
import { LearnedWords } from "./components/LearnedWords/LearnedWords";

const App = () => {
  const [words, setWords] = useState<Word[]>(initialWords);

  const handleStartNewQuiz = (newWords?: Word[]) => {
    setWords(newWords ? newWords : initialWords);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              words={words}
              original={Language.english}
              translation={Language.spanish}
              handleStartNewQuiz={handleStartNewQuiz}
            />
          }
        />
        <Route
          path="/learned-words"
          element={<LearnedWords words={initialWords} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
