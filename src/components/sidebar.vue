<template>
    <div>
        <div :class="`absolute top-0 h-screen w-60 bg-white z-20 duration-700 p-6 ${ sidebar ? 'left-0' : '-left-60' }`">
            <img @click="toggleSidebar" src="../assets/images/icon-close.svg" alt="">
            <ul class="mt-12 font-bold text-lg">
                <li class="my-4">Collections</li>
                <li class="my-4">Men</li>
                <li class="my-4">Women</li>
                <li class="my-4">About</li>
                <li class="my-4">Contact</li>
            </ul>
        </div>
        <div @click="toggleSidebar" :class="`absolute inset-0 bg-black duration-1000 ${ sidebar ? 'opacity-70 z-10' : 'opacity-0 -z-10' }`"></div>    
    </div>
</template>

<script>
export default {
    computed: {
        sidebar() {
            return this.$store.state.sidebar;
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        }
    }
}
</script>