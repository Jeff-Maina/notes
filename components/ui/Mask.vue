<script setup lang="ts">
import { boolean } from "yup";

const props = defineProps({
  isMaskActive: boolean,
});
</script>

<template>
  <Transition name="fade">
    <div @click="[$emit('toggleMask')]" v-if="isMaskActive" class="mask"></div>
  </Transition>
</template>

<style></style>
