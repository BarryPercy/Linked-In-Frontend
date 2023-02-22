import { Card, Image, Form } from "react-bootstrap";
import { fetchUserExps, postUserExp, deleteUserExp } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { BsPencil, BsPlusLg, BsFillTrashFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // let experiences = useAppSelector((state)=>state.experiences.experienceList)
  //   let array: Experiences[] = [
  //     {
  //       _id: "123",
  //       role: "Developer",
  //       company: "Epicode",
  //       startDate: "2023-02-21",
  //       endDate: "2023-02-21",
  //       description: "Developing Stuff",
  //       area: "Belfast",
  //       username: "dude",
  //       createdAt: "2019-09-30T19:58:31.019Z",
  //       updatedAt: "2019-09-30T19:58:31.019Z",
  //       __v: 0,
  //       image:
  //         "https://media.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1684972800&v=beta&t=TPNYWQvNS5llJxWVNsaOC9JuymAFPxR8tOSYYjqu8Q4",
  //     },
  //   ];

  const [newExp, setNewExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    dispatch(fetchUserExps());
  }, []);

  const handleSubmit = () => {
    dispatch(postUserExp(newExp));
    handleClose();
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
            {/* <Form.Label>Employment Type*</Form.Label>
                <Form.Control as="select">
                    <option value="Full-Time">Full-Time<
                </Form.Control> */}
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
            <div className="d-flex">
              <Form.Control as="select" placeholder="Month">
                <option value="" disabled selected>
                  Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </Form.Control>
              <Form.Control as="select" placeholder="Year">
                <option value="" disabled selected>
                  Year
                </option>
                <option value="January">2023</option>
                <option value="February">2022</option>
                <option value="March">2021</option>
                <option value="April">2020</option>
                <option value="May">2019</option>
                <option value="June">2018</option>
                <option value="July">2017</option>
                <option value="August">2016</option>
                <option value="September">2015</option>
                <option value="October">2014</option>
                <option value="November">2013</option>
                <option value="December">2012</option>
                <option value="December">2011</option>
                <option value="December">2010</option>
                <option value="December">2009</option>
                <option value="December">2008</option>
                <option value="December">2007</option>
              </Form.Control>
            </div>
            <Form.Label>End Date*</Form.Label>
            <div className="d-flex">
              <Form.Control as="select" placeholder="Month">
                <option value="" disabled selected>
                  Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </Form.Control>
              <Form.Control as="select" placeholder="Year">
                <option value="" disabled selected>
                  Year
                </option>
                <option value="January">2023</option>
                <option value="February">2022</option>
                <option value="March">2021</option>
                <option value="April">2020</option>
                <option value="May">2019</option>
                <option value="June">2018</option>
                <option value="July">2017</option>
                <option value="August">2016</option>
                <option value="September">2015</option>
                <option value="October">2014</option>
                <option value="November">2013</option>
                <option value="December">2012</option>
                <option value="December">2011</option>
                <option value="December">2010</option>
                <option value="December">2009</option>
                <option value="December">2008</option>
                <option value="December">2007</option>
              </Form.Control>
            </div>
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
              <BsPencil className="pencil-icon" />
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
                    {experience.startDate} - {experience.endDate}
                  </h6>
                  <h6 className="grey-text">{experience.area}</h6>
                  <h6>{experience.description}</h6>
                </div>
                <BsFillTrashFill />
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Experience;
