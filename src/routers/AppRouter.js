import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import "../styles/navBar.css";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import PaymentsPage from "../pages/PaymentsPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import CategoriesRouter from "./CategoriesRouter";
import Slider from "../Slider/Slider";

function AppRouter() {
  return (
    <>
      <NavBar />
      <Slider />
      <ContactPage />
      <AboutPage />
      <ContactPage />
      <DashboardPage />
      
     </> 
  );
}

export default AppRouter;