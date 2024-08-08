import React from "react";

const Card = ({ title, social_image }) => {
  return (
    <div
      style={{ backgroundImage: "url({social_image}))" }}
      className="w-[290px] h-[290px] bg-cover bg-center"
    >
      <button className="text-white bg-indigo-500 rounded-xl mt-6">
        Technology
      </button>
      <h2 className="text-2xl mt-6">{title}</h2>
    </div>
  );
};

export default Card;
