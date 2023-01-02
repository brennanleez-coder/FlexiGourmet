import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => {
                    // console.log("type of basketItem ID: " + typeof basketItem.id)
                    // console.log("type of action payload ID: " + typeof action.payload.id)
                    // console.log(basketItem.id === action.payload.id)
                    return basketItem.id === action.payload.id

                }
            );
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.payload.id}) as its not in basket!`
                );
            }
            state.items = newBasket;
            console.log(state.items)
        },
        //function to empty basket
        emptyBasket: (state) => {
            state.items = [];
        }
    }
});

export const { addToBasket, removeFromBasket, emptyBasket } = basketSlice.actions;

export const selectBasketItems = state => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(item => item.id === id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) =>
    total += item.price, 0
);
export default basketSlice.reducer;
