import "./App.css";
import { Route, Routes } from "react-router-dom";
import Speaking from "./Speaking";
import Result from "./Result";
import Home from "./Home";
import Writing from "./Writing";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/result" element={<Result />} />
      <Route path="/" element={<Home />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
