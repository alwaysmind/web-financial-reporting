// Components
import CategoryItem from './CategoryItem'

const CategoryList = ({ categories, handler }) => {

    return (
        <>
            {categories.length > 0 ? (
                <div className="grid grid-cols-3 gap-2 h-full">
                    {
                        categories.map((category, index) => (
                            <CategoryItem key={index} data={category} handler={handler} />
                        ))
                    }
                </div>
            ) : (
                <h1 className='text-lg font-bold text-center text-gray-200 h-full'>No Data</h1>
            )}
        </>
    )
}

export default CategoryList