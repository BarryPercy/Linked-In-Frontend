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
const TopNav = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container className="nav-padding">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">
              <div className="d-flex flex-column align-items-center nav-options">
                <AiFillHome size="2em" />
                <span className="nav-text">Home</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#my-net">
              <div className="d-flex flex-column align-items-center nav-options">
                <BsFillPeopleFill size="2em" />
                <span className="nav-text">My Network</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#jobs">
              <div className="d-flex flex-column align-items-center nav-options">
                <BsFillBriefcaseFill size="2em" />
                <span className="nav-text">Jobs</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#messaging">
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
            <Nav.Link href="">
              <div className="d-flex flex-column align-items-center nav-options">
                <Image
                  src="../../public/images/jovelynn.jfif"
                  className="user-image"
                />
                Me
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
