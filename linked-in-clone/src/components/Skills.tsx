import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { BsPencil, BsPlusLg } from "react-icons/bs";

interface Skill {
  id: number;
  name: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "TypeScript" },
  ]);

  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [newSkill, setNewSkill] = useState<string>("");
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);

  const handleAddSkill = () => {
    if (newSkill) {
      setSkills([...skills, { id: skills.length + 1, name: newSkill }]);
      setNewSkill("");
    }
  };

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill);
  };

  const handleDeleteSkill = (skill: Skill) => {
    setSkills(skills.filter((s) => s.id !== skill.id));
  };

  const handleSaveSkill = (skill: Skill, newName: string) => {
    const updatedSkills = skills.map((s) => {
      if (s.id === skill.id) {
        return { ...s, name: newName };
      }
      return s;
    });
    setSkills(updatedSkills);
    setEditingSkill(null);
  };

  return (
    <div
      className="skills-section border"
      style={{ borderRadius: "15px", width: "750px" }}
    >
      <Card style={{ borderRadius: "15px" }}>
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            <h4>Skills</h4>
            <div className="edit-main mr-4 d-flex align-items-center">
              <Button className="mr-4" style={{ borderRadius: "20px" }}>
                Demonstrate Skill
              </Button>
              <h5><BsPlusLg
                style={{ cursor: "pointer" }}
                className="plus-icon mr-4"
                onClick={() => setIsAddClicked(!isAddClicked)}
              /></h5>
              <BsPencil
                style={{ cursor: "pointer" }}
                className="pencil-icon"
                onClick={() => setIsEditClicked(!isEditClicked)}
              />
            </div>
          </Card.Title>
          <Card.Text>
            <ul
              className="list-group font-weight-bold"
              style={{ listStyle: "none" }}
            >
              {skills.map((skill) => (
                <li
                  className="text-decoration-none py-3"
                  key={skill.id}
                  style={{ borderBottom: "1px solid #ccc" }}
                >
                  {isEditClicked ? (
                    editingSkill?.id === skill.id ? (
                      <div className="d-flex">
                        <input
                          type="text"
                          value={editingSkill.name}
                          onChange={(e) =>
                            setEditingSkill({
                              ...editingSkill,
                              name: e.target.value,
                            })
                          }
                        />
                        <Button
                          className="mx-1"
                          onClick={() =>
                            handleSaveSkill(skill, editingSkill.name)
                          }
                        >
                          Save
                        </Button>
                        <Button
                          className="mx-1"
                          onClick={() => setEditingSkill(null)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="mx-1"
                          onClick={() => handleDeleteSkill(skill)}
                        >
                          Delete
                        </Button>
                      </div>
                    ) : (
                      <div className="d-flex">
                        {skill.name}
                        <div className="ml-auto">
                          <BsPencil onClick={() => handleEditSkill(skill)}>
                            Edit
                          </BsPencil>
                        </div>
                      </div>
                    )
                  ) : (
                    <div>{skill.name}</div>
                  )}
                </li>
              ))}
            </ul>
          </Card.Text>

          {isAddClicked && (
            <Row className="align-items-center">
              <Col className="d-flex">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <div className="ml-auto">
                  <Button variant="primary" onClick={handleAddSkill}>
                    Add
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Skills;
