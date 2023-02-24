import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import TopNav from "./TopNav";
import Education from "./Education";
import { EditProfile } from "./EditProfile";
import { getMyUser } from "../redux/actions";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setToken } from "../redux/actions";
import BottomMessenger from "./BottomMessenger";

const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setToken(
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMzFiNzgzODFmYzAwMTNmZmZhZDAiLCJpYXQiOjE2NzY4ODIzNjAsImV4cCI6MTY3ODA5MTk2MH0.fKOP9PvNISSBaPjCxn8CFuAIdac9s6aY2aytp3bv7I0"
      )
    );
  }, []);

  return (
    <>
      <TopNav />
      <Container className="my-5 pt-3 profile-container">
        <Row className="d-flex ">
          <Col className="col-lg-8 col-md-12 col-sm-12  mr-3">
            <Profile />
            <About />
            <Education />
            <Experience />
            <Skills />
          </Col>
          <Col className="col-lg-3 col-md-2 col-sm-12 mt-2">
            <EditProfile />
            <Sidebar firstIndex={0} secondIndex={5} />
            <Sidebar firstIndex={5} secondIndex={10} />
          </Col>{" "}
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
