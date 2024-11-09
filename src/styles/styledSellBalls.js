import styled from "styled-components";
import fundo from "../assets/images/fundoazul.webp";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  filter: brightness(50%) contrast(60%) saturate(200%);
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 15px;
  margin-bottom: 100px;

  .title {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    text-align: center;

    h1,
    p,
    h3 {
      color: whitesmoke;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
    }

    a {
      text-decoration: none;
    }

    h1 {
      font-size: 20px;
    }

    h3 {
      font-size: 15px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid whitesmoke;
      border-radius: 4px;
      width: 100px;
      height: 30px;
      color: whitesmoke;
      background-color: green;

      img {
        width: 30px;
      }
    }
  }

  ul {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      display: flex;
      flex-direction: column;
      color: whitesmoke;
      align-items: center;
      gap: 5px;
    }
  }

  .swiper {
    z-index: 0;
    width: 70%;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;

    .swiper__item {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 60%;
      max-width: 300px;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    .title {
      h1 {
        font-size: 28px;
      }

      h3 {
        font-size: 20px;
      }

      button {
        width: 120px;
        height: 40px;
        img {
          width: 35px;
        }
      }
    }

    ul li .swiper img {
      width: 50%;
      max-width: 200px;
    }
  }

  @media (min-width: 1024px) {
    .title {
      gap: 15px;

      h1 {
        font-size: 32px;
      }

      h3 {
        font-size: 24px;
      }
    }

    .swiper {
      width: 50%;
    }

    .swiper img {
      width: 40%;
      max-width: 180px;
    }
  }
`;
