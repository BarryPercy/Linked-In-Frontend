import { Card } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="about-section">
      <Card>
        <Card.Body>
          <div className="edit-main mr-4">
            <BsPencil className="pencil-icon" />
          </div>
          <Card.Title>Flight Attendant</Card.Title>
          <Card.Text>
            Ryanair - Europe's Favourite Airline · Full-time
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Nov 2018 - Nov 2022 · 4 yrs 1 moNov 2018 - Nov 2022 · 4 yrs 1 mo
            Belgium
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Experience;
