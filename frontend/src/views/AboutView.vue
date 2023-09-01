<template>
  <div>
      <h1>About</h1>
      <div class="" style="width:100%">
      <div class="pic">
        <img class="imggs" src="https://content.asos-media.com/-/media/homepages/mw/2023/august/28-gbl/mw/mw_global_back_to_edit_3_desktophero_1258x600.jpg" style="width:90%; height:40rem">
       </div>
       <div class="centered" id="wordimg">
       <h5>Established in 2023, 'VINTG' embarked on a journey with a clear mission: to redefine the way you experience fashion. 
      We saw an opportunity to break away from mainstream trends and offer a diverse range of clothing that resonates with your unique personality.</h5>
       </div>
    </div>
    <h1 class="passion">Our Passion:</h1>
    <div class="stuff" style="width:100%">
      <div class="pic">
        <img class="imgss2" src="https://content.asos-media.com/-/media/homepages/ww/2023/august/28-gbl/ww/ww_global_back_to_edit_desktophero_1258x600.jpg" style="width:90%; height:40rem">
       </div>
       <div class="centered2" id="wordimg">
        <h5>At 'VINTG', we're passionate about preserving the elegance, charm, and artistry of bygone eras. Our journey began with a love for the
         craftsmanship and sophistication that defined the fashion of yesteryears. We believe that every piece of clothing is a canvas that reflects 
         the cultural essence of its time, and we're dedicated to sharing this passion with you.</h5>
       </div>
    </div>
       <!-- <div style="background-color: white; color: black;">
       </div>
         <div style="background-color: black; color: white;">
          <h1>Curated Selection:</h1>
         <h5>Each item in our collection is handpicked with meticulous care, ensuring that only the finest and most unique pieces make it to our racks. 
          From the opulent Roaring Twenties to the free-spirited grooves of the '70s, we've scoured the ages to bring you a diverse array of styles that stand the test of time.</h5>
         </div> -->
  </div>
</template>

<script>
  export default {
    
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

.passion {
  margin-top: 3rem;
}
/*


.about{
  background-image: url('https://i.postimg.cc/kXbkSXjC/wallpaperflare-com-wallpaper-16.jpg');
  height: 40rem;
  width: 100%;
}
*/
.stuff {
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  font-family: 'Phudu', cursive
}
.centered {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
}

.centered2 {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
}

@media only screen and (max-width: 950px){
	.imggs {
    width: 20%;
    content: url(https://i.postimg.cc/Dfqj9V3c/mw-global-back-to-edit-4-mobilehero-640x690.jpg)
  }

  .imgss2 {
    width: 60%;
    content: url(https://i.postimg.cc/3xBWVxtH/ww-global-back-to-edit-2-mobilehero-640x690.jpg)
  }
}

</style>