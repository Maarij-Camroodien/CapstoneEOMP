<template>
    <div>
      <h1>Shopping Cart</h1>
      <div class="stuff col-12 col-md-6">
        <ul class="row">
        <li v-for="item in cart" :key="item.prodID">
          <div class="row">
            <img :src="item.prodUrl">
            <p>{{ item.prodName }} - R {{ item.amount }}</p>
            <button class="btn" @click="removeFromCart(index)">Remove</button>
          </div>
        </li>
      </ul>
      </div>
    </div>
</template>

<script>
    export default {
      computed: {
    cart() {
      return this.$store.state.cart;
    },
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

img {
  width: 14rem;
  height: 18rem;
  display: flex;
  justify-content: center;
}
.btns {
  margin-top: 1rem;
}

.btn {
  color: white;
  border: 1px solid black;
  background-color: black;
  font-family: 'Taviraj', serif;
  margin: 2px;
}

.car {
  margin-top: 1rem;
}

.btn:hover {
  color: red;
  background-color: white;
}

ul {
    list-style: none;
}

/* .row {
  float: left;
} */
</style>