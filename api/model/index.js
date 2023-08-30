const Users = require('./Users')
const Products = require('./Products')
const Orders = require('./Orders')
//Export all objects
module.exports = {
    users: new Users(),
    products: new Products(),
    orders: new Orders(),
}