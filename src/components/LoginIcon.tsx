import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  surname: string;
  email: string;
  bio: string;
  title: string;
  area: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const LoginIcon = (props: User & { children?: React.ReactNode }) => {
  console.log(props);

  return (
    <a href="/">
      <Card className="profileLoginIcon">
        <Card.Img
          className="profileImage mt-3"
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title className="pt-1 text-white font-weight-bold">
            {props.name} <br />
            {props.surname}
          </Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};

export default LoginIcon;
