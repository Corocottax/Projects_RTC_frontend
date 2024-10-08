import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { UsersContext } from "./providers/UsersProvider";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const { state } = useContext(UsersContext);
  const location = useLocation();

  return (
    <main>
      {location.pathname !== "/profile" && (
        <Link to={state.user ? "/profile" : "/login"}>
          <img
            src="/assets/icons/user.png"
            alt="user zone"
            className="user-zone"
          />
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
