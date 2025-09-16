import { Outlet } from "react-router";
import { Footer, Nav } from "./components";

const App = () => {
  return (
    <div className="w-full min-h-screen relative  bg-cover bg-center bg-no-repeat font-mono ">
      <img
        src="/public/imgi_1_bg-body.png"
        alt=""
        className="fixed top-0 left-0 -z-[1] w-full h-[100vh] object-cover object-center"
      />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
