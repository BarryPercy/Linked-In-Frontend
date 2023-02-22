import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../TopNav";
import LinkedInNews from "./LinkedInNews";
import Posts from "./Posts";
import StartAPost from "./StartAPost";

const MainFeed = () => {
  return (
    <>
      <TopNav />
      <Container className="d-flex flex-column">
        <Row className="mt-5">
          <Col className=" mt-5 col-2">
            <div>
              <h5>side bar</h5>
            </div>
          </Col>
          <Col className="mt-5 col-6">
            <StartAPost />
          </Col>
          <Col className="mt-5 col-4">
            <div>
              <h5>side bar</h5>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mt-5">
            <LinkedInNews />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainFeed;
