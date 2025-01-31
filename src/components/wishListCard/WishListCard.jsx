import { useEffect, useState } from "react";
import Card from "../card/Card";
import { getAllWishList } from "../../utilities/wishlist";


const WishListCard = () => {

    const [gadgets, setGadgets]  = useState([]);

    useEffect(() => {
        const wishList = getAllWishList();
        setGadgets(wishList);
    }, [])

    return (
        <div>
            {gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)}
        </div>
    );
};

export default WishListCard;