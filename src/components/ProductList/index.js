import { useDispatch, useSelector } from 'react-redux';
import { actions } from '~/redux/reducers/productSlice';
import { useEffect } from 'react';
import { productsState$ } from '~/redux/selectors';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductItem from '~/components/ProductItem';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(productsState$);

    useEffect(() => {
        dispatch(actions.getProductsRequest());
    }, [dispatch]);

    return (
        <Container>
            <Row xl={4} md={3} xs={1}>
                {products.map((product) => (
                    <ProductItem key={product._id} product={product}></ProductItem>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;
