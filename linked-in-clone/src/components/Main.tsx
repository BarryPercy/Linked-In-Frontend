import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const Main = () => {
  return (
    <>
      <TopNav />
      <Container className="d-flex">
        <div className="d-flex flex-column pt-5">
          {/* left main section */}
          <Row className="mt-3">
            <Col sm={6} md={8} className="mt-2 mb-3">
              <Profile />
            </Col>
            <Col sm={6} md={8} className="mt-2 mb-3">
              <About />
            </Col>
          </Row>
        </div>
        <div className="d-flex flex-column pt-5">
          {/* side section */}
          <Row className="d-flex flex-column mt-3">
            <Col>
              <Sidebar />
            </Col>
            <Col>Area 2</Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Main;
