import React, { useState } from 'react';
import TruePass from './TruePass.jsx';
import validPass from './validPass.js';

const App = () => {
  const [text, setText] = useState(null);
  const [pass, setPass] = useState([]);
  const handleChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    setPass(validPass(text));
  };
  const amountPassValid = pass.filter(el => el.valid).length;
  return (
    <>
      <div className="header-password">password valid - {amountPassValid}</div>
      <div className="password">
        <form onSubmit={onSubmit}>
          <textarea name="" id="" cols="30" rows="10" onChange={handleChange}></textarea>
          <button className="btn" type="submit">
            Проверка
          </button>
        </form>
        <ul>
          {pass.map(p => (
            <TruePass key={p.password} {...p} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
