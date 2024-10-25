import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";

export const store = configureStore({
    reducer : {
        [cartReducer.name]: cartReducer.reducer
    }
})


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;