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
import copa_amizade_2021 from "../assets/images/2021/copa_amizade_2021.png";
import copa_cidade_2021 from "../assets/images/2021/copa_cidade_2021.png";
import copa_hortolandia_2021 from "../assets/images/2021/copa_hortolandia_2021.jpg";
import parma from "../assets/images/2021/parma.jpeg";
import paviotti from "../assets/images/2021/paviotti.jpeg";
import copa_sp_2022 from "../assets/images/2022/copa_sp_2022.png";
import copa_hortolandia_2022 from "../assets/images/2022/copa_hortolandia_2022.jpg";
import copa_amizade_2022 from "../assets/images/2022/copa_amizade_2022.png";
import copa_ouro_2022 from "../assets/images/2022/copa_ouro_2022.jpg";
import copa_cesinha_2022 from "../assets/images/2022/copa_cesinha_2022.jpg";
import viela_esporte_clube from "../assets/images/2022/viela_esporte_clube.jpeg";
import juventude from "../assets/images/2022/juventude.jpeg";
import red_bull_sumare from "../assets/images/2022/red_bull_sumare.jpeg";
import atletico_ongaro from "../assets/images/2022/atletico_ongaro.png";
import cruzeiro from "../assets/images/2022/cruzeiro.jpg";
import liberdade_logo from "../assets/images/2024/liberdade_logo.png";
import copa_amizade_2024 from "../assets/images/2024/copa_amizade_2024.jpeg";

export const Achievements = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledAchievements>
        <header>
          <h1>Campeonatos Realizados</h1>
        </header>
        {/* 2024 */}
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
                    <p>Rosalia F. C.</p>
                  </td>
                </tr>
                <tr>
                  <td className="competicao__logo">
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={copa_amizade_2024}
                        alt="Logo do Campeonato"
                      />
                    </a>
                    <p>Copa Amizade</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/pinheiros.martins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={liberdade_logo}
                        alt="Logo da Equipe"
                      />
                    </a>
                    <p>Liberdade</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
        {/* 2023 */}
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
                    <p>Unidos do Coco F. C.</p>
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
                    <p>Gavioes do Morro</p>
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
                    <p>Rosalia F. C.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
        {/* 2022 */}
        <section className="vinte__um">
          <details>
            <summary>2022</summary>
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
                        src={copa_ouro_2022}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Ouro</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={cruzeiro}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Cruzeiro</p>
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
                        src={copa_cesinha_2022}
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
                        src={juventude}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Juventude</p>
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
                        src={copa_amizade_2022}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Amizade</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={red_bull_sumare}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Red Bull</p>
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
                        src={copa_hortolandia_2022}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Hortolandia</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={atletico_ongaro}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Atlético Ongaro</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={copa_sp_2022}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Copa SP</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={viela_esporte_clube}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Viela</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
        {/* 2021 */}
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
                        src={copa_cidade_2021}
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
                        src={parma}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Parma F. C.</p>
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
                        src={copa_amizade_2021}
                        alt="Escudo da Equipe Campeã"
                      />
                    </a>
                    <p>Copa Amizade</p>
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
                    <p>Unidos do Coco</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={copa_hortolandia_2021}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Copa Hortolandia</p>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/primeiracopahortolandia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="equipe__campea"
                        src={paviotti}
                        alt="Foto Troféu"
                      />
                    </a>
                    <p>Unidos do Paviotti</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
        {/* 2019 */}
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
                    <p>Pinheiros F. C.</p>
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
