'use client'

import { useEffect, useState } from 'react';

const images = [
  '/images/image10.jpg',
  '/images/image30.jpg',
  '/images/image20.jpg',
  '/images/image25.jpg',
  '/images/image27.jpg',
];

export default function Caro(){
    
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funzione per scorrere le immagini
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Imposta l'intervallo per lo scorrimento automatico
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Cambia immagine ogni 3 secondi
    return () => clearInterval(interval); // Pulisci l'intervallo al momento dello smontaggio
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full md:min-w-[33.33%] flex-shrink-0"
          >
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

