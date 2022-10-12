import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Homepage from "./Components/Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/projects" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
