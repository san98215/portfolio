import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import StarryBackground from './components/StarryBackground/StarryBackground';

function App() {
  return (
    <div className="App">
      <StarryBackground />
      <Navbar />
      <Home />
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
