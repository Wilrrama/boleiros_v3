import styled from "styled-components";
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
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
    color: whitesmoke;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ff6347; /* Tom laranja suave */
    }
  }

  p {
    font-family: "Arial", sans-serif;
    font-size: 1.1rem;
    color: whitesmoke;
    text-align: center;
    margin: 10px 0 30px;
    line-height: 1.6;
  }

  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
    max-width: 800px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      max-width: 650px;
      height: auto;
      display: block;
      margin: 0 auto;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }

    video {
      width: 100%;
      max-width: 650px;
      height: auto;
      display: block;
      margin: 10px auto;
      border-radius: 8px;
    }

    p {
      font-size: 1.2rem;
      color: whitesmoke;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
