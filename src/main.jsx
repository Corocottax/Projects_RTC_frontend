import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProjectsProvider from "./providers/ProjectsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </BrowserRouter>
);
