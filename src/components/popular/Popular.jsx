import { useEffect, useState } from "react";
import { Card, instance } from "../index";
import { Link } from "react-router";

const Popular = () => {
  const [popularData, setPopularData] = useState(null);
  const [options, setOptions] = useState("day");
  const GetPopular = async () => {
    try {
      const { data } = await instance.get(`/tv/popular`);
      setPopularData(data.results);
        console.log(popularData);
    } catch (error) {
      console.log(`Popular ${error}`);
    }
  };

  useEffect(() => {
    GetPopular();
  }, [options]);



  
  return (
    <div className="w-full h-[100vh] py-5 px-10 overflow-y-hidden  ">
      <div className="flex justify-between items-center ">
        <div className="">
          <h1 className="text-[3rem] font-bold text-white ">Popular Show</h1>
          <h5 className="text-[1.3rem] text-white font-semibold ">
            Explore multiple options for maximum fun
          </h5>
        </div>
        <div>
          <Link
            to={"/popular"}
            className="text-[1.3rem] font-bold text-white "
          >
            View All
          </Link>
        </div>
      </div>
      {popularData ? (
        <Card data={popularData.slice(0, 4)} title={"tv"} style={"mb-5"} />
      ) : (
        <div className="w-full h-[95vh] text-[5rem] text-[red] flex items-center justify-center  ">
          Loding...
        </div>
      )}
    </div>
  );
};

export default Popular;
