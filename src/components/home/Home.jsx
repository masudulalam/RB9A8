import Banner from "../banner/Banner";
import CategoriesSidebar from "../categoriesSidebar/CategoriesSidebar";
import GadgetCard from "../gadgetCard/GadgetCard";

const Home = () => {
  return (
    <div className="mb-96">
      <Banner />
      <div className="flex flex-row">
        <CategoriesSidebar className="basis-1/4" />
        <GadgetCard className="basis-3/4" />
      </div>
    </div>
  );
};

export default Home;
