import React, { useState, useEffect } from "react";

import campo from "../assets/images/campo_de_futeboll.png";
import { BackgroundContainer } from "../styles/styledChores";
import {
  Container,
  ButtonContainer,
  AreaContainer,
  FieldArea,
  Title,
  PlayerDot,
} from "../styles/styledFormation";

export const Formation = () => {
  const [players, setPlayers] = useState([]);
  const [currentFormation, setCurrentFormation] = useState("4-4-2a");

  const formations = {
    "4-4-2a": [
      { id: "player-0", x: 46.2042786530901, y: 96.58536523338256 },
      { id: "player-1", x: 5.141474991064815, y: 84.99999937972402 },
      { id: "player-2", x: 93.13319712397615, y: 83.37398311956143 },
      { id: "player-3", x: 38.267770382278485, y: 85.609755477285 },
      { id: "player-4", x: 63.45755750268055, y: 85.40650344476467 },
      { id: "player-5", x: 34.47204903536859, y: 55.52845466427687 },
      { id: "player-6", x: 61.042098463737894, y: 54.51219450167524 },
      { id: "player-7", x: 21.014491532688034, y: 33.373983119561416 },
      { id: "player-8", x: 68.28847558056589, y: 33.57723515208175 },
      { id: "player-9", x: 39.993098267237535, y: 11.626015639886624 },
      { id: "player-10", x: 59.66183615577065, y: 7.15447092443947 },
    ],
    "4-4-2b": [
      { id: "player-0", x: 51.38026230796724, y: 96.78861726590289 },
      { id: "player-1", x: 4.796409414073006, y: 78.69918637159394 },
      { id: "player-2", x: 93.47826270096795, y: 77.27642214395166 },
      { id: "player-3", x: 65.1828853876396, y: 83.17073108704109 },
      { id: "player-4", x: 30.676327688458688, y: 82.76422702200044 },
      { id: "player-5", x: 45.514147499106485, y: 63.65853596508988 },
      { id: "player-6", x: 18.59903249374537, y: 46.58536523338256 },
      { id: "player-7", x: 82.43616423723006, y: 46.382113200862236 },
      { id: "player-8", x: 47.23947538406553, y: 28.902438404114267 },
      { id: "player-9", x: 31.366458842442306, y: 8.577235152081746 },
      { id: "player-10", x: 66.56314769560684, y: 7.56097498948012 },
    ],
    "4-3-3": [
      { id: "player-0", x: 45.85921307609829, y: 95.77235710330126 },
      { id: "player-1", x: 5.141474991064815, y: 79.10569043663459 },
      { id: "player-2", x: 93.13319712397615, y: 77.68292620899231 },
      { id: "player-3", x: 61.3871640407297, y: 85.40650344476467 },
      { id: "player-4", x: 33.43685230439316, y: 84.18699124964272 },
      { id: "player-5", x: 10.31745864594195, y: 46.78861726590288 },
      { id: "player-6", x: 48.619737692032764, y: 50.04064978622809 },
      { id: "player-7", x: 88.64734462308263, y: 46.1788611683419 },
      { id: "player-8", x: 14.113179992851851, y: 8.78048718460207 },
      { id: "player-9", x: 50, y: 9.390243282163047 },
      { id: "player-10", x: 88.64734462308263, y: 8.577235152081746 },
    ],
    "3-4-3": [
      { id: "player-0", x: 8.937196337974715, y: 5.934958729317518 },
      { id: "player-1", x: 49.30986884601638, y: 7.15447092443947 },
      { id: "player-2", x: 89.68254135405805, y: 6.747966859398819 },
      { id: "player-3", x: 48.27467211504096, y: 30.93495872931752 },
      { id: "player-4", x: 46.54934423008191, y: 54.51219450167524 },
      { id: "player-5", x: 15.493442300819089, y: 42.1138205179354 },
      { id: "player-6", x: 82.43616423723006, y: 42.72357661549638 },
      { id: "player-7", x: 45.85921307609829, y: 96.38211320086224 },
      { id: "player-8", x: 46.2042786530901, y: 83.9837392171224 },
      { id: "player-9", x: 17.90890133976175, y: 76.46341401387036 },
      { id: "player-10", x: 78.64044289032016, y: 73.41463352606549 },
    ],
    "3-5-2": [
      { id: "player-0", x: 46.54934423008191, y: 96.78861726590289 },
      { id: "player-1", x: 7.901999606999288, y: 83.37398311956143 },
      { id: "player-2", x: 46.894409807073714, y: 85.20325141224436 },
      { id: "player-3", x: 87.957213469099, y: 80.93495872931751 },
      { id: "player-4", x: 8.247065183991097, y: 51.05690994882971 },
      { id: "player-5", x: 91.06280366202529, y: 50.853657916309395 },
      { id: "player-6", x: 48.27467211504096, y: 33.17073108704109 },
      { id: "player-7", x: 34.12698345837678, y: 62.2357717374476 },
      { id: "player-8", x: 67.94341000357407, y: 61.626015639886624 },
      { id: "player-9", x: 27.915803072524213, y: 12.642275802488248 },
      { id: "player-10", x: 68.9786067345495, y: 9.796747347203697 },
    ],
  };

  useEffect(() => {
    // Load saved formation or use default
    const savedFormation = localStorage.getItem("lastFormation") || "4-4-2a";
    const savedPositions = localStorage.getItem("formation");

    setCurrentFormation(savedFormation);

    if (savedPositions) {
      setPlayers(JSON.parse(savedPositions));
    } else {
      setPlayers(formations[savedFormation]);
    }
  }, []);

  const getPlayerColor = (y) => {
    if (y >= 66) return "#0066cc";
    if (y >= 33) return "#044d07";
    return "#cc0000";
  };

  const saveFormation = (formationName) => {
    setCurrentFormation(formationName);
    setPlayers(formations[formationName]);
    localStorage.setItem("lastFormation", formationName);
    localStorage.setItem(
      "formation",
      JSON.stringify(formations[formationName])
    );
  };

  return (
    <Container>
      <BackgroundContainer />

      <ButtonContainer>
        <button
          onClick={() => saveFormation("4-4-2a")}
          className={currentFormation === "4-4-2a" ? "active" : ""}
        >
          4-4-2a
        </button>
        <button
          onClick={() => saveFormation("4-4-2b")}
          className={currentFormation === "4-4-2b" ? "active" : ""}
        >
          4-4-2b
        </button>
        <button
          onClick={() => saveFormation("4-3-3")}
          className={currentFormation === "4-3-3" ? "active" : ""}
        >
          4-3-3
        </button>
        <button
          onClick={() => saveFormation("3-4-3")}
          className={currentFormation === "3-4-3" ? "active" : ""}
        >
          3-4-3
        </button>
        <button
          onClick={() => saveFormation("3-5-2")}
          className={currentFormation === "3-5-2" ? "active" : ""}
        >
          3-5-2
        </button>
        <p>apenas mobile</p>
      </ButtonContainer>

      <AreaContainer>
        <FieldArea backgroundImage={campo} className="field-area">
          {players.map((player) => (
            <div
              key={player.id}
              style={{
                position: "absolute",
                left: `${player.x}%`,
                top: `${player.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <PlayerDot color={getPlayerColor(player.y)} />
            </div>
          ))}
        </FieldArea>
      </AreaContainer>
    </Container>
  );
};
