const initialState = {
    listProduct: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIST_DATA":
            return { ...state, listProduct: action.payload };

        default:
            return state;
    }
};

export default productReducer;
