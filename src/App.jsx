import './App.css';
import Nav from './pages/Nav';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Nopage from './pages/Nopage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
