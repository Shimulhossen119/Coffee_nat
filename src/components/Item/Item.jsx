import React from "react";

const Item = (props) => {
  return (
    <div data-aos="fade-up"
    data-aos-delay="data.aosDelay" className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w[200px] group relative px-6  ">
      <div className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110  duration-300 px-6 py-6">
      <img src={props.image} alt="" />
      <p className="text-xl font-bold">{props.name}</p>
      <div>
        <div className="flex gap-5">{props.price}</div>
        <div className="text-gray-500 group-hover:text-white duration-200 text-sm line-clamp-2">{props.description}</div>
      </div>
      </div>
    </div>
  );
};

export default Item;
