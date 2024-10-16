import "./App.css";
import Header from "./assets/Header";
import Description from "./assets/Description";
import Who from "./assets/Who";
import axios from "axios";
import { User } from "./User";

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <>
      <User>
        <Header></Header>
        <Description></Description>
        <Who></Who>
      </User>
    </>
  );
}

export default App;
