<script setup lang="ts">

const props = defineProps({
  task: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
  },
});

const isItemComplete = ref(false);
const completeTask = () => {
  isItemComplete.value = !isItemComplete.value;
};
</script>

<template>
  <div class="flex gap-3 py-2">
    <button
      @click="completeTask"
      class="size-[14px] shrink-0 border-2 rounded-full translate-y-2"
      :class="
        isItemComplete
          ? 'border-2 border-orange-500'
          : 'border-2 border-neutral-400'
      "
    >
      <!-- <div
        class="w-full h-full bg-black rounded-full transition-all duration-200"
        :class="isItemComplete ? 'scale-1' : 'scale-0'"
      ></div> -->
    </button>
    <div class="">
      <p
        class="md:text-lg font-light relative"
        :class="
          isItemComplete
            ? 'line-through decoration-2 decoration-orange-500 text-neutral-700'
            : 'text-neutral-900'
        "
      >
        {{ task }}
      </p>
    </div>
  </div>
</template>

<style></style>
