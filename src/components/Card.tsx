"use client"

import { CardType } from "@/constants/types";
import Image from "next/image";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface CardTypeProps {
  card: CardType;
}
const Card = ({ card }: CardTypeProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev)
  }


  return (
    <div className="min-h-[320px] rounded-[8px] w-full relative bg-white mb-2 sm:mb-4">
      <div className="w-full h-[100px] relative">
        <Image
          src={card.image1}
          alt="card image"
          fill
          className="object-cover rounded-t-[8px]"
        />
      </div>

      <div className="flex justify-between px-4 py-2">
        <p className="text-[0.8rem] font-[600]">{card.name}, {card.age} <br/> {card.state}</p>
        <img
          src={card.image2}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 bottom-[11rem] object-cover rounded-full w-[70px] h-[70px] border-2 border-white"
        />
        <p className="text-[0.8rem] font-[600]">{card.match}% match</p>
      </div>

      <div className="px-4 py-2 w-full">
        <p className="text-[0.7rem]">{card.desc}</p>

        <div className="absolute bottom-0 cursor-pointer pb-4 flex items-center justify-between w-[90%]">
          <button className="bg-[var(--color-red)] rounded-[50px] h-[25px] w-[65px] text-white text-[0.7rem]">More Info</button>
          <button onClick={() => handleLike()} className="cursor-pointer">
            {isLiked ? <FaHeart size={20} className="text-[var(--color-red)]" /> : <CiHeart size={25} />}
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Card;
