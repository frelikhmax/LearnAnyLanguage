import { Word } from "../../data/InitialWords";

interface Props {
  words: Word[];
}

export const LearnedWords = ({ words }: Props) => {
  return (
    <div>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word[word.baseLanguage]}</li>
        ))}
      </ul>
    </div>
  );
};
