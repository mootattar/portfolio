import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundHeader from "./components/header/BackgroundHeader";
import MainHeader from "./components/header/MainHeader";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/footer/Contact";
import Tools from "./components/tools/Tools";

function App() {
  return (
    <Router>
      <BackgroundHeader />
      <MainHeader />
      <Routes>
        {/* مسار الصفحة الرئيسية */}
        <Route path="/" element={<Hero />} />

        {/* مسار صفحة المهارات */}
        <Route path="/skills" element={<Skills />} />

        {/* مسار صفحة المشاريع */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;
