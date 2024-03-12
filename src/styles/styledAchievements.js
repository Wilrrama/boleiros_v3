import { styled } from "styled-components";
import campo from "../assets/images/campo_de_futebol.png";
import campo2 from "../assets/images/campo_de_futebol_bola.jpg";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${campo2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(90%) contrast(50%) saturate(200%);
`;

export const StyledAchievements = styled.main`
  margin-top: 25px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    h1 {
      font-size: 25px;
    }
    h2 {
      text-align: center;
      font-size: 25px;
      padding-bottom: 15px;
    }
  }

  .vinte__um table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .vinte__um th,
  .vinte__um td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  .vinte__um th {
    background-color: #04aa6d;
    color: white;
  }

  .competicao__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .equipe__campea {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }
`;
