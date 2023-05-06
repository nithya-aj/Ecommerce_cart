import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalCount: 0
    },
    reducers: {
        incrementQuantity: (state, action) => {
            const { itemId, quantity } = action.payload
            const existingItem = state.items.find(item => item.itemId === itemId)
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ itemId, quantity });
            }
            state.totalCount += quantity;
        },
        decrementQuantity: (state, action) => {
            const { itemId, quantity } = action.payload
            const existingItem = state.items.find(item => item.itemId === itemId)
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= quantity;
                state.totalCount -= quantity;
            }
        }
    }
})

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const { addItem, incrementQuantity, decrementQuantity } = cartSlice.actions