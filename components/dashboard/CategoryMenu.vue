<script setup lang="ts">
import { Asterisk, Book, Image, Link, ListTodo,Notebook } from 'lucide-vue-next';
</script>


<template>
    <div class="fixed w-screen h-full inset-0 bg-black/10"></div>
    <div
        class="absolute w-56 md:w-64 bg-white rounded-3xl top-[150%] right-0 flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 shadow-lg shadow-neutral-200 overflow-hidden text-sm md:text-base">
        <button
            class="p-4 px-5 flex items-center justify-between w-full font-normal hover:bg-neutral-100 transition-colors duration-100">
            
            <div class="flex items-center gap-3">
                <Notebook :size="16" class="-blue-500" />
                <span>
                    Notes
                </span>
            </div>
            <div class=" grid place-items-center rounded-full badge">
                <p class="text-sm md:text-base text-blue-500">10</p>
            </div>
        </button>
        <button
            class="p-4 px-5 flex items-center justify-between w-full font-normal hover:bg-neutral-100 transition-colors duration-100">
            
            <div class="flex items-center gap-3">
                <Asterisk :size="16" class="-blue-500" />
                <span>
                    Code snippets
                </span>
            </div>
            <div class=" grid place-items-center rounded-full badge">
                <p class="text-sm md:text-base text-blue-500">10</p>
            </div>
        </button>
        <button
            class="p-4 px-5 flex items-center justify-between w-full font-normal hover:bg-neutral-100 transition-colors duration-100">
            <div class="flex items-center gap-3">
                <Link :size="16" class="-purple-500" />
                <span>
                    Links
                </span>
            </div>
            <div class=" grid place-items-center rounded-full badge">
                <p class="text-sm md:text-base text-purple-500">2</p>
            </div>
        </button>
        <button
            class="p-4 px-5 flex items-center justify-between w-full font-normal hover:bg-neutral-100 transition-colors duration-100">
            <div class="flex items-center gap-3">
                <Book :size="16" class="-neutral-500" />
                <span>
                    Thoughts
                </span>
            </div>
            <div class=" grid place-items-center rounded-full badge">
                <p class="text-sm md:text-base text-neutral-500">10</p>
            </div>
        </button>
        <button
            class="p-4 px-5 flex items-center justify-between w-full font-normal hover:bg-neutral-100 transition-colors duration-100">
            <div class="flex items-center gap-3">
                <ListTodo :size="16" class="-orange-500" />
                <span>
                    Todos
                </span>
            </div>
            <div class=" grid place-items-center rounded-full badge">
                <p class="text-sm md:text-base text-orange-500">10</p>
            </div>
        </button>
        <button
            class="p-4 px-5 flex items-center justify-between w-full font-normal hover:bg-neutral-100 transition-colors duration-100">
            <div class="flex items-center gap-3">
                <Image :size="16" class="-red-500" />
                <span>
                    Images
                </span>
            </div>
            <div class=" grid place-items-center rounded-full badge">
                <p class="text-sm md:text-base text-red-500">120</p>
            </div>
        </button>
    </div>
</template>


<style>.badge {
    font-family: 'Gelion Medium';
}</style>
