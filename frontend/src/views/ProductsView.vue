<template>
    <div>
        <div>
         <h1><span style="color: black;">PRODUCTS</span></h1>
        </div>
        <div>
        <nav class="navbar navbar-expand">
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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FILTER PRICE
          </a>
    
          <ul class="dropdown-menu">
            <li><router-link to="/highest" class="dropdown-item">HIGHEST-LOWEST</router-link></li>
            <li><router-link to="/lowest" class="dropdown-item">LOWEST-HIGHEST</router-link></li>
            
            <!-- <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
          </ul>
        </li>
      </div>
    </div>
  </div>

</nav>
<div>
        <button class="btn" @click="sortByName" >Sort Name</button>
        <button class="btn" @click="sortByPrice">Sort Price</button>
        <div>
          <div>
            <input type="text" v-model="searchQuery" placeholder="Search..." style="width: 60%;">
            <button class="btn" @click="searchProducts">Search</button>
          </div>
        </div>
      </div> 
    </div>
        <div class="my-5 container" >   
            <div class="row" style="margin-top: 3rem;font-family: 'Merriweather', serif;" v-if="products">
      <div class="car col-12 col-sm-6 col-md-4 p-2" v-for="product in sortedProducts" :key="product.prodID">
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
                        <button class="btn" @click="addToCart(product)">Buy Now</button></span>
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
import sweet from 'sweetalert'
export default {
  components: {
   
  },
  computed: {
  products() {
    return this.$store.state.products;
  },
  sortedProducts() {
    let filteredProducts = this.products;
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.prodName.toLowerCase().includes(query)
      );
    }
    if (this.sortType === 'price') {
      return [...filteredProducts].sort((a, b) => a.amount - b.amount);
    } else if (this.sortType === 'name') {
      return [...filteredProducts].sort((a, b) =>
        a.prodName.localeCompare(b.prodName)
      );
    }
    return filteredProducts;
  }
},
    sortedProducts() {
      if (this.sortType === 'price') {
        return [...this.products].sort((a, b) => a.amount - b.amount);
      } else if (this.sortType === 'name') {
        return [...this.products].sort((a, b) =>
          a.prodName.localeCompare(b.prodName)
        );
      }
      return this.products;
    },
    sortedProducts() {
    let filteredProducts = this.products;
    // Apply search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.prodName.toLowerCase().includes(query)
      );
    }
    // Sort by selected type
    if (this.sortType === 'price') {
      return [...filteredProducts].sort((a, b) => a.amount - b.amount);
    } else if (this.sortType === 'name') {
      return [...filteredProducts].sort((a, b) =>
        a.prodName.localeCompare(b.prodName)
      );
    }
    return filteredProducts;
  },
  data() {
    return {
      sortType: '',
      searchQuery: ''
    };
  },
  methods: {
    sortByName() {
      this.sortType = 'name';
    },
    sortByPrice() {
      this.sortType = 'price';
    },
    searchProducts() {
      this.$store.commit('setSearchQuery', this.searchQuery);
    },
    addToCart(product) {
                console.log(product);
                if (product) {
                    this.$store.commit('addToCart', product)
                    localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
                    sweet({
                        title:"ADDED TO CART",
                        icon: 'success',
                        type:"success",
                        timer: 2000
                    })
                }else {
                    sweet({
                        title : "Error",
                        icon: "error",
                        type: "error",
                        timer: 2000
                    })
                }
            },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style scoped>

input {
    border: 3px solid black
}

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
    color: red;
    border-bottom: 2px solid red;
}

.btn {
  color: white;
  border: 1px solid black;
  background-color: black;
  font-family: 'Taviraj', serif;
  margin: 2px;
}

.btn:hover {
  color: red;
  background-color: white;
}


/* .car {
    border: 1px solid black;
    border-radius: 1rem;
} */
nav a.router-link-exact-active {
  border-bottom: 2px solid black
}
</style>