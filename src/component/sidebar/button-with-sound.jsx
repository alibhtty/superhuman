import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

function ButtonWithSound({ path, soundFile, Icon, ActiveIcon }) {
  const [isActive, setIsActive] = useState(false); // Estado para controlar si el botón está activo o no

  const audio = useMemo(() => {
    const audio = new Audio(soundFile);
    audio.volume = 0.5; // Ajusta el volumen según sea necesario
    return audio;
  }, [soundFile]);

  const history = useHistory();

  useEffect(() => {
    // Escucha los cambios en la ruta para determinar si este botón debe estar activo o no
    const unlisten = history.listen((location, action) => {
      setIsActive(location.pathname === path);
    });

    return () => {
      unlisten();
    };
  }, [history, path]);

  const playSound = () => {
    audio.play();
  };

  const navigate = () => {
    if (history.location.pathname !== path) {
      history.push(path);
    }
  };

  return (
    <button onClick={() => { playSound(); navigate(); }}>
      {isActive ? <ActiveIcon /> : <Icon />}
    </button>
  );
}

export default ButtonWithSound;











/* import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

function ButtonWithSound({ path, soundFile, Icon, ActiveIcon }) {
  const audio = useMemo(() => new Audio(soundFile), [soundFile]);
  const history = useHistory();

  const playSound = () => {
    audio.play();
  };

  const navigate = () => {
    // Verificar si la ruta a la que queremos navegar es diferente a la ruta actual
    if (history.location.pathname !== path) {
      history.push(path); // Navega a la ruta especificada
    }
  };

  return (
    <button onClick={() => {playSound(); navigate();}}>
      {history.location.pathname === path ? <ActiveIcon/> : <Icon/>}
    </button>
  );
}

export default ButtonWithSound;
 */