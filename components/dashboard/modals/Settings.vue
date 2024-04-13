<script setup lang="ts">
import { boolean } from "yup";

const props = defineProps({
  isSettingsModalActive: boolean,
});
</script>

<template>
  <div
  @click.self="$emit('toggleSettingsModal')"
    v-if="isSettingsModalActive"
    class="fixed h-screen w-full flex items-center justify-center z-[999] bg-black/10 inset-0"
  >
    <div class="w-full max-w-sm bg-white h-96 rounded-2xl shadow"></div>
  </div>
</template>

<style></style>
