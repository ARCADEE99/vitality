import React from "react";
import Image from "next/image";

const Card = ({url, title, description, alt}) => {
  return (
    <div className="w-full flex flex-row 2xl:flex-col items-center  justify-between gap-12 bg-soft md:px-12 px-20 py-12 rounded-3xl">
      <Image src={url} width={420} height={295} alt={alt}/>
      <div className="2xl:text-center 2xl:w-full text-left w-1/2 flex flex-col  gap-8 text-white">
        <h3 className="text-h3 font-bold">{title}</h3>
        <p className="text-description font-regular">{description}</p>
      </div>
    </div>
  );
};

export default Card;
