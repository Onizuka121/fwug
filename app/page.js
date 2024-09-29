// pages/index.js o app/page.js

"use client";
import Link from "next/link";
import "../app/globals.css";
import React from "react";
import Section2 from "../components/sections/section2";
import SectionPump from "../components/sections/section-pump";
import SectionTelegram from "../components/sections/section-tg";
import TimeLine from "../components/time-line";
import FormNewsLetter from "../components/newsletter/form-news";
import VideoComponent from "../components/videoComponent";
import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import ComponentCarousel from "../components/carousel";
import { myFont } from "../components/ui/span";

import BankFwug3D from "../components/ui/bank";

import Loader from "../components/loader";

import dynamic from "next/dynamic";

// Import dinamico del componente BannerMarquee con supporto per Suspense
const BannerMarquee = dynamic(() => import("../components/bannermarquee"), {
  suspense: true,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Effetto per gestire il caricamento iniziale della pagina
  useEffect(() => {
    const handleLoadComplete = () => setIsLoading(false);

    // Se la pagina è completamente caricata, imposta isLoading a false
    if (document.readyState === "complete") {
      handleLoadComplete();
    } else {
      window.addEventListener("load", handleLoadComplete);
    }

    // Cleanup dell'event listener al dismount
    return () => {
      window.removeEventListener("load", handleLoadComplete);
    };
  }, []);

  // Effetto per resettare lo stato di caricamento quando cambia il percorso
  useEffect(() => {
    setIsLoading(true);
    // Simula un breve ritardo per il cambio di percorso
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  const banners = [
    "$FWUG",
    "$The Real FWUG",
    "$FWUG TO THE MOON",
    "$The Real FWUG",
    "$FWUG",
    "$FWUG TO THE MOON",
    "$FWUG",
    "$The Real FWUG",
    "$FWUG",
    "$FWUG TO THE MOON",
    "$FWUG",
    "$The Real FWUG",
    "$FWUG",
    "$FWUG TO THE MOON",
    "$FWUG",
    "$The Real FWUG",
  ];

  if (isLoading) {
    return (
      <div>
        <Loader /> {/* Assicurati che questo componente esista */}
      </div>
    );
  }

  return (
    <>
      {/* Boundary Suspense avvolge solo BannerMarquee */}
     

      <section>
        <div
          className="px-8 py-24 mx-auto md:px-12 lg:px-32  flex flex-col justify-end h-[700px] mt-28 rounded-3xl bg-[#F8E197] border-4 border-black xl:max-w-[70%] max-w-[95%]"
          style={{
            backgroundImage: `url('/images/image60.jpg')`,
            backgroundSize: "cover", // Copre l'intero div
            backgroundPosition: "center", // Posiziona l'immagine al centro
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Contenitore principale per centrare il contenuto */}
          <div className="flex flex-col items-center gap-6 lg:grid-cols-2 lg:gap-24 ">
            <div className="md:order-first text-center">
              <h1
                className={`${myFont.className} text-8xl text-shadow  tracking-tighter text-[#F8E197] text-balance`}
              >
                The Real FWUG
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 animate-on-scroll justify-center flex-col items-center gap-3 mt-10 md:flex-row">
                <Link
                  href={`https://dexscreener.com/solana/gW7cgKUtKtz791HvJYHrtATz8czafMYqLpAt2yaJ1dW`}
                  className={`bg-[#F8E197] 
                    px-[1.3em] 
                    py-[0.6em] 
                    ${myFont.className}
                    border-4 border-black 
                    rounded-xl
                    shadow-[0.40em_0.40em] 
                    cursor-pointer 
                    transition 
                    duration-150 
                    transform 
                    hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.60em_0.60em] 
                    active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em]`}
                >
                  <span className="text-4xl text-[#65B1E0]">Buy now $FGUW</span>
                </Link>
                <Link
                  href={`https://dexscreener.com/solana/gW7cgKUtKtz791HvJYHrtATz8czafMYqLpAt2yaJ1dW`}
                  className={`bg-[#F8E197] 
                    px-[1.3em] 
                    py-[0.6em] 
                    ${myFont.className}
                    border-4 border-black 
                    rounded-xl
                    shadow-[0.40em_0.40em] 
                    cursor-pointer 
                    transition 
                    duration-150 
                    transform 
                    hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.60em_0.60em] 
                    active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em]`}
                >
                  <span className="text-4xl text-[#65B1E0]">TRY OUR PFP</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <BannerMarquee banners={banners} />
      </Suspense>

      <BankFwug3D />
      <TimeLine />
      <div className="m-auto animate-bounce justify-center w-72 shakeY-special mb-10">
        <div className="flex justify-center col-span-1 px-8 animate-bounce">
          {/* Inserisci qui il tuo SVG */}
          <svg
            width="646"
            height="96"
            viewBox="0 0 646 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1064_606)">
              {/* ...percorsi SVG... */}
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1064_606"
                x1="10.81"
                y1="98.29"
                x2="98.89"
                y2="-1.01005"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.08" stopColor="#9945FF" />
                <stop offset="0.3" stopColor="#8752F3" />
                <stop offset="0.5" stopColor="#5497D5" />
                <stop offset="0.6" stopColor="#43B4CA" />
                <stop offset="0.72" stopColor="#28E0B9" />
                <stop offset="0.97" stopColor="#19FB9B" />
              </linearGradient>
              <clipPath id="clip0_1064_606">
                <rect width="646" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <ComponentCarousel />
      <h2
        className={`${myFont.className} text-center p-10 mb-6 mt-14  text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl   text-shadow  leading-none tracking-tight text-[#65B1E0] md:mx-auto`}
      >
        $FWUG SHORTS MEME
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-auto mt-20 gap-10 max-w-[95%] xl:max-w-[60%]">
        <VideoComponent urlbase="richman.MP4" />
        <VideoComponent urlbase="trade.MP4" />
        <VideoComponent urlbase="sium.MP4" />
      </div>

      <SectionPump />
      <SectionTelegram />

      <Section2 />

      <div className="m-auto animate-bounce justify-center w-64 shakeY-special">
        <div className="flex justify-center col-span-1 px-8 animate-bounce">
          {/* Inserisci qui il tuo SVG */}
          <svg
            width="646"
            height="96"
            viewBox="0 0 646 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1064_606)">
              {/* ...percorsi SVG... */}
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1064_606"
                x1="10.81"
                y1="98.29"
                x2="98.89"
                y2="-1.01005"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.08" stopColor="#9945FF" />
                <stop offset="0.3" stopColor="#8752F3" />
                <stop offset="0.5" stopColor="#5497D5" />
                <stop offset="0.6" stopColor="#43B4CA" />
                <stop offset="0.72" stopColor="#28E0B9" />
                <stop offset="0.97" stopColor="#19FB9B" />
              </linearGradient>
              <clipPath id="clip0_1064_606">
                <rect width="646" height="96" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <FormNewsLetter />
    </>
  );
}
