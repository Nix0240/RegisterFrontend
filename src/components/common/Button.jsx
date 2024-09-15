const Button = ({ children, onClick, type = "button", className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
