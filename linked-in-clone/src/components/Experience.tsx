import { Card, Image } from "react-bootstrap";
import { fetchUserExps } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { BsPencil } from "react-icons/bs";

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
  useEffect(() => {
    dispatch(fetchUserExps());
  }, []);

  return (
    <div className="about-section">
      <Card>
        <Card.Body>
          <div
            className="edit-main mr-4
                        "
          >
            <BsPencil className="pencil-icon" />
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
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Experience;
