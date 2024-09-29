"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SpanText from "./ui/span";


const memes = [
  { id: 1, src: "/images/image40.jpg", alt: "Meme 1" },
  { id: 2, src: "/images/image41.jpg", alt: "Meme 2" },
  { id: 3, src: "/images/image42.jpg", alt: "Meme 3" },
  { id: 4, src: "/images/image43.jpg", alt: "Meme 4" },
  { id: 5, src: "/images/image44.jpg", alt: "Meme 5" },
  { id: 6, src: "/images/image45.jpg", alt: "Meme 6" },
  { id: 7, src: "/images/image46.jpg", alt: "Meme 6" },
  { id: 8, src: "/images/image47.jpg", alt: "Meme 6" },
  { id: 9, src: "/images/image45.jpg", alt: "Meme 6" },
  { id: 10, src: "/images/image45.jpg", alt: "Meme 6" },
  { id: 10, src: "/images/image50.jpg", alt: "Meme 6" },
  { id: 10, src: "/images/image51.jpg", alt: "Meme 6" },
  { id: 10, src: "/images/image52.jpg", alt: "Meme 6" },
  { id: 10, src: "/images/image53.jpg", alt: "Meme 6" },
  { id: 10, src: "/images/image54.jpg", alt: "Meme 6" },
];

export default function ComponentCarousel() {
  const [expandedId, setExpandedId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (isInView && !isPaused) {
      controls.start({
        x: -100 * memes.length, // Continuare dalla posizione attuale
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isInView, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop(); // Stop immediato quando si mette in pausa
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (isInView) {
      // Riprendiamo dalla posizione corrente senza "salto"
      const currentPosition = controls.current || 0; // Otteniamo la posizione corrente dell'animazione
      controls.start({
        x: currentPosition - 100 * memes.length, // Continuare dalla posizione attuale
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
            ease: "linear",
          },
        },
      });
    }
  };

  return (
    <div className="container shadow-[0.40em_0.40em]
              cursor-pointer 
              transition 
              duration-150 
              transform 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em]  mx-auto px-4 py-8 overflow-hidden border-4 mt-5 border-black bg-[#F8E197] rounded-3xl w-full max-w-[95%]">
      
      <div
        ref={containerRef}
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex items-center"
          animate={controls}
          style={{ width: `${200 * memes.length}%` }}
        >
          {[...memes, ...memes].map((meme, index) => (
            <motion.div
              key={`${meme.id}-${index}`}
              layoutId={`meme-${meme.id}-${index}`}
              onClick={() =>
                setExpandedId(expandedId === meme.id ? null : meme.id)
              }
              className="cursor-pointer mr-4 flex-shrink-0"
              style={{ width: "450px" }}
            >
              <motion.img
                src={meme.src}
                alt={meme.alt}
                className="w-full h-auto object-cover rounded-lg border-4 border-black"
                layoutId={`meme-image-${meme.id}-${index}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => setExpandedId(null)}
        style={{ display: expandedId ? "flex" : "none" }}
      >
        {expandedId && (
          <motion.div
            layoutId={`meme-${expandedId}`}
            className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
          >
            <motion.img
              src={memes.find((meme) => meme.id === expandedId).src}
              alt={memes.find((meme) => meme.id === expandedId).alt}
              className="w-full h-auto"
              layoutId={`meme-image-${expandedId}`}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
