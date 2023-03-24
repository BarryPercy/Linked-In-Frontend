import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { getSpecificUser, updateUser } from "../redux/actions";
import { useParams } from "react-router-dom";

const About = () => {
  let currentProfileUser = useAppSelector(
    (state) => state.users.currentProfileUser
  );
  let currentUser = useAppSelector((state) => state.users.currentUser);
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => {
    setShow(true);
    selectEditAbout();
  };

  const selectEditAbout = async () => {
    setEditAbout({ bio: currentProfileUser.bio });
  };
  let dispatch = useAppDispatch();
  const { userId } = useParams();
  const [editAbout, setEditAbout] = useState({
    bio: "",
  });

  const handleSubmit = () => {
    dispatch(updateUser(editAbout, userId, null));
    handleClose();
  };
  return (
    <Col className="main">
      <div className="my-3">
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit About section!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>About</Form.Label>
              <Form.Control
                className="post-area"
                as="textarea"
                placeholder="Tell us about yourself!"
                style={{ height: "150px" }}
                onChange={(e) => {
                  setEditAbout({
                    ...editAbout,
                    bio: e.target.value,
                  });
                }}
                value={editAbout.bio}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Card>
          <Card.Body>
            <div
              className="edit-main mr-4
              "
            >
              {currentProfileUser._id === currentUser._id && (
                <BsPencil
                  style={{ cursor: "pointer" }}
                  className="pencil-icon"
                  onClick={handleShow}
                />
              )}
            </div>
            <Card.Title>
              <h4>About</h4>
            </Card.Title>
            <Card.Text>
              {currentProfileUser !== undefined ? currentProfileUser.bio : ""}
            </Card.Text>{" "}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default About;
