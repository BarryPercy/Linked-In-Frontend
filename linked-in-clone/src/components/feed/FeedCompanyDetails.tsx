import { Image, Card } from "react-bootstrap";
import { MdTry } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useAppSelector } from "../../redux/hooks";

const FeedCompanyDetails = () => {
  let currentUser = useAppSelector((state) => state.users.currentUser);
  return (
    <>
      <Card className="start-post">
        <div className="">
          <div className="profile-icon-feed">
            <Image
              src={currentUser.image}
              roundedCircle
            />
          </div>
          <div className="img-area-feed"></div>
          <div className="mt-5 pt-2">
            <Card>
              <Card.Body className="profile-info-area text-center">
                <Card.Title>
                  <b>
                    {currentUser.name} {currentUser.surname}
                  </b>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {currentUser.title}
                </Card.Subtitle>
              </Card.Body>
              <hr className="mb-0" />
              <Card.Body>
                <Card.Text style={{ fontSize: "15px", fontWeight: "500" }}>
                  Who's viewed you profile
                  <span
                    style={{ fontSize: "12px", fontWeight: "500" }}
                    className="ml-3 text-primary"
                  >
                    91
                  </span>
                </Card.Text>

                <Card.Text style={{ fontSize: "15px", fontWeight: "500" }}>
                  Impression of your post
                  <span
                    style={{ fontSize: "12px", fontWeight: "500" }}
                    className="ml-3 text-primary"
                  >
                    217
                  </span>
                </Card.Text>
              </Card.Body>
              <hr className="my-0" />
              <Card.Body>
                <Card.Text
                  className="mb-2 text-muted"
                  style={{ fontSize: "15px" }}
                >
                  Access exclusive tools & insights
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                >
                  <MdTry /> Try Premium for free
                </Card.Text>
              </Card.Body>
              <hr className="my-0" />
              <Card.Body className="py-2 my-items-area">
                <Card.Text>
                  <BsFillBookmarkFill
                    style={{ fontSize: "15px", color: "#495057" }}
                  />{" "}
                  My Items
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FeedCompanyDetails;
