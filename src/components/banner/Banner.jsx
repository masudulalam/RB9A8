import { useNavigate } from 'react-router-dom';
import bannerImage from '../../../src/assets/banner.jpg'

const Banner = () => {

  const navigate = useNavigate();
  const handleShowDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <div className="hero bg-[#9538E2] rounded-2xl pt-28 pb-64 relative">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="max-w-3xl py-6 text-white mt-6 mb-8 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button onClick={handleShowDashboard} className="btn btn-primary text-xl font-bold px-7 py-4 rounded-4xl bg-white text-[#9538E2]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute top-90 max-w-5xl flex items-center justify-center">
        <img className="rounded-2xl h-[530px]" src={bannerImage} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
