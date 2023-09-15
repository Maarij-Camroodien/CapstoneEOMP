<template>
    <div>
      <div class="row" style="margin-top: 3rem display: flex; justify-content: center; align-items: center;">
        <div
        >
          <img
            :src="$route.query.img"
            :alt="$route.query.img"
            style="width:14rem;height:18rem;"
            loading="lazy"
          />
          <div class="card-body">
            <br />
            <h5 class="card-title">{{ $route.query.prodName }}</h5>
            <h5 class="card-title">{{ $route.query.Category }}</h5>
            <h6 class="card-text">R {{ $route.query.amount }}</h6>
            <!-- <button class="btn" @click="addToCart(product)">Buy Now</button><br>  -->
            <router-link to="/products" class="btn">Continue Shopping</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import sweet from 'sweetalert'
  export default {
    props: ["prodID"],
    computed: {
      product () {
        return this.$store.state.product
      }
    },
    mounted() {
            this.$store.dispatch('fetchProducts')
        },
    methods: {
            addToCart(product) {
                console.log(product);
                if (product) {
                    this.$store.commit('addToCart', product)
                    localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
                    sweet({
                        title:"ADDED TO CART",
                        // text: "",
                        type:"success",
                        timer: 2000
                    })
                }else {
                    sweet({
                        title : "NOT ADDED TO CSRT",
                        text: "",
                        type: "error",
                        timer: 2000
                    })
                }
            }
        }
  }
  </script>
  
  <style scoped>

h5 {
    font-family: 'Taviraj', serif;
    margin-bottom: 1rem;
}

h6 {
    font-family: 'Taviraj', serif;
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

.row {
  margin-bottom: 6rem;
  margin-top: 2rem;
}

</style>