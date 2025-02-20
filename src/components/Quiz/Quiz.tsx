import { useMemo, useState } from "react";
import Card from "../Card/Card";
import "./Quiz.scss";
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
  const [resuffleArray, setResuffleArray] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // eslint-disable-next-line
  const shuffledArray = useMemo(() => shuffle(words), [words, resuffleArray]);

  const isGoing = currentIndex !== shuffledArray.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleFail = (word: Word) => {
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
    setResuffleArray((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="quiz-container">
      <h1>
        {isGoing
          ? `Word Translator Quiz ${currentIndex + 1}/${shuffledArray.length}`
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
          onFail={() => handleFail(shuffledArray[currentIndex])}
        ></Card>
      ) : shownTranslationWords.length ? (
        <TranslatedWordsList
          words={shownTranslationWords}
          handleStartNewQuizWithTranslatedWords={
            handleStartNewQuizWithTranslatedWords
          }
          handleRestartQuiz={handleRestartQuiz}
        />
      ) : (
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      )}
    </div>
  );
};

export default Quiz;
