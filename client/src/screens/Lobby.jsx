import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";

const LobbyScreen = () => {
  const socket = useSocket();
  const navigate = useNavigate(); // React Router's navigation hook
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoin = useCallback(
    (data) => {
      console.log("Joined room:", data);
      navigate(`/room/${data.room}`); // Redirect to the room page
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoin);

    return () => {
      socket.off("room:join", handleJoin);
    };
  }, [socket, handleJoin]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Join a Room</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email ID
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <label htmlFor="room" style={{ display: "block", marginBottom: "5px" }}>
            Room Number
          </label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default LobbyScreen;
