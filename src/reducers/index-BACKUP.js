import { PLAYLIST, ARTISTS } from "../data/index";
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
};
