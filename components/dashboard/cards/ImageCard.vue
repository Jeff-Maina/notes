<script setup lang="ts">
import { Eye, EyeOff } from "lucide-vue-next";

const type = ref("");
const setType = (value: string) => (type.value = value);
const removeReaction = () => (type.value = "");

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

// image stuff
const isCensored = ref(true);
const toggleCensor = () => (isCensored.value = !isCensored.value);
</script>

<template>
  <div class="relative">
    <ReactionBar
      @dismissReaction="dismissReaction"
      @setType="setType"
      :type="type"
      :x="x"
      :y="y"
      :isReacting="isReacting"
    />
    <div class="w-full relative group/imagecard">
      <Reaction :type="type" @removeReaction="removeReaction" />
      <div
        @dblclick="showReaction"
        ref="card"
        class="w-full h-full rounded-3xl overflow-hidden relative"
      >
        <div
          class="div absolute w-full h-full z-10 backdrop-blur-3xl"
          :class="isCensored ? 'opacity-1' : 'opacity-0'"
        ></div>
        <img
          src="https://i.pinimg.com/564x/ff/1c/e3/ff1ce3303546bf602bd09b884c07773a.jpg"
          class="w-full object-cover"
          alt=""
        />
      </div>
      <button
        @click="toggleCensor"
        class="absolute bottom-4 right-4 bg-black z-[20] size-8 grid place-items-center rounded-full opacity-0 group-hover/imagecard:opacity-[1] transition-all duration-200"
      >
        <Eye v-if="isCensored" class="stroke-white" :size="16" />
        <EyeOff v-else :size="16" class="stroke-white" />
      </button>
    </div>
  </div>
</template>

<style></style>
