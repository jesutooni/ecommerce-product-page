<template>
    <div>
        <div @click="toggleLightbox" class="w-full h-screen flex justify-center items-center bg-black2">
            <div @click.stop="">
                <img @click="toggleLightbox" class="w-5 h-5 mb-4 cursor-pointer  ml-auto" src="../assets/images/icon-close2.svg" alt="">
                <div class="h-120 w-120 relative">
                    <img class="md:rounded-xl" :src="products[currentProduct]">
                    <div @click="prevProduct" class="w-12 h-12 flex justify-center items-center bg-white rounded-full absolute -left-6 top-1/2 cursor-pointer">
                        <img class="w-3" src="../assets/images/icon-previous.svg" alt="">
                    </div>
                    <div @click="nextProduct" class="w-12 h-12 flex justify-center items-center bg-white rounded-full absolute top-1/2 -right-6 cursor-pointer">
                        <img class="w-3" src="../assets/images/icon-next.svg" alt="">
                    </div>
                </div>
                <div class="w-120  mt-7">
                    <div class="w-4/5 mx-auto flex justify-between">
                        <img @click="changeProduct(index)" v-for="(product, index) in productThumbnails" :key="index" :class="`rounded-lg w-1/5 cursor-pointer border-2 border-transparent ${ index === currentProduct ? 'border-orange' : '' }`" :src="product" alt="">
                    </div>
                </div>
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
            this.$store.commit('toggleLightbox')
        }
    }
}
</script>