import { useState } from "react";
import "./Card.css";
import { Word, Language } from "../../App";

export interface Props {
  word: Word;
  original: Language;
  translation: Language;
  isGoing: boolean;
  onNextClick: () => void;
}

export const Card = ({
  word,
  original,
  translation,
  isGoing,
  onNextClick,
}: Props) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const switchTranslation = (toShow: boolean) => {
    setShowTranslation(toShow);
  };

  return (
    <div className="card-container">
      {isGoing && (
        <div>
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
      )}
    </div>
  );
};
