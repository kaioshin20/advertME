import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const MyModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Goto Your Profile For Editing
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Congratutions</h4>
            <p>
              Your Website has been saved successfully !
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default MyModal;