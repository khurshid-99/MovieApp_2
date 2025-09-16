import { Link } from "react-router";

const Card = ({ h = "h-[33vw]", w = "w-[18vw]", style, data, title }) => {
  // console.log(data);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center gap-5 mt-10">
      {data &&
        data.map((item, index) => (
          <Link
            to={`/${item.media_type || title}/deatils/${item.id} `}
            key={item.id + "-" + index}
            className={` ${h} ${w} rounded-3xl overflow-hidden relative  ${style} relative  `}
          >
            <img
              src={
                item?.backdrop_path || item?.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.poster_path
                    }`
                  : `public/no_img.jpg`
              }
              alt=""
              className="w-full h-full absolute top-0 left-0 object-cover object-center z-[88] "
            />
            <div className="w-full h-full flex flex-col justify-end px-5 py-8 z-[99] relative ">
              <h1 className="text-[#ffffff] text-[1.5rem] font-bold leading-6 mb-5  ">
                <i className="shadow-2xs shadow-indigo-700">
                  {item?.title || "No Information"}
                </i>
              </h1>
              <div className="flex gap-5  ">
                <h3 className="bg-[#7A323E] w-fit px-4 py-1 rounded-[50px] text-white font-semibold mb-4 ">
                  {item?.original_language}
                </h3>
                <h3 className="bg-[#87dbfc] w-fit h-fit px-4 py-1 rounded-[15px] font-semibold text-[#7104ff] ">
                  {item?.media_type || title}
                </h3>
              </div>
              <h2 className="text-2xl text-white font-semibold leading-6">
                {item?.overview?.slice(0, 29)}
                <small className="text-[#26c2ff] ">more...</small>
              </h2>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Card;
