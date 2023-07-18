import React from "react";

const Card = ({ game }) => {
  return (
    <div className="relative h-[8rem] w-[10rem] lg:w-[15rem] lg:h-[20rem] md:w-[10rem] md:h-[14rem]">
      <img
        src={game.image}
        alt=""
        className="rounded object-cover w-full h-full transition-all duration-500"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-[#19181a] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-xl font-bold">{game.title}</p>
        <div className="h-[4rem] overflow-hidden">
          <p className="text-sm">{game.description}</p>
        </div>
        <p className="pt-[2rem] text-lg font-bold">{game.type}</p>
      </div>
    </div>
  );
};

export default Card;
