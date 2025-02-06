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
    [Language.english]: "At the airport",
    [Language.spanish]: "Al aeropuerto",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "And",
    [Language.spanish]: "Y",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Tommorow",
    [Language.spanish]: "Mañana",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Too",
    [Language.spanish]: "Muy",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Perfect",
    [Language.spanish]: "Perfect(o/a)",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Great",
    [Language.spanish]: "Genial",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "Thanks",
    [Language.spanish]: "Gracias",
    basicLanguage: Language.spanish,
  },
  {
    [Language.english]: "My",
    [Language.spanish]: "Mi(-s)",
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
