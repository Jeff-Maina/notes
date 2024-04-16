<script setup lang="ts">
import { X } from "lucide-vue-next";

const folderName = ref("");
const folderColor = ref("blackf");
const updateColor = (color: string) => (folderColor.value = color);
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-8 relative">
    <div class="w-full flex justify-end">
      <button
        @click="$emit('closeModal')"
        class="size-10 bg-white rounded-full shadow grid place-items-center"
      >
        <X :size="18" stroke-width="2" />
      </button>
    </div>

    <!-- folder thing -->
    <div
      class="w-72 md:w-full max-w-[25rem] rounded-[2rem] md:rounded-[3rem] h-[11rem] md:h-64 relative z-[999] overflow-hidden group/folder"
      :class="folderColor"
    >
      <div class="w-full h-full flex items-center justify-center">
        <div
          class="w-36 md:w-64 h-32 p-3 md:p-4 flex flex-col gap-1 rounded-2xl card_shadow bg-white translate-x-[30%] relative -rotate-6 md:-translate-y-4 group-hover/folder:md:-translate-y-6 group-hover/folder:translate-x-[35%] transition-all duration-200"
        >
          <div class="w-full h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-3/4 h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-full h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-2/4 h-2 bg-neutral-200 rounded-full"></div>
        </div>
        <div
          class="w-36 md:w-64 h-32 p-3 md:p-4 flex flex-col gap-1 rounded-2xl card_shadow bg-white translate-y-1 md:-translate-y-2 rotate-6 group-hover/folder:md:-translate-y-4 group-hover/folder:-rotate-0 transition-all duration-200"
        >
          <div class="w-1/4 h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-full h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-2/4 h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-full h-2 bg-neutral-200 rounded-full"></div>
        </div>
        <div
          class="w-36 md:w-64 h-32 p-3 md:p-4 flex flex-col gap-1 rounded-2xl card_shadow -translate-x-[30%] bg-white relative -translate-y-1 md:-translate-y-6 group-hover/folder:md:-translate-y-8 transition-all duration-200"
        >
          <div class="w-full h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-full h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-3/4 h-2 bg-neutral-200 rounded-full"></div>
          <div class="w-1/4 h-2 bg-neutral-200 rounded-full"></div>
        </div>
      </div>
      <div
        class="cover w-full absolute left-0 bottom-0 z-30 h-[60%] rounded-b-[2rem] custom_shadow p-5 md:p-8 pb-6 flex items-end"
      >
        <input
          type="text"
          :v-model="folderName"
          class="text-2xl bg-transparent border-none outline-none tracking-tight w-full"
          placeholder="Enter folder name"
        />
      </div>
    </div>

    <!-- description and create -->
    <div class="rounded-3xl overflow-hidden">
      <div class="w-full h-20 rounded-t-3xl bg-white overflow-hidden">
        <textarea
          class="w-full h-full p-5 resize-none text-neutral-800 placeholder:text-neutral-500"
          placeholder="Enter description"
        ></textarea>
      </div>

      <!-- create button -->
      <div class="flex flex-col rounded-b-3xl overflow-hidden w-full">
        <div class="h-14 w-full bg-white flex justify-end items-center px-2">
          <button class="p-2 bg-neutral-800 grid place-items-center text-white px-6 rounded-full shadow-inner">
            Create
          </button>
        </div>
      </div>
    </div>

    <!-- color menu -->
    <div
      class="w-8 bg-white absolute top-2/4 -translate-y-2/4 -left-16 rounded-xl flex flex-col divide-y divide-neutral-200 shadow"
    >
      <button
        @click="updateColor('blackf')"
        class="h-10 grid place-items-center"
      >
        <div
          :class="
            folderColor == 'blackf' &&
            'ring-4 ring-offset-2 ring-neutral-500 scale-[.80]'
          "
          class="size-4 rounded-full bg-black transition-all duration-150"
        ></div>
      </button>
      <button @click="updateColor('redf')" class="h-10 grid place-items-center">
        <div
          :class="
            folderColor == 'redf' &&
            'ring-4 ring-offset-2 ring-red-500 scale-[.80]'
          "
          class="size-4 rounded-full bg-red-500 transition-all duration-150"
        ></div>
      </button>
      <button
        @click="updateColor('pinkf')"
        class="h-10 grid place-items-center"
      >
        <div
          :class="
            folderColor == 'pinkf' &&
            'ring-4 ring-offset-2 ring-pink-500 scale-[.80]'
          "
          class="size-4 rounded-full bg-pink-500 transition-all duration-150"
        ></div>
      </button>
      <button
        @click="updateColor('bluef')"
        class="h-10 grid place-items-center"
      >
        <div
          :class="
            folderColor == 'bluef' &&
            'ring-4 ring-offset-2 ring-blue-500 scale-[.80]'
          "
          class="size-4 rounded-full bg-blue-500 transition-all duration-150"
        ></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Black folder */
.blackf {
  @apply bg-neutral-500;
  box-shadow: inset 0px 19px 80px 10px rgba(0, 0, 0, 0.8);
}
.blackf .cover {
  @apply bg-[#272727] shadow-inner;
}

.blackf .cover input {
  @apply text-neutral-200 placeholder:text-neutral-200;
}

.blackf .card_shadow {
  box-shadow: 0px 0px 20px 16px rgba(0, 0, 0, 0.2);
}

.blackf .custom_shadow {
  box-shadow: 0px -52px 45px -23px rgba(0, 0, 0, 0.3),
    inset 0px -38px 70px 0px rgba(0, 0, 0, 0.8);
}

/* Red folder */
.redf {
  @apply bg-red-400;
  box-shadow: inset 0px 19px 80px 10px rgba(158, 0, 0, 0.8);
}
.redf .cover {
  @apply bg-[#bb0505];
}

.redf .cover input {
  @apply text-red-200 placeholder:text-red-200;
}
.redf .card_shadow {
  box-shadow: 0px 0px 20px 16px rgba(77, 1, 1, 0.2);
}

.redf .custom_shadow {
  box-shadow: 0px -52px 45px -23px rgba(73, 1, 1, 0.3),
    inset 0px -38px 70px 0px rgba(158, 2, 2, 0.8);
}

/* Red folder */
.bluef {
  @apply bg-blue-400;
  box-shadow: inset 0px 19px 80px 10px rgba(0, 55, 158, 0.8);
}

.bluef .cover {
  @apply bg-[#053fbb];
}
.bluef .cover input {
  @apply text-blue-200 placeholder:text-blue-200;
}
.bluef .cover input {
  @apply text-blue-200 placeholder:text-blue-200;
}
.bluef .card_shadow {
  box-shadow: 0px 0px 20px 16px rgba(1, 19, 77, 0.2);
}

.bluef .custom_shadow {
  box-shadow: 0px -52px 45px -23px rgba(1, 24, 73, 0.3),
    inset 0px -38px 70px 0px rgba(1, 51, 145, 0.8);
}

/* Red folder */
.pinkf {
  @apply bg-pink-500;
  box-shadow: inset 0px 19px 80px 10px rgba(128, 1, 79, 0.3);
}

.pinkf .cover {
  @apply bg-pink-600;
}
.pinkf .cover input {
  @apply text-pink-200 placeholder:text-pink-200;
}

.pinkf .card_shadow {
  box-shadow: 0px 0px 20px 16px rgba(145, 0, 113, 0.2);
}

.pinkf .custom_shadow {
  box-shadow: 0px -52px 45px -23px rgba(128, 1, 75, 0.3),
    inset 0px -38px 70px 0px rgba(185, 5, 110, 0.8);
}
</style>
