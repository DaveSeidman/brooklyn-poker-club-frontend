import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import './index.scss';

const Admin = () => {
  const backendUrl = location.hostname === 'localhost' ? 'http://localhost:8000' : 'https://brooklyn-poker-club-backend.onrender.com';
  console.log(`looking for backend at: ${backendUrl}`);

  const [message, setMessage] = useState('')
  const [players, setPlayers] = useState([])

  const getMessage = () => {
    axios.get(`${backendUrl}/message`).then(res => {
      console.log(res.data.message)
      setMessage(res.data.message)
    })
  }

  const saveMessage = () => {
    console.log('save message', message)
    axios.post(`${backendUrl}/message`, {
      message
    })
  }

  const getPlayers = () => {
    axios.get(`${backendUrl}/players`).then(res => {
      setPlayers(res.data)
    })
  }

  useEffect(() => {
    getMessage();
    getPlayers();
  }, [])

  return (
    <div className="admin">
      <div className="admin-message">
        <h2>Set the Text Message:</h2>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="set the check in message"
        />
        <button onClick={saveMessage}>Save</button>
      </div>
      <div className="admin-players">
        <h2 className="admin-players-title">Subscribed Players:</h2>
        <ul className="admin-players-list">
          {players.map(player => (
            <li
              className="admin-players-list-player"
              key={player._id}>
              <span>{player.name}</span><span>{player.phone}</span>
            </li>))
          }
        </ul>
      </div>

    </div>
  );
};

export default Admin;
