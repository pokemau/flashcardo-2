import { Dispatch, SetStateAction } from "react";

type DefaultHomeButtonsProps = {
  createNewFlashcardSet: () => void;
  setIsImporting: Dispatch<SetStateAction<boolean>>;
};

const DefaultHomeButtons: React.FC<DefaultHomeButtonsProps> = ({
  createNewFlashcardSet,
  setIsImporting,
}) => {
  return (
    <div className="flex">
      <button onClick={() => createNewFlashcardSet()} className="home-btn">
        Create New
      </button>
      <button onClick={() => setIsImporting(true)} className="home-btn">
        ImportQuestions
      </button>
    </div>
  );
};

export default DefaultHomeButtons;