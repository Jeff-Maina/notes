<script setup lang="ts">
import { Plus } from "lucide-vue-next";

const isCreatingNewItem = ref(false);
const toggleCreatingNewItem: () => void = () =>
  (isCreatingNewItem.value = !isCreatingNewItem.value);
const closeMenu: () => void = () => (isCreatingNewItem.value = false);
</script>

<template>
  <div class="relative">
    <button
      @click="toggleCreatingNewItem"
      class="size-10 rounded-full transition-all duration-500 grid place-items-center relative bg-black"
      :class="isCreatingNewItem ? 'z-[999]':''"
    >
      <div
        :class="isCreatingNewItem ? 'rotate-45' : 'rotate-0'"
        class="transition-all duration-100"
      >
        <Plus class="stroke-white md:size-5" stroke-width="3" />
      </div>
    </button>
    <DashboardMenuNewItemMenu
      :isCreatingNewItem="isCreatingNewItem"
      @closeMenu="closeMenu"
    />
  </div>
</template>

<style></style>
