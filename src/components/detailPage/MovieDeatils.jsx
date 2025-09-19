import { Link, useNavigate, useParams } from "react-router";
import { Card, CastCard } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  asyncLoderMovie,
  removieTrending,
} from "../../store/actions/TrendingAction";

const MovieDeatils = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.Trending);
  console.log(id, info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoderMovie(id));

    return () => {
      dispatch(removieTrending(id));
    };
  }, [id]);

  return info ? (
    <div className="w-full min-h-[100vh] relative bg-[#06050B] ">
      <div
        className="w-full h-[100vh] relative  px-10 "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
            info.backdrop_path || info.poster_path
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-screen-2xl min-h-[100vh] mx-auto relative  ">
          <div className="p-5">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#15f7e4] px-4 rounded-full "
            >
              <img
                src="/public/naveItems/arrow-left-long-line.png"
                alt=""
                className=""
              />
            </button>
          </div>
          <div className="w-full flex justify-between gap-5 ">
            <img
              src={
                info?.backdrop_path || info?.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      info.backdrop_path || info.poster_path
                    }`
                  : `public/imgi_1_about-banner-1.png`
              }
              className="w-[20vw] h-[35vw] object-cover object-center rounded-[15px] drop-shadow-2xl drop-shadow-[#37ffee4b]  "
            />

            <div className="w-full h-full bg-[#f0fff000] rounded text-[white] ">
              <h1 className="font-PoppinsBoldItalic text-white text-[2.3rem] ">
                {info.title}
              </h1>
              <h1 className="font-PoppinsExtraBoldItalic text-[#ff8800] text-[2rem]  ">
                {info.tagline}
              </h1>
              <h1 className="font-PoppinsRegular text-[1.5rem] text-[#FF8800]  ">
                {info.status}
              </h1>
              <h1 className="font-PoppinsRegular font-semibold text-[1.2rem] text-[#ffffff] ">
                <i className="capitalize mr-2 text-[orange] font-medium ">
                  spoken languages :{" "}
                </i>
                {info.spoken_languages[0].name ||
                  info.spoken_languages[0].english_name ||
                  "No Information"}
              </h1>
              <h1 className="font-PoppinsRegular ">
                <b className="mr-2 font-PoppinsExtraBoldItalic text-[1.5rem] capitalize ">
                  overview :{" "}
                </b>
                {info.overview}
              </h1>
              <ul>
                <b className="mr-2 text-[1.5rem] font-PoppinsExtraBoldItalic capitalize ">
                  translations :{" "}
                </b>
                {info.translations &&
                  info.translations.map((lg, index) => (
                    <li key={index} className="inline-block mr-2">
                      {lg + " | "}
                    </li>
                  ))}
              </ul>
              <h1 className="font-PoppinsRegular  ">
                <b className="mr-2 text-[1.5rem] font-PoppinsExtraBoldItalic capitalize">
                  budget :
                </b>
                {info.budget > 0 ? info.budget : "no information"}
              </h1>
              <h1 className="font-PoppinsRegular ">
                {" "}
                <b className="mr-2 text-[1.5rem] font-PoppinsExtraBoldItalic capitalize">
                  release date :
                </b>
                {info.release_date}
              </h1>
              <h1 className="font-PoppinsRegular ">
                {" "}
                <b className="mr-2 text-[1.5rem] font-PoppinsExtraBoldItalic capitalize">
                  runtime :
                </b>
                {Math.floor(info.runtime / 60)}.{info.runtime % 60}
              </h1>
              <Link
                to={info.homepage}
                target="_blank"
                className=" text-[#0d0de9] font-PoppinsBoldItalic text-[1.3rem] inline-block hover:drop-shadow-2xl hover:drop-shadow-[red] duration-300  "
              >
                Home Page
                <img
                  src="/public/send-plane-fill.png"
                  alt=""
                  className="h-[1.5rem] w-[1.5rem]  object-center object-cover inline-block ml-3"
                />
              </Link>
              <br />
              {info.imdb_id && (
                <Link
                  to={`https://www.imdb.com/title/${info.imdb_id}/`}
                  target="_blank"
                  className="text-[1.5rem] font-PoppinsBoldItalic hover:text-[blue] duration-500 "
                >
                  IMDB
                  <img
                    src="/public/send-plane-fill.png"
                    alt=""
                    className="h-[1.5rem] w-[1.5rem]  object-center object-cover inline-block ml-3"
                  />
                </Link>
              )}
              <b className="mr-2 text-[1.5rem] font-PoppinsExtraBoldItalic capitalize block ">
                watch providers :{" "}
                <img
                  src="/public/naveItems/corner-right-down-line.png"
                  alt=""
                  className="h-[2rem] w-[2rem]  object-center object-cover inline-block ml-3 mt-2"
                />
              </b>
              {info.watch_providers === "undefined" ? (
                <Link
                  to={
                    (info.watch_providers && info.watch_providers?.link) || ""
                  }
                  target="_blank"
                  className="font-PoppinsRegular  inline-block "
                >
                  <br />
                  {info.watch_providers?.flatrate[0].provider_name}
                  <img
                    src={` https://image.tmdb.org/t/p/original/${info.watch_providers?.flatrate[0].logo_path}`}
                    alt={info.watch_providers?.flatrate[0].provider_name}
                    className="rounded-[10px] h-[3rem] w-[3rem] object-cover object-center hover:drop-shadow-xl hover:drop-shadow-[#f74747a8] duration-300 "
                  />
                </Link>
              ) : (
                ""
              )}

              <ul>
                <b className="mr-2 text-[1.5rem] font-PoppinsExtraBoldItalic capitalize">
                  rent :
                  <img
                    src="/public/naveItems/corner-right-down-line.png"
                    alt=""
                    className="h-[2rem] w-[2rem]  object-center object-cover inline-block ml-3 mt-2"
                  />
                </b>
                {info.watch_providers?.rent.map((item) => (
                  <ul className="ml-3">
                    <li
                      key={item.provider_id}
                      className="text-start mb-2 text-[1.3rem] font-PoppinsRegular "
                    >
                      {item.provider_name}
                      <img
                        src={` https://image.tmdb.org/t/p/original/${item.logo_path}`}
                        alt={item.provider_name}
                        className="rounded-[10px] h-[3rem] w-[3rem] object-cover object-center hover:drop-shadow-xl hover:drop-shadow-[#f74747a8] duration-300 inline-block ml-2 "
                      />
                    </li>
                  </ul>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[100vh] pb-[5rem] bg-[#06050B] relative  px-10  ">
        <h1 className="text-[2.5rem] text-[white] font-PoppinsExtraBoldItalic mt-5 capitalize pl-5  ">
          recommendations{" "}
          <img
            src="/public/naveItems/corner-right-down-line.png"
            alt=""
            className="inline-block ml-3 "
          />
        </h1>
        <Card data={info.recommendations} />

        {info.similar.length && (
          <>
            <h1 className="text-[2.5rem] text-[white] font-PoppinsExtraBoldItalic mt-5 capitalize pl-5  ">
              similar{" "}
              <img
                src="/public/naveItems/corner-right-down-line.png"
                alt=""
                className="inline-block ml-3 "
              />
            </h1>
            <Card data={info.similar} title={"movie"} />
          </>
        )}

        {/* ---------------- */}
        <h1 className="text-[2.5rem] text-[white] font-PoppinsExtraBoldItalic mt-5 capitalize pl-5  ">
          cast
          <img
            src="/public/naveItems/corner-right-down-line.png"
            alt=""
            className="inline-block ml-3 "
          />
        </h1>
        <CastCard data={info.credits.cast} />
      </div>
    </div>
  ) : (
    <div className="w-full h-[100vh] bg-[black] text-[5rem] text-[red] flex items-center justify-center  ">
      Loding...
    </div>
  );
};

export default MovieDeatils;
