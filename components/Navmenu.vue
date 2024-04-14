<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next"

const emits = defineEmits(["toggleMenu"])

</script>


<template>
    <div  class="fixed top-16 w-full left-2/4 -translate-x-2/4 max-w-4xl p-6 lg:px-2 !z-[999px] flex justify-end ">
        <div class="w-full m-auto max-w-4xl flex justify-end">
            <div id="navmenu"
                class="flex w-full flex-col divide-y divide-zinc-100 shadow-lg right-0 bg-white rounded-xl overflow-hidden max-w-sm">
                <a href="#"
                    class="p-4 px-5 flex items-center justify-between w-full active:bg-blue-100/20 hover:!bg-neutral-100 cursor-not-allowed transition-colors duration-100">Changelog
                    <ChevronRight :size="16" />
                </a>
                <a href=""
                    class="p-4 px-5 flex items-center justify-between w-full active:bg-blue-100/20 hover:!bg-neutral-100 transition-colors duration-100">
                    Github
                    <ChevronRight :size="16" />
                </a>
                <a href="/register"
                    class="p-4 px-5 flex items-center justify-between w-full active:bg-blue-100/20 hover:!bg-neutral-100 transition-colors duration-100">
                    Get started

                    <ChevronRight :size="16" />
                </a>
            </div>
        </div>
    </div>
    <div @click="$emit('toggleMenu')" class="fixed inset-0 h-screen w-screen bg-black/20 !-z-[10]"></div>
</template>


<style>
#navmenu {
    box-shadow: 0px 9px 33px -3px rgba(0, 0, 0, 0.15);
}
</style>
