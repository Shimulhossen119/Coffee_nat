import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterImg from "../../assets/Footer bg.jpeg";
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Copany detatils */}
          <div>
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="pt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              non fugiat culpa, aperiam numquam unde ipsa dignissimos ad ipsum
              placeat quaerat
            </p>
            <a
              href="https://www.pinterest.es/"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              {" "}
              Visit our Pinterest
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* first col Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Footer Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second col links */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              {/* first col Links */}
              <div className="py-8 px-4">
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  Quick Links
                </h1>
                <ul className="space-y-3">
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Copany Address section */}
              <div className="py-8 px-4 col-span-2 sm:text-left mb-3">
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  Address
                </h1>
             
              <div>
                <p className="mb-3">moheshpur,Jhanidha , Bangladesh</p>
                <p>+8801758474597</p>
                {/* Social links */}
                <div className="space-x-3 mt-6 ">
                <a href="#">
                    <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
