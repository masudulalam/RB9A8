import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const CategoriesSidebar = ({ categories }) => {

    return (
        <div className="flex flex-col space-y-6 shadow-2xl p-6 rounded-xl">
            {
                categories.map((category) => <NavLink to={`/category/${category.category}`} key={category.id}><button className="btn">{category.category}</button></NavLink>)
            }
        </div>
    );
};

CategoriesSidebar.propTypes = {
    categories: PropTypes.object,
}

export default CategoriesSidebar;