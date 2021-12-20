import Input from "../forms/Input"
import Radio from "../forms/Radio"

import { icons } from "../../constants"

const Category = ({ showAddCategory, setShowAddCategory, handleSubmit, data, setData, handler }) => {

    return (
        <>
            {showAddCategory ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <form onSubmit={handleSubmit}>
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-xl font-semibold">
                                            {data._id !== null ? "Edit" : "New"} Category
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowAddCategory(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto w-[480px]">
                                        <div onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                                            <div className="col-span-1">
                                                <Input value={data.name} label={"Name"} onChange={(e) => setData({ ...data, name: e.target.value })} required />
                                            </div>
                                            <div className="col-span-1">
                                                <Radio label={"Type"}>
                                                    <div className="flex w-full rounded">
                                                        <input
                                                            type="radio"
                                                            onChange={() => setData({ ...data, type: true })}
                                                            name="category_type"
                                                            id="income_type_category"
                                                            checked={data.type === true}
                                                            hidden />
                                                        <label htmlFor="income_type_category" className="radio text-center self-center py-3 px-3 text-sm rounded cursor-pointer hover:opacity-75 w-full">Income</label>
                                                    </div>
                                                    <div className="flex w-full rounded">
                                                        <input
                                                            type="radio"
                                                            onChange={() => setData({ ...data, type: false })}
                                                            name="category_type"
                                                            id="spending_type_category"
                                                            checked={data.type === false}
                                                            hidden />
                                                        <label htmlFor="spending_type_category" className="radio text-center self-center py-3 px-3 text-sm rounded cursor-pointer hover:opacity-75 w-full">Spending</label>
                                                    </div>
                                                </Radio>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="mb-3">
                                                    <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="">Icon</label>
                                                    <div className="">
                                                        <div className="grid grid-cols-5 gap-3">
                                                            {icons.map((icon, index) => (
                                                                <div className="flex justify-center w-full rounded" key={index}>
                                                                    <input type="radio" name="icon_category" onChange={(e) => setData({ ...data, icon: e.target.value })} id={`iconindex-${index}`} value={icon.id} checked={icon.id === parseInt(data.icon)} hidden />
                                                                    <label htmlFor={`iconindex-${index}`} className="radio text-center self-center py-3 px-3 text-sm rounded cursor-pointer hover:opacity-75 w-full flex justify-center">
                                                                        {icon.icon}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <div>
                                            { data._id && (
                                                <button
                                                    className="text-red-300 hover:text-red-600 background-transparent font-bold uppercase py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => handler.handleDelete()}
                                                >
                                                    Delete
                                                </button>
                                            ) }
                                        </div>
                                        <div>
                                            <button
                                                className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowAddCategory(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-yellow-400 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Category