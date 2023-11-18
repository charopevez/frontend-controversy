import ResponseCard from "./ResponseCard";

function Player() {
  const cardsData = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  return (
    <div class="player sticky bottom-0">
      {cardsData.map((card, index) => (
        <ResponseCard frontText={card} />
      ))}
    </div>
  );
}
export default Player;
