import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../TopNav";
import LinkedInNews from "./LinkedInNews";


const MainFeed = () => {
    return (
      <>
        <TopNav />
        <Container>
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