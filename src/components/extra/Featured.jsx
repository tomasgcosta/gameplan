import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Featured = ({ game }) => {

    const history = useNavigate();
    const location = useLocation();

    const isGamePage = location.pathname === "/games";
    const isHomePage = location.pathname === "/";
    if (!isGamePage && !isHomePage) {
        return null
    }

    return (

        <div className="mx-[1rem] mt-[1rem] text-white text-[14px] overflow-hidden">

            <p>FEATURED GAME</p>
            {/* Featured game card - UNDER CON */}
            <div className="h-full md:h-[24rem] w-full flex flex-col md:flex-row pt-3">
                <div className="w-full md:w-[65%] h-full flex">
                    
                        <img src={game.image} className="rounded-l object-cover w-full" alt="" />
                    
                </div>
                <div className="rounded-r bg-[#333234] h-full w-full md-h-[38%] md:w-[38%] flex flex-col justify-between">
                    <div className="  flex flex-col">
                        <p className="text-[30px] mt-3 pl-4">{game.name}</p>
                        <div className="px-4 w-full h-[14rem] md:h-[14rem] ">
                            <div className="h-[45%]  w-full flex pb-1 ">
                                <img
                                    src={game.screenshots[0]}
                                    className="transform transition duration-500 hover:scale-105 object-cover w-[50%] pr-1 "
                                />
                                <img
                                    src={game.screenshots[1]}
                                    className="transform transition duration-500 hover:scale-105 object-cover w-[50%] pl-1"
                                />
                            </div>
                            <div className="h-[45%]  w-full flex pt-1 ">
                                <img
                                    src={game.screenshots[2]}
                                    className="transform transition duration-500 hover:scale-105 object-cover w-[50%] pr-1"
                                />
                                <img
                                    src={game.screenshots[3]}
                                    className="transform transition duration-500 hover:scale-105 object-cover w-[50%] pl-1"
                                />
                            </div>
                            <div className=" flex flex-col  ">
                                <p className="flex items-start text-[22px] pt-[0.25rem]">Play Now</p>
                                <div className="bg-gray w-[15rem] rounded-[0.5rem]">
                                    <span className="rounded-[0.2rem] text-[0.6rem] py-[0.15rem] px-[0.15rem] bg-[#ED5611]">Most Played</span> <span className="rounded-[0.2rem] text-[0.6rem] py-[0.15rem] px-[0.15rem] bg-[#ED5611]">New Release</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end md:justify-between pr-8 gap-4 md:gap-0 mt-2 md:mt-0 pb-2 md:pb-0">
                        <div className="pl-4 pb-2 ">
                            <p className="flex items-end text-[14px] md:text-[12px]">{game.price}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;