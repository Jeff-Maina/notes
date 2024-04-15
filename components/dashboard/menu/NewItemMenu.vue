<script setup lang="ts">
import { FolderPlus, FilePlus2, ChevronLeft } from "lucide-vue-next";
const props = defineProps({
  isCreatingNewItem: {
    type: Boolean,
  },
});

const emits = defineEmits(["closeMenu"]);

// Create new Folde;
const isCreatingFolder = ref(false);
const createNewFolder = () => (isCreatingFolder.value = true);
const closeModal = () => (isCreatingFolder.value = false);

// Create new Item;
const isCreatingItem = ref(false);
const toggleCreateNewItem = () =>
  (isCreatingItem.value = !isCreatingItem.value);
const dontCreate = () => (isCreatingItem.value = false);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "F") {
      createNewFolder();
    }
  });
});

const itemBeingCreated = ref("");
const createItem = (value: string) => (itemBeingCreated.value = value);

const closeActiveModal = () => {
  itemBeingCreated.value = "";
};
</script>

<template>
  <UiMask
    :isMaskActive="isCreatingNewItem"
    @toggleMask="[$emit('closeMenu'), dontCreate()]"
  />
  <Transition name="menu_slide">
    <div
      v-if="isCreatingNewItem"
      class="absolute top-[150%] right-0 w-52 bg-white shadow rounded-3xl z-[999] flex flex-col divide divide-y divide-neutral-100 md:divide-neutral-200 font- text-sm md:text-base font-normal transition-transform duration-350"
      :class="isCreatingItem ? 'scale-[.96]' : 'scale-100 bg-white'"
    >
      <div class="h-14">
        <div
          class="flex items-center justify-between absolute right-0 transition-all duration-350 bg-white z-20 rounded-t-3xl"
          :class="
            isCreatingItem ? 'scale-[1.1] w-[120%]' : 'scale-1 bg-white w-full'
          "
        >
          <button
            @click="toggleCreateNewItem"
            class="h-14 px-5 rounded-t-3xl w-full flex items-center gap-3 transition-all duration-100 hover:bg-neutral-100"
          >
            <div>
              <FilePlus2 v-if="!isCreatingItem" :size="18" />
              <ChevronLeft v-else :size="18" />
            </div>
            <span>New file</span>
          </button>
          <DashboardMenuChooseItemMenu
            @closeModal="[$emit('closeMenu'), dontCreate()]"
            @createItem="createItem"
            :isCreatingItem="isCreatingItem"
          />
        </div>
      </div>
      <!-- create new folder button -->
      <button
        @click="[createNewFolder(), $emit('closeMenu')]"
        class="h-14 w-full px-5 flex items-center gap-3 hover:bg-neutral-100 transition-all duration-100 rounded-b-3xl"
        :class="isCreatingItem && 'grayscale bg-neutral-300'"
      >
        <div><FolderPlus :size="18" /></div>
        <span>New Folder</span>
      </button>
    </div>
  </Transition>

  <!-- Modals -->
  <DashboardModalsNewfolderModal
    :isCreatingFolder="isCreatingFolder"
    @closeModal="closeModal"
  />
  <DashboardModalsNewlink
    :itemBeingCreated="itemBeingCreated"
    @closeModal="closeActiveModal"
  />
</template>

<style></style>
