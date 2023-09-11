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
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["prodID"],
    computed: {
      product () {
        return this.$store.state.product
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

</style>