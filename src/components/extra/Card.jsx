import React from "react";

const Card = ({ game }) => {
    return (
        <div className="relative w-[15rem] h-[20rem] md:h-[15rem] sm:h-[10rem]">
          <img
            src={game.image}
            alt=""
            className="rounded object-cover w-full h-full transition-all duration-500"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-[#19181a] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">{game.title}</p>
            <p className="text-sm">{game.description}</p>
            <p className="pt-[8rem] text-lg font-bold">{game.type}</p>
          </div>
        </div>
      );
      
};

export default Card;