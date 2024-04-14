<script setup lang="ts">

const props = defineProps({
  isMaskActive: {
    type: Boolean
  },
});

// defining emits;
const emits = defineEmits(['toggleMask'])
</script>

<template>
  <Transition name="fade">
    <div @click="[$emit('toggleMask')]" v-if="isMaskActive" class="mask"></div>
  </Transition>
</template>

<style></style>
