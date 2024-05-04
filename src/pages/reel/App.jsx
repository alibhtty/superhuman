import { useState, useEffect } from "react";
import BottomNav from "./BottomNav";
import Descubre from "./Descubre";
import "./assets/index.css";
//import { PLAYLIST } from '../../data/index';
import { videos } from './assets/reel.js';
import Topnav from '../../component/topnav/topnav';

function App() {
  const [videosState, setVideos] = useState([]);
  const [videosLoaded, setvideosLoaded] = useState(false);

  useEffect(() => {
    setVideos(videos); // Usa el array de videos importado desde reel.js
    setvideosLoaded(true);
  }, []);

  return (
    <main>
      <Topnav />
      
      <div className="slider-container">
        {videosLoaded && videosState.length > 0 ? (
          <div>
            {videosState.map((video, id) => (
              <Descubre
                key={id}
                index={video.index}
                songName={video.songName}
                songimg={video.songimg}
                songCut={video.songCut}
                author={video.author}
                authorLink={video.authorLink}
                miniatura={video.miniatura}
              />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <BottomNav />
    </main>
  );
}

export default App;
