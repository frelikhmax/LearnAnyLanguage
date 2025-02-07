import { memo } from "react";
import { Word } from "../../data/InitialWords";

export interface Props {
  words: Word[];
  handleStartNewQuizWithTranslatedWords: () => void;
}
export const TranslatedWordsList = memo(
  ({ words, handleStartNewQuizWithTranslatedWords }: Props) => {
    return (
      <div>
        <ul>
          {words.map((word, index) => (
            <li key={index}>{word[word.baseLanguage]}</li>
          ))}
        </ul>
        <button onClick={handleStartNewQuizWithTranslatedWords}>
          Finish them off
        </button>
      </div>
    );
  }
);
