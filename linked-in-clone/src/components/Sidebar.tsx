import { Card, Button, Image } from "react-bootstrap";
import { MdPersonAddAlt1 } from "react-icons/md";
// import { SlArrowDown } from "react-icons/sl";
import { getUsers } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

interface User {
  _id: string; // server generated
  name: string;
  surname: string;
  email: string;
  bio: string;
  title: string;
  area: string;
  image: string; // server generated on upload
  username: string; // server generated from Auth
  createdAt: string; // server generated
  updatedAt: string; // server generated
  __v: number; // server generated
}

interface SideBarProps {
  firstIndex: number;
  secondIndex: number;
}

const Sidebar = (props: SideBarProps) => {
  const dispatch = useAppDispatch();
  let users = useAppSelector((state) => state.users.userList);
  let fewUsers = users.slice(props.firstIndex, props.secondIndex);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <div className="sidebar1 ">
        <h4 className="ml-3 pt-3">People also viewed</h4>
        {fewUsers.map((user: User) => {
          return (
            <Card key={user._id}>
              <div className="side-card d-flex mx-3">
                <Image
                  className="side-pro-icon"
                  roundedCircle
                  src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
                />
                <Card.Body className="ml-2">
                  <Card.Title>
                    {user.name} {user.surname}
                  </Card.Title>
                  <Card.Text>{user.title}</Card.Text>
                  <Button className="connect-btn" variant="outline-secondary">
                    <MdPersonAddAlt1 className="mr-1" />
                    Connect
                  </Button>
                </Card.Body>
              </div>
              <hr className="line-1" />
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
