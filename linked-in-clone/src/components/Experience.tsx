import { Card, Image, Form, Col } from "react-bootstrap";
import {
  fetchUserExps,
  postUserExp,
  deleteUserExp,
  editUserExp,
  postUserImageExp,
} from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { BsPencil, BsPlusLg } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { parseISO, format } from "date-fns";

interface Experiences {
  _id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  area: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
}
const Experience = () => {
  const dispatch = useAppDispatch();
  let experiences = useAppSelector((state) => state.exps.expList);
  const [expId, setExpId] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  let currentToken = useAppSelector((state) => state.users.currentToken);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setNewExp({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
      image: "",
    });
    setShow(true);
  };

  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "",
  });

  const selectEditedExp = async (id: string) => {
    // console.log("id is here>>>>> ", id);
    let selectedExp = experiences.find((s: Experiences) => s._id === id);
    if (selectedExp) {
      // check if selectedExp is not undefined
      setNewExp(selectedExp);
      console.log(newExp);
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    console.log(e);
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    dispatch(fetchUserExps(currentToken));
  }, []);

  const handleShow2 = (id: string) => {
    setShow2(true);
    setExpId(id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(postUserExp(newExp));
    // dispatch(postUserImageExp(image, expId, currentToken));
    dispatch(postUserExp(newExp, currentToken, file));
    handleClose();
  };
  const handleClose2 = () => setShow2(false);

  const handleSubmit2 = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const editedExp = {
      role: newExp.role,
      company: newExp.company,
      startDate: newExp.startDate,
      endDate: newExp.endDate,
      description: newExp.description,
      area: newExp.area,
      image: newExp.image,
    };

    console.log("updating expirience");
    dispatch(editUserExp(editedExp, expId, currentToken));

    handleClose2();
  };

  return (
    <Col className="main ">
      <div className="my-3">
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Job Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Full-Stack Developer"
                value={newExp.role}
                onChange={(e) => {
                  setNewExp({
                    ...newExp,
                    role: e.target.value,
                  });
                }}
              />
              <Form.Label>Company name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Epicode"
                value={newExp.company}
                onChange={(e) => {
                  setNewExp({
                    ...newExp,
                    company: e.target.value,
                  });
                }}
              />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Berlin"
                value={newExp.area}
                onChange={(e) => {
                  setNewExp({
                    ...newExp,
                    area: e.target.value,
                  });
                }}
              />
              <Form.Label>Start date*</Form.Label>
              <Form.Control
                type="date"
                id="startdate"
                required
                value={newExp.startDate}
                onChange={(e) =>
                  setNewExp({
                    ...newExp,
                    startDate: e.target.value,
                  })
                }
              />

              <Form.Label>End Date*</Form.Label>
              <Form.Control
                type="date"
                id="startdate"
                required
                value={newExp.endDate}
                onChange={(e) =>
                  setNewExp({
                    ...newExp,
                    endDate: e.target.value,
                  })
                }
              />

              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="textarea"
                value={newExp.description}
                onChange={(e) => {
                  setNewExp({
                    ...newExp,
                    description: e.target.value,
                  });
                }}
              />

              <Form.File
                id="imageFile"
                label="Upload an Image"
                onChange={(e: any) => {
                  handleFileChange(e, expId);
                }}
              />

              {/* <Form.Label>
                Skills &#40;We recommend adding your top 5 used in this role.
                They'll also appear in your Skills section.&#41;
              </Form.Label> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e: any) => {
                handleSubmit(e);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Card>
          <Card.Body>
            <div
              className="edit-main mr-4
                        "
            >
              <div className="d-flex">
                <h5>
                  <BsPlusLg
                    style={{ cursor: "pointer" }}
                    className="plus-icon mr-4"
                    onClick={handleShow}
                  />
                </h5>
              </div>
            </div>
            <Card.Title>
              <h4>Experience</h4>
            </Card.Title>
            {experiences.map((experience: Experiences) => {
              return (
                <div key={experience._id} className="d-flex">
                  <img
                    src={experience.image}
                    className="align-self-start exp-img mr-3"
                    alt=""
                  />
                  <div className="d-flex flex-column">
                    <h5>{experience.role}</h5>
                    <h6>{experience.company}</h6>
                    <h6 className="grey-text">
                      {/* {experience.startDate} - {experience.endDate} */}
                      {new Date(experience.startDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "2-digit", day: "2-digit" }
                      )}
                      -{" "}
                      {new Date(experience.endDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        }
                      )}
                      {/* {format(parseISO(experience.startDate), "MMMM, yyyy")} -{" "}
                      {experience.endDate === null
                        ? "Present"
                        : format(parseISO(experience.endDate), "MMMM, yyyy")} */}
                    </h6>
                    <h6 className="grey-text">{experience.area}</h6>
                    <h6>{experience.description}</h6>
                    <hr />
                  </div>
                  <BsPencil
                    className="pencil-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleShow2(experience._id);
                    }}
                  />
                  <Modal show={show2} onHide={handleClose2} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Experience</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Label>Job Title*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: Full-Stack Developer"
                          value={newExp.role}
                          onChange={(e) => {
                            setNewExp({
                              ...newExp,
                              role: e.target.value,
                            });
                          }}
                        />
                        <Form.Label>Company name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: Epicode"
                          value={newExp.company}
                          onChange={(e) => {
                            setNewExp({
                              ...newExp,
                              company: e.target.value,
                            });
                          }}
                        />
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: Berlin"
                          value={newExp.area}
                          onChange={(e) => {
                            setNewExp({
                              ...newExp,
                              area: e.target.value,
                            });
                          }}
                        />
                        <Form.Label>Start date*</Form.Label>
                        <Form.Control
                          type="date"
                          id="startdate"
                          required
                          value={newExp.startDate}
                          onChange={(e) =>
                            setNewExp({
                              ...newExp,
                              startDate: e.target.value,
                            })
                          }
                        />

                        <Form.Label>End Date*</Form.Label>
                        <Form.Control
                          type="date"
                          id="enddate"
                          required
                          value={newExp.endDate}
                          onChange={(e) =>
                            setNewExp({
                              ...newExp,
                              endDate: e.target.value,
                            })
                          }
                        />

                        <Form.Label>Description*</Form.Label>
                        <Form.Control
                          type="textarea"
                          value={newExp.description}
                          onChange={(e) => {
                            setNewExp({
                              ...newExp,
                              description: e.target.value,
                            });
                          }}
                        />
                      </Form>
                      <Form.File
                        id="imageFile"
                        label="Upload an Image"
                        accept="image/*"
                        onChange={(e: any) => {
                          handleFileChange(e, expId);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          dispatch(deleteUserExp(experience._id, currentToken));

                          handleClose2();
                        }}
                      >
                        Delete
                      </Button>
                      <Button variant="primary" onClick={handleSubmit2}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Experience;
