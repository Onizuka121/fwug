"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { myFont } from "../ui/span"

const memes = [
  { id: 1, src: "/images/image56.jpg", alt: "Meme 1" },
  { id: 2, src: "/images/image57.jpg", alt: "Meme 2" },
  { id: 3, src: "/images/image46.jpg", alt: "Meme 3" },
  { id: 4, src: "/images/image59.jpg", alt: "Meme 4" },
  { id: 5, src: "/images/image50.jpg", alt: "Meme 5" },
  { id: 6, src: "/images/image49.jpg", alt: "Meme 6" },
  { id: 7, src: "/images/image48.jpg", alt: "Meme 7" },
  { id: 8, src: "/images/image52.jpg", alt: "Meme 8" },
  { id: 9, src: "/images/image47.jpg", alt: "Meme 9" },
  { id: 10, src: "/images/image51.jpg", alt: "Meme 9" },
  { id:11, src: "/images/image55.jpg", alt: "Meme 9" },
  { id: 12, src: "/images/image54.jpg", alt: "Meme 9" },
]

export default function Section2() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className={`${myFont.className} text-center p-10 mb-6  text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl   text-shadow  leading-none tracking-tight text-[#65B1E0] md:mx-auto`}>
            $FWUG GALLERY MEME
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {memes.map((meme) => (
          <motion.div
            key={meme.id}
            layoutId={`meme-${meme.id}`}
            onClick={() => setExpandedId(expandedId === meme.id ? null : meme.id)}
            initial={{ borderRadius: "0.5rem" }}
            className="cursor-pointer overflow-hidden border-4 border-black rounded-3xl"
          >
            <motion.img
              src={meme.src}
              alt={meme.alt}
              className="w-full h-full object-cover"
              layoutId={`meme-image-${meme.id}`}
            />
          </motion.div>
        ))}
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
  )
}