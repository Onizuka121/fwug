export default function Section2() {
  return (
    <>
      <section>
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="grid items-start grid-cols-1 md:grid-cols-2">
            <div className="lg:pr-24 md:pr-12 ">
            <div className="p-10 overflow-hidden border border-[#F8E197] rounded-3xl">
            <h1 className="text-4xl font-semibold tracking-tighter chakra-petch-bold text-[#F8E197]">
                Revolutionize Your Investments
              </h1>
              <p className="mt-4 text-xl font-medium chakra-petch-medium text-[#65B1E0]">
                Control and added security. With decentralization, users have
                more control over their data and transactions, and the platform
                is less susceptible to malicious attacks.
              </p>
            </div>
              
              <div className="flex flex-col gap-4 mt-12 list-none text-pretty">
              <div className="p-2 overflow-hidden border border-[#F8E197] rounded-3xl">
                <img
                  src="images/image7.jpg"
                  alt="#_"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="p-2 overflow-hidden border border-[#F8E197] rounded-3xl">
                <img
                  src="images/image9.jpg"
                  alt="#_"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              </div>
            </div>

            <div className="flex flex-col gap-2  mt-12 aspect-square lg:mt-0 border-[#F8E197]">
              <div className="p-2 overflow-hidden border border-[#F8E197] rounded-3xl">
                <img
                  src="images/image5.jpg"
                  alt="#_"
                  className="mx-auto rounded-2xl shadow-md"
                />
              </div>
              <div className="p-2 overflow-hidden border border-[#F8E197] rounded-3xl">
                <img
                  src="images/image6.jpg"
                  alt="#_"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="p-2 overflow-hidden border border-[#F8E197] rounded-3xl">
                <img
                  src="images/image8.jpg"
                  alt="#_"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
