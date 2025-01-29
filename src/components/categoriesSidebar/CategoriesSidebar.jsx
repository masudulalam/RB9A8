import { Link, useNavigate } from "react-router-dom";


const CategoriesSidebar = ({ categories }) => {

    return (
        <div className="flex flex-col space-y-6 shadow-2xl p-6 rounded-xl">
            {
                categories.map((category) => <Link to={`/category/${category.category}`} key={category.id}><button className="btn">{category.category}</button></Link>)
            }
        </div>
    );
};

export default CategoriesSidebar;