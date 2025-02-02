import { addToCart } from "../../utilities";
import PropTypes from 'prop-types';

const CardWishlist = ({ gadget }) => {

    const {product_image, product_title, description, price} = gadget;

    // handle add to cart button
    const handleAddToCart = (gadget) => {
        addToCart(gadget);
    };

    return (
        <div className="flex gap-8 shadow p-8 rounded-2xl mb-6">
            <div className="w-3xs">
                <img className="rounded-xl" src={product_image} alt="" />
            </div>
            <div>
                <h4 className="text-2xl font-semibold">{product_title}</h4>
                <p className="text-lg text-gray-400 my-4">{description}</p>
                <p className="text-lg font-semibold text-gray-500">{price}</p>
                <button onClick={() => handleAddToCart(gadget)} className="btn bg-[#9538E2] text-white text-lg font-bold rounded-3xl mt-4">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

CardWishlist.propTypes = {
    gadget: PropTypes.object,
}

export default CardWishlist;