const db = require('../controller/connection')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const items = [
    {
      "title": "spoon",
      "imgURL": "https://www.surlatable.com/dw/image/v2/BCJL_PRD/on/demandware.static/-/Sites-shop-slt-master-catalog/default/dwd646efd3/images/large/3898707_01i_0318_s.jpg?sw=1350&sh=1000&sm=fit",
      "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
      "title": "Better spoons!",
      "imgURL": "https://www.libertytabletop.com/wp-content/uploads/2018/08/Flame-Sugar-spoon.jpg",
      "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
      "title": "Even Better spoons!",
      "imgURL": "https://images.crateandbarrel.com/is/image/Crate/SpoonsSet4SHF15",
      "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    }
  ]
  await Item.insertMany(items)
  console.log('created items')
}

const run = async () => {
  await main()
  db.close()
}

run()
