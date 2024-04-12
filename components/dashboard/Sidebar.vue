<script setup lang="ts">

import { ListTodo, Asterisk, Sparkle, ChevronRight } from 'lucide-vue-next'
</script>


<template>
    <section class="fixed inset-0 w-[80%] p-4">
        <div class="mask h-full fixed inset-0 w-full bg-black/10"></div>
        <nav class="w-full h-full bg-white rounded-2xl relative z-[999] p-4 flex flex-col gap-6">
            <header>

            </header>
            <div class="flex flex-col gap-3">
                <h1 class="text-sm font-medium text-neutral-800 tracking-tight">Categories</h1>
                <div class="w-full flex flex-col gap-1">
                    <button class="flex items-center gap-2 category p-3 rounded-xl bg-neutral-100 text-sm">
                        <div class="flex items-center gap-2"></div>
                        <ListTodo :size="16" stroke-width="2" class="stroke-orange-500" />
                        <span>Todo</span>
                    </button>
                    <button class="flex items-center gap-2 category p-3 rounded-xl bg-neutral-100 text-sm">
                        <div class="flex items-center gap-2"></div>
                        <Asterisk :size="16" stroke-width="2" class="stroke-blue-500" />
                        <span>Code Snippets</span>
                    </button>
                    <button class="flex items-center gap-2 category p-3 rounded-xl bg-neutral-100 text-sm">
                        <div class="flex items-center gap-2"></div>
                        <Sparkle :size="16" stroke-width="2" class="stroke-yellow-500" />
                        <span>Thoughts</span>
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <h1 class="text-sm font-medium text-neutral-800 tracking-tight">Folders</h1>
                <div class="w-full flex flex-col gap-1">
                    <div>
                        <button class="flex items-center gap-1 folder">
                            <ChevronRight :size="14" stroke-width="2" />
                            Work
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>


<style scoped>
.category {
    font-family: "Gelion Medium";
}
.folder {
    font-family: "Gelion Medium";
}
</style>
