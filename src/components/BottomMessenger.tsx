import { Card, Col, Container, Image } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";
import {
  BsThreeDots,
  BsChevronCompactUp,
  BsPencilSquare,
} from "react-icons/bs";

const BottomMessenger = () => {
  let currentUser = useAppSelector((state) => state.users.currentUser);
  return (
    <>
        <div className="bottomMessenger">
          <Card className="d-flex flex-row messenger py-2 pl-2">
            <Image src={currentUser.image} className="user-image-messenger" />
            <Card.Text>
              Messaging{" "}
              <BsThreeDots
                className="icon-bottom mx-2"
                style={{ fontSize: "18px", color: "#495057" }}
              />{" "}
              <BsPencilSquare
                className="icon-bottom mr-2"
                style={{ fontSize: "18px", color: "#495057" }}
              />{" "}
              <BsChevronCompactUp
                className="icon-bottom mr-2"
                style={{ fontSize: "18px", color: "#495057" }}
              />{" "}
            </Card.Text>
          </Card>
        </div>
    </>
  );
};

export default BottomMessenger;
