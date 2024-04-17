<script setup lang="ts">
const props = defineProps({
  type: String,
});
</script>

<template>
  <div
    class="absolute -top-3 -left-3 size-10 bg-white grid place-items-center border border-neutral-300 rounded-full text-lg"
  >
    <p v-if="type == 'heart'" class="leading-none translate-y-[2px]">❤️</p>
    <p v-if="type == 'star'" class="leading-none translate-y-[1px]">⭐</p>
    <p v-if="type == 'pin'">📌</p>
    <p v-if="type == 'idea'">💡</p>
    <p v-if="type == 'target'">🎯</p>
    <p v-if="type == 'hot'">🔥</p>
  </div>
</template>

<style></style>

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
