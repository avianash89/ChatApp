import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import Avatar from "../../assets/avatar.jpg"

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const inOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}>
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 cursor-pointer">
        <div className={`avatar ${inOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
          <img src={Avatar} alt="User Avatar" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.name} </h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
