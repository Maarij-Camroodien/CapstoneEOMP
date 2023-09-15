<template>
    <div>
      <h1>PROFILE</h1>
        <div class="container">
          <div class="row">
          <div class="qqq col-12 col-md-6">
            <div class="card" v-if="user" style="width: 100%; height: 30rem; margin-top: 3rem;">
  <img :src="user.userProfile" class="card-img-top" :alt="user.firstName">
  <div class="card-body">
    <h5 class="card-title">ID: {{ user.userID }}</h5>
    <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
    <h5 class="card-text">{{ user.userRole }}</h5>
    <button class="btn" @click="logOut">Log Out</button>
    <!-- <h2 class="hs">DELETE YOUR ACCOUNT</h2> -->
    <div>
      <router-link to="/login" class="btn btn-dark" id="btns" @click="deleteUser(user.userID)" style="margin-top: 1rem;">Delete Account</router-link>
    </div>
  </div>
</div>
          </div>
<div class="qq col-12 col-md-6">
  <div class="stuff">
  <div>
  <div class="card" style="width: 100%; height: 35rem;">
    <h2 class="hqs">EDIT YOUR DETAILS</h2>
    <h3 class="hqss">ENTER USER ID WHEN EDITING</h3>
    <button class="btn" id="btnn"><EditProfile/></button>
    <h2 class="hqs">CHANGE PASSWORD</h2>
    <button class="btn" id="btnn"><ChangePass/></button>
  </div>
  </div>
</div>
</div>
  <!-- <div class="">
            <div class="card" style="width: 25rem; height: 20rem; display: flex; justify-content: center; align-items: center;">
              <h2>Edit Your Account</h2>
  <div class="card-body">
    <h3 class="card-title">Enter User ID When Editing</h3>
    <button class="btn"><EditProfile/></button>
  </div>
</div>
          </div>
          <div class="">
            <div class="card" style="width: 25rem; height: 20rem; display: flex; justify-content: center; align-items: center;">
              <h2>Change Your Password</h2>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <button class="btn"><ChangePass/></button>
    <h2>Delete Your Account</h2>
  </div>
</div>
          </div>
          <div class="">
            <div class="card" style="width: 25rem; height: 20rem; display: flex; justify-content: center; align-items: center;">
              <h2>Delete Your Account</h2>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <button class="btn"><EditProfile/></button>
  </div>
</div>
          </div> -->
      </div>
    </div>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import EditProfile from '@/components/EditProfile.vue'
import ChangePass from '@/components/ChangePass.vue'
    export default {
      components: {
        EditProfile,
        ChangePass
      },

    computed: {
    thisUser() {
      return this.$store.state.user;
    },
  },
    beforeCreate() {
    // this.$store.dispatch("fetchUser");
    },
    mounted() {
    console.log(cookies.get("LegitUser"));
    // this.$store.dispatch('fetchUser');
    },
    created() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        this.user = JSON.parse(storedUser)
      }

      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        this.$store.commit("setUser", data)
      }
    },
    methods: {
          logOut() {
            this.$store.dispatch("logOut")
          },
          deleteUser(userID) {
        this.$store.dispatch('deleteUserFUNC', userID);
        cookies.remove('LegitUser')
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
      },
        },
        
    }
</script>

<style scoped>

.row {
  background-color: black;
  border: 1px solid black;
  border-radius: 1rem;
}
.stuff {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hqs {
  margin-top: 3rem;
}

.hs {
  margin-top: 1rem;
}

/* .hqss {
} */

.qqq{
   border-right: 1px solid white;
}

img {
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
}

#btnn {
  padding: 0;
  margin: 0;
}

#btns {
  margin-bottom: 4rem;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: 1rem solid black;
  border-radius: 2rem;
  width: 30rem;
  margin-top: 1rem;
}

/* .car {
  display: flex;
  justify-content: center;
  align-items: center;
} */

h2 {
  font-family: 'Smythe', cursive;
}

h3 {
  font-family: 'Smythe', cursive;
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

.row {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 767px){
  .qqq {
    border-right: none;
    border-bottom: 1px solid white;
    width: 80%;
  }
}

</style>