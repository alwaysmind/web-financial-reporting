import Cookies from 'js-cookie'
import moment from 'moment'
import { useContext } from 'react'
import { GrMoney } from 'react-icons/all'
import { MainContext } from '../contexts/MainContext'
import { currency } from '../helper'
import { getUserData } from '../services/Auth'

const Sidebar = () => {

    const { currentBalance, transactions } = useContext(MainContext)

    const userData = getUserData()

    const handleLogout = () => {
        Cookies.remove("token")
        Cookies.remove("gdata")

        window.location.href = '/login'
    }

    const todays = transactions.filter(t => moment(t.date).format('YYYY/MM/DD') === moment().format('YYYY/MM/DD')).slice(0, 5)
    const yesterdays = transactions.filter(t => moment(t.date).format('YYYY/MM/DD') === moment().subtract(1, 'days').format('YYYY/MM/DD')).slice(0, 5)

    return (
        <div className="col-span-2 bg-yellow-50 min-h-screen">
            <div className="py-[13px] px-[22px]  flex flex-wrap justify-between h-full">
                <div className='w-full'>
                    <div className="py-[16px]">
                        <h4 className="text-lg font-bold">{userData.name}</h4>
                        <p className="text-sm text-gray-500">{userData.email}</p>
                    </div>

                    <div className="bg-yellow-100 px-[40px] py-[23px] border border-yellow-200 rounded-xl mt-[42px] shadow-sm">
                        <h5 className="text-sm">CURRENT BALANCE</h5>
                        <div className="flex gap-3 pt-[12px]">
                            <div>
                                <GrMoney className='text-3xl' />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{currency(currentBalance)}</h3>
                                <p className="text-xs mt-[4px]">Total Money</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[48px]">
                        <h3 className="text-md text-yellow-500 ">LATEST ACTIVITY</h3>
                        <hr className="text-gray-100 mt-[8px]" />
                        {
                            transactions.length > 0 ? (
                                <>
                                    <div className="mt-[18px]">
                                        {todays.length > 0 && (
                                            <>
                                                <h5 className="text-center text-sm text-gray-400">Today</h5>
                                                <ul className="mt-[16px] grid grid-cols-1 gap-5">
                                                    {todays.map(today => (
                                                        <li className="grid grid-cols-7" key={today._id}>
                                                            <div className="col-span-3">
                                                                <h6 className="font-medium text-sm truncate ...">{today.title}</h6>
                                                                <p className="text-xs text-yellow-700">{today.category[0].name}</p>
                                                            </div>
                                                            <div className="col-span-4">
                                                                <h4 className={`text-right text-sm ${today.category[0].type ? 'text-green-500' : 'text-red-500'}`}>{today.category[0].type ? '+' : '-'} {currency(today.amount)}</h4>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                    <div className="mt-[25px]">
                                        {yesterdays.length > 0 && (
                                            <>
                                                <h5 className="text-center text-sm text-gray-400">Yesterday</h5>
                                                <ul className="mt-[16px] grid grid-cols-1 gap-5">
                                                    {yesterdays.map(today => (
                                                        <li className="grid grid-cols-7" key={today._id}>
                                                            <div className="col-span-3">
                                                                <h6 className="font-medium text-sm truncate ...">{today.title}</h6>
                                                                <p className="text-xs text-yellow-700">{today.category[0].name}</p>
                                                            </div>
                                                            <div className="col-span-4">
                                                                <h4 className={`text-right text-sm ${today.category[0].type ? 'text-green-500' : 'text-red-500'}`}>{today.category[0].type ? '+' : '-'} {currency(today.amount)}</h4>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>

                                        )}
                                    </div>
                                </>
                            ) : (
                                <h1 className='text-center text-sm text-gray-300 font-bold py-5'>No Data</h1>
                            )
                        }
                    </div>
                </div>
                <div className='flex wrap w-full items-end'>
                    <button className='py-[13px] px-[22px] mt-[52px] mb-[16px] hover:bg-red-400 hover:shadow-lg bg-red-300 border border-red-400 text-white block rounded-lg w-full' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar