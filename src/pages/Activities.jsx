import { useEffect, useState } from "react"
import Container from "../components/Container"
import Layout from "../components/Layout"
import TransactionTable from '../components/Table'
import { Link } from "react-router-dom"
import { getTransactions } from "../services/Transaction"

const Activities = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [transactions, setTransactions] = useState([])

    const fetchData = async () => {
        const resTransactions = await getTransactions()
        setTransactions(resTransactions.data)
    }

    useEffect(() => {
        const fetchingData = async () => {
            await fetchData()
            setIsLoading(false)
        }

        fetchingData()
    }, [])

    return (
        <Layout>
            <div className="col-span-6 bg-gray-100">
                <Container>
                    <div className="mt-[62px]">
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='font-bold text-lg'>Transaction Activities</h4>
                                <small className='text-xs text-gray-400'>All Activities</small>
                            </div>
                            <div>
                                <Link to="/" className='text-sm text-black font-medium block mt-[12px]'>Go Back</Link>
                            </div>
                        </div>
                        <div className='mt-[22px]'>
                            {isLoading ? (
                                <div className="text-center text-gray-400">
                                    Loading ...
                                </div>
                            ) : (

                                <TransactionTable transactions={transactions} />
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Activities