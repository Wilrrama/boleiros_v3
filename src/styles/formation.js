import styled from "styled-components";
import fundo from "../assets/images/campo_de_futeboll.png";

export const BackgroundContainerField = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  filter: brightness(50%) contrast(60%) saturate(200%);
  position: absolute;
  top: 0;
  left: 0;
`;
