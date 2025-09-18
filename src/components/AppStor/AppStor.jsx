import React from "react";

import BgPng from "../../assets/AppStor-bg2.jpeg";
import AppStoreImg from "../../assets/Apple-png.png";
import PlayStoreImg from "../../assets/Google-png.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStor = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div  className="container">
              <div data-aos="fade-up"
               className="space-y-6 max-w-xl mx-auto">
                {/* text-content */}
                <h1 className="text-2xl text-center sm:text-left sm:text-2xl font-semibold pl-3 text-white">
                  Coffee Cafe is available for Android and IOS
                </h1>
                {/* Logo section */}
                <div className="flex flex-wrap justify-center sm:justify-start items-center ">
                  <a href="">
                    <img
                      src={AppStoreImg}
                      alt=""
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                  <a href="">
                    <img
                      src={PlayStoreImg}
                      alt=""
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStor;
