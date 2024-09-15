import { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { loginUser } from "../../services/api";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser({ ...formData, role: "admin" });
      console.log("response", response);

      if (response?.role !== "admin") {
        toast.error("You are not allowed to login from here.");
      } else {
        toast.success("Admin logged in successfully");
      }
    } catch (error) {
      console.log("Error", error);
      if (error?.message || (error?.response && error?.response?.data)) {
        toast.error(
          error?.response?.data?.message || error?.message || "Login failed."
        );
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          name="email"
        />
        <InputField
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          name="password"
        />
        <Button type="submit" className="mt-4 w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
