import { PLAYLIST } from "../data/index";
import { PLAYPAUSE, CHANGETRACK } from "../actions/index";

const INITIAL_STATE = {
  trackData: {
    trackKey: [0, 0],
    track: '',
    trackName: '',
    trackImg: '',
    trackArtist: ''
  },
  isPlaying: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYPAUSE:
      return {
        ...state,
        isPlaying: action.payload
      };
    case CHANGETRACK:
      return changeTrack(state, action.payload);
    default:
      return state;
  }
};

const changeTrack = (state, payload) => {
  const [playlistIndex, trackIndex] = payload;
  const playlistItem = PLAYLIST[playlistIndex];
  
  if (!playlistItem || !playlistItem.playlistData[trackIndex]) {
    // Manejar el caso en el que el elemento de la lista de reproducción o la pista no estén definidos
    console.error('No se pudo encontrar la pista en la lista de reproducción.');
    return state;
  }

  const { link, songName, songimg, songArtist } = playlistItem.playlistData[trackIndex];

  return {
    ...state,
    trackData: {
      ...state.trackData,
      trackKey: [playlistIndex, trackIndex],
      track: link,
      trackName: songName,
      trackImg: songimg,
      trackArtist: songArtist
    }
  };
};
