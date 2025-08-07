import React, { useRef, useState, useEffect } from "react";
import './index.scss';

const Checkin = () => {
  const nameRef = useRef();
  const phoneRef = useRef();

  const submit = () => {
    console.log('values', nameRef.current?.value, phoneRef.current?.value);
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
