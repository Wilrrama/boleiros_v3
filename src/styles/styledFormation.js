import { styled } from "styled-components";
import campo from "../assets/images/guia.jpg";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  max-width: 1200px;
  /* margin: 0 auto; */
`;

export const Title = styled.div`
  text-align: center;
  margin: 0 0 20px;

  h1 {
    font-size: 28px;
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    position: relative;
    display: inline-block;

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
`;

export const FormationInfo = styled.div`
  text-align: center;
  margin-bottom: 5px;
  color: #fff;
  text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  font-size: 16px;

  span {
    font-weight: bold;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 15px;
    border-radius: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 20px;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  button {
    background-color: rgba(0, 140, 186, 0.8);
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: rgba(0, 123, 181, 0.9);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    &.active {
      background-color: rgba(4, 77, 7, 0.9);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }

    &.manual {
      background-color: rgba(76, 175, 80, 0.8);
      font-size: 14px;
      border-radius: 8px;

      &:hover {
        background-color: rgba(69, 160, 73, 0.9);
      }
    }
  }

  p {
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    margin: 0;
    align-self: center;
    font-size: 14px;
  }
`;

export const AreaContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 200px);
  margin-bottom: 20px;
  padding: 0;
`;

export const FieldArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 3/4;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 8px;
  position: relative;
  background-color: #4caf50;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  /* Campo de futebol */
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }

  /* Círculo central */
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  /* Áreas de gol */
  .goal-area-top,
  .goal-area-bottom {
    position: absolute;
    left: 50%;
    width: 150px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transform: translateX(-50%);
    z-index: 1;
  }

  .goal-area-top {
    top: 0;
  }

  .goal-area-bottom {
    bottom: 0;
  }

  /* Grandes áreas */
  .penalty-area-top,
  .penalty-area-bottom {
    position: absolute;
    left: 50%;
    width: 250px;
    height: 100px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transform: translateX(-50%);
    z-index: 1;
  }

  .penalty-area-top {
    top: 0;
  }

  .penalty-area-bottom {
    bottom: 0;
  }
`;

export const PlayerDot = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  cursor: grab;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  }

  &:active {
    cursor: grabbing;
  }
`;

export const PlayerName = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 12px;
  margin-top: 5px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;
`;

export const FormationDescription = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin-bottom: 60px;
  color: white;
  text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.5;
  }

  .formation-stats {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;

    .stat {
      text-align: center;

      .value {
        font-size: 24px;
        font-weight: bold;
        color: #4caf50;
      }

      .label {
        font-size: 12px;
        opacity: 0.8;
      }
    }
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
  flex-wrap: wrap;

  .legend-item {
    display: flex;
    align-items: center;
    gap: 5px;

    .color {
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }

    .label {
      color: white;
      text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
        -1px -1px 0 #000;
      font-size: 14px;
    }
  }
`;
