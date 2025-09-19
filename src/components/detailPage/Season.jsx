import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { asyncLoderTvSeason, removeTvSeason } from "../../store/actions/TvSeasonAction";

const Season = ({ h = "h-[33vw]", w = "w-[18vw]", style, data, title }) => {
  // const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.TvSeason);
  console.log(id, info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoderTvSeason(id));

    return () => {
      dispatch(removeTvSeason(id));
    };
  }, [id]);

  console.log(info);

  return (
    // <div className="w-full flex flex-wrap justify-center gap-5 mt-10">
    //   {data &&
    //     data.map((item, index) => (
    //       <Link
    //         to={`/${item.media_type || title}/${item.id}/season/${item.name
    //           .replaceAll(" ", "_")
    //           .toLowerCase()} `}
    //         key={item.id + "-" + index}
    //         className={` ${h} ${w} rounded-3xl overflow-hidden relative  ${style} relative  `}
    //       >
    //         <img
    //           src={
    //             item?.backdrop_path || item?.poster_path
    //               ? `https://image.tmdb.org/t/p/original/${
    //                   item.backdrop_path || item.poster_path
    //                 }`
    //               : `/public/no_img.jpg`
    //           }
    //           alt=""
    //           className="w-full h-full absolute top-0 left-0 object-cover object-center z-[88] "
    //         />
    //         <div className="w-full h-full flex flex-col justify-end px-5 py-8 z-[99] relative ">
    //           <h1 className="text-[#ffffff] text-[1.5rem] font-bold leading-6 mb-5  ">
    //             <i className="shadow-2xs shadow-indigo-700">
    //               {item?.name || "No Information"}
    //             </i>
    //           </h1>
    //           <div className=" ">
    //             <h3 className="bg-[#7A323E] w-fit px-4 py-1 rounded-[50px] text-white font-semibold mb-4  ">
    //               {item?.air_date}
    //             </h3>
    //             <h3 className="bg-[#87dbfc] w-fit h-fit px-4 py-1 rounded-[15px] font-semibold text-[#7104ff] ">
    //               episode {item?.episode_count}
    //             </h3>
    //           </div>
    //           <h2 className="text-2xl text-white font-semibold leading-6">
    //             {item.overview && item.overview.slice(0, 29)}
    //             {item.overview && (
    //               <small className="text-[#26c2ff] ">more...</small>
    //             )}
    //           </h2>
    //         </div>
    //       </Link>
    //     ))}
    // </div>

    <div>
      seson
    </div>
  );
};

export default Season;
