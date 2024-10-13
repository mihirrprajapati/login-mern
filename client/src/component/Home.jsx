import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const user = sessionStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return <div>Home</div>;
};
