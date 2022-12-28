import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Explore from "./Pages/Explore";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
