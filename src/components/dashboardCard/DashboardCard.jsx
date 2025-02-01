import { useEffect, useState } from "react";
import { getAllCart } from "../../utilities";
import Card from "../card/Card";
import TotalCost from "../totalCost/TotalCost";



const DashboardCard = () => {

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    const cart = getAllCart();
    setGadgets(cart);
  }, []);

  return (
    <div>
        <TotalCost gadgets={gadgets} />
        {
            gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)
        }  
    </div>
  )
};

export default DashboardCard;
