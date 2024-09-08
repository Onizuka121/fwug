"use client";
import { useState, useEffect } from "react";

const images = [
  "image35.jpg",
  "image34.jpg",
  "image18.jpg",
  "image11.jpg",
  "image12.jpg",
  "image13.jpg",
  "image28.jpg",
  "image24.jpg",
  "image27.jpg",
];

const ImageSwitcher = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState("fade-in");

  const nextImage = () => {
    setFade("fade-out");
    setTimeout(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
      setFade("fade-in");
    }, 500); // Durata della dissolvenza
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Cambia immagine ogni 3 secondi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
      <div className="h-full p-2 overflow-hidden shadow-lg border border-[#F8E197] rounded-3xl image-container">
        <img
          alt="#_"
          className={`image ${fade} relative  w-full rounded-2xl drop-shadow-2xl`}
          src={`/images/${currentImage}`}
        />
      </div>
    </div>
  );
};

export default ImageSwitcher;
