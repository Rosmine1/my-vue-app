import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import SongList from './assets/components/SongList';
import { defaultSongs } from './data';

function App() {
  console.log(defaultSongs);

  return (
    <div>
      <h1>Song playlist</h1>
      <Button className="mt-2 mb-2">Add Song</Button>
      <SongList song={defaultSongs} />
    </div>
  );
}

export default App;
