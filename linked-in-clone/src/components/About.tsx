import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { updateUser } from "../redux/actions";
import { cursorTo } from "readline";

const About = () => {
  let currentUser = useAppSelector((state) => state.users.currentUser);
  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);
  let dispatch = useAppDispatch();
  let currentToken = useAppSelector((state) => state.users.currentToken);
  const [editAbout, setEditAbout] = useState({
    bio: "",
  });

  const handleSubmit = () => {
    dispatch(updateUser(editAbout, currentToken));
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
              <BsPencil
                style={{ cursor: "pointer" }}
                className="pencil-icon"
                onClick={handleShow}
              />
            </div>
            <Card.Title>
              <h4>About</h4>
            </Card.Title>
            <Card.Text>
              {currentUser.bio}
              {/* 🖥 Currently in education, studying, to become a full-stack
              developer.
              <br></br>
              <br></br>
              ✈Former Flight Attendant with 4 years of experience currently
              based in Charleroi Airport, Belgium. Great teamwork and
              communication skills. Can work in a pressured situation and look
              into ways to make both passengers and crew work well. Have quick
              thinking and sociable skills to adapt to different scenarios. Work
              with various types of personalities throughout my years. <br></br>
              <br></br>
              🖌With some knowledge of Graphic Design as I was self-taught at
              such a young age and had a great interest when growing up.{" "}
              <br></br>
              <br></br>
              🏢Coding knowledge from going to the National College of Ireland
              and doing the Computing and Business course. */}
              {/* <Button className="see-more-btn mr-2" variant="outline-light">
                  ...see more
                </Button>{" "} */}
            </Card.Text>{" "}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default About;
