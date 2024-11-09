import { styled } from "styled-components";

export const BackgroundContainerFormation = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  z-index: -1; */
  background-image: url(${guia});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(70%) contrast(40%) saturate(200%);
`;

export const AreaContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
  margin-bottom: 80px;

  .area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    min-height: 80vh;
    border: 2px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    /* background-image: url("../assets/images/campo_de_futebol.png"); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    max-height: 100%;
    overflow: hidden; */
  }

  .area img {
    width: 100%;
    height: 100%;
  }

  .button_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .button_container .button {
    background-color: #4caf50; /* Cor de fundo */
    border: none; /* Sem borda */
    color: white; /* Cor do texto */
    padding: 5px 10px; /* Espaçamento interno */
    text-align: center; /* Alinhamento do texto */
    text-decoration: none; /* Sem sublinhado */
    display: inline-block; /* Exibição inline-block */
    font-size: 8px; /* Tamanho da fonte */
    cursor: pointer; /* Cursor ao passar sobre o botão */
    border-radius: 10px; /* Bordas arredondadas */
    transition: background-color 0.3s ease; /* Transição suave ao passar sobre o botão */
  }

  .button_container .button:hover {
    background-color: #45a049; /* Cor de fundo ao passar o mouse */
  }

  /* Estilização para outros botões */
  .button_container button {
    background-color: #008cba; /* Cor de fundo */
    border: none; /* Sem borda */
    color: white; /* Cor do texto */
    padding: 5px 10px; /* Espaçamento interno */
    text-align: center; /* Alinhamento do texto */
    text-decoration: none; /* Sem sublinhado */
    display: inline-block; /* Exibição inline-block */
    font-size: 12px; /* Tamanho da fonte */
    margin: 4px 2px; /* Margem */
    cursor: pointer; /* Cursor ao passar sobre o botão */
    border-radius: 12px; /* Bordas arredondadas */
    transition: background-color 0.3s ease; /* Transição suave ao passar sobre o botão */
  }

  .button_container button:hover {
    background-color: #007bb5; /* Cor de fundo ao passar o mouse */
  }
`;
