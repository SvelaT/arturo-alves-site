import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Academic, Experience, Projects, Skills, Interests } from "./pages"
import Layout from './layout/Layout.js';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="academic" element={<Academic />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="interests" element={<Interests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
