import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import Explore from "./Pages/Explore";
import Offers from "./Pages/Offers";
import Category from "./Pages/Category";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import CreateListing from "./Pages/CreateListing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>

        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
