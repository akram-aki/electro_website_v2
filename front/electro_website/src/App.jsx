import "./App.css";
import Header from "./assets/Header";
import Description from "./assets/Description";
import Who from "./assets/Who";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <>
      <Header></Header>
      <Description></Description>
      <Who></Who>
    </>
  );
}

export default App;
