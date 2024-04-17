<script setup lang="ts">
import { Twitter } from "lucide-vue-next";
</script>

<template>
  <div
    class="w-full h-auto rounded-3xl border border-neutral-300/60 p-6 flex flex-col gap-3"
  >
    <header class="flex items-center gap-3">
      <div class="size-12 rounded-full overflow-hidden">
        <img
          src="https://i.pinimg.com/564x/11/9b/97/119b97f091f835c70d4f6a83621662bf.jpg"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div class="leading-none flex flex-col justify-center">
        <p class="text-lg font-semibold">Christiano Ronaldo</p>
        <p class="text-neutral-600">@Christiano</p>
      </div>
      <div class="ml-auto">
        <Twitter :size="18" class="stroke-blue-500" />
      </div>
    </header>
    <p class="text-lg text-neutral-800">
      Dolor commodo exercitation nostrud aliqua Lorem.Culpa dolore incididunt eu
      ipsum est in id commodo.
    </p>
    <div class="w-full overflow-hidden rounded-xl max-h-96">
      <img
        class="w-full h-full object-cover"
        src="https://i.pinimg.com/564x/86/04/7b/86047b0b04812a3d9f97816086899501.jpg"
        alt=""
      />
    </div>
    <div class="flex gap-2 items-center tracking-tight text-neutral-700">
      <p>9:22 PM</p>
      <div class="size-1 bg-black rounded-full"></div>
      <p>Apr 10, 2024</p>
    </div>
  </div>
</template>

<style></style>
