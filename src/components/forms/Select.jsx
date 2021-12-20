const Select = ({ label, options = [], setData, data, ...otherProps }) => {

    return (
        <>
            <label
                className="block text-gray-700 text-xs font-bold mb-2"
                htmlFor=""
            >
                { label }
            </label>
            <select onChange={(e) => setData({ ...data, category: e.target.value})} value={data.category ?? ''} className="px-3 py-3 text-blueGray-600 relative bg-gray-50 rounded text-sm border-0 outline-none focus:outline-none focus:ring ring-yellow-100 w-full" { ...otherProps }>
                <option value=""></option>
                { options.map((option) => (
                    <option key={option._id} value={option._id}>{option.name}</option>
                )) }
            </select>
        </>
    )
}

export default Select