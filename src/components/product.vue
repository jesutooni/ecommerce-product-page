<template>
    <div>
        <div class="h-80 md:h-auto md:w-4/5 overflow-hidden relative">
            <img class="md:rounded-xl" :src="products[currentProduct]" alt="">
            <div class="w-8 h-8 md:hidden flex justify-center items-center bg-white rounded-full absolute left-4 top-1/2">
                <img @click="prevProduct" class="w-2" src="../assets/images/icon-previous.svg" alt="">
            </div>
            <div class="w-8 h-8 md:hidden flex justify-center items-center bg-white rounded-full absolute top-1/2 right-4">
                <img @click="nextProduct" class="w-2" src="../assets/images/icon-next.svg" alt="">
            </div>
        
            <div class="w-full hidden md:flex justify-between mt-8">
                <img class="rounded-lg w-1/5 cursor-pointer" src="../assets/images/image-product-1-thumbnail.jpg" alt="">
                <img class="rounded-lg w-1/5 cursor-pointer" src="../assets/images/image-product-2-thumbnail.jpg" alt="">
                <img class="rounded-lg w-1/5 cursor-pointer" src="../assets/images/image-product-3-thumbnail.jpg" alt="">
                <img class="rounded-lg w-1/5 cursor-pointer" src="../assets/images/image-product-4-thumbnail.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
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
            console.log(this.currentProduct)
        }
    }
}
</script>