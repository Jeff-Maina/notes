<script setup lang="ts">
import { Check, Maximize2, StickyNote, Trash } from "lucide-vue-next";
import { Pencil } from "lucide-vue-next";

type Todos = {
  todo: string;
  completed: boolean;
};

const props = defineProps({
  taskTitle: {
    type: String,
  },
  todos: {
    type: Object as () => Todos[],
  },
});

const webDevelopmentTasks = [
  { task: "Create wireframes for website layout", isCompleted: false },
  { task: "Design mockups using Figma or Adobe XD", isCompleted: false },
  {
    task: "Set up project environment using Node.js and npm",
    isCompleted: false,
  },
  {
    task: "Implement responsive design with CSS media queries",
    isCompleted: false,
  },
  { task: "Build website layout using HTML and CSS", isCompleted: false },
  {
    task: "Add interactivity with JavaScript or a JavaScript framework (e.g., React, Vue.js)",
    isCompleted: false,
  },
  {
    task: "Optimize website performance (e.g., image compression, lazy loading)",
    isCompleted: false,
  },
  {
    task: "Test website compatibility across different browsers and devices",
    isCompleted: false,
  },
  {
    task: "Deploy website to hosting service (e.g., Netlify, Vercel)",
    isCompleted: false,
  },
  {
    task: "Set up continuous integration/continuous deployment (CI/CD) pipeline",
    isCompleted: false,
  },
  // Add more tasks as needed
];

const arrTodos = ref(props.todos);

// is editing any card;
const isEditingAnyTask = ref(false);
const toggleEditingAnyTask = () =>
  (isEditingAnyTask.value = !isEditingAnyTask.value);

// TITLE LOGIC
const currentTitle = ref(props.taskTitle);
const isEditingTitle = ref(false);
const editTitle = () => (isEditingTitle.value = true);
const dismissEditTitle = () => (isEditingTitle.value = false);

const incompleteTasks = arrTodos.value?.filter(
  (t) => t.completed === false
).length;
const allTasks = arrTodos.value?.length;
</script>

<template>
  <div class="relative">
    <div
      ref="card"
      class="w-full border border-stone-300 rounded-3xl bg-stone-100"
    >
      <header class="p-5 flex flex-col gap-1 border-b border-stone-200">
        <p class="font-medium text-neutral-500 text">10/7/2020</p>
        <div class="flex gap-3 items-center group/title">
          <p
            v-if="!isEditingTitle"
            class="md:text-2xl font-semibold tracking-tight truncate"
          >
            {{ currentTitle }}
          </p>
          <input
            type="text"
            v-else
            name=""
            v-model="currentTitle"
            class="w-full resize-none h-10 outline-none border border-neutral-300 md:text-2xl font-semibold tracking-tight"
          />
          <button
            v-if="!isEditingTitle"
            @click="editTitle"
            class="size-7 opacity-0 group-hover/title:opacity-[1] grid place-items-center text-neutral-600 hover:text-black rounded-full"
          >
            <Pencil :size="14" class="" />
          </button>
          <button
            v-else
            @click="dismissEditTitle"
            class="size-7 min-w-7 grid place-items-center text-neutral-600 hover:text-black rounded-full"
            :class="isEditingTitle ? 'bg-neutral-200' : ''"
          >
            <Check :size="14" stroke-width="3" class="" />
          </button>
        </div>
        <div class="text-neutral-500">
          <p>Last updated: <span class="text-neutral-800">10/7/2024</span></p>
        </div>
      </header>
      <div class="p-5 flex flex-col pb-2">
        <div v-for="(task, index) in arrTodos" :key="index">
          <UiTodoItem
            :isEditingAnyTask="isEditingAnyTask"
            @toggleEditingAnyTask="toggleEditingAnyTask"
            :task="task.todo"
            :isCompleted="task.completed"
          />
        </div>
      </div>
      <div
        class="p-5 border-t border-stone-200 flex items-center justify-between"
      >
        <p class="md:text-lg font-semibold tracking-wider">
          {{ incompleteTasks }}/{{ allTasks }}
        </p>
        <div class="flex gap-4">
          <button class="text-neutral-500 hover:text-neutral-800 transition-all duration-100"><StickyNote :size="16" /></button>
          <button class="text-neutral-500 hover:text-neutral-800 transition-all duration-100"><Trash :size="16" /></button>

        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
