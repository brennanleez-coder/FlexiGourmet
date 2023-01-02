import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import restaurantReducer from "./slices/restaurantSlice";

export const store = configureStore({
    reducer: {
        // Add your reducers here
        basket: basketReducer,
        restaurant: restaurantReducer
    }
});
