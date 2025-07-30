import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}