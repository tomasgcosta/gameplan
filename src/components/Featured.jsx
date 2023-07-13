import React from "react";

const Featured = ({ game }) => {
    return (
        <div className="mx-[2rem] mt-[2rem] text-white text-[14px] overflow-hidden">

            <p>FEATURED GAME</p>
            {/* Featured game card - UNDER CON */}
            <div className="h-full md:h-[24rem] w-full flex flex-col  md:flex-row pt-3">
                <div className="w-full md:w-[65%] h-full bg-red-400 flex ">
                    <img src={game.image} className="object-cover w-full" />
                </div>
                <div className=" hover:bg-[#444346] duration-100 ease-out bg-[#333234] h-full w-full md:w-[38%] flex  flex-col justify-between ">
                    <div className="  flex flex-col">
                        <p className="text-[30px] mt-3 pl-4">{game.name}</p>
                        <div className="px-4 w-full h-[14rem] md:h-[14rem] ">
                            <div className="h-[45%]   w-full flex pb-1 ">
                                <img
                                    src={game.screenshots[0]}
                                    className="object-cover w-[50%] pr-1 "
                                />
                                <img
                                    src={game.screenshots[1]}
                                    className="object-cover w-[50%] pl-1"
                                />
                            </div>
                            <div className="h-[45%]  w-full flex pt-1 ">
                                <img
                                    src={game.screenshots[2]}
                                    className="object-cover w-[50%] pr-1"
                                />
                                <img
                                    src={game.screenshots[3]}
                                    className="object-cover w-[50%] pl-1"
                                />
                            </div>
                            <div className=" flex flex-col items-center md:items-start  ">
                                <p className="text-[22px] pt-[0.25rem]">Play Now</p>
                                <div className="bg-gray w-[15rem] rounded-[0.5rem]">
                                    <span className="rounded-[0.2rem] text-[0.6rem] py-[0.15rem] px-[0.15rem] bg-gray-500">Most Played</span> <span className="rounded-[0.2rem] text-[0.6rem] py-[0.15rem] px-[0.15rem] bg-gray-500">New Release</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-between pr-4 gap-4 md:gap-0 -mt-4 md:mt-0 pb-2 md:pb-0">
                        <div className="pl-4 pb-2 ">
                            <p className="text-[20px] md:text-[12px]">{game.price}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;