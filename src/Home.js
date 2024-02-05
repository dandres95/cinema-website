import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Movies from "./components/Movies";
import Releases from "./components/Realeses";
import Shows from "./components/Shows";

function Home() {
  return (
    <>
      <Banner />
      <Releases />
      <Movies />
      <Featured />
      <Shows />
    </>
  );
}

export default Home;
