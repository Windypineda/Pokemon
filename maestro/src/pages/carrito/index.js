


import ReactPlayer from 'react-player';

import React from 'react'
import Player from 'react-player'
function App() {
  return (
    <div className="contenedor">
      <ReactPlayer
      url='./videos/pokemon.mp4'
      width='100%'
      height='100%'
      controls
      loop
      />
    </div>
  );
}
export default App;