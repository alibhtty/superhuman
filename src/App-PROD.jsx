import React, { useState, useEffect  } from 'react';

import { connect } from 'react-redux';
import { PLAYPAUSE } from './actions';

import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import { useLocation } from 'react-router-dom';
import PreLoader from './animations/PreLoader';
import useWindowSize from './hooks/useWindowSize';
import Sidebar from './component/sidebar/sidebar';
import MobileNavigation from './component/sidebar/mobile-navigation';
import Footer from './component/footer/footer';
import Timeline from './pages/timeline/timeline';
//import Timeline from './pages/timeline/timeline';
//import SongSlider from './component/footer/song-slider';
import Home from './pages/home';
import Search from './pages/search';
import Library from './pages/library';

import PhotoDeck from './pages/PhotoDeck/PhotoDeck';
import PHOTOS from "./pages/PhotoDeck/photos.json";

import Descubre from './pages/reel/App';
//import videos from "./pages/reel/reel";

import PlaylistPage from './pages/playlist';
import Terms from './component/terms/terms';

import CONST from './constants/index';
import styles from './style/App.module.css';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';

// import { Helmet } from "react-helmet";

function Layout() {
  return (
    <div className={styles.layout}>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/search">
            <Search />
        </Route>
        <Route path="/library">
            <Library />
        </Route>
        <Route path="/news">
              <PhotoDeck cards={PHOTOS} />
        </Route>
        <Route path="/terms">
            <Terms />
        </Route>
        {<Route path="/timeline">
            <Timeline />
        </Route>}
        <Route path="/descubre">
            <Descubre />
        </Route>
        <Route exact path="/playlist/:path">
            <PlaylistPage />
        </Route>
        {/* <Route exact path="/artists/:path">
            <ArtistPage />
        </Route> */}
      </Switch>

      <Footer/>
    </div>
  );
}

function App() {
  const size = useWindowSize();

  return (
    <HashRouter>
      <PreLoader />
      {size.width > CONST.MOBILE_SIZE 
        ? <Sidebar /> 
        : <MobileNavigation />
      }

      <Layout />
    </HashRouter>
  );
}

export default App;