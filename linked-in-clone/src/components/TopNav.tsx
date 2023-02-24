import {
  Container,
  Nav,
  Navbar,
  Form,
  Image,
  InputGroup,
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
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import userPic from "../images/jovelynn.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { setToken } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const TopNav = () => {
  const location = useLocation();
  let currentUser = useAppSelector((state) => state.users.currentUser);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <Navbar bg="white" expand="lg" fixed="top">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            <Col onClick={()=>dispatch(setToken("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzc1YzgzODFmYzAwMTNmZmZhZDIiLCJpYXQiOjE2NzY4ODM4MDQsImV4cCI6MTY3ODA5MzQwNH0.xJ1_0xYnhu_VGi6iYMgPnmR9ZhWHNeBV0yjk_d6eSfo"))}>Barry Percy</Col>
            <Col onClick={()=>dispatch(setToken("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0"))}>Jovellyn A Quiapos</Col>
          </Row>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="nav-padding">
        <div className="d-flex align-items-center">
          <Link to="/feed">
            <Navbar.Brand href="#home">
              <BsLinkedin size="2em" className="linked-in-nav-icon" />
            </Navbar.Brand>
          </Link>

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
            <Link to="/feed/">
              <Nav.Link href="#home">
                <div className="d-flex flex-column align-items-center nav-options">
                  <AiFillHome size="2em" />
                  <span className="nav-text">Home</span>
                </div>
              </Nav.Link>
            </Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center nav-options">
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
            <Link className="profile-text" to="/profile/">
              <div className="d-flex flex-column align-items-center nav-options mt-1 profile-text">
                <Image src={currentUser.image} className="user-image" />
                Me
              </div>
            </Link>
            <Nav.Link>
              <div className="d-flex flex-column align-items-center nav-options" onClick={handleShow}>
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
