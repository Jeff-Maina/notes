<script setup lang="ts">
import { FilePlus, FolderPlus } from "lucide-vue-next";
const props = defineProps({
  isCreatingNewItem: {
    type: Boolean,
  },
});

const emits = defineEmits(["closeMenu"]);

// Create new Item;
const isCreatingFolder = ref(false);
const createNewFolder = () => (isCreatingFolder.value = true);
const closeModal = () => (isCreatingFolder.value = false);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "F") {
      createNewFolder();
    }
  });
});
</script>

<template>
  <UiMask :isMaskActive="isCreatingNewItem" @toggleMask="$emit('closeMenu')" />
  <Transition name="menu_slide">
    <div
      v-if="isCreatingNewItem"
      class="absolute top-[150%] right-0 w-52 bg-white shadow rounded-3xl z-[999] flex flex-col divide divide-y divide-neutral-100 md:divide-neutral-200 overflow-hidden font- text-sm md:text-base font-normal"
    >
      <button
        class="h-14 w-full px-5 flex items-center gap-3 hover:bg-neutral-100 transition-all duration-100"
      >
        <div><FilePlus :size="18" /></div>
        <span>New file</span>
      </button>
      <button
        @click="[createNewFolder(), $emit('closeMenu')]"
        class="h-14 w-full px-5 flex items-center gap-3 hover:bg-neutral-100 transition-all duration-100"
      >
        <div><FolderPlus :size="18" /></div>
        <span>New Folder</span>
      </button>
    </div>
  </Transition>
  <DashboardModalsNewfolderModal
    :isCreatingFolder="isCreatingFolder"
    @closeModal="closeModal"
  />
</template>

<style></style>
