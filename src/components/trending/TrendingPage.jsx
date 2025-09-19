// import { useEffect, useState } from "react";
// import { Card, DropDown } from "../index";

// import { instance } from "../index";
// import { Link, useLoaderData } from "react-router";
// import InfiniteScroll from "react-infinite-scroll-component";
// const TrendingPage = () => {

//   const {trending} = useLoaderData()

//   console.log(trending[0]);

//   const [trendingData, setTrendingData] = useState([]);
//   const [options, setOptions] = useState("day");
//   const [category, setCategory] = useState("all");
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const GetTrending = async () => {
//     try {
//       const { data } = await instance.get(
//         `trending/${category}/${options}?page=${page}`
//       );
//       // console.log(data.results);

//       if (data.results.length > 0) {
//         setTrendingData((prevState) => [...prevState, ...data.results]);
//         setPage(page + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.log("trending :", error);
//     }
//   };

//   const GetPages = () => {
//     if (trendingData.length === 0) {
//       GetTrending();
//     } else {
//       setPage(1);
//       setTrendingData([]);
//       GetTrending();
//     }
//   };

//   useEffect(() => {
//     // GetTrending();
//     GetPages();
//   }, [options , category]);
//   // console.log(trendingData);

//   return trendingData.length > 0 ? (
//     <div className="max-w-screen-2xl mx-auto min-h-screen">
//       <div className="my-5 flex justify-between items-center px-10">
//         <Link
//           to={"/"}
//           className="text-white bg-[#87DBFC] font-semibold text-[1.5rem] px-6 py-1 rounded-full "
//         >
//           Back
//         </Link>
//         <h1 className="text-[white] text-[2rem] font-semibold border-b ">
//           <i>Trending</i>
//         </h1>
//         <div className="flex gap-5">
//           <DropDown
//             title={"Filter"}
//             option={["all", "movie", "tv"]}
//             fnc={(e) => setCategory(e.target.value)}
//           />
//           <DropDown
//             title={"Filter"}
//             option={["day", "week"]}
//             fnc={(e) => setOptions(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="flex flex-wrap gap-5 justify-center w-full min-h-screen">
//         {/* {trendingData &&
//           trendingData.map((data) => ( */}
//         <InfiniteScroll
//           dataLength={trendingData.length}
//           next={GetTrending}
//           hasMore={hasMore}
//           loader={<h4>Loding...</h4>}
//         >
//           <Card
//             data={trendingData}
//             title={category}
//             h={"h-[30vw]"}
//             w={"w-[18vw]"}
//           />
//         </InfiniteScroll>
//         {/* ))} */}
//       </div>
//     </div>
//   ) : (
//     <div className="text-[red] text-[5rem] font-bold  ">loding...</div>
//   );
// };

// export default TrendingPage;

// ----------------------------------------------------------------------------

import { useEffect, useState } from "react";
import { Card, DropDown } from "../index";
import { instance } from "../index";
import { Link, useLoaderData } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";

const TrendingPage = () => {
  const { trending } = useLoaderData(); // Initial data from loader

  const [trendingData, setTrendingData] = useState(trending || []); // Initialize with loader data
  const [options, setOptions] = useState("day");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await instance.get(
        `trending/${category}/${options}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrendingData((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading trending data:", error);
    }
  };

  const handleFilterChange = (newCategory, newOptions) => {
    setCategory(newCategory);
    setOptions(newOptions);
    setPage(1);
    setTrendingData([]);
    setHasMore(true);
  };

  // Load data when category or options change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get(
          `trending/${category}/${options}?page=1`
        );
        setTrendingData(data.results);
        setPage(2);
        setHasMore(data.results.length > 0);
      } catch (error) {
        console.error("Error loading trending data:", error);
      }
    };

    fetchData();
  }, [category, options]);

  return (
    <div className="w-full min-h-[100vh] relative  ">
      <img
        src="public/imgi_1_bg-body.png"
        alt=""
        className="fixed top-0 left-0 w-full h-[100vh] bg-cover bg-center z-[88]  "
      />
      <div className="max-w-screen-2xl mx-auto min-h-screen mt-[10rem] z-[999] relative ">
        <div className="my-5 flex justify-between items-center px-10  ">
          <Link
            to={"/"}
            className="text-white bg-[#87DBFC] font-semibold text-[1.5rem] px-6 py-1 rounded-full  "
          >
            Back
          </Link>
          <h1 className="text-[white] text-[2rem] font-semibold border-b ">
            <i>Trending</i>
          </h1>
          <div className="flex gap-5">
            <DropDown
              title={"Category"}
              option={["all", "movie", "tv"]}
              fnc={(e) => handleFilterChange(e.target.value, options)}
            />
            <DropDown
              title={"Time"}
              option={["day", "week"]}
              fnc={(e) => handleFilterChange(category, e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center w-full min-h-screen">
          <InfiniteScroll
            dataLength={trendingData.length}
            next={GetTrending}
            hasMore={hasMore}
            loader={
              <div className="w-full h-[100vh] bg-[black] text-[5rem] text-[red] flex items-center justify-center  ">
                Loding...
              </div>
            }
          >
            <Card
              data={trendingData}
              title={category}
              h={"h-[30vw]"}
              w={"w-[18vw]"}
            />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
