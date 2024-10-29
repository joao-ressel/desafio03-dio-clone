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
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      const storedUsername = localStorage.getItem("username");
      setIsLoggedIn(!!token);
      setUsername(storedUsername || "");
    };
    checkAuth();
  }, []);

  const handleLogin = (token, user) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", user.username);
    setIsLoggedIn(true);
    setUsername(user.username);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <Router>
      <GlobalStyle />
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} username={username} />
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/" element={isLoggedIn ? <Feed /> : <Home />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />{" "}
        <Route path="/feed" element={isLoggedIn ? <Feed /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};
