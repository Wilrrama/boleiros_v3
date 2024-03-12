import {
  BackgroundContainer,
  StyledAchievements,
} from "../styles/styledAchievements";
import pinheiros from "../assets/images/2019/pinheiros.png";
import Copa_Hortolandia_2019 from "../assets/images/2019/COPA_HORTOLANDIA_2019.png";
import copa_Euro_2024 from "../assets/images/2024/logo_copa_euro.png";
import rosalia_FC from "../assets/images/2024/rosalia_FC.png";
import unidos_coco from "../assets/images/2023/unidos_coco.png";
import copa_campeoes from "../assets/images/2023/copa_campeoes.png";
import copa_nego_dao from "../assets/images/2023/copa_nego_dao.png";
import copa_cesinha from "../assets/images/2023/copa_cesinha.jpg";
import gavioes_do_morro from "../assets/images/2023/gavioes_do_morro.jpeg";

export const Achievements = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledAchievements>
        <header>
          <h1>Campeonatos Realizados</h1>
          {/* <h2>Campeões</h2> */}
        </header>
        <section className="vinte__um">
          <details>
            <summary>2024</summary>
            <table>
              <thead>
                <tr>
                  <th>Competição</th>
                  <th>Equipe Campeã</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="competicao__logo">
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={copa_Euro_2024}
                        alt="Logo do Campeonato"
                      />
                    </a>
                    <p>Copa Euro</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={rosalia_FC}
                        alt="Logo da Equipe"
                      />
                    </a>
                    Rosalia F. C.
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
        <section className="vinte__um">
          <details>
            <summary>2023</summary>
            <table>
              <thead>
                <tr>
                  <th>Competição</th>
                  <th>Equipe Campeã</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={copa_campeoes}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa dos Campeoes</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={unidos_coco}
                        alt="Foto Troféu"
                      />
                    </a>
                    Unidos do Coco F. C.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={copa_cesinha}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Cesinha Brasil</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={gavioes_do_morro}
                        alt="Foto Troféu"
                      />
                    </a>
                    Gavioes do Morro
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={copa_nego_dao}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Nego Dão</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={rosalia_FC}
                        alt="Foto Troféu"
                      />
                    </a>
                    Rosalia F. C.
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
        <section className="vinte__um">
          <details>
            <summary>2021</summary>
            <table>
              <thead>
                <tr>
                  <th>Competição</th>
                  <th>Equipe Campeã</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={pinheiros}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Cidade</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={Copa_Hortolandia_2019}
                        alt="Foto Troféu"
                      />
                    </a>
                    Parma F. C.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={pinheiros}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Cidade</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={Copa_Hortolandia_2019}
                        alt="Foto Troféu"
                      />
                    </a>
                    Unidos do Coco
                  </td>
                </tr>
                <tr>
                  <td>Copa Hortolandia</td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={Copa_Hortolandia_2019}
                        alt="Foto Troféu"
                      />
                    </a>
                    Unidos do Paviotti
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
        <section className="vinte__um">
          <details>
            <summary>2019</summary>
            <table>
              <thead>
                <tr>
                  <th>Competição</th>
                  <th>Equipe Campeã</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="competicao__logo">
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={Copa_Hortolandia_2019}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Hortolandia</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={pinheiros}
                        alt="Foto Troféu"
                      />
                    </a>
                    Pinheiros F. C.
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
      </StyledAchievements>
    </>
  );
};
