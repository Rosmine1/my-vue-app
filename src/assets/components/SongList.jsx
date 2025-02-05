import { ListGroup } from "react-bootstrap";
import Song from "./Song";

export default function SongList({ song }) {
  console.log(song);

  return (
    <ListGroup>
      {song.map((song) => (
        <ListGroup.Item key={song.id}>
          <Song song={song} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
