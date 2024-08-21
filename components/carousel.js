import { useState } from 'react';
import ImageCarousel from './image-carousel';

const images = [
  "image18.jpg",
  "image11.jpg",
  "image12.jpg",
  "image13.jpg",
  "image14.jpg",
  "image19.jpg",
  "image10.jpg",
  "image20.jpg",
  "image26.jpg",
  "image24.jpg"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container rounded-3xl shadow-lg xl:w-1/2 w-4/5 mx-auto mt-20">
      <div className="carousel-wrapper rounded-3xl " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <ImageCarousel key={index} image_url={image} />
        ))}
      </div>
      <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 hover:backdrop-blur-xl hover:border-2 border-[#F8E197]  rounded-full  focus:outline-none transition"
          data-carousel-prev=""
          onClick={prevSlide}
        >
          <svg
            className="w-5 h-5 text-[#F8E197]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 duration-150 items-center justify-center w-10 h-10 hover:backdrop-blur-xl hover:border-2 border-[#F8E197] rounded-full focus:outline-none transition"
          data-carousel-next=""
          onClick={nextSlide}
        >
          <svg
            className="w-5 h-5 text-[#F8E197]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
     
    </div>
  );
};

export default Carousel;
