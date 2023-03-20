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
  let reverseUsers = [...users].reverse();
  let fewUsers = reverseUsers.slice(props.firstIndex, props.secondIndex);
  let currentToken = useAppSelector((state) => state.users.currentToken);

  useEffect(() => {
    dispatch(getUsers(currentToken));
  }, []);

  return (
    <>
      <div className="sidebar1 mb-3">
        <h4 className="ml-3 pt-3">People also viewed</h4>
        {fewUsers.map((user: User, index: number) => {
          return (
            <Card key={user._id}>
              <div className="side-card d-flex mx-3">
                <Image
                  className="side-pro-icon"
                  roundedCircle
                  src={user.image}
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
              {index!==fewUsers.length-1&&<hr className="line-1" />}
            </Card>
          );
        })}
        <div className="mb-3"></div>
      </div>
    </>
  );
};

export default Sidebar;
