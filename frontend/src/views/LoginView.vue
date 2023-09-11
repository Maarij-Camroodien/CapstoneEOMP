<template>
  <div>
    <div class="row">
      <div
        class=""
        id="formss"
        style="display: flex; justify-content: center; align-items: center"
      >
        <h1  class="headd">WELCOME BACK</h1>
      </div>
      <div class="">
        <center>
          <form class="custom-container container">
            <div class="contt">
                <h1 class="loginh" style="color: white;">LOGIN</h1>
            <div class="formcont">
                <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                ></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                v-model="payload.emailAdd"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                ></label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="payload.userPass"
                required
              />
            </div>
            <button
              @click.prevent="login"
              type="button"
              class="btn btn-primary"
            >
              Login
            </button>
            <p>Don't have an Account? <router-link to="/signup" class="signnn">SIGN UP</router-link></p>
            </div>
            </div>
          </form>
        </center>
      </div>
    </div>
    
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  },
  mounted() {
    console.log(cookies.get("LegitUser"));
  },
};
</script>

<style scoped>

label {
  font-family: "Taviraj", serif;
  font-size: 1.2rem;
  color: white;
}

/* .custom-container {
  max-width: 50rem;
} */

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
#btnn {
  color: red;
  border: 1px solid black;
  background-color: black;
  font-family: "Taviraj", serif;
  margin: 2px;
}

#btnn:hover {
  color: black;
  background-color: white;
}

.signnn {
    font-size: 1rem;
    text-decoration: none;
    color: red;
}

input {
  font-family: "Taviraj", serif;
  border: 1px solid black;
  width: 90%;
}

form {
  background-color: black;
  width: 40%;
  border: 1px solid black;
  border-radius: 1rem;
  height: 26rem;
  margin-top: 1rem;
}

p {
    color: white;
    margin-top: 1rem;
}
.formcont {
    margin-top: 1rem;
}

.contt {
    margin-top: 4rem;
}

.headd {
  font-size: 6rem;
}

#btnn {
  margin-top: 1rem;
}

#heading2 {
  font-size: 4rem;
}

.loginh {
    font-family: "Taviraj", serif;
}
@media screen and (max-width: 760px){
    form {
        width: 60%;
    }
}
</style>
<!-- <template>
    <div>
        <div class="container">
  <input id="register_toggle" type="checkbox">
  <div class="slider">
    <form class="form">
      <span class="title">Login</span>
      <div class="form_control">
        <input required="" class="input" type="text">
        <label class="label">Username</label>
      </div>
      <div class="form_control">
        <input required="" class="input" type="password">
        <label class="label">Password</label>
      </div>
      <button>Login</button>

      <span class="bottom_text">Don't have an account? <label class="swtich" for="register_toggle">Sign Up</label> </span>
    </form>
    <form class="form">
      <span class="title" >Sign Up</span>
      <div class="form_control">
        <input required="" class="input" type="text">
        <label class="label">Username</label>
      </div>
      <div class="form_control">
        <input required="" class="input" type="email">
        <label class="label">Email</label>
      </div>
      <div class="form_control">
        <input required="" class="input" type="password">
        <label class="label">Password</label>
      </div>
      <button >Sign Up</button>

      <span class="bottom_text">Already have an account? <label class="swtich" for="register_toggle">Sign In</label> </span>
    </form>

    
    </div>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container {
  width: 300px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background-color: #0e0e0e;
  box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
}

.container .slider {
  width: 200%;
  position: relative;
  transition: transform ease-out 0.3s;
  display: flex;
}

#register_toggle {
  display: none;
}

.container #register_toggle:checked + .slider {
  transform: translateX(-50%);
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 1.5em 3em;
  width: 50%;
}

.title {
  text-align: center;
  font-weight: 700;
  font-size: 2em;
  color:white;
}

form .form_control {
  width: 100%;
  position: relative;
  overflow: hidden;
}

form .form_control .label {
  position: absolute;
  top: 50%;
  left: 10px;
  transition: transform ease 0.2s;
  transform: translate(0%, -50%);
  font-size: 0.75em;
  user-select: none;
  pointer-events: none;
  color: #b0b0b0;
}

form .form_control .input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 5px;
  transition: box-shadow ease 0.2s;
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;
}

form .form_control .input:focus,
form .form_control .input:valid {
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
}

form .form_control .input:focus + .label,
form .form_control .input:valid + .label {
  transform: translate(-150%, -50%);
}

form button {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 5px;
  transition: box-shadow ease 0.1s;
  box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
}

form button:active {
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
}

.bottom_text {
  font-size: 0.65em;
  color:white;
}

.bottom_text .swtich {
  font-weight: 700;
  cursor: pointer;
 color:blue;
} -->
<!-- </style> -->