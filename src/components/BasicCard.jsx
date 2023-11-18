import "./Card.css";
import { createSignal } from "solid-js";

function BasicCard({
  suite,
  frontText,
  backText,
  isDraggable,
  isNonClickable,
}) {
  const [isFlipped, setIsFlipped] = createSignal(false);
  const handleClick = () => {
    console.log(isNonClickable() ? "non clickable" : "clickable");

    if (isNonClickable()) return;
    if (!isFlipped()) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  };
  return (
    <div
      classList={{ [suite]: true, card: true, flip: isFlipped() }}
      draggable={isDraggable || false}
      onMouseUp={handleClick}
    >
      <div class="face up">
        <div>{frontText}</div>
      </div>
      <div class="face down">
        <div>{backText}</div>
      </div>
    </div>
  );
}
export default BasicCard;
