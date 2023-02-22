import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../TopNav";
import LinkedInNews from "./LinkedInNews";
import Posts from "./Posts";
import StartAPost from "./StartAPost";

const MainFeed = () => {
    return (
      <>
        <TopNav />
        <Container className="d-flex">
            <Row className="flex-col">
              <Col className="mt-5">
                <StartAPost/>
              </Col>
              <Col className="mt-5">
                <Posts/>
              </Col>
            </Row>
            <Row>
              <Col className="mt-5">
                <LinkedInNews/>
              </Col>
            </Row>
        </Container>
        
      </>
    );
  };
  
  export default MainFeed;