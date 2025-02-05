import "./Song.css";

import { Button } from "react-bootstrap";

export default function Song({ song }) {
  return (
    <div className="song">
      <p className={song.completed ? "song-title-completed " : ""}>
        {song?.title}
      </p>
      <div className="btn-group">
        <Button variant="outline-primary">
          {song.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="outline-danger">Remove</Button>
      </div>
    </div>
  );
}
