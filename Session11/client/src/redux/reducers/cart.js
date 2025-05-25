const initialState = {
    cartItems: [],
    quantities: {},
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const itemToAdd = action.payload;
            const existItem = state.cartItems.find(
                (i) => i.id === itemToAdd.id
            );

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.id === itemToAdd.id
                            ? {
                                  ...i,
                                  quantity: i.quantity + itemToAdd.quantity,
                              }
                            : i
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...itemToAdd }],
                };
            }
        }

        case "UPDATE_CART_ITEM": {
            const { id, quantity } = action.payload;
            const newQuantity = Number(quantity);
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                ),
            };
        }

        case "DELETE_CART_ITEM": {
            const { id } = action.payload;
            const newQuantities = { ...state.quantities };
            newQuantities[id] = 1;

            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== id),
                quantities: newQuantities,
            };
        }

        case "SET_PRODUCT_QUANTITY": {
            const { id, quantity } = action.payload;
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [id]: Number(quantity),
                },
            };
        }

        default:
            return state;
    }
};

export default cartReducer;
