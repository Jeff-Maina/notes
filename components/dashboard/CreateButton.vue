<script setup lang="ts">
import { X } from "lucide-vue-next";

const isCreatingNewItem = ref(false);
const toggleCreatingNewItem: () => void = () =>
  (isCreatingNewItem.value = !isCreatingNewItem.value);
  
</script>

<template>
  <div class="relative">
    <button class="size-10 rounded-full bg-black grid place-items-center">
      <Plus class="stroke-white md:size-5" stroke-width="3" />
    </button>
  </div>
</template>

<style></style>
