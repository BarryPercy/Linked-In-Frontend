import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMyUser } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";

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
  const dispatch = useAppDispatch();
  const changeUser = () => {
    dispatch(getMyUser(props._id));
  };

  return (
    <Link to="/feed" onClick={changeUser}>
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
    </Link>
  );
};

export default LoginIcon;
