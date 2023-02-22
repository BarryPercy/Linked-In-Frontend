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

const Main = () => {
  return (
    <>
      <TopNav />
      <Container className="my-5 pt-3">
        <Row className="d-flex ">
          <Col className=" col-lg-8 col-md-12 col-sm-12  mr-3">
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
