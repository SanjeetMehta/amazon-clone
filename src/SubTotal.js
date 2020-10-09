import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    const getBasketTotal = () => {
        return basket.reduce((amount, item) => {
            return item.price + amount;
        }, 0);
    };
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            {" "}
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>

                        <small className="subtotal_gift">
                            <input type="checkbox" /> This Order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
}

export default SubTotal;
