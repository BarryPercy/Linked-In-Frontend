import {
  Container,
  Nav,
  Navbar,
  Form,
  Image,
  InputGroup,
} from "react-bootstrap";
import {
  BsLinkedin,
  BsFillPeopleFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import userPic from "../images/jovelynn.png";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const TopNav = () => {
  const location = useLocation();
  return (
    <Navbar bg="white" expand="lg" fixed="top">
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
                <Image src={userPic} className="user-image" />
                Me
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
