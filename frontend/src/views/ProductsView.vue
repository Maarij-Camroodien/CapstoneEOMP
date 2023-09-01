<template>
    <div>
        <div>
         <h1><span style="color: black;">PRODUCTS</span></h1>
        </div>
        <div>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <router-link to="/products" class="nav-link">ALL</router-link>
        <router-link to="/shoes" class="nav-link">KICKS</router-link>
        <router-link to="/tops" class="nav-link">TOPS</router-link>
        <router-link to="/bottoms" class="nav-link">BOTTOMS</router-link>
      </div>
    </div>
  </div>
</nav> 
    </div>
        <div class="my-5 container" >   
            <div class="row" style="margin-top: 3rem;font-family: 'Merriweather', serif;" v-if="products">
      <div class="car col-12 col-sm-6 col-md-4 p-2" v-for="product in products" :key="product.prodID">
                  <img :src="product.prodUrl" :alt="product.prodName" style="width:14rem;height:18rem;" loading="lazy">
                  <div class="card-body">
                      <br>
                      <h5 class="card-title">{{ product.prodName }}</h5>
                      <h5 class="card-title">{{ product.Category }}</h5>
                      <p class="card-text">R {{ product.amount }}</p>
                      <router-link :to=
                      "{name: 'single',
                      params: {id: product.prodID},
                      query: {
                          prodName: product.prodName,
                          Category: product.Category,
                          img: product.prodUrl,
                          amount: product.amount,
                        }
                    }" class="btn">View More</router-link><span>
                        <router-link :to=
                      "{name: 'single',
                      params: {id: product.prodID},
                      query: {
                          prodName: product.prodName,
                          Category: product.Category,
                          img: product.prodUrl,
                          amount: product.amount,
                        }
                    }" class="btn">Buy Now</router-link></span>
                </div>
            </div>
        </div>
        <!-- <div class="else" v-else>
           <SpinnerVue/>
        </div>    -->
            </div>
        </div>  
</template>

<script>
    export default {
        components: {
     },
        computed: {
            products(){
                return this.$store.state.products
            },
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        }
        
    }
</script>

<style scoped>

h5 {
    font-family: 'Taviraj', serif;
    margin-bottom: 1rem;
}

p {
    font-family: 'Taviraj', serif;
}

.nav-link {
    font-size: 1rem;
    color: black;
    font-family: 'Taviraj', serif;
}

.nav-link:hover {
    color: brown;
}

.btn {
  color: white;
  border: 1px solid black;
  background-color: black;
  font-family: 'Taviraj', serif;
  margin: 2px;
}

.btn:hover {
  color: brown;
  background-color: white;
}

/* .car {
    border: 1px solid black;
    border-radius: 1rem;
} */
</style>