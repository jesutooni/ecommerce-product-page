<template>
    <div class="w-full p-4 md:px-0 flex justify-between font-kumbh md:border-b md:border-gray-300 md:pb-8">
        <div class="flex items-center">
            <img class="mr-2.5 md:hidden" src="../assets/images/icon-menu.svg" alt="">
            <p class="text-2xl font-bold cursor-pointer text-blue1">sneakers</p>
            <ul class="hidden md:flex text-gray-400">
                <li class="ml-10 cursor-pointer group relative">Collections <div class="w-full border-b-4 border-transparent md:group-hover:border-orange transition duration-150 absolute -bottom-10"></div></li>
                <li class="ml-10 cursor-pointer group relative">Men <div class="w-full border-b-4 border-transparent md:group-hover:border-orange transition duration-150 absolute -bottom-10"></div></li>
                <li class="ml-10 cursor-pointer group relative">Women <div class="w-full border-b-4 border-transparent md:group-hover:border-orange transition duration-150 absolute -bottom-10"></div></li>
                <li class="ml-10 cursor-pointer group relative">About <div class="w-full border-b-4 border-transparent md:group-hover:border-orange transition duration-150 absolute -bottom-10"></div></li>
                <li class="ml-10 cursor-pointer group relative">Contact <div class="w-full border-b-4 border-transparent md:group-hover:border-orange transition duration-150 absolute -bottom-10"></div></li>
            </ul>
        </div>
        <div class="flex items-center">
            <img class="w-4 h-4 mr-3 sm:w-6 sm:h-6 sm:mr-10 cursor-pointer" src="../assets/images/icon-cart.svg" alt="">
            <img class="w-6 h-6 sm:w-10 sm:h-10 cursor-pointer border-2 border-transparent transition duration-150 rounded-full hover:border-orange" src="../assets/images/image-avatar.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>