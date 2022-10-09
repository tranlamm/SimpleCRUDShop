import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

import { formatter } from '~/tools';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '~/redux/reducers/productSlice';

function ProductItem({ product }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const routeChange = () => {
        const path = `/product/${product._id}`;
        navigate(path);
    };

    const handleDelete = () => {
        dispatch(actions.deleteProductRequest({ _id: product._id }));
    };

    return (
        <Col className="mt-2">
            <Card border="primary" className="h-100">
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="d-flex flex-column align-items-start">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        <strong>{formatter.format(product.price)}</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>Category</strong>: {product.category.join(', ')}
                    </Card.Text>
                    <ButtonGroup className="mt-auto ms-auto">
                        <Button variant="outline-danger" size="sm" className="me-2" onClick={handleDelete}>
                            Delete
                        </Button>
                        <Button variant="outline-primary" size="sm" onClick={routeChange}>
                            Edit
                        </Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductItem;
