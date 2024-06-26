import './App.css';
import Navbar from './components/nav';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Bg from './components/background1';


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
