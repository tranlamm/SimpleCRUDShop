import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { actions } from '~/redux/reducers/productSlice';

function AddProductForm({ className }) {
    const [data, setData] = useState({
        name: '',
        price: '',
        category: '',
        des: '',
        img: '',
    });

    const dispatch = useDispatch();

    const handleSubmit = useCallback(() => {
        dispatch(
            actions.createProductRequest({
                ...data,
                category: data.category.trim().split(' '),
            }),
        );
    }, [data, dispatch]);

    return (
        <Form className={className}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Product Name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Product Price"
                    value={data.price}
                    onChange={(e) => setData({ ...data, price: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Product Image URL"
                    value={data.img}
                    onChange={(e) => setData({ ...data, img: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    type="text"
                    value={data.category}
                    onChange={(e) => setData({ ...data, category: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    spellCheck={false}
                    value={data.des}
                    onChange={(e) => setData({ ...data, des: e.target.value })}
                />
            </Form.Group>

            <Button className="float-end" variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default AddProductForm;
