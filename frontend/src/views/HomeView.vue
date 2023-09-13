<template>
  <div class="home">
      <!-- <div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-inner">
            <div class="carousel-item active" id="caral">
              <div class="row">
                <img src="https://i.postimg.cc/kXbkSXjC/wallpaperflare-com-wallpaper-16.jpg" class="col-sm-6 animate__animated animate__fadeInDown" alt="img1" loading="lazy">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s"><span style="color:white">"VINTG": TOPS</span>
                  <span><p>Dive into a world of timeless fashion with our handpicked selection of vintage Hoodies, Jersies and more</p><a class="btn" href="/products" role="button ">View Products</a></span>
                  </h2>
              </div>
            </div>
            <div class="carousel-item" id="caral">
              <div class="row">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s"><span style="color:white">"VINTG": KICKS</span>
                <span><p>Step back in time and elevate your style with our exquisite collection of vintage shoes</p></span></h2>
                <img src="https://i.postimg.cc/HsyV7d01/wallpaperflare-com-wallpaper-15.jpg" class="col-sm-6 animate__animated animate__fadeInDown" alt="img2" loading="lazy">
              </div>
            </div>
            <div class="carousel-item" id="caral">
              <div class="row">
                <img src="https://i.postimg.cc/SR9p7w01/wallpaperflare-com-wallpaper-18.jpg" class="col-sm-6 d-block animate__animated animate__fadeInDown" alt="img3" loading="lazy">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s"> <span style="color:white">"VINTG": BOTTOMS</span>
                <span><p>Dive into a world of timeless fashion with our handpicked selection of vintage Jeans</p></span></h2>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> -->
      <h1>VINTG</h1>
      <h3 class="slogan">Step Back in Time, Step Up Your Style</h3>

      <div class="cont">
        <div class="imgg1">
        <div class="row">
                <img src="https://i.postimg.cc/kXbkSXjC/wallpaperflare-com-wallpaper-16.jpg" class="col-md-6 animate__animated animate__fadeInDown" alt="img1" loading="lazy">
                <h2 class="col-md-6 animate__animated animate__fadeInDown animate__delay-1s"><span style="color:white">"VINTG": TOPS</span>
                  <span><p>Dive into a world of timeless fashion with our handpicked selection of vintage Hoodies, Jersies and more</p><router-link to="/tops" class="btn" role="button ">View Tops</router-link></span>
                  </h2>
              </div>
      </div>

      <div class="imgg1" id="immg1">
        <div class="row">
                <h2 class="col-md-6 animate__animated animate__fadeInDown animate__delay-3s"><span style="color:white">"VINTG": KICKS</span>
                <span><p>Step back in time and elevate your style with our exquisite collection of vintage shoes</p><router-link to="/shoes" class="btn" role="button ">View Kicks</router-link></span></h2>
                <img src="https://i.postimg.cc/HsyV7d01/wallpaperflare-com-wallpaper-15.jpg" class="col-md-6 animate__animated animate__fadeInDown animate__delay-2s" alt="img2" loading="lazy">
              </div>
      </div>
      <div class="imgg1-1">
        <div class="row">
          <img src="https://i.postimg.cc/HsyV7d01/wallpaperflare-com-wallpaper-15.jpg" class="col-md-6 animate__animated animate__fadeInDown animate__delay-2s" alt="img2" loading="lazy">
                <h2 class="col-md-6 animate__animated animate__fadeInDown animate__delay-3s"><span style="color:white">"VINTG": KICKS</span>
                <span><p>Step back in time and elevate your style with our exquisite collection of vintage shoes</p><router-link to="/shoes" class="btn" role="button ">View Kicks</router-link></span></h2>
              </div>
      </div>

      <div class="imgg1">
        <div class="row">
                <img src="https://i.postimg.cc/SR9p7w01/wallpaperflare-com-wallpaper-18.jpg" class="col-md-6 d-block animate__animated animate__fadeInDown animate__delay-4s" alt="img3" loading="lazy">
                <h2 class="col-md-6 animate__animated animate__fadeInDown animate__delay-5s"> <span style="color:white">"VINTG": BOTTOMS</span>
                <span><p>Dive into a world of timeless fashion with our handpicked selection of vintage Jeans</p><router-link to="/bottoms" class="btn" role="button ">View Bottoms</router-link></span></h2>
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
h1{
  font-family: 'Smythe', cursive;
}

.imgg1-1{
  display: none;
}

.slogan {
  font-family: 'Taviraj', serif;
}

#caral {
  background-color: black;
}

p{
  font-family: 'Taviraj', serif;
  font-size: 60%;
  color: white;
  }

  h2 {
  font-family: 'Smythe', cursive;
  font-size: 2rem;
  color: white;
  padding-top: 7.5rem;
  /* display: flex;
  justify-content: center;
  align-items: center */
}

.row {
  background-color: black;
}

.btn {
  color: black;
  background-color: white;
  font-family: 'Taviraj', serif;
}


.btn:hover {
  color: red;
  background-color: black;
}


@media screen and (max-width: 784px){
  .cont .imgg1-1{
  display: flex;
  width: 100%;
  padding: 0;
}

#immg1{
  display: none;
  width: 100%;
  padding: 0;
}

h2{
  margin-top: 0;
  height: 20rem;
  width: 100%;
  padding-top: 5rem;
}
}

@media screen and (max-width: 768px){
  .imgg1-1{
  display: flex;
}

#immg1{
  display: none;
}

h2{
  margin-top: 0;
  height: 20rem;
  width: 100%;
  padding-top: 5rem;
}
}

@media screen and (max-width: 1100px){
  h2 {
    padding-top: 3rem;
  }
} 
@media screen and (max-width: 1190px){
  h2 {
    padding-top: 4rem
  }
}



</style>
