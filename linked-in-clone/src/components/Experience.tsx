import { Card, Image, Form } from "react-bootstrap";
import {
  fetchUserExps,
  postUserExp,
  deleteUserExp,
  editUserExp,
} from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { BsPencil, BsPlusLg, BsFillTrashFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { parseISO, format } from "date-fns";

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
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let expId: string;

  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const editExp = async (id: string) => {
    let selectedExpId = experiences.find((s: Experiences) => s._id === id);
    setNewExp(selectedExpId);
    id = expId;
  };

  useEffect(() => {
    dispatch(fetchUserExps());
  }, []);

  const handleShow2 = (id: string) => {
    setShow2(true);
    editExp(id);
  };

  const handleSubmit = () => {
    dispatch(postUserExp(newExp));
    handleClose();
  };
  const handleClose2 = () => setShow2(false);

  const handleSubmit2 = () => {
    dispatch(editUserExp(newExp, editExp));
  };

  return (
    <div className="about-section">
      <Modal show={show} onHide={handleClose}>
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

            <Form.Label>Description</Form.Label>
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
            <Form.Label>
              Skills &#40;We recommend adding your top 5 used in this role.
              They'll also appear in your Skills section.&#41;
            </Form.Label>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
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
                <Image src={experience.image} className="align-self-start" />
                <div className="d-flex flex-column">
                  <h5>{experience.role}</h5>
                  <h6>{experience.company}</h6>
                  <h6 className="grey-text">
                    {/* {experience.startDate} - {experience.endDate} */}
                    {/* {{new Date(experience.startDate).toLocaleDateString("en-GB")}{" "}}
                    - {new Date(experience.endDate).toLocaleDateString("en-GB")} */}{" "}
                    {format(parseISO(experience.startDate), "MMMM, yyyy")} -{" "}
                    {experience.endDate === null
                      ? "Present"
                      : format(parseISO(experience.endDate), "MMMM, yyyy")}
                  </h6>
                  <h6 className="grey-text">{experience.area}</h6>
                  <h6>{experience.description}</h6>
                </div>
                <BsFillTrashFill
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(deleteUserExp(expId));
                  }}
                />
                <BsPencil
                  className="pencil-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleShow2(experience._id);
                  }}
                />
                <Modal show={show2} onHide={handleClose}>
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

                      <Form.Label>Description</Form.Label>
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
                      <Form.Label>
                        Skills &#40;We recommend adding your top 5 used in this
                        role. They'll also appear in your Skills section.&#41;
                      </Form.Label>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                      Close
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
  );
};

export default Experience;
