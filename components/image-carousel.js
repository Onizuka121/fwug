export default function ImageCarousel({image_url}) {
    return (
        <>
        <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src={`images/${image_url}`}
              className="object-cover w-full h-full"
              alt={image_url}
            />
          </div>
        </>
    )
}