import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../gadget/Gadget";
import { useEffect, useState } from "react";


const GadgetCardsByCategory = () => {

    const {category} = useParams();
    const gadgetsData = useLoaderData();
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if(category){
            const filteredByCategory = [...gadgetsData].filter(gadget => gadget.category === category);
            setGadgets(filteredByCategory);
        } else {
            setGadgets(gadgetsData.slice(0, 6));
        }
    }, [gadgetsData, category])
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} />)
            }
        </div>
    );
};

export default GadgetCardsByCategory;