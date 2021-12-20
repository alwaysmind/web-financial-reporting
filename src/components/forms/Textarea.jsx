const Textarea = ({ label, ...otherProps }) => {
    return (
        <>
            <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor=""
            >
                {label}
            </label>
            <textarea placeholder={`Add ${label}`} rows={3} className="px-3 py-3 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 outline-none focus:outline-none focus:ring ring-yellow-200 w-full" {...otherProps}></textarea>
        </>
    )
}

export default Textarea