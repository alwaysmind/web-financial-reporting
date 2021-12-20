const Radio = ({ label, children }) => {
    return (
        <div className="mb-3">
            <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor=""
            >
                { label }
            </label>
            <div className="">
                <div className="bg-gray-50 flex rounded">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Radio