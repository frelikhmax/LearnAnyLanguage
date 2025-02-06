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

const nothing: Word = {
  [Language.english]: "Nothing",
  [Language.russian]: "Ничего",
  [Language.spanish]: "Nada",
  basicLanguage: Language.spanish
};

const yes: Word = {
  [Language.english]: "Yes",
  [Language.russian]: "Да",
  [Language.spanish]: "Sí",
  basicLanguage: Language.spanish
};

const i: Word = {
  [Language.english]: "I",
  [Language.russian]: "Я",
  [Language.spanish]: "Yo",
  basicLanguage: Language.spanish
};

const words = [nothing, yes, i];

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
