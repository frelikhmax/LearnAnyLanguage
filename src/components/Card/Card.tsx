import { useState } from "react";
import "./Card.css";
import { Word, Language } from "../../data/InitialWords";

interface Props {
  word: Word;
  original: Language;
  translation: Language;
  onNextClick: () => void;
  onFail: () => void;
}

const Card = ({ word, original, translation, onNextClick, onFail }: Props) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleFail = () => {
    if (!failed) {
      setFailed(true);
      onFail();
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
        {showTranslation ? (
          <>
            {failed ? (
              <button
                onClick={() => {
                  onNextClick();
                  setShowTranslation(false);
                  setFailed(false);
                }}
              >
                Next
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    onNextClick();
                    setShowTranslation(false);
                    setFailed(false);
                  }}
                >
                  Right
                </button>
                <button
                  onClick={() => {
                    onNextClick();
                    setShowTranslation(false);
                    onFail();
                    setFailed(false);
                  }}
                >
                  Wrong
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setShowTranslation(true);
              }}
            >
              Check
            </button>
            <button
              onClick={() => {
                setShowTranslation(true);
                handleFail();
              }}
            >
              Hint
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
