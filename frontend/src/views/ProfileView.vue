<template>
    <div>
        <div class="container">
          <div class="row">
          <div class="card col-12 col-md-6" v-if="user" style="width: 30rem; height: 30rem; display: flex; justify-content: center; align-items: center;">
  <img :src="user.userProfile" class="card-img-top" :alt="user.firstName">
  <div class="card-body">
    <h5 class="card-title">ID: {{ user.userID }}</h5>
    <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
    <h5 class="card-text">{{ user.userRole }}</h5>
    <button class="btn" @click="logOut">Log Out</button>
  </div>
</div>
<div class="stuff col-12 col-md-6">
  <div>
  <div class="card" style="width: 30rem%; height: 40rem;">
    <h2 class="hqs">Edit Your Details</h2>
    <h3 class="hqss">Enter User ID When Editing</h3>
    <button class="btn" id="btnn"><EditProfile/></button>
    <h2 class="hqs">Change Password</h2>
    <button class="btn" id="btnn"><ChangePass/></button>
    <h2 class="hqs">Delete Your Account</h2>
    <router-link to="/login" class="btn btn-dark" id="btns" @click="deleteUser(user.userID)">Delete</router-link>
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
    this.$store.dispatch("fetchUser");
    },
    mounted() {
    console.log(cookies.get("LegitUser"));
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
      },
        },
        
    }
</script>

<style scoped>
.stuff {
  display: flex;
  justify-content: center;
}
.hqs {
  font-family: 'Taviraj', serif;
  margin-top: 1rem;
  height: 12vh;
}

.hqss {
  font-family: 'Taviraj', serif;
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


.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: 1rem solid black;
  border-radius: 2rem;
  width: 30rem;
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

</style>