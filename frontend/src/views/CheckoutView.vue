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
            <h5 class="card-text">R {{ $route.query.amount }}</h5>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>