import './App.css';
import Navbar from './components/nav';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
