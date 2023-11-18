import { createSignal, createEffect, onCleanup } from "solid-js";
import PromptCard from "./PromptCard";

function PromptArea() {
  const [isMouseDown, setIsMouseDown] = createSignal(false);
  const [isDragging, setIsDragging] = createSignal(false);
  const [position, setPosition] = createSignal({ x: 0, y: 0 });
  const [boundary, setBoundary] = createSignal({
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  });

  const handleMouseDown = (e) => {
    setIsMouseDown(true);

    const initialX = e.clientX - position().x;
    const initialY = e.clientY - position().y;

    const handleMouseMove = (e) => {
      if (isMouseDown()) {
        setIsDragging(true);
        const deltaX = e.clientX - initialX;
        const deltaY = e.clientY - initialY;

        // Ensure that the new position stays within the boundaries
        const newX = Math.min(
          Math.max(deltaX, boundary().minX),
          boundary().maxX
        );
        const newY = Math.min(
          Math.max(deltaY, boundary().minY),
          boundary().maxY
        );

        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    onCleanup(() => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    });
  };

  createEffect(() => {
    // Calculate the boundaries based on the dimensions of the playing-area
    const playingArea = document.querySelector(".playing-area");
    if (playingArea) {
      const { left, top, width, height } = playingArea.getBoundingClientRect();
      setBoundary({
        minX: left,
        minY: top,
        maxX: left + width,
        maxY: top + height,
      });
    }
  });

  return (
    <div
      class="prompt-area inline-block"
      style={`transform: translate(${position().x}px, ${
        position().y
      }px); cursor: ${isDragging() ? "grabbing" : "grab"};`}
      onMousedown={handleMouseDown}
    >
      <PromptCard
        suite="response"
        frontText="prompt"
        isNonClickable={isDragging}
      />
      <PromptCard
        suite="response"
        frontText="prompt2"
        isNonClickable={isDragging}
      />
    </div>
  );
}

export default PromptArea;
