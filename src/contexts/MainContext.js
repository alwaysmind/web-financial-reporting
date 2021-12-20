import { createContext, useState } from "react"


export const MainContext = createContext()

const MainProvider = (props) => {

    const [transactions, setTransactions] = useState([])
    const [currentBalance, setCurrentBalance] = useState(0)
    const [categories, setCategories] = useState([])
    const [filterTransactions, setFilterTransactions] = useState([])

    return (
        <MainContext.Provider value={{
            currentBalance,
            setCurrentBalance,
            categories,
            setCategories,
            transactions,
            setTransactions,
            filterTransactions,
            setFilterTransactions
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainProvider