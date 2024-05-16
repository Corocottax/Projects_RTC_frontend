import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProjectsProvider from "./providers/ProjectsProvider.jsx";
import UsersProvider from "./providers/UsersProvider.jsx";
import AlertProvider from "./providers/AlertProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertProvider>
      <UsersProvider>
        <ProjectsProvider>
          <App />
        </ProjectsProvider>
      </UsersProvider>
    </AlertProvider>
  </BrowserRouter>
);
