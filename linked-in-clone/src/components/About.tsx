import { Row, Col, Card, Button } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section">
      <Card>
        <Card.Body>
          <div
            className="edit-main mr-4
              "
          >
            <BsPencil className="pencil-icon" />
          </div>
          <Card.Title>About</Card.Title>
          <Card.Text>
            🖥 Currently in education, studying, to become a full-stack
            developer.
            <br></br>
            <br></br>
            ✈Former Flight Attendant with 4 years of experience currently based
            in Charleroi Airport, Belgium. Great teamwork and communication
            skills. Can work in a pressured situation and look into ways to make
            both passengers and crew work well. Have quick thinking and sociable
            skills to adapt to different scenarios. Work with various types of
            personalities throughout my years. <br></br>
            <br></br>
            🖌With some knowledge of Graphic Design as I was self-taught at such
            a young age and had a great interest when growing up. <br></br>
            <br></br>
            🏢Coding knowledge from going to the National College of Ireland and
            doing the Computing and Business course.
            {/* <Button className="see-more-btn mr-2" variant="outline-light">
                  ...see more
                </Button>{" "} */}
          </Card.Text>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
