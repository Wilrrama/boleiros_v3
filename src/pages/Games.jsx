import React, { useState } from "react";
import Copa_Hortolandia from "../assets/images/patch/2_Copa_Hortolandia.png";
import copa_amizade_21 from "../assets/images/patch/copa_amizade_21.jpg";
import videoCopaHortolandia from "../assets/images/patch/copa_hortolandia_video.mp4";
import { BackgroundContainerGames, StyledGames } from "../styles/styledGames";
import { Modal } from "../fragments/Modal";

export const Games = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <>
      <BackgroundContainerGames />
      <StyledGames>
        <h1>Games</h1>
        <p>
          Durante minha participação na Liga, desenvolvi dois patches para o
          jogo Bomba Patch no PS2, os quais representaram dois campeonatos: a
          Segunda Copa Hortolândia e a Copa Amizade de 2021.
        </p>

        <div className="game">
          <img
            src={Copa_Hortolandia}
            alt="Copa Hortolandia"
            onClick={() => handleImageClick(Copa_Hortolandia)}
          />
          <video controls>
            <source src={videoCopaHortolandia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Bomba Patch - Segunda Copa Hortolândia</p>
        </div>

        <div className="game">
          <img
            src={copa_amizade_21}
            alt="Copa Amizade 2021"
            onClick={() => handleImageClick(copa_amizade_21)}
          />
          <video controls>
            <source src={videoCopaHortolandia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Bomba Patch - Copa Amizade 2021</p>
        </div>
      </StyledGames>

      <Modal show={showModal} onClose={handleCloseModal}>
        <img src={modalImage} alt="Expanded" />
      </Modal>
    </>
  );
};
