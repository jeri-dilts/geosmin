import api from './apiConfig'
import axios from 'axios'

export const getProducts = async () => {

    try {
        const response = await axios (`/items`)
        const products = response.data
        return products
    } catch (error) {
        throw error
    }
}

export const getProduct = async id => {
    try {
        const response = await axios.get(`/items/${id}`)
        const product = response.data
        return product
    } catch (error) {
        throw error
    }
}

export const createProduct = async product => {
    try {
        const response = await api.post(`/items`, product)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateProduct = async (id, product) => {
    try {
        const response = await api.put(`/items/${id}`, product)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteProduct = async id => {
    try {
        const response = await api.delete(`/items/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}