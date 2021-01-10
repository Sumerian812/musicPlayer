import React, { useState } from "react";
// import styles
import "./styles/app.scss";
// import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

// import data
import data from "./data"

function App() {
  // state
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} songInfo={songInfo} libraryStatus={libraryStatus}/>
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />

    </div>
  );
}

export default App;
