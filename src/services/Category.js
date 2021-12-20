import { Delete, Get, Post, Put } from "../helper";

export const getCategories = async () => {
    return await Get('categories')
}

export const createCategory = async (payload) => {
    return await Post('categories', payload)
}

export const updateCategory = async (id, payload) => {
    return await Put(`categories/${id}`, payload)
}

export const deleteCategory = async (id) => {
    return await Delete(`categories/${id}`)
}