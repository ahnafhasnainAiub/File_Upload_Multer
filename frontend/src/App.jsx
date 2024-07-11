import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./index.css";
import Contact from "./pages/Contact";
import Inquery from "./components/Inquery/Inquery";
import Service from "./pages/Service";
import CompleteProjects from "./pages/CompleteProjects";
import EmployeeForm from "./pages/EmployeeForm";
import Team from "./components/Strategies/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquery" element={<Inquery />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<CompleteProjects />} />
          <Route path="/team" element={<EmployeeForm/>} />
          <Route path="/member" element={<Team/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
