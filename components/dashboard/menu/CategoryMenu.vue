<script setup lang="ts">
import {
  Asterisk,
  Book,
  Hash,
  Image,
  Link,
  ListTodo,
  Notebook,
  Twitter,
  ChevronLeft,
  Dot,
  PaintBucket,
} from "lucide-vue-next";

import { categories } from "../../../data/Websitedata";

interface CategoryInterface {
  category: string;
  tags: {
    tagName: string;
    tagCount: number;
  }[];
  categoryItems: number;
  categoryColor: string;
}

const isCategoryClicked = ref(false);
const clickedCategoryIndex = ref(1000);

const toggleCategoryClicked = (index: number) => {
  clickedCategoryIndex.value =
    clickedCategoryIndex.value === index ? 1000 : index;
  isCategoryClicked.value = !isCategoryClicked.value;
};

// logic for conditional rendering for categories;
const isFirst = (index: number) => index === 0;
const isLast = (index: number, categories: CategoryInterface[]) =>
  index === categories.length - 1;
const anyCategoryClicked = () => clickedCategoryIndex.value !== 1000;
const isThisCategoryClicked = (index: number) =>
  clickedCategoryIndex.value === index;

// Passed props
const props = defineProps({
  isCategoryMenuShowing: {
    type: Boolean,
  },
});

const resetMenu = () => {
  clickedCategoryIndex.value = 1000;
};

// defining emits..to clear errors;
const emits = defineEmits(["toggleMenu"]);
</script>

<template>
  <!-- mask -->
  <UiMask
    @toggleMask="[resetMenu(), $emit('toggleMenu')]"
    :isMaskActive="isCategoryMenuShowing"
  />

  <!-- modal -->
  <Transition name="menu_slide">
    <div
      v-if="isCategoryMenuShowing"
      class="absolute rounded-3xl top-[120%] right-0 flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 text-sm md:text-base menu z-[999] transition-all duration-350"
      :class="anyCategoryClicked() ? 'scale-[.96]' : 'scale-100 bg-white'"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="h-14 w-56 md:w-64 flex items-center justify-between font-normal transition-colors duration-100 relative bg-white"
        :class="
          index === 0
            ? 'rounded-t-3xl'
            : index === categories.length - 1 && 'rounded-b-3xl'
        "
      >
        <div
          class="flex items-center w-full justify-between px-5 absolute left-2/4  -translate-x-2/4 transition-all duration-350"
          :class="[
            isFirst(index)
              ? 'rounded-t-3xl'
              : isLast(index, categories) &&
                !isThisCategoryClicked(index) &&
                'rounded-b-3xl',
            !anyCategoryClicked()
              ? ' scale-100 shadow-none z-10 translate-y-0 rounded-t-3xl'
              : isThisCategoryClicked(index)
              ? 'bg-white shadow -translate-y-2  z-20 scale-[1.07] rounded-t-3xl'
              : 'translate-y-0 bg-neutral-300',
          ]"
        >
          <button
            @click="toggleCategoryClicked(index)"
            :disabled="anyCategoryClicked() && !isThisCategoryClicked(index)"
            class="w-full h-14 flex items-center justify-between z-10 relative rounded-t-3xl"
          >
            <div class="flex items-center gap-3 select-none">
              <ChevronLeft v-if="isThisCategoryClicked(index)" :size="16" />
              <Notebook v-else-if="category.category === 'Notes'" :size="16" />
              <Link v-else-if="category.category === 'Links'" :size="16" />
              <Asterisk
                v-else-if="category.category === 'Code Snippets'"
                :size="16"
              />
              <Book v-else-if="category.category === 'Thoughts'" :size="16" />
              <Image v-else-if="category.category === 'Images'" :size="16" />
              <ListTodo v-else-if="category.category === 'Todos'" :size="16" />
              <Twitter v-else-if="category.category === 'Tweets'" :size="16" />
              <PaintBucket v-else-if="category.category === 'Colors'" :size="16"  />
              <span>
                {{ category.category }}
              </span>
            </div>
            <div class="grid place-items-center rounded-full badge">
              <p
                class="text-sm md:text-base select-none"
                :style="{ color: category.categoryColor }"
              >
                {{ category.categoryItems }}
              </p>
            </div>
          </button>
          <div
            class="absolute top-full w-full bg-white left-0 z-0 rounded-b-3xl custom_transition overflow-hidden border-t flex flex-col divide-y divide-neutral-100 md:divide-neutral-200 tags_box"
            :class="
              isThisCategoryClicked(index)
                ? ` max-h-[14rem] overflow-scroll border-neutral-100 md:border-neutral-300 opacity-1 `
                : 'max-h-0 border-none overflow-hidden -translate-y-[10px]'
            "
          >
            <a
              v-for="(tag, i) in category.tags"
              :key="i"
              class="w-full flex items-center justify-between min-h-14 px-5 hover:bg-neutral-100 cursor-pointer"
            >
              <div class="flex items-center gap-3 select-none text-neutral-800">
                <!-- <Dot :size="16" /> -->
                <div class="size-[6px] rounded-full bg-red-500"></div>
                <span>{{ tag.tagName }}</span>
              </div>
              <div class="grid place-items-center rounded-full badge">
                <p
                  class="text-sm md:text-base select-none"
                  :style="{ color: category.categoryColor }"
                >
                  {{ tag.tagCount }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.badge {
  font-family: "Gelion Medium";
}

.custom_transition {
  transition: all 350ms ease;
}

.duration-350 {
  transition-duration: 350ms;
}

.tags_box {
  scrollbar-width: thin;
}

</style>
