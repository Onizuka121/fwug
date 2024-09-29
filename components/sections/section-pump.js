import Link from "next/link";
import { myFont } from "../ui/span";

export default function SectionPump() {
  return (
    <>
      <section id="raydium">
        <div className="px-4 py-6 mx-auto lg:px-12 xl:px-24 max-w-7xl mt-20">
          <div
            className="grid items-center shadow-[0.40em_0.40em] 
              cursor-pointer 
              transition 
              duration-150 
              transform 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24 border-4 bg-[#F8E197] border-black rounded-3xl px-10 xl:pb-0 pb-4"
          >
            <div className="md:order-first">
              <div>
                <a
                  href="/"
                  id="badge-dismiss-dark"
                  className="inline-flex mb-2 bungee items-center px-2 py-1 me-2 text-lg font-medium text-[#65B1E0] border-4 border-black rounded-xl"
                >
                  Raydium
                </a>
              </div>

              <h1
                className={`${myFont.className} text-5xl text-shadow tracking-tighter text-[#65B1E0] text-balance`}
              >
                Explore The RAYDIUM Platform
              </h1>
              <p className="mt-4 bungee text-xl font-medium text-[#65B1E0]">
                Explore the exhilarating world of Raydium, the platform designed
                to deliver an unmatched experience for Solana enthusiasts.
              </p>

              <div className="flex animate-on-scroll flex-col items-center gap-3 mt-10 md:flex-row">
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
                  <span className="text-3xl text-[#65B1E0]">
                    EXPLORE RAYDIUM
                  </span>
                </Link>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <div className="h-full p-2 overflow-hidden  rounded-3xl">
                <img
                  alt="#_"
                  className="relative rounded-2xl drop-shadow-2xl scale-125 mt-10"
                  src="images/raydium-logo.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
