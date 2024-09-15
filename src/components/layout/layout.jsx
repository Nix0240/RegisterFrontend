import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-grow p-6">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
