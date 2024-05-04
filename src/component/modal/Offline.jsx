import React, { useState, useEffect } from 'react';
import { useSpring, animated, interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import offlineImage from '../../image/app/offline.jpg'; // Importa la imagen offline.png desde tu directorio
//import offlineImage from './';

const Offline = ({ imageLoaded }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsVisible(false);
    const handleOffline = () => setIsVisible(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Lógica para ocultar el aviso después de 2 segundos
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timeoutId);
    };
  }, []);

  const [props, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rot: 0,
    scale: 1,
  }));

  const bind = useDrag(({ active, movement: [mx, my], velocity: [vx, vy] }) => {
    const trigger = Math.abs(vx) > 0.2 || Math.abs(vy) > 0.2;
    if (!active && trigger) setIsVisible(false);
    api.start((i) => {
      const x = active ? mx : 0;
      const y = active ? my : 0;
      const rot = mx / 100;
      const scale = active ? 1.1 : 1;
      return { x, y, rot, scale };
    });
  });

  return (
    <>
      {isVisible && (
        <div style={styles.container} onClick={() => setIsVisible(false)}>
          <animated.div
            {...bind()}
            style={{
              ...styles.modalContent,
              transform: interpolate(
                [props.x, props.y, props.rot, props.scale],
                (x, y, rot, scale) => `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${scale})`
              ),
            }}
          >
            <div style={styles.contentWrapper}>
              {imageLoaded ? ( // Verifica si la imagen está cargada correctamente
                <>
                  <img src={offlineImage} alt="No tienes conexión a internet" style={styles.image} />
                  <p style={styles.message}>Conexión Perdida</p>
                </>
              ) : (
                <p style={styles.loadingMessage}>Conexión Perdida</p>
              )}
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro semi-transparente
    zIndex: 9999, // Asegura que el modal esté por encima de otros elementos
    backdropFilter: 'blur(25px)', // Aplica filtro de desenfoque al fondo
    WebkitBackdropFilter: 'blur(25px)', // Para navegadores basados en WebKit
  },
  modalContent: {
    backgroundColor: 'transparent', // Fondo transparente
    transition: 'opacity 1s ease', // Suaviza la transición al aparecer y desaparecer
  },
  contentWrapper: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: '90%',
    maxHeight: '90%',
    width: '200px', // Ancho máximo de la imagen
    margin: '0 auto', // Centra horizontalmente
  },
  image: {
    width: '100%', // La imagen ocupa todo el ancho del contenedor
    height: 'auto', // Altura ajustada automáticamente
    borderRadius: '12px', // Bordes redondeados
  },
  message: {
    position: 'absolute',
    bottom: '20px', // Ajusta la posición del texto en la parte inferior
    left: '50%',
    transform: 'translateX(-50%)', // Centra horizontalmente
    color: '#fff', // Color del texto
    fontSize: '13px', // Tamaño de fuente
    textAlign: 'center', // Alineación del texto
    zIndex: 99999, // Asegura que el texto esté por encima de la imagen
    width: '100%', // Ocupa todo el ancho del contenedor
  },
  loadingMessage: {
    color: '#fff', // Color del texto
    fontSize: '14px', // Tamaño de fuente
    textAlign: 'center', // Alineación del texto
  },
};

export default Offline;
