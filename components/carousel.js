import ImageCarousel from "./image-carousel";

 

export default function Carousel() {
  
  
  return (
    <div className="xl:w-1/2 w-4/5 mx-auto mt-20">
      <div
        id="default-carousel"
        className="relative rounded-3xl overflow-hidden shadow-lg"
        data-carousel="static"
      >
        <div className="relative h-[400px] md:h-[800px]" data-carousel-inner="">
          <ImageCarousel image_url="image18.jpg" />
          <ImageCarousel image_url="image11.jpg" />
          <ImageCarousel image_url="image12.jpg" />
          <ImageCarousel image_url="image13.jpg" />
          <ImageCarousel image_url="image14.jpg" />
          <ImageCarousel image_url="image19.jpg" />
          <ImageCarousel image_url="image10.jpg" />
          <ImageCarousel image_url="image20.jpg" />
          <ImageCarousel image_url="image26.jpg" />
          <ImageCarousel image_url="image24.jpg" />

          
        </div>

        
        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 hover:backdrop-blur-xl hover:border-2 border-[#F8E197]  rounded-full  focus:outline-none transition"
          data-carousel-prev=""
        >
          <svg
            className="w-5 h-5 text-[#F8E197]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 duration-150 items-center justify-center w-10 h-10 hover:backdrop-blur-xl hover:border-2 border-[#F8E197] rounded-full focus:outline-none transition"
          data-carousel-next=""
        >
          <svg
            className="w-5 h-5 text-[#F8E197]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
