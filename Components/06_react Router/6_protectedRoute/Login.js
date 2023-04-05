import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", true);
  };

  useEffect(() => {
    let login = localStorage.getItem("login");

    if (login) {
      navigate("/Account");
    }
  });
  return (
    <>
      <h1>Login Page</h1>
      <input type="text" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
