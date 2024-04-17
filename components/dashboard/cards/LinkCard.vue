<script setup lang="ts">
import { Ellipsis, ArrowUpRight } from "lucide-vue-next";
</script>

<template>
  <div
    class="w-full border border-neutral-300/60 rounded-3xl overflow-hidden relative group/linkcard"
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
  </div>
</template>

<style></style>
