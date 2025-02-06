import { useState } from "react";
import "./Card.css";
import { Word, Language } from "../../App";

export interface Props {
  word: Word;
  original: Language;
  translation: Language;
  onNextClick: () => void;
  onShowTranslation: () => void;
}

export const Card = ({
  word,
  original,
  translation,
  onNextClick,
  onShowTranslation,
}: Props) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [hasShownTranslation, setHasShownTranslation] = useState(false);

  const switchTranslation = (toShow: boolean) => {
    setShowTranslation(toShow);
    if (toShow && !hasShownTranslation) {
      setHasShownTranslation(true);
      onShowTranslation();
    }
  };

  return (
    <div className="card-container">
      <div className="word">
        {original}: {word[original]}
      </div>
      {showTranslation && (
        <div className="translation">
          {translation}: {word[translation]}
        </div>
      )}
      <div className="buttons">
        <button
          onClick={() => {
            onNextClick();
            switchTranslation(false);
            setHasShownTranslation(false);
          }}
        >
          Next
        </button>
        <button
          className={showTranslation ? "hide-translation" : ""}
          onClick={() => {
            switchTranslation(!showTranslation);
          }}
        >
          {showTranslation ? "Hide translation" : "Show translation"}
        </button>
      </div>
    </div>
  );
};
