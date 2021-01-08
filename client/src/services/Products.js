import axios from 'axios'


//Think we need to remove the 'items' from the end of address to properly sort this
// const apiURL = 'https://geosmin.herokuapp.com/api'
const apiURL = 'http://localhost:3000/api'

export const getProducts = async () => {

try {
    const response = await axios (`${apiURL}/items`)
    const products = response.data
    return products
} catch (error) {
    throw error
}
}

export const getProduct = async id => {
    try {
        const response = await axios(`${apiURL}/items/${id}`)
        const product = response.data
        return product
    } catch (error) {
        throw error
    }
}

export const createProduct = async product => {
    try {
        const response = await axios.post(`${apiURL}/items`, product)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateProduct = async (id, product) => {
  try {
      const response = await axios.put(`${apiURL}/items/${id}`, product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
    try {
        const response = await axios.delete(`${apiURL}/items/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

//this is for axios calls