<script setup lang="ts">
import { Ellipsis, ArrowUpRight } from "lucide-vue-next";

const type = ref("pin");
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
          <div></div>
          <button>
            <Ellipsis class="stroke-neutral-700" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
