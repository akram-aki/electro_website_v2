import "./App.css";
import Header from "./assets/Header";
import Description from "./assets/Description";
import Numbers from "./assets/Numbers";
import Who from "./assets/Who";
import axios from "axios";
import { User } from "./User";
import Timeline from "./assets/Timeline";

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <>
      <User>
        <Header></Header>
        <Description />
        <Who></Who>
        <Numbers></Numbers>
        <Timeline></Timeline>
      </User>
    </>
  );
}

export default App;
