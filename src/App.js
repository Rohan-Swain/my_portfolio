import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Homepage from "./Components/Pages/Home";
import Aboutpage from "./Components/Pages/About";
import Projectspage from "./Components/Pages/Projects";
import Contactpage from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="projects" element={<Projectspage />} />
          <Route path="contact" element={<Contactpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
