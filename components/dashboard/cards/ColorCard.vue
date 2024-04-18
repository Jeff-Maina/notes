<script setup lang="ts">
import { Toaster, toast } from "vue-sonner";
import { Clipboard } from "lucide-vue-next";
import { MagicString } from "vue/compiler-sfc";

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

const hasCopiedColor = ref(false);

const copyColor = () => {
  hasCopiedColor.value = true;
  toast.success("Color copied");
  setTimeout(() => {
    hasCopiedColor.value = false;
  }, 2000);
};
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
    <div
      @dblclick="showReaction"
      ref="card"
      class="w-full aspect-video bg-pink-400 rounded-3xl p-5 flex items-end group/colorcard cursor-pointer z-20"
    >
      <Reaction :type="type" @removeReaction="removeReaction" />
      <p
        @click="copyColor"
        class="text-xl select-none text-pink-900 translate-y-1 opacity-0 group-hover/colorcard:translate-y-0 group-hover/colorcard:opacity-[1] transition-all duration-300 font-semibold"
      >
        {{ !hasCopiedColor ? "#434355" : "COPIED" }}
      </p>
    </div>
  </div>

  <Toaster
    :toastOptions="{
      style: {
        background: 'black',
        borderRadius: '90px',
        border: '1px solid #353535',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '11rem',
        fontSize: '1rem',
      },
      class: 'toaster',
    }"
    position="bottom-center"
  />
</template>

<style>
.toastyy {
  border-radius: 50% !important;
  background: #353535;
}
</style>
