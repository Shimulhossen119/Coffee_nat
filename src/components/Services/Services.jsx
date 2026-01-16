import React from "react";
import Img2 from "../../assets/Cup of coffee.png";
import Img1 from "../../assets/vecteezy_latte-coffee-isolated.png";
import Img3 from "../../assets/—Pngtree—iced coffee.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Espresso",
    description: "Most pupler coffee, with duble milke ",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description: "Best coffee with Americano test.Faymus all over the world",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    name: "Cappuccino",
    description: "Most pupler coffee, with duble milke ",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div>
        <div className="py-10">
          <div className="container">
            {/* header title */}
            <div data-aos="fade-up" className="text-center mb-20">
              <h1 className="text-4xl font-bold font-cursive text-gray-800">
                Best Coffee For You
              </h1>
            </div>
            {/* Services card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServicesData.map((data, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={index}
                    className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w[300px] group relative"
                  >
                    <div className="h-[122px]">
                      <img
                        src={data.img}
                        alt=""
                        className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110  duration-300"
                      />
                        
                    </div>

                    {/* text section */}
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-gray-500 group-hover:text-white duration-200 text-sm line-clamp-2">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          
          
        </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
