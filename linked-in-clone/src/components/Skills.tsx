import React, { useState } from 'react';

interface Skill {
  id: number;
  name: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'React' },
    { id: 3, name: 'TypeScript' },
  ]);

  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [newSkill, setNewSkill] = useState<string>('');

  const handleAddSkill = () => {
    if (newSkill) {
      setSkills([...skills, { id: skills.length + 1, name: newSkill }]);
      setNewSkill('');
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
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {editingSkill?.id === skill.id ? (
              <div>
                <input
                  type="text"
                  value={editingSkill.name}
                  onChange={(e) =>
                    setEditingSkill({ ...editingSkill, name: e.target.value })
                  }
                />
                <button onClick={() => handleSaveSkill(skill, editingSkill.name)}>Save</button>
                <button onClick={() => setEditingSkill(null)}>Cancel</button>
                <button onClick={() => handleDeleteSkill(skill)}>Delete</button>
              </div>
            ) : (
              <div>
                {skill.name}
                <button onClick={() => handleEditSkill(skill)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a new skill"
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default Skills;
