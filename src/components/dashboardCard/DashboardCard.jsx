import { useEffect, useState } from "react";
import { getAllCart } from "../../utilities";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";



const DashboardCard = () => {

  const [gadgets, setGadgets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const cart = getAllCart();
    setGadgets(cart);
  }, []);

  const totalPrice = gadgets.reduce((sum, gadget) => sum + gadget.price, 0);

  const handleSortByPrice = () => {
    const sortedGadgets = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedGadgets);
  };

  const handlePurchase = () => {
    setShowModal(true);
    const show = ()=>document.getElementById('purchase_modal').showModal();
    setGadgets([]); // Clear the cart
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/"); // Redirect to home page
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
                    <button onClick={handlePurchase} className="btn text-lg font-medium rounded-3xl bg-[#9538E2] text-white">Purchase</button>
                </div>
            </div>
        </div>
        {
          gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)
        } 
        {/* modal */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('purchase_modal').showModal()}>open modal</button> */}
        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-[mediumseagreen]">Congratulations!</h2>
            <p className="mt-3">Your purchase was successful.</p>
            <button onClick={handleCloseModal} className="mt-4 px-6 py-2 bg-[mediumseagreen] text-white rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default DashboardCard;
