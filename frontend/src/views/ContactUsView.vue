<template>
  
    <div class="row">
        <div class="col-12 col-md-6 conts">
        <h1>CONTACT INFO:</h1>
          <div class="card contactinf">
            <ul class="list-group list-group-flush">
              <h5 class="itemss list-group-item">
                Email: VINTG@gmail.com
              </h5>
              <h5 class="itemss list-group-item">Cell: +2782716507</h5>
              <h5 class="itemss list-group-item">
                Address: Cape Town, Western Cape
              </h5>
              <!-- <h5 class="itemss list-group-item">Instagram: maarij_camroodien <a href="https://www.instagram.com/maarij_camroodien/" target="_blank"><i class="bi bi-instagram"></i></a></h5>
              <h5 class="itemss list-group-item">Github: Maarij-Camroodien <a href="https://github.com/Maarij-Camroodien" target="_blank"><i class="bi bi-github"></i></a></h5>
              <h5 class="itemss list-group-item">LinkedIn: Ma'arij Camroodien <a href="https://www.linkedin.com/in/ma-arij-camroodien-384525276/" target="_blank"><i class="bi bi-linkedin"></i></a></h5> -->
            </ul>
          </div>
        </div>
        <div class="contt col-12">
            <h1>CONTACT US</h1>
          <form action="https://formspree.io/f/mnqkqnag" method="POST">
            <div class="mb-3">
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
            <div class="mb-3">
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
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@gmail.com"
                name="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Your Message</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>    
            <button class="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
  </template>
  
  <script>
  export default {

  }
  </script>
  
  <style scoped>
  h5 {
    font-family: 'Taviraj', serif;
  }

  label {
    font-family: 'Taviraj', serif;
    font-size: 1.2rem;
  }

  input, textarea {
    font-family: 'Taviraj', serif;
    border: 1px solid black;
  }
  .contactinf {
    width: 100%;
    border: solid 1px black;
    margin-bottom: 4rem;
  }
  
  .itemss {
    color: black;
    border: solid black 1px;
    margin: 0;
  }

  .contt {
    width: 50%;
  }
  
  /* .subtn:hover {
    color: purple;
    background-color: black;
  }
  
  .subtn {
    color: black;
    border: none;
    border-radius: 0.3rem;
    height: 2rem;
    width: 8rem;
    font-weight: bold; 
  } */

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
  
  h1{
      margin-bottom: 2rem;
  }

  form {
    width: 100%;
  }

  .conts {
    margin-top: 8rem;
  }

  @media screen and (max-width: 767px){
    .contt {
        width: 100%;
    }
  }
  </style>