import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import CustomerRegister from "./components/auth/CustomerRegister";
import AdminRegister from "./components/auth/AdminRegister";
import AdminLogin from "./components/auth/AdminLogin";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-customer" element={<CustomerRegister />} />
          <Route path="/register-admin" element={<AdminRegister />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;
