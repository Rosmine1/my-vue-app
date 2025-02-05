import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from "react-bootstrap";
import SongList from './assets/components/SongList';
import { defaultSongs } from "./data";
import Song from './assets/components/Song';

function App() {
  console.log(defaultSongs);

  return (
    <div>
      <h1>Song playlist</h1>
      <Button className="mt-2 mb-2">Add Song</Button>
      <SongList song = {defaultSongs } />
      <Song song = {defaultSongs }/>
    </div>
  )
} 

export default App
