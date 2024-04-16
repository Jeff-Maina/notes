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
        <section class="w-full grid md:grid-cols-2 lg:grid-cols-4 p-6">
          <div class="w-full col-span-1 flex flex-col gap-4">
            <!-- link -->
            <div
              class="w-full border border-neutral-300 rounded-3xl overflow-hidden relative group/linkcard"
            >
              <button
                class="absolute right-5 top-5 rounded-full size-10 opacity-0 border border-neutral-300 grid bg-white z-10 place-items-center group-hover/linkcard:opacity-[1] transition-all duration-100"
              >
                <Ellipsis :size="20" class="stroke-neutral-600" />
              </button>
              <div class="w-full h-72">
                <img
                  src="https://i.pinimg.com/564x/d5/92/11/d59211034f039d9e735af4bc9cb39155.jpg"
                  class="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div class="h-20 w-full px-5 flex items-center justify-between">
                <div
                  class="flex items-center justify-between w-full group/link cursor-pointer"
                >
                  <div class="flex items-center gap-3">
                    <div class="size-5 bg-black rounded-full"></div>
                    <a
                      href=""
                      class="text-lg md:text-xl underline underline-offset-4 decoration-neutral-300 transition-all duration-200 group-hover/link:decoration-black"
                      >Amazon.com</a
                    >
                  </div>
                  <div>
                    <ArrowUpRight
                      :size="16"
                      class="group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px] transition-all duration-100"
                    />
                  </div>
                </div>
              </div>
              <!-- <div class="pb-5 px-5 flex items-center border-t border-neutral-100 gap-2">
                <p class="bg-neutral-200 p-2 px-4 rounded-full text-sm font-medium">Colohunt</p>
                <p class="bg-neutral-200 p-2 px-4 rounded-full text-sm font-medium">Colohunt</p>

              </div> -->
            </div>
            <!-- colors -->
            <div
              class="w-full aspect-video bg-pink-400 rounded-3xl p-5 flex items-end group/colorcard cursor-pointer"
            >
              <p
                class="text-2xl font-semibold text-pink-900 translate-y-1 opacity-0 group-hover/colorcard:translate-y-0 group-hover/colorcard:opacity-[1] transition-all duration-100"
              >
                #434355
              </p>
            </div>
            <!-- todo -->
            <div class="w-full border border-neutral-300 rounded-3xl">
              <header class="p-5 flex flex-col gap-1 border-b">
                <p class="font-medium text-neutral-500 text-lg">10/7/2020</p>
                <p
                  class="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight"
                >
                  Things i am supposed to build
                </p>
              </header>
              <div class="p-5 flex flex-col">
                <div class="flex gap-3 py-2 items-baseline">
                  <div
                    class="size-4 shrink-0 lg:size-5 border-2 translate-y-1 border-neutral-600 rounded-full"
                  ></div>
                  <div class="">
                    <p class="text-xl text-neutral-700 font-normal">
                      Labore est dolor esse quis.
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 py-2 items-baseline">
                  <div
                    class="size-4 shrink-0 lg:size-5 border-2 translate-y-1 border-neutral-600 rounded-full"
                  ></div>
                  <div class="">
                    <p class="text-xl text-neutral-700 font-normal">
                      Non commodo tempor laboris ad ad aute.
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 py-2 items-baseline">
                  <div
                    class="size-4 shrink-0 lg:size-5 border-2 translate-y-1 border-neutral-600 rounded-full"
                  ></div>
                  <div class="">
                    <p class="text-xl text-neutral-700 font-normal">
                      Qui cupidatat labore culpa et deserunt non.
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 py-2 items-baseline">
                  <div
                    class="size-4 shrink-0 lg:size-5 border-2 translate-y-1 border-neutral-600 rounded-full"
                  ></div>
                  <div class="">
                    <p class="text-xl text-neutral-700 font-normal">
                      Irure occaecat proident voluptate do ut tempor magna dolor
                      velit.
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 py-2 items-baseline">
                  <div
                    class="size-4 shrink-0 lg:size-5 border-2 translate-y-1 border-neutral-600 rounded-full"
                  ></div>
                  <div class="">
                    <p class="text-xl text-neutral-700 font-normal">
                      Exercitation labore officia eiusmod proident laboris
                      aliquip veniam anim irure dolor aliqua dolor.
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 py-2 items-baseline">
                  <div
                    class="size-4 shrink-0 lg:size-5 border-2 translate-y-1 border-neutral-600 rounded-full"
                  ></div>
                  <div class="">
                    <p class="text-xl text-neutral-700 font-normal">
                      Irure occaecat proident voluptate do ut tempor magna dolor
                      velit.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="p-5 border-t border-neutral-200 flex items-center justify-between"
              >
                <p class="text-xl font-semibold tracking-wider">2/4</p>
                <div>
                  <Maximize2 :size="18" />
                </div>
              </div>
            </div>
            <!-- image -->
            <div class="w-full rounded-3xl overflow-hidden">
              <img src="https://i.pinimg.com/564x/20/e5/f6/20e5f69171e58776fbd0d99916459766.jpg" class="w-full object-cover" alt="" />
            </div>
            <!-- codeblock -->
          </div>
          <div class="w-full col-span-1"></div>
          <div class="w-full col-span-1"></div>
          <div class="w-full col-span-1"></div>
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
