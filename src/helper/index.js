import axios from "axios"

import { URL } from '../constants'

export const Get = (path) => {
    return new Promise((resolve, reject) => {
        axios.get(`${URL}/${path}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Post = (path, req) => {
    return new Promise((resolve, reject) => {
        axios.post(`${URL}/${path}`, req)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Put = (path, req) => {
    return new Promise((resolve, reject) => {
        axios.put(`${URL}/${path}`, req)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Delete = (path) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${URL}/${path}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}


export const currency = (value) => {
    var formater = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    return formater.format(value)
}