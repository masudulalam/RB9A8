import BannerDashboard from "../bannerDashboard/BannerDashboard";
import WishListCard from "../wishListCard/WishListCard";


const Wishlist = () => {
    return (
        <div>
            <BannerDashboard />
            <h4 className="text-2xl font-bold">WishList</h4>
            <WishListCard />
            <button 
                className="btn bg-[#9538E2] text-white text-lg font-bold rounded-3xl">
                Add To Cart
            </button>
        </div>
    );
};

export default Wishlist;