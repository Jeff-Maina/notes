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
  Plus,
} from "lucide-vue-next";
import { FilePlus } from "lucide-vue-next";
import { availableCategories } from "~/data/Websitedata";

const props = defineProps({
  isCreatingItem: {
    type: Boolean,
  },
});

const emits = defineEmits(["closeModal", "createItem"]);

// States for various modals;
const isCreatingLink = ref(false);
const createLink = () => (isCreatingLink.value = true);

// closes any open modal
const closeActiveModal = () => {
  isCreatingLink.value = false;
};
</script>

<template>
  <div
    class="w-full absolute left-0 top-full overflow-hidden bg-white border-t custom_transition rounded-b-3xl b_container"
    :class="isCreatingItem ? 'h-[448px]' : 'h-[0px]'"
  >
    <button
      @click="$emit('closeModal')"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <Notebook :size="16" />
        Notes
      </div>
      <Plus :size="16" />
    </button>
    <button
      @click="[$emit('createItem', 'link'), $emit('closeModal')]"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <Link :size="16" />
        Link
      </div>
      <Plus :size="16" />
    </button>
    <button
      @click="$emit('closeModal')"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <Asterisk :size="16" />
        Code Snippet
      </div>
      <Plus :size="16" />
    </button>
    <button
      @click="$emit('closeModal')"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <Book :size="16" />
        Thought
      </div>
      <Plus :size="16" />
    </button>
    <button
      @click="$emit('closeModal')"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <Image :size="16" />
        Image
      </div>
      <Plus :size="16" />
    </button>
    <button
      @click="$emit('closeModal')"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <ListTodo :size="16" />
        Todo
      </div>
      <Plus :size="16" />
    </button>
    <button
      @click="$emit('closeModal')"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <Twitter :size="16" />
        Tweet
      </div>
      <Plus :size="16" />
    </button>
    <button
      @click="$emit('closeModal')"
      class="min-h-14 px-5 flex items-center justify-between hover:bg-neutral-100 duration-100 w-full"
    >
      <div class="flex items-center gap-3">
        <PaintBucket :size="16" />
        Color
      </div>
      <Plus :size="16" />
    </button>
  </div>
</template>

<style></style>
