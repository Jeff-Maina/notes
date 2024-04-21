<script setup lang="ts">
import { Check, X, Palette, Tag, ImagePlus, Eye } from "lucide-vue-next";
const props = defineProps({
  isCreatingImage: {
    type: Boolean,
  },
});

// tags logic;
const newTag = ref("");
const tags = ref<String[]>([]);
const addTag = (e: any) => {
  if (e.key === "Enter") {
    if (!tags.value.includes(newTag.value) && newTag.value !== " ") {
      tags.value.push(newTag.value);
    }
    newTag.value = "";
  }
};

const removeTag = (value: String) => {
  const newTags = tags.value.filter((tag) => tag !== value);
  tags.value = newTags;
};

// adding logic;
const color = ref("");
const isCensored = ref(false);
const toggleCensorship = () => (isCensored.value = !isCensored.value);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isCreatingImage"
      class="fixed z-[999] w-full h-screen bg-black/20 pt-20"
    ></div>
  </Transition>
  <Transition name="modal_slide">
    <div
      v-if="isCreatingImage"
      class="w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center"
    >
      <div
        class="w-full max-w-lg bg-white rounded-2xl shadow flex flex-col overflow-scroll divide-y divide-neutral-200"
      >
        <div class="p-3">
          <div
            class="w-full h-96 bg-neutral-100 border border-neutral-200 rounded-xl grid place-items-center"
          >
            <div class="flex flex-col items-center">
              <ImagePlus class="stroke-neutral-400" />
              <p class="text-neutral-500">Drag and drop image</p>
            </div>
          </div>
        </div>
        <div class="h-14 flex items-center relative justify-between pr-3">
          <div class="w-12 grid place-items-center absolute inset-0">
            <Eye :size="16" class="stroke-neutral-600" />
          </div>
          <p class="pl-12 text-lg text-neutral-800">Hide the image</p>
          <div>
            <div
              @click="toggleCensorship"
              :class="isCensored ? 'bg-black' : 'bg-neutral-200'"
              class="h-7 p-1 flex items-center w-[48px] rounded-full bg-black cursor-pointer transition-all duration-200"
            >
              <div
                class="size-5 rounded-full transition-all duration-200 pointer-events-none"
                :class="
                  isCensored ? 'bg-white translate-x-full' : 'bg-neutral-400'
                "
              ></div>
            </div>
          </div>
        </div>

        <div class="h-14 flex items-center relative">
          <div class="w-12 grid place-items-center absolute inset-0">
            <Tag :size="16" class="stroke-neutral-600" />
          </div>
          <input
            type="text"
            @keyup="addTag"
            v-model="newTag"
            placeholder="Enter a tag and press enter"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-500 border-none text-lg"
          />
        </div>

        <div class="">
          <div v-if="tags.length > 0" class="p-3 flex flex-wrap gap-2 py-5">
            <TransitionGroup name="tag" mode="in-out">
              <div
                v-for="(tag, index) in tags"
                :key="index"
                class="rounded-full bg-neutral-200 px-6 py-[2px] font-medium text-neutral-700 flex items-center text-lg relative"
              >
                {{ tag }}
                <button
                  @click="[removeTag(tag)]"
                  class="p-1 rounded-full grid place-items-center absolute -top-2 bg-neutral-600 text-white -right-2"
                >
                  <X :size="12" stroke-width="3" />
                </button>
              </div>
            </TransitionGroup>
          </div>
          <div class="p-3"></div>
          <div class="p-3 flex items-center justify-end gap-3">
            <button
              @click="$emit('dismissImage')"
              class="p-3 px-6 font-semibold text-neutral-700 border border-neutral-200 hover:border-neutral-300 rounded-xl"
            >
              Cancel
            </button>
            <button
              class="p-3 px-6 font-semibold text-white rounded-xl bg-neutral-900"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
/* transition groups */
</style>

<!-- tags with multiple spaces before the word may bypass the 'uniquee check' -->
