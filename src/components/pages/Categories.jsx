import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../extra/CardCategory";
import {
  ava,
  gunbound,
  driftcity,
  lunia,
  ragnarok,
  flyff
} from "../../assets/game_logos";

const Categories = () => {
  const categoryCards = [
    { image: ava, title: "First-Person Shooter", type: "fps" },
    { image: gunbound, title: "Turn-based", type: "tps" },
    { image: driftcity, title: "Racing", type: "racing" },
    { image: lunia, title: "MMORPG", type: "mmorpg" },
    { image: ragnarok, title: "Single-player RPG", type: "rpg" },
    { image: flyff, title: "Adventure", type: "adventure" }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5
        }
      }
    ],
    appendDots: (dots) => (
      <div style={{ backgroundColor: "#19181a", padding: "1px" }}>
        <ul
          style={{ margin: "1px", display: "flex", justifyContent: "center" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "22px",
          height: "6px",
          backgroundColor: "#6a696b",
          margin: "2px",
          borderRadius: "3px"
        }}
      ></div>
    )
  };

  return (
    <div className="mx-[1rem] mt-[1rem] h-[8rem] lg:h-[18rem] text-white text-[14px] overflow-hidden">
      <p className="pb-2">OUR CATEGORIES</p>
      <Slider {...settings}>
        {categoryCards.map((card, index) => (
          <div className="rounded" key={index}>
            <Link to={`/category/${card.type}`}>
              <Card category={card} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
