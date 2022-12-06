import React, { useEffect, useState } from 'react';
import socket from '../socket/index';
import ACTIONS from '../socket/actions';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router';

export const MainPage = () => {
  const [rooms, updateRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      updateRooms(rooms);
    });
  }, []);

  return (
    <div>
      <h1>Available Rooms</h1>
      <ul>
        {rooms.map((roomID) => (
          <li key={roomID}>
            {roomID}
            <button
              onClick={() => {
                navigate(`/room/${roomID}`);
              }}>
              Join room
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          navigate(`/room/${v4()}`);
        }}>
        Create new Room
      </button>
    </div>
  );
};
