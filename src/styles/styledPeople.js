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
  background-repeat: no-repeat;
  filter: brightness(50%) contrast(60%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  margin-top: 15px;
  margin-bottom: 90px;

  h1 {
    margin: 5px;
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    font-size: 20px;
    align-self: center;
    display: flex;
    align-items: center;
  }

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    gap: 5px;

    .input__nome {
      padding: 10px;
      width: 37%;
      height: 40px;
      margin-left: 3%;
    }

    .input__numero {
      padding: 10px;
      width: 15%;
      height: 40px;
    }

    select {
      width: 25%;
      height: 40px;
    }

    button {
      color: #fff;
      font-size: 30px;

      &:hover {
        color: yellowgreen;
      }
    }
  }

  p {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  ol {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 98%;
    list-style-type: decimal;

    li {
      margin-left: 7%;
      margin-bottom: 2px;
      color: white;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
      .people__container {
        display: flex;
        align-items: end;
      }
      .people__name {
        width: 37%;
      }
      .people__role {
        width: 25%;
        margin-right: 1%;
      }
      .people__number {
        width: 15%;
        margin-right: 3%;
      }
      .people__buttons {
        width: 18%;
        display: flex;
        justify-content: space-between;
        gap: 7px;
      }
      .role__list {
        color: #2ebdbd;
      }
      .list__number {
        color: #1e90ff;
      }
      .number__list {
        font-weight: 800;
        //color: #800080;
      }
      .button__edit {
        align-items: center;
        justify-content: center;
        border: 1px solid #ffa500;
        border-radius: 4px;
        width: 30px;
        height: 25px;

        font-size: 20px;
        color: #fff;
        background: #ffa500;

        &:hover {
          border: 1px solid #fff;
        }
      }

      .button__remove {
        align-items: center;
        justify-content: center;
        border: 5px solid #ab1f3e;
        border-radius: 4px;
        width: 30px;
        height: 25px;
        font-size: 20px;
        color: #fff;
        background: #ab1f3e;

        &:hover {
          border: 1px solid #fff;
        }
      }

      .button__save__edit {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ffa500;
        border-radius: 4px;
        width: 40px;
        height: 30px;
        margin-left: 5px;
        font-size: 20px;
        color: #fff;
        background: #ffa500;

        &:hover {
          border: 1px solid #fff;
        }
      }
      span {
        color: #fff;
        text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
          -1px -1px 0 #000;
      }
    }
  }
`;
