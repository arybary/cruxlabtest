import React from 'react';

const TruePass = ({ valid, password }) => <li className={valid ? 'green' : 'red'}>{password}</li>;

export default TruePass;
