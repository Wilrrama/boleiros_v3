import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { useState } from "react";
import { People } from "./pages/People";
import { Chores } from "./pages/Chores";
import { SellBalls } from "./pages/SellBalls";
import { NameProvider } from "./contexts/NameContext";
import { ChoreProvider } from "./contexts/ChoreContext";
import { Achievements } from "./pages/Achievements";
import { Footer } from "./components/Footer";
import { Games } from "./pages/Games";
import { Formation } from "./pages/Formation";

export const App = ({ toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("chores");

  return (
    <>
      <Header toggleTheme={toggleTheme}>
        <Nav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </Header>
      {activeSection === "sellballs" ? (
        <SellBalls />
      ) : activeSection === "people" ? (
        <NameProvider>
          <People />
        </NameProvider>
      ) : activeSection === "achievements" ? (
        <Achievements />
      ) : activeSection === "games" ? (
        <Games />
      ) : activeSection === "formation" ? (
        <Formation />
      ) : (
        <ChoreProvider>
          <Chores />
        </ChoreProvider>
      )}
      <Footer />
    </>
  );
};

export default App;
