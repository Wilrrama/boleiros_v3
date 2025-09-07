import { styled } from "styled-components";
import guia from "../assets/images/guia.jpg";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${guia});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(70%) contrast(40%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 28px;
    margin: 0 0 20px;
    color: whitesmoke;
    align-self: center;
    display: flex;
    align-items: center;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 2px;
    }
  }

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;

    input {
      flex: 1;
      padding: 12px 15px;
      height: 48px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 16px;
      transition: all 0.2s ease;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      border: none;
      background: rgba(255, 255, 255, 0.2);
      color: whitesmoke;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
        color: #4caf50;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }

      &:last-child:hover {
        color: #ff4d4d;
      }
    }
  }

  div.chores-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    button {
      font-size: 14px;
      padding: 6px 12px;
      color: white;
      border-radius: 6px;
      background-color: rgba(255, 0, 0, 0.6);
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba(255, 0, 0, 0.8);
        transform: scale(1.05);
      }

      &:active {
        transform: scale(1);
      }
    }
  }

  div.chores-list input[type="checkbox"] {
    width: 24px;
    height: 24px;
    appearance: none;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:checked {
      background: rgba(76, 175, 80, 0.8);
      border-color: rgba(76, 175, 80, 0.4);

      &:after {
        content: "✓";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 14px;
        font-weight: bold;
      }
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.8);
    }
  }

  div.chores-list ul {
    margin: 10px 0 50px;
    list-style-type: none;
    width: 100%;
    max-height: 70vh;
    overflow-y: auto;
    padding-right: 10px;

    /* Estilização da barra de rolagem */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  div.chores-list li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 12px 15px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    /* Estilo para quando o item está sendo arrastado */
    &[data-rbd-dragging="true"] {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }
  }

  div.chores-list li span {
    flex: 1;
    font-size: 18px;
    margin: 0 15px;
    color: whitesmoke;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  li span {
    font-size: 18px;
    margin: 0 15px;
    color: whitesmoke;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  h1 {
    font-size: 32px;
    color: whitesmoke;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: whitesmoke;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    text-align: center;
    padding: 30px 0;
  }

  /* Adiciona um indicador visual de progresso */
  .progress-container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .progress-text {
    color: whitesmoke;
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  /* Adiciona um estilo para o ícone de arrastar */
  .drag-handle {
    cursor: grab;
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    margin-right: 5px;
    user-select: none;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 15px;

    form {
      flex-direction: row;

      input {
        width: 100%;
        margin-left: 0;
      }
    }

    div.chores-list li span {
      font-size: 16px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;
