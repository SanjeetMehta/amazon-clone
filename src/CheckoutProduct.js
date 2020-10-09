import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, title, image, price, rating}) {

    const [{basket}, dipatch] = useStateValue();
    const removeFromBasket = () => {
        dipatch({
            type: "REMOVE_FROM_BASKET",
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
        <div>
            <div className="checkoutProduct">
                <img className="chekoutProduct_image" src={image} />
                <div className="chekoutProduct_info">
                    <p className="chekoutProduct_title">{title}</p>
                    <p className="chekoutProduct_price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="chekoutProduct_rating">
                        {Array(rating)
                            .fill()
                            .map(_ => (
                                <p>⭐</p>
                            ))}
                    </div>
                    <button onClick={removeFromBasket}>
                        Remove from basket
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutProduct;
