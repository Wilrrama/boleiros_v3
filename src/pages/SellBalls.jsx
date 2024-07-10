import { StyledMain, BackgroundContainer } from "../styles/styledSellBalls";
import zap from "../assets/images/zap.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { euroFibra, euroInfinity, euroPro, euroRecreativa } from "../data/data";
import { Modal } from "../fragments/Modal";
import { useState } from "react";

export const SellBalls = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [initialSlide, setInitialSlide] = useState(0);

  const handleImageClick = (images, index) => {
    setModalImages(images);
    setInitialSlide(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImages([]);
    setInitialSlide(0);
  };

  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="title">
          <h1>Bolas (Campo) - Região 019</h1>
          <p>Preço Bacana, Sem taxa de Entrega</p>
          <h3>Entre em contato pelo WhatsApp</h3>
          <a
            href="https://api.whatsapp.com/send?phone=5519994185551"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img src={zap} alt="WhatsApp logo" />
              Dell
            </button>
          </a>
        </div>

        <ul>
          {/* euroPro */}
          <li>
            <h3>Euro Pro</h3>
            <p>Bola Profissional</p>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation, Pagination]}
            >
              {euroPro.map((item, index) => (
                <SwiperSlide key={item.id} className="swiper__item">
                  <img
                    src={item.image}
                    alt="Slider"
                    onClick={() => handleImageClick(euroPro, index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </li>
          {/* euroFibra */}
          <li>
            <h3>Euro Fribra</h3>
            <p>Bola Profissional</p>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation, Pagination]}
            >
              {euroFibra.map((item, index) => (
                <SwiperSlide key={item.id} className="swiper__item">
                  <img
                    src={item.image}
                    alt="Slider"
                    onClick={() => handleImageClick(euroFibra, index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </li>
          {/* euroInfinity */}
          <li>
            <h3>Euro Infinity</h3>
            <p>Bola Oficial</p>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation, Pagination]}
            >
              {euroInfinity.map((item, index) => (
                <SwiperSlide key={item.id} className="swiper__item">
                  <img
                    src={item.image}
                    alt="Slider"
                    onClick={() => handleImageClick(euroInfinity, index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </li>
          {/* euroRecreativa */}
          <li>
            <h3>Euro Recreativa</h3>
            <p>Criança até 10 anos</p>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation, Pagination]}
            >
              {euroRecreativa.map((item, index) => (
                <SwiperSlide key={item.id} className="swiper__item">
                  <img
                    src={item.image}
                    alt="Slider"
                    onClick={() => handleImageClick(euroRecreativa, index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </li>
        </ul>
      </StyledMain>

      <Modal show={showModal} onClose={handleCloseModal}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
          initialSlide={initialSlide}
        >
          {modalImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
};
