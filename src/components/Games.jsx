import React from 'react';

import { ava, gunbound, driftcity, lunia, ragnarok, sf, flyff } from "../assets";
import Card from './extra/Card';

const Games = () => {

  const gameCards = [
    { image: ava, title: "A.V.A", type: "First-Person Shooter", description: "description" },
    { image: gunbound, title: "Gunbound", type: "Turn-based artillery", description: "description" },
    { image: driftcity, title: "Drift City", type: "Racing", description: "description" },
    { image: lunia, title: "Legend of Lunia", type: "Anime MMORPG", description: "description" },
    { image: ragnarok, title: "Ragnarok Online", type: "2D MMORPG", description: "description" },
    { image: sf, title: "Soldier Front", type: "First-Person Shooter", description: "description" },
    { image: flyff, title: "FlyFF", type: "Flying MMORPG", description: "description" },
  ];

  return (
    <div className=''>
      <p className="text-white pt-6 flex pl-[14rem] relative">Our games</p>
      <div className=" flex justify-center w-auto">
        <div className="flex flex-row gap-[0.58rem] pt-3">
          {gameCards.map((card, index) => (
            <div className='rounded'>
              <Card key={index} game={card} />
              </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Games;