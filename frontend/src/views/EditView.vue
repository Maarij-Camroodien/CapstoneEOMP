<template>
    <div>
        <!-- {{ this.$router.params }} -->
        <!-- <EditProduct :prodId="prodId"/> -->
        <EditProduct :prodId="prodId"/>
    </div>
</template>

<script>
import EditProduct from '@/components/EditProduct.vue';
    export default {
        data() {
            return {
                // prodId: 1
            }
        },
        // props: ['prodID'],
        components: {
            EditProduct
        },
    }
</script>

<style scoped>

</style>