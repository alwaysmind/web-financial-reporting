import { Delete, Get, Post, Put } from "../helper";

export const getTransactions = async () => {
    return await Get('transactions')
}

export const createTransaction = async (payload) => {
    return await Post('transactions', payload)
}

export const updateTransaction = async (id, payload) => {
    return await Put(`transactions/${id}`, payload)
}

export const deleteTransaction = async (id) => {
    return await Delete(`transactions/${id}`)
}