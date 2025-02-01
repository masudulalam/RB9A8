import BannerDashboard from "../bannerDashboard/BannerDashboard";
import WishListCard from "../wishListCard/WishListCard";


const Wishlist = () => {
    return (
        <div>
            <BannerDashboard />
            <h4 className="text-2xl font-bold">WishList</h4>
            <WishListCard />
        </div>
    );
};

export default Wishlist;