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
  Plus
} from "lucide-vue-next";
import { FilePlus } from "lucide-vue-next";
import { availableCategories } from "~/data/Websitedata";

const props = defineProps({
  isCreatingItem: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="w-full absolute left-0 top-full overflow-hidden bg-white border-t custom_transition rounded-b-3xl b_container"
    :class="isCreatingItem ? 'h-[448px]' : 'h-[0px]'"
  >
    <a
      v-for="(category, index) in availableCategories"
      :href="category.link"
      :key="index"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100"
    >
      <div class="flex items-center gap-3">
        <Notebook v-if="category.category === 'Note'" :size="16" />
        <Link v-if="category.category === 'Link'" :size="16" />
        <Asterisk v-if="category.category === 'Code Snippet'" :size="16" />
        <Book v-if="category.category === 'Thought'" :size="16" />
        <Image v-if="category.category === 'Image'" :size="16" />
        <ListTodo v-if="category.category === 'Todo'" :size="16" />
        <Twitter v-if="category.category === 'Tweet'" :size="16" />
        <PaintBucket v-if="category.category === 'Color'" :size="16" />
        {{ category.category }}
      </div>
      <Plus :size="16" />
    </a>
  </div>
</template>

<style></style>
