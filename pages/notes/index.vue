<script setup lang="ts">
import {
  ListFilter,
  X,
  Plus,
  ArrowUpRight,
  Ellipsis,
  Maximize2,
} from "lucide-vue-next";

definePageMeta({
  layout: false,
});

const isCategoryMenuShowing = ref(false);
const toggleCategoryMenu = () => {
  console.log("clicked");
  isCategoryMenuShowing.value = !isCategoryMenuShowing.value;
};
const closeCategoryMenu = () => (isCategoryMenuShowing.value = false);
</script>

<template>
  <main class="">
    <section class="w-full m-auto border flex ml-auto justify-end">
      <DashboardSidebar />
      <div class="py-4 w-[calc(100%-5rem)]">
        <header
          class="px-6 font-bold flex items-center justify-between w-full pb-4"
        ></header>
        <section class="w-full grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div class="w-full col-span-1 flex flex-col gap-4">
            <!-- link -->
            <DashboardCardsLinkCard />
            <!-- colors -->
            <DashboardCardsColorCard />
            <!-- todo -->
            <DashboardCardsTodoCard />
            <!-- image -->
            <DashboardCardsImageCard />
            <!-- codeblock -->
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <DashboardCardsCodeCard />
            <DashboardCardsTweetCard />
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <DashboardCardsThoughtCard />
            <DashboardCardsNotesCard />
          </div>
          <div class="w-full col-span-1 flex flex-col gap-4">
            <DashboardCardsTweetCard />
            <DashboardCardsColorCard />
            <DashboardCardsLinkCard />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<style scoped></style>

<!-- <h1 class="text-2xl tracking-tighter text-black"></h1>
<div class="flex items-center gap-3">
  <div class="relative">
    <button
      @click="toggleCategoryMenu"
      class="size-10 grid place-items-center rounded-full relative transition-all duration-100"
      :class="
        isCategoryMenuShowing
          ? 'bg-white shadow z-[999]'
          : 'bg-neutral-200 z-0'
      "
    >
      <ListFilter
        v-if="!isCategoryMenuShowing"
        stroke-width="3"
        class="stroke-neutral-600 size-4"
      />
      <X
        v-else
        :size="16"
        stroke-width="3"
        class="stroke-neutral-600"
      />
    </button>
    <DashboardMenuCategoryMenu
      @toggleMenu="closeCategoryMenu"
      :isCategoryMenuShowing="isCategoryMenuShowing"
    />
  </div>
  <DashboardCreateButton /> 
</div> -->
