import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import userReducer from "../features/user/userSlice"
import articleReducer from "../features/article/articleSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        article: articleReducer,
    }
});