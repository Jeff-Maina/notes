<script setup lang="ts">
import { Heart } from "lucide-vue-next";
const props = defineProps({
  type: {
    type: String,
  },
});
</script>

<template>
  <button
    @click="$emit('removeReaction')"
    class="absolute -top-3 -left-3 size-10 bg-white grid place-items-center border border-neutral-300 rounded-full text-lg z-[50] transition-all duration-100 origin-center"
    :class="type !== '' ? 'scale-1 opacity-1' : 'scale-0 opacity-0'"
  >
    <p v-if="type == 'heart'" class="leading-none translate-y-[2px]">
      <Heart :size="16" class="stroke-red-500 fill-red-500" />
    </p>
    <p v-if="type == 'star'" class="leading-none translate-y-[1px]">⭐</p>
    <p v-if="type == 'pin'">📌</p>
    <p v-if="type == 'idea'">💡</p>
    <p v-if="type == 'target'">🎯</p>
    <p v-if="type == 'hot'">🔥</p>
  </button>
</template>

<style></style>
