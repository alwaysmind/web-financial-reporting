import Input from "../forms/Input"
import Radio from "../forms/Radio"
import Select from "../forms/Select"
import Textarea from "../forms/Textarea"

const Transaction = ({ showModal, setShowModal, categories, setData, data, handleSubmit }) => {

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <form onSubmit={handleSubmit} method="post">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-xl font-semibold">
                                            New Transaction
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto w-[480px]">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="col-span-1">
                                                <Input label={"Title"} value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} required />
                                            </div>
                                            <div className="col-span-1"></div>
                                            <div className="col-span-1">
                                                <Radio label={"Type"}>
                                                    <div className="flex w-full rounded">
                                                        <input
                                                            type="radio"
                                                            onChange={() => setData({ ...data, type: true })}
                                                            name="category_type"
                                                            id="income_type_category"
                                                            checked={data.type === true}
                                                            hidden
                                                            required />
                                                        <label htmlFor="income_type_category" className="radio text-center self-center py-3 px-3 text-sm rounded cursor-pointer hover:opacity-75 w-full">Income</label>
                                                    </div>
                                                    <div className="flex w-full rounded">
                                                        <input
                                                            type="radio"
                                                            onChange={() => setData({ ...data, type: false })}
                                                            name="category_type"
                                                            id="spending_type_category"
                                                            checked={data.type === false}
                                                            hidden
                                                            required />
                                                        <label htmlFor="spending_type_category" className="radio text-center self-center py-3 px-3 text-sm rounded cursor-pointer hover:opacity-75 w-full">Spending</label>
                                                    </div>
                                                </Radio>
                                            </div>
                                            <div className="col-span-1">
                                                <Select label={"Category"} options={categories.filter((category) => category.type === data.type)} setData={setData} data={data} required />
                                            </div>
                                            <div className="col-span-1">
                                                <Input label={"Amount"} type={"number"} onChange={(e) => setData({ ...data, amount: e.target.value })} required />
                                            </div>
                                            <div className="col-span-1">
                                                <Input label={"Date"} type="date" onChange={(e) => setData({ ...data, date: e.target.value })} required />
                                            </div>
                                            <div className="col-span-2">
                                                <Textarea label={"Description"} onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description} required />
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
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
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Transaction