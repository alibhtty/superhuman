import * as Icon from '../component/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Inicio',
    path: '/',
    icon: <Icon.Carrusel/>,
    iconSelected: <Icon.CarruselActive />
  },
  {
    title: 'Donate',
    path: '/search',
    icon: <Icon.Corazon />,
    iconSelected: <Icon.CorazonActive />
  },
  {
    title: 'Colección',
    path: '/library',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'News',
    path: '/news',
    icon: <Icon.Donate />,
    iconSelected: <Icon.Donate />
  },
  /* {
    title: 'Zoom',
    path: '/zoom',
    icon: <Icon.Donate />,
    iconSelected: <Icon.Donate />
  } */
]

export const PLAYLISTBTN = [
    /* {
      title: 'Crear playlist',
      path: '/',
      ImgName: 'createPlaylist',
    }, */
    {
      title: 'Favoritos',
      path: '/library/artists',
      ImgName: 'popularSong',
    }
]

export const LIBRARYTABS = [
  {
    title: 'Listas de reproducción',
    path: '/library'
  },
  {
    title: 'Djs',
    path: '/library/artists'
  },
  {
    title: 'Álbumes',
    path: '/library/albums'
  },
  {
    title: 'Podcast',
    path: '/library/podcasts'
  }
]
