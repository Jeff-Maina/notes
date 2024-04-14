<script setup lang="ts">
import { Search } from "lucide-vue-next";
const props = defineProps({
  isShortcutModalOpen: {
    type: Boolean,
  },
});


// defining emits
const emits = defineEmits(["toggleShortcutModal"]);

// Search logic;
const searchInput = ref("");
</script>

<template>
  <!-- Mask -->
  <UiMask
    @toggleMask="$emit('toggleShortcutModal')"
    :isMaskActive="isShortcutModalOpen"
  />
  <!-- MODAL -->
  <Transition name="modal_slide">
    <div
      @click.self="$emit('toggleShortcutModal')"
      v-if="isShortcutModalOpen"
      class="fixed h-screen w-full flex items-center justify-center z-[999] inset-0"
    >
      <div
        class="w-full max-w-md bg-white rounded-2xl shadow flex flex-col overflow-scroll"
      >
        <header
          class="w-full h-14 border-b border-neutral-100 md:border-neutral-200 flex items-center relative"
        >
          <div class="w-12 grid place-items-center absolute inset-0">
            <Search :size="16" class="stroke-neutral-600" />
          </div>
          <input
            type="text"
            placeholder="Search shortcuts"
            v-model="searchInput"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-500 border-none"
          />
          <div
            v-if="searchInput.length > 0"
            class="absolute w-64 bg-white rounded-xl border border-neutral-100 md:border-neutral-400 h-32 top-full left-10"
          ></div>
        </header>
        <div class="w-full h-[60vh] overflow-auto">
          <div class="px-5 h-10 bg-neutral-100 flex items-center">
            <p class="font-medium text-sm">Menus</p>
          </div>
          <div
            class="w-full flex flex-col border-b border-t border-neutral-100 md:border-neutral-200 divide-y divide-neutral-100 md:divide-neutral-200 text-neutral-600"
          >
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Create new note</p>
              <p>Ctrl + Alt + C</p>
            </div>
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Create new note</p>
              <p>Ctrl + Alt + C</p>
            </div>
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Create new note</p>
              <p>Ctrl + Alt + C</p>
            </div>
          </div>
          <div class="px-5 h-10 bg-neutral-100 flex items-center">
            <p class="font-medium text-sm">Comments</p>
          </div>
          <div
            class="w-full flex flex-col border-b border-t border-neutral-100 md:border-neutral-200 divide-y divide-neutral-100 md:divide-neutral-200 text-neutral-600"
          >
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Create new note</p>
              <p>Ctrl + Alt + C</p>
            </div>
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Create new note</p>
              <p>Ctrl + Alt + C</p>
            </div>
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Create new note</p>
              <p>Ctrl + Alt + C</p>
            </div>
          </div>
          <div class="px-5 h-10 bg-neutral-100 flex items-center">
            <p class="font-medium text-sm">Menus</p>
          </div>
          <div
            class="w-full flex flex-col border-b border-t border-neutral-100 md:border-neutral-200 divide-y divide-neutral-100 md:divide-neutral-200 text-neutral-600"
          >
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Open settings</p>
              <p>Ctrl + Alt + S</p>
            </div>
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Open Filter Menu</p>
              <p>Ctrl + Alt + F</p>
            </div>
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Create new note</p>
              <p>Ctrl + Alt + C</p>
            </div>
          </div>
          <div class="px-5 h-10 bg-neutral-100 flex items-center">
            <p class="font-medium text-sm">Navigation</p>
          </div>
          <div
            class="w-full flex flex-col border-b border-t border-neutral-100 md:border-neutral-200 divide-y divide-neutral-100 md:divide-neutral-200 text-neutral-600"
          >
            <div class="w-full h-14 px-5 flex items-center justify-between">
              <p>Show keyboard shortcuts</p>
              <p>Ctrl + /</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style></style>
