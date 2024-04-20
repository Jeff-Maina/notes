<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
  },
});
</script>

<template>
  <span
    class="p-1 text-xs select-none pointer-events-none pt-[6px] translate-y-2 opacity-0 group-hover/btn_hover:opacity-[1] group-hover/btn_hover:translate-y-0 text-white bg-black absolute bottom-[120%] font-semibold leading-none pb-2 rounded px-3 left-2/4 -translate-x-1/2 transition-all duration-200"
    >{{ label }}</span
  >
</template>

<style></style>
