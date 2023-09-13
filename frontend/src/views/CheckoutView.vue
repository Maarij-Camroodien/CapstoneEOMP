<template>
    <div>
      <h1>Shopping Cart</h1>
      <!-- <div class="stuff col-12">
        <ul class="row main">
        <li v-for="item in cart" :key="item.prodID">
          <div class=" sec">
            <img :src="item.prodUrl">
            <h3>{{ item.prodName }}</h3>
            <p>R {{ item.amount }}</p>
            <button class="btn" @click="removeFromCart(index)">Remove</button>
          </div>
        </li>
      </ul>
      </div>
      amount : {{ getTotal }} -->
      <div class="container" v-for="item in cart" :key="item.prodID">
        <div class="card" >
  <div class="row g-0" >
    <div class="col-12 col-md-6">
      <img :src="item.prodUrl">
    </div>
    <div class="col-12 col-md-6">
      <div class="card-body">
        <h5 class="card-title">{{ item.prodName }}</h5>
        <p class="card-text" style="color: black;">R {{ item.amount }}</p>
        <button class="btn" @click="removeFromCart(index)">Remove</button>
        <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
      </div>
    </div>
  </div>
</div>
      </div>
      <div class="container" id="total">
        <h1 class="totals">Total : {{ getTotal }}</h1>
      </div>
      <h1>Enter Card Detials</h1>
      <div class="divs">
        <div class="form row">
        <form action="https://formspree.io/f/mnqkqnag" method="POST">
            <div style="display: flex; justify-content: center;">
              <div class="mb-3 col-md-6">
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Name"
                name="name"
                required
              />
            </div>
            <div class="mb-3 col-md-6" style="margin-left: 1rem;">
              <label for="exampleFormControlInput1" class="form-label"
                >Surname</label
              >
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Surname"
                name="surname"
                required
              />
            </div>
          </div>
          <div style="display: flex; justify-content: center;">
            <div class="mb-3 col-md-9">
              <label for="exampleFormControlInput1" class="form-label"
                >Card Number</label
              >
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="xxx-xxx-xxx-xxx"
                name="email"
                required
              />
            </div>
            <div class="mb-3 col-md-3" style="margin-left: 1rem;">
              <label for="exampleFormControlInput1" class="form-label"
                >CVV</label
              >
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="xxx"
                name="email"
                required
              />  
            </div>
          </div> 
          <h5 style="color: white;">Expiry date</h5>
          <div style="display: flex; justify-content: center;">
            <div class="mb-3 col-md-9">
              <label for="exampleFormControlInput1" class="form-label"
                ></label
              >
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Month"
                name="email"
                required
              />
            </div>
            <div class="mb-3 col-md-3" style="margin-left: 1rem;">
              <label for="exampleFormControlInput1" class="form-label"
                ></label
              >
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Year"
                name="email"
                required
              />  
            </div>
          </div>   
            <button class="btn" id="btnn" type="submit">Checkout</button>
          </form>
      </div>
      </div>
    </div>
</template>

<script>
import sweet from 'sweetalert'
import { mapGetters } from 'vuex';
    export default {
      computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  computed: {
            ...mapGetters(["getTotal"]),
            cart() {
                return this.$store.state.cart
            }
        },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCartAction', index);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    // updateQuantity(index) {
    //   const item = this.cart[index];
    //   this.$store.dispatch('addToCartAction', { product: item, quantity: item.quantity });
    //   localStorage.setItem('cart', JSON.stringify(this.cart));
    // },
    // redirectToCheckout() {
    //   this.$router.push({ name: 'checkout' });
    // }
  },
    }
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
}

img {
  width: 14rem;
  height: 18rem;
}

.btn {
  color: white;
  border: 1px solid black;
  background-color: black;
  font-family: 'Taviraj', serif;
  margin: 2px;
}

.card {
   width: 60%;
}

.card-body {
  margin-top: 3rem;
}
/* .sec{
  width: 80%;
  align-items: center;
  border: 3px solid red;
}
li {
  display: flex;
  justify-content: center;
}
.sec .btn{
  display: flex;
  justify-content: center;
  width: 5rem;

} */

.btn:hover {
  color: red;
  background-color: white;
}

ul {
    list-style: none;
}

.totals {
  margin: 1rem;
  margin-bottom: 5rem;
  border-bottom: 2px solid black;
}

#total {
  border-bottom: 2px solid black;
}


.form {
  background-color: black;
  display: flex;
  justify-content: center;
  width: 40%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
}

input {
  width: 100%;
  font-family: 'Taviraj', serif;
}

h5 {
  font-family: 'Taviraj', serif;
}

.divs {
  display: flex;
  justify-content: center;
}

input[type="number"]::-webkit-outer-spin-button, 
	input[type="number"]::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
  label {
    color: white;
    float: left;
    font-family: 'Taviraj', serif;
  }
/* .stuff{
  display: flex;
  justify-content: center;
} */

/* .row {
  float: left;
} */
</style>