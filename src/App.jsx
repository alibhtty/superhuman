import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { PLAYPAUSE } from './actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreLoader from './animations/PreLoader';
import PHOTOS from "./pages/PhotoDeck/photos.json";

import useWindowSize from './hooks/useWindowSize';
import Sidebar from './component/sidebar/sidebar';
import MobileNavigation from './component/sidebar/mobile-navigation';
import Footer from './component/footer/footer';
import Offline from './component/modal/Offline';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';
import CONST from './constants/index';
import styles from './style/App.module.css';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/home'));
const Search = React.lazy(() => import('./pages/search'));
const Library = React.lazy(() => import('./pages/library'));
const PhotoDeck = React.lazy(() => import('./pages/PhotoDeck/PhotoDeck'));
const Terms = React.lazy(() => import('./component/terms/terms'));
const Timeline = React.lazy(() => import('./pages/timeline/timeline'));
const Version = React.lazy(() => import('./pages/timeline/version'));
const Descubre = React.lazy(() => import('./pages/reel/App'));
const PlaylistPage = React.lazy(() => import('./pages/playlist'));
const FlappyBird = React.lazy(() => import('./pages/game/flappy'));

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
        <Route path="/timeline">
            <Timeline />
        </Route>
        <Route path="/version">
            <Version />
        </Route>
        <Route path="/descubre">
            <Descubre />
        </Route>
        <Route exact path="/playlist/:path">
            <PlaylistPage />
        </Route>
        <Route path="/flappy">
            <FlappyBird />
        </Route>
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
      <Suspense fallback={<div className="fallback">   </div>}>
        {size.width > CONST.MOBILE_SIZE 
          ? <Sidebar /> 
          : <MobileNavigation />
        }

        <Layout />
        <Offline />
      </Suspense>
    </HashRouter>
  );
}

export default App;
