export const actionAddToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
    };
};

export const actionUpdateCartItem = (id, quantity) => {
    return {
        type: "UPDATE_CART_ITEM",
        payload: { id, quantity },
    };
};

export const actionDeleteCartItem = (id) => {
    return {
        type: "DELETE_CART_ITEM",
        payload: { id },
    };
};

export const actionSetProductQuantity = (id, quantity) => {
    return {
        type: "SET_PRODUCT_QUANTITY",
        payload: { id, quantity },
    };
};
