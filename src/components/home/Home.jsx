import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import CategoriesSidebar from "../categoriesSidebar/CategoriesSidebar";
import Heading2 from "../headig2/Heading2";

const Home = () => {
  const categories = useLoaderData();
  
  return (
    <div className="mb-96">
      {/* Banner */}
      <Banner />
      <Heading2 />
      <div className="flex gap-6 mt-[490px]">
        {/* CategoriesSidebar */}
        <div className="flex  gap-6">
          <div>
            <CategoriesSidebar categories={categories} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
