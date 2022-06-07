import React from 'react';

const TruePass = ({ valid, password }) => {
  const passColor = valid ? 'password__green' : 'password__red';
  return <li className={passColor}>{password}</li>;
};

export default TruePass;
