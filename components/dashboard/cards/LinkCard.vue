<script setup lang="ts">
import { Ellipsis, ArrowUpRight, Trash, Info, X, Edit } from "lucide-vue-next";

const type = ref("pin");

const isMenuOpen = ref(false);
const openMenu = () => (isMenuOpen.value = true);
const closeMenu = () => (isMenuOpen.value = false);

// viewing details;
const isViewingDetails = ref(false);
const viewDetails = () => (isViewingDetails.value = true);
const dismissDetails = () => (isViewingDetails.value = false);

const isDeletingLink = ref(false);
const deleteLink = () => (isDeletingLink.value = true);
const dismissDelete = () => (isDeletingLink.value = false);
</script>

<template>
  <div
    class="w-full border border-neutral-300/60 relative group/linkcard rounded-3xl"
  >
    <Reaction type="heart" />
    <div class="w-full overflow-hidden rounded-3xl">
      <div class="w-full h-72">
        <img
          src="https://i.pinimg.com/564x/a5/71/1a/a5711a9ff4b107f56a6023b4cdb67a62.jpg"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div class="h-20 w-full px-5 flex items-center justify-between">
        <div class="flex items-center group/link cursor-pointer gap-3">
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
              class="translate-y-1 opacity-0 -translate-x-1 group-hover/link:translate-x-0 group-hover/link:-translate-y-0 group-hover/link:opacity-[1] transition-all duration-300"
            />
          </div>
        </div>
        <div class="relative">
          <!-- link menu -->
          <Transition name="menu_scale">
            <div
              v-if="isMenuOpen"
              class="absolute w-40 border border-neutral-300 right-0 bottom-full bg-white c_container !rounded-xl overflow-hidden z-[999] origin-bottom-right"
            >
              <button
                @click="[closeMenu(), viewDetails()]"
                class="h-12 w-full px-4 text-start flex items-center gap-3 hover:bg-neutral-100 transition-all duration-200"
              >
                <Info :size="14" />
                Details
              </button>
              <button
                @click="[closeMenu(), deleteLink()]"
                class="h-12 w-full px-4 text-start flex items-center gap-3 hover:text-red-500 transition-all duration-200"
              >
                <Trash :size="14" />
                Delete
              </button>
            </div>
          </Transition>

          <!-- mask -->
          <div
            v-if="isMenuOpen"
            @click="closeMenu"
            class="fixed top-0 left-0 w-full h-screen z-[998]"
          ></div>

          <button @click="openMenu">
            <Ellipsis class="stroke-neutral-700" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--! link details -->

  <!-- mask -->
  <Transition name="fade">
    <div
      v-if="isViewingDetails"
      class="fixed w-screen h-screen z-[998] bg-neutral-950/40 backdrop-blur-sm top-0 left-0 flex items-center justify-center"
    ></div>
  </Transition>

  <!-- actual modal -->
  <Transition name="modal_slide">
    <div
      v-if="isViewingDetails"
      class="fixed w-full h-screen flex items-start pt-32 justify-center z-[999] top-0 left-0"
    >
      <div
        class="w-full h-auto bg-white shadow-lg rounded-3xl flex flex-col max-w-xl relative"
      >
        <button
          @click="dismissDetails"
          class="absolute bottom-[104%] right-0 ring-[6px] ring-white size-8 shadow grid place-items-center bg-white rounded-full"
        >
          <X class="stroke-black" :size="18" stroke-width="3" />
        </button>
        <div class="flex flex-col gap-6">
          <div class="w-full overflow-hidden pt-6 px-6">
            <img
              src="https://i.pinimg.com/564x/a5/71/1a/a5711a9ff4b107f56a6023b4cdb67a62.jpg"
              alt=""
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div class="px-6 flex items-start w-full justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-3xl font-semibold tracking-tight">Color hunt</h1>
              <div class="flex items-center gap-1">
                <div class="size-6 bg-black rounded-full"></div>
                <p class="text-neutral-500 text-xl underline">colourhunt.io</p>
              </div>
            </div>
            <div
              class="size-10 rounded-full border border-neutral-300/90 grid place-items-center"
            >
              🔥
            </div>
          </div>
          <div
            class="border-t border-neutral-300/60 p-6 flex items-center justify-between"
          >
            <p>Added on 10/2/2024.</p>
            <div class="flex items-center gap-4">
              <button @click="[dismissDetails(), deleteLink()]">
                <Trash :size="20" />
              </button>
              <button><Edit :size="20" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!--! delete link -->

  <!-- mask -->
  <Transition name="fade">
    <div
      v-if="isDeletingLink"
      @click="dismissDelete"
      class="fixed w-screen h-screen z-[998] bg-black/40 top-0 left-0 flex items-center justify-center"
    ></div>
  </Transition>

  <!-- actual modal -->
  <Transition name="modal_scale">
    <div
      v-if="isDeletingLink"
      @click.self="dismissDelete"
      class="fixed w-full h-screen flex items-center justify-center z-[999] top-0 left-0"
    >
      <div
        class="w-full h-96 bg-white shadow-lg rounded-3xl flex flex-col max-w-xl"
      >
        <header class="flex justify-end p-6">
          <button @click="dismissDelete"><X /></button>
        </header>
      </div>
    </div>
  </Transition>
</template>

<style></style>
