import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../TopNav";
import FeedCompanyDetails from "./FeedCompanyDetails";
import FeedFooter from "./FeedFooter";
import LinkedInNews from "./LinkedInNews";
import Posts from "./Posts";
import RecentHastags from "./RecentHashtags";
import StartAPost from "./StartAPost";
import BottomMessenger from "../BottomMessenger";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getMyUser } from "../../redux/actions";
//
const MainFeed = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyUser());
  }, []);
  return (
    <>
      <TopNav />
      <TopNav />
      <Container className="d-flex mt-5">
        <Row>
          {/* at a certain width this area disappears , this is left sidebard*/}
          <Col className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <FeedCompanyDetails />
            <RecentHastags />
            {/* replace area below for specific components */}
          </Col>
          {/* this is center area */}
          <Col className="col-lg-6">
            <StartAPost />
            <Posts />
          </Col>
          {/* this is right sidebar */}
          <Col className="col-lg-3 col-sm-12">
            {" "}
            <LinkedInNews />
            <FeedFooter />
          </Col>
        </Row>
        <Row>
          <BottomMessenger />
        </Row>
      </Container>
    </>
  );
};

export default MainFeed;
