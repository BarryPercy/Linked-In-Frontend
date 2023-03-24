import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
// import Skills from "./Skills";
import Education from "./Education";
import { EditProfile } from "./EditProfile";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import BottomMessenger from "./BottomMessenger";
import SecondNav from "./SecondNav";
import { getSpecificUser } from "../redux/actions";
import { useParams } from "react-router-dom";
import TopNav from "./TopNav";

const Main = () => {
  let currentProfileUser = useAppSelector(
    (state) => state.users.currentProfileUser
  );
  let currentUser = useAppSelector(
    (state) => state.users.currentUser
  );
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  useEffect(() => {
    dispatch(getSpecificUser(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopNav />
      {currentProfileUser._id===currentUser._id? <SecondNav />:""}
      
      <Container fluid className="my-5 pt-3 profile-container">
        <Row className="d-flex ">
          <Col className="col-lg-2"></Col>
          <Col className="col-lg-6 col-md-12 col-sm-12">
            <Profile />
            <About />
            <Education />
            <Experience />
            {/* <Skills /> */}
          </Col>
          <Col className="col-lg-2 col-md-2 col-sm-12 mt-2">
            <EditProfile />
            <Sidebar firstIndex={0} secondIndex={5} />
            <Sidebar firstIndex={5} secondIndex={10} />
          </Col>
          <Col className="col-lg-2"></Col>
        </Row>
        <Row>
          <BottomMessenger />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
