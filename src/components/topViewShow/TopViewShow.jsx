import { useEffect, useState } from "react";
import { Card, instance } from "../index";

const TopViewShow = () => {
  const [topViewShow, setTopViewShow] = useState(null);

  const GetTopViewData = async () => {
    try {
      const { data } = await instance.get(`/movie/top_rated`);
      setTopViewShow(data.results);
    } catch (error) {
      console.log(`Top View Show ${error} `);
    }
  };

  useEffect(() => {
    GetTopViewData();
  }, []);

  return (
    <div className="w-full h-[100vh] py-5 px-10 overflow-y-hidden  ">
      <div className="flex justify-between items-center ">
        <div className="">
          <h1 className="text-[3rem] font-bold text-white ">Top View Show</h1>
          <h5 className="text-[1.3rem] text-white font-semibold ">
            Explore multiple options for maximum fun
          </h5>
        </div>
        <div>
          <h3 className="text-[1.3rem] font-bold text-white ">View All</h3>
        </div>
      </div>
      <div className="w-full h-fit mt-[2rem] flex items-center justify-start gap-5  overflow-x-auto mb-5  ">
        {topViewShow ? (
          <Card data={topViewShow.slice(0, 4)}  style={"mb-5"} />
        ) : (
          <div className="w-full h-[100vh] text-[5rem] text-[red] flex items-center justify-center  ">
            Loding...
          </div>
        )}
      </div>
    </div>
  );
};

export default TopViewShow;



{/* <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js" type="module"></script>
<dotlottie-wc src="https://lottie.host/578b72f1-a3e4-462a-97d3-ef342e0b90ed/LnX55AMTQE.lottie" style="width: 300px;height: 300px" speed="1" autoplay loop></dotlottie-wc> */}