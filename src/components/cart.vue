<template>
    <div v-if="cart">
        <div class="bg-white h-auto shadow-2xl absolute top-20 inset-x-2 xs:w-90 xs:left-auto rounded-lg">
            <h1 class="p-5 font-bold">Cart</h1>
            <hr>
            <div class="">
                <p v-if="!cartProduct" class="text-blue2 font-bold flex justify-center py-20">Your cart is empty.</p>
                <div v-if="cartProduct" class="p-5">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <img class="w-12 h-12 rounded-md" src="../assets/images/image-product-1-thumbnail.jpg" alt="">
                            <div class="ml-4 text-lg text-blue2">
                                <p>Autumn Limited Edition...</p>
                                <p>${{ discountCost }}.00 x {{ ordered }} <span class="font-bold text-black text-xl">${{ totalCost }}.00</span></p>
                            </div>
                        </div>
                        <img @click="cartProductDelete" class="cursor-pointer" src="../assets/images/icon-delete.svg" alt="">
                    </div>
                    <div class="w-full bg-orange text-white text-center p-5 rounded-xl font-semibold mt-6 cursor-pointer">
                        <h1>Checkout</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
        return this.$store.state.cart;
        },
        cartProduct() {
            return this.$store.state.cartProduct;
        },
        count() {
            return this.$store.state.count;
        },
        discountCost() {
            return this.$store.getters.discountCost;
        },
        totalCost() {
            return this.discountCost * this.ordered;
        },
        ordered() {
            return this.$store.state.ordered;
        }
    },
    methods: {
        cartProductDelete() {
            this.$store.commit('cartProductDelete');
        }
    }
}
</script>