import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import CategoriesSidebar from "../categoriesSidebar/CategoriesSidebar";

const Home = () => {
  const categories = useLoaderData();
  
  return (
    <div className="mb-96">
      {/* Banner */}
      <Banner />
      <div className="flex gap-6 mt-[490px]">
        {/* CategoriesSidebar */}
        <div className="flex  gap-6">
          <div><CategoriesSidebar categories={categories} /></div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
