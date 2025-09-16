import { Link } from "react-router";
import { Card, instance } from "../index";
import { useEffect, useState } from "react";
const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);
  const [options, setOptions] = useState("day");
  const GetTrending = async () => {
    try {
      const { data } = await instance.get(`trending/all/${options}`);
      // console.log(data.results);
      setTrendingData(data.results);
    } catch (error) {
      console.log("trending :", error);
    }
  };

  useEffect(() => {
    GetTrending();
  }, [options]);
  // console.log(trendingData);
  return (
    <div className="w-full h-[100vh] py-5 px-10 overflow-y-hidden  ">
      <div className="flex justify-between items-center ">
        <div className="">
          <h1 className="text-[3rem] font-bold text-white ">Trending Now</h1>
          <h5 className="text-[1.3rem] text-white font-semibold ">
            Explore multiple options for maximum fun
          </h5>
        </div>
        <div>
          <Link
            to={"/trending"}
            className="text-[1.3rem] font-bold text-white "
          >
            View All
          </Link>
        </div>
      </div>
      {/* <Card data={trendingData.slice(0, 4)} style={"mb-5"} /> */}

      {trendingData ? (
        <Card data={trendingData.slice(0, 4)} style={"mb-5"} />
      ) : (
        <div className="w-full h-[95vh] text-[5rem] text-[red] flex items-center justify-center  ">
          Loding...
        </div>
      )}
    </div>
  );
};

export default Trending;
