import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import {useCookies} from 'vue3-cookies'
import authUser from '@/services/AuthenticateUser'
import router from '@/router'
const caps= "https://capstoneeomp.onrender.com/"
// const caps= "http://localhost:3000/"
const {cookies} = useCookies()
const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

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
    editUser: null,
    cart: storedCart,
    products: [],
    removeFromCart: null
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
    addUser(state, user) {
      state.user = user
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
    editUsers(state, data) {
      state.editUser = data
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productIndex) {
      state.cart.splice(productIndex, 1);
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
    async fetchUser(context, userID) {
      try{
        const {data} = await axios.get(`${caps}user/${userID}`)
        context.commit("setUser", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async addProduct(context, prodData){
      try {
        const response = await axios.post(`${caps}product`, prodData)
        context.commit('addContent', response.data)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async addUser(context, userData){
      try {
        const response = await axios.post(`${caps}user`, userData)
        context.commit('addUser', response.data)
        location.reload()
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
        const response = await axios.patch(`${caps}product/${edprod.prodID}`, edprod)
        context.commit('editProducts', response.data)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async editUser(context, edUser){
      try {
        console.log(edUser)
        const response = await axios.patch(`${caps}user/${edUser.userID}`, edUser)
        context.commit('editUsers', response.data)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (await axios.post(`${caps}login`, payload)).data
        if(result) {
          context.commit("setUser", {result, msg});
          localStorage.setItem("user", JSON.stringify(result))
          cookies.set("LegitUser", {token, msg, result})
          authUser.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000
          })
          router.push({name: 'home'})
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000
          })
        }
      } catch (e) {
        context.commit("setMsg", "An error has occurred")
      }
    },

    async register(context, payload) {
      try {
        const {msg}  = (await axios.post
          (`${caps}user`, payload)).data
          if (msg) {
            sweet({
              title: "Registration",
              text: msg,
              icon: "success",
              timer: 2000,
            });
            context.dispatch("fetchUsers");
            router.push({ name: "login" });
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 2000,
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occured");
        }
  },
  async logOut(context) {
    context.commit("setUser")
    cookies.remove("LegitUser")
    const data = JSON.stringify(localStorage.getItem("user"));
    if (data) {
      localStorage.removeItem("user")
    }
    router.push({name : 'login'})
  },
  async addToCartAction(context, product) {
    context.commit('addToCart', product);
    localStorage.setItem('cart', JSON.stringify(context.state.cart));
  },
  async removeFromCartAction(context, productIndex) {
    context.commit('removeFromCart', productIndex);
  },
},
  modules: {
  }
})
