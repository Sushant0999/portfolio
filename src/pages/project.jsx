// Example of fetching data inside ProjectTypePage
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { type } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects based on type
    fetch(`/api/projects?type=${type}`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, [type]);

  return (
    <div>
      <h1>Projects of Type: {type}</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
