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
        <router-link to="/admin" class="nav-link">ADMIN</router-link>
        <router-link to="/products" class="nav-link">PRODUCTS</router-link>
        <router-link to="/contactus" class="nav-link">CONTACT US</router-link>
        <router-link to="/login" class="nav-link">LOGIN</router-link>
        <router-link to="/signup" class="nav-link">SIGN-UP</router-link>
        <router-link to="/checkout" class="nav-link">CHECKOUT</router-link>
      </div>
    </div>
  </div>
</nav> 
    </div>
</template>

<script>
    export default {
        
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
    color: brown;
}


</style>