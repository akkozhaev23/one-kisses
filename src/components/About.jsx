import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const getHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>About</h2>
      <button onClick={getHome}>Back home</button>
    </div>
  );
};

export default About;
