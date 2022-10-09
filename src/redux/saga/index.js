import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '~/api';
import { actions } from '~/redux/reducers/productSlice';

function* deleteProductSaga(action) {
    try {
        const status = yield call(api.deleteProduct, action.payload);
        if (status.status === 200) yield put(actions.deleteProductSuccess(action.payload));
    } catch (error) {
        yield put(actions.updateProductFailure(error));
    }
}

function* updateProductSaga(action) {
    try {
        const updatedProduct = yield call(api.updateProduct, action.payload);
        yield put(actions.updateProductSuccess(updatedProduct.data));
    } catch (error) {
        yield put(actions.updateProductFailure(error));
    }
}

function* createProductSaga(action) {
    try {
        const product = yield call(api.createProduct, action.payload);
        yield put(actions.createProductSuccess(product.data));
    } catch (error) {
        yield put(actions.createProductFailure(error));
    }
}

function* fetchProductsSaga(action) {
    try {
        const products = yield call(api.fetchProducts);
        yield put(actions.getProductsSuccess(products.data));
    } catch (error) {
        yield put(actions.getProductFailure(error));
    }
}

function* rootSaga() {
    yield takeLatest(actions.getProductsRequest, fetchProductsSaga);
    yield takeLatest(actions.createProductRequest, createProductSaga);
    yield takeLatest(actions.updateProductRequest, updateProductSaga);
    yield takeLatest(actions.deleteProductRequest, deleteProductSaga);
}

export default rootSaga;
