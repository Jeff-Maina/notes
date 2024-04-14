<script setup lang="ts">
import { FilePlus, FolderPlus } from "lucide-vue-next";
const props = defineProps({
  isCreatingNewItem: {
    type: Boolean,
  },
});

const emits = defineEmits(["closeMenu"]);
</script>

<template>
  <UiMask :isMaskActive="isCreatingNewItem" @toggleMask="$emit('closeMenu')" />
  <Transition name="menu_slide">
    <div
      v-if="isCreatingNewItem"
      class="absolute top-[150%] right-0 w-52 bg-white shadow rounded-3xl z-[999] flex flex-col divide divide-y divide-neutral-100 md:divide-neutral-200 overflow-hidden font-normal"
    >
      <button
        class="h-14 w-full px-5 flex items-center gap-3 hover:bg-neutral-100 transition-all duration-100"
      >
        <div><FilePlus :size="18" /></div>
        <span>New file</span>
      </button>
      <button
        class="h-14 w-full px-5 flex items-center gap-3 hover:bg-neutral-100 transition-all duration-100"
      >
        <div><FolderPlus :size="18" /></div>
        <span>New Folder</span>
      </button>
    </div>
  </Transition>
</template>

<style></style>
