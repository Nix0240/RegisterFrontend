import { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { registerUser } from "../../services/api";
import { toast } from "react-toastify";

const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await registerUser({ ...formData, role: "customer" });
      toast.success(response.message);
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Customer Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          name="firstName"
        />
        <InputField
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          name="lastName"
        />
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
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>
    </div>
  );
};

export default CustomerRegister;
