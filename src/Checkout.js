import React from "react";
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            {basket.length === 0 ? (
                <h2>Your shoping basket is empty</h2>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shoping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Checkout;
