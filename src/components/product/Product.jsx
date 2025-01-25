const Product = ({ product}) => {
    const {product_image, product_title, price} = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary text-lg font-semibold rounded-3xl">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
