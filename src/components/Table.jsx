import moment from 'moment'
import { currency } from '../helper'
import { icons } from '../constants'

const TransactionTable = ({ transactions }) => {

    return (
        <table className='border-collapse w-full text-sm'>
            <thead>
                <tr>
                    <th className='border-t font-medium text-xs text-gray-400 p-4 pl-8 pt-3 pb-3 text-left'>Category</th>
                    <th className='border-t font-medium text-xs text-gray-400 p-4 pl-8 pt-3 pb-3 text-left'>Title</th>
                    <th className='border-t font-medium text-xs text-gray-400 p-4 pl-8 pt-3 pb-3 text-left'>Date</th>
                    <th className='border-t font-medium text-xs text-gray-400 p-4 pl-8 pt-3 pb-3 text-left'>Amount</th>
                </tr>
            </thead>
            <tbody className=''>
                {transactions.length > 0 ? (
                    <>
                        {transactions.map((transaction) => (
                            <tr key={transaction._id}>
                                <td className='border-b border-gray-100 p-4 pl-8 text-gray-800'>
                                    <div className="flex gap-3 items-center">
                                        <div className={`${transaction.category[0]?.type ? 'bg-green-100' : 'bg-red-100'} border rounded-full w-[48px] h-[48px] flex items-center justify-center`}>
                                            {icons.find(x => x.id === parseInt(transaction.category[0].icon)).icon}
                                        </div>
                                        <h5 className={`font-bold  ${transaction.category[0].type ? 'text-green-300' : 'text-red-300'}`}>{transaction.category[0]?.name}</h5>
                                    </div>
                                </td>
                                <td className='border-b border-gray-100 font-bold p-4 pl-8 text-gray-800'>{transaction.title}</td>
                                <td className='border-b border-gray-100 p-4 pl-8 text-gray-400'>{moment(transaction.date).format('YYYY/MM/DD')}</td>
                                <td className={`border-b border-gray-100 font-bold p-4 pl-8 ${transaction.category[0].type ? 'text-green-500' : 'text-red-500'}`}>{transaction.category[0].type ? '+' : '-'} {currency(transaction.amount)}</td>
                            </tr>
                        ))}
                    </>
                ) : (
                    <tr>
                        <td colSpan={4}>
                            <h1 className='text-center text-gray-300 font-bold py-5'>No Data</h1>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TransactionTable