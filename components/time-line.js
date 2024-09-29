import { myFont } from "./ui/span";
export default function TimeLine() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="roadmap">
        <div className="mb-10 mx-auto sm:text-center xl:w-auto md:mb-12">
          <div>
            <a
              href="/"
              id="badge-dismiss-dark"
              className={`bungee inline-flex mb-2 items-center px-2 py-1 me-2 text-sm bg-[#f8e197] font-medium text-[#65B1E0] border-4 border-black rounded`}
            >
              Roadmap
            </a>
          </div>
          <h2 className={`${myFont.className} mb-6  text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl   text-shadow  leading-none tracking-tight text-[#65B1E0] md:mx-auto`}>
            <span className="relative inline-block">
              <span className="relative">The</span>
            </span>{" "}
            $FWUG Master Plan
          </h2>
          <p className="flex items-center grid-col-2 justify-center gap-3 text-2xl bungee p-2 border-black bg-[#f8e197] border-4 rounded-xl text-[#65B1E0] md:text-3xl">
            <span>Charting the Path to Meme Domination</span>
          </p>
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-2">
         
          <div className="p-6 z-10 w-full shadow-[0.40em_0.40em] 
              cursor-pointer 
              transition 
              duration-150 
              transform 
              hover:-translate-x-1  hover:shadow-[0.60em_0.60em] 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em] bg-[#f8e197] border-4 border-black rounded-xl  hover:-translate-y-2"
          style={{
            backgroundImage: `url('/images/image37.jpg')`,
            backgroundSize: "cover", // Copre l'intero div
            backgroundPosition: "center", // Posiziona l'immagine al centro
          }}>
            <div className="overlay-custom rounded-xl" />
            <div className="flex items-center justify-between mb-2">
              <p className="text-3xl bungee font-bold text-shadow-custom text-[#65B1E0] leading-8">
                Post-Launch Momentum
              </p>
              <p className="flex text-xl   p-4 items-center justify-center w-6 h-6 font-bold text-deep-purple-accent-400 rounded-xl border-4 border-black bg-[#65B1E0]">
                1
              </p>
            </div>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • 200 Million Tokens Locked: Secured 200 million $FWUG tokens
              locked to ensure market stability and prevent manipulation.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Initial Liquidity Success: Deployed liquidity to ensure smooth
              trading and a solid market entry.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Exclusive Meme Partnership: Collaborating with top artists for
              viral memes to boost community engagement and brand visibility.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Aggressive Marketing: Ongoing targeted campaigns across social
              media and crypto forums to attract new investors and maintain
              momentum.
            </p>
          </div>
          <div className="p-6 w-full shadow-[0.40em_0.40em] 
              cursor-pointer 
              transition 
              duration-150 
              transform 
              hover:-translate-x-1 hover:shadow-[0.60em_0.60em] 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em]  bg-[#f8e197] border-4 border-black rounded-xl hover:-translate-y-2"
           style={{
            backgroundImage: `url('/images/image35.jpg')`,
            backgroundSize: "cover", // Copre l'intero div
            backgroundPosition: "center", // Posiziona l'immagine al centro
          }}>
              <div className="overlay-custom rounded-xl" />
            <div className="flex items-center justify-between mb-2">
              <p className="text-3xl bungee font-bold text-shadow-custom text-[#65B1E0] leading-8">
                Explosive Growth Phase
              </p>
              <p className="flex text-xl p-4 items-center justify-center w-6 h-6 font-bold text-deep-purple-accent-400 rounded-xl border-4 border-black bg-[#65B1E0]">
                2
              </p>
            </div>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Community Engagement: Launch interactive events and campaigns to
              actively grow the $FWUG community.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Strategic Alliances: Forge partnerships with key platforms,
              tokens, and crypto influencers to enhance $FWUG’s profile.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Expanded Meme Campaigns: Utilize artist-created memes to reach a
              broader audience and strengthen $FWUG’s crypto presence.
            </p>
          </div>
          <div className="p-6 w-full shadow-[0.40em_0.40em] 
              cursor-pointer 
              transition 
              duration-150 
              transform 
              hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.60em_0.60em] 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em]  bg-[#f8e197] border-4 border-black rounded-xl "
          style={{
            backgroundImage: `url('/images/image36.jpg')`,
            backgroundSize: "cover", // Copre l'intero div
            backgroundPosition: "center", // Posiziona l'immagine al centro
          }}>
              <div className="overlay-custom rounded-xl" />
            <div className="flex items-center justify-between mb-2">
            <p className="text-3xl bungee font-bold text-shadow-custom text-[#65B1E0] leading-8">
    Sustained Momentum
</p>

              <p className="flex text-xl p-4 items-center justify-center w-6 h-6 font-bold  text-deep-purple-accent-400 rounded-xl border-4 border-black bg-[#65B1E0]">
                3
              </p>
            </div>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Continued Marketing Push: Implement innovative strategies to
              maintain interest and draw new investors.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Community Initiatives: Engage the community through contests and
              feedback sessions to sustain high levels of involvement.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Web Store Launch: Introduce a web store for $FWUG-branded
              merchandise. This will not only generate additional revenue but
              also enhance brand visibility and community engagement.
            </p>
          </div>
          <div className="p-6 w-full shadow-[0.40em_0.40em] 
              cursor-pointer 
              transition 
              duration-150 
              transform 
              hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.60em_0.60em] 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em] bg-[#f8e197] border-4 border-black rounded-xl"
          style={{
            backgroundImage: `url('/images/image39.jpg')`,
            backgroundSize: "cover", // Copre l'intero div
            backgroundPosition: "center", // Posiziona l'immagine al centro
          }}>
              <div className="overlay-custom rounded-xl" />
            <div className="flex items-center justify-between mb-2">
              <p className="text-3xl bungee font-bold text-shadow-custom text-[#65B1E0] leading-8">
                Future Plans
              </p>
              <p className="flex text-xl p-4 items-center justify-center w-6 h-6 font-bold  text-deep-purple-accent-400 rounded-xl border-4 border-black bg-[#65B1E0]">
                4
              </p>
            </div>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Enhanced Community Features: Develop initiatives to deepen
              community interaction and reward active participation.
            </p>
            <p className="text-lg p-2 bungee-light  text-[#65B1E0]">
              • Long-Term Vision: Expand the ecosystem with governance features,
              platform integrations, and global meme campaigns using
              artist-created content to boost appeal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
