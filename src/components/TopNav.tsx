import {
  Container,
  Nav,
  Navbar,
  Form,
  Image,
  Modal,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import {
  BsLinkedin,
  BsFillPeopleFill,
  BsFillBriefcaseFill,
  BsFillFilePersonFill,
} from "react-icons/bs";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  cancelRequest,
  friendAccept,
  friendCancel,
  friendRequest,
} from "../redux/actions";

interface User {
  _id: string;
  name: string;
  surname: string;
  image: string;
}

const TopNav = () => {
  let currentUser = useAppSelector((state) => state.users.currentUser);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const dispatch = useAppDispatch();
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center text-center">
            <Col>Barry Percy</Col>
            <Col>Jovellyn A Quiapos</Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>My Network</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentUser ? (
            <div className="">
              <h6>Friends list:</h6>
              {currentUser.social.friends.map((e: User, i: number) => {
                return (
                  <div key={i} className="d-flex align-items-center mb-2">
                    <img
                      src={e.image}
                      alt={"user avatar"}
                      className="friends-image mr-2"
                    />
                    <span className="mr-1">{e.name}</span>
                    <span>{e.surname}</span>
                    <Button
                      variant="danger"
                      className="friend-button ml-2"
                      onClick={() => {
                        dispatch(friendCancel(currentUser._id, e._id));
                      }}
                    >
                      Remove friend
                    </Button>
                  </div>
                );
              })}
              <h6>Pending requests:</h6>
              {currentUser.social.pending.map((e: User, i: number) => {
                return (
                  <div key={i} className="d-flex align-items-center mb-2">
                    <img
                      src={e.image}
                      alt={"user avatar"}
                      className="friends-image mr-2"
                    />
                    <span className="mr-1">{e.name}</span>
                    <span>{e.surname}</span>
                    <Button
                      variant="info"
                      className="friend-button ml-2"
                      onClick={() => {
                        dispatch(friendAccept(currentUser._id, e._id));
                      }}
                    >
                      Accept request
                    </Button>
                    <Button
                      variant="danger"
                      className="friend-button ml-2"
                      onClick={() => {
                        dispatch(cancelRequest(currentUser._id, e._id));
                      }}
                    >
                      Cancel request
                    </Button>
                  </div>
                );
              })}
              <h6>Sent requests:</h6>
              {currentUser.social.sent.map((e: User, i: number) => {
                return (
                  <div key={i} className="d-flex align-items-center">
                    <img
                      src={e.image}
                      alt={"user avatar"}
                      className="friends-image mr-2"
                    />
                    <span className="mr-1">{e.name}</span>
                    <span>{e.surname}</span>
                    <Button
                      variant="warning"
                      className="friend-button ml-2"
                      onClick={() => {
                        dispatch(friendRequest(currentUser._id, e._id));
                      }}
                    >
                      Cancel request
                    </Button>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="nav-padding">
        <div className="d-flex align-items-center px-1">
          <Navbar.Brand href="/">
            <BsLinkedin size="2em" className="linked-in-nav-icon" />
          </Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 form-background"
              aria-label="Search"
            />
          </Form>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="/">
              <div className="d-flex flex-column align-items-center nav-options home-text">
                <AiFillHome size="2em" />
                <span className="nav-text home-text">Home</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div
                className="d-flex flex-column align-items-center nav-options"
                onClick={handleShow2}
              >
                <BsFillPeopleFill size="2em" />
                <span className="nav-text">My Network</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center nav-options">
                <BsFillBriefcaseFill size="2em" />
                <span className="nav-text">Jobs</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center nav-options">
                <AiFillMessage size="2em" />
                <span className="nav-text">Messaging</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#notif">
              <div className="d-flex flex-column align-items-center nav-options">
                <FaBell size="2em" />
                <span className="nav-text">Notifications</span>
              </div>
            </Nav.Link>
            <Link className="profile-text" to={"/profile/" + currentUser._id}>
              <div className="d-flex flex-column align-items-center nav-options mt-1 profile-text">
                <Image src={currentUser.image} className="user-image" />
                Me
              </div>
            </Link>
            <Nav.Link>
              <div
                className="d-flex flex-column align-items-center nav-options"
                onClick={handleShow}
              >
                <BsFillFilePersonFill size="2em" />
                <span className="nav-text">Change Profile</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
