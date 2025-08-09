import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';

import './index.scss';

const Checkin = () => {
  const backendUrl = location.hostname === 'localhost' ? 'http://localhost:8000' : 'https://brooklyn-poker-club-backend.onrender.com';
  console.log(`looking for backend at: ${backendUrl}`);
  const [checkinResult, setCheckinResult] = useState();

  const nameRef = useRef();
  const phoneRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    if (!nameRef.current.value || !phoneRef.current.value) return;

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    console.log(`adding ${name}: ${phone}`)
    axios.post(`${backendUrl}/checkin`, { name, phone }).then(res => {
      setCheckinResult(res.data.success ? 'Thank you for checking in' : 'Please try again');
      setTimeout(() => setCheckinResult(null), 3000);
    })
  }

  return (
    <div className='checkin'>
      <h1>Brookyn Poker Club</h1>
      <h2>Check In</h2>
      <form className="checkin-form" onSubmit={submit}>
        <label>
          Name
          <input
            ref={nameRef}
            name="name"
            type="text"
            placeholder="Name"
            required
            minLength={2}
            autoComplete="name"
          />
        </label>
        <label>
          Phone
          <input
            ref={phoneRef}
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="e.g. 3475551234"
            title="Enter exactly 10 digits (no dashes or spaces)."
            required
            autoComplete="tel-national"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className={`checkin-result ${checkinResult ? '' : 'hidden'}`}>
        <p>Thank you for checking in.</p>
      </div>
    </div>
  );
};

export default Checkin;
