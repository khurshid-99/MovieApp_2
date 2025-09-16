import {
  Footer,
  Header,
  LatestArticles,
  LiveAction,
  Nav,
  NewesFeet,
  Popular,
  TopViewShow,
  Trending,
} from "../components";
const Home = () => {
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto  ">
      {/* <Nav /> */}
      <Header />
      <Trending />
      <Popular />
      <NewesFeet />
      <LiveAction />
      <TopViewShow />
      <LatestArticles />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
