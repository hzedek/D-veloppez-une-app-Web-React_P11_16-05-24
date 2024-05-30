import React from 'react';
import { useParams } from 'react-router-dom';


function Estate() {
  const { id } = useParams();

  return (
    <div>
      <h1>Estate ID: {id}</h1>
      
    </div>
  );
}

export default Estate;