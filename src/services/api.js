import axios from 'axios';

// Base URL for the backend
const API_BASE_URL = 'http://localhost:8022/user';  // Update with your actual backend URL

// Common Registration API (for both customer and admin)

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/sign-up`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Server Error');
    }
};

// Login API (common for both customer and admin)
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, loginData);  // Single login API for both roles
        return response.data;  // Handle success (e.g., token, user details)
    } catch (error) {
        throw error.response ? error.response.data : new Error('Login Failed');
    }
};
