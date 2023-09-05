<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Edit</button>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel2">Edit the Collection</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="editForm" class="d-flex flex-column gap-5">
                    <input type="text" v-model="edprod.prodID" placeholder="id" name="" id="">
                    <input type="text" v-model="edprod.prodName" placeholder="name" name="" id="">
                    <input type="text" v-model="edprod.amount" placeholder="amount" name="" id="">
                    <input type="text" v-model="edprod.Category" placeholder="category" name="" id="">
                    <input type="text" v-model="edprod.prodUrl" placeholder="image" name="" id="">
                    <button type="submit" class="btn">Save Changes</button>
                   </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        data(){
    return{
        edprod:{
        prodID: "",
        prodName: "",
        amount: "",
        Category: "",
        prodUrl: ""
      }
    }
  },
  methods:{
          editForm(){
            this.$store.dispatch('editProduct', this.edprod)
          }
        }
    }
</script>

<style scoped>
.btn {
    color: white ;
    background-color: black;
  }
  .btn:hover {
    color: #c11111;
    background-color: white;
    border: black solid 2px;
  }

</style>