import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold">
                    MyApp
                </Link>
                <div className="space-x-4">
                    <Link to="/register-customer" className="hover:bg-blue-500 px-3 py-2 rounded">
                        Register as Customer
                    </Link>
                    <Link to="/register-admin" className="hover:bg-blue-500 px-3 py-2 rounded">
                        Register as Admin
                    </Link>
                    <Link to="/admin-login" className="hover:bg-blue-500 px-3 py-2 rounded">
                        Admin Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
