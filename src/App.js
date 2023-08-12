import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import Mainpage from './components/mainpage/Mainpage';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';


function App() {
  return (
    <div>
      <Mainpage />
      <AboutMe />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
