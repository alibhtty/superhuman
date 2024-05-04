import React from 'react';
import { useSpring, animated, interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const Modal = ({ isVisible, setIsVisible, content }) => {
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

  const handleContainerClick = (e) => {
    // Verifica si el clic ocurrió dentro del contenido del modal
    if (!e.target.closest('.modalContent')) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <div style={styles.container} onClick={handleContainerClick}>
          <animated.div
            {...bind()}
            style={{
              ...styles.modalContent,
              touchAction: 'none', // Agrega esta línea para deshabilitar el comportamiento táctil
              transform: interpolate(
                [props.x, props.y, props.rot, props.scale],
                (x, y, rot, scale) => `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${scale})`
              ),
            }}
          >
            <div style={styles.contentWrapper}>
              {content}
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
    backgroundColor: 'rgba(15, 15, 15, 0.7)', // Fondo oscuro semi-transparente
    zIndex: 9999, // Asegura que el modal esté por encima de otros elementos
    backdropFilter: 'blur(45px)', // Aplica filtro de desenfoque al fondo
    WebkitBackdropFilter: 'blur(45px)', // Para navegadores basados en WebKit
  },
  modalContent: {
    backgroundColor: 'transparent', // Fondo transparente
    transition: 'opacity 1s ease', // Suaviza la transición al aparecer y desaparecer
    borderRadius: '14px', // Borde redondeado
    overflow: 'hidden', // Oculta cualquier parte de la imagen que esté fuera del modal
  },
  contentWrapper: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%', // Ancho máximo de la imagen
    margin: '0 auto', // Centra horizontalmente
    borderRadius: '14px',
  },
};

export default Modal;
