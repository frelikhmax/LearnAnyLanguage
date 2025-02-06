import { useState } from "react";
import "./App.css";
import { Quiz } from "./components/Quiz/Quiz";

export enum Language {
  english = "English",
  russian = "Russian",
  spanish = "Spanish",
}

export type LanguageMap = {
  [K in Language]?: string;
};

export interface Word extends LanguageMap {
  baseLanguage: Language;
}

const App = () => {
  const [words, setWords] = useState<Word[]>([
    {
      [Language.english]: "Nothing",
      [Language.spanish]: "Nada",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Yes",
      [Language.spanish]: "Sí",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "I",
      [Language.spanish]: "Yo",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Goodbye",
      [Language.spanish]: "Adiós",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Hello",
      [Language.spanish]: "Hola",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "At the airport",
      [Language.spanish]: "Al aeropuerto",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "And",
      [Language.spanish]: "Y",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Tommorow",
      [Language.spanish]: "Mañana",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Too",
      [Language.spanish]: "Muy",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Perfect",
      [Language.spanish]: "Perfect(o/a)",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Great",
      [Language.spanish]: "Genial",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "Thanks",
      [Language.spanish]: "Gracias",
      baseLanguage: Language.spanish,
    },
    {
      [Language.english]: "My",
      [Language.spanish]: "Mi(-s)",
      baseLanguage: Language.spanish,
    },
  ]);

  const handleStartNewQuiz = (newWords: Word[]) => {
    setWords(newWords);
  };

  return (
    <div className="App">
      <Quiz
        words={words}
        original={Language.english}
        translation={Language.spanish}
        handleStartNewQuiz={handleStartNewQuiz}
      />
    </div>
  );
};

export default App;
