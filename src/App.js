import './App.css';
import Navbar from './components/nav';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Bg from './components/background1';
import Experience from './components/experience';


function App() {
  return (
    <>
      <Navbar />


      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
