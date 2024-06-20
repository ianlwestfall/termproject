import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // GitHub Pages doesn't work with BrowserRouter
import Home from './content/Home/Home';
import About from './content/About/About';
import Education from './content/Education/Education';
import Projects from './content/Projects/Projects';
import Contact from './content/Contact/Contact';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;