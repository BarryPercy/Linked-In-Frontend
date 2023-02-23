import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../TopNav";
import FeedCompanyDetails from "./FeedCompanyDetails";
import FeedFooter from "./FeedFooter";
import LinkedInNews from "./LinkedInNews";
import Posts from "./Posts";
import StartAPost from "./StartAPost";

const MainFeed = () => {
  return (
    <>
      <TopNav />
      <Container className="d-flex mt-5">
        <Row>
          {/* at a certain width this area disappears , this is left sidebard*/}
          <Col className="col-lg-3">
            {/* replace area below for specific components */}
            <LinkedInNews />
          </Col>
          {/* this is center area */}
          <Col className="col-lg-6">
            <StartAPost />
            <Posts />
          </Col>
          {/* this is right sidebar */}
          <Col className="col-lg-3">
            <LinkedInNews />
            <FeedFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainFeed;
