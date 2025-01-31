import { useEffect, useState } from "react";
import { getAllCart } from "../../utilities";
import Card from "../card/Card";



const DashboardCard = () => {

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    const cart = getAllCart();
    setGadgets(cart);
  }, []);

  return (
    <div>
        {
            gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)
        }  
    </div>
  )
};

export default DashboardCard;
