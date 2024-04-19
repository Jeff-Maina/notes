<script setup lang="ts">
import {
  Moon,
  Settings,
  User,
  Sun,
  CircleHelp,
  Asterisk,
  Notebook,
  Bookmark,
  Book,
  Palette,
  Image,
  Twitter,
  ListTodo,
} from "lucide-vue-next";

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
  <div
    class="col-span-1 w-[4rem] h-screen fixed bg-white z-[100] top-0 left-0 border-r border-neutral-200/60 md:flex flex-col items-center justify-end shrink-0 hidden"
  >
    <div class="w-full h-1/4"></div>

    <div
      class="flex flex-col gap-4 py-4 w-full items-center h-2/4 justify-center"
    >
      <button class="size-10 group/button grid place-items-center relative">
        <ListTodo
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Todo" />
      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Book
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Thought" />
      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Bookmark
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Link" />
      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Notebook
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Notes" />
      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Twitter
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Tweet" />
      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Image
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Image" />
      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Palette
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Color" />

      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Asterisk
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Code block" />

      </button>
    </div>
    <div class="flex flex-col gap-4 py-4 w-full items-center h-1/4 justify-end">
      <button
        class="group/button relative bg-white size-10 rounded-full grid place-items-center"
        @click="toggleTheme"
      >
        <Moon v-if="theme === 'dark'" :size="22" class="stroke-blue-600" />
        <Sun v-else :size="22" class="stroke-yellow-500" />
      </button>
      <!-- <div class="relative">
        <button
          @click="toggleHelpMenu"
          class="group/button relative size-10 rounded-full grid place-items-center bg-white transition-all duration-100"
          :class="isHelpMenuOpen ? 'shadow z-[999]' : 'shadow-none '"
        >
          <CircleHelp
            :size="22"
            class="stroke-neutral-800 group-hover/button:stroke-black"
          />
        </button>
        <DashboardMenuHelpMenu
          @toggleHelpMenu="closeHelpMenu"
          :isHelpMenuOpen="isHelpMenuOpen"
        />
      </div> -->
      <div class="relative">
        <button
          @click="toggleUserMenu"
          class="group/button relative size-10 rounded-full grid place-items-center bg-white transition-all duration-100"
          :class="isUserMenuOpen ? 'shadow z-[999]' : 'shadow-none '"
        >
          <User
            :size="22"
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
