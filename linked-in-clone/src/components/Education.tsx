import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BsPencil, BsPlusLg } from "react-icons/bs";

interface Education {
  id: number;
  school: string;
  degree: string;
  startYear: number;
  endYear: number;
}

const Education: React.FC = () => {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: 1,
      school: "University of Manchester",
      degree: "BSc in Computer Sceince",
      startYear: 2010,
      endYear: 2013,
    },
    {
      id: 2,
      school: "University of Glasgow",
      degree: "MSc in Computer Sceince",
      startYear: 2014,
      endYear: 2015,
    },
  ]);

  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null
  );

  const handleEditEducation = (education: Education) => {
    setEditingEducation(education);
  };

  const handleSaveEducation = (education: Education) => {
    const updatedEducations = educations.map((e) => {
      if (e.id === education.id) {
        return education;
      }
      return e;
    });
    setEducations(updatedEducations);
    setEditingEducation(null);
  };

  const handleCancelEdit = () => {
    setEditingEducation(null);
  };

  return (
    <Col className="main">
      <div className="my-3">
        <Card>
          <Card.Body>
            <Card.Title className="d-flex align-items-center">
              Education
              <div className="edit-main mr-4 d-flex align-items-center">
                <BsPlusLg
                  style={{ cursor: "pointer" }}
                  className="plus-icon mr-4"
                />
                <BsPencil
                  style={{ cursor: "pointer" }}
                  className="pencil-icon"
                />
              </div>
            </Card.Title>
            <Card.Text>
              <ul className="list-group" style={{ listStyle: "none" }}>
                {educations.map((education) => (
                  <li
                    className="text-decoration-none py-3 "
                    key={education.id}
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    {editingEducation?.id === education.id ? (
                      <div>
                        <input
                          type="text"
                          value={editingEducation.school}
                          onChange={(e) =>
                            setEditingEducation({
                              ...editingEducation,
                              school: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          value={editingEducation.degree}
                          onChange={(e) =>
                            setEditingEducation({
                              ...editingEducation,
                              degree: e.target.value,
                            })
                          }
                        />
                        <input
                          type="number"
                          value={editingEducation.startYear}
                          onChange={(e) =>
                            setEditingEducation({
                              ...editingEducation,
                              startYear: parseInt(e.target.value),
                            })
                          }
                        />
                        <input
                          type="number"
                          value={editingEducation.endYear}
                          onChange={(e) =>
                            setEditingEducation({
                              ...editingEducation,
                              endYear: parseInt(e.target.value),
                            })
                          }
                        />
                        <Button
                          onClick={() => handleSaveEducation(editingEducation)}
                        >
                          Save
                        </Button>
                        <Button onClick={() => handleCancelEdit()}>
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <div>{education.school}</div>
                        <div>{education.degree}</div>
                        <div>
                          {education.startYear} - {education.endYear}
                        </div>
                        <Button onClick={() => handleEditEducation(education)}>
                          Edit
                        </Button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Education;
