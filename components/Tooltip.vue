<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
  },
});
</script>

<template>
  <div
    class="absolute pointer-events-none select-none left-full bg-black text-white font-semibold px-3 rounded py-1 pb-[6px] leading-none text-sm translate-x-1 opacity-0 group-hover/button:opacity-[1] min-w-min group-hover/button:translate-x-0 transition-all duration-200"
  >
    <p class=" min-w-max">{{ label }}</p>

    <div class="size-2 right-full top-2/4 -translate-y-2/4 rotate-45 translate-x-2/4 absolute bg-black rounded-[1px]"></div>
  </div>
</template>

<style></style>
