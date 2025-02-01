

const TotalCost = ({ gadgets }) => {
    const totalPrice = gadgets.reduce((sum, gadget) => sum + gadget.price, 0);
    return (
        <div className="flex justify-between mb-8">
            <div>
                <h4 className="text-2xl font-bold">Cart</h4>
            </div>
            <div className="flex gap-6">
                <h4 className="text-2xl font-bold">Total cost: ${totalPrice.toFixed(2)}</h4>
                <div>
                    <button className="btn text-lg font-semibold text-[#9538E2] rounded-3xl mr-4">Sort by Price</button>
                    <button className="btn text-lg font-medium rounded-3xl bg-[#9538E2] text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default TotalCost;