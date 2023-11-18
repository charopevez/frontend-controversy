import Player from "./Player";
import Table from "./Table";

function Room() {
  return (
    <div class="v-screen h-screen">
      <Table />
      <Player />
    </div>
  );
}
export default Room;
