import { Link } from "react-router";

const HeaderRight = ({ wallpaper }) => {
  // console.log(wallpaper);
  return wallpaper ? (
    <div
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.0)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path ||
          wallpaper.poster_path ||
          wallpaper.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`w-full h-full relative  rounded-[1.5rem] overflow-hidden bg-gradient-to-r from-black  to-transparent `}
    >
      <div className="w-[60%] h-full flex flex-col justify-end items-start pl-10 pb-8 ">
        <h1 className="text-white">
          {wallpaper.original_title || wallpaper.title || "no information"}
        </h1>
        <h1 className="text-white">{wallpaper.original_language}</h1>
        <h1 className="text-white">{wallpaper.media_type}</h1>
        <h1 className="text-white">{wallpaper.release_date}</h1>
        <h1 className="text-white">{wallpaper.video || "No video"}</h1>
        <h1 className="text-white">10/{wallpaper.vote_average.toFixed(1)}</h1>
        <Link to={`${wallpaper.media_type}/deatils/${wallpaper.id}`} className="text-white">
          {wallpaper.overview.slice(0, 100)} <small className="text-[blue] ">more...</small>{" "}
        </Link>
      </div>
    </div>
  ) : (
    <div className="w-full h-[95vh] text-[5rem] text-[red] flex items-center justify-center  ">
      Loding...
    </div>
  );
};

export default HeaderRight;
