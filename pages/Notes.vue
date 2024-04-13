<script setup lang="ts">

import { ListFilter, X } from "lucide-vue-next";


definePageMeta({
    layout: false
})

const isCategoryMenuShowing = ref(false)
const toggleCategoryMenu = () => {
    console.log('clicked')
    isCategoryMenuShowing.value = !isCategoryMenuShowing.value
}


</script>


<template>
    <main class="">
        <section class="w-full h-screen m-auto border flex">
            <DashboardSidebar />
            <div class=" py-4 w-full">
                <header class="px-6 font-bold flex items-center justify-between w-full pb-4">
                    <h1 class="text-2xl tracking-tighter text-black"></h1>
                    <div class="relative">
                        <button @click="toggleCategoryMenu"
                            class="size-10 grid place-items-center rounded-full relative transition-all duration-100"
                            :class="isCategoryMenuShowing ? 'bg-white shadow z-[999]' : 'bg-neutral-100 z-0'">
                            <ListFilter v-if="!isCategoryMenuShowing" :size="16" stroke-width="3"
                                class="stroke-neutral-600" />
                            <X v-else :size="16" stroke-width="3" class="stroke-neutral-600" />
                        </button>
                        <DashboardMenuCategoryMenu @toggleMenu="toggleCategoryMenu"
                            :isCategoryMenuShowing="isCategoryMenuShowing" />
                    </div>
                </header>
            </div>
        </section>
    </main>
</template>


<style scoped></style>
