import { Card, Image, Form, Col } from "react-bootstrap";
import {
  fetchUserEdus,
  postUserEdu,
  deleteUserEdu,
  editUserEdu,
  postUserImageEdu,
} from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { BsPencil, BsPlusLg } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
// import { parseISO, format } from "date-fns";

interface Education {
  _id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade: string;
  activity: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
}
const Education = () => {
  const dispatch = useAppDispatch();
  let education = useAppSelector((state) => (state.edus as any).eduList);
  const [eduId, setEduId] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { userId } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setNewEdu({
      field: "",
      school: "",
      degree:"",
      startDate: "",
      endDate: "",
      description: "",
      image: "",
    });
    setShow(true);
  };

  const [newEdu, setNewEdu] = useState({
    field: "",
    school: "",
    degree:"",
    startDate: "",
    endDate: "",
    description: "",
    image: "",
  });

  const selectEditedEdu = async (id: string) => {
    let selectedEdu = education.find((s: Education) => s._id === id);
    if (selectedEdu) {
      setNewEdu(selectedEdu);
      setEduId(id);
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    dispatch(fetchUserEdus(userId));
  }, []);

  const handleShow2 = (id: string) => {
    setShow2(true);
    selectEditedEdu(id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newEdu)
    dispatch(postUserEdu(userId,newEdu,file));
    handleClose();
  };
  const handleClose2 = () => setShow2(false);

  const handleSubmit2 = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const editedEdu = {
      field: newEdu.field,
      school: newEdu.school,
      degree:newEdu.degree,
      startDate: newEdu.startDate,
      endDate: newEdu.endDate,
      description: newEdu.description,
    };

    console.log("updating education", editedEdu);
    dispatch(editUserEdu(editedEdu, userId, eduId, file));
    handleClose2();
  };

  return (
    <Col className="main ">
      <div className="my-3">
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Education</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Field*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Computer Science"
                value={newEdu.field}
                onChange={(e) => {
                  setNewEdu({
                    ...newEdu,
                    field: e.target.value,
                  });
                }}
              />
              <Form.Label>School*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Harvard"
                value={newEdu.school}
                onChange={(e) => {
                  setNewEdu({
                    ...newEdu,
                    school: e.target.value,
                  });
                }}
              />
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Bachelor's Degree"
                value={newEdu.degree}
                onChange={(e) => {
                  setNewEdu({
                    ...newEdu,
                    degree: e.target.value,
                  });
                }}
              />
              <Form.Label>Start date*</Form.Label>
              <Form.Control
                type="date"
                id="startdate"
                required
                value={newEdu.startDate}
                onChange={(e) =>
                  setNewEdu({
                    ...newEdu,
                    startDate: e.target.value,
                  })
                }
              />

              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                id="startdate"
                required
                value={newEdu.endDate}
                onChange={(e) =>
                  setNewEdu({
                    ...newEdu,
                    endDate: e.target.value,
                  })
                }
              />

              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="textarea"
                value={newEdu.description}
                onChange={(e) => {
                  setNewEdu({
                    ...newEdu,
                    description: e.target.value,
                  });
                }}
              />

              <Form.File
                id="imageFile"
                label="Upload an Image"
                onChange={(e: any) => {
                  handleFileChange(e, eduId);
                }}
              />
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
              <h4>Education</h4>
            </Card.Title>
            {education.map((education: Education) => {
              return (
                <div key={education._id} className="d-flex">
                  <img
                    src={education.image}
                    className="align-self-start exp-img mr-3"
                    alt=""
                  />
                  <div className="d-flex flex-column">
                    <h5>{education.field}</h5>
                    <h6>{education.school}</h6>
                    <h6 className="grey-text">
                      {new Date(education.startDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "2-digit", day: "2-digit" }
                      )}
                      -{" "}
                      {new Date(education.endDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        }
                      )}
                    </h6>
                    <h6 className="grey-text">{education.degree}</h6>
                    <h6>{education.description}</h6>
                    <hr />
                  </div>
                  <BsPencil
                    className="pencil-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleShow2(education._id);
                    }}
                  />
                  <Modal show={show2} onHide={handleClose2} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Education</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Label>Field*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: Computer Science"
                          value={newEdu.field}
                          onChange={(e) => {
                            setNewEdu({
                              ...newEdu,
                              field: e.target.value,
                            });
                          }}
                        />
                        <Form.Label>School*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: Harvard"
                          value={newEdu.school}
                          onChange={(e) => {
                            setNewEdu({
                              ...newEdu,
                              school: e.target.value,
                            });
                          }}
                        />
                        <Form.Label>Degree</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex: Bachelor's Degree"
                          value={newEdu.degree}
                          onChange={(e) => {
                            setNewEdu({
                              ...newEdu,
                              degree: e.target.value,
                            });
                          }}
                        />
                        <Form.Label>Start date*</Form.Label>
                        <Form.Control
                          type="date"
                          id="startdate"
                          required
                          value={newEdu.startDate}
                          onChange={(e) =>
                            setNewEdu({
                              ...newEdu,
                              startDate: e.target.value,
                            })
                          }
                        />

                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                          type="date"
                          id="enddate"
                          required
                          value={newEdu.endDate}
                          onChange={(e) =>
                            setNewEdu({
                              ...newEdu,
                              endDate: e.target.value,
                            })
                          }
                        />

                        <Form.Label>Description*</Form.Label>
                        <Form.Control
                          type="textarea"
                          value={newEdu.description}
                          onChange={(e) => {
                            setNewEdu({
                              ...newEdu,
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
                          handleFileChange(e, eduId);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          dispatch(deleteUserEdu(userId, education._id));
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

export default Education;
