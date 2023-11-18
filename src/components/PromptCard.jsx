import BasicCard from "./BasicCard";

function PromptCard({ frontText, isNonClickable }) {
  return (
    <BasicCard
      suite="cah-prompt"
      frontText={frontText}
      isNonClickable={isNonClickable}
    />
  );
}

export default PromptCard;
