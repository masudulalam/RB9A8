

const CategoriesSidebar = () => {
    const categories = ['All Product','Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook', 'Iphone'];
    return (
        <div className="flex flex-col space-y-6 shadow-2xl p-6 rounded-xl">
            {
                categories.map((category, index) => <button className="btn btn-soft btn-primary rounded-2xl text-lg font-extrabold"  key={index}>{category}</button>)
            }
        </div>
    );
};

export default CategoriesSidebar;