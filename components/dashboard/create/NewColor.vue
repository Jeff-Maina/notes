<script setup lang="ts">
import {
  Check,
  X,
  Palette,
  Tag,
  PaintBucket,
  CircleHelp,
} from "lucide-vue-next";
const props = defineProps({
  isCreatingColor: {
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
const colors = ref<string[]>([]);

const addColor = (e: any) => {
  if (e.key === "Enter") {
    if (
      color.value !== "" &&
      !colors.value.includes(color.value) &&
      colors.value.length < 5
    ) {
      colors.value.push(color.value);
    }
    color.value = "";
  }
  console.log(colors.value, color.value);
};

const removeColor = (value: string) => {
  const filtered = colors.value.filter((i) => i !== value);
  colors.value = filtered;
};
</script>

<template>
  <!-- mask -->
  <Transition name="fade">
    <div
      v-if="isCreatingColor"
      class="fixed z-[999] w-full h-screen bg-black/20 pt-20"
    ></div>
  </Transition>

  <!-- modal -->
  <Transition name="modal_slide">
    <div
      v-if="isCreatingColor"
      class="w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center"
    >
      <div
        class="w-full max-w-md bg-white rounded-2xl shadow flex flex-col divide-y divide-neutral-200"
      >
        <header class="w-full h-14 flex items-center relative">
          <div class="w-12 grid place-items-center absolute inset-0">
            <PaintBucket :size="16" class="stroke-neutral-600" />
          </div>
          <input
            type="text"
            placeholder="Enter color and press enter"
            v-model="color"
            @keyup="addColor"
            class="h-full w-full px-3 pl-12 outline-none focus:bg-neutral-100 placeholder:text-neutral-500 border-none text-lg pr-10 rounded-t-2xl"
          />
          <div class="absolute top-3 right-3 rounded-full">
            <button class="peer">
              <CircleHelp
                :size="18"
                stroke-width="2"
                class="stroke-neutral-600 hover:stroke-black"
              />
            </button>
            <div
              class="absolute bottom-[160%] left-2/4 -translate-x-2/4 border border-neutral-200/70 p-3 rounded-lg z-[20] w-52 h-auto bg-white text-sm text-neutral-700 opacity-0 translate-y-1 peer-hover:opacity-[1] peer-hover:translate-y-0 transition-all duration-200"
            >
              <p>
                Add more than one color to form a palette.Simply enter a color
                and press enter.You can add a maximum of 5 colors.
              </p>
              <div
                class="absolute left-2/4 top-full size-4 bg-white border-b border-r border-neutral-300 border-t-transparent -translate-x-2/4 rotate-45 -translate-y-2/4"
              ></div>
            </div>
          </div>
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
          <div class="p-3 flex flex-wrap gap-2 py-5" v-if="tags.length > 0">
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
            <!-- preview color -->
            <div class="flex items-center gap-2">
              <div
                class="w-full aspect-video rounded-2xl bg-neutral-100 overflow-hidden grid gap-[2px] transition-all duration-200"
                :class="[
                  colors.length === 1 && '',
                  colors.length === 2 && 'grid-cols-2',
                  colors.length === 3 && 'grid-cols-2 grid-rows-2',
                  colors.length >= 4 && 'grid-cols-3 grid-rows-2',
                ]"
              >
                <div
                  v-for="(color, index) in colors"
                  :key="index"
                  :class="[
                    colors.length === 3 && index === 0 && 'row-span-2',
                    colors.length >= 4 && index < 1 && 'row-span-2',
                    colors.length === 4 &&
                      index === colors.length - 1 &&
                      'col-span-2',
                  ]"
                  class="w-full h-full relative group/colortab"
                >
                  <div
                    :style="{
                      backgroundColor: color,
                    }"
                    class="w-full h-full relative"
                  >
                    <button
                      @click="removeColor(color)"
                      class="size-5 bg-black rounded-full absolute top-2 right-2 grid place-items-center opacity-0 group-hover/colortab:opacity-[1] transition-all duration-150"
                    >
                      <X class="stroke-white" :size="14" stroke-width="3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 flex items-center justify-end gap-3">
            <button
              @click="$emit('dismissColor')"
              class="p-2 px-6 font-semibold text-neutral-700 border border-neutral-200 hover:border-neutral-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              class="p-2 px-6 font-semibold text-white rounded-lg bg-neutral-900"
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
