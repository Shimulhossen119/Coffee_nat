import React from "react";
import data from "../../assets/Coffee-prodect/data";
import Item from "../Item/Item";
const AllProduct = () => {
  return (
    <div>
      <div className="py-10">
        <div className="container">
          <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">All Product</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-5 place-items-center">
        {data.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description}/>;
        })}
      </div>

        </div>
      </div>
      
      
    </div>
  );
};

export default AllProduct;
