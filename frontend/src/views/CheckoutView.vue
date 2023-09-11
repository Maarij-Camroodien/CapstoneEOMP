<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.prodID">
          <img :src="item.prodUrl">
          {{ item.prodName }} - R {{ item.amount }}
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
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
    updateQuantity(index) {
      const item = this.cart[index];
      this.$store.dispatch('addToCartAction', { product: item, quantity: item.quantity });
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    redirectToCheckout() {
      this.$router.push({ name: 'checkout' });
    }
  },
    }
</script>

<style scoped>

img {
  width: 14rem;
  height: 18rem;
}

</style>