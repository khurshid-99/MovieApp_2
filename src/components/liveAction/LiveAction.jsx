import { useEffect, useState } from "react";
import { Card, instance } from "../index";

const LiveAction = () => {
  const [liveAction, setLiveAction] = useState(null);
  const GetLiveActionData = async () => {
    try {
      const { data } = await instance.get(`/movie/now_playing`);
      setLiveAction(data.results);
    } catch (error) {
      console.log(`Live Action ${error}`);
    }
  };

  useEffect(() => {
    GetLiveActionData();
  }, []);

  return (
    <div className="w-full h-[100vh] py-5 px-10 overflow-y-hidden  ">
      <div className="flex justify-between items-center ">
        <div className="">
          <h1 className="text-[3rem] font-bold text-white ">Live Action</h1>
          <h5 className="text-[1.3rem] text-white font-semibold ">
            Explore multiple options for maximum fun
          </h5>
        </div>
        <div>
          <h3 className="text-[1.3rem] font-bold text-white ">View All</h3>
        </div>
      </div>
      <div className="w-full h-fit mt-[2rem] flex items-center justify-start gap-5  overflow-x-auto mb-5  ">
        {liveAction ? (
          <Card data={liveAction.slice(0, 4)} style={"mb-5"} />
        ) : (
          <div className="w-full h-[95vh] text-[5rem] text-[red] flex items-center justify-center  ">
            Loding...
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveAction;
