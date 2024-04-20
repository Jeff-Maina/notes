<script setup lang="ts">
import {
  Ellipsis,
  ArrowUpRight,
  Trash2,
  Info,
  X,
  Edit,
  Link,
  Bookmark,
  Tag,
  Check,
  Search,
  Clipboard,
  Download,
} from "lucide-vue-next";

import { Eye, EyeOff } from "lucide-vue-next";

const type = ref("");
const setType = (value: string) => (type.value = value);
const removeReaction = () => (type.value = "");

const isReacting = ref(false);
const x = ref(0);
const y = ref(0);
const card = ref(null);

const showReaction = (e: MouseEvent) => {
  if (!card.value) return;
  const bounds = (card.value as HTMLElement).getBoundingClientRect();
  const { top, left } = bounds;
  const { clientX, clientY } = e;

  const xPos = clientX - left;
  const yPos = clientY - top;

  x.value = xPos;
  y.value = yPos;

  isReacting.value = true;
  console.log(xPos, yPos);
};

const dismissReaction = () => {
  isReacting.value = false;
};

// censoring logic
const isCensored = ref(true);
const toggleCensor = () => (isCensored.value = !isCensored.value);

// menu logic

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const openMenu = () => (isMenuOpen.value = true);
const closeMenu = () => (isMenuOpen.value = false);

// tags logic
const tag = ref("");
const newTag = ref("");
const tags = ref<string[]>([]);
const isAddingTag = ref(false);
const toggleTagMenu = () => {
  isAddingTag.value = !isAddingTag.value;
  document.body.style.overflow = "hidden";
};

const dismissTag = () => {
  isAddingTag.value = false;
  document.body.style.overflow = "auto";
};
const hasConfirmedTag = ref(false);

const confirmTag = () => {
  tags.value.push(newTag.value);
  newTag.value = "";
  dismissTag();
};

const removeTag = (value: string) => {
  const newTags = tags.value.filter((t) => t !== value);
  tags.value = newTags;
};

const clearAlltags = () => {
  tags.value = [];
};

</script>

