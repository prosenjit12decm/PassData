import React, { useState } from 'react';
import './style.css';
import Nabvar from './Components/Navbar';

export default function App() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = () => {
    // console.log(i);
    // console.log(i);
    // console.log(pass);
    console.log('Valo hoini');
  };
  return (
    <div>
      <Nabvar name={name} />
      Name :
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      Password :
      <input
        type="text"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <button onClick={handleSubmit}>submit</button>
      {/* <Content/>
      <Footer/> */}
    </div>
  );
}
