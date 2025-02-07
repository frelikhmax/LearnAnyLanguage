import { useMemo, useState } from "react";
import Card from "../Card/Card";
import "./Quiz.css";
import { shuffle } from "../../utils/ShuffleArray";
import TranslatedWordsList from "../TranslatedWordsList/TranslatedWordsList";
import { Word, Language } from "../../data/InitialWords";

interface Props {
  words: Word[];
  original: Language;
  translation: Language;
  handleStartNewQuiz: (newWords?: Word[]) => void;
}

const Quiz = ({ words, original, translation, handleStartNewQuiz }: Props) => {
  const [shownTranslationWords, setShownTranslationWords] = useState<Word[]>(
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffledArray = useMemo(() => shuffle(words), [words]);

  const isGoing = currentIndex !== shuffledArray.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleShowTranslation = (word: Word) => {
    setShownTranslationWords([...shownTranslationWords, word]);
  };

  const handleStartNewQuizWithTranslatedWords = () => {
    setShownTranslationWords([]);
    setCurrentIndex(0);
    handleStartNewQuiz(shownTranslationWords);
  };

  const handleRestartQuiz = () => {
    setShownTranslationWords([]);
    setCurrentIndex(0);
    handleStartNewQuiz();
  };

  return (
    <div className="quiz-container">
      <h1>
        {isGoing
          ? "Word Translator Quiz"
          : shownTranslationWords.length
            ? "Translated Words"
            : "Nice"}
      </h1>
      {isGoing ? (
        <Card
          word={shuffledArray[currentIndex]}
          original={original}
          translation={translation}
          onNextClick={handleNext}
          onShowTranslation={() =>
            handleShowTranslation(shuffledArray[currentIndex])
          }
        ></Card>
      ) : shownTranslationWords.length ? (
        <TranslatedWordsList
          words={shownTranslationWords}
          handleStartNewQuizWithTranslatedWords={
            handleStartNewQuizWithTranslatedWords
          }
        />
      ) : (
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      )}
    </div>
  );
};

export default Quiz;
