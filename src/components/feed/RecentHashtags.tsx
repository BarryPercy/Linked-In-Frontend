import { Card } from "react-bootstrap";
import { FaHashtag } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
const RecentHashtags = () => {
  return (
    <>
      <Card className="start-post">
        <div className="">
          <div className="mt-2">
            <Card>
              <Card.Body className="profile-info-area">
                <Card.Text>Recent</Card.Text>
              </Card.Body>
              <Card.Body className="pt-1">
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  <FaHashtag style={{ fontSize: "15px", color: "#495057" }} />{" "}
                  HTML & CSS
                </Card.Text>

                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <FaHashtag
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  future
                </Card.Text>
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <FaHashtag
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  creativity
                </Card.Text>
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <FaHashtag
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  innovation
                </Card.Text>
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <FaHashtag
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  gender
                </Card.Text>
              </Card.Body>

              <Card.Body className="py-0">
                <Card.Subtitle
                  className="mb-2"
                  style={{ fontSize: "15px", color: " #007bff" }}
                >
                  Access exclusive tools & insights
                </Card.Subtitle>
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <HiUserGroup
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  HTML & CSS Groups ....
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                    marginLeft: "15px",
                  }}
                >
                  See more
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                ></Card.Text>
              </Card.Body>
              <Card.Body className="py-0">
                <Card.Subtitle
                  className="mb-2"
                  style={{ fontSize: "15px", color: " #007bff" }}
                >
                  Events
                </Card.Subtitle>
              </Card.Body>
              <Card.Body className="py-3">
                <Card.Subtitle
                  className="mb-2"
                  style={{ fontSize: "15px", color: " #007bff" }}
                >
                  Followed Hashtags
                </Card.Subtitle>
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <FaHashtag
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  future
                </Card.Text>
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <FaHashtag
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  creativity
                </Card.Text>
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {" "}
                  <FaHashtag
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  innovation
                </Card.Text>
              </Card.Body>
              <hr className="my-0" />
              <Card.Body className="py-2 my-items-area">
                <Card.Text>Discover More</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
};

export default RecentHashtags;
