<template>
    <div class="container" style="display: flex; justify-content: center; align-items: center;">
      <div class="row" style="width: 50%; border: 2px solid black; border-radius: 1rem;">
        <div
        class="col-6" style="margin-bottom: 6rem">
          <img
            :src="$route.query.img"
            :alt="$route.query.img"
            style="width:20rem;height:26rem;"
            loading="lazy"
          />
        </div>
        <div class="col-6">
            <div class="card-body" style="width: 50%; margin-top: 2rem;">
            <br />
            <h2 class="card-title">{{ $route.query.prodName }}</h2>
            <h3 class="card-title">{{ $route.query.Category }}</h3>
            <h5 class="card-text">R {{ $route.query.amount }}</h5>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["prodID"],
    created() {
      this.$store.dispatch('fetchProduct', this.prodID)
    },
    computed: {
      product () {
        return this.$store.state.product
      }
    }
  }
  </script>
  
  <style scoped>

.card-title, .card-text {
    font-family: 'Taviraj', serif;
    margin-bottom: 1rem;
}

</style>