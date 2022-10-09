import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadingState$, productsState$ } from '~/redux/selectors';

import { actions } from '~/redux/reducers/productSlice';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const products = useSelector(productsState$);
    const loading = useSelector(loadingState$);
    const product = useMemo(() => products.find((item) => item._id === id), [products, id]);
    const [data, setData] = useState({ ...product, category: product.category.join(' ') });

    const handleSubmitEdit = useCallback(() => {
        dispatch(actions.updateProductRequest({ ...data, category: data.category.trim().split(' ') }));
    }, [dispatch, data]);

    return (
        <Container className="mt-5">
            <Row>
                <h1>
                    <Badge bg="secondary">Edit</Badge>
                </h1>
            </Row>
            <Row className="mt-4">
                <Col lg={4} sm={12}>
                    <Image fluid src={product.img} className=" mx-auto d-block"></Image>
                </Col>

                <Col lg={8} sm={12}>
                    <Form>
                        <fieldset disabled>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control placeholder={data._id} disabled />
                            </Form.Group>
                        </fieldset>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.price}
                                onChange={(e) => setData({ ...data, price: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={data.des}
                                onChange={(e) => setData({ ...data, des: e.target.value })}
                                spellCheck={false}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Img</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.img}
                                onChange={(e) => setData({ ...data, img: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                value={data.category}
                                onChange={(e) => setData({ ...data, category: e.target.value })}
                            />
                        </Form.Group>
                        <Button variant="primary" className="float-end" onClick={handleSubmitEdit}>
                            Submit
                            {loading && <Spinner animation="border" size="sm" className="ms-2" />}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;
