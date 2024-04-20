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

const isItemComplete = ref(false);
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
  <div class="flex gap-3">
    <button
      @click="completeTask"
      class="size-[14px] shrink-0 border-2 rounded-full translate-y-2"
      :class="
        isItemComplete
          ? 'border-2 border-orange-500'
          : 'border-2 border-neutral-400'
      "
    >
      <!-- <div
        class="w-full h-full bg-black rounded-full transition-all duration-200"
        :class="isItemComplete ? 'scale-1' : 'scale-0'"
      ></div> -->
    </button>
    <div
      class="flex flex-col gap-1 group/todo_item md:text-lg font-light w-full"
    >
      <p
        v-if="!isEditingTodo"
        class="md:text-lg font-light relative"
        :class="
          isItemComplete
            ? 'line-through decoration-2 decoration-orange-500 text-neutral-700'
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
          class="opacity-0 size-6 bg-neutral-200 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-600 hover:text-black"
        >
          <Pencil :size="10" stroke-width="3" class="shrink-0" />
        </button>
        <button
          class="opacity-0 size-6 bg-neutral-200 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-600  hover:bg-red-300 hover:text-red-700"
        >
          <Trash :size="10" stroke-width="3" class="shrink-0" />
        </button>
      </div>
      <div v-else class="flex gap-1">
        <button
          @click="dismissEdit"
          class="opacity- size-6 bg-green-200 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-600 hover:text-black"
        >
          <Check :size="10" stroke-width="3" class="shrink-0 text-green-600" />
        </button>
        <button
          @click="cancelEdit"
          class="opacity- size-6 bg-red-200 rounded-full grid place-items-center group-hover/todo_item:opacity-[1] text-neutral-600 hover:text-black"
        >
          <X :size="10" stroke-width="3" class="shrink-0 text-red-600" />
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
