<script setup lang="ts">
import { Check, X, Link, Tag } from "lucide-vue-next";
const props = defineProps({
  isCreatingBookmark: {
    type: Boolean,
  },
});

const isLoading = ref(false);
const loadBookmark = () => (isLoading.value = true);
const hasFinished = ref(false);

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
const url = ref("");
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isCreatingBookmark"
      class="fixed z-[999] w-full h-screen bg-black/20 pt-20"
    ></div>
  </Transition>
  <Transition name="modal_slide">
    <div
      v-if="isCreatingBookmark"
      class="w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center"
    >
      <div
        class="w-full max-w-md bg-white rounded-2xl shadow flex flex-col overflow-scroll divide-y divide-neutral-200"
      >
        <header class="w-full h-14 flex items-center relative">
          <div class="w-12 grid place-items-center absolute inset-0">
            <Link :size="16" class="stroke-neutral-600" />
          </div>
          <input
            type="text"
            placeholder="Enter url"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-500 border-none text-lg"
          />
        </header>

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
          <div class="p-3 flex flex-wrap gap-2 py-5">
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
          <div class="p-3">
            <div class="flex items-center gap-2">
              <div class="size-14 bg-neutral-200 rounded-full"></div>
              <div class="flex flex-col gap-2 justify-center">
                <div class="w-20 h-3 bg-neutral-200 rounded-full"></div>
                <div class="w-44 rounded-full h-3 bg-neutral-200"></div>
              </div>
            </div>
          </div>
          <div class="p-3 flex items-center justify-end gap-3">
            <button
            @click="$emit('dismissBookMark')"
              class="p-2 px-6 font-semibold text-neutral-700 border border-neutral-200 hover:border-neutral-300 rounded-xl "
            >
              Cancel
            </button>
            <button
              class="p-2 px-6 font-semibold text-white rounded-xl bg-neutral-900"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <!-- <button
        @click="$emit('dismissBookmark')"
        class="size-10 bg-neutral-100 rounded-full grid place-items-center absolute top-3 right-3"
      >
        <X :size="18" stroke-width="3" />
      </button> -->
    </div>
  </Transition>
</template>

<style>
/* transition groups */


</style>



<!-- tags with multiple spaces before the word may bypass the 'uniquee check' -->