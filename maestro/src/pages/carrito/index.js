


import ReactPlayer from 'react-player';
import video from './carrito/pokemon.mp4';
function App() {
  return (
    <div className="contenedor">
      <ReactPlayer
      url={video}
      width='100%'
      height='100%'
      controls
      loop
      />
    </div>
  );
}
export default App;