// Product.jsx
import { Link } from "react-router-dom";
import "./Product.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactStars from "react-stars";

const Product = ({ id }) => {
  const [productData, setProductData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProductData(response.data);
      } catch (error) {
        setError("Error fetching data from the API");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const { title, price, description, category, image, rating } = productData;

  const starProps = {
    size: 30,
    value: rating?.rate || 0,
    edit: false,
  };

  return (
    <>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <Link to={`/product/${id}`} className="product-link">
          <div className="product-item">
            <img className="product-image" src={image} alt={title} />
            <div className="product-details">
              <h2 className="product-title">{title}</h2>
              <p className="product-description">{description}</p>
              <p className="product-price">Rs. {price}</p>
              <p className="product-category">{category}</p>
              {rating && (
                <div className="product-rating">
                  <ReactStars {...starProps} /> ({rating.count})
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Product;
