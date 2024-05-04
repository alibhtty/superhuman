import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';
import {Marginer} from "./marginer";
import MixtapeImg from "./assets/icons/mixtape.svg";
import Web4bImg from "./assets/icons/web4b.svg";
import CybImg from "./assets/icons/cyb.svg";
import LinkImg from "./assets/icons/link.svg";

const DetailsContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    padding: 1.5em 0px 0 0px;
    line-height:24px;
    padding-bottom:1rem;
`;  /* ========== 1.4 =========== */

const MediumText = styled.span`
    font-size:14px;
    color:#fff;
    font-weight:800;
    text-transform:uppercase;
`;

const SmallTextLogo = styled.span`
    display:flex;
    max-width:50%;
    font-size:11px;
    color:rgb(255,255,255,.7);
    font-family:'Arial';
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:.2px
`; /* ======= ON LINE ======= */
const SmallText = styled.span`
    max-width:50%;
    font-size:7px;
    color:rgb(255,255,255,.7);
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:.2px;
    line-height: 1.2em;
`;
const Negrita = styled.b`
    max-width:50%;
    font-size:7px;
    color:rgb(255,255,255,1);
`;

const RedesText = styled.a`
    display:flex;
    max-width:50%;
    font-size:9px;
    color:#6ec0ff;
    margin-top: 2px;
    font-weight:700;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:.2px;
    padding-bottom:0px;
    gap:3px;
`; /* padding-bottom: 4px    SPAN */

const SpacedHorizontalContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const BuyButton = styled.a`
    padding: 9px 18px 9px 38px;
    /* margin-top: .8em; */
    
    background-color:#0060e2;
    background: linear-gradient(to right, rgb(6, 110, 255, .9),rgb(6, 110, 255, .5));
    color: rgb(138, 207, 255,1);
    text-shadow:3px 2.2px 1.6px rgb(0,0,0,.55);
    text-transform:uppercase;
    text-decoration:none;
    font-size:12px;
    font-weight:700;
    border:0px solid transparent;
    outline:none;
    cursor:pointer;
    transition:all 600ms ease-in-out;
    border-radius:8px;
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    border-right: solid hsla(150, 100%, 40%, .6) 2.2px;
    border-bottom: solid hsla(200, 100%, 50%, .9) 2.4px;
    
    &:hover{
        background: linear-gradient(to right, rgb(6, 110, 255, 1),rgb(6, 110, 255, .65));
        color:#ffffff;
    } 
`;   //  border:3px solid #066EFF;      button      background-color: rgb(6, 110, 255, .5);

const Sites4B = styled.div`
    display:grid;
    grid-auto-flow: column;
    grid-gap:3rem;
    grid-column:1fr 1fr 1fr;
    align-items:center;
    justify-content:center;

    img{
        width:auto;
        height:20px;
    }
`;

const SitesLogo = styled.a`
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
        width:auto;
        height:22px;
    }
`;


/* LED */
const parpadeo = keyframes`
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
`;

const Led = styled.div`
  width:6px;
  background-color: #30ff24;
  height:6px;
  border-radius:50%;
  margin-left:4px;
  margin-top:8px;
  box-shadow: 0px 0px 6px 4px #1d1f21;
  animation: ${parpadeo} 1s infinite;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;  //  on line verde #30ff24        azul mixtape  #066EFF


const MarginDot =styled.div`
height:.2rem;
background: repeating-linear-gradient(to right, #000, #000 16px, transparent 18px, transparent 25px);
margin-top: 1em;
border-radius:4px;
z-index:99;
`;



export function ShoesDetails(props){

    return <DetailsContainer>
            <SmallTextLogo>
                ON LINE<Led/>
            </SmallTextLogo>
            <SpacedHorizontalContainer>
                <MediumText>MIX STREAM DJ'S</MediumText>

                <Link to="/news">
                  <RedesText target="_blank">
                    <img className="LinkUrl" src={LinkImg}/> NEWS
                  </RedesText>
                </Link>

            </SpacedHorizontalContainer>
            <SpacedHorizontalContainer>
                <SmallText>v3.2</SmallText>
                    <RedesText href="./init/index.html">
                        <img className="LinkUrl" src={LinkImg}/>BIENVENIDO
                    </RedesText>

            </SpacedHorizontalContainer>
            <Marginer direction="vertical" margin=".5em" />

            <SpacedHorizontalContainer>
                <SmallText> 
                    <Negrita>INSTALACIÓN:</Negrita>  <br/>

                    <Marginer direction="vertical" margin=".5em" />

                    <Negrita>iOS</Negrita> ‣ PRESIONA COMPARTIR <br/> Y AÑADIR A EL INICIO. <br/>
                    <Marginer direction="vertical" margin=".5em" />
                    <Negrita>ANDROID</Negrita> ‣ MÁS OPCIONES <br /> E INSTALAR APLICACIÓN </SmallText>
                    {/* <BuyButton href="https://api.whatsapp.com/send?phone=34602316998&text=Hola, ">COLLAB</BuyButton> */}
                    <BuyButton href="https://donate.stripe.com/eVa6sicxD3Nh5yw6or" target="_blank">DONACIÓN</BuyButton>
            </SpacedHorizontalContainer>

            <MarginDot> </MarginDot>

            {/* <Marginer direction="vertical" margin=".5em" />
                <Sites4B>
                    <SitesLogo href="https://alibhtty.web.app/" target="_blank">
                        <img src={Web4bImg}/>
                    </SitesLogo>
                    <SitesLogo href="https://mixtaperadio.web.app/" target="_blank">
                        <img src={MixtapeImg}/>
                    </SitesLogo>
                    <SitesLogo href="https://alibhtty.web.app/cyborg/" target="_blank">
                        <img src={CybImg}/>
                    </SitesLogo>
                </Sites4B>
            <Marginer direction="vertical" margin=".5em" /> */}

           </DetailsContainer>
}