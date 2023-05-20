import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import vagues from "../assets/vagues.png";

function Home() {
  return (
    <>
      <Banner
        imgUrl={vagues}
        imgAlt="vagues contre les falaises"
        isTextShow={true}
      />
      <Gallery />
    </>
  );
}

export default Home;
