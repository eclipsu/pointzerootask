// Product.jsx
import { Link } from "react-router-dom";
import "./Product.css";
import ReactStars from "react-stars";

const Product = ({ id, title, price, description, category, image, rating }) => {
  const starProps = {
    size: 30,
    value: rating.rate,
    edit: false,
  };
  return (
    <Link to={`/product/${id}`} className="product-link">
      <div className="product-item">
        <img className="product-image" src={image} alt={title} />
        <div className="product-details">
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <p className="product-category">{category}</p>
          {rating && ( // Check if rating exists
            <div className="product-rating">
              <ReactStars {...starProps} /> ({rating.count})
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Product;
