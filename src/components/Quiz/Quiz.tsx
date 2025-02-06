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
  const shuffledArray = useMemo(() => shuffle(words), [words]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentWord =
    currentIndex !== shuffledArray.length
      ? shuffledArray[currentIndex]
      : shuffledArray[shuffledArray.length - 1];

  return (
    <div className="quiz-container">
      <h1>
        {currentIndex !== shuffledArray.length
          ? "Word Translator Quiz"
          : "The End"}
      </h1>
      <Card
        word={currentWord}
        original={original}
        translation={translation}
        isGoing={currentIndex !== shuffledArray.length}
        onNextClick={handleNext}
      ></Card>
    </div>
  );
};
