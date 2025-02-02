import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../gadget/Gadget";
import { useEffect, useState } from "react";


const GadgetCardsByCategory = () => {

    const {category} = useParams();
    const gadgetsData = useLoaderData();
    const [gadgets, setGadgets] = useState([]);

    // useEffect(() => {
    //     if(category){
    //         const filteredByCategory = [...gadgetsData].filter(gadget => gadget.category === category);
    //         setGadgets(filteredByCategory);
    //     } else {
    //         setGadgets(gadgetsData.slice(0, 6));
    //     }
    // }, [gadgetsData, category])
    useEffect(() => {
        if (category) {
          // If a category is selected, filter and display all matching gadgets
          const filteredByCategory = gadgetsData.filter(
            (gadget) => gadget.category === category
          );
          setGadgets(filteredByCategory);
        } else {
          // Get first category name dynamically
          const firstCategory = gadgetsData[0]?.category;
    
          // Filter data based on the first category
          const firstCategoryGadgets = gadgetsData
            .filter((gadget) => gadget.category === firstCategory)
            .slice(0, 6);
    
          // Get unique categories excluding the first one
          const otherCategories = [
            ...new Set(
              gadgetsData.map((gadget) => gadget.category).filter((c) => c !== firstCategory)
            ),
          ].slice(0, 2); // Take next 2 categories only
    
          // Get 2 items from each of the next two categories
          const additionalGadgets = otherCategories.flatMap((cat) =>
            gadgetsData.filter((gadget) => gadget.category === cat).slice(0, 2)
          );
    
          // Set state with 6 + 2 + 2 = 10 items
          setGadgets([...firstCategoryGadgets, ...additionalGadgets]);
        }
      }, [gadgetsData, category]);
    
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget} />
          ))}
        </div>
      );
    
    
    

    // return (
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {
    //             gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} />)
    //         }
    //     </div>
    // );
};

export default GadgetCardsByCategory;