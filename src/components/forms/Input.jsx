const Input = ({ label, type = "text", value, onChange, ...otherProps }) => {
    return (
        <div className="mb-3">
            <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor=""
            >
                {label}
            </label>
            <input onChange={onChange} value={value} type={type} placeholder={`Add ${label}`} className="px-3 py-3 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 outline-none focus:outline-none focus:ring ring-yellow-200 w-full" {...otherProps} />
        </div>
    )
}

export default Input