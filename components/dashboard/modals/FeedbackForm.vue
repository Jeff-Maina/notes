<script setup lang="ts">
const props = defineProps({
  isSendingFeedback: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="absolute left-0 bg-white w-full top-full transition-all duration-350 rounded-b-2xl overflow-hidden"
    :class="isSendingFeedback ? 'h-52' : 'h-[0px]'"
  >
    <div
      class="w-full h-[10rem] border-b border-t border-neutral-100 md:border-neutral-200"
    >
      <textarea name="" class="outline-none w-full h-full resize-none focus:bg-neutral-100 px-5 py-2 placeholder:text-neutral-400" placeholder="What are your thoughts?"></textarea>
    </div>
    <div class="h-12 w-full grid grid-cols-2 divide-x">
      <button class="h-full w-full font-medium"></button>
      <button class="h-full bg-neutral-800 w-full text-white font-medium">
        Send Feedback
      </button>
    </div>
  </div>
</template>

<style scoped>
.duration-350 {
  transition-duration: 350ms;
}
</style>
