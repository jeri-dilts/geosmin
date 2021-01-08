const Item = require('../models/item')
const db = require('../db/connection')
// const { get } = require('../controller/connection')
// const { item } = require('../routes/items')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getItems = async (req, res) => {
  try {
    const items = await Item.find()
    res.json(items)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const getItem = async (req, res) => {
  try {
    const { id } = req.params
    const item = await Item.findById(id)
    if (item) {
      return res.json(item)
    }
    res.status(404).json({ message: 'Post not found!' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const createItem = async (req, res) => {
  try {
    const item = await new Item(req.body)
    await item.save()
    res.status(201).json(item)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateItem = async (req, res) => {
  const { id } = req.params
  await Item.findByIdAndUpdate(id, req.body, { new: true }, (error, item) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    } if (!item) {
      return res.status(404).json({ message: 'Post not found!' })
    }
    res.status(200).json(item)
  })
}

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Item.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Item deleted')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
