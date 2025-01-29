import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Gadget = ({ gadget }) => {
  const { product_image, product_title, price, product_id } = gadget;
  console.log(product_title);
  console.log(gadget);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-6">
        <figure className="max-w-2xs max-h-44 mb-6">
          <img src={product_image} alt={product_title} />
        </figure>
        <div className="">
          <h2 className="card-title mb-3">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions mt-4">
            <Link to={`/gadget/${product_id}`}>
              <button className="btn btn-outline btn-primary text-lg font-semibold rounded-3xl">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Gadget.propTypes = {
  gadgetsData: PropTypes.object,
};

export default Gadget;
