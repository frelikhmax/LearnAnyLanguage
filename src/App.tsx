import { useState } from "react";
import "./App.scss";
import Quiz from "./components/Quiz/Quiz";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Start from "./components/Start/Start";
import { initialWords, Language, Word } from "./data/InitialWords";
import LearnedWords from "./components/LearnedWords/LearnedWords";
import BaseLayout from "./components/BaseLayout/BaseLayout";

const App = () => {
  const [words, setWords] = useState<Word[]>(initialWords);

  const handleStartNewQuiz = (newWords?: Word[]) => {
    setWords(newWords ? newWords : initialWords);
  };

  return (
    <BrowserRouter basename="/LearnAnyLanguage">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Start />} />
          <Route
            path="quiz"
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
            path="learned-words"
            element={<LearnedWords words={initialWords} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
