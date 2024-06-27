import { GiSoccerBall } from "react-icons/gi";
import { BsCardChecklist } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { GiSoccerKick } from "react-icons/gi";
import { BiSolidJoystick } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";
import { Button } from "../fragments/Button";
import { StyledNav } from "../styles/styledNav";
import { GiSoccerField } from "react-icons/gi";
import { TbSoccerField } from "react-icons/tb";

export const Nav = ({ setActiveSection }) => {
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <StyledNav>
        <Button onClick={() => handleButtonClick("chores")}>
          <BsCardChecklist />
        </Button>
        <Button onClick={() => handleButtonClick("people")}>
          <GiSoccerKick />
        </Button>
        <Button onClick={() => handleButtonClick("formation")}>
          <TbSoccerField />
        </Button>
        <Button onClick={() => handleButtonClick("sellballs")}>
          <GiSoccerBall />
        </Button>
        <Button onClick={() => handleButtonClick("achievements")}>
          <FaTrophy />
        </Button>
        <Button onClick={() => handleButtonClick("games")}>
          <BiSolidJoystick />
        </Button>
      </StyledNav>
    </>
  );
};
