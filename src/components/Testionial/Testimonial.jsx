import React from "react";
import Slider from "react-slick";
import profile2 from "../../assets/download (1).jpeg";
import profile4 from "../../assets/download (3).jpeg";
import profile5 from "../../assets/download (4).jpeg";
import profile1 from "../../assets/download.jpeg";
import profile3 from "../../assets/🌼.jpeg";
const TestimonialData = [
  {
    id: 1,
    name: "Abrahum Shimul",
    text: "Thanks for your time, you have make a good webapp for me, I hope we wille work agine to gather",
    img: profile1,
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Good job you have make a best wesite for me, Nice work grow upThanks for your time, you have make a good webapp for me, I hope we wille work agine to gather ",
    img: profile2,
  },
  {
    id: 3,
    name: "Angile Preya",
    text: "Thanks for your time, you have make a good webapp for me, I hope we wille work agine to gather",
    img: profile3,
  },
  {
    id: 4,
    name: "Rijhi Aktir",
    text: "Good job you have make a best wesite for me, Nice work grow upThanks for your time, you have make a good webapp for me, I hope we wille work agine to gather ",
    img: profile4,
  },
  {
    id: 5,
    name: "Olivia ",
    text: "Good job you have make a best wesite for me, Nice work grow upThanks for your time, you have make a good webapp for me, I hope we wille work agine to gather ",
    img: profile5,
  },
];
const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        {/* Testimonial cards section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative ">
                    {/* imge section */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20 "
                      />
                    </div>
                    {/* content section */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/60 font-cursive">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
