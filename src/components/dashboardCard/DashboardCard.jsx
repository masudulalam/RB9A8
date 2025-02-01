import { useEffect, useState } from "react";
import { getAllCart } from "../../utilities";
import Card from "../card/Card";



const DashboardCard = () => {

  const [gadgets, setGadgets] = useState([]);
  

  useEffect(() => {
    const cart = getAllCart();
    setGadgets(cart);
  }, []);

  const totalPrice = gadgets.reduce((sum, gadget) => sum + gadget.price, 0);

  const handleSortByPrice = () => {
    const sortedGadgets = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedGadgets);
  };

  return (
    <div>
        <div className="flex justify-between mb-8">
            <div>
                <h4 className="text-2xl font-bold">Cart</h4>
            </div>
            <div className="flex gap-6">
                <h4 className="text-2xl font-bold">Total cost: ${totalPrice.toFixed(2)}</h4>
                <div>
                    <button onClick={handleSortByPrice} className="btn text-lg font-semibold text-[#9538E2] rounded-3xl mr-4">Sort by Price</button>
                    <button className="btn text-lg font-medium rounded-3xl bg-[#9538E2] text-white">Purchase</button>
                </div>
            </div>
        </div>
        {
          gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)
        }  
    </div>
  )
};

export default DashboardCard;
