import { useMemo, useState } from "react";
import { Card } from "../Card/Card";
import { Word, Language } from "../../App";
import "./Quiz.css";
import { shuffle } from "../../utils/ShiffleArray";

export interface Props {
  words: Word[];
  original: Language;
  translation: Language;
}

export const Quiz = ({ words, original, translation }: Props) => {
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

  const isGoing = currentIndex !== shuffledArray.length;

  if (!isGoing) {
    console.log(shownTranslationWords);
  }

  return (
    <div className="quiz-container">
      <h1>{isGoing ? "Word Translator Quiz" : "The End"}</h1>
      {isGoing && (
        <Card
          word={shuffledArray[currentIndex]}
          original={original}
          translation={translation}
          onNextClick={handleNext}
          onShowTranslation={() =>
            handleShowTranslation(shuffledArray[currentIndex])
          }
        ></Card>
      )}
    </div>
  );
};
