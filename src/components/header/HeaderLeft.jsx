import { Card } from "../index";

const HeaderLeft = ({ trendingData }) => {
  return trendingData ? (
    <div className="w-[25vw] h-[90vh] relative  rounded-[1.5rem] overflow-hidden bg-[#222125] p-5 ">
      <div className="flex justify-between items-center text-white text-xl font-semibold py-3  ">
        <h1>New Trailer</h1>
        <h2>
          <small>Short by:</small> Today
        </h2>
      </div>
      <div className="w-full h-full mr-5 overflow-x-hidden overflow-y-auto flex flex-col gap-5 ">
        {/* {trendingData &&
          trendingData.map((data) => (
            <Card
              data={data}
              key={data.id}
              w={"w-[15vw]"}
              h={"h-[28vw]"}
              style={"shrink-0"}
            />
          ))} */}

        <Card data={trendingData} w={"w-[15vw]"} h={"h-[28vw]"} />
      </div>
    </div>
  ) : (
    <div className="w-[25vw] h-[90vh] text-[5rem] text-[red] flex items-center justify-center  ">
      Loding...
    </div>
  );
};

export default HeaderLeft;
