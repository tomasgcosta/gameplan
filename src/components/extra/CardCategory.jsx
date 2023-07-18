import React from "react";

const Card = ({ category }) => {
  return (
    <div className="relative w-[13rem] h-[20rem] md:h-[15rem] sm:h-[15rem]">
      <img
        src={category.image}
        alt=""
        className="rounded object-cover w-full h-full transition-all duration-500"
      />
      <div className="absolute inset-0 flex flex-col justify-end pb-[1rem] items-center text-white bg-gradient-to-t from-[#97918faf] from-10% hover:bg-gradient-to-t hover:from-[#ed5711f1] hover:from-5% transition-opacity duration-300">
        <p className="text-xl font-bold">{category.title}</p>
      </div>
    </div>
  );
};

export default Card;
