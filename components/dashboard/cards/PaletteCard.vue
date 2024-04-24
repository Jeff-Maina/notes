<script setup lang="ts">
import { toast } from "vue-sonner";

const props = defineProps({
  colors: {
    type: Array,
  },
});

const colors = ref(props.colors);
const copiedIndex = ref(1000);

const copyColor = (value: string, index: number) => {
  toast.success("Color copied");
  copiedIndex.value = index;
  setTimeout(() => {
    copiedIndex.value = 1000;
  }, 1000);
};
</script>

<template>
  <div
    class="w-full h-96 rounded-2xl bg-neutral-100 overflow-hidden grid transition-all duration-200 gap-[1px]"
    :class="[
      colors && colors.length === 1 && '',
      colors && colors.length === 2 && 'grid-cols-2',
      colors && colors.length === 3 && 'grid-cols-2 grid-rows-2',
      colors && colors.length >= 4 && 'grid-cols-3 grid-rows-2',
    ]"
  >
    <div
      v-for="(color, index) in colors"
      :key="index"
      :class="[
        colors && colors.length === 3 && index === 0 && 'row-span-2',
        colors && colors.length >= 4 && index < 1 && 'row-span-2',
        colors &&
          colors.length === 4 &&
          index === colors.length - 1 &&
          'col-span-2',
      ]"
      class="w-full h-full relative group/colortab"
    >
      <div
        :style="{
          backgroundColor: String(color),
        }"
        @click="copyColor(String(color), index)"
        class="w-full h-full relative p-3 group/colortab flex items-end cursor-pointer"
      >
        <p
          class="opacity-0 group-hover/colortab:opacity-[1] transition-all duration-150 text-white"
        >
          {{ index === copiedIndex ? "copied!" : color }}
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
