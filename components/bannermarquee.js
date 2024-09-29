// components/BannerMarquee.js

"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { myFont } from "./ui/span";
import Image from "next/image";

export default function BannerMarquee({ banners }) {
  const searchParams = useSearchParams(); // Utilizzo di useSearchParams all'interno di Suspense

  // Puoi utilizzare searchParams come necessario
  // Ad esempio: const param = searchParams.get('paramName');

  const fullBanners = [...banners, ...banners];

  return (
    <div className="overflow-hidden marquee-container bg-[#F8E197] gap-10 py-4 mt-6 border-4 border-black">
      <div className="marquee-content gap-20">
        {fullBanners.map((banner, index) => (
          <React.Fragment key={index}>
            <Link
              href="/"
              className={`${myFont.className} ml-5 text-shadow text-[#65B1E0] text-6xl`}
            >
              {banner}
            </Link>
            <Image
              src="/images/image30.jpg"
              width={170}
              height={30}
              alt="Picture of the author"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
