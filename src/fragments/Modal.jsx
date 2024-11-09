import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  position: relative;
  width: 100%;
  max-width: 1200px;

  .close-button {
    position: absolute;
    right: 20px;
    top: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 10;
    color: #333;

    &:hover {
      color: #000;
    }
  }

  .swiper-container {
    width: 100%;
    padding: 40px;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      max-width: 100%;
      max-height: 70vh;
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }

  /* Customização dos controles do Swiper */
  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
  }

  .swiper-pagination-bullet-active {
    background: #000;
  }
`;

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <div className="swiper-container">{children}</div>
      </ModalContent>
    </ModalOverlay>
  );
};
