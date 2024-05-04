import { PLAYLIST } from "../data/index";
import { PLAYPAUSE, CHANGETRACK } from "../actions/index";

const INITIAL_STATE = {
  trackData: {
    trackKey: [0, 0],
    track: PLAYLIST[0].playlistData[0] ? `${PLAYLIST[0].playlistData[0].link}` : '',
    trackName: PLAYLIST[0].playlistData[0] ? `${PLAYLIST[0].playlistData[0].songName}` : '',
    trackImg: PLAYLIST[0].playlistData[0] ? `${PLAYLIST[0].playlistData[0].songimg}` : '',
    trackArtist: PLAYLIST[0].playlistData[0] ? `${PLAYLIST[0].playlistData[0].songArtist}` : ''
  },
  isPlaying: false
};

/* const INITIAL_STATE = {
  trackData: {
    trackKey: [0, 0],
    track: `${PLAYLIST[0].playlistData[0].link}`,
    trackName: `${PLAYLIST[0].playlistData[0].songName}`,
    trackImg: `${PLAYLIST[0].playlistData[0].songimg}`,
    trackArtist: `${PLAYLIST[0].playlistData[0].songArtist}`
  },
  isPlaying: false
}; */

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYPAUSE:
      return {
        ...state,
        isPlaying: action.payload
      };
    case CHANGETRACK:
      return {
        ...state,
        trackData: {
          ...state.trackData,
          trackKey: action.payload,
          track: `${
            PLAYLIST[action.payload[0]].playlistData[action.payload[1]].link
          }`,
          trackName: `${
            PLAYLIST[action.payload[0]].playlistData[action.payload[1]].songName
          }`,
          trackImg: `${
            PLAYLIST[action.payload[0]].playlistData[action.payload[1]].songimg
          }`,
          trackArtist: `${
            PLAYLIST[action.payload[0]].playlistData[action.payload[1]].songArtist
          }`
        }
      };
    default:
      return state;
  }
};

/* import { PLAYLIST, ARTISTS } from "../data/index";
import { PLAYPAUSE, CHANGETRACK } from "../actions/index";

const INITIAL_STATE = {
  trackData: {
    trackKey: [0, 0],
    track: `${PLAYLIST[0].playlistData[0].link}`,
    trackName: `${PLAYLIST[0].playlistData[0].songName}`,
    trackImg: `${PLAYLIST[0].playlistData[0].songimg}`,
    trackArtist: `${PLAYLIST[0].playlistData[0].songArtist}`
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
      const playlist = action.payload.type === 'playlist' ? PLAYLIST : ARTISTS;
      return {
        ...state,
        trackData: {
          ...state.trackData,
          trackKey: action.payload.index,
          track: `${playlist[action.payload.index].playlistData[0].link}`,
          trackName: `${playlist[action.payload.index].playlistData[0].songName}`,
          trackImg: `${playlist[action.payload.index].playlistData[0].songimg}`,
          trackArtist: `${playlist[action.payload.index].playlistData[0].songArtist}`
        }
      };
    default:
      return state;
  }
}; */



/*  1. Inicializando el estado: Al principio, se establece un estado inicial (INITIAL_STATE) que contiene los detalles de la primera canción en la lista PLAYLIST y un valor isPlaying que indica si la canción se está reproduciendo o no.
    2. Manejando la acción PLAYPAUSE: Cuando se despacha la acción PLAYPAUSE, el reductor cambia el valor de isPlaying al valor que se pasa con la acción.
    3.Manejando la acción CHANGETRACK: Cuando se despacha la acción CHANGETRACK, el reductor actualiza los detalles de la canción en trackData con los detalles de la canción en el índice especificado en la lista PLAYLIST o ARTISTS, dependiendo del tipo de la acción.
    4. En la acción CHANGETRACK, estás usando action.payload.index para acceder a la canción en la lista PLAYLIST o ARTISTS. Sin embargo, parece que siempre estás accediendo a la primera canción en la lista (playlistData[0]), independientemente del valor de action.payload.index. Esto podría estar causando el problema que mencionaste anteriormente, donde solo se reproduce la primera canción de la lista. */