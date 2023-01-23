import "./App.css";
import NavBar from "./routers/NavBar";
import Slider from "./Slider/Slider";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";



function App() {
  return (
    <div>
      <NavBar />
      <Slider />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
