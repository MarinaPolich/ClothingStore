import { createSlice } from "@reduxjs/toolkit";

const state = {
  orderItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: state,
  reducers: {
    addOrderItem: (state, { payload }) => {
      const item = state.orderItems.find((item) => item.id === payload);
      if (item) {
        item.count += 1;
      } else {
        state.orderItems.push({ id: payload, count: 1 });
      }
    },
    setCount: (state, { payload }) => {
      if (payload.count > 0) {
        const item = state.orderItems.find((item) => item.id === payload.id);
        if (item) {
          item.count = payload.count;
        }
      }
    },
    deleteOrderItem: (state, { payload }) => {
      state.orderItems = state.orderItems.filter(({ id }) => id !== payload);
    },
  },
});

export const { addOrderItem, setCount, deleteOrderItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
