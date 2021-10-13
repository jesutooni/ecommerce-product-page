<template>
    <div class="w-full p-4 md:py-0 md:px-0 flex justify-between font-kumbh md:border-b md:border-gray-300">
        <div class="flex items-center">
            <img @click="toggleSidebar" class="mr-2.5 md:hidden" src="../assets/images/icon-menu.svg" alt="">
            <p class="text-3xl font-bold cursor-pointer text-blue1 pb-1.5">sneakers</p>
            <ul class="hidden md:flex text-gray-400">
                <li class="ml-10 cursor-pointer border-b-4 border-transparent duration-150 hover:border-orange py-8">Collections</li>
                <li class="ml-10 cursor-pointer border-b-4 border-transparent duration-150 hover:border-orange py-8">Men</li>
                <li class="ml-10 cursor-pointer border-b-4 border-transparent duration-150 hover:border-orange py-8">Women</li>
                <li class="ml-10 cursor-pointer border-b-4 border-transparent duration-150 hover:border-orange py-8">About</li>
                <li class="ml-10 cursor-pointer border-b-4 border-transparent duration-150 hover:border-orange py-8">Contact</li>
            </ul>
        </div>
        <div class="flex items-center">
            <div @click="toggleCart" class="w-6 h-6 mr-4 sm:mr-10 cursor-pointer relative">
                <img src="../assets/images/icon-cart.svg" alt="">
                <p v-if="cartProduct" class="absolute text-xs text-white rounded-full px-2 bg-orange -top-2 -right-2">{{ ordered }}</p>
            </div>
            <img class="w-6 h-6 sm:w-11 sm:h-11 cursor-pointer border-2 border-transparent duration-150 rounded-full hover:border-orange" src="../assets/images/image-avatar.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        ordered() {
        return this.$store.state.ordered;
        },
        cartProduct() {
            return this.$store.state.cartProduct;
        }        
    },
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        },
        toggleCart() {
            this.$store.commit('toggleCart');
        }
    }
}
</script>