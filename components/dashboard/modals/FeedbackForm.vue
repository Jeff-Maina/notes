<script setup lang="ts">
const props = defineProps({
  isSendingFeedback: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="absolute bg-white w-[100.5%] -left-[1px] top-full transition-all duration-350 rounded-b-2xl overflow-hidden"
    :class="
      isSendingFeedback
        ? 'h-[14.1rem] border border-t-0 border-neutral-300'
        : 'h-[0px]'
    "
  >
    <div
      class="w-full h-[10rem] border-t border-neutral-100 md:border-neutral-200"
    >
      <textarea
        name=""
        class="outline-none w-full h-full resize-none focus:bg-neutral-100 px-5 py-2 placeholder:text-neutral-400"
        placeholder="What are your thoughts?"
      ></textarea>
    </div>
    <div class="h-16 w-full flex justify-end items-end p-2">
      <button
        class=" text-neutral-800 font-medium py-2 px-6 rounded-2xl"
      >
        Cancel
      </button>
      <button
        class="bg-neutral-800 text-white font-medium py-2 px-6 rounded-2xl"
      >
        Send
      </button>
    </div>
  </div>
</template>

<style scoped>
.duration-350 {
  transition-duration: 350ms;
}
</style>
