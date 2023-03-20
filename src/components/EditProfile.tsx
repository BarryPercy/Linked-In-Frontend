import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Card } from "react-bootstrap";

export const EditProfile = () => {
  return (
    <div className=" edit-area">
      <Card>
        <Card.Body>
          <Card.Text
            className="text-muted"
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "",
            }}
          >
            Edit public profile & URL <BsQuestionCircleFill />
          </Card.Text>
          <hr className="line-1" />
          <Card.Text
            className="text-muted"
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "",
            }}
          >
            Add profile in another language <BsQuestionCircleFill />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
