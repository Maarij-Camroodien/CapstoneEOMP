<template>
    <div>
      <h1>Admin</h1>
        <h2>Products</h2>
        <button class="btn"><AddProduct/></button>
        <div class="table-responsive" style="margin-top: 1rem" >
          <table class="table" >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.productID">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>R{{ product.amount }}</td>
                <td>{{ product.Category }}</td>
                <td>
                  <img :src="product.prodUrl" :alt="product.prodName" style="width: 5rem; height: 6rem" loading="lazy">
                </td>
                <td>
                    <button class="btn"><EditProduct/></button>
                </td>
                <td>
                  <button class="btn btn-dark" id="btns" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      <h2>Users</h2>
      <button class="btn"><AddUser/></button>
      <div class="table-responsive" style="margin-top: 1rem">
        <table class="table" v-if="products">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Gender</th>
              <th>User Role</th>
              <th>Email</th>
              <!-- <th>Password</th> -->
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <!-- <td>{{ user.userPass }}</td> -->
              <td>
                <img :src="user.userProfile" :alt="user.userName" style="width: 7rem; height: 7rem; border-radius: 50%" loading="lazy">
              </td>
              <td><button class="btn"><EditUser/></button></td>
              <td>
                <button class="btn btn-dark" id="btns" @click="deleteUser(user.userID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="else" v-else>
          <Spinner/>
        </div> -->
      </div>
    </div>
  </template>
  <script>
  import AddProduct from '@/components/AddProduct.vue';
  import AddUser from '@/components/AddUser.vue';
  import EditProduct from '@/components/EditProduct.vue';
  import EditUser from '@/components/EditUser.vue';
//   import Spinner from '@/components/SpinnerVue.vue';
  export default {
    components: {
      AddProduct,
      AddUser,
      EditProduct,
      EditUser
    //   Spinner
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      users() {
        return this.$store.state.users;
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
      this.$store.dispatch('fetchUsers');
    },
    methods: {
      deleteUser(userID) {
        this.$store.dispatch('deleteUserFUNC', userID);
      },
      deleteProduct(prodID) {
        this.$store.dispatch('deleteProductFUNC', prodID);
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    margin-top: 2rem;
    font-family: 'Smythe', cursive;
  }
  h1 {
    margin-top: 2rem;
  }

  #btns {
  color: white;
  border: 1px solid black;
  background-color: black;
  font-family: 'Taviraj', serif;
  margin: 2px;
}

#btns:hover {
  color: red;
  background-color: white;
}
  </style>
  