import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dipatch] = useStateValue();
    const addToBasket = () => {
        dipatch({
            type: "ADD_TO_BASKET",
            payload: {
                id,
                title,
                image,
                price,
                rating
            }
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map(_ => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
