<script setup lang="ts">
import { boolean } from "yup";
import { LogOut, Settings, Flame, Palette } from "lucide-vue-next";

// accept any props passed down from parent;
const props = defineProps({
  isUserMenuOpen: boolean,
});

// mask;

// animations for when changing a theme;
const isChangingTheme = ref(false);
const changeTheme: () => void = () =>
  (isChangingTheme.value = !isChangingTheme.value);
const closeThemeOptions: () => void = () => (isChangingTheme.value = false);

//toggling settings modal;
const isSettingsModalActive = ref(false);
const toggleSettingsModal: () => void = () =>
  (isSettingsModalActive.value = !isSettingsModalActive.value);
</script>

<template>
  <!-- mask -->
  <UiMask
    @toggleMask="[$emit('toggleUserMenu'), closeThemeOptions()]"
    :isMaskActive="isUserMenuOpen"
  />

  <!-- Menu -->
  <Transition name="menu_slide">
    <div
      v-if="isUserMenuOpen"
      class="absolute left-full bottom-full bg-white rounded-3xl h-auto flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 w-52 shadow transition-transform duration-350"
      :class="[
        isUserMenuOpen ? 'z-[999]' : 'z-0',
        isChangingTheme ? 'scale-[.96]' : 'scale-100',
      ]"
    >
      <div class="w-full h-14 relative z-20">
        <div
          class="flex items-center gap-3 w-full px-5 transition-all duration-350 absolute left-2/4 -translate-x-1/2 rounded-t-2xl"
          :class="
            isChangingTheme
              ? 'bg-white scale-[1.1] -translate-y-2'
              : ' scale-100 -translate-y-0'
          "
        >
          <button
            @click="changeTheme"
            class="flex w-full items-center gap-3 select-none h-14"
          >
            <div><Palette :size="16" /></div>
            <p class="">Theme</p>
          </button>
          <div
            class="absolute top-full rounded-b-2xl w-full h-20 bg-white left-0 border-t overflow-hidden flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 transition-all duration-350"
            :class="isChangingTheme ? 'h-36' : 'h-[0px]'"
          >
            <button
              class="min-h-12 h-12 px-5 flex items-center gap-3 select-none"
            >
              <div class="size-2 rounded-full bg-black"></div>
              <p>Monochrome</p>
            </button>
            <button
              class="min-h-12 h-12 px-5 flex items-center gap-3 select-none"
            >
              <div class="size-2 rounded-full bg-[#D20062]"></div>
              <p>Retro</p>
            </button>
            <button
              class="min-h-12 h-12 px-5 flex items-center gap-3 select-none"
            >
              <div class="size-2 rounded-full bg-blue-600"></div>
              <p>Cosmic</p>
            </button>
          </div>
        </div>
      </div>
      <button
        :disabled="isChangingTheme"
        @click="[$emit('toggleUserMenu'), toggleSettingsModal()]"
        :class="
          isChangingTheme ? 'bg-red-200 grayscale' : 'hover:bg-neutral-100'
        "
        class="flex items-center gap-3 h-14 w-full px-5 transition-all duration-100"
      >
        <div><Settings :size="16" /></div>
        <p class="">Settings</p>
      </button>
      <button
        :disabled="isChangingTheme"
        :class="
          isChangingTheme ? 'bg-red-200 grayscale' : 'hover:bg-neutral-100'
        "
        class="flex items-center gap-3 h-14 w-full px-5 transition-all duration-100"
      >
        <div><Flame :size="16" /></div>
        <p>See what's new</p>
      </button>
      <button
        :disabled="isChangingTheme"
        :class="
          isChangingTheme ? 'bg-red-200 grayscale' : 'hover:bg-red-100/50'
        "
        class="flex items-center gap-3 px-5 transition-all duration-100 h-14 w-full rounded-b-2xl"
      >
        <div><LogOut :size="16" class="stroke-red-500" /></div>
        <p class="text-sm md:text-base select-none text-red-500">Logout</p>
      </button>
    </div>
  </Transition>

  <!-- Settings Modal -->
  <DashboardModalsSettings
    @toggleSettingsModal="toggleSettingsModal"
    :isSettingsModalActive="isSettingsModalActive"
  />
</template>

<style>
.duration-350 {
  transition-duration: 350ms;
}
</style>
