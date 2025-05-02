import "./App.css";
import { Route, Routes } from "react-router-dom";
import Speaking from "./Speaking";
import Result from "./Result";
import Home2 from "./Home2";

function App() {
  return (
    <Routes>
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/result" element={<Result />} />
      <Route path="/" element={<Home2 />} />
    </Routes>
  );
}

export default App;
