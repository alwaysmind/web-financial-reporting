// React
import { useContext, useState } from 'react'

// Icons
import { AiOutlinePlus } from 'react-icons/all'

// Components
import CategoryList from './CategoryList'
import Category from './modals/Category'

import { createCategory, deleteCategory, getCategories, updateCategory } from '../services/Category'
import { MainContext } from '../contexts/MainContext'

const CategoryCard = () => {

    const { categories, setCategories } = useContext(MainContext)

    // UseState
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [data, setData] = useState({
        _id: null,
        icon: null,
        name: "",
        type: 1
    })

    const fetchData = async () => {
        const data = await getCategories();
        setCategories(data.data);
    }

    // Handlers
    const handleSubmit = (e) => {
        e.preventDefault()

        if (data._id === null) {

            delete data._id;

            createCategory(data).then(res => {
                console.log(res)
                fetchData()
                resetData()
                setShowAddCategory(false)
            }).catch(err => {
                console.log(err)
                alert("Error!")
            })
        } else {

            updateCategory(data._id, data).then(res => {
                console.log(res)
                fetchData()
                resetData()
                setShowAddCategory(false)
            }).catch(err => {
                console.log(err)
                alert("Error!")
            })
        }


    }

    const handleDelete = () => {
        deleteCategory(data._id).then(res => {
            console.log(res)
            fetchData()
            resetData()
            setShowAddCategory(false)
        }).catch(err => {
            alert("Error!")
            console.log(err)
        })

    }

    // Helper
    const resetData = () => {
        setData({
            _id: null,
            icon: null,
            name: "",
            type: 1
        })
    }


    return (
        <>
            <Category
                showAddCategory={showAddCategory}
                setShowAddCategory={setShowAddCategory}
                handleSubmit={handleSubmit}
                handler={{ handleDelete }}
                data={data}
                setData={setData} />
            <div className="bg-white py-[22px] px-[16px] rounded-lg">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold">Categories</h4>
                    <button className="bg-gray-200 text-black w-[35px] h-[35px] rounded-full flex items-center justify-center" onClick={() => { resetData(); setShowAddCategory(true); }}>
                        <AiOutlinePlus />
                    </button>
                </div>
                <hr className="text-gray-100 mt-[22px]" />
                <div className="mt-[22px]">
                    <CategoryList categories={categories} handler={{ setShowAddCategory, setData }} />
                </div>
            </div>
        </>
    )
}

export default CategoryCard