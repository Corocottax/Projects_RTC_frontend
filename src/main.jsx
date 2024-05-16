import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProjectsProvider from "./providers/ProjectsProvider.jsx";
import UsersProvider from "./providers/UsersProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UsersProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </UsersProvider>
  </BrowserRouter>
);
