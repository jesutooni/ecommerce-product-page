<template>
    <div @click="toggleSidebar" :class="`fixed top-0 h-screen w-full bg-black bg-opacity-0 z-50 ${ sidebar ? 'left-0 bg-opacity-70' : '-left-full' }`">
        <div @click.stop="" class="bg-white w-3/4 h-full p-6">
            <img @click="toggleSidebar" src="../assets/images/icon-close.svg" alt="">
            <ul class="mt-12 font-bold text-lg">
                <li class="my-4">Collections</li>
                <li class="my-4">Men</li>
                <li class="my-4">Women</li>
                <li class="my-4">About</li>
                <li class="my-4">Contact</li>
            </ul>
        </div>
        <!-- <div @click="toggleSidebar" :class="`absolute md:hidden inset-0 bg-black duration-200 ${ sidebar ? 'opacity-70 z-20' : 'opacity-0 -z-10' }`"></div>     -->
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