<template>
  <div
    class="relative group/imagecard"
    :class="[isAddingTag || isReacting || isMenuOpen ? 'z-[999]' : 'z-0']"
  >
    <ReactionBar
      @dismissReaction="dismissReaction"
      @setType="setType"
      :type="type"
      :x="x"
      :y="y"
      :isReacting="isReacting"
    />

    <div
      class="absolute top-3 right-3 flex gap-1 items-center"
      :class="
        isAddingTag || isMenuOpen
          ? ''
          : 'opacity-[0] group-hover/imagecard:opacity-[1] z-20 transition-all duration-300'
      "
    >
      <!-- tags -->
      <div
        class="h-7 rounded-full bg-black/70 hover:bg-black backdrop-blur-sm z-20 text-white flex items-center transition-all duration-200"
      >
        <!-- list all tags -->
        <button
          @click="toggleTagMenu"
          :disabled="isMenuOpen"
          class="flex items-center h-full"
        >
          <div class="size-7 grid place-items-center shrink-0">
            <Tag :size="12" stroke-width="3" />
          </div>

          <div
            v-if="tags.length > 0"
            class="pr-3 text-sm font-medium flex items-center pb-[2px] gap-1 -translate-x-[2px]"
          >
            <TransitionGroup name="list">
              <p
                v-for="(tag, index) in tags"
                :key="index"
                class="max-w-20 truncate"
              >
                {{ tag }}
                <span v-if="index !== tags.length - 1">,</span>
              </p>
            </TransitionGroup>
          </div>
        </button>

        <!-- add tags menu -->
        <Transition name="add_tag">
          <div
            v-if="isAddingTag"
            class="absolute top-[110%] right-0 w-52 rounded-2xl bg-black/80 backdrop-blur-lg origin-top-right overflow-hidden flex flex-col divide-y divide-white/10 z-[999]"
          >
            <div class="w-full flex items-center px-4 gap-2">
              <Search
                :size="14"
                stroke-width="3"
                class="shrink-0 stroke-neutral-300"
              />
              <input
                type="text"
                placeholder="Enter or create tag"
                v-model="newTag"
                class="bg-transparent w-full py-2 border-none outline-none"
              />
            </div>

            <!-- existing tags div -->
            <div
              class="flex flex-col divide-y divide-white/10 max-h-36 overflow-scroll"
            >
              <TransitionGroup name="list" tag="ul">
                <button
                  v-for="(tag, index) in tags"
                  :key="index"
                  class="p-3 hover:bg-black/30 px-4 flex items-center justify-between w-full"
                >
                  <div class="flex items-center gap-3">
                    <Tag :size="14" stroke-width="3" class="shrink-0" />
                    <p class="truncate max-w-32">{{ tag }}</p>
                  </div>
                  <button
                    @click="removeTag(tag)"
                    class="grid place-content-center shrink-0"
                  >
                    <X
                      :size="14"
                      stroke-width="3"
                      class="hover:stroke-red-500"
                    />
                  </button>
                </button>
              </TransitionGroup>
            </div>

            <!-- add new tag -->
            <button
              v-if="newTag !== ''"
              @click="confirmTag"
              class="hover:bg-black/30 px-4 flex items-center gap-3 py-2"
            >
              <Tag :size="14" stroke-width="3" class="shrink-0" />
              <p class="truncate">{{ newTag }}</p>
            </button>

            <!-- clear button -->
            <div v-if="tags.length > 0" class="p-2">
              <button
                @click="clearAlltags"
                class="hover:bg-black/30 px-4 flex items-center justify-center w-full gap-3 py-2 border border-white/10 rounded-full text-red-500"
              >
                Clear All
              </button>
            </div>
          </div>
        </Transition>
      </div>
      <!-- menu icon -->
      <div class="group/btn_hover z-20">
        <button
          @click="toggleMenu"
          class="size-7 bg-black/70 hover:bg-black rounded-full grid place-items-center backdrop-blur-sm text-white"
        >
          <Ellipsis :size="12" stroke-width="3" />
        </button>
        <Transition name="add_tag">
          <div
            v-if="isMenuOpen"
            class="w-36 absolute top-[110%] right-0 flex flex-col divide-y divide-white/10 bg-black/80 shadow-lg backdrop-blur-xl origin-top-right rounded-xl overflow-hidden z-[999]"
          >
            <button
              class="py-2 hover:bg-black/90 px-4 flex items-center gap-2 w-full text-neutral-200 transition-all duration-200 font-semibold"
            >
              <Download :size="14" stroke-width="3" />
              Download
            </button>
            <button
              class="py-2 gap-2 hover:bg-black px-4 font-semibold flex items-center w-full text-red-500"
            >
              <Trash2 :size="14" stroke-width="3" />
              Delete
            </button>
          </div>
        </Transition>
      </div>
    </div>

    <canvas id="canvas" class="absolute -z-10" />
    <div class="w-full relative group/imagecard">
      <Reaction :type="type" @removeReaction="removeReaction" />
      <div
        @click="[dismissTag(), closeMenu()]"
        @dblclick="showReaction"
        ref="card"
        class="w-full h-full rounded-3xl overflow-hidden relative"
      >
        <div
          class="div absolute w-full h-full z-10 backdrop-blur-3xl"
          :class="isCensored ? 'opacity-1' : 'opacity-0'"
        ></div>
        <img
          src="https://i.pinimg.com/564x/ff/1c/e3/ff1ce3303546bf602bd09b884c07773a.jpg"
          class="w-full object-cover"
          alt=""
        />
      </div>
      <button
        @click="toggleCensor"
        class="absolute bottom-4 right-4 bg-black z-[20] size-8 grid place-items-center rounded-full opacity-0 group-hover/imagecard:opacity-[1] transition-all duration-200"
      >
        <Eye v-if="isCensored" class="stroke-white" :size="16" />
        <EyeOff v-else :size="16" class="stroke-white" />
      </button>
    </div>
  </div>

  <!-- render mask to close the add tag menu when user clicks the screen -->
  <div
    v-if="isAddingTag || isMenuOpen"
    @click="[dismissTag(), closeMenu()]"
    class="fixed inset-0 w-full h-screen z-[998]"
  ></div>
</template>

<style></style>
