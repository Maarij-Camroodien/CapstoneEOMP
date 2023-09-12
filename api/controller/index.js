const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
const {users, products, orders} = require('../model')

//User Router

routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req,res)
})
routes.post('/user', bodyParser.json(),(req, res)=>{
    users.register(req ,res)
})
routes.put('/user/:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(),(req, res)=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id',(req ,res)=>{
    users.deleteUser(req, res)
})
routes.post('/login', bodyParser.json(), (req, res)=>{
    users.login(req, res)
})


//Products Router


routes.get('/products', (req, res)=>{
    products.fetchProducts(req, res)
})
routes.get('/product/:id', (req, res)=>{
    products.fetchProduct(req,res)
})
routes.post('/product', bodyParser.json(),(req, res)=>{
    products.registerProduct(req ,res)
})
routes.put('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
routes.patch('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
routes.delete('/product/:id',(req ,res)=>{
    products.deleteProduct(req, res)
})
routes.get('/shoes', (req, res)=>{
    products.fetchShoes(req,res)
})
routes.get('/tops', (req, res)=>{
    products.fetchTops(req,res)
})
routes.get('/bottoms', (req, res)=>{
    products.fetchBottoms(req,res)
})
routes.get('/lowest', (req, res)=>{
    products.fetchPriceAsc(req,res)
})
routes.get('/highest', (req, res)=>{
    products.fetchPriceDesc(req,res)
})

//Orders Router


routes.get('/orders', (req, res)=>{
    orders.fetchOrders(req, res)
})
routes.get('/order/:id', (req, res)=>{
    orders.fetchOrder(req,res)
})
routes.post('/order', bodyParser.json(),(req, res)=>{
    orders.registerOrder(req ,res)
})
routes.put('/order/:id', bodyParser.json(),(req, res)=>{
    orders.updateOrders(req, res)
})
routes.patch('/order/:id', bodyParser.json(),(req, res)=>{
    orders.updateOrders(req, res)
})
routes.delete('/order/:id',(req ,res)=>{
    orders.deleteOrders(req, res)
})


module.exports = {
    express,
    routes
    
}