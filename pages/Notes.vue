<script setup lang="ts">

import { ListFilter } from "lucide-vue-next";
import CategoryMenu from "~/components/dashboard/CategoryMenu.vue";
// import CategoryMenu from "../components/dashboard/CategoryMenu.vue"

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
        <section class="w-full h-screen py-4 max-w-4xl m-auto">
            <div>
                <!-- <Sidebar /> -->
            </div>
            <div class="w-full pt-6">
                <header class="px-6 font-bold flex items-center justify-between w-full">
                    <h1 class="text-4xl tracking-tight text-[#3e3e3e]">Notes</h1>
                    <div class="relative">
                        <button @click="toggleCategoryMenu"
                            class="size-10 grid place-items-center rounded-full bg-neutral-200">
                            <ListFilter :size="16" stroke-width="3" class="stroke-neutral-600" />
                        </button>
                        <CategoryMenu @toggleMenu="toggleCategoryMenu" :isCategoryMenuShowing="isCategoryMenuShowing" />
                    </div>
                </header>
            </div>
        </section>
    </main>
</template>


<style scoped></style>
