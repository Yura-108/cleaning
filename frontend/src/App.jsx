import './App.css'
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Staff from "./pages/staff/Staff.jsx";
import Services from "./Components/Services/Services.jsx";
import RegService from "./pages/registrationService/RegService.jsx";
import Registration from "@pages/registration/Registration.jsx";
import Login from "@pages/login/Login.jsx";
import PremisesForm from "@pages/premise/PremisesForm.jsx";

// contract

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/services" element={<Services />} />
          <Route path="/registration-service" element={<RegService />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/premises" element={<PremisesForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

