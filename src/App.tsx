import "./App.css";
import { Quiz } from "./components/Quiz/Quiz";

export enum Language {
  english = "English",
  russian = "Russian",
  spanish = "Spanish",
}

export type Word = {
  [K in Language]?: string;
};

const nothing = {
  [Language.english]: "Nothing",
  [Language.russian]: "Ничего",
  [Language.spanish]: "Nada",
};

const yes = {
  [Language.english]: "Yes",
  [Language.russian]: "Да",
  [Language.spanish]: "Sí",
};

const i = {
  [Language.english]: "I",
  [Language.russian]: "Я",
  [Language.spanish]: "Yo",
};

const words = [nothing, yes, i];

const App = () => {
  return (
    <div className="App">
      <Quiz words={words} original={Language.english} translation={Language.spanish}/>
    </div>
  );
};

export default App;
