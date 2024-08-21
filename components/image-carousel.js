const ImageCarousel = ({ image_url }) => {
  return (
    <div className="carousel-item h-[400px] md:h-[800px]">
      <img src={`/images/${image_url}`} alt={image_url} className="carousel-image object-cover h-full" />
    </div>
  );
};

export default ImageCarousel;
