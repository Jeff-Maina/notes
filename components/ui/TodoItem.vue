<script setup lang="ts">
import { Pencil, Check, Trash, X } from "lucide-vue-next";

const props = defineProps({
  task: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
  },
  isEditingAnyTask: {
    type: Boolean,
  },
});

const isItemComplete = ref(props.isCompleted);
const completeTask = () => {
  isItemComplete.value = !isItemComplete.value;
};

const currentTodo = ref(props.task);
const isEditingTodo = ref(false);
const editTodo = () => {
  isEditingTodo.value = true;
};

const dismissEdit = () => {
  isEditingTodo.value = false;
};
const cancelEdit = () => {
  currentTodo.value = props.task;
  isEditingTodo.value = false;
};

</script>

<template>
  <div class="flex gap-2">
    <button
      @click="completeTask"
      class="md:size-5 shrink-0 border-2 rounded-lg translate-y-1 grid place-items-center"
      :class="
        isItemComplete
          ? 'border-2 border-black text-white bg-black'
          : 'border-2 border-neutral-400 hover:text-neutral-400 text-white'
      "
    >
      <!-- <div
        class="w-full h-full bg-black rounded-full transition-all duration-200"
        :class="isItemComplete ? 'scale-1' : 'scale-0'"
      ></div> -->
      <Check :size="14" stroke-width="3" />
    </button>
    <div
      class="flex flex-col gap-1 group/todo_item md:text-lg font-light w-full"
    >
      <p
        v-if="!isEditingTodo"
        class="md:text-lg font-light relative"
        :class="
          isItemComplete
            ? 'line-through decoration-2 decoration-black text-neutral-700'
            : 'text-neutral-900'
        "
      >
        {{ currentTodo }}
      </p>
      <textarea
        v-else
        type="text"
        class="w-full min-h-min resize-none border border-neutral-500 outline-none"
        v-model="currentTodo"
      ></textarea>
      <div v-if="!isEditingTodo" class="flex gap-1">
        <button
          @click="[editTodo(), $emit('toggleEditingAnyTask')]"
          class="opacity-0 size-6 bg-neutral-200 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-400 hover:text-black"
        >
          <Pencil :size="10" stroke-width="3" class="shrink-0" />
        </button>
        <button
          class="opacity-0 size-6 bg-neutral-200 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-400 hover:text-black"
        >
          <Trash :size="10" stroke-width="3" class="shrink-0" />
        </button>
      </div>
      <div v-else class="flex gap-1" :class="isEditingAnyTask ? 'ml-auto' : ''">
        <button
          @click="dismissEdit"
          class="opacity- size-6 bg-green-400 hover:bg-green-500 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-600 hover:text-black"
        >
          <Check :size="13" stroke-width="3" class="shrink-0 text-green-900" />
        </button>
        <button
          @click="cancelEdit"
          class="opacity- size-6 bg-red-300 hover:bg-red-400 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-600 hover:text-black"
        >
          <X :size="13" stroke-width="3" class="shrink-0 text-red-900" />
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
