<script setup lang="ts">
import { Heart } from "lucide-vue-next";
const props = defineProps({
  x: {
    type: Number || undefined,
  },
  y: {
    type: Number || undefined,
  },
  isReacting: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="absolute bg-white border border-neutral-300/70 flex rounded-full overflow-hidden z-[9999999] reaction_div"
    :class="isReacting ? 'scale-1 opacity-1' : 'scale-0 opacity-0'"
    :style="{
      top: y !== undefined ? y - 50 + 'px' : 0,
      left: x !== undefined ? x - 120 + 'px' : 0,
    }"
  >
    <button
      @click="[$emit('setType', 'heart'), $emit('dismissReaction')]"
      class="size-12 text-xl grid place-items-center hover:bg-neutral-100"
    >
      <p class="">
        <Heart :size="20" class="stroke-red-500 fill-red-500" />
      </p></button
    ><button
      @click="[$emit('setType', 'star'), $emit('dismissReaction')]"
      class="size-12 text-xl grid place-items-center hover:bg-neutral-100"
    >
      <p>⭐</p></button
    ><button
      @click="[$emit('setType', 'pin'), $emit('dismissReaction')]"
      class="size-12 text-xl grid place-items-center hover:bg-neutral-100"
    >
      <p>📌</p></button
    ><button
      @click="[$emit('setType', 'idea'), $emit('dismissReaction')]"
      class="size-12 text-xl grid place-items-center hover:bg-neutral-100"
    >
      <p>💡</p></button
    ><button
      @click="[$emit('setType', 'target'), $emit('dismissReaction')]"
      class="size-12 text-xl grid place-items-center hover:bg-neutral-100"
    >
      <p>🎯</p></button
    ><button
      @click="[$emit('setType', 'hot'), $emit('dismissReaction')]"
      class="size-12 text-xl grid place-items-center hover:bg-neutral-100"
    >
      <p>🔥</p>
    </button>
  </div>

  <!-- mask -->
  <div
    v-if="isReacting"
    @click="$emit('dismissReaction')"
    class="fixed top-0 left-0 w-full h-screen z-[9998]"
  ></div>
</template>

<style>
.reaction_div {
  transition: top 0s, left 0s, opacity 0s linear, scale 0s linear;
}
</style>

<!-- reactions -->

<!-- ⭐ Star: Indicates importance, significance, or priority. Users can "star" a
note to mark it as important or noteworthy. ❤️ Heart: Represents affection,
appreciation, or liking. Users can "heart" a note to express their emotional
connection or fondness for its content. 🔔 Bell: Signifies notifications or
reminders. Users can "bell" a note to set a reminder or receive alerts for
updates related to it. 📌 Pushpin: Indicates pinning or bookmarking. Users can
"pin" a note to keep it easily accessible or highlight it for future reference.
💡 Lightbulb: Represents insights or ideas. Users can "lightbulb" a note to
signify that it contains valuable insights or creative ideas. 🚀 Rocket:
Symbolizes progress or success. Users can "rocket" a note to indicate that it's
associated with a successful outcome or significant progress. 🎉 Confetti:
Represents celebration or achievement. Users can "confetti" a note to mark
milestones or moments of accomplishment. 🎯 Target: Signifies goals or
objectives. Users can "target" a note to indicate that it's related to specific
goals or targets. 🔥 -->
