import './App.css';
import Navbar from './components/nav';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { animateScroll } from 'react-scroll';


function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
