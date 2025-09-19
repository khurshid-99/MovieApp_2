import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Nav = () => {
  // const [mousemove, setMousemove] = useState(null);

  // const mouseMove = () => {
  //   window.addEventListener("mousemove", (e) => {
  //     // console.log(e.clientX, e.clientY);
  //     setMousemove(e.clientX)
  //   });
  // };

  // useEffect(() => {
  //   mouseMove();
  // }, []);

  // console.log(mousemove);

  return (
    <div className="fixed top-0 w-full z-[9999] ">
      <div className="max-w-screen-2xl mx-auto relative py-5 z-[999]   ">
        <div
          className="Nav_bar  flex justify-between items-center px-5 py-3 rounded-full border border-[#3E3D42] text-[white] relative "
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(5px)",
            webkitBackdropFilter: "blur(5px)",
          }}
        >
          <input
            type="text"
            placeholder="Search Movie"
            className="w-[25vw] bg-[#2A2A2E] text-2xl font-medium py-3 rounded-full pl-5 placeholder:text-white outline-none "
          />
          <div className="flex items-center gap-4 text-xl font-medium relative uppercase z-[9999] ">
            <NavLink
              to={"/"}
              className={(e) =>
                e.isActive
                  ? "bg-[red] px-3 rounded-full z-[9999] text-[1.3rem]"
                  : "text-[1.3rem] z-[9999] px-3 rounded-full "
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/trending"}
              className={(e) =>
                e.isActive
                  ? "bg-[red] px-3 rounded-full z-[9999] text-[1.3rem]"
                  : "text-[1.3rem] z-[9999] px-3 rounded-full hover:bg-[#B558B0] duration-500 "
              }
            >
              Trending
            </NavLink>
            <NavLink
              to={"/popular"}
              className={(e) =>
                e.isActive
                  ? "bg-[red] px-3 rounded-full z-[9999] text-[1.3rem]"
                  : "text-[1.3rem] z-[9999] px-3 rounded-full "
              }
            >
              Popular
            </NavLink>
            <NavLink
              to={"/top_show"}
              className={(e) =>
                e.isActive
                  ? "bg-[red] px-3 rounded-full z-[9999] text-[1.3rem]"
                  : "text-[1.3rem] z-[9999]  px-3 rounded-full"
              }
            >
              Top_Show
            </NavLink>
            <NavLink
              to={"/articles"}
              className={(e) =>
                e.isActive
                  ? "bg-[red] px-3 rounded-full z-[9999] text-[1.3rem]"
                  : "text-[1.3rem] z-[9999] px-3 rounded-full "
              }
            >
              Articles
            </NavLink>
          </div>
          <div className="flex items-center gap-5 text-xl font-medium uppercase pr-2">
            <NavLink>Contack_us</NavLink>
            <NavLink>Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
