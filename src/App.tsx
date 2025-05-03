import "./App.css";
import { Route, Routes } from "react-router-dom";
import Speaking from "./Speaking";
import Result from "./Result";
import Home2 from "./Home2";
import Writing from "./Writing";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/result" element={<Result />} />
      <Route path="/" element={<Home2 />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
