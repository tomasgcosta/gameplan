import React from 'react';

import { ava, gunbound, driftcity, lunia, ragnarok, flyff } from "../../assets/game_logos";
import Card from '../extra/CardGame';
import Categories from './Categories';

const Games = () => {

  const gameCards = [
    { image: ava, title: "A.V.A", type: "FPS", description: "description" },
    { image: gunbound, title: "Gunbound", type: "Turn-based", description: "description" },
    { image: driftcity, title: "Drift City", type: "Racing", description: "description" },
    { image: lunia, title: "Legend of Lunia", type: "Anime MMORPG", description: "description" },
    { image: ragnarok, title: "Ragnarok Online", type: "2D MMORPG", description: "description" },
    { image: flyff, title: "FlyFF", type: "Flying MMORPG", description: "description" },
  ];

  return (
    <div className="mt-[1rem] text-white text-[14px] overflow-hidden">
      <Categories />
      <div className='pt-4 mx-[1rem] text-white text-[14px] overflow-hidden'>
        <p className=''>OUR GAMES</p>
        <div className="flex flex-wrap gap-[0.50rem] pt-2 justify-center">
          {gameCards.map((card, index) => (
            <div className="rounded" key={index}>
              <Card game={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
