// src/pages/ProjectTypePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectTypePage = () => {
  const { type } = useParams();

  return (
    <div>
      <h1>Projects of Type: {type}</h1>
      {/* Fetch and display projects based on 'type' */}
    </div>
  );
};

export default ProjectTypePage;
