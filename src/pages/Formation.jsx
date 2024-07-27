import React, { useState } from "react";
import "../styles/styledFormation.css";
import campo from "../assets/images/campo_de_futebol.png";
import { BackgroundContainer } from "../styles/styledPeople";
import { BackgroundContainerField } from "../styles/formation";

export const Formation = () => {
  const [clickedPoints, setClickedPoints] = useState([]);

  function getCoordinates(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = e;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    if (clickedPoints.length < 11) {
      setClickedPoints((prevPoints) => [...prevPoints, { x, y }]);
    } else {
      alert("O Elenco já tem 11 jogadores.");
      console.log(clickedPoints);
    }
  }

  function manual() {
    setClickedPoints([]);
  }

  function show442aCoordinates() {
    const coordinates = [
      { x: 46.2042786530901, y: 96.58536523338256 },
      { x: 5.141474991064815, y: 84.99999937972402 },
      { x: 93.13319712397615, y: 83.37398311956143 },
      { x: 38.267770382278485, y: 85.609755477285 },
      { x: 63.45755750268055, y: 85.40650344476467 },
      { x: 34.47204903536859, y: 55.52845466427687 },
      { x: 61.042098463737894, y: 54.51219450167524 },
      { x: 21.014491532688034, y: 33.373983119561416 },
      { x: 68.28847558056589, y: 33.57723515208175 },
      { x: 39.993098267237535, y: 11.626015639886624 },
      { x: 59.66183615577065, y: 7.15447092443947 },
    ];
    setClickedPoints(coordinates.slice(0, 11));
  }

  function show442bCoordinates() {
    const coordinates = [
      { x: 51.38026230796724, y: 96.78861726590289 },
      { x: 4.796409414073006, y: 78.69918637159394 },
      { x: 93.47826270096795, y: 77.27642214395166 },
      { x: 65.1828853876396, y: 83.17073108704109 },
      { x: 30.676327688458688, y: 82.76422702200044 },
      { x: 45.514147499106485, y: 63.65853596508988 },
      { x: 18.59903249374537, y: 46.58536523338256 },
      { x: 82.43616423723006, y: 46.382113200862236 },
      { x: 47.23947538406553, y: 28.902438404114267 },
      { x: 31.366458842442306, y: 8.577235152081746 },
      { x: 66.56314769560684, y: 7.56097498948012 },
    ];
    setClickedPoints(coordinates.slice(0, 11));
  }

  function show433Coordinates() {
    const coordinates = [
      { x: 45.85921307609829, y: 95.77235710330126 },
      { x: 5.141474991064815, y: 79.10569043663459 },
      { x: 93.13319712397615, y: 77.68292620899231 },
      { x: 61.3871640407297, y: 85.40650344476467 },
      { x: 33.43685230439316, y: 84.18699124964272 },
      { x: 10.31745864594195, y: 46.78861726590288 },
      { x: 48.619737692032764, y: 50.04064978622809 },
      { x: 88.64734462308263, y: 46.1788611683419 },
      { x: 14.113179992851851, y: 8.78048718460207 },
      { x: 50, y: 9.390243282163047 },
      { x: 88.64734462308263, y: 8.577235152081746 },
    ];
    setClickedPoints(coordinates.slice(0, 11));
  }

  function show343Coordinates() {
    const coordinates = [
      { x: 8.937196337974715, y: 5.934958729317518 },
      { x: 49.30986884601638, y: 7.15447092443947 },
      { x: 89.68254135405805, y: 6.747966859398819 },
      { x: 48.27467211504096, y: 30.93495872931752 },
      { x: 46.54934423008191, y: 54.51219450167524 },
      { x: 15.493442300819089, y: 42.1138205179354 },
      { x: 82.43616423723006, y: 42.72357661549638 },
      { x: 45.85921307609829, y: 96.38211320086224 },
      { x: 46.2042786530901, y: 83.9837392171224 },
      { x: 17.90890133976175, y: 76.46341401387036 },
      { x: 78.64044289032016, y: 73.41463352606549 },
    ];
    setClickedPoints(coordinates.slice(0, 11));
  }

  function show352Coordinates() {
    const coordinates = [
      { x: 46.54934423008191, y: 96.78861726590289 },
      { x: 7.901999606999288, y: 83.37398311956143 },
      { x: 46.894409807073714, y: 85.20325141224436 },
      { x: 87.957213469099, y: 80.93495872931751 },
      { x: 8.247065183991097, y: 51.05690994882971 },
      { x: 91.06280366202529, y: 50.853657916309395 },
      { x: 48.27467211504096, y: 33.17073108704109 },
      { x: 34.12698345837678, y: 62.2357717374476 },
      { x: 67.94341000357407, y: 61.626015639886624 },
      { x: 27.915803072524213, y: 12.642275802488248 },
      { x: 68.9786067345495, y: 9.796747347203697 },
    ];
    setClickedPoints(coordinates.slice(0, 11));
  }

  return (
    <>
      <div className="title">
        <h1>Formação-Em construção</h1>
      </div>
      <div className="button_container">
        <button className="button" onClick={manual}>
          Manual
        </button>
        <button onClick={show442aCoordinates}>4-4-2a</button>
        <button onClick={show442bCoordinates}>4-4-2b</button>
        <button onClick={show433Coordinates}>4-3-3</button>
        <button onClick={show343Coordinates}>3-4-3</button>
        <button onClick={show352Coordinates}>3-5-2</button>
      </div>

      <div className="area-container">
        <div className="area" onClick={getCoordinates}>
          <BackgroundContainerField />
          {clickedPoints.map((clickedPoint, index) => {
            let backgroundColor = "green";
            if (clickedPoint.y >= 66) {
              backgroundColor = "blue";
            } else if (clickedPoint.y >= 33) {
              backgroundColor = "green";
            } else {
              backgroundColor = "red";
            }

            return (
              <div
                key={index}
                style={{
                  left: `${clickedPoint.x}%`,
                  top: `${clickedPoint.y}%`,
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  backgroundColor: backgroundColor,
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
