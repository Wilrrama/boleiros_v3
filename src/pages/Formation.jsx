"use client";

import { useState, useEffect, useContext } from "react";
import { NameContext } from "../contexts/NameContext";
import {
  Container,
  ButtonContainer,
  AreaContainer,
  FieldArea,
  Title,
  PlayerDot,
  PlayerName,
  FormationInfo,
  FormationDescription,
  LegendContainer,
  BackgroundContainer,
} from "../styles/styledFormation";

export const Formation = () => {
  const [players, setPlayers] = useState([]);
  const [currentFormation, setCurrentFormation] = useState("4-4-2a");
  const context = useContext(NameContext);
  const nameList = context?.nameList || [];
  // Adicione este estado no início do componente, logo após os outros estados
  const [usedPlayerIds, setUsedPlayerIds] = useState([]);

  // Descrições das formações
  const formationDescriptions = {
    "4-4-2a":
      "Formação clássica com dois atacantes, quatro meio-campistas e quatro defensores. Oferece bom equilíbrio entre defesa e ataque.",
    "4-4-2b":
      "Variação do 4-4-2 com meio-campistas em formato de diamante, proporcionando mais opções de passe no meio-campo.",
    "4-3-3":
      "Formação ofensiva com três atacantes, três meio-campistas e quatro defensores. Ideal para times que priorizam o ataque.",
    "3-4-3":
      "Formação muito ofensiva com três atacantes, quatro meio-campistas e apenas três defensores. Requer laterais com boa capacidade física.",
    "3-5-2":
      "Formação com três zagueiros, cinco meio-campistas e dois atacantes. Oferece solidez defensiva e opções no meio-campo.",
  };

  const formations = {
    "4-4-2a": [
      {
        id: "player-0",
        x: 46.2042786530901,
        y: 96.58536523338256,
        position: "GOL",
      },
      {
        id: "player-1",
        x: 5.141474991064815,
        y: 84.99999937972402,
        position: "LD",
      },
      {
        id: "player-2",
        x: 93.13319712397615,
        y: 83.37398311956143,
        position: "LE",
      },
      {
        id: "player-3",
        x: 38.267770382278485,
        y: 85.609755477285,
        position: "ZAG",
      },
      {
        id: "player-4",
        x: 63.45755750268055,
        y: 85.40650344476467,
        position: "ZAG",
      },
      {
        id: "player-5",
        x: 34.47204903536859,
        y: 55.52845466427687,
        position: "MC",
      },
      {
        id: "player-6",
        x: 61.042098463737894,
        y: 54.51219450167524,
        position: "MC",
      },
      {
        id: "player-7",
        x: 21.014491532688034,
        y: 33.373983119561416,
        position: "MD",
      },
      {
        id: "player-8",
        x: 68.28847558056589,
        y: 33.57723515208175,
        position: "ME",
      },
      {
        id: "player-9",
        x: 39.993098267237535,
        y: 11.626015639886624,
        position: "ATA",
      },
      {
        id: "player-10",
        x: 59.66183615577065,
        y: 7.15447092443947,
        position: "ATA",
      },
    ],
    "4-4-2b": [
      {
        id: "player-0",
        x: 51.38026230796724,
        y: 96.78861726590289,
        position: "GOL",
      },
      {
        id: "player-1",
        x: 4.796409414073006,
        y: 78.69918637159394,
        position: "LD",
      },
      {
        id: "player-2",
        x: 93.47826270096795,
        y: 77.27642214395166,
        position: "LE",
      },
      {
        id: "player-3",
        x: 65.1828853876396,
        y: 83.17073108704109,
        position: "ZAG",
      },
      {
        id: "player-4",
        x: 30.676327688458688,
        y: 82.76422702200044,
        position: "ZAG",
      },
      {
        id: "player-5",
        x: 45.514147499106485,
        y: 63.65853596508988,
        position: "VOL",
      },
      {
        id: "player-6",
        x: 18.59903249374537,
        y: 46.58536523338256,
        position: "MD",
      },
      {
        id: "player-7",
        x: 82.43616423723006,
        y: 46.382113200862236,
        position: "ME",
      },
      {
        id: "player-8",
        x: 47.23947538406553,
        y: 28.902438404114267,
        position: "MEI",
      },
      {
        id: "player-9",
        x: 31.366458842442306,
        y: 8.577235152081746,
        position: "ATA",
      },
      {
        id: "player-10",
        x: 66.56314769560684,
        y: 7.56097498948012,
        position: "ATA",
      },
    ],
    "4-3-3": [
      {
        id: "player-0",
        x: 45.85921307609829,
        y: 95.77235710330126,
        position: "GOL",
      },
      {
        id: "player-1",
        x: 5.141474991064815,
        y: 79.10569043663459,
        position: "LD",
      },
      {
        id: "player-2",
        x: 93.13319712397615,
        y: 77.68292620899231,
        position: "LE",
      },
      {
        id: "player-3",
        x: 61.3871640407297,
        y: 85.40650344476467,
        position: "ZAG",
      },
      {
        id: "player-4",
        x: 33.43685230439316,
        y: 84.18699124964272,
        position: "ZAG",
      },
      {
        id: "player-5",
        x: 10.31745864594195,
        y: 46.78861726590288,
        position: "MC",
      },
      {
        id: "player-6",
        x: 48.619737692032764,
        y: 50.04064978622809,
        position: "MC",
      },
      {
        id: "player-7",
        x: 88.64734462308263,
        y: 46.1788611683419,
        position: "MC",
      },
      {
        id: "player-8",
        x: 14.113179992851851,
        y: 8.78048718460207,
        position: "PD",
      },
      { id: "player-9", x: 50, y: 9.390243282163047, position: "CA" },
      {
        id: "player-10",
        x: 88.64734462308263,
        y: 8.577235152081746,
        position: "PE",
      },
    ],
    "3-4-3": [
      {
        id: "player-0",
        x: 45.85921307609829,
        y: 96.38211320086224,
        position: "GOL",
      },
      {
        id: "player-1",
        x: 46.2042786530901,
        y: 83.9837392171224,
        position: "ZAG",
      },
      {
        id: "player-2",
        x: 17.90890133976175,
        y: 76.46341401387036,
        position: "ZAG",
      },
      {
        id: "player-3",
        x: 78.64044289032016,
        y: 73.41463352606549,
        position: "ZAG",
      },
      {
        id: "player-4",
        x: 15.493442300819089,
        y: 42.1138205179354,
        position: "MD",
      },
      {
        id: "player-5",
        x: 82.43616423723006,
        y: 42.72357661549638,
        position: "ME",
      },
      {
        id: "player-6",
        x: 46.54934423008191,
        y: 54.51219450167524,
        position: "MC",
      },
      {
        id: "player-7",
        x: 48.27467211504096,
        y: 30.93495872931752,
        position: "MC",
      },
      {
        id: "player-8",
        x: 8.937196337974715,
        y: 5.934958729317518,
        position: "PD",
      },
      {
        id: "player-9",
        x: 49.30986884601638,
        y: 7.15447092443947,
        position: "CA",
      },
      {
        id: "player-10",
        x: 89.68254135405805,
        y: 6.747966859398819,
        position: "PE",
      },
    ],
    "3-5-2": [
      {
        id: "player-0",
        x: 46.54934423008191,
        y: 96.78861726590289,
        position: "GOL",
      },
      {
        id: "player-1",
        x: 7.901999606999288,
        y: 83.37398311956143,
        position: "ZAG",
      },
      {
        id: "player-2",
        x: 46.894409807073714,
        y: 85.20325141224436,
        position: "ZAG",
      },
      {
        id: "player-3",
        x: 87.957213469099,
        y: 80.93495872931751,
        position: "ZAG",
      },
      {
        id: "player-4",
        x: 8.247065183991097,
        y: 51.05690994882971,
        position: "LE",
      },
      {
        id: "player-5",
        x: 91.06280366202529,
        y: 50.853657916309395,
        position: "LD",
      },
      {
        id: "player-6",
        x: 48.27467211504096,
        y: 33.17073108704109,
        position: "MEI",
      },
      {
        id: "player-7",
        x: 34.12698345837678,
        y: 62.2357717374476,
        position: "MC",
      },
      {
        id: "player-8",
        x: 67.94341000357407,
        y: 61.626015639886624,
        position: "MC",
      },
      {
        id: "player-9",
        x: 27.915803072524213,
        y: 12.642275802488248,
        position: "ATA",
      },
      {
        id: "player-10",
        x: 68.9786067345495,
        y: 9.796747347203697,
        position: "ATA",
      },
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

  // Adicione este useEffect para resetar os jogadores usados quando a formação muda
  useEffect(() => {
    setUsedPlayerIds([]);
  }, [currentFormation, nameList]);

  const getPlayerColor = (position) => {
    const positionColors = {
      GOL: "#ffcc00",
      ZAG: "#0066cc",
      LD: "#0066cc",
      LE: "#0066cc",
      VOL: "#00cc66",
      MC: "#00cc66",
      MD: "#00cc66",
      ME: "#00cc66",
      MEI: "#00cc66",
      ATA: "#cc0000",
      PD: "#cc0000",
      PE: "#cc0000",
      CA: "#cc0000",
    };

    return positionColors[position] || "#888888";
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

  // Substitua a função getPlayerName por esta versão melhorada
  const getPlayerName = (position, index) => {
    if (!nameList || nameList.length === 0) {
      return position;
    }

    // Mapeamento de posições para funções
    const positionToRole = {
      GOL: "Goleiro",
      ZAG: "Zagueiro",
      LD: "Lateral",
      LE: "Lateral",
      VOL: "Volante",
      MC: "Meio Campo",
      MD: "Meio Campo",
      ME: "Meio Campo",
      MEI: "Meia",
      ATA: "Atacante",
      PD: "Atacante",
      PE: "Atacante",
      CA: "Atacante",
    };

    const role = positionToRole[position];

    // Filtra jogadores pela função correspondente que ainda não foram usados
    const availablePlayers = nameList.filter(
      (player) => player.role === role && !usedPlayerIds.includes(player.id)
    );

    // Se encontrou jogadores disponíveis, usa o primeiro e marca como usado
    if (availablePlayers.length > 0) {
      const player = availablePlayers[0];
      setUsedPlayerIds((prev) => [...prev, player.id]);
      return player.text;
    }

    // Se não há jogadores disponíveis, tenta usar qualquer jogador com a função correta
    const anyMatchingPlayer = nameList.find((player) => player.role === role);
    if (anyMatchingPlayer) {
      return `${anyMatchingPlayer.text}`;
    }

    // Retorna a posição se não encontrar jogador
    return position;
  };

  // Conta quantos jogadores de cada tipo existem na formação
  const countPositionTypes = () => {
    const counts = {
      defenders: 0,
      midfielders: 0,
      forwards: 0,
    };

    players.forEach((player) => {
      if (["ZAG", "LD", "LE"].includes(player.position)) {
        counts.defenders++;
      } else if (["VOL", "MC", "MD", "ME", "MEI"].includes(player.position)) {
        counts.midfielders++;
      } else if (["ATA", "PD", "PE", "CA"].includes(player.position)) {
        counts.forwards++;
      }
    });

    return counts;
  };

  const positionCounts = countPositionTypes();

  // Adicionar log para debug
  console.log("NameList:", nameList);

  return (
    <>
      <BackgroundContainer />
      <Container>
        <Title>
          <h1>Mesa Tática</h1>
        </Title>

        <FormationInfo>
          Formação atual: <span>{currentFormation}</span>
        </FormationInfo>

        <ButtonContainer>
          <button
            onClick={() => saveFormation("4-4-2a")}
            className={currentFormation === "4-4-2a" ? "active" : ""}
          >
            4-4-2 Clássico
          </button>
          <button
            onClick={() => saveFormation("4-4-2b")}
            className={currentFormation === "4-4-2b" ? "active" : ""}
          >
            4-4-2 Diamante
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
        </ButtonContainer>

        <AreaContainer>
          <FieldArea className="field-area">
            {/* Elementos do campo */}
            <div className="goal-area-top"></div>
            <div className="goal-area-bottom"></div>
            <div className="penalty-area-top"></div>
            <div className="penalty-area-bottom"></div>

            {/* Jogadores */}
            {players.map((player, index) => {
              // Encontra jogadores com a mesma posição para indexação
              const positionCount = players.filter(
                (p, i) => p.position === player.position && i < index
              ).length;

              const playerName = getPlayerName(player.position, positionCount);

              return (
                <div
                  key={player.id}
                  style={{
                    position: "absolute",
                    left: `${player.x}%`,
                    top: `${player.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <PlayerDot color={getPlayerColor(player.position)}>
                    {player.position}
                  </PlayerDot>
                  <PlayerName>{playerName}</PlayerName>
                </div>
              );
            })}
          </FieldArea>
        </AreaContainer>

        <LegendContainer>
          <div className="legend-item">
            <div className="color" style={{ backgroundColor: "#0066cc" }}></div>
            <div className="label">Defensores</div>
          </div>
          <div className="legend-item">
            <div className="color" style={{ backgroundColor: "#00cc66" }}></div>
            <div className="label">Meio-campistas</div>
          </div>
          <div className="legend-item">
            <div className="color" style={{ backgroundColor: "#cc0000" }}></div>
            <div className="label">Atacantes</div>
          </div>
          <div className="legend-item">
            <div className="color" style={{ backgroundColor: "#ffcc00" }}></div>
            <div className="label">Goleiro</div>
          </div>
        </LegendContainer>

        <FormationDescription>
          <h3>Sobre a formação {currentFormation}</h3>
          <p>{formationDescriptions[currentFormation]}</p>

          <div className="formation-stats">
            <div className="stat">
              <div className="value">{positionCounts.defenders}</div>
              <div className="label">Defensores</div>
            </div>
            <div className="stat">
              <div className="value">{positionCounts.midfielders}</div>
              <div className="label">Meio-campistas</div>
            </div>
            <div className="stat">
              <div className="value">{positionCounts.forwards}</div>
              <div className="label">Atacantes</div>
            </div>
          </div>
        </FormationDescription>
      </Container>
    </>
  );
};
