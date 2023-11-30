// Product1.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductItem.css";
import ReactStars from "react-stars";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // You can render a loading state while fetching data
  }

  const { title, price, description, category, image, rating } = product;

  const starProps = {
    size: 30,
    value: rating.rate,
    edit: false,
  };

  return (
    <div className="product-container">
      <div className="product-details-item">
        <img className="product-details-details-image" src={image} alt={title} />
        <div className="product-details-details">
          <h2 className="product-details-title">{title}</h2>
          {rating && (
            <div className="product-details-rating">
              <ReactStars {...starProps} /> ({rating.count})
            </div>
          )}
          <p className="product-details-description">{description}</p>
          <p className="product-details-price">${price}</p>
          <p className="product-details-category">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
