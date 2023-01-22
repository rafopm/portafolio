import "./App.css";
import NavBar from "./routers/NavBar";
import Slider from "./Slider/Slider";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import ContactForm from "./form/ContactForm";

function App() {
  return (
    <div>
      <NavBar />
      <Slider />
      <AboutPage />
      <ContactForm />
    </div>
  );
}

export default App;
