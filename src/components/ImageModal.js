import React, { useState } from 'react';
import ImgCarousel from './ImgCarousel'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ImgModal = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button className="mb-3" color="primary" onClick={toggle}>More Photos</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>More Images</ModalHeader>
                <ModalBody>
                    <ImgCarousel images={props.images} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ImgModal;