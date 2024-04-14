<script setup lang="ts">
const props = defineProps({
  isCreatingFolder: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    v-if="isCreatingFolder"
    class="fixed w-full h-screen bg-black/20 backdrop-blur flex items-center justify-center inset-0 z-[999]"
  >
    <div
      class="w-[17rem] h-64 md:h-80 md:w-full max-w-md rounded-3xl md:rounded-[3rem] relative overflow-hidden"
    >
      <div class="w-full relative h-[45%] translate-y-2 z-10">
        <div
          class="w-28 md:w-44 !rounded-t-[5rem] md:!rounded-t-[10rem] h-6 md:h-8 translate-y-8 md:translate-y-8 bg-neutral-800"
        ></div>
        <div
          class="w-full h-16 md:h-20 rounded-tr-3xl md:rounded-tr-[3rem] bg-neutral-800 bottom-0 absolute"
        ></div>
      </div>
      <div
        class="absolute w-28 left-1/4 h-32 z-[22] bg-white top-1/4 p-2 flex flex-col gap-1 translate-y-4 rotate-6 rounded-xl border shadow_left"
      >
        <div class="rounded-full w-2/4 bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
      </div>
      <div
        class="absolute w-28 left-6 h-32 z-20 bg-white top-1/4 p-2 flex flex-col gap-1 translate-y-4 -rotate-6 rounded-xl shadow_left border border-neutral-800"
      >
        <div class="rounded-full w-1/4 bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
      </div>
      <div
        class="absolute w-28 left-2/4 h-32 z-[24] bg-white top-1/4 p-2 flex flex-col gap-1 translate-y-4 shadow_left border border-neutral-100 rounded-xl"
      >
        <div class="rounded-full w-1/4 bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
        <div class="rounded-full w-full bg-neutral-200 h-2"></div>
      </div>
      <div
        class="absolute w-full h-[55%] !bottom-0 left-0 bg-neutral-900 rounded-b-3xl md:rounded-b-[3rem] rounded-t-lg custom_shadow z-30"
      ></div>
    </div>
  </div>
</template>

<style>
.custom_shadow {
  box-shadow: 0px -6px 40px 0px rgba(48, 48, 47, 0.4);
}
.shadow_left {
  box-shadow: -8px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>
