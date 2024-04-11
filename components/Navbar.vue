<script setup lang="ts">
const isNavMenuOpen = ref(false);
const toggleMenu = () => {
    isNavMenuOpen.value = !isNavMenuOpen.value;
    document.body.style.overflow = isNavMenuOpen.value ? 'hidden' : 'auto';
}
</script>


<template>
    <nav class="pt-4 w-full flex justify-center">
        <div class="w-full p-6 flex items-center justify-between max-w-4xl lg:pr-2">
            <div class="flex items-center gap-1">
                <a href="/" class="font-gelion_bold text-2xl tracking-tighter text-neutral-800">Notes</a>
            </div>
            <div class="flex flex-col gap-1 relative">
                <button @click="toggleMenu()" class="flex flex-col gap-1 relative z-[999] p-4 bg-white rounded-xl">
                    <div class="w-4 h-[2px] bg-black rounded-full" :class="isNavMenuOpen ? 'b1_open' : 'b1_closed'"></div>
                    <div class="w-4 h-[2px] bg-black rounded-full" :class="isNavMenuOpen ? 'b2_open' : 'b2_closed'"></div>
                </button>
                <div v-if="isNavMenuOpen" class="fixed">
                    <Navmenu @toggleMenu="toggleMenu()" />
                </div>
            </div>
        </div>
    </nav>
</template>


<style>
.b1_closed,
.b2_closed {
    transform: rotate(0deg) translate(0px, 0px);
    transition: all 0.2s linear;
}

.b1_open {
    transform: rotate(45deg) translate(2px, 2.5px);
}

.b2_open {
    transform: rotate(-45deg) translate(2px, -2.5px);
}

.b1_open,
.b2_open {
    transform-origin: center center;
    transition: all 0.2s linear;
}
</style>
