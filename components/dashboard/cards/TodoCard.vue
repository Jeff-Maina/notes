<script setup lang="ts">
import { Check, Maximize2 } from "lucide-vue-next";
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
      class="w-full border border-neutral-300/60 rounded-3xl"
    >
      <Reaction :type="type" @removeReaction="removeReaction" />
      <header class="p-5 flex flex-col gap-1 border-b">
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
        class="p-5 border-t border-neutral-200 flex items-center justify-between"
      >
        <p class="md:text-lg font-semibold tracking-wider">
          {{ incompleteTasks }}/{{ allTasks }}
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
