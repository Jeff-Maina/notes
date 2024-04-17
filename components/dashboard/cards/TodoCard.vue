<script setup lang="ts">
import { Maximize2 } from "lucide-vue-next";
</script>

<template>
  <div class="w-full border border-neutral-300/60 rounded-3xl">
    <header class="p-5 flex flex-col gap-1 border-b">
      <p class="font-medium text-neutral-500 text-lg">10/7/2020</p>
      <p class="md:text-2xl font-semibold tracking-tight">
        Things i am supposed to build
      </p>
    </header>
    <div class="p-5 flex flex-col">
      <div class="flex gap-3 py-2 items-baseline">
        <div
          class="size-4 shrink-0 border-2 translate-y-1 border-neutral-400 rounded-full"
        ></div>
        <div class="">
          <p class="md:text-lg text-neutral-600 font-light">
            Labore est dolor esse quis.
          </p>
        </div>
      </div>
      <div class="flex gap-3 py-2 items-baseline">
        <div
          class="size-4 shrink-0 border-2 translate-y-1 border-neutral-400 rounded-full"
        ></div>
        <div class="">
          <p class="md:text-lg text-neutral-600 font-light">
            Non commodo tempor laboris ad ad aute.
          </p>
        </div>
      </div>
      <div class="flex gap-3 py-2 items-baseline">
        <div
          class="size-4 shrink-0 border-2 translate-y-1 border-neutral-400 rounded-full"
        ></div>
        <div class="">
          <p class="md:text-lg text-neutral-600 font-light">
            Qui cupidatat labore culpa et deserunt non.
          </p>
        </div>
      </div>
      <div class="flex gap-3 py-2 items-baseline">
        <div
          class="size-4 shrink-0 border-2 translate-y-1 border-neutral-400 rounded-full"
        ></div>
        <div class="">
          <p class="md:text-lg text-neutral-600 font-light">
            Irure occaecat proident voluptate do ut tempor magna dolor velit.
          </p>
        </div>
      </div>
      <div class="flex gap-3 py-2 items-baseline">
        <div
          class="size-4 shrink-0 border-2 translate-y-1 border-neutral-400 rounded-full"
        ></div>
        <div class="">
          <p class="md:text-lg text-neutral-600 font-light">
            Exercitation labore officia eiusmod proident laboris aliquip veniam
            anim irure dolor aliqua dolor.
          </p>
        </div>
      </div>
      <div class="flex gap-3 py-2 items-baseline">
        <div
          class="size-4 shrink-0 border-2 translate-y-1 border-neutral-400 rounded-full"
        ></div>
        <div class="">
          <p class="md:text-lg text-neutral-600 font-light">
            Irure occaecat proident voluptate do ut tempor magna dolor velit.
          </p>
        </div>
      </div>
    </div>
    <div
      class="p-5 border-t border-neutral-200 flex items-center justify-between"
    >
      <p class="md:text-lg font-semibold tracking-wider">2/4</p>
      <div>
        <Maximize2 :size="18" />
      </div>
    </div>
  </div>
</template>

<style></style>
