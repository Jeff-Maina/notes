<script setup lang="ts">
import { Sparkles, SquareSlash } from "lucide-vue-next";

// accept any props passed down from parent;
const props = defineProps({
  isHelpMenuOpen: {
    type: Boolean,
  },
});

// opening and closing shortcuts modal
const isShortcutModalOpen = ref(false);
const toggleShortcutModal: () => void = () =>
  (isShortcutModalOpen.value = !isShortcutModalOpen.value);
const closeShortcutModal: () => void = () =>
  (isShortcutModalOpen.value = false);
const openShortcutModal: () => void = () => (isShortcutModalOpen.value = true);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "/") {
      console.log("Ctrl + / pressed");
      openShortcutModal();
    }
  });
});

const emits = defineEmits(["toggleHelpMenu"])

</script>

<template>
  <!-- mask -->
  <UiMask
    @toggleMask="[$emit('toggleHelpMenu')]"
    :isMaskActive="isHelpMenuOpen"
  />

  <!-- menu -->
  <Transition name="menu_slide">
    <div
      v-if="isHelpMenuOpen"
      class="absolute left-full bottom-full bg-white rounded-3xl flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 w-64 shadow transition-transform duration-350 z-[999] overflow-hidden"
    >
      <button
        class="w-full px-5 flex items-center gap-3 h-14 hover:bg-neutral-100 transition-colors duration-100"
      >
        <div>
          <Sparkles :size="16" class="stroke-neutral-800" />
        </div>
        <p>Features</p></button
      ><button
        @click="[toggleShortcutModal(), $emit('toggleHelpMenu')]"
        class="w-full px-5 flex items-center justify-between h-14 hover:bg-neutral-100 transition-colors duration-100"
      >
        <div class="flex items-center gap-3">
          <div><SquareSlash :size="16" class="stroke-neutral-800" /></div>
          <p>Shortcuts</p>
        </div>

        <p class="font-semibold text-neutral-500">Ctrl + /</p>
      </button>
    </div>
  </Transition>

  <!-- Shortcuts modal -->
  <DashboardModalsShortcuts
    @toggleShortcutModal="closeShortcutModal"
    :isShortcutModalOpen="isShortcutModalOpen"
  />
</template>

<style></style>
