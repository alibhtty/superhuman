import React, { useState, useEffect } from 'react';
import * as Icon from '../../component/icons';
import { keyframes } from 'styled-components';
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
// import cover4bImg from "./assets/icons/cover4b.png";
import extrasImg from "./assets/icons/sombra-mixtape.png";
import { ShoesDetails } from "./shoesDetails";
// import './highlight.css';
// import './index.css';

// FX
const Shine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0, 255, .9), rgba(255, 20, 0, .2));
  opacity: .3;
  pointer-events: none;
  border-radius:20px;
  z-index:99;
`;


const CardWrapper = styled.div`
  width: 100%;
  height: calc(90% - 10vh);
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0; /* 99 */

  @media (display-mode: standalone) {
    height: 100vh;
  }
`;

// LED MIXTAPE BANNER
const bgMix = keyframes`
  0% { opacity: 1.0; }
  50% { opacity: 0.75; }
  100% { opacity: 2.0; }
`;
const CardContainer = styled(motion.div)`
  width: 285px;
  height: 420px;
  display: flex;
  margin-top:0vh;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  
  color: #fff;
  position: relative;
  cursor: grab;

  background-image: linear-gradient(90deg, #ff6600, #1d1f21, #1d1f21, #ff6600);
  box-shadow: 0px 0px 6px 4px #000000;
  animation: ${bgMix} 1s infinite;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`; /* background-color: #1d1f21; */


const Island = styled.div`
  position:absolute;
  width: 4rem;
  height:.4rem;
  background-color:#000000;
  border-bottom: 1px solid #63a4ff;
  border-right: 1px solid #63a4ff;
  border-radius:25px;
  align-items: center;
  justify-content: center;
  top:1rem;
  z-index:11;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 20px;
  z-index: -1;
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: #066EFF;
  background: linear-gradient(to bottom, rgb(6, 110, 255), rgb(29, 31, 33,0));
  border-radius: 20px 20px 0 0;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 0em 0px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const TitleText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-family:'BICRO';
  margin: 0px;
  margin-top:1.5rem;
  z-index: 10;
  font-size: 25px; 
  font-weight: 900;
`;  // 40px  sin font family

const ShoesWrapper = styled.div`
  width: 100%;
  height: 170px;
  position: absolute;
  display: contents;
  align-items: center;
  justify-content: center;
`; // height 100%
const ShoesWrapper2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 150px;
  z-index: 99;
  user-select: none;
  margin-right: -.8em;
  margin-top: 0em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
    pointer-events:none;
  }
`;

const Extras = styled(motion.div)`
  width: auto;
  height: 170px;
  z-index: 98;
  user-select: none;
  margin-right: -2em;
  margin-top: -5.5em;
  opacity:.5;
  pointer-events:none;
  img {
    width: auto;
    height: 100%;
  }
`;



export function CyborgCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Función updateReflection FX
  function updateReflection(degree, percentage) {
    return `linear-gradient(${degree}deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) ${percentage}%,rgba(255,255,255,0) 100%), url('${imgUrl}')`;
  }

  useEffect(() => {
    function handleOrientation(event) {
      const { alpha, beta, gamma } = event;
      // Actualiza los valores de x e y aquí
      // Puedes ajustar la sensibilidad de la animación cambiando los valores multiplicados
      x.set(gamma * 3);
      y.set(beta * 3);


      // Calcula el grado y el porcentaje en base a los valores de alpha, beta y gamma
      const degree = gamma;
      const percentage = beta > 0 ? beta / 180 * 100 : 0;

      // Actualiza el fondo de la tarjeta
      card.style.background = updateReflection(degree, percentage);
      card.style.backgroundSize = "cover";
    }

    window.addEventListener('deviceorientation', handleOrientation);

    // Asegúrate de limpiar el controlador de eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []); // Asegúrate de que este efecto se ejecute solo una vez al montar el componente
  
  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.26}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {/* <Shine style={{ x, y, rotateX, rotateY, z: 100 }} /> */}
        <TopContainer>

          <Island> </Island>

          <CircleWrapper>
            <Circle />
          </CircleWrapper>

          <ShoesWrapper2>
            <Extras
              style={{ x, y: y.get() + 50, rotateX, rotateY, rotate: "0deg", z: 50000 }} // Ajusta el valor de y para cambiar la posición vertical
              drag
              dragElastic={0.02}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={extrasImg} />
            </Extras>
          </ShoesWrapper2>

          <ShoesWrapper>
            <Shoes
              // style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}     elastic de 0.12
              style={{ x, y, rotateX, rotateY, rotate: "0deg",  z: 100000 }}
              drag
              dragElastic={0.26}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <Icon.Mixtape style={{ width: '100px', height: '140px' }} />
              {/* <img src={cover4bImg} /> */}
            </Shoes>
          </ShoesWrapper>

          <TitleText>mixtape</TitleText>
        </TopContainer>
        <BottomContainer>
          <ShoesDetails />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}