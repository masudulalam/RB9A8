import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../heading/Heading";
import { addToCart } from "../../utilities";

const ViewDetails = () => {
  const allGadgetData = useLoaderData();
  const { product_id } = useParams();
  const [gadget, setGadget] = useState({});
  console.log(allGadgetData);
  console.log(product_id);
  console.log(gadget);
  useEffect(() => {
    const singleGadget = allGadgetData.find(
      (gadget) => gadget.product_id === parseInt(product_id)
    );
    setGadget(singleGadget);
  }, [allGadgetData, product_id]);

  const {product_title, product_image, price, description, Specification} = gadget;

  const handleAddToCart = (gadget) => {
    addToCart(gadget);
  };

  return (
    <div>
      <Heading
        title="Product Details"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="flex gap-6 shadow-2xl p-8 rounded-3xl mt-8 mb-24">
        <div className="w-md">
          <img
            className="rounded-2xl"
            src={product_image}
            alt="{product_title}"
          />
        </div>
        <div className="w-2xl">
          <h3 className="text-2xl font-semibold">{product_title}</h3>
          <p className="text-xl font-semibold text-gray-500 mt-3 mb-4">
            Price: ${price}
          </p>
          <button className="btn">In Stock</button>
          <p className="text-lg text-gray-400 my-4">{description}</p>
          <p className="text-lg font-bold">Specification:</p>
          <ol className="list-decimal pl-6 text-gray-400">
            {Specification && Specification.length > 0 ? (
              Specification.map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))
            ) : (
              <li className="text-md text-gray-400">
                No specifications available.
              </li>
            )}
          </ol>
          <p className="text-lg font-bold my-4">Rating:</p>
          <button onClick={() => handleAddToCart(gadget)} className="btn bg-[#9538E2] text-white text-lg font-bold rounded-3xl">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
