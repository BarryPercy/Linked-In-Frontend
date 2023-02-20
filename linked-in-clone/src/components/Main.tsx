import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Profile from "./Profile";
import TopNav from "./TopNav";

const Main = () => {
  return (
    <>
      <TopNav />
      <Container>
        <Row className="mt-3">
          <Col>
            <Profile />
          </Col>
          <Col>
            <About />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
