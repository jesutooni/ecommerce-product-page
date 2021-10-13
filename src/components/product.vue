<template>
    <div class="relative">
        <div class="h-80 md:h-auto md:w-4/5 overflow-hidden relative">
            <img @click="toggleLightbox" class="md:rounded-xl cursor-pointer" :src="products[currentProduct]" alt="">
            <div class="w-8 h-8 md:hidden flex justify-center items-center bg-white rounded-full absolute left-4 top-1/2">
                <img @click="prevProduct" class="w-2" src="../assets/images/icon-previous.svg" alt="">
            </div>
            <div class="w-8 h-8 md:hidden flex justify-center items-center bg-white rounded-full absolute top-1/2 right-4">
                <img @click="nextProduct" class="w-2" src="../assets/images/icon-next.svg" alt="">
            </div>
        
            <div class="w-full hidden md:flex justify-between mt-8">
                <img @click="changeProduct(index)" v-for="(product, index) in productThumbnails" :key="index" :class="`rounded-lg w-1/5 cursor-pointer border-transparent border-2 ${ index === currentProduct ? 'border-orange opacity-60' : '' }`" :src="product" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        productThumbnails() {
            return this.$store.state.productThumbnails;
        }
    },
    data() {
        return {
            currentProduct: 0
        }
    },
    methods: {
        nextProduct() {
            this.currentProduct++;
            if(this.currentProduct > this.products.length - 1) {
                this.currentProduct = 0;
            }
        },
        prevProduct() {
            this.currentProduct--;
            if(this.currentProduct < 0) {
                this.currentProduct = this.products.length - 1;
            }
        },
        changeProduct(index) {
            this.currentProduct = index;
        },
        toggleLightbox() {
            this.$store.commit('toggleLightbox');
        }
    }
}
</script>

