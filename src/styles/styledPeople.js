import { styled } from "styled-components";
import campo from "../assets/images/campo_de_futebol.png";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${campo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(50%) contrast(60%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  max-width: 900px;
  margin: 0 auto 90px;

  h1 {
    margin: 0 0 20px;
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    font-size: 28px;
    font-weight: bold;
    align-self: center;
    display: flex;
    align-items: center;
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
    justify-content: space-around;
    margin-bottom: 20px;
    gap: 3px;
    /* background: rgba(0, 0, 0, 0.5); */

    border-radius: 8px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); */
    flex-wrap: nowrap; /* Garante que os elementos fiquem em uma linha */

    .input__nome {
      padding: 10px 15px;
      width: 35%;
      height: 40px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.9);
      font-size: 14px;

      &:focus {
        outline: none;
        border-color: #4caf50;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
      }
    }

    .input__numero {
      padding: 10px 15px;
      width: 15%;
      height: 40px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.9);
      font-size: 14px;

      &:focus {
        outline: none;
        border-color: #4caf50;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
      }
    }

    select {
      width: 20%;
      height: 40px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.9);
      padding: 0 10px;
      font-size: 14px;
      cursor: pointer;

      &:focus {
        outline: none;
        border-color: #4caf50;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
      }

      option {
        background: white;
        color: #333;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 35px;
      height: 40px;
      border-radius: 6px;
      border: none;
      background: rgba(76, 175, 80, 0.8);
      color: #fff;
      font-size: 22px;
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;

      &:hover {
        background: rgba(76, 175, 80, 1);
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }

      &:last-child {
        background: rgba(244, 67, 54, 0.8);

        &:hover {
          background: rgba(244, 67, 54, 1);
        }
      }
    }
  }

  p.no__people {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    font-size: 18px;
    padding: 30px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 80%;
    margin: 20px auto;
  }

  ol {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 100%;
    list-style-type: decimal;
    counter-reset: item;
    padding-left: 18px;
    margin: 0;
    max-height: 70vh;
    margin-bottom: 10px;

    /* overflow-y: auto; */

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

    li {
      position: relative;
      padding: 5px 5px;
      background: rgba(0, 0, 0, 0.6);
      margin-bottom: 2px;
      color: white;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      /* transition: all 0.2s ease; */

      &:before {
        /* content: counter(item) "."; */
        counter-increment: item;
        position: absolute;
        left: -25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        color: white;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.7);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }

      /* Estilo para quando o item está sendo arrastado */
      &[data-rbd-dragging="true"] {
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
      }

      .people__container {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
      }

      .people__name {
        width: 37%;
        font-size: 16px;
        padding: 5px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .people__role {
        width: 25%;
        margin-right: 1%;
        padding: 5px 0;
      }

      .people__number {
        width: 15%;
        margin-right: 3%;
        padding: 5px 0;
        text-align: center;
      }

      .people__buttons {
        width: 18%;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        flex-shrink: 0;
      }

      .role__list {
        display: inline-block;
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: normal;
        background: rgba(46, 189, 189, 0.2);
        color: #2ebdbd;
        border: 1px solid rgba(46, 189, 189, 0.4);
        white-space: nowrap;
      }

      .list__number {
        display: inline-block;
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-radius: 50%;
        background: rgba(30, 144, 255, 0.2);
        color: #1e90ff;
        border: 1px solid rgba(30, 144, 255, 0.4);
        font-weight: bold;
      }

      .button__edit {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        font-size: 16px;
        color: #fff;
        background: #ffa500;
        transition: all 0.2s ease;
        flex-shrink: 0;

        &:hover {
          background: #ff8c00;
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
        }
      }

      .button__remove {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        font-size: 16px;
        color: #fff;
        background: #ab1f3e;
        transition: all 0.2s ease;
        flex-shrink: 0;

        &:hover {
          background: #d81b60;
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
        }
      }

      /* Estilo para o formulário de edição */
      form {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 8px 0;
        /* background: transparent; */
        box-shadow: none;
        flex-wrap: nowrap; /* Garante que os elementos fiquem em uma linha */

        .input__nome {
          width: 37%;
        }

        .input__numero {
          width: 15%;
        }

        select {
          width: 25%;
        }

        .button__save__edit {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 4px;
          width: 40px;
          height: 40px;
          margin-left: 8px;
          font-size: 18px;
          color: #fff;
          background: #4caf50;
          transition: all 0.2s ease;
          flex-shrink: 0;

          &:hover {
            background: #388e3c;
            transform: translateY(-2px);
          }

          &:active {
            transform: translateY(0);
          }
        }
      }
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 5px;

    h1 {
      font-size: 22px;
    }

    form {
      padding: 3px;

      /* Garante tamanhos mínimos para evitar compressão excessiva */
      .input__nome {
        min-width: 100px;
      }

      select {
        min-width: 80px;
      }

      .input__numero {
        min-width: 60px;
      }

      button {
        min-width: 30px;
      }
    }

    ol {
      padding-left: 25px;
    }

    ol li {
      padding: 3px;

      .people__container {
        overflow-x: hidden; /* Permite rolar horizontalmente em telas pequenas */

        /* Garante tamanhos mínimos para evitar compressão excessiva */
        .people__name {
          min-width: 100px;
        }

        .people__role {
          min-width: 70px;
        }

        .people__number {
          min-width: 30px;
        }

        .people__buttons {
          min-width: 70px;
        }
      }

      form {
        overflow-x: auto;

        /* Garante tamanhos mínimos para evitar compressão excessiva */
        .input__nome {
          min-width: 120px;
        }

        select {
          min-width: 100px;
        }

        .input__numero {
          min-width: 60px;
        }
      }
    }
  }

  /* Estilos para diferentes funções */
  .role__list {
    &[data-role="Goleiro"] {
      background: rgba(255, 215, 0, 0.2);
      color: #ffd700;
      border-color: rgba(255, 215, 0, 0.4);
    }

    &[data-role="Defensor"] {
      background: rgba(0, 0, 255, 0.2);
      color: #4169e1;
      border-color: rgba(0, 0, 255, 0.4);
    }

    &[data-role="Lateral"] {
      background: rgba(65, 105, 225, 0.2);
      color: #6495ed;
      border-color: rgba(65, 105, 225, 0.4);
    }

    &[data-role="Volante"] {
      background: rgba(0, 128, 0, 0.2);
      color: #32cd32;
      border-color: rgba(0, 128, 0, 0.4);
    }

    &[data-role="Meia"] {
      background: rgba(255, 165, 0, 0.2);
      color: #ffa500;
      border-color: rgba(255, 165, 0, 0.4);
    }

    &[data-role="Atacante"] {
      background: rgba(255, 0, 0, 0.2);
      color: #ff6347;
      border-color: rgba(255, 0, 0, 0.4);
    }

    &[data-role="Comissão"] {
      background: rgba(128, 128, 128, 0.2);
      color: #a9a9a9;
      border-color: rgba(128, 128, 128, 0.4);
    }
  }
`;
