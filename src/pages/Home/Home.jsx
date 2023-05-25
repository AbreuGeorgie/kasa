import Gallery from "../../components/Gallery/Gallery";
import Banner from "../../components/Banner/Banner";
import vagues from "../../assets/vagues.png";

function Home() {
  return (
    <main>
      <Banner
        imgUrl={vagues}
        imgAlt="vagues contre les falaises"
        isTextShow={true}
      />
      <Gallery />
    </main>
  );
}

export default Home;
