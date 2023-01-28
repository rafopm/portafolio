import "./App.css";
import NavBar from "./routers/NavBar";
import Slider from "./Slider/Slider";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorkList from "./components/portafolio/WorkList";
import FooterPage from "./pages/FooterPage";
import Timer from "./components/Timer";


function App() {

  return (
    <div>
     
      <NavBar />
      <Slider />
      <AboutPage />

      <WorkList />

      <ContactPage />
      <FooterPage />
    </div>
  );
}

export default App;
