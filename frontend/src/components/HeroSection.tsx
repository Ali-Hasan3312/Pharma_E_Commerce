import { forwardRef } from "react";
import Slider from "react-slick"; // Import react-slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "../assets/images/Hero Images/first.jpg";
import heroImage2 from "../assets/images/Hero Images/first.jpg";
import heroImage3 from "../assets/images/Hero Images/first.jpg";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Updated product offers with Mugs, Cups, and Plates
  const products = [
    {
      image: heroImage,
      title: "From Prescription to your doorstep!",
      description: "Get the best prices on medicines, with or without a prescription, and book video appointments with trusted doctors",
    },
    {
      image: heroImage2,
      title: "From Prescription to your doorstep!",
      description: "Get the best prices on medicines, with or without a prescription, and book video appointments with trusted doctors",
    },
    {
      image: heroImage3,
      title: "From Prescription to your doorstep!",
      description: "Get the best prices on medicines, with or without a prescription, and book video appointments with trusted doctors",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full mx-auto h-screen bg-cover bg-center"
    >
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="relative h-screen">
            {/* Background image for each slide */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative top-4 left-[25%] z-10 flex flex-col items-start justify-center h-full p-8 md:p-16 text-white space-y-6">
                <h1 className="text-5xl w-[50%] max-sm:text-3xl font-extrabold leading-tight tracking-wide drop-shadow-md">
                  {product.title}
                </h1>
                <p className="max-w-lg text-lg md:text-xl text-white/80 drop-shadow-sm">
                  {product.description}
                </p>
               
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default HeroSection;
