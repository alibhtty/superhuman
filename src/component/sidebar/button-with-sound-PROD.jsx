import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function ButtonWithSound({ path, soundFile, Icon, ActiveIcon }) {
  const audio = useMemo(() => new Audio(soundFile), [soundFile]);
  const history = useHistory();
  const location = useLocation();

  const playSound = () => {
    audio.play();
  };

  const navigate = () => {
    history.push(path);
  }

  const isActive = location.pathname === path;

  return (
    <button onClick={() => {playSound(); navigate();}}>
      {isActive ? <ActiveIcon/> : <Icon/>}
    </button>
  );
}

export default ButtonWithSound;
