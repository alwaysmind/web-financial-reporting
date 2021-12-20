import { icons } from "../constants"

const CategoryItem = ({ data, handler }) => {

    const handleClick = () => {

        delete data.user

        handler.setShowAddCategory(true)
        handler.setData(data)
    }

    return (
        <div className={`hover:shadow-sm cursor-pointer border-gray-300 rounded-lg p-[20px] flex items-center text-sm gap-2 ${data.type === false ? 'bg-red-100 hover:bg-red-200' : 'bg-green-100 hover:bg-green-200'}`} onClick={handleClick}>
            {icons.find(x => x.id === parseInt(data.icon)).icon}
            {data.name}
        </div>
    )
}

export default CategoryItem