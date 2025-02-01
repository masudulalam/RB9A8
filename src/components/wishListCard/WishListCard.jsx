import { useEffect, useState } from "react";
import { getAllWishList } from "../../utilities/wishlist";
import CardWishlist from "../cardWishlist/CardWishlist";


const WishListCard = () => {

    const [gadgets, setGadgets]  = useState([]);

    useEffect(() => {
        const wishList = getAllWishList();
        setGadgets(wishList);
    }, [])

    return (
        <div>
            {gadgets.map(gadget => <CardWishlist key={gadget.product_id} gadget={gadget} />)}
        </div>
    );
};

export default WishListCard;