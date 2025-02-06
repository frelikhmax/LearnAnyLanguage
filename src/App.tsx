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
  basicLanguage: Language;
}

const words = [
  {
    [Language.english]: "Nothing",
    [Language.spanish]: "Nada",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Yes",
    [Language.spanish]: "Sí",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "I",
    [Language.spanish]: "Yo",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Goodbye",
    [Language.spanish]: "Adiós",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Hello",
    [Language.spanish]: "Hola",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "at the airport",
    [Language.spanish]: "al aeropuerto",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "and",
    [Language.spanish]: "y",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "tommorow",
    [Language.spanish]: "mañana",
    basicLanguage: Language.spanish,
  },
];

const App = () => {
  return (
    <div className="App">
      <Quiz
        words={words}
        original={Language.english}
        translation={Language.spanish}
      />
    </div>
  );
};

export default App;
