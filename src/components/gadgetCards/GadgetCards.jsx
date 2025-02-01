import { useEffect, useState } from "react";
import Gadget from "../gadget/Gadget";


const GadgetCards = () => {
    const[gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/gadgetsData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])
    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id} />)
                }
            </div>
        </div>
    );
};

export default GadgetCards;