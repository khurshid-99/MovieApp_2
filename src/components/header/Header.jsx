import { useEffect, useState } from "react";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import { instance } from "../index";

const Header = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trendingData, setTrendingData] = useState(null);

  const GetWallpaper = async () => {
    try {
      const { data } = await instance.get(`trending/all/day`);
      const randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
      setTrendingData(data.results);
      // console.log(randomData);
    } catch (error) {
      console.log(`Wallpaper ; ${error}`);
    }
  };

  useEffect(() => {
    GetWallpaper();
  }, []);

  return wallpaper ? (
    <div className=" w-full h-[95vh] relative flex justify-between items-start gap-5 px-5 pb-5 mt-[10rem] ">
      <HeaderLeft trendingData={trendingData} />
      <HeaderRight wallpaper={wallpaper} />
    </div>
  ) : (
    <div className="w-full h-[95vh] text-[5rem] text-[red] flex items-center justify-center  ">Loding...</div>
  );
};

export default Header;
