import { Link, NavLink, useNavigate } from "react-router-dom";


const CategoriesSidebar = ({ categories }) => {

    return (
        <div className="flex flex-col space-y-6 shadow-2xl p-6 rounded-xl">
            {
                categories.map((category) => <NavLink to={`/category/${category.category}`} key={category.id}><button className="btn">{category.category}</button></NavLink>)
            }
        </div>
    );
};

export default CategoriesSidebar;