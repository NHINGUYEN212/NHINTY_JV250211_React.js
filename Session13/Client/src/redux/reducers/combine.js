import { combineReducers } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";

const rootReducer = combineReducers({
    tasks: taskSlice,
});

export default rootReducer;
