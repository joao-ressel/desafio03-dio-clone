import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { Feed } from "./pages/feed";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { GlobalStyle } from "./style";
import { Register } from "./pages/register";
import { Header } from "./components/header";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token"); 
      setIsLoggedIn(!!token); 
    };
    checkAuth();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Feed /> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={isLoggedIn ? <Feed /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};
