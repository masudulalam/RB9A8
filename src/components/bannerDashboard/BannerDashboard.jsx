import Heading from "../heading/Heading";


const BannerDashboard = () => {
  
  return (
    <div className="hero bg-[#9538E2] mb-12">
      <div className="hero-content text-center">
        <div className="text-white">
          <Heading
            title={"Dashboard"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
          <div className="mb-8">
            <button className="btn bg-[#9538E2] text-white text-lg font-bold rounded-3xl px-16 mr-6">
              Cart
            </button>
            <button className="btn bg-[#9538E2] text-white text-lg font-bold rounded-3xl px-16">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDashboard;
