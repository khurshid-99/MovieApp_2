import React from "react";
import Card from "../../templats/Card";

const LatestArticles = () => {
  return (
    <div className="w-full h-[100vh] py-5 px-10 overflow-y-hidden  ">
      <div className="flex justify-between items-center ">
        <div className="">
          <h1 className="text-[3rem] font-bold text-white ">Latest Articles</h1>
          <h5 className="text-[1.3rem] text-white font-semibold ">
            Explore multiple options for maximum fun
          </h5>
        </div>
        <div>
          <h3 className="text-[1.3rem] font-bold text-white ">View All</h3>
        </div>
      </div>
      <div className="w-full h-fit mt-[2rem] flex items-center justify-start gap-5  overflow-x-auto mb-5  ">
        <Card style={"mb-5"} />
      </div>
    </div>
  );
};

export default LatestArticles;
