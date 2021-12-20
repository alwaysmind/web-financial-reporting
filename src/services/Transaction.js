import { Delete, Get, Post, Put } from "../helper";

export const getTransactions = async (params = '') => {
    return await Get(`transactions${params}`)
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