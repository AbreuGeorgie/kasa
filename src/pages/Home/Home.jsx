import Banner from "../../components/Banner/Banner";
import vagues from "../../assets/vagues.png";
import data from "../../data.json";
import { Link } from "react-router-dom";
import Thumb from "../../components/Thumb/Thumb";
import "./Home.scss";

function Home() {
  return (
    <main>
      <Banner
        imgUrl={vagues}
        imgAlt="vagues contre les falaises"
        isTextShow={true}
      />
      <section className="thumbContainer">
        {data.map((appartment) => (
          <Link
          to={`/appartment?id=${appartment.id}`}
          className="appartment"
          key={appartment.id}
          >
            <Thumb
              imgUrl={appartment.cover}
              titleThumb={appartment.title}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
