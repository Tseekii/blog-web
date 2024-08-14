import React from "react";

const Card = ({ title, social_image }) => {
  return (
    <div className="w-[290px] h-[290px] bg-cover bg-center border rounded-xl">
      <div className="rounded-xl h-20 overflow-hidden">
        <img src={social_image} alt="" />
      </div>
      <button className="text-white bg-indigo-500 rounded-xl mt-6">
        Technology
      </button>
      <h2 className="text-2xl mt-6">{title}</h2>
    </div>
  );
};

export default Card;
