import React from "react";
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            {basket.length === 0 ? (
                <h2>Your Shopping basket is empty</h2>
            ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping basket</h2>
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
            {basket.length > 0 && (
                <div className="checkout_right">
                    <SubTotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
