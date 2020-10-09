export const initialState = {
    basket: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            console.log("I am here");
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };
        case "REMOVE_FROM_BASKET":
            const newBasket = [...state.basket];
            const itemToRemoveIndex = state.basket.findIndex(
                item => item.id === action.payload.id
            );
            newBasket.splice(itemToRemoveIndex, 1);

            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
};

export default reducer;
