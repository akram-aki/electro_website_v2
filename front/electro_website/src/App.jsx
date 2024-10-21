import "./App.css";
import axios from "axios";
import EventForm from "./assets/EventForm";
import { User } from "./User";
import Layout from "./assets/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <>
      <User>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<IndexPage />} />
              <Route path="/addnewevent" element={<EventForm />} />
            </Route>
          </Routes>
        </Router>
      </User>
    </>
  );
}

export default App;
