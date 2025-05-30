import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/combine";

const store = configureStore({
    reducer: rootReducer,
});

export default store;
