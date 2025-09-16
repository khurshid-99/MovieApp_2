import { Link } from "react-router";

const DeatilsCarde = ({
  data,
  title,
  h = "h-[33vw]",
  w = "w-[18vw]",
  style,
}) => {
  console.log(data);

  return data ? (
    <div
      className="w-full min-h-screen"
      // style={{
      //   backgroundImage: `url(https://image.tmdb.org/t/p/original/${
      //     data.backdrop_path || data.poster_path
      //   })`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <div
        className={` ${h} ${w} ${style} rounded-3xl overflow-hidden relative   `}
      >
        <img
          src={
            data?.backdrop_path || data?.poster_path
              ? `https://image.tmdb.org/t/p/original/${
                  data.backdrop_path || data.poster_path
                }`
              : `public/imgi_1_about-banner-1.png`
          }
          alt=""
          className="w-full h-full absolute top-0 left-0 object-cover object-center z-[88] pl-[10rem] "
        />  
        {/* <div className="w-full h-full flex flex-col justify-end px-5 py-8 z-[99] relative ">
          <h1 className="text-[#ffffff] text-[1.5rem] font-bold leading-6 mb-5  ">
            <i className="shadow-2xs shadow-indigo-700">
              {data?.title || "No Information"}
            </i>
          </h1>
          <div className="flex gap-5  ">
            <h3 className="bg-[#7A323E] w-fit px-4 py-1 rounded-[50px] text-white font-semibold mb-4 ">
              {data?.original_language}
            </h3>
            <h3 className="bg-[#87dbfc] w-fit h-fit px-4 py-1 rounded-[15px] font-semibold text-[#7104ff] ">
              {data?.media_type}
            </h3>
          </div>
          <h2 className="text-2xl text-white font-semibold leading-6">
            {data?.overview?.slice(0, 29)}
            <small className="text-[#26c2ff] ">more...</small>
          </h2>
        </div> */}
      </div>
    </div>
  ) : (
    <div className="w-full h-[95vh] text-[5rem] text-[red] flex items-center justify-center  ">
      Loding...
    </div>
  );
};

export default DeatilsCarde;
