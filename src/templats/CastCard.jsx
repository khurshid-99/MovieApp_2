import React from "react";
import { Link } from "react-router";

const CastCard = ({ h = "h-[33vw]", w = "w-[18vw]", style, data }) => {
  // console.log(data);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center gap-5 mt-5 ">
      {data &&
        data.map((item, index) => (
          <div
            key={item.id + "-" + index}
            className={` ${h} ${w} rounded-3xl overflow-hidden relative  ${style} relative  `}
          >
            <img
              src={
                item?.profile_path
                  ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                  : `/public/no_img.jpg`
              }
              alt=""
              className="w-full h-full absolute top-0 left-0 object-cover object-center z-[88] "
            />
            <div className="w-full h-full flex flex-col justify-end px-5 py-8 z-[99] relative ">
              <div className="absolute top-1 right-1 rounded-full px-2 py-3 bg-[red] text-center text-[white] text-[1.1rem] font-semibold rotate-12 ">
                {item.popularity.toFixed()}/10
              </div>
              <h1 className="text-[#ffffff] text-[1.5rem] font-bold leading-6 mb-5 ">
                {item.original_name || item.name}
              </h1>
              <h2 className="bg-[#87dbfc] w-fit h-fit px-4 py-1 rounded-[15px] font-semibold text-[#7104ff] mb-2 ">
                {item.gender === 1 ? "Femal" : "Mal"}
              </h2>
              <h2 className=" bg-[#87dbfcd3] w-fit h-fit px-4 py-1 rounded-[15px] font-semibold text-[#7104ff] mb-2 ">
                {item.character}
              </h2>
              <h2 className=" bg-[#87dbfca2] w-fit h-fit px-4 py-1 rounded-[15px] font-semibold text-[#7104ff] ">
                {item.known_for_department}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CastCard;
