import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

// Components
import Layout from '../components/Layout'
import Container from '../components/Container'
import CategoryCard from '../components/CategoryCard'

// Modals
import Transaction from '../components/modals/Transaction'
import TransactionTable from '../components/Table'
import { MainContext } from '../contexts/MainContext'
import { createTransaction, getTransactions } from '../services/Transaction'
import Chart from '../components/Bar'
import { getCategories } from '../services/Category'

const Main = () => {

    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [dataset, setDataset] = useState([])
    const [data, setData] = useState({
        title: "",
        type: null,
        amount: 0,
        date: null,
        description: "",
        category: null
    })

    const { setCurrentBalance, categories, setCategories, transactions, setTransactions } = useContext(MainContext)

    const dataTransactions = async () => {

        // Transactions
        const resTransactions = await getTransactions(`?monthYear=${moment().format('YYYY-MM')}`)
        setTransactions(resTransactions.data)

        const transactionData = resTransactions.data

        // CurrentBalance
        const resGraphData = await getTransactions()
        const graphData = resGraphData.data
        const income = graphData.filter(t => t.type).reduce((prev, current) => prev + current.amount, 0)
        const spend = graphData.filter(t => !t.type).reduce((prev, current) => prev + current.amount, 0)
        setCurrentBalance(income - spend)

        // graph
        const tempData = [
            { label: "", income: 0, spending: 0 },
            { label: "", income: 0, spending: 0 },
            { label: "", income: 0, spending: 0 },
            { label: "", income: 0, spending: 0 },
            { label: "", income: 0, spending: 0 },
            { label: "", income: 0, spending: 0 },
            { label: "", income: 0, spending: 0 }
        ]

        for (let index = tempData.length - 1; index > -1; index--) {
            tempData[index].label = moment().subtract(index, "days").format('ddd')

            let daterange = transactionData.filter(t => moment(t.date).format('YYYY/MM/DD') === moment()
                .subtract(index, "days")
                .format('YYYY/MM/DD'))

            tempData[index].income = daterange.filter(t => t.type).reduce((prev, current) => prev + current.amount, 0);

            tempData[index].spending = daterange.filter(t => !t.type).reduce((prev, current) => prev + current.amount, 0);
        }

        tempData.reverse()

        setDataset({
            labels: tempData.map((item) => item.label),
            datasets: [
                {
                    label: "Income",
                    data: tempData.map((item) => item.income),
                    backgroundColor: [
                        "#ffbb11",
                    ]
                },
                {
                    label: "Spending",
                    data: tempData.map((item) => item.spending),
                    backgroundColor: [
                        "#ff6011",
                    ]
                }
            ]
        })
    }

    const dataCategories = async () => {
        const resCategories = await getCategories()
        setCategories(resCategories.data)
    }

    useEffect(() => {
        const fetchData = async () => {
            dataTransactions()
            dataCategories()

            setIsLoading(false)
        }

        if (isLoading) {
            fetchData()
        }

    }, [setIsLoading, isLoading]) // eslint-disable-line react-hooks/exhaustive-deps

    // HandlinghandleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()

        await createTransaction(data).then(res => {
            alert(res.message)
            setIsLoading(true)
            setShowModal(false)
            handleReset()
        }).catch(err => {
            console.log(err)
        })
    }

    const handleReset = () => {
        setData({
            title: "",
            type: null,
            amount: 0,
            date: null,
            description: "",
            category: null
        })
    }

    return (
        <Layout>
            <Transaction handleSubmit={handleSubmit} showModal={showModal} setShowModal={setShowModal} categories={categories} setData={setData} data={data} />
            <div className="col-span-6 bg-gray-100">
                <Container>
                    {/* Nabar */}
                    <nav className="px-[16px] bg-white rounded-lg py-[16px] flex items-center justify-between gap-3">
                        <div>
                            <h3 className='text-sm'><span className='text-gray-300'>Hallo, today is</span> <span className='font-bold text-sm text-yellow-300'>{moment().format('dddd — MMM DD, YYYY')}</span></h3>
                        </div>
                        <div className='flex item-center gap-3'>
                            <input type="search" name="search" id="search" className="bg-gray-50 border border-gray-100 px-[22px] py-[8px] outline-none rounded-lg"
                                placeholder="Search ..." />
                            <button className="bg-yellow-400 font-medium px-[22px] py-[8px] rounded-lg text-white" onClick={() => setShowModal(true)}>+ New Transaction</button>
                        </div>
                    </nav>

                    {/* Content */}
                    <main className="mt-[52px]">

                        {/* Stats and Quick Access */}
                        <div className="grid grid-cols-2 gap-5">

                            {/* Stat */}
                            <div className='rounded-lg grid grid-rows-3 gap-4'>
                                <div className='row-span-2'>
                                    <div>
                                        <h4 className='text-lg font-bold'>Weekly Report</h4>
                                    </div>
                                    <div>
                                        <Chart dataset={dataset} />
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className='grid grid-cols-3 gap-3'>
                                    <div className="bg-white rounded-lg flex items-center justify-center">
                                        Home
                                    </div>
                                    <div className="bg-white rounded-lg flex items-center justify-center">
                                        Internet
                                    </div>
                                    <div className="bg-white rounded-lg flex items-center justify-center">
                                        Service
                                    </div>
                                </div>
                            </div>

                            {/* Quick Access */}
                            <CategoryCard />
                        </div>


                        {/* Transaction Table */}
                        <div className="mt-[62px]">
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h4 className='font-bold text-lg'>Last Month Activities</h4>
                                    <small className='text-xs text-gray-400'>Monthly Activities</small>
                                </div>
                                <div>
                                    <Link to="/activities" className='text-sm text-black font-medium block mt-[12px]'>View All</Link>
                                </div>
                            </div>
                            <div className='mt-[22px]'>
                                <TransactionTable transactions={transactions} />
                            </div>
                        </div>
                    </main>
                </Container>
            </div>
        </Layout>
    )
}

export default Main