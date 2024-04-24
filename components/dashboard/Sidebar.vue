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
  PaintBucket,
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

// bookmarks
const isCreatingBookmark = ref(false);
const createBookmark = () => (isCreatingBookmark.value = true);
const dismissBookmark = () => (isCreatingBookmark.value = false);

// colors
const isCreatingColor = ref(false);
const createColor = () => (isCreatingColor.value = true);
const dismissColor = () => (isCreatingColor.value = false);

// colors
const isCreatingImage = ref(false);
const createImage = () => (isCreatingImage.value = true);
const dismissImage = () => (isCreatingImage.value = false);

// codeBlock
const isCreatingCodeblock = ref(false);
const createCodeblock = () => (isCreatingCodeblock.value = true);
const dismissCodeblock = () => (isCreatingCodeblock.value = false);

// todo;
const isCreatingTodo = ref(false);
const createTodo = () => (isCreatingTodo.value = true);
const dismissTodo = () => (isCreatingTodo.value = false);
</script>

<template>
  <div
    class="col-span-1 w-[4rem] h-screen fixed bg-white z-[100] top-0 left-0 border-r border-neutral-200/60 md:flex flex-col items-center justify-end shrink-0 hidden"
  >
    <div class="w-full h-1/4"></div>

    <div
      class="flex flex-col gap-4 py-4 w-full items-center h-2/4 justify-center"
    >
      <button
        @click="createTodo"
        class="size-10 group/button grid place-items-center relative"
      >
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
      <button
        @click="createBookmark"
        class="size-10 group/button grid place-items-center relative"
      >
        <Bookmark
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Bookmark" />
      </button>
      <button class="size-10 group/button grid place-items-center relative">
        <Notebook
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Notes" />
      </button>

      <button
        @click="createImage"
        class="size-10 group/button grid place-items-center relative"
      >
        <Image
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Image" />
      </button>
      <button
        @click="createColor"
        class="size-10 group/button grid place-items-center relative"
      >
        <PaintBucket
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Color" />
      </button>
      <button
        @click="createCodeblock"
        class="size-10 group/button grid place-items-center relative"
      >
        <Asterisk
          :size="22"
          class="stroke-neutral-600 group-hover/button:stroke-black"
          stroke-width="1.5"
        />
        <Tooltip label="Code block" />
      </button>
    </div>
    <div class="flex flex-col gap-4 py-4 w-full items-center h-1/4 justify-end">
      <!-- <button
        class="group/button relative bg-white size-10 rounded-full grid place-items-center"
        @click="toggleTheme"
      >
        <Moon v-if="theme === 'dark'" :size="22" class="stroke-blue-600" />
        <Sun v-else :size="22" class="stroke-yellow-500" />
      </button> -->
      <div class="relative">
        <button
          @click="toggleHelpMenu"
          class="group/button relative size-10 rounded-full grid place-items-center bg-white transition-all duration-100"
          :class="isHelpMenuOpen ? 'shadow z-[999]' : 'shadow-none '"
        >
          <CircleHelp
            :size="22"
            class="stroke-blue-600 group-hover/button:stroke-blue-800"
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

  <DashboardCreateNewBookmark
    :isCreatingBookmark="isCreatingBookmark"
    @dismissBookMark="dismissBookmark"
  />
  <DashboardCreateNewColor
    :isCreatingColor="isCreatingColor"
    @dismissColor="dismissColor"
  />
  <DashboardCreateNewImage
    :isCreatingImage="isCreatingImage"
    @dismissImage="dismissImage"
  />
  <DashboardCreateNewSnippet
    :isCreatingCodeblock="isCreatingCodeblock"
    @dismissCodeblock="dismissCodeblock"
  />
  <DashboardCreateNewTodo
    :isCreatingTodo="isCreatingTodo"
    @dismissTodo="dismissTodo"
  />
</template>

<style scoped></style>
