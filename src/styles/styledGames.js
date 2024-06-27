import styled from "styled-components";
import guia from "../assets/images/fundo_Games.jpg";
import guia2 from "../assets/images/fundo_games.webp";

export const BackgroundContainerGames = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${guia2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(70%) contrast(40%) saturate(200%);
`;

export const StyledGames = styled.section`
  padding: 20px 3%;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 60px;

  h1 {
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    color: whitesmoke;
  }

  img {
    width: 60%;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
  }

  video {
    width: 90%;
    max-width: 600px;
    display: block;
    margin: auto;
    border-radius: 8px;
  }

  p {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;

    color: whitesmoke;
  }

  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;
