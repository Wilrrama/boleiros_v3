import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #e7dddd;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    img {
      width: 100%;
      height: 60vh;
    }
  }
`;

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};
