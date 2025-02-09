import { memo } from "react";
import { Word } from "../../data/InitialWords";

interface Props {
  words: Word[];
  handleStartNewQuizWithTranslatedWords: () => void;
  handleRestartQuiz: () => void;
}
const TranslatedWordsList = memo(
  ({ words, handleStartNewQuizWithTranslatedWords, handleRestartQuiz }: Props) => {
    return (
      <div>
        <ul>
          {words.map((word, index) => (
            <li key={index}>{word[word.baseLanguage]}</li>
          ))}
        </ul>
        <button onClick={handleStartNewQuizWithTranslatedWords}>
          Finish them
        </button>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }
);

export default TranslatedWordsList;
