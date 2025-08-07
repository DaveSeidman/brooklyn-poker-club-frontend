import React, { useRef, useEffect, useState } from "react";
import './index.scss';

const Admin = () => {

  const getPlayers = () => {

  }

  return (
    <div className="admin">
      <div className="admin-players">
        Player List Here
      </div>
      <div className="admin-message">
        <textarea value="this is where the admin can set the text message"></textarea>
      </div>
    </div>
  );
};

export default Admin;
