import { Card, Button, Image } from "react-bootstrap";
import { MdPersonAddAlt1 } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="sidebar1 ">
      <h4 className="ml-3 pt-3">People also viewed</h4>
      <Card>
        <div className="d-flex mx-3">
          <Image
            className="side-pro-icon"
            roundedCircle
            src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
          />
          <Card.Body className="ml-2">
            <Card.Title>Rokit Kumar</Card.Title>
            <Card.Text>
              Technical Support Enginner at Kontext Security
            </Card.Text>
            <Button className="connect-btn" variant="outline-secondary">
              <MdPersonAddAlt1 className="mr-1" />
              Connect
            </Button>
          </Card.Body>
        </div>
        <hr className="line-1" />
        <div className="d-flex mx-3">
          <Image
            className="side-pro-icon"
            roundedCircle
            src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
          />
          <Card.Body className="ml-2">
            <Card.Title>Rokit Kumar</Card.Title>
            <Card.Text>
              Technical Support Enginner at Kontext Security
            </Card.Text>
            <Button className="connect-btn" variant="outline-secondary">
              <MdPersonAddAlt1 className="mr-1" />
              Connect
            </Button>
          </Card.Body>
        </div>
        <hr className="line-1" />
        <div className="d-flex mx-3">
          <Image
            className="side-pro-icon"
            roundedCircle
            src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
          />
          <Card.Body className="ml-2">
            <Card.Title>Rokit Kumar</Card.Title>
            <Card.Text>
              Technical Support Enginner at Kontext Security
            </Card.Text>
            <Button className="connect-btn" variant="outline-secondary">
              <MdPersonAddAlt1 className="mr-1" />
              Connect
            </Button>
          </Card.Body>
        </div>
        <hr className="line-2" />
        <Button
          variant="outline-secondary"
          className="text-center show-btn mt-0"
        >
          Show more <SlArrowDown />
        </Button>
      </Card>
    </div>
  );
};

export default Sidebar;
