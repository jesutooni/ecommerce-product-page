<template>
    <div class="md:flex mt-5">
        <div class="w-full md:w-1/2 mr-4 h-12 flex justify-between items-center bg-blue4 p-2.5 rounded-lg">
            <img @click="reduceCount" class="cursor-pointer md:p-2" src="../assets/images/icon-minus.svg" alt="">
            <span class="font-bold text-xl">{{ count }}</span>
            <img @click="increaseCount" class="cursor-pointer md:p-1" src="../assets/images/icon-plus.svg" alt="">
        </div>
        <div @click="showCartProduct" class="w-full h-12 mt-4 md:mt-0 flex justify-center items-center bg-orange p-2.5 rounded-lg text-white cursor-pointer">
            <img class="mr-5 h-4" src="../assets/images/icon-cart2.svg" alt="">
            <p>Add to cart</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        increaseCount() {
            this.$store.commit('increaseCount');
        },
        reduceCount() {
            this.$store.commit('reduceCount');
        },
        showCartProduct() {
            this.$store.commit('showCartProduct');
        }
    }
}
</script>