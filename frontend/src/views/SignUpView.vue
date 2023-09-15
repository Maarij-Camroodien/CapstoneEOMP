<template>
    <div>
        <div class="">
            <div class="">
                <h1 class="head">READY TO JOIN?</h1>
            </div>
            <div class="stuff">
                <div class=" forms">
                <form @submit.prevent="register">
                    <h1 class="signupp">SIGN UP</h1>
      <div class="mb-3">
        <label for="exampleInputfirstName1" class="form-label"></label>
        <input
          type="firstName"
          class="form-control"
          id="exampleInputfirstName1"
          aria-describedby="emailHelp"
          placeholder="Name"
          v-model="payload.firstName"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputlastName1" class="form-label"></label>
        <input
          type="lastName"
          class="form-control"
          id="exampleInputlastName1"
          aria-describedby="emailHelp"
          placeholder="Surname"
          v-model="payload.lastName"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputuserAge1" class="form-label"></label>
        <input
          type="userAge"
          class="form-control"
          id="exampleInputuserAge1"
          aria-describedby="emailHelp"
          placeholder="Age"
          v-model="payload.userAge"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputgender1" class="form-label"></label>
        <input
          type="gender"
          class="form-control"
          id="exampleInputgender1"
          aria-describedby="emailHelp"
          placeholder="Gender"
          v-model="payload.Gender"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"></label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email Address"
          v-model="payload.emailAdd"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"></label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          minlength="4"
          placeholder="Password"
          v-model="payload.userPass"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputuserProfile1" class="form-label"></label>
        <input
          type="userProfile"
          class="form-control"
          id="exampleInputuserProfile1"
          placeholder="Profile Image"
          v-model="payload.userProfile"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      payload: {
    firstName: "",
    lastName: "",
    userAge: "",
    Gender: "",
    emailAdd: "",
    userPass: "",
    userProfile: "https://i.postimg.cc/HntQPB1k/Feels-Okay-Man.webp"
          }
        }
  },
  methods: {
    register() {
      this.$store.dispatch('register', this.payload)
    }
  }
    }
</script>

<style scoped>

.btn {
  color: black;
  border: 1px solid white;
  background-color: white;
  font-family: "Taviraj", serif;
  margin: 2px;
}

.btn:hover {
  color: red;
  background-color: black;
  border: solid 1px black;
}

.head {
    font-size: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
}


form {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
}

.forms {
    background-color: black;
    border: 1px solid black;
    border-radius: 1rem;
    width: 50%;
}

.stuff {
    display: flex;
    justify-content: center;
}

.signupp {
    font-family: "Taviraj", serif;
    color: white;
}

@media screen and (max-width: 767.5px){
  }

</style>