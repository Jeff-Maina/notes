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
} from "lucide-vue-next";

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
  },
  tags: {
    type: Object as () => String[] || undefined,
  },

});


</script>

<template>
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
                <X :size="14" stroke-width="3" class="hover:stroke-red-500" />
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
</template>

<style></style>
