<template>
    <div class="p-5 md:py-12">
        <h1 class="font-bold text-orange">SNEAKER COMPANY</h1>
        <h1 class="text-3xl font-bold my-2 md:text-5xl text-blue1">Fall limited Edition Sneakers</h1>
        <p class="text-gray-500 my-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div class="flex md:block justify-between items-center">
            <div class="flex items-center md:mb-2">
                <h1 class="text-2xl md:text-3xl font-bold">${{ discountCost }}.00</h1>
                <span class="text-orange ml-3 bg-orange2 font-bold px-1 rounded-md">50%</span>
            </div>
            <span class="text-gray-300 line-through font-bold">${{ productCost }}.00</span>
        </div>
        <order />
    </div>
</template>

<script>
import order from './order.vue';
export default {
    components: {
        order
    },
    computed: {
        productCost() {
            return this.$store.state.productCost;
        },
        discountCost() {
            return this.$store.getters.discountCost;
        }
    }
}
</script>