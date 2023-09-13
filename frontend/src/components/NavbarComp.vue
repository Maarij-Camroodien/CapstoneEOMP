<template>
    <div>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">VINTG</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <router-link to="/" class="nav-link">HOME</router-link>
        <router-link to="/about" class="nav-link">ABOUT</router-link>
        <router-link to="/admin" class="nav-link" v-show="isAdmin">ADMIN</router-link>
        <router-link to="/products" class="nav-link">PRODUCTS</router-link>
        <router-link to="/contactus" class="nav-link">CONTACT US</router-link>
        <router-link to="/login" class="nav-link" v-if="!user">LOGIN</router-link>
        <router-link to="/signup" class="nav-link" v-if="!user">SIGN-UP</router-link>
        <!-- <router-link to="/login" class="nav-link" v-show="isAdminUser" @click="logOut">LOG OUT</router-link> -->
        <router-link to="/checkout" class="nav-link">CHECKOUT</router-link>
        <router-link to="/profile"><i class="bi bi-person-circle"></i></router-link>
      </div>
    </div>
  </div>
</nav> 
    </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
    export default {
        computed: {
          user() {
            return this.$store.state.user ||
            cookies.get('LegitUser')
          },
          result() {
          return this.user?.result
        },
        isAdmin() {
          return this.result?.userRole?.toLowerCase() === "admin"
        },
        isUser() {
          return this.result?.userRole?.toLowerCase() === "user"
        },
        isAdminUser() {
          return this.result?.userRole?.toLowerCase() === "admin" || this.result?.userRole?.toLowerCase() === "user"
        }
        },
        // methods: {
        //   logOut() {
        //     this.$store.dispatch("logOut")
        //   },
        //   hideNavLinks() {
        //   this.showNavLinks = false;
        // },
        // showNavLinks() {
        // this.showNavLinks = true;
        // },
//         data() {
//   return {
//     showNavLinks: true
//   }
// },
    }

</script>

<style scoped>
/* .navbar {
  border-bottom: 2px solid black;
} */

.navbar-brand {
    font-size: 2rem;
    font-family: 'Smythe', cursive;
}

.nav-link {
    font-size: 1rem;
    color: black;
    font-family: 'Taviraj', serif;
}

.nav-link:hover {
    color: red;
    border-bottom: 2px solid red;
}

.bi {
  font-size: 1.5rem;
}

.bi:hover {
  color: red;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid black
}

</style>