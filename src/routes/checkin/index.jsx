import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';

import './index.scss';

const Checkin = () => {
  const backendUrl = location.origin === 'localhost' ? 'http://localhost:8000' : 'https://brooklyn-poker-club-backend.onrender.com';
  console.log(`looking for backend at: ${backendUrl}`);

  const nameRef = useRef();
  const phoneRef = useRef();

  const submit = () => {
    console.log('values', nameRef.current?.value, phoneRef.current?.value);
    if (!nameRef.current.value || !phoneRef.current.value) return;

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    axios.post(`${backendUrl}/checkin`, { name, phone }).then(res => {
      console.log('res', res)
    })
  }

  return (
    <div className='checkin'>
      <h1>Brookyn Poker Club</h1>
      <h2>Check In</h2>
      <div className="checkin-form">
        <input ref={nameRef} type="text" placeholder="Your Name" />
        <input ref={phoneRef} ype="phone" placeholder="Your Phone Number" />
        <button type="button" onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default Checkin;
