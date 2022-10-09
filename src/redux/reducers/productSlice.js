import { createSlice } from '@reduxjs/toolkit';

import { INIT_STATE } from '~/redux/constant';

export const productSlice = createSlice({
    name: 'product',
    initialState: INIT_STATE.products,
    reducers: {
        getProductsRequest: (state) => {
            state.isLoading = true;
        },
        getProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        getProductFailure: (state, action) => {
            state.isLoading = false;
        },
        createProductRequest: (state, action) => {
            state.isLoading = true;
        },
        createProductSuccess: (state, action) => {
            state.isLoading = false;
            state.data = [...state.data, action.payload];
        },
        createProductFailure: (state, action) => {
            state.isLoading = false;
        },
        updateProductRequest: (state, action) => {
            state.isLoading = true;
        },
        updateProductSuccess: (state, action) => {
            state.isLoading = false;
            state.data = state.data.map((product) => (product._id === action.payload._id ? action.payload : product));
        },
        updateProductFailure: (state, action) => {
            state.isLoading = false;
        },
        deleteProductRequest: (state, action) => {
            state.isLoading = true;
        },
        deleteProductSuccess: (state, action) => {
            state.isLoading = false;
            const id = action.payload._id;
            state.data = state.data.filter((product) => product._id !== id);
        },
        deleteProductFailure: (state, action) => {
            state.isLoading = false;
        },
    },
});

export const actions = productSlice.actions;

export default productSlice.reducer;
