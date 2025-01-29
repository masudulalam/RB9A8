import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../heading/Heading";

const ViewDetails = () => {
  const allGadgetData = useLoaderData();
  const product_id = useParams();
  const [gadget, setGadget] = useState({}); 
  console.log(allGadgetData);
  console.log(product_id);
  console.log(gadget);
  useEffect(() => {
    const gadget = allGadgetData.find(gadget => gadget.product_id === parseInt(product_id))
    setGadget(gadget)
  }, [allGadgetData, product_id])
  return (
    <div className="flex gap-6">
      <Heading title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
      <div></div>
      <div>
        <h3 className="text-2xl font-semibold">{}</h3>
      </div>
    </div>
  );
};

export default ViewDetails;
