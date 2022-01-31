import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import Portfolio from "./screens/portfolio/Portfolio";
import ContactMe from "./screens/contactMe/ContactMe";
import ParticleBackground from './ParticleBackground'; 

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ParticleBackground />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
