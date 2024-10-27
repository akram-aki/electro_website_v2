import "./App.css";
import axios from "axios";
import { User } from "./User";
import Layout from "./assets/DesktopNavComponent/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import Dashboard from "./assets/DashboardComponent/Dashboard";
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <>
      <User>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<IndexPage />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </User>
    </>
  );
}

export default App;
