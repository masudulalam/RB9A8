import { useEffect, useState } from "react";
import Product from "../product/Product";


const GadgetCard = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./productsData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-96">
            <h2 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    products.map(product => <Product product={product} key={product.product_id} />)
                }
            </div>
        </div>
    );
};

export default GadgetCard;