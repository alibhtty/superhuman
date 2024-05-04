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

  const handleImageClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div style={styles.container}>
          <animated.div
            {...bind()}
            style={{
              ...styles.modalContent,
              touchAction: 'none',
              transform: interpolate(
                [props.x, props.y, props.rot, props.scale],
                (x, y, rot, scale) => `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${scale})`
              ),
            }}
          >
            <div style={styles.contentWrapper}>
              <div style={styles.imageWrapper} onClick={handleImageClick}>
                {content}
              </div>
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
    backgroundColor: 'rgba(15, 15, 15, 0.7)',
    zIndex: 9999,
    backdropFilter: 'blur(45px)',
    WebkitBackdropFilter: 'blur(45px)',
  },
  modalContent: {
    backgroundColor: 'transparent',
    transition: 'opacity 1s ease',
    borderRadius: '14px',
    overflow: 'hidden',
  },
  contentWrapper: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    margin: '0 auto',
    borderRadius: '14px',
  },
  imageWrapper: {
    cursor: 'pointer', // Hace que el cursor cambie al pasar por encima de la imagen
  },
};

export default Modal;
