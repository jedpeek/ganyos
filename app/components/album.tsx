import Link from "next/link";
import React from "react";

const Album = ({ link, image, title, artist, key }: any) => {
  return (
    <div className="" key={key}>
      {" "}
      <Link
        href={link}
        className="relative overflow-hidden rounded-lg group"
        prefetch={false}
      >
        <img
          src={image}
          alt="Album Cover"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <span className="text-white font-semibold text-lg">{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Album;
