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
import { toast } from "vue-sonner";

const type = ref("");
const setType = (value: string) => (type.value = value);
const removeReaction = () => (type.value = "");

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const openMenu = () => (isMenuOpen.value = true);
const closeMenu = () => (isMenuOpen.value = false);

// viewing details;
const isViewingDetails = ref(false);
const viewDetails = () => (isViewingDetails.value = true);
const dismissDetails = () => (isViewingDetails.value = false);

// deleting link
const isDeletingLink = ref(false);
const isProcessingDelete = ref(false);
const deleteLink = () => (isDeletingLink.value = true);
const dismissDelete = () => (isDeletingLink.value = false);

const confirmDelete = () => {
  isProcessingDelete.value = true;
};

// adding tags;
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

// copying the link;
const hasCopiedLink = ref(false);
const copyLink = () => {
  toast.success("Link copied");
  closeMenu();
};

// Reaction logic

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

type linkdetails = {
  websiteLink: string;
  websiteName: string;
  websiteFavicon: string;
  websiteImage: string;
};

const props = defineProps({
  linkDetails: {
    type: Object as () => linkdetails,
  },
});

const showImage = ref(true);
const hideImage = () => (showImage.value = false);
</script>

<template>
  <!-- link card -->
  <div
    class="relative group/linkcard"
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
        isAddingTag || isDeletingLink || isMenuOpen
          ? ''
          : 'opacity-[0] group-hover/linkcard:opacity-[1] z-20 transition-all duration-300'
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
            class="w-32 absolute top-[110%] right-0 flex flex-col divide-y divide-white/10 bg-black/80 shadow-lg backdrop-blur-xl origin-top-right rounded-xl overflow-hidden z-[999]"
          >
            <button
              @click="copyLink"
              class="py-2 hover:bg-black/90 px-4 flex items-center gap-2 w-full text-neutral-200 transition-all duration-200 font-semibold"
            >
              <Clipboard :size="14" stroke-width="3" />
              Copy
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

    <div
      @dblclick="showReaction"
      @click="[dismissTag(), closeMenu()]"
      ref="card"
      class="w-full border transition-all duration-150 relative rounded-xl bg-white group/lin"
    >
      <Reaction :type="type" @removeReaction="removeReaction" />
      <div class="w-full overflow-hidden rounded-xl">
        <div class="w-full h-52 bg-neutral-200">
          <img
            :src="linkDetails?.websiteImage"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div class="h-16 w-full px-5 flex items-center justify-between">
          <div class="flex items-center group/link cursor-pointer gap-1">
            <div class="flex items-center gap-3">
              <div class="size-5 bg-black rounded-full overflow-hidden">
                <img
                  :src="linkDetails?.websiteFavicon"
                  class="w-full h-full"
                  alt=""
                />
              </div>
              <a
                href=""
                class="text-lg underline underline-offset-4 decoration-2 decoration-neutral-300 transition-all duration-200 group-hover/link:decoration-black truncate"
                >{{ linkDetails?.websiteName }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- render mask to close the add tag menu when user clicks the screen -->
  <div
    v-if="isAddingTag || isMenuOpen"
    @click="[dismissTag(), closeMenu()]"
    class="fixed inset-0 w-full h-screen z-[998]"
  ></div>
</template>

<style>
.confirm_delete-enter-from,
.confirm_delete-leave-to {
  opacity: 0;
}

.confirm_delete-enter-active,
.confirm_delete-leave-active {
  transition: opacity 0.1s ease;
}

/* /// */

.add_tag-enter-from,
.add_tag-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.add_tag-enter-active,
.add_tag-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}

/* transition groups */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
