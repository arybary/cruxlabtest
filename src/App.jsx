import React, { useState } from 'react';
import TruePass from './TruePass.jsx';
import validPass from './validPass.js';

const App = () => {
  const [text, setText] = useState(null);
  const [pass, setPass] = useState([]);
  const handleChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();

    validPass(text)
      .then(res => setPass(res))
      .catch(er => alert(`text password invalid becose ${er}`));
  };
  const amountPassValid = pass.filter(el => el.valid).length;
  return (
    <>
      <div className="passords-text">
        <div className="passords-title">password valid - {amountPassValid}</div>
        <form className="passords-form" onSubmit={onSubmit}>
          <textarea cols="30" rows="10" onChange={handleChange}></textarea>
          <button className="passords-btn" type="submit" disabled={!text}>
            password validation
          </button>
        </form>
      </div>
      <ol>
        {pass.map(p => (
          <TruePass key={p.password} {...p} />
        ))}
      </ol>
    </>
  );
};

export default App;
