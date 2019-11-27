import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = props => {
  const {
    buttonLabel,
    className,
    getChangeImg,
    getChangeTitle,
    getChangeRating,
    addMovie
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add your new movie</ModalHeader>
        <ModalBody>
          <form className="addForm">
            <input
              className="formInput"
              type="text"
              placeholder="Insert picture Link"
              onChange={e => getChangeImg(e.target.value)}
            />
            <input
              className="formInput"
              type="text"
              placeholder="Insert Title"
              onChange={e => getChangeTitle(e.target.value)}
            />
            <input
              className="formInput"
              type="text"
              placeholder="Insert Rating"
              onChange={e =>
                Number(e.target.value) <= 5
                  ? getChangeRating(e.target.value)
                  : (e.target.value = "")
              }
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              addMovie();
              toggle();
            }}
          >
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
