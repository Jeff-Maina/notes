<script setup lang="ts">
import { Maximize2 } from "lucide-vue-next";

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
        <p class="md:text-2xl font-semibold tracking-tight">
          Things i am supposed to build
        </p>
        <div></div>
      </header>
      <div class="p-5 flex flex-col">
        <div v-for="(task, index) in webDevelopmentTasks" :key="index">
          <UiTodoItem
            :isEditingAnyTask="isEditingAnyTask"
            @toggleEditingAnyTask="toggleEditingAnyTask"
            :task="task.task"
          />
        </div>
      </div>
      <div
        class="p-5 border-t border-neutral-200 flex items-center justify-between"
      >
        <p class="md:text-lg font-semibold tracking-wider">2/4</p>
        <!-- <div>
          <Maximize2 :size="18" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<style></style>
