import { useEffect, useMemo, useState } from "react";
import { Card } from "../Card/Card";
import { Word, Language } from "../../App";
import "./Quiz.css";
import { shuffle } from "../../utils/ShuffleArray";
import { TranslatedWordsList } from "../TranslatedWordsList/TranslatedWordsList";

export interface Props {
  words: Word[];
  original: Language;
  translation: Language;
  handleStartNewQuiz: (newWords: Word[]) => void;
}

export const Quiz = ({
  words,
  original,
  translation,
  handleStartNewQuiz,
}: Props) => {
  const [shownTranslationWords, setShownTranslationWords] = useState<Word[]>(
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffledArray = useMemo(() => shuffle(words), [words]);

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

  const isGoing = currentIndex !== shuffledArray.length;
  return (
    <div className="quiz-container">
      <h1>
        {isGoing
          ? "Word Translator Quiz"
          : shownTranslationWords.length > 0
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
      ) : (
        shownTranslationWords.length > 0 && (
          <TranslatedWordsList
            words={shownTranslationWords}
            handleStartNewQuizWithTranslatedWords={
              handleStartNewQuizWithTranslatedWords
            }
          />
        )
      )}
    </div>
  );
};
