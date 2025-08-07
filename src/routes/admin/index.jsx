import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import './index.scss';

const Admin = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(`looking for backend at: ${backendUrl}`);

  const [players, setPlayers] = useState([])

  const getPlayers = () => {
    axios.get(`${backendUrl}/players`).then(res => {
      console.log(res)
      setPlayers(res.data)
    })
  }


  useEffect(() => {
    getPlayers();
  }, [])

  return (
    <div className="admin">
      <div className="admin-message">
        <textarea placeholder="this is where the admin can set the text message"></textarea>
      </div>
      <div className="admin-players">
        <h1 className="admin-players-title">Subscribed Players:</h1>
        <ul className="admin-players-list">
          {players.map(player => (<li key={player._id}><span>{player.name}</span><span>{player.phone}</span></li>))}
        </ul>
      </div>

    </div>
  );
};

export default Admin;
