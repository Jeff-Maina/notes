<script setup lang="ts">
import { boolean } from "yup";

const props = defineProps({
  isSettingsModalActive: boolean,
});
</script>

<template>
  <div
    @click="$emit('toggleSettingsModal')"
    v-if="isSettingsModalActive"
    class="fixed h-screen w-full flex items-center justify-center z-[998] bg-black/10 inset-0"
  ></div>
  <Transition name="slide">
    <div
    @click.self="$emit('toggleSettingsModal')"
      v-if="isSettingsModalActive"
      class="fixed h-screen w-full flex items-center justify-center z-[999] inset-0"
    >
      <div
        class="w-full max-w-lg bg-red-600 h-96 rounded-3xl shadow"
      ></div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
</style>
