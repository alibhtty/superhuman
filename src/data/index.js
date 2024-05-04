import { PROMO } from './promo.js';
import { LISTAS } from './listas.js';
import { ARTIST } from './artist.js';
//import { DESCUBRE } from './reel.js';   ...DESCUBRE,

export const PLAYLIST = [...LISTAS, ...ARTIST, ...PROMO /*, ...otros arrays de datos */];  // ...videos,