import { useState } from 'react';

import ProductList from '~/components/ProductList';
import AddProductForm from '~/components/AddProductForm';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusLg } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Home() {
    const [show, setShow] = useState(false);

    const handleShowModal = () => {
        setShow(true);
    };

    const handleCloseModal = () => {
        setShow(false);
    };

    return (
        <div className={cx('wrapper')}>
            <ProductList></ProductList>
            <Button variant="success" className={cx('add-btn')} onClick={handleShowModal}>
                <BsPlusLg></BsPlusLg>
            </Button>
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding a product</Modal.Title>
                </Modal.Header>

                <AddProductForm className={cx('add-form')}></AddProductForm>
            </Modal>
        </div>
    );
}

export default Home;
