import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const Title = styled.div`
  text-align: center;
  margin: 20px 0;

  h1 {
    font-size: 24px;
    color: #333;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;

  button {
    background-color: #008cba;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    cursor: pointer;
    border-radius: 12px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #007bb5;
    }

    &.manual {
      background-color: #4caf50;
      font-size: 8px;
      border-radius: 10px;

      &:hover {
        background-color: #45a049;
      }
    }
  }
`;

export const AreaContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 160px);
  margin-bottom: 80px;
  padding: 0 20px;
`;

export const FieldArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 800px;
  aspect-ratio: 3/4;
  border: 2px solid black;
  border-radius: 4px;
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PlayerDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.color};
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
`;
