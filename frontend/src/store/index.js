import { createStore } from 'vuex'
import axios from 'axios'
const caps= "https://capstoneeomp.onrender.com/"
// const caps= "http://localhost:3000/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    addContent: null,
    addUsers: null,
    shoes: null,
    tops: null,
    bottoms: null,
    editProduct: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    addContent(state, data) {
      state.addContent = data
    },
    addUsers(state, data) {
      state.addUsers = data
    },
    setDeleteP(state, data){
      state.products = data
    },
    setDeleteU(state, data){
      state.users = data
    },
    setShoes(state, shoes) {
      state.shoes = shoes
    },
    setTops(state, tops) {
      state.tops = tops
    },
    setBottoms(state, bottoms) {
      state.bottoms = bottoms
    },
    editProducts(state, data) {
      state.editProduct = data
    },
  },
  actions: {
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${caps}users`)
        context.commit("setUsers", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${caps}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async addProduct(context, prodData){
      try {
        const response = await axios.post(`${caps}product`, prodData)
        context.commit('addContent', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async addUser(context, userData){
      try {
        const response = await axios.post(`${caps}user`, userData)
        context.commit('addUsers', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUserFUNC(context, userID){
      try {
        const response = await axios.delete(`${caps}user/${userID}`)
        context.commit('setDeleteU', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProductFUNC(context, prodID){
      try {
        const response = await axios.delete(`${caps}product/${prodID}`)
        context.commit('setDeleteP', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    // async editProduct(context, prodData){
    //   try {
    //     const response = await axios.patch(`${caps}product/${prodData}`)
    //     context.commit('setUpdateProd', response.data)
    //     location.reload()
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async fetchShoes(context) {
      try{
        const {data} = await axios.get(`${caps}shoes`)
        context.commit("setShoes", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchTops(context) {
      try{
        const {data} = await axios.get(`${caps}tops`)
        context.commit("setTops", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchBottoms(context) {
      try{
        const {data} = await axios.get(`${caps}bottoms`)
        context.commit("setBottoms", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async editProduct(context, edprod){
      try {
        console.log(edprod)
        const response = await axios.put(`${caps}product/${edprod.prodID}`, edprod)
        context.commit('editProducts', response.data)
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
