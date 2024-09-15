import '../css/bubble.css'


import React from 'react';

const Child = ({ data, setClick }) => {
  return (
    <div className="childComponent" onClick={() => setClick(data.src)}>
      <img src={data.src} width={data.width} draggable={data.draggable} alt="bubble" />
    </div>
  );
};

export default Child;
