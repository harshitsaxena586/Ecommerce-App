import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  localStorage.clear();
  const navigate = useNavigate();
  navigate("/");
  return (
    <div className="login-body">
      {toast.success("logged out succesfully")}
      <h1 className="text-center text-white">Hope You enjoyed shopping here 👋</h1>
    </div>
  );
}
