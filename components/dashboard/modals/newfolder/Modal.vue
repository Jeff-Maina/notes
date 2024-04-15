<script setup lang="ts">
const props = defineProps({
  isCreatingFolder: {
    type: Boolean,
  },
});

const emits = defineEmits(["closeModal"]);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isCreatingFolder"
      class="fixed w-full h-screen bg-black/20 backdrop-blur flex items-center justify-center inset-0 z-[999]"
    >
      <DashboardModalsNewfolderFolder @closeModal="$emit('closeModal')" />
    </div>
  </Transition>
</template>

<style></style>
