import "./App.css";
import Header from "./assets/Header";
import Description from "./assets/Description";
import Numbers from "./assets/Numbers";
import Who from "./assets/Who";
import axios from "axios";
import { User } from "./User";
import Timeline from "./assets/Timeline";
import Projects from "./assets/Projects";
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <>
      <User>
        <Header />
        <div className="mx-24 my-10">
          <Description />
          <Who />
          <Numbers />
          <Timeline />
          <Projects />
        </div>
      </User>

    </>
  );
}

export default App;
