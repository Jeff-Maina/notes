<script setup lang="ts">
import { Moon, Settings, User, Sun, CircleHelp } from "lucide-vue-next";

// user menu logic;
const isUserMenuOpen = ref(false);
const toggleUserMenu = () => (isUserMenuOpen.value = !isUserMenuOpen.value);
const closeUserMenu = () => (isUserMenuOpen.value = false);

// help menu logic;
const isHelpMenuOpen = ref(false);
const toggleHelpMenu = () => (isHelpMenuOpen.value = !isHelpMenuOpen.value);
const closeHelpMenu = () => (isHelpMenuOpen.value = false);

// toggle them logic;
const theme = ref("dark");
const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <div class="col-span-1 w-14 h-full md:flex items-end shrink-0 hidden">
    <div class="flex flex-col gap-2 py-4 w-full items-center">
      <button
        class="group/button relative bg-white size-10 rounded-full grid place-items-center"
      ></button>
      <!-- <button class="group/button relative bg-white size-10 rounded-full grid place-items-center "
                @click="toggleTheme">
                <Moon v-if="theme === 'dark'" :size="20" class="stroke-blue-600" />
                <Sun v-else :size="20" class="stroke-yellow-500" />
            </button> -->
      <div class="relative">
        <button
          @click="toggleHelpMenu"
          class="group/button relative size-10 rounded-full grid place-items-center bg-white transition-all duration-100"
          :class="isHelpMenuOpen ? 'shadow z-[999]' : 'shadow-none '"
        >
          <CircleHelp
            :size="20"
            class="stroke-neutral-800 group-hover/button:stroke-black"
          />
        </button>
        <DashboardMenuHelpMenu
          @toggleHelpMenu="closeHelpMenu"
          :isHelpMenuOpen="isHelpMenuOpen"
        />
      </div>
      <div class="relative">
        <button
          @click="toggleUserMenu"
          class="group/button relative size-10 rounded-full grid place-items-center bg-white transition-all duration-100"
          :class="isUserMenuOpen ? 'shadow z-[999]' : 'shadow-none '"
        >
          <User
            :size="20"
            class="stroke-neutral-800 group-hover/button:stroke-black"
          />
        </button>
        <DashboardMenuUserMenu
          @toggleUserMenu="closeUserMenu"
          :isUserMenuOpen="isUserMenuOpen"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
