const InputField = ({ label, type, value, onChange, placeholder, name }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
};

export default InputField;
