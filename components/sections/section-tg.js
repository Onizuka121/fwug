import Link from "next/link";

export default function SectionTelegram() {
  return (
    <>
      <section>
        <div className="px-4 py-6 mx-auto lg:px-12 xl:px-24 max-w-7xl mt-10" id="telegram">
          <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24 border border-[#F8E197] rounded-3xl shadow-xl px-10 xl:pb-0 pb-4">
            <div className="md:order-first">
              <div>
                <a
                  href="/"
                  id="badge-dismiss-dark"
                  className="inline-flex mb-2 items-center px-2 py-1 me-2 text-sm font-medium text-[#F8E197] border border-[#F8E197] rounded"
                >
                  Telegram
                </a>
              </div>

              <h1 className="text-5xl font-semibold tracking-tighter text-[#F8E197] chakra-petch-bold text-balance">
                Join Our Telegram Community
              </h1>
              <p className="mt-4 text-xl font-medium chakra-petch-medium text-[#65B1E0]">
                Connect with fellow Solana enthusiasts and stay up-to-date with
                the latest developments in our Telegram community.
              </p>

              <div className="flex animate-on-scroll flex-col items-center gap-3 mt-10 md:flex-row">
                <Link
                  href={`https://t.me/therealfwug`}
                  className="flex group items-center chakra-petch-semibold justify-center w-full h-10 p-5 text-xl transition duration-30  hover:ring-1  hover:ring-[#F8E197] border border-[#F8E197] backdrop-blur-3xl shadow-xl rounded-lg md:w-auto md:font-semibold"
                >
                  <span className=" text-xl text-[#F8E197]">Join Telegram</span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-[#F8E197] origin-left scale-x-0 transition duration-300 group-hover:scale-x-100 "></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-[#F8E197] -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <div className="m-auto p-2 overflow-hidden rounded-3xl">
                <img
                  alt="#_"
                  className="relative  rounded-2xl drop-shadow-2xl"
                  src="images/telegram-logo.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